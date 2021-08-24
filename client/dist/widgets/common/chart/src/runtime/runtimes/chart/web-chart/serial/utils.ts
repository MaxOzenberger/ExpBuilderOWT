import { React, ImmutableArray, DataRecord, StatisticType, Immutable, ImmutableObject, lodash, IntlShape, useIntl, DataSource } from 'jimu-core'
import { hooks } from 'jimu-ui'
import { normalizeString, WebChartDataItem, WebChartDataItemValue, WebChartSortOrderKinds } from 'jimu-ui/advanced/chart'
import { CategoryType, IWebChart, WebChartSeries } from '../../../../../config'
import { OutputDsObjectField, OutStatisticFieldNameSplit } from '../../../../../constants'
import {
  generateOutStatisticName,
  getCategoryField,
  getCategoryInfo,
  getCategoryType,
  getFieldSchema,
  getNumericFields,
  getOrderByFields,
  getPageSize,
  getSplitByField,
  getSplitByValue,
  getSplitByValues,
  getStatisticType,
  uniqueArray
} from '../../../../../utils/common'
import { createByGroupSplitSerie, isValidSerialSeries, parseOrderByField } from '../../../../../utils/common/serial'

/**
 * Get the corresponding records according to the data selected by chart
 */
export const getRecordsByChartselectedDataItems = (props: {
  categoryType: CategoryType
  selectedDataItems: WebChartDataItem[]
  records: DataRecord[]
  x: string
  y: string
  xFormattedValueMap: Map<string, any>
  xFieldAliasMap: Map<string, string>
}): DataRecord[] => {
  const {
    categoryType,
    selectedDataItems,
    records,
    x,
    y,
    xFormattedValueMap,
    xFieldAliasMap,
  } = props

  let attributes

  if (categoryType === CategoryType.ByField) {
    attributes = selectedDataItems?.map((data) => {
      const xAlias = data[x] as string
      const xField = xFieldAliasMap.get(xAlias)
      const value = data[y]
      return {[xField]: value}
    })
  } else {
    attributes = selectedDataItems?.map((data) => {
      const attribute = { ...data } as any
      const xFormattedValue = data[x] as string
      const xFormattedValueMapKey = `${x}-${xFormattedValue}`
      const xValue = xFormattedValueMap.get(xFormattedValueMapKey)
      attribute[x] = xValue ?? xFormattedValue
      return attribute
    })
  }

  const selectedRecords = getRecords(records, attributes)

  return selectedRecords
}

/**
 * Convert records to chart data, and keep a mapping of `x` field before and after conversion
 * @param records
 * @param x
 * @param intl
 */
export const mapRecordsToFormattedData = (records: DataRecord[], x: string, intl: IntlShape): [any[], Map<string, any>] => {
  const chartData = []

  //Create a mapping for the value of `x` and the formatted value of `x`
  const xFormattedValueMap = new Map()
  records?.forEach(record => {
    const oData = record.getData()
    const data = { ...oData }
    //Now only formatted the value of x
    if (x && typeof data[x] !== 'undefined') {
      const xValue = record.getFieldValue(x)
      const xFormattedValue = record.getFormattedFieldValue(x, intl)
      if (xFormattedValue !== xValue) {
        data[x] = xFormattedValue
        const xFormattedValueMapKey = `${x}-${xFormattedValue}`
        xFormattedValueMap.set(xFormattedValueMapKey, xValue)
      }
    }
    chartData.push(data)
  })
  return [chartData, xFormattedValueMap]
}

/**
 * In order for the series to know which data is to used for which series,
 * we should replace the default statistic field name by its value as defined in the series(serie.y)
 */
export const useParseData = (
  records: DataRecord[],
  series: ImmutableArray<WebChartSeries>,
  dataSourceId: string
): [WebChartDataItem[], Map<string, any>, Map<string, string>] => {
  const intl = useIntl()
  const categoryType = getCategoryType(series)
  const categoryField = getCategoryField(series)
  const orderByFields = getOrderByFields(series)
  const splitByField = getSplitByField(series?.[0])

  const [data, xFormattedValueMap] = React.useMemo(() => mapRecordsToFormattedData(records, categoryField, intl), [categoryField, intl, records])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [processedData, xFieldAliasMap] = React.useMemo(() => mapFormattedDataToChartData(data, series, dataSourceId), [data, dataSourceId])

  React.useMemo(() => {
    if (splitByField || categoryType === CategoryType.ByField) {
      sortWebChartData(processedData, orderByFields)
    }
  }, [categoryType, splitByField, processedData, orderByFields])

  return [processedData, xFormattedValueMap, xFieldAliasMap]
}

/**
 * Returns serie.y according to the value of split field
 * @param series
 * @param splitFieldValue The field value from where: where: "splitField = 'splitFieldValue'"
 */
export const getSerieYBySplitValue = (
  series: ImmutableArray<WebChartSeries>,
  splitFieldValue: WebChartDataItemValue
): string => {
  return series.find(serie => {
    const splitByValue = getSplitByValue(serie as any)
    return splitByValue === `${splitFieldValue as string}`
  })?.y
}

/**
 * In order for the series to know which data is to used in the global chart array (through valueY), need to convert the data
 */
export const mapFormattedDataToChartData = (data: WebChartDataItem[], series: ImmutableArray<WebChartSeries>, dataSourceId: string): [WebChartDataItem[], Map<string, string>] => {
  const [categoryType, splitedByValues] = getCategoryInfo(series?.[0]?.query)

  //Create a mapping for the field name of `x` and the field alias  of `x`
  const xFieldAliasMap = new Map<string, string>()

  let processedData = data
  if (categoryType === CategoryType.ByGroup && splitedByValues) {
    const _processedData = mapToSplitByValueData(data, series)
    // If a split-by field is defined, we need to regroup the data per split-by value
    processedData = groupData(_processedData, series?.[0]?.x)
  } else if (categoryType === CategoryType.ByField) {
    processedData = mapToByFieldData(data, series, dataSourceId, xFieldAliasMap)
  }
  return [processedData, xFieldAliasMap]
}

/**
 * Function grouping a dataset over a x field
 * @param processedData
 * @param x
 */
export const groupData = (processedData: WebChartDataItem[], x: string): WebChartDataItem[] => {
  if (!x) return processedData

  const groupedProcessedData: WebChartDataItem[] = []

  //Merging data of the same `x`
  processedData.forEach((item) => {
    const exist = groupedProcessedData.find(e => e[x] === item[x])
    const cloneItem = { ...item }
    if (exist) {
      Object.entries(cloneItem).forEach(([name, value]) => {
        if (exist[name] == null) {
          exist[name] = value
        }
      })
    } else {
      groupedProcessedData.push(cloneItem)
    }
  })

  return groupedProcessedData
}

/**
 * Get the field name used to record statistics from the result data of query
 */
export const getOutStatName = (item: { [x: string]: any }, x: string, splitByField: string): string => {
  let outStatName = ''
  if (!item || typeof item !== 'object') return outStatName
  if (!x || !splitByField) return outStatName
  Object.keys((item)).some((name) => {
    if (name !== x && name !== splitByField && name !== OutputDsObjectField) {
      outStatName = name
      return true
    }
  })
  return outStatName
}

/**
 * In case of multiple series using the where clause（ has split by field ）, we need to replace the default stat field name
 * by its value as defined in the config, in order for the series to know which data is to used (through valueY).
 * @param data
 * [{Beat__Primary_Ty__ASSAULT__sum: 2079, Year: 2010, Primary_Ty: "ASSAULT"},
 * {Beat__Primary_Ty__ASSAULT__sum: 13524, Year: 2010, Primary_Ty: "BATTERY"}]
 * @param series
 * [{x: "Year", y: "Beat__Primary_Ty__ASSAULT__sum", query: {where: "Primary_Ty='ASSAULT'"}},
 * [{x: "Year", y: "Beat__Primary_Ty__ROBBERY__sum", query: {where: "Primary_Ty='ROBBERY'"}}]
 *
 * @returns e.g. [{Beat__Primary_Ty__ASSAULT__sum: 2079, Year: 2010, Beat__Primary_Ty__ROBBERY__sum: 13524}]
 */
export const mapToSplitByValueData = (data: WebChartDataItem[], series: ImmutableArray<WebChartSeries>) => {
  const splitByField = getSplitByField(series?.[0])
  //The key used to get statistics in the returned result
  const filedToGetStatValue = getOutStatName(data?.[0], series?.[0]?.x, splitByField)
  if (!filedToGetStatValue) return data

  const processedData = data.map((_attributes) => {
    const attributes = { ..._attributes }

    // getting the stat field name as defined in the config
    const splitByValue = normalizeString({ value: attributes[splitByField]?.toString() ?? '' })

    const seriesY = getSerieYBySplitValue(series, splitByValue)
    if (!seriesY) {
      return null
    }
    /* "renaming" the property name. statField can be undefined when the chart doesn't use all the unique categories for its series */
    if (typeof attributes[filedToGetStatValue] !== 'undefined' && seriesY !== filedToGetStatValue) {
      attributes[seriesY] = attributes[filedToGetStatValue]
      // deleting the default property
      delete attributes[filedToGetStatValue]
    }
    return attributes
  })
  return processedData
}


/**
 * Transforming data into web chart data for `ByField` mode
 *
 * In case of non-aggregated type bar chart, we rename the category names by adding a suffix, in order
 * to avoid multiple identical values (they are switched back to their original value when displayed).
 */
export const mapToByFieldData = (data: WebChartDataItem[], series: ImmutableArray<WebChartSeries>, dataSourceId: string, xFieldAliasMap: Map<string, string>): WebChartDataItem[] => {
  const categoryType = getCategoryType(series)
  const numericFields = getNumericFields(series)
  const categoryField = getCategoryField(series)
  const firstSerieY = series?.[0]?.y

  if (categoryType === CategoryType.ByField) {
    data = numericFields?.asMutable()?.map(field => {
      const alias = getFieldSchema(field, dataSourceId)?.alias ?? field
      if(alias !== field) {
        xFieldAliasMap.set(alias, field)
      }
      return {
        [categoryField]: alias,
        [firstSerieY]: data?.[0]?.[field] ?? 0
      }
    })
  }
  return data
}

export const handleSeries = (series: ImmutableArray<WebChartSeries>, splitFieldValues: ImmutableArray<string>) => {
  const validSeries = isValidSerialSeries(series)
  if (!validSeries) return Immutable([])
  return splitSeries(series, splitFieldValues)
}

/**
 * When `split field` exists, we need to generate series dynamically according to the unique values of `split by field`
 * @param propSeries
 * @param splitValues
 */
export const splitSeries = (
  propSeries: ImmutableArray<WebChartSeries>,
  splitValues: ImmutableArray<string>
): ImmutableArray<WebChartSeries> => {
  const splitByField = getSplitByField(propSeries?.[0])
  if (splitByField === '' || splitValues == null || splitValues.length <= 0) return propSeries

  const prevSplitValues = getSplitByValues(propSeries)
  if (prevSplitValues == null) return propSeries

  const newSplitValues = splitValues.filter((value) => !prevSplitValues.includes(value))
  const deletedSplitValues = prevSplitValues.filter((value) => !splitValues.includes(value))

  if (newSplitValues.length > 0) {
    const firstSerie = propSeries?.[0]
    const categoryField = getCategoryField(propSeries)
    const numericField = getNumericFields(propSeries)?.[0]
    const statisticType = getStatisticType(propSeries)
    const orderByFields = getOrderByFields(propSeries)
    const pageSize = getPageSize(propSeries)

    const series = newSplitValues.map((splitByValue, idx) => {
      const index = propSeries.length + idx
      const serie = createByGroupSplitSerie({ categoryField, numericField, statisticType, orderByFields, pageSize, splitByField, splitByValue, index }, firstSerie, null)
      return serie as unknown as WebChartSeries
    })

    propSeries = propSeries.concat(series)
  } else if (deletedSplitValues.length > 0) {
    propSeries = propSeries.filter((serie) => {
      const splitValue = getSplitByValue(serie)
      return !deletedSplitValues.includes(splitValue)
    })
  }

  return propSeries
}

/**
 * Check-
 *   whether series to be re-generated
 *   whether webChart to be re-generated
 */
export const useWebChartVersion = (webChart: ImmutableObject<IWebChart>, numberOfSeries: number): number => {
  const [version, setVersion] = React.useState<number>(0)
  const title = webChart?.title
  const axes = webChart?.axes
  const series = webChart?.series
  const legend = webChart?.legend
  const footer = webChart?.footer

  hooks.useUpdateEffect(() => {
    setVersion(v => v + 1)
  }, [title, footer, legend, axes, numberOfSeries])

  const prevSeries = React.useRef<WebChartSeries[]>(null)
  hooks.useUpdateEffect(() => {
    let update = false

    const ret = (series?.map(serie => {
      return serie.without('query')
    }) as unknown) as ImmutableArray<WebChartSeries>

    const currentSeries = ret?.asMutable({ deep: true })

    if (currentSeries != null) {
      update = !lodash.isDeepEqual(currentSeries, prevSeries.current)
    }

    prevSeries.current = currentSeries

    if (update) {
      setVersion(v => v + 1)
    }
  }, [series])

  return version
}

export const getSplitedByValues = (splitByField: string, records: DataRecord[]): ImmutableArray<string> => {
  const splitValues = []
  records.forEach((record) => {
    const data = record.getData()
    const splitValue = data?.[splitByField]
    if (splitValue != null && !splitValues.includes(splitValue)) {
      splitValues.push(splitValue)
    }
  })
  return Immutable(splitValues)
}

/**
 * Check whether one attribute is completely contained by another
 * @param target
 * @param parent
 */
const whetherAttributeContains = (target: { [key: string]: string }, parent: { [key: string]: string }): boolean => {
  if (target == null || target == null) return false
  return Object.entries(target).every(([key, value]) => {
    return parent[key] === value
  })
}

/**
 * Get a record based on one feature attribute
 * @param records
 * @param attribute
 */
export const getRecord = (records: DataRecord[], attribute: { [key: string]: string }): DataRecord => {
  if (records == null || attribute == null) return null
  const record = records.find((item) => {
    const data = item.getData()
    return whetherAttributeContains(attribute, data)
  })
  return record
}

/**
 * Get some records based on some feature attributes
 * @param records
 * @param attributes
 */
export const getRecords = (records: DataRecord[], attributes: { [key: string]: string }[]): DataRecord[] => {
  if (records == null || attributes == null) return null
  return attributes.map(attr => getRecord(records, attr))
}

/**
 * Get some records ids based on some feature attributes
 * @param records
 * @param attrs
 */
export const getRecordIds = (records: DataRecord[], attrs: { [key: string]: string }[]): string[] => {
  if (records == null || attrs == null) return null
  const ids = attrs.map(attr => getRecord(records, attr)?.getId()).filter(id => id != null)
  return uniqueArray(ids)
}

/**
 * Sorting an array WebChartDataItem following the orderByFields instructions.
 * @param props
 */
export function sortWebChartData(
  data: WebChartDataItem[],
  orderByFields: ImmutableArray<string>,
  forceAscendingOrder: boolean = false
): void {
  if (data == null || orderByFields == null) return
  data.sort(
    (dataItemA: WebChartDataItem, dataItemB: WebChartDataItem): number => {
      // Default sort decision = 0 (equal values)
      let sortDecision = 0

      // Using all the fields from orderByFields to proceed to the comparison
      for (let idx = 0; idx < orderByFields.length; idx += 1) {
        //`orderByField` must has `ASC` or `DESC` in it, e.g. 'field ASC', 'field name DESC'
        const [field, sortOrder] = parseOrderByField(orderByFields[idx])

        const descOrder: boolean = sortOrder === WebChartSortOrderKinds.Descending && !forceAscendingOrder
        /**
         * We set the sortDecision only if one of the values is greater than the other one.
         * Otherwise it continues to the next value in the `orderByFields` array.
         */
        const firstEntry = dataItemA[field]
        const secondEntry = dataItemB[field]

        // In case of string values, we perform a natural sort using the native `localeCompare`
        if (typeof firstEntry === 'string' && typeof secondEntry === 'string') {
          sortDecision = firstEntry.localeCompare(secondEntry, undefined, {
            numeric: true
          })
          if (descOrder) sortDecision *= -1
        } else if (firstEntry === undefined || firstEntry === null) {
          sortDecision = !descOrder ? 1 : -1
        } else if (secondEntry === undefined || secondEntry === null) {
          sortDecision = !descOrder ? -1 : 1
        } else if (firstEntry > secondEntry) {
          sortDecision = !descOrder ? 1 : -1
          break
        } else if (firstEntry < secondEntry) {
          sortDecision = !descOrder ? -1 : 1
          break
        }
      }

      return sortDecision
    }
  )
}

/**
 * Parsing information from outStatisticFieldName
 * `outStatisticFieldName` is generated by method `generateOutStatisticName` according to some rules, so some information can be parsed from it
 * @param outStatisticFieldName
 */
export const parseOutStatisticFieldName = (outStatisticFieldName: string): { numericField: string, splitByField?: string, splitByValue?: string, statisticType: StatisticType } => {
  if (!outStatisticFieldName || !outStatisticFieldName.includes(OutStatisticFieldNameSplit)) return
  const infos = outStatisticFieldName.split(OutStatisticFieldNameSplit)
  if (infos.length === 2) {
    const [numericField, statisticType] = infos
    return { numericField, statisticType: statisticType as StatisticType }
  } else if (infos.length === 4) {
    const [numericField, splitByField, splitByValue, statisticType] = infos
    return { numericField, splitByField, splitByValue, statisticType: statisticType as StatisticType }
  }
}

/**
 * Convert chart data to record attribute
 */
export const convertChartDataToRecordAttributes = (data: WebChartDataItem[], splitByField: string): { [key: string]: string }[] => {
  if (!splitByField) return data as { [key: string]: string }[]
  const attributes = data.map((item) => {
    const attribute = {}
    Object.entries(item).forEach(([key, value]) => {
      if (key.includes(splitByField)) {
        const { splitByValue } = parseOutStatisticFieldName(key)
        attribute[splitByField] = splitByValue
      } else {
        attribute[key] = value
      }
    })
    return attribute
  })
  return attributes
}

/**
 * Convert record attribute to chart data
 */
export const convertRecordAttributesToChartData = (attributes: { [key: string]: string }[], splitByField: string): WebChartDataItem[] => {
  if (!splitByField) return attributes as WebChartDataItem[]

  let data = attributes.map((attr) => {
    const item: { [x: string]: any } = {}
    Object.entries(attr).forEach(([key, value]) => {
      if (key.includes(splitByField, 1)) {
        const splitByValue = attr[splitByField]
        const { numericField, splitByField: _splitByField, statisticType } = parseOutStatisticFieldName(key)
        const outStatisticFieldName = generateOutStatisticName(numericField, statisticType, _splitByField, splitByValue)
        item[outStatisticFieldName] = value
      } else {
        item[key] = value
      }
    })
    return item
  })

  data = data.map(item => {
    if (item?.[OutputDsObjectField]) {
      delete item[OutputDsObjectField]
    }
    if (item?.[splitByField]) {
      delete item[splitByField]
    }
    return item
  })

  return data
}

export const getDataItem = (dataItem: WebChartDataItem, data: WebChartDataItem[]) => {
  if (!dataItem || typeof dataItem !== 'object') return

  return data.find((item) => {
    return Object.entries(dataItem).every(([key, value]) => {
      return item[key] === value
    })
  })
}

export const getPartialRecords = (records: { [x: string]: any }[], fields: string[] | ImmutableArray<string>) => {
  return records.map((record) => {
    const ret = {}
    fields.forEach((field) => {
      if (typeof record[field] !== 'undefined') {
        ret[field] = record[field]
      }
    })
    return ret
  })
}

/**
 * Get selected chart data
 * @param selectedIds
 * @param data
 * @param categoryField
 * @returns
 */
export const getSelectedData = (selectedIds: string[], data: WebChartDataItem[], categoryField: string): WebChartDataItem[] => {
  if (!selectedIds?.length || !data?.length) return []
  const selectedDataItems = data.filter((dataItem) => {
    const objectid = ((dataItem as any)?.[OutputDsObjectField] ?? '') + ''
    return selectedIds.includes(objectid)
  })
  const selectedData = getPartialRecords(selectedDataItems, [categoryField])
  return selectedData
}
/**
 * Get selected chart data with split field
 * @param selectedRecords
 * @param data
 * @param splitByField
 */
export const getSplitedSelectedData = (selectedRecords: DataRecord[], data: WebChartDataItem[], splitByField: string): WebChartDataItem[] => {
  if (!selectedRecords?.length || !data?.length || !splitByField) return []

  const attributes = selectedRecords?.map(record => record.getData()) ?? []
  const selectedData = convertRecordAttributesToChartData(attributes, splitByField)
  return selectedData
}

/**
 * Get selected chart data
 * @param dataSource
 * @param data
 * @param splitByField
 * @param categoryField
 */
export const getSelectedDataItems = (dataSource: DataSource, data: WebChartDataItem[], categoryField: string, splitByField?: string): WebChartDataItem[] => {
  if (!dataSource || !data?.length) return

  let selectedDataItems
  if (!splitByField) {
    const selectedRecordIds = dataSource.getSelectedRecordIds()
    selectedDataItems = getSelectedData(selectedRecordIds, data, categoryField)
  } else {
    const selectedRecords = dataSource.getSelectedRecords()
    selectedDataItems = getSplitedSelectedData(selectedRecords, data, splitByField)
  }
  return selectedDataItems
}
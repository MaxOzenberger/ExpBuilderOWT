import { ImmutableArray, Immutable, ImmutableObject, FeatureLayerQueryParams, DataSourceSchema, DataRecord, JimuFieldType, StatisticType } from 'jimu-core'
import { getSplitByField, getSplitByValue, WebChartBarChartSeries } from 'jimu-ui/advanced/chart'
import { CategoryType, WebChartSeries } from '../../../../config'
import { ByFieldSeriesX, ByFieldSeriesY, OutputDsObjectField, MaxSeries } from '../../../../constants'
import {
  getCategoryField,
  getNumericFields,
  getFieldSchema,
  generateOutStatisticName,
  getStatisticType,
  getFieldsSchema
} from '../../../../utils/common'
import { createByGroupSplitSerie, getByGroupNewSerieTemplate, isValidSerialSeries } from '../../../../utils/common/serial'
import { getFillSymbol } from '../../../../utils/default'

export interface SelectedOption {
  name: string
  value: string
}

export const ObjectIdSchema = {
  jimuName: OutputDsObjectField,
  alias: 'OBJECTID',
  type: JimuFieldType.Number,
  name: OutputDsObjectField
}

export const getInitSchema = (label: string = '') => {
  return {
    label,
    idField: OutputDsObjectField,
    fields: {
      [OutputDsObjectField]: ObjectIdSchema
    }
  } as unknown as DataSourceSchema
}

/**
 * When switching category type, generated a new series template
 * @param serie
 * @param categoryType
 */
export const getSeireTemplate = (serie: ImmutableObject<WebChartSeries>, categoryType: CategoryType): ImmutableObject<WebChartSeries> => {
  serie = serie.without('id', 'name', 'x', 'y')
  let query = null
  if (categoryType === CategoryType.ByFeature) {
    query = Immutable({
      outFields: []
    }) as ImmutableObject<FeatureLayerQueryParams>
  } else if (categoryType === CategoryType.ByGroup) {
    query = Immutable({
      groupByFieldsForStatistics: [],
      outStatistics: [{
        onStatisticField: '',
        outStatisticFieldName: '',
        statisticType: 'sum'
      }]
    }) as ImmutableObject<FeatureLayerQueryParams>
  } else if (categoryType === CategoryType.ByField) {
    query = Immutable({
      outStatistics: [{
        onStatisticField: '',
        outStatisticFieldName: '',
        statisticType: 'sum'
      }]
    }) as ImmutableObject<FeatureLayerQueryParams>
  }
  serie = serie.set('query', query)
  return serie
}

export const getSerialDataLabelsVisible = (
  series: ImmutableArray<WebChartBarChartSeries>
): boolean => {
  return series?.[0]?.dataLabels.visible ?? false
}

const getJimuFieldSchema = (field: string, dataSourceId: string, jimuName?: string) => {
  let schema = getFieldSchema(field, dataSourceId)
  jimuName = jimuName || field
  schema = schema.set('jimuName', jimuName).set('name', jimuName)
  schema = schema.set('originFields', [field])
  return schema
}

/**For by-group mode */

export const getByFroupSchema = (series: ImmutableArray<WebChartSeries>, dataSourceId: string): DataSourceSchema => {
  const valid = isValidSerialSeries(series)
  if (valid === false) return;

  const categoryField = getCategoryField(series);
  const where = series?.[0]?.query?.where;
  const splitByField = where != null ? getSplitByField(where) : ''
  const splitValue = where != null ? getSplitByValue({ where: series?.[0]?.query?.where }) : ''

  let fields = Immutable({
    [OutputDsObjectField]: ObjectIdSchema
  })

  const numericFields = getNumericFields(series)

  if (categoryField) {
    const schema = getJimuFieldSchema(categoryField, dataSourceId)
    fields = fields.set(categoryField, schema)
  }

  if (splitByField) {
    const splitByFieldSchema = getJimuFieldSchema(splitByField, dataSourceId)
    fields = fields.set(splitByField, splitByFieldSchema)

    const statisticType = getStatisticType(series)
    const numericField = numericFields?.[0]

    if (numericField != null) {
      const alias = generateOutStatisticName(numericField, statisticType)
      const jimuName = generateOutStatisticName(numericField, statisticType, splitByField, splitValue)
      let schema = getJimuFieldSchema(numericField, dataSourceId, jimuName)
      schema = schema.set('alias', alias)
      fields = fields.set(jimuName, schema)
    }
  } else {
    series.forEach((serie) => {
      const originField = serie.query.outStatistics[0].onStatisticField;
      const jimuName = serie.query.outStatistics[0].outStatisticFieldName;
      let schema = getJimuFieldSchema(originField, dataSourceId, jimuName)
      schema = schema.set('alias', jimuName)

      const statisticType = serie.query.outStatistics[0].statisticType;
      // defining formats for the schema of output data source https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder/issues/8902
      let format = schema.format
      if (statisticType === StatisticType.Count) {
        format = format || Immutable({})
        format = format.set('places', 0)
      } else if (statisticType === StatisticType.Avg) {
        if (typeof schema.format?.places === 'undefined') {
          format = format || Immutable({})
          format = format.set('places', 3)
        }
      }
      if (format) {
        schema = schema.set('format', format)
      }
      fields = fields.set(jimuName, schema)
    })
  }

  const schema = {
    idField: ObjectIdSchema.jimuName,
    fields: fields.asMutable({ deep: true })
  } as unknown as DataSourceSchema

  return schema
}

/**
 * Get numeric fields from query params
 * @param query
 */
export const getByGroupNumericOrderFields = (
  serie: ImmutableObject<WebChartSeries>
): ImmutableArray<SelectedOption> | undefined => {
  const { query, name } = serie
  return query?.outStatistics?.map(e => ({
    name: name,
    value: e.outStatisticFieldName
  }))
}

export const getByGroupOrderFields = (series: ImmutableArray<WebChartSeries>, dataSourceId: string): ImmutableArray<SelectedOption> => {
  const categoryField = getCategoryField(series)
  const numericFields = getNumericFields(series)

  if (!categoryField || !numericFields?.length) return Immutable([])

  let fields: ImmutableArray<SelectedOption> = Immutable([])

  if (categoryField !== '') {
    fields = fields.concat([{
      name: getFieldSchema(categoryField, dataSourceId)?.alias ?? categoryField,
      value: categoryField
    }])
  }

  const numericOrderFields = series?.reduce((acc: ImmutableArray<SelectedOption>, cur) => {
    return acc.concat(getByGroupNumericOrderFields(cur) ?? Immutable([]))
  }, Immutable([]))

  fields = fields.concat(numericOrderFields)

  return fields
}

export const getSplitFieldQuery = (splitByField: string): FeatureLayerQueryParams => {
  if (!splitByField) return null
  const query: FeatureLayerQueryParams & { returnDistinctValues: boolean } = {
    returnGeometry: false,
    outFields: [splitByField],
    orderByFields: [`${splitByField} ASC`],
    pageSize: MaxSeries,
    returnDistinctValues: true
  }
  return query
}

export const querySplitByValues = async (
  dataSource,
  splitByField: string
): Promise<ImmutableArray<string>> => {
  const query = getSplitFieldQuery(splitByField)

  let records: DataRecord[] = []

  try {
    const result = await dataSource.query(query)
    records = result?.records
  } catch (error) {
    console.error(error)
  }

  const splitFieldValues = Immutable(records?.map(r => r?.getData?.()?.[splitByField]) ?? []).slice(0, MaxSeries)
  // Split field values will be saved as string in the series
  return splitFieldValues.map(value => {
    if (typeof value === 'number') return `${value}`
    return value
  })
}

export const createByGroupSeries = ({ categoryField, statisticType, numericFields, orderByFields, pageSize }, firstSerie, templateSeries, dataSourceId) => {
  const series = numericFields.map((numericField, index) => {
    const y = generateOutStatisticName(numericField, statisticType)
    const name = getFieldSchema(numericField, dataSourceId)?.alias ?? numericField

    const template = getByGroupNewSerieTemplate(firstSerie, templateSeries[index], index)
    let serie = template.set('x', categoryField).set('y', y).set('name', name).set('id', y)

    serie = serie.setIn(['query', 'groupByFieldsForStatistics', '0'], categoryField)
    serie = serie.setIn(['query', 'outStatistics', '0', 'onStatisticField'], numericField)
    serie = serie.setIn(['query', 'outStatistics', '0', 'statisticType'], statisticType)
    serie = serie.setIn(['query', 'outStatistics', '0', 'outStatisticFieldName'], y)

    serie = serie.setIn(['query', 'orderByFields'], orderByFields)
    serie = serie.setIn(['query', 'pageSize'], pageSize)

    return serie
  })

  return series
}

export const createByGroupSlpitSeries = ({ categoryField, statisticType, numericFields, orderByFields, pageSize, splitByField, splitByValues }, firstSerie, templateSeries) => {
  const numericField = numericFields?.[0]
  const series = splitByValues.map((splitByValue, index) => {
    return createByGroupSplitSerie({ categoryField, numericField, statisticType, orderByFields, pageSize, splitByField, splitByValue, index }, firstSerie, templateSeries)
  })

  return series
}

/**For by-feature mode */

export const getByFeatureSchema = (series: ImmutableArray<WebChartSeries>, dataSourceId: string): DataSourceSchema => {
  const valid = isValidSerialSeries(series)
  if (valid === false) return;

  const categoryField = getCategoryField(series);
  const numericFields = getNumericFields(series)

  let fields = Immutable({
    [OutputDsObjectField]: ObjectIdSchema
  })

  const categoryFieldSchema = getJimuFieldSchema(categoryField, dataSourceId)
  fields = fields.set(categoryField, categoryFieldSchema)

  numericFields?.forEach((numericField) => {
    const schema = getJimuFieldSchema(numericField, dataSourceId)
    fields = fields.set(numericField, schema)
  })

  const schema = {
    idField: ObjectIdSchema.jimuName,
    fields: fields.asMutable({ deep: true })
  } as unknown as DataSourceSchema

  return schema
}

export const getByFeatureOrderFields = (dataSourceId: string): ImmutableArray<SelectedOption> => {
  if (!dataSourceId) return Immutable([])

  let fields: ImmutableArray<SelectedOption> = Immutable([])
  const fieldsSchema = getFieldsSchema(dataSourceId)
  fields = Immutable(Object.entries(fieldsSchema).map(([jimuName, schema]) => {
    return {
      name: schema?.alias ?? jimuName,
      value: jimuName
    }
  }))

  return fields
}

export const getByFeatureNewSerieTemplate = (
  firstSerie: ImmutableObject<WebChartSeries>,
  template: ImmutableObject<WebChartSeries>,
  index: number
): ImmutableObject<WebChartSeries> => {

  const fillSymbol = template?.fillSymbol ?? getFillSymbol({ useRampColor: { colorIndex: index }, outlineWidth: 0 })

  let serie = firstSerie
  // The default fill style is different for each series
  serie = serie.set('fillSymbol', fillSymbol)
  // Cleaning up the serie
  serie = serie.without('id', 'name', 'y')

  serie = serie.setIn(['query', 'outFields', '1'], '')

  return serie
}

export const createByFeatureSeries = ({ categoryField, numericFields, orderByFields, pageSize }, firstSerie, templateSeries, dataSourceId) => {
  const series = numericFields.map((numericField, index) => {
    const y = numericField
    const name = getFieldSchema(numericField, dataSourceId)?.alias ?? numericField

    const template = getByFeatureNewSerieTemplate(firstSerie, templateSeries[index], index)
    let serie = template.set('x', categoryField).set('y', y).set('name', name).set('id', y)

    serie = serie.setIn(['query', 'outFields'], [categoryField, numericField])
    serie = serie.setIn(['query', 'orderByFields'], orderByFields)
    serie = serie.setIn(['query', 'pageSize'], pageSize)

    return serie
  })

  return series
}

/**For by-field mode */

export const getByFieldSchema = (series: ImmutableArray<WebChartSeries>, dataSourceId: string): DataSourceSchema => {
  const valid = isValidSerialSeries(series)
  if (valid === false) return;

  let fields = Immutable({
    [OutputDsObjectField]: ObjectIdSchema
  })

  const outStatistics = series?.[0]?.query?.outStatistics
  outStatistics?.forEach((outStatistic) => {
    const originField = outStatistic.onStatisticField;
    const jimuName = outStatistic.outStatisticFieldName;
    const schema = getJimuFieldSchema(originField, dataSourceId, jimuName)
    //Fix issue https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder-Web-Extensions/issues/6422
    // schema = schema.set('alias', jimuName)
    fields = fields.set(jimuName, schema)
  })

  const schema = {
    idField: ObjectIdSchema.jimuName,
    fields: fields.asMutable({ deep: true })
  } as unknown as DataSourceSchema

  return schema
}

export const getByFieldOrderFields = (series: ImmutableArray<WebChartSeries>, translate): ImmutableArray<SelectedOption> => {
  const categoryField = getCategoryField(series)
  const serieY = series?.[0]?.y
  let fields: ImmutableArray<SelectedOption> = Immutable([])
  const xAxisLabel = translate('categoryAxis')
  const yAxisLabel = translate('valueAxis')

  fields = fields.concat(
    [{
      name: xAxisLabel,
      value: categoryField
    },
    {
      name: yAxisLabel,
      value: serieY
    }]
  )

  return fields
}

export const createByFieldSeries = ({ name, numericFields, statisticType, orderByFields }, templateSeries: ImmutableArray<WebChartSeries>) => {
  const x = ByFieldSeriesX
  const y = ByFieldSeriesY

  const outStatistics = numericFields.map(field => {
    return {
      onStatisticField: field,
      //Some aliases can cause requests to fail
      // outStatisticFieldName: getFieldSchema(field, dataSourceId)?.alias ?? field,
      outStatisticFieldName:field,
      statisticType
    }
  })
  const template = templateSeries[0]
  let serie = template.set('x', x).set('y', y).set('name', name).set('id', y)
  serie = serie.set('query', serie.query.without('groupByFieldsForStatistics'))
  serie = serie.setIn(['query', 'outStatistics'], outStatistics)

  serie = serie.setIn(['query', 'orderByFields'], orderByFields)

  const series = Immutable([serie]) as unknown as ImmutableArray<WebChartSeries>

  return series
}
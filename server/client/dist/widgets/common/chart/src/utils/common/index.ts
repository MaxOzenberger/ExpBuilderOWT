import {
  IMFieldSchema,
  DataSourceManager,
  IMFeatureLayerQueryParams,
  Immutable,
  ImmutableArray,
  StatisticType,
  ImmutableObject
} from 'jimu-core'
import { getSplitByValue as _getSplitByValue, getSplitByField as _getSplitByField, isAbsoluteTruthWhereClause } from 'jimu-ui/advanced/chart'
import { CategoryType, WebChartSeries } from '../../config'
import { OutStatisticFieldNameSplit } from '../../constants'

const cacheObjectIdField = {}
/**
 * get objectid
 * @param dataSourceId
 */
export const getObjectIdField = (dataSourceId: string): string | undefined => {
  if (cacheObjectIdField[dataSourceId] != null) return cacheObjectIdField[dataSourceId]
  const ds = DataSourceManager.getInstance().getDataSource(dataSourceId)
  if (ds == null) {
    console.error(`Invalid data source id: ${dataSourceId}`)
    return
  }
  const objectId = ds.getIdField()
  cacheObjectIdField[dataSourceId] = objectId
  return objectId
}

const cacheFieldSchema = {}
/**
 * Get the schema of a single field
 * @param jimuFieldName
 * @param dataSourceId
 */
export const getFieldSchema = (
  jimuFieldName: string,
  dataSourceId: string
): IMFieldSchema | undefined => {
  if (cacheFieldSchema[jimuFieldName] != null) return cacheFieldSchema[jimuFieldName]
  const ds = DataSourceManager.getInstance().getDataSource(dataSourceId)
  const dsSchema = ds?.getSchema()
  const fieldSchema = dsSchema?.fields?.[jimuFieldName]
  cacheFieldSchema[jimuFieldName] = fieldSchema
  return fieldSchema
}

const cacheFieldsSchema = {}

/**
 * Get all the field schema in a data source
 * @param dataSourceId
 */
export const getFieldsSchema = (
  dataSourceId: string
): { [jimuName: string]: IMFieldSchema } | undefined => {
  if (cacheFieldsSchema[dataSourceId] != null) return cacheFieldsSchema[dataSourceId]
  const ds = DataSourceManager.getInstance().getDataSource(dataSourceId)
  const dsSchema = ds?.getSchema()
  const fieldsSchema = dsSchema?.fields
  cacheFieldsSchema[dataSourceId] = fieldsSchema
  return fieldsSchema
}

/**
 * Generate `outStatisticFieldName` for `ByGroup` mode
 * @param field
 * @param index
 */
export const generateOutStatisticName = (field: string, statisticType: StatisticType, splitField?: string, splitValue?: string): string => {
  if (splitField && splitValue) {
    return `${field}${OutStatisticFieldNameSplit}${splitField}${OutStatisticFieldNameSplit}${splitValue}${OutStatisticFieldNameSplit}${statisticType}`
  }
  return `${field}${OutStatisticFieldNameSplit}${statisticType}`
}

/**
 * Get category type from query params
 * @param query
 */
export const getCategoryTypeFromQueryParams = (
  query: IMFeatureLayerQueryParams
): CategoryType => {
  if (query?.groupByFieldsForStatistics != null) {
    return CategoryType.ByGroup
  } else if (query?.outStatistics != null) {
    return CategoryType.ByField
  } else if (query?.outFields != null) {
    return CategoryType.ByFeature
  }
}

/**
 * Get category type and check whether using a specific field as a split-by
 * @param query
 */
export const getCategoryInfo = (query: IMFeatureLayerQueryParams): [CategoryType, boolean] => {
  let categoryType: CategoryType
  let splitedByValues = false
  if (query?.groupByFieldsForStatistics != null) {
    categoryType = CategoryType.ByGroup
    const whereClause = query?.where
    if (isAbsoluteTruthWhereClause(whereClause) === false) {
      splitedByValues = true
    }
  } else if (query?.outStatistics != null) {
    categoryType = CategoryType.ByField
  } else if (query?.outFields != null) {
    categoryType = CategoryType.ByFeature
  }
  return [categoryType, splitedByValues]
}

/**
 * Get category type from web chart series
 * @param series
 */
export const getCategoryType = (
  series: ImmutableArray<WebChartSeries>
): CategoryType | undefined => {
  return getCategoryTypeFromQueryParams(series?.[0]?.query)
}

/**
 * Get numeric fields from query params
 * @param query
 */
export const getNumericFieldsFromQueryParams = (query: IMFeatureLayerQueryParams): ImmutableArray<string> => {
  const categoryType = getCategoryTypeFromQueryParams(query)
  let numericFields: ImmutableArray<string> = Immutable([])
  switch (categoryType) {
    case CategoryType.ByFeature:
      numericFields = query?.outFields?.slice(1)
      break
    case CategoryType.ByGroup:
    case CategoryType.ByField:
      numericFields = query?.outStatistics?.map(e => e.onStatisticField)
      break
    default:
      break
  }
  numericFields = numericFields.filter(numericField => numericField != null && numericField !== '')
  return numericFields
}

/**
 * Generate an array without duplicate values
 * @param array
 */
export const uniqueArray = <T>(array: T[]): T[] => {
  if (array == null) return array
  const arr: T[] = []
  array.forEach(item => {
    if (!arr.includes(item as T)) {
      arr.push(item as T)
    }
  })
  return arr
}

/**
 * Get numeric field from single web chart series
 * @param series
 */
export const getNumericField = (serie: ImmutableObject<WebChartSeries>): string => {
  return getNumericFieldsFromQueryParams(serie?.query)?.[0]
}

/**
 * Get numeric fields from web chart series
 * @param series
 */
export const getNumericFields = (series: ImmutableArray<WebChartSeries>): ImmutableArray<string> => {
  const numericFields = series?.reduce((acc, cur) => {
    return acc.concat(getNumericFieldsFromQueryParams(cur.query) ?? [])
  }, [])
  return Immutable(uniqueArray<string>(numericFields as any))
}

/**
 * Get category field from series
 * @param series
 */
export const getCategoryField = (
  series: ImmutableArray<WebChartSeries>
): string => {
  return series?.[0]?.x
}

/**
 * Get order by field from series
 * @param series
 */
export const getOrderByFields = (
  series: ImmutableArray<WebChartSeries>
): ImmutableArray<string> => {
  return series?.[0]?.query?.orderByFields
}

/**
 * Get page size from series
 * @param series
 */
export const getPageSize = (
  series: ImmutableArray<WebChartSeries>
): number => {
  return series?.[0]?.query?.pageSize
}

/**
 * Get statistic type from query params
 * @param query
 */
export const getStatisticTypeFromQueryParams = (
  query: IMFeatureLayerQueryParams
): StatisticType => {
  const categoryType = getCategoryTypeFromQueryParams(query)
  switch (categoryType) {
    case CategoryType.ByGroup:
    case CategoryType.ByField:
      return query?.outStatistics?.[0]?.statisticType as StatisticType
      break
    case CategoryType.ByFeature:
    default:
      break
  }
}

/**
 * Get statistic type from series
 * @param series
 */
export const getStatisticType = (
  series: ImmutableArray<WebChartSeries>
): StatisticType => {
  return getStatisticTypeFromQueryParams(series?.[0]?.query)
}

/**
 * Get split field value from query params
 * @param query
 */
export const getSplitValueFromQueryParams = (
  query: IMFeatureLayerQueryParams
): string => {
  return query?.where ? _getSplitByValue({ where: query.where }) : ''
}

/**
 * Get split field value from serie
 * @param query
 */
export const getSplitByField = (
  serie: ImmutableObject<WebChartSeries>
): string => {
  return serie?.query?.where ? _getSplitByField(serie?.query?.where) : ''
}

/**
 * Get split field value from serie
 * @param query
 */
export const getSplitByValue = (
  serie: ImmutableObject<WebChartSeries>
): string => {
  return getSplitValueFromQueryParams(serie?.query as any)
}

/**
 * Get split field value from serie
 * @param query
 */
export const getSplitBySeries = (
  serie: ImmutableObject<WebChartSeries>
): string => {
  return serie?.query?.where ? _getSplitByField(serie?.query?.where) : ''
}

/**
 * Get split field values
 * @param query
 */
export const getSplitByValues = (
  series: ImmutableArray<WebChartSeries>
): ImmutableArray<string> => {
  return series?.map(serie => getSplitByValue(serie))?.filter(v => !!v)
}

/**
 * Get serie by field:
 *  for `By feature` mode, check by `series[i].query.outFields[1]`,
 *  for `By group` mode, check by `series[i].query.outStatistics[0].onStatisticField`,
 *  for `By field` mode, return series[0]
 * @param series
 * @param field
 */
export const getSerieByQueryField = (
  series: ImmutableArray<WebChartSeries>,
  field?: string
): ImmutableObject<WebChartSeries> | undefined => {
  const categoryType = getCategoryType(series)

  switch (categoryType) {
    case CategoryType.ByFeature:
      return (series?.find(
        serie => serie.query?.outFields?.[1] === field
      ) as unknown) as ImmutableObject<WebChartSeries>
      break
    case CategoryType.ByGroup:
      return series?.filter(serie => {
        const splitByValue = getSplitByValue(serie) ?? ''
        const onStatisticField =
          serie.query?.outStatistics?.[0]?.onStatisticField
        if (splitByValue !== '') return splitByValue === field
        else {
          return onStatisticField === field
        }
      })?.[0]
      break
    case CategoryType.ByField:
      return series?.[0]
      break
    default:
      break
  }
}

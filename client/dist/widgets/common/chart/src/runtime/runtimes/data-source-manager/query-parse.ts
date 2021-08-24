import { IMFeatureLayerQueryParams, ImmutableArray, Immutable } from 'jimu-core'
import { combineFilters } from 'jimu-ui/advanced/chart'
import { CategoryType, WebChartSeries } from '../../../config'
import { getCategoryInfo, getSplitByField } from '../../../utils/common'

/**
 * Modifies the input `WebChartQuery` by adding the split-by field to its `groupByFieldsForStatistics` property.
 * Assures that a field is added only once to the `groupByFieldsForStatistics` array, duplicate fields leading to query errors.
 * @param props
 */
export const modifyGroupByField = (uniqueQuery: IMFeatureLayerQueryParams, splitByField: string, x: string): IMFeatureLayerQueryParams => {
  if (uniqueQuery.groupByFieldsForStatistics !== undefined) {
    if (uniqueQuery.groupByFieldsForStatistics.includes(splitByField) === false)
      uniqueQuery = uniqueQuery.set('groupByFieldsForStatistics', uniqueQuery.groupByFieldsForStatistics.concat(splitByField))
  } else {
    if (x === splitByField) {
      uniqueQuery = uniqueQuery.set('groupByFieldsForStatistics', [x])
    }
  }
  return uniqueQuery
}

/**
 * Function merging multiple `outFields` properties for `by feature` mode
 * @param uniqueQuery
 * @param series
 */
export const mergeOutFields = (uniqueQuery: IMFeatureLayerQueryParams, series: ImmutableArray<WebChartSeries>) => {
  // Building outFields. Starting at 1 because series[0] is already in uniqueQuery
  // looping on the series to merge the outFields objects

  series.slice(1).forEach((serie) => {
    const outFields1 = serie.query?.outFields?.[1]
    const outFields = (uniqueQuery.outFields ?? []).concat(outFields1 ? [outFields1] : [])
    uniqueQuery = uniqueQuery.set('outFields', outFields)
  })

  return uniqueQuery
}

/**
 * Function merging multiple `outStatistics` properties.
 * @param uniqueQuery
 * @param series
 */
export const mergeOutStatistics = (uniqueQuery: IMFeatureLayerQueryParams, series: ImmutableArray<WebChartSeries>) => {
  // Building outStatistics. Starting at 1 because series[0] is already in uniqueQuery
  // looping on the series to merge the outStatistics objects

  series.slice(1).forEach((serie) => {
    const outStatistics = (uniqueQuery.outStatistics ?? []).concat(serie.query?.outStatistics ?? [])
    uniqueQuery = uniqueQuery.set('outStatistics', outStatistics)
  })

  return uniqueQuery
}

/**
 * Function building a unique query based on the chart series config.
 *
 * Note: We save the query to each series separately,but our queries all have the same onStatisticsField(or outFields),
 * we can combine them into one query to reduce the number of requests sent
 */
export const buildUniqueQuery = (series: ImmutableArray<WebChartSeries>): IMFeatureLayerQueryParams => {

  const [categoryType, splitedByValues] = getCategoryInfo(series?.[0]?.query)

  let uniqueQuery: IMFeatureLayerQueryParams = Immutable({})
  if (series[0].query !== undefined) {
    // uniqueQuery is copied from the 1st series query
    // so the `outStatisticFieldName` will always same as `y` of first series
    uniqueQuery = series[0].query
    // Excluding the null categories
    let where = `${series[0].x} IS NOT NULL`
    switch (categoryType) {
      case CategoryType.ByFeature:
        if (series.length > 1) {
          uniqueQuery = mergeOutFields(uniqueQuery, series)
        }
        break
      case CategoryType.ByGroup:
        if (splitedByValues) {
          const splitByField = getSplitByField(series[0])
          if (splitByField !== '') {
            // Excluding the null split-by values
            where = combineFilters([where, `${splitByField} IS NOT NULL`])
            uniqueQuery = uniqueQuery.set('where', where)
            uniqueQuery = modifyGroupByField(uniqueQuery, splitByField, series[0].x)
          }
        } else if (series.length > 1) {
          uniqueQuery = mergeOutStatistics(uniqueQuery, series)
        }
        break
      case CategoryType.ByField:
        break
      default:
        break
    }
  }

  //return geometry not allowed
  uniqueQuery = uniqueQuery.set('returnGeometry', false)
  return uniqueQuery
}
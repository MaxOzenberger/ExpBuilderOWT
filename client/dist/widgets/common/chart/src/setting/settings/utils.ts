import { DataSourceJson, DataSourceSchema, DataSourceTypes, getAppStore, Immutable, ImmutableArray, ImmutableObject, StatisticType, UseDataSource } from 'jimu-core'
import { OutputDsObjectField } from '../../constants'
import { getInitSchema } from './web-chart/serial/utils'

export const getInitOutDataSource = (originalId: string, label: string, originUseDataSource: UseDataSource) => {
  const id = originalId + '_ouput'
  const schema = getInitSchema(label)

  const outputDsJson: DataSourceJson = {
    id,
    type: DataSourceTypes.FeatureLayer,
    label,
    originDataSources: [originUseDataSource],
    isOutputFromWidget: true,
    isDataInDataSourceInstance: true,
    schema
  }

  return outputDsJson
}

/**
 * Get original fields from output ds schema (without objectid field)
 * @param schema
 */
export const getSchemaOriginFields = (schema: DataSourceSchema) => {
  if (!schema?.fields) return
  const fields = Object.entries(schema.fields)?.map(([fieldName, fieldSchema]) => {
    if (fieldName === OutputDsObjectField && fieldSchema.jimuName === OutputDsObjectField) {
      return
    }
    return fieldSchema.originFields?.[0]
  })?.filter(field => !!field)

  return fields
}

export const DefalutTools = {
  cursorEnable: true
}

export const StatisticFunctions = {
  [StatisticType.Count]: 'COUNT',
  [StatisticType.Avg]: 'AVERAGE',
  [StatisticType.Sum]: 'SUM',
  [StatisticType.Max]: 'MAX',
  [StatisticType.Min]: 'MIN',
}

/**
 * Update the schema information to the data source
 * @param schema
 * @param useDataSources
 * @param outputDataSourceId
 * @param outputDataSourceLabel
 */
export const getUseAndOutputDataSourceWithNewSchema = (
  schema: DataSourceSchema,
  useDataSources: ImmutableArray<UseDataSource>,
  outputDataSourceId: string,
  outputDataSourceLabel?: string
):[ImmutableArray<UseDataSource>?, ImmutableObject<DataSourceJson>?] => {
  if (!schema || !useDataSources?.length || !outputDataSourceId) return []

  if (!schema.label) {
    schema.label = outputDataSourceLabel
  }
  let outputDataSource = getAppStore().getState()?.appStateInBuilder?.appConfig.dataSources?.[outputDataSourceId]

  outputDataSource = outputDataSource.set('schema', schema)
  const fields = getSchemaOriginFields(schema)
  const useDataSourcesWithFields = Immutable.setIn(useDataSources, ['0', 'fields'], fields)

  return [useDataSourcesWithFields, outputDataSource]
}
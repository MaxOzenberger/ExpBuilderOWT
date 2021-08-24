import {
  QueriableDataSource,
  DataSource,
  DataSourceTypes,
  dataSourceUtils,
  Immutable
} from 'jimu-core'
import { FeatureDataRecord, FeatureLayerDataSource } from 'jimu-arcgis'
import { LayersConfig, Suggestion } from '../config'

async function queryRecords (q: any, ds: DataSource): Promise<FeatureDataRecord[]> {
  if (!ds) return await Promise.resolve([])
  if (ds.type === DataSourceTypes.FeatureLayer) {
    return await (ds as FeatureLayerDataSource)
      .query(q)
      .then(async queryResult => await queryRecordsResult(q, queryResult))
  } else {
    return await Promise.resolve([])
  }
}

async function queryRecordsResult (q, queryResult): Promise<FeatureDataRecord[]> {
  return await Promise.resolve(queryResult?.records || [])
}

function getSuggestionItem (suggestion: string, searchText: string): string {
  if (!searchText) return suggestion
  const replaceReg = new RegExp(`(${searchText})`, 'gi')
  return suggestion.replace(replaceReg, '<strong >$1</strong>')
}

function uniqueJson (jsonArr, key) {
  var result = jsonArr[0] ? [jsonArr[0]] : []
  for (var i = 1; i < jsonArr.length; i++) {
    var item = jsonArr[i]
    var repeat = false;
    for (var j = 0; j < result.length; j++) {
      if (item[key] == result[j][key]) {
        repeat = true
        break
      }
    }
    if (!repeat) {
      result.push(item);
    }
  }
  return result
}

function getSQL(
  searchText: string,
  config: LayersConfig,
  datasource: DataSource
){
  const isHosted = dataSourceUtils.isHostedService((datasource as QueriableDataSource).url)
  const searchFields = config.searchFields.split(',')
  if (config.enableSearch && config.searchFields) {
    const parts = searchFields.map(field => {
      return {
        type: 'SINGLE',
        jimuFieldName: field,
        operator: 'STRING_OPERATOR_CONTAINS',
        valueOptions:{
          isValid:true,
          sourceType: 'USER_INPUT',
          inputEditor: 'TEXT_BOX',
          value:Immutable([{value: searchText, label: field}])
        },
        displayType: 'NONE',
        caseSensitive: isHosted
      }
    })
    const sqlExpression = {
      sql:'1=1',
      displaySQL:'',
      logicalOperator:'OR',
      parts:parts
    }
    const SQL = dataSourceUtils.getArcGISSQL(sqlExpression as any, datasource)
    return SQL
  }
}

export async function fetchSuggestionRecords (
  searchText: string,
  config: LayersConfig,
  datasource: DataSource
): Promise<Suggestion[]> {
  const options: any = {
    page: 1,
    pageSize: 10
  }
  const searchFields = config.searchFields.split(',')

  if (config.enableSearch && config.searchFields) {
    const SQL = getSQL(searchText, config, datasource)?.sql
    options.where = SQL
  }
  const searchReg = new RegExp(`(${searchText})`, 'gi')
  return queryRecords(options, datasource).then(async records => {
    let searchSuggestion = []
    searchFields.forEach(attrName => {
      records.forEach(el => {
        const suggestionItem = el?.feature?.attributes[attrName]
        if (
          suggestionItem &&
          !searchSuggestion.includes(suggestionItem) &&
          suggestionItem.match(searchReg)
        ) {
          const suggestion: Suggestion = {
            suggestionHtml: getSuggestionItem(suggestionItem, searchText),
            suggestion: suggestionItem
          }
          searchSuggestion.push(suggestion)
        }
      })
    })
    searchSuggestion = uniqueJson(searchSuggestion, 'suggestion')
    return Promise.resolve(searchSuggestion)
  })
}
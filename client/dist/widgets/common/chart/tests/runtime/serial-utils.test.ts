/* eslint-disable camelcase */
import { DataRecord, Immutable } from 'jimu-core'
import { CategoryType } from '../../src/config'
import { ByFieldSeriesX, ByFieldSeriesY } from '../../src/constants'
import {
  getOutStatName, getRecordsByChartselectedDataItems, getSerieYBySplitValue, groupData,
  mapRecordsToFormattedData, mapToByFieldData, mapToSplitByValueData,
} from '../../src/runtime/runtimes/chart/web-chart/serial/utils'

jest.mock('../../src/utils/common', () => {
  return {
    ...jest.requireActual('../../src/utils/common') as any,
    getFieldSchema: field => ({field, alias: `${field}-1`})
  }
})

const makeDummyRecord = (attribute): DataRecord => {
  return {
    getData: () => attribute,
    getFieldValue: (field) => attribute[field],
    getFormattedFieldValue: (field) => attribute[field] + '!',
  } as unknown as DataRecord
}

describe('src/runtime/serial/utils', () => {

  it('mapToByFieldData', () => {
    const series = Immutable([
      {
        x: ByFieldSeriesX,
        y: ByFieldSeriesY,
        query: {
          outStatistics: [
            {
              onStatisticField: 'numeric0',
              outStatisticFieldName: 'numeric0',
              statisticType: 'sum'
            }
          ],
          orderByFields: [`${ByFieldSeriesX} DESC`]
        }
      },
      {
        x: ByFieldSeriesX,
        y: ByFieldSeriesY,
        query: {
          outStatistics: [
            {
              onStatisticField: 'numeric1',
              outStatisticFieldName: 'numeric1',
              statisticType: 'sum'
            }
          ],
          orderByFields: [`${ByFieldSeriesX} ASC`]
        }
      }
    ]) as any

    const data = [{
      numeric0: 10,
      numeric1: 20
    }] as any
    const map = new Map()
    const processedData = mapToByFieldData(data, series, '', map)
    expect(processedData).toEqual([{
      [ByFieldSeriesX]: 'numeric0-1',
      [ByFieldSeriesY]: 10
    }, {
      [ByFieldSeriesX]: 'numeric1-1',
      [ByFieldSeriesY]: 20
    }])
    const resMap = new Map()
    resMap.set('numeric0-1', 'numeric0')
    resMap.set('numeric1-1', 'numeric1')
    expect(map).toEqual(resMap)
  })

  it('getSplitByField', () => {
    const dataItem = {
      objectid: 0,
      year: 2010,
      type: 'type1',
      pop__type__type1__sum: 10
    }
    const outStateName = getOutStatName(dataItem, 'year', 'type')
    expect(outStateName).toBe('pop__type__type1__sum')
  })

  it('mapToSplitByValueData for normal data', () => {
    const data = [{ NumericField__SplitField__SplitValue1__sum: 5, NAME: 'Alabama', SplitField: 'SplitValue1', objectid: 0 },
    { NumericField__SplitField__SplitValue1__sum: 1, NAME: 'Alabama', SplitField: 'SplitValue2', objectid: 1 },
    { NumericField__SplitField__SplitValue1__sum: 2, NAME: 'Alabama', SplitField: 'SplitValue3', objectid: 2 }]

    const series = [{ x: 'NAME', y: 'NumericField__SplitField__SplitValue1__sum', query: { where: "SplitField='SplitValue1'", groupByFieldsForStatistics: ['NAME'] } },
    { x: 'NAME', y: 'NumericField__SplitField__SplitValue2__sum', query: { where: "SplitField='SplitValue2'" }, groupByFieldsForStatistics: ['NAME'] },
    { x: 'NAME', y: 'NumericField__SplitField__SplitValue3__sum', query: { where: "SplitField='SplitValue3'", groupByFieldsForStatistics: ['NAME'] } }] as any



    const processedData = mapToSplitByValueData(data, series)

    expect(processedData).toEqual([{
      NumericField__SplitField__SplitValue1__sum: 5,
      SplitField: 'SplitValue1',
      NAME: 'Alabama',
      objectid: 0
    }, {
      NumericField__SplitField__SplitValue2__sum: 1,
      SplitField: 'SplitValue2',
      NAME: 'Alabama',
      objectid: 1
    }, {
      NumericField__SplitField__SplitValue3__sum: 2,
      SplitField: 'SplitValue3',
      NAME: 'Alabama',
      objectid: 2
    }])

    const groupedData = groupData(processedData, series?.[0]?.x)

    expect(groupedData).toEqual([{
      NumericField__SplitField__SplitValue1__sum: 5,
      NumericField__SplitField__SplitValue2__sum: 1,
      NumericField__SplitField__SplitValue3__sum: 2,
      SplitField: 'SplitValue1',
      NAME: 'Alabama',
      objectid: 0
    }])
  })

  it('mapToSplitByValueData for special data', () => {
    const data = [{ 'Land_Rank__Land_Type__Large island__sum': 5, NAME: 'Alabama', Land_Type: 'Primary land', objectid: 0 },
    { 'Land_Rank__Land_Type__Large island__sum': 2, NAME: 'Alabama', Land_Type: 'Small island', objectid: 1 },
    { 'Land_Rank__Land_Type__Large island__sum': 1, NAME: 'Alabama', Land_Type: 'Very small island', objectid: 2 }]

    const series = [{ x: 'NAME', y: 'Land_Rank__Land_Type__Primary land__sum', query: { where: "Land_Type='Primary land'", groupByFieldsForStatistics: ['NAME'] } },
    { x: 'NAME', y: 'Land_Rank__Land_Type__Small island__sum', query: { where: "Land_Type='Small island'" }, groupByFieldsForStatistics: ['NAME'] },
    { x: 'NAME', y: 'Land_Rank__Land_Type__Very small island__sum', query: { where: "Land_Type='Very small island'", groupByFieldsForStatistics: ['NAME'] } }] as any

    const processedData = mapToSplitByValueData(data, series)

    expect(processedData).toEqual([{
      'Land_Rank__Land_Type__Primary land__sum': 5,
      Land_Type: 'Primary land',
      NAME: 'Alabama',
      objectid: 0,
    },
    {
      'Land_Rank__Land_Type__Small island__sum': 2,
      Land_Type: 'Small island',
      NAME: 'Alabama',
      objectid: 1,
    },
    {
      'Land_Rank__Land_Type__Very small island__sum': 1,
      Land_Type: 'Very small island',
      NAME: 'Alabama',
      objectid: 2,
    }])
  })

  it('getSerieYBySplitValue', () => {
    const series = [
      {
        id: 's1',
        y: 'n_0',
        query: {
          where: 'splitField=\'field0\''
        }
      },
      {
        id: 's2',
        y: 'n_1',
        query: {
          where: 'splitField=\'field1\''
        }
      }
    ] as any
    expect(getSerieYBySplitValue(series, 'field0')).toBe('n_0')
    expect(getSerieYBySplitValue(series, 'field1')).toBe('n_1')
  })

  it('mapRecordsToChartData', () => {
    const data = [{ x: 'a', v: 0 }, { x: 'b', v: 1 }]
    const records = data.map(makeDummyRecord)
    const x = 'x'
    const [chartData, xFormattedValueMap] = mapRecordsToFormattedData(records, x, null)
    expect(chartData).toEqual([{ x: 'a!', v: 0 }, { x: 'b!', v: 1 }])
    const map = new Map()
    map.set('x-a!', 'a')
    map.set('x-b!', 'b')

    expect(xFormattedValueMap).toEqual(map)
  })

  it('getRecordsByChartselectedDataItems', () => {
    let categoryType = CategoryType.ByGroup
    let x = 'x'
    let y = 'v'

    const xFieldAliasMap = new Map()
    const xFormattedValueMap = new Map()

    let data = [
      { x: 'a', v: 0, v2: 1 },
      { x: 'b', v: 1, v2: 2 },
      { x: 'c', v: 2, v2: 3 },
      { x: 'd', v: 3, v2: 4 },
      { x: 'e', v: 4, v2: 5 },
    ]

    let records = data.map(makeDummyRecord)
    let selectedDataItems = [{ x: 'b!', v: 1 }, { x: 'd!', v: 3 }]

    xFormattedValueMap.set('x-a!', 'a')
    xFormattedValueMap.set('x-b!', 'b')
    xFormattedValueMap.set('x-c!', 'c')
    xFormattedValueMap.set('x-d!', 'd')
    xFormattedValueMap.set('x-e!', 'e')

    let selectedRecords = getRecordsByChartselectedDataItems({ categoryType, selectedDataItems, records, x, y, xFormattedValueMap, xFieldAliasMap })
    expect(selectedRecords).toEqual([records[1], records[3]])

    categoryType = CategoryType.ByField
    x = 'FieldName'
    y = 'FieldValue'
    xFieldAliasMap.set('a-1', 'a')
    xFieldAliasMap.set('b-1', 'b')
    xFieldAliasMap.set('c-1', 'c')
    xFieldAliasMap.set('d-1', 'd')

    data = [{ a: 0 }, { b: 1 }, { c: 2 }, { d: 3 }] as any

    records = data.map(makeDummyRecord)
    selectedDataItems = [{ FieldName: 'b-1', FieldValue: 1 }, { FieldName: 'd-1', FieldValue: 3 }] as any
    selectedRecords = getRecordsByChartselectedDataItems({ categoryType, selectedDataItems, records, x, y, xFormattedValueMap, xFieldAliasMap })
    expect(selectedRecords).toEqual([records[1], records[3]])
  })
})

/* eslint-disable camelcase */
import { mockDataSource } from '../mock-data-source'
import { DataSourceManager, Immutable } from 'jimu-core'
import { renderHook } from '@testing-library/react-hooks'
import { sortWebChartData, } from '../../src/runtime/runtimes/chart/web-chart/serial/utils'
import { buildUniqueQuery } from '../../src/runtime/runtimes/data-source-manager/query-parse'
import { ByFieldSeriesX, ByFieldSeriesY } from '../../src/constants'
import { useFetchRecords } from '../../src/runtime/runtimes/data-source-manager/data-source-manager'
import { ChartRuntimeStateProvider } from '../../src/runtime/runtimes'

mockDataSource()

jest.mock('../../src/utils/common', () => {
  return {
    ...jest.requireActual('../../src/utils/common') as any,
    getFieldSchema: field => field
  }
})

describe('src/runtime/utils/data', () => {
  let dataSource = null
  let useDataSources = null
  beforeAll(async done => {
    useDataSources = [
      {
        dataSourceId: 'ds1',
        mainDataSourceId: 'ds1'
      }
    ]
    try {
      dataSource = await DataSourceManager.getInstance().createDataSourceByUseDataSource(
        useDataSources[0]
      )
    } catch (err) {
      console.log(err)
    }
    done()
  })

  it('useFetchRecords', async () => {
    let version = 0
    let query = {
      groupByFieldsForStatistics: ['Year'],
      outStatistics: [
        {
          onStatisticField: 'District',
          outStatisticFieldName: 'District_0',
          statisticType: 'sum'
        },
        {
          onStatisticField: 'Ward',
          outStatisticFieldName: 'Ward_0',
          statisticType: 'sum'
        }
      ]
    } as any

    const { result, rerender, waitForNextUpdate } = renderHook(() => useFetchRecords(dataSource, dataSource, query, version), {
      wrapper: ChartRuntimeStateProvider
    })
    await waitForNextUpdate({ timeout: 100 })
    expect(result.current.map(record => record.getData())).toEqual([
      {
        District_0: 284,
        Ward_1: 512,
        Year: 2010
      },
      {
        District_0: 314,
        Ward_1: 659,
        Year: 2011
      },
      {
        District_0: 298,
        Ward_1: 632,
        Year: 2012
      }
    ])

    query = {
      groupByFieldsForStatistics: ['Year'],
      outStatistics: [
        {
          onStatisticField: 'Beat',
          outStatisticFieldName: 'Beat_0',
          statisticType: 'sum'
        }
      ]
    } as any

    version = 1
    rerender({ dataSource, query, version } as any)
    await waitForNextUpdate({ timeout: 100 })
    expect(result.current.map(record => record.getData())).toEqual([
      {
        Beat_0: 512,
        Year: 2010
      },
      {
        Beat_0: 659,
        Year: 2011
      },
      {
        Beat_0: 632,
        Year: 2012
      }
    ])
  })

  describe('buildUniqueQuery', () => {
    it('ByFeature', () => {
      const series = Immutable([
        {
          query: {
            outFields: ['category', 'numeric0']
          },
          y: 'numeric0',
          x: 'category'
        },
        {
          query: {
            outFields: ['category', 'numeric1']
          },
          y: 'numeric1',
          x: 'category'
        }
      ]) as any
      expect(buildUniqueQuery(series)).toEqual({
        returnGeometry: false,
        outFields: ['category', 'numeric0', 'numeric1']
      })
    })

    it('ByGroup, no where', () => {
      const series = Immutable([
        {
          query: {
            groupByFieldsForStatistics: ['category'],
            outStatistics: [
              {
                onStatisticField: 'numeric0',
                outStatisticFieldName: 'numeric0_0',
                statisticType: 'sum'
              }
            ]
          },
          y: 'numeric0_0',
          x: 'category'
        },
        {
          query: {
            groupByFieldsForStatistics: ['category'],
            outStatistics: [
              {
                onStatisticField: 'numeric1',
                outStatisticFieldName: 'numeric1_1',
                statisticType: 'sum'
              }
            ]
          },
          y: 'numeric1_1',
          x: 'category'
        }
      ]) as any
      expect(buildUniqueQuery(series)).toEqual({
        returnGeometry: false,
        groupByFieldsForStatistics: ['category'],
        outStatistics: [
          {
            onStatisticField: 'numeric0',
            outStatisticFieldName: 'numeric0_0',
            statisticType: 'sum'
          },
          {
            onStatisticField: 'numeric1',
            outStatisticFieldName: 'numeric1_1',
            statisticType: 'sum'
          }
        ]
      })
    })

    it('ByGroup, has where', () => {
      const series = Immutable([
        {
          query: {
            groupByFieldsForStatistics: ['category'],
            outStatistics: [
              {
                onStatisticField: 'numeric',
                outStatisticFieldName: 'numeric_0',
                statisticType: 'sum'
              }
            ],
            where: 'splitField=\'field1\''
          },
          y: 'numeric_0',
          x: 'category'
        },
        {
          query: {
            groupByFieldsForStatistics: ['category'],
            outStatistics: [
              {
                onStatisticField: 'numeric',
                outStatisticFieldName: 'numeric_1',
                statisticType: 'sum'
              }
            ],
            where: 'splitField=\'field2\''
          },
          y: 'numeric_1',
          x: 'category'
        }
      ]) as any

      expect(buildUniqueQuery(series)).toEqual({
        returnGeometry: false,
        groupByFieldsForStatistics: ['category', 'splitField'],
        outStatistics: [
          {
            onStatisticField: 'numeric',
            outStatisticFieldName: 'numeric_0',
            statisticType: 'sum'
          }
        ],
        where: 'category IS NOT NULL AND (splitField IS NOT NULL)'
      })
    })

    it('ByField', () => {
      const series = Immutable([{
        query: {
          outStatistics: [
            {
              onStatisticField: 'numeric0',
              outStatisticFieldName: 'numeric0_0',
              statisticType: 'sum'
            }, {
              onStatisticField: 'numeric1',
              outStatisticFieldName: 'numeric1_1',
              statisticType: 'sum'
            }
          ]
        },
        y: ByFieldSeriesX,
        x: ByFieldSeriesY
      }]) as any
      expect(buildUniqueQuery(series)).toEqual({
        returnGeometry: false,
        outStatistics: [
          {
            onStatisticField: 'numeric0',
            outStatisticFieldName: 'numeric0_0',
            statisticType: 'sum'
          },
          {
            onStatisticField: 'numeric1',
            outStatisticFieldName: 'numeric1_1',
            statisticType: 'sum'
          }
        ]
      })
    })
  })

  it('sortWebChartData', () => {
    const rawData = [
      {
        category: 2010,
        numeric_0: 2079,
        numeric_1: 13524
      },
      {
        category: 2011,
        numeric_0: 5943,
        numeric_1: 15177
      },
      {
        category: 2012,
        numeric_0: 7268,
        numeric_1: 7651
      }
    ]

    let orderByFields = Immutable(['category ASC'])
    let data = [...rawData]
    sortWebChartData(data, orderByFields)
    expect(data).toEqual([
      {
        category: 2010,
        numeric_0: 2079,
        numeric_1: 13524
      },
      {
        category: 2011,
        numeric_0: 5943,
        numeric_1: 15177
      },
      {
        category: 2012,
        numeric_0: 7268,
        numeric_1: 7651
      }
    ])

    data = [...rawData]
    orderByFields = Immutable(['category DESC'])
    sortWebChartData(data, orderByFields)
    expect(data).toEqual([
      {
        category: 2012,
        numeric_0: 7268,
        numeric_1: 7651
      },
      {
        category: 2011,
        numeric_0: 5943,
        numeric_1: 15177
      },
      {
        category: 2010,
        numeric_0: 2079,
        numeric_1: 13524
      }
    ])

    data = [...rawData]
    orderByFields = Immutable(['numeric_0 ASC'])
    sortWebChartData(data, orderByFields)

    expect(data).toEqual([
      {
        category: 2010,
        numeric_0: 2079,
        numeric_1: 13524
      },
      {
        category: 2011,
        numeric_0: 5943,
        numeric_1: 15177
      },
      {
        category: 2012,
        numeric_0: 7268,
        numeric_1: 7651
      }
    ])

    data = [...rawData]
    orderByFields = Immutable(['numeric_0 DESC'])
    sortWebChartData(data, orderByFields)

    expect(data).toEqual([
      {
        category: 2012,
        numeric_0: 7268,
        numeric_1: 7651
      },
      {
        category: 2011,
        numeric_0: 5943,
        numeric_1: 15177
      },
      {
        category: 2010,
        numeric_0: 2079,
        numeric_1: 13524
      }
    ])

    data = [...rawData]
    orderByFields = Immutable(['numeric_1 ASC'])
    sortWebChartData(data, orderByFields)

    expect(data).toEqual([
      {
        category: 2012,
        numeric_0: 7268,
        numeric_1: 7651
      },
      {
        category: 2010,
        numeric_0: 2079,
        numeric_1: 13524
      },
      {
        category: 2011,
        numeric_0: 5943,
        numeric_1: 15177
      }
    ])

    data = [...rawData]
    orderByFields = Immutable(['numeric_1 DESC'])
    sortWebChartData(data, orderByFields)

    expect(data).toEqual([
      {
        category: 2011,
        numeric_0: 5943,
        numeric_1: 15177
      },
      {
        category: 2010,
        numeric_0: 2079,
        numeric_1: 13524
      },
      {
        category: 2012,
        numeric_0: 7268,
        numeric_1: 7651
      }
    ])
  })

})

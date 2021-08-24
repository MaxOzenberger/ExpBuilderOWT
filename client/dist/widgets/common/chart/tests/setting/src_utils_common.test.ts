import {
  appActions,
  DataSourceManager,
  getAppStore,
  IMFeatureLayerQueryParams,
  Immutable,
  ImmutableArray
} from 'jimu-core'
import { getInitState, mockTheme } from 'jimu-for-test'
import { CategoryType, WebChartSeries } from '../../src/config'
import {
  getCategoryField,
  getCategoryType,
  getCategoryTypeFromQueryParams,
  getFieldSchema,
  getFieldsSchema,
  getNumericFields,
  getNumericFieldsFromQueryParams,
  getOrderByFields,
  getStatisticType,
  getStatisticTypeFromQueryParams,
  uniqueArray
} from '../../src/utils/common'
import { parseOrderByField } from '../../src/utils/common/serial'

const state = getInitState().merge(
  {
    theme: mockTheme as any
  },
  { deep: true }
)

getAppStore().dispatch(appActions.updateStoreState(state))

describe('src/utils/common', () => {
  describe('getFieldSchema and getFieldsSchema', () => {
    let dss = null
    let mockFn = null
    beforeAll(() => {
      dss = {
        ds1: {
          getSchema: () => ({
            fields: {
              field1: {
                name: 'field1',
                alias: 'Field1'
              },
              field2: {
                name: 'field2',
                alias: 'Field2'
              }
            }
          })
        },
        ds2: {
          getSchema: () => ({
            fields: {
              field3: {
                name: 'field3',
                alias: 'Field3'
              }
            }
          })
        }
      }
      mockFn = jest.fn().mockImplementation(dsId => {
        return dss[dsId] == null ? dss.ds1 : dss[dsId]
      })
      DataSourceManager.getInstance().getDataSource = mockFn
    })

    afterEach(() => {
      mockFn.mockClear()
    })

    afterAll(() => {
      mockFn.mockRestore()
    })
    it('getFieldSchema', () => {
      expect(getFieldSchema('field1', 'ds1')).toEqual({
        name: 'field1',
        alias: 'Field1'
      })
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(getFieldSchema('field1', 'ds1')).toEqual({
        name: 'field1',
        alias: 'Field1'
      })
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(getFieldSchema('field2', 'ds1')).toEqual({
        name: 'field2',
        alias: 'Field2'
      })
      expect(mockFn).toHaveBeenCalledTimes(2)
    })

    it('getFieldsSchema', () => {
      expect(getFieldsSchema('ds1')).toEqual({
        field1: {
          name: 'field1',
          alias: 'Field1'
        },
        field2: {
          name: 'field2',
          alias: 'Field2'
        }
      })
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(getFieldsSchema('ds1')).toEqual({
        field1: {
          name: 'field1',
          alias: 'Field1'
        },
        field2: {
          name: 'field2',
          alias: 'Field2'
        }
      })
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(getFieldsSchema('ds2')).toEqual({
        field3: {
          name: 'field3',
          alias: 'Field3'
        }
      })
      expect(mockFn).toHaveBeenCalledTimes(2)
    })
  })

  describe('test some series utils', () => {
    it('getCategoryTypeFromQueryParams', () => {
      const groupByFieldsForStatistics = ['category0']
      const outStatistics = [
        {
          statisticType: 'sum',
          onStatisticField: 'numericField0',
          outStatisticFieldName: 'numericField0_0'
        }
      ]

      const outFields = ['category0', 'numericField0_0']

      let query = Immutable({
        groupByFieldsForStatistics,
        outStatistics
      }) as IMFeatureLayerQueryParams

      expect(getCategoryTypeFromQueryParams(query)).toBe(CategoryType.ByGroup)

      query = Immutable({ outStatistics }) as IMFeatureLayerQueryParams

      expect(getCategoryTypeFromQueryParams(query)).toBe(CategoryType.ByField)

      query = Immutable({ outFields }) as IMFeatureLayerQueryParams

      expect(getCategoryTypeFromQueryParams(query)).toBe(CategoryType.ByFeature)
    })

    it('getCategoryType', () => {
      const groupByFieldsForStatistics = ['category0']
      const outStatistics = [
        {
          statisticType: 'sum',
          onStatisticField: 'numericField0',
          outStatisticFieldName: 'numericField0_0'
        }
      ]

      const outFields = ['category0', 'numericField0_0']

      let query: any = {
        groupByFieldsForStatistics,
        outStatistics
      }
      let series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>

      expect(getCategoryType(series)).toBe(CategoryType.ByGroup)

      query = { outStatistics }

      series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>

      expect(getCategoryType(series)).toBe(CategoryType.ByField)

      query = { outFields }
      series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>

      expect(getCategoryType(series)).toBe(CategoryType.ByFeature)
    })

    it('getNumericFieldsFromQueryParams', () => {
      const groupByFieldsForStatistics = ['category0']
      const outStatistics = [
        {
          statisticType: 'sum',
          onStatisticField: 'numericField0',
          outStatisticFieldName: 'numericField0_0'
        }
      ]

      const outFields = ['category0', 'numericField0']

      let query = Immutable({
        groupByFieldsForStatistics,
        outStatistics
      }) as IMFeatureLayerQueryParams

      expect(getNumericFieldsFromQueryParams(query)).toEqual(['numericField0'])

      query = Immutable({ outStatistics }) as IMFeatureLayerQueryParams

      expect(getNumericFieldsFromQueryParams(query)).toEqual(['numericField0'])

      query = Immutable({ outFields }) as IMFeatureLayerQueryParams

      expect(getNumericFieldsFromQueryParams(query)).toEqual(['numericField0'])
    })

    it('uniqueArray', () => {
      const array = [1, '1', 2, '2', 1, '1', 2]
      expect(uniqueArray(array)).toEqual([1, '1', 2, '2'])
    })

    it('getNumericFields', () => {
      const groupByFieldsForStatistics = ['category0']
      const outStatistics = [
        {
          statisticType: 'sum',
          onStatisticField: 'numericField0',
          outStatisticFieldName: 'numericField0_0'
        }
      ]

      const outFields = ['category0', 'numericField0']

      let query: any = {
        groupByFieldsForStatistics,
        outStatistics
      }
      let series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>
      expect(getNumericFields(series)).toEqual(['numericField0'])

      query = { outStatistics } as any
      series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>
      expect(getNumericFields(series)).toEqual(['numericField0'])

      query = { outFields } as any
      series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>
      expect(getNumericFields(series)).toEqual(['numericField0'])
    })

    it('getCategoryField', () => {
      const series = Immutable([
        {
          x: 'category0'
        }
      ]) as ImmutableArray<WebChartSeries>

      expect(getCategoryField(series)).toBe('category0')
    })

    it('getOrderByFields', () => {
      const series = Immutable([
        {
          x: 'category0',
          query: {
            orderByFields: ['category0 ASC']
          }
        }
      ]) as ImmutableArray<WebChartSeries>

      expect(getOrderByFields(series)).toEqual(['category0 ASC'])
    })

    it('getStatisticTypeFromQueryParams', () => {
      const groupByFieldsForStatistics = ['category0']
      const outStatistics = [
        {
          statisticType: 'sum',
          onStatisticField: 'numericField0',
          outStatisticFieldName: 'numericField0_0'
        }
      ]

      const outFields = ['category0', 'numericField0']

      let query = Immutable({
        groupByFieldsForStatistics,
        outStatistics
      }) as IMFeatureLayerQueryParams

      expect(getStatisticTypeFromQueryParams(query)).toBe('sum')

      query = Immutable({ outStatistics }) as IMFeatureLayerQueryParams

      expect(getStatisticTypeFromQueryParams(query)).toBe('sum')

      query = Immutable({ outFields }) as IMFeatureLayerQueryParams

      expect(getStatisticTypeFromQueryParams(query)).toBeUndefined()
    })

    it('getStatisticType', () => {
      const groupByFieldsForStatistics = ['category0']
      const outStatistics = [
        {
          statisticType: 'sum',
          onStatisticField: 'numericField0',
          outStatisticFieldName: 'numericField0_0'
        }
      ]

      const outFields = ['category0', 'numericField0']

      let query: any = {
        groupByFieldsForStatistics,
        outStatistics
      }
      let series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>
      expect(getStatisticType(series)).toBe('sum')

      query = { outStatistics }
      series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>
      expect(getStatisticType(series)).toBe('sum')

      query = { outFields }
      series = Immutable([{ query }]) as ImmutableArray<WebChartSeries>
      expect(getStatisticType(series)).toBeUndefined()
    })
  })

  it('parseOrderByField', () => {
    let orderByField = 'fieldname ASC'
    expect(parseOrderByField(orderByField)).toEqual(['fieldname', 'ASC'])
    orderByField = 'field name ASC'
    expect(parseOrderByField(orderByField)).toEqual(['field name', 'ASC'])
    orderByField = ' ASC'
    expect(parseOrderByField(orderByField)).toEqual(['', 'ASC'])
  })
})

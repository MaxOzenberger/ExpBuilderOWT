import {
  React, DataSource, ImmutableObject, MessageManager, DataRecordsSelectionChangeMessage,
  IMState, ReactRedux, ImmutableArray, lodash
} from 'jimu-core'
import { Chart, WebChartInlineDataSource, WebChart, ChartInstance, WebChartDataItem } from 'jimu-ui/advanced/chart'
import {
  useParseData, useWebChartVersion, getSelectedDataItems, getRecordsByChartselectedDataItems
} from './utils'
import { IWebChart } from '../../../../../config'
import { getCategoryField, getCategoryType, getSplitByField } from '../../../../../utils/common'
import { DataRecord } from 'jimu-core/data-source'
import { useChartRuntimeDispatch, useChartRuntimeState } from '../../../state'
import { useSourceRecords } from '../../../utils'
import { hooks } from 'jimu-ui'

export interface SerialChartProps {
  webChart: ImmutableObject<IWebChart>
  widgetId: string
}

const ChartDataSource: WebChartInlineDataSource = {
  type: 'inline',
  data: [],
  processed: true
}

const isSameSelectedDataItems = (prev: ImmutableArray<string>, cur: ImmutableArray<string>) => {
  if (!prev?.length && !cur?.length) return true
  return lodash.isDeepEqual(prev, cur)
}

/**
 * Get the selected records on the data source and convert them into the selected data of chart component
 * @param dataSource
 * @param data
 * @param categoryField
 * @param splitByField
 */
export const useSelectedDataItems = (
  dataSource: DataSource,
  data: WebChartDataItem[],
  categoryField: string,
  splitByField?: string
): WebChartDataItem[] => {
  const dataSourceId = dataSource?.id
  const dsSelectedIds = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.selectedIds)
  const prevselectedDataItemsRef = React.useRef<WebChartDataItem[]>()
  const prevDsSelectedIdsRef = React.useRef<ImmutableArray<string>>()
  const selectedDataItems = React.useMemo(() => {
    if (!dataSource) return
    //Avoid repeated rendering and update chart
    if (isSameSelectedDataItems(prevDsSelectedIdsRef.current, dsSelectedIds)) {
      return prevselectedDataItemsRef.current
    }
    const selectedDataItems = getSelectedDataItems(dataSource, data, categoryField, splitByField)
    prevDsSelectedIdsRef.current = dsSelectedIds
    prevselectedDataItemsRef.current = selectedDataItems
    return selectedDataItems
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSource, data, categoryField, splitByField, dsSelectedIds])

  return selectedDataItems
}

function _SerialChart(props: SerialChartProps): React.ReactElement {
  const {
    webChart: propWebChart,
    widgetId,
  } = props

  const { outputDataSource: dataSource } = useChartRuntimeState()
  const dispatch = useChartRuntimeDispatch()

  const series = propWebChart?.series

  const dataSourceId = dataSource?.id

  const categoryType = getCategoryType(series)
  const categoryField = getCategoryField(series)
  const splitByField = getSplitByField(series?.[0])

  const records = useSourceRecords(dataSource)

  //Hide split by field
  // const splitValues = React.useMemo(() => getSplitedByValues(splitByField, records), [records, splitByField])
  // const series = handleSeries(propSeries, splitValues)

  const version = useWebChartVersion(propWebChart, series?.length ?? 0)

  const [data, xFormattedValueMap, xFieldAliasMap] = useParseData(records, series, dataSourceId)

  const selectedDataItems = useSelectedDataItems(dataSource, data, categoryField, splitByField)

  const handleSelectionComplete = (e) => {
    if (!dataSource) return

    const props = { categoryType, selectedDataItems: e.detail ?? [], records, x: categoryField, y: series?.[0]?.y, xFormattedValueMap, xFieldAliasMap }
    const selectedRecords = getRecordsByChartselectedDataItems(props)

    handleSelectionChange(selectedRecords)

    const selectIds = selectedRecords?.map(record => record?.getId()) ?? []
    const prevSelectedIds = dataSource.getSelectedRecordIds() ?? []
    if (!selectIds.length && !prevSelectedIds.length) return

    dataSource.selectRecordsByIds(selectIds)
  }

  //Publish records selection change message
  const handleSelectionChange = (records: DataRecord[] = []) => {
    MessageManager.getInstance().publishMessage(new DataRecordsSelectionChangeMessage(widgetId, records))
  }

  const webChart: ImmutableObject<WebChart> = React.useMemo(() => {
    const chartId = widgetId + '-' + (propWebChart?.id ?? 'chart')
    return (propWebChart as unknown as ImmutableObject<WebChart>)
      .set('id', chartId)
      .set('dataSource', ChartDataSource)
      // We use inline data source which should not pass query to series
      .set('series', series?.map(serie => serie.without('query')))
      //We always make the background color of the chart component transparent
      .set('background', [0, 0, 0, 0])
    // eslint-disable-next-line
  }, [version])

  const hanldleChartCreate = React.useCallback((chart: ChartInstance) => {
    dispatch({ type: 'SET_CHART', value: chart })
  }, [dispatch])

  hooks.useUnmount(() => {
    dispatch({ type: 'SET_CHART', value: null })
  })

  return (<Chart
    data={data}
    config={webChart}
    selectedDataItems={selectedDataItems}
    ref={hanldleChartCreate}
    arcgisChartsJSSelectionComplete={handleSelectionComplete} />)
}


export const SerialChart = React.memo(_SerialChart)

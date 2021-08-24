import {
  DataRecord, IMFeatureLayerQueryParams, DataSource, DataSourceComponent, FeatureDataRecord,
  Immutable, ImmutableObject, IMState, QueriableDataSource, QueryParams, React, ReactRedux, UseDataSource, ImmutableArray, DataSourceStatus
} from 'jimu-core'
import { hooks } from 'jimu-ui'
import { WebChartSeries } from '../../../config'
import { MaxPieces, OutputDsObjectField } from '../../../constants'
import { isValidSerialSeries } from '../../../utils/common/serial'
import { useChartRuntimeDispatch, useChartRuntimeState } from '../state'
import { buildUniqueQuery } from './query-parse'
import { SourceStatus } from '../state'

export interface DataSourceManagerProps {
  widgetId: string
  series: ImmutableArray<WebChartSeries>
  useDataSource: ImmutableObject<UseDataSource>
  outputDataSourceId: string
}

/**
 * Check whether a data source instance is valid (whether the corresponding data source is deleted)
 * @param dataSource
 */
const isDataSourceValid = (dataSource: DataSource): boolean => {
  if (!dataSource) return false
  const info = dataSource.getInfo()
  return info && Object.keys(info).length > 0
}

/**
 * Check whether a data source instance can be used to load data
 * @param dataSource
 */
const isDataSourceReady = (dataSource: DataSource): boolean => {
  if (!isDataSourceValid(dataSource)) return false
  const status = dataSource.getStatus()
  //The dats source is ready to use
  return status && status !== DataSourceStatus.NotReady
}

/**
 * When the filter is modified, update it to the data source
 * @param widgetId
 */
const useUpdateOriginDatasourceFilter = (widgetId: string) => {
  const { dataSource, filter } = useChartRuntimeState()
  const dataSourceRef = hooks.useRefValue(dataSource)
  React.useEffect(() => {
    if (dataSourceRef.current) {
      (dataSourceRef.current as QueriableDataSource).updateQueryParams({ where: filter?.sql ?? '1=1' } as QueryParams, widgetId)
    }
  }, [dataSourceRef, filter, widgetId])
}

/**
 * Listen to changes of data source info
 * @param info
 */
const useDataSourceVersion = (dataSourceId: string, belongToDataSourceId?: string): number => {
  const statusReady = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.status !== DataSourceStatus.NotReady)
  const instanceStatus = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.instanceStatus)
  const widgetQueries = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.widgetQueries)
  const gdbVersion = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.gdbVersion)
  const sourceVersion = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.sourceVersion)
  const belongToWidgetQueries = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[belongToDataSourceId]?.widgetQueries)
  const belongToSourceVersion = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[belongToDataSourceId]?.sourceVersion)
  const belongToGdbVersion = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[belongToDataSourceId]?.gdbVersion)

  const [version, setVersion] = React.useState<number>(0)

  hooks.useUpdateEffect(() => {
    if (instanceStatus === DataSourceStatus.Created && statusReady) {
      setVersion(v => v + 1)
    }
  }, [instanceStatus, statusReady, widgetQueries, belongToWidgetQueries, belongToSourceVersion, sourceVersion, gdbVersion, belongToGdbVersion])

  return version
}

/**
 * Requests and statistics the data of chart
 * @param originDataSource
 * @param outputDataSource
 * @param query
 * @param version
 * @param limitedNumberOfRecords
 */
export const useFetchRecords = (
  originDataSource: DataSource,
  outputDataSource: DataSource,
  query: IMFeatureLayerQueryParams,
  version: number,
  limitedNumberOfRecords?: number
): DataRecord[] => {
  const dispatch = useChartRuntimeDispatch()
  const [records, setRecords] = React.useState<DataRecord[]>([])

  React.useEffect(() => {
    let fetchable = false
    const readyOriginDs = isDataSourceReady(originDataSource)
    const validOutputDs = isDataSourceValid(outputDataSource)
    if (readyOriginDs && validOutputDs && query !== null) {
      fetchable = true
    }

    if (!fetchable) {
      return
    }

    (async () => {
      try {
        dispatch({ type: 'SET_SOURCE_STATUS', value: SourceStatus.Loading })
        const result = await (originDataSource as QueriableDataSource).query(query)
        const records = result?.records
        if (limitedNumberOfRecords && records.length > limitedNumberOfRecords) {
          dispatch({ type: 'SET_SOURCE_STATUS', value: SourceStatus.ExceedLimit })
        } else {
          dispatch({ type: 'SET_SOURCE_STATUS', value: SourceStatus.Loaded })
          setRecords(records)
        }
      } catch (error) {
        dispatch({ type: 'SET_SOURCE_STATUS', value: SourceStatus.LoadError })
        console.error(error)
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version, outputDataSource, query])

  return records
}
/**
 * When new records are requested, update them to the output data source
 * @param dataSource
 * @param outputDataSource
 * @param queryForOutput
 * @param limitedNumberOfRecords
 */
const useUpdateOutputDataSourceRecords = (
  dataSource: DataSource,
  outputDataSource: DataSource,
  queryForOutput: IMFeatureLayerQueryParams,
  limitedNumberOfRecords?: number
) => {
  const fetchVersion = useDataSourceVersion(dataSource?.id, dataSource?.belongToDataSource?.id)
  const records = useFetchRecords(dataSource, outputDataSource, queryForOutput, fetchVersion, limitedNumberOfRecords)

  React.useEffect(() => {
    const validOutputDs = isDataSourceValid(outputDataSource)
    if (!validOutputDs || !records) return
    const sourceRecords = getOutputSourceRecords(records)
    outputDataSource.setSourceRecords(sourceRecords)
    outputDataSource.setStatus(DataSourceStatus.Unloaded)
    outputDataSource.setCountStatus(DataSourceStatus.Unloaded)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outputDataSource, records])
}

const getOutputSourceRecords = (records: DataRecord[]) => {
  const _records = records?.map((r, i) => {
    const featureDataRecord = r as FeatureDataRecord
    const data = featureDataRecord.getData()
    data[OutputDsObjectField] = i
    featureDataRecord.feature.attributes = data
    return r
  })
  return _records
}

/**
 * When the series data changes, return new query params
 * @param series
 */
const useUniqueQuery = (series: ImmutableArray<WebChartSeries>): IMFeatureLayerQueryParams => {
  const query = series?.[0]?.query
  const length = series?.length ?? 0

  return React.useMemo(() => {
    const valid = isValidSerialSeries(series)
    return valid ? buildUniqueQuery(series) : null as any
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, length])
}

/**
 * Map the status of the original data source to `sourceStatus` of runtime state
 * @param useDataSource
 * @param queryForOutput
 */
const useMapOriginDsStatusToSourceStatus = (
  useDataSource: ImmutableObject<UseDataSource>,
  queryForOutput: IMFeatureLayerQueryParams
) => {
  const dispatch = useChartRuntimeDispatch()
  const { sourceStatus } = useChartRuntimeState()
  const sourceStatusRef = hooks.useRefValue(sourceStatus)

  //When useDataSource is empty, set the `sourceStatus` to `NotReady`
  hooks.useUpdateEffect(() => {
    if (!useDataSource) {
      dispatch({ type: 'SET_SOURCE_STATUS', value: SourceStatus.NotReady })
    }
  }, [useDataSource])

  //When the original data source state changes, update it to the `sourceStatus` of runtime state
  const dsStatus = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[useDataSource?.dataSourceId]?.status)
  React.useEffect(() => {
    //If the status of original data source is `NotReady`, set the `sourceStatus` to `NotReady`
    if (dsStatus === DataSourceStatus.NotReady && sourceStatusRef.current !== SourceStatus.NotReady) {
      dispatch({ type: 'SET_SOURCE_STATUS', value: SourceStatus.NotReady })
      //If `sourceStatus` is `NotReady` and original data source not, set the `sourceStatus` to `Ready`
    } else if (sourceStatusRef.current === SourceStatus.NotReady) {
      dispatch({ type: 'SET_SOURCE_STATUS', value: SourceStatus.Ready })
    }
  }, [dispatch, dsStatus, sourceStatusRef])

  //When query is empty, it means that it's an invalid series, set the `sourceStatus` to `Ready`
  hooks.useUpdateEffect(() => {
    if (queryForOutput == null && sourceStatusRef.current !== SourceStatus.NotReady) {
      dispatch({ type: 'SET_SOURCE_STATUS', value: SourceStatus.Ready })
    }
  }, [queryForOutput])
}

/**
 * Map the `sourceStatus` of runtime state to the status of output data source
 * @param outputDataSource
 * @param sourceStatus
 */
const useMapSourceStatusToOutputDsStatus = (outputDataSource: DataSource, sourceStatus: SourceStatus) => {
  //When the request data fails or exceeds the limit, reset the state of the output data source
  hooks.useUpdateEffect(() => {
    if (sourceStatus === SourceStatus.LoadError || sourceStatus === SourceStatus.ExceedLimit) {
      if (outputDataSource.getStatus() !== DataSourceStatus.NotReady) {
        outputDataSource.setStatus(DataSourceStatus.NotReady)
        outputDataSource.setCountStatus(DataSourceStatus.NotReady)
      }
    }
  }, [sourceStatus, outputDataSource])
}

export const DataSourceManager = (props: DataSourceManagerProps) => {
  const {
    widgetId,
    series,
    useDataSource,
    outputDataSourceId
  } = props
  const { dataSource, outputDataSource, sourceStatus } = useChartRuntimeState()

  const dispatch = useChartRuntimeDispatch()

  //Maximum number of records allowed
  const limitedNumberOfRecords = series?.length ? MaxPieces / series?.length : undefined

  //Query parameters of the output data source
  const queryForOutput = useUniqueQuery(series)

  //When new records are requested, update them to the output data source
  useUpdateOutputDataSourceRecords(dataSource, outputDataSource, queryForOutput, limitedNumberOfRecords)

  //Map the status of the original data source to `sourceStatus` of runtime state
  useMapOriginDsStatusToSourceStatus(useDataSource, queryForOutput)

  //When the request data fails or exceeds the limit, reset the state of the output data source
  useMapSourceStatusToOutputDsStatus(outputDataSource, sourceStatus)

  //When the filter is modified, update it to the data source
  useUpdateOriginDatasourceFilter(widgetId)

  const outputUseDataSource: ImmutableObject<UseDataSource> = React.useMemo(() => {
    if (outputDataSourceId) {
      return Immutable({
        dataSourceId: outputDataSourceId,
        mainDataSourceId: outputDataSourceId
      })
    }
  }, [outputDataSourceId])


  const handleOutputDataSourceSchemaChange = () => {
    if (!outputDataSource) return
    if (outputDataSource.getStatus() !== DataSourceStatus.NotReady) {
      outputDataSource.setStatus(DataSourceStatus.NotReady)
      outputDataSource.setCountStatus(DataSourceStatus.NotReady)
    }
  }

  const handleDataSouceCreated = (dataSouce: DataSource) => {
    dispatch({ type: 'SET_DATA_SOURCE', value: dataSouce })
  }

  const handleOutputDataSouceCreated = (dataSouce: DataSource) => {
    dispatch({ type: 'SET_OUTPUT_DATA_SOURCE', value: dataSouce })
  }

  return <>
    <DataSourceComponent
      widgetId={widgetId}
      useDataSource={useDataSource}
      onDataSourceCreated={handleDataSouceCreated}
    />
    <DataSourceComponent
      widgetId={widgetId}
      useDataSource={outputUseDataSource}
      onDataSourceCreated={handleOutputDataSouceCreated}
      onDataSourceSchemaChange={handleOutputDataSourceSchemaChange}
    />
  </>
}
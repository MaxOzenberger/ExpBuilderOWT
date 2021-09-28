import { React, DataSource, DataRecord, ReactRedux, IMState } from 'jimu-core'

/**
 * Monitor and get the latest source records
 * @param dataSource
 */
export const useSourceRecords = (dataSource: DataSource): DataRecord[] => {
  const dataSourceId = dataSource?.id
  const sourceVersion = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.sourceVersion)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const records = React.useMemo(() => dataSource?.getSourceRecords() ?? [] as DataRecord[], [dataSource, sourceVersion])
  return records
}
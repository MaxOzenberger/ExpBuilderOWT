/** @jsx jsx */
import {
  jsx, css, DataRecordSetChangeMessage, DataRecordsSelectionChangeMessage, DataSource, DataSourceStatus,
  ImmutableArray, MessageManager, RecordSetChangeType, dataSourceUtils
} from 'jimu-core'
import { QueryItemType } from '../config'
import { DataSourceMap, DataSourceWithAdditionalStatusType, getDataSourceWithAdditionalStatusById, getItemValueForQueryItem, isMapRequiredForSpatialFilterType } from '../common/utils'
import { RuntimeQueryStateType, SpatialInteractiveDataType, RuntimeMainAssociatedDataMapType, JimuMapViewMapType, getWidgetRuntimeDataMap } from './widget-config'
import Widget, { Props } from './widget'
import { FeatureDataRecord, FeatureLayerDataSource, JimuMapView } from 'jimu-arcgis'
import { EntityNoteType, EntityStatusType, StatusIndicator } from '../common/common-components'
import { Icon } from 'jimu-ui'

const { iconMap } = getWidgetRuntimeDataMap()

export const getRuntimeMainAssociatedDataMap = (targetSelf: Widget, selectedQueryStateIndex = targetSelf.state.selectedQueryStateIndex): RuntimeMainAssociatedDataMapType => {
  const currentQueryStates = targetSelf.state.queryStates
  const currentSelectedQueryStateIndex = selectedQueryStateIndex
  const currentQueryState = currentQueryStates?.[currentSelectedQueryStateIndex]
  const currentQueryDsWithAdditionalStatus = getDataSourceWithAdditionalStatusFromQueryState(targetSelf.props, targetSelf.state.dss, currentQueryState)
  const currentQueryDs = currentQueryDsWithAdditionalStatus.dataSource as FeatureLayerDataSource
  const currentOriginDs = getOriginDataSourceOfDataSource(currentQueryDs)
  const currentJimuMapView = getJimuMapViewFromQueryState(targetSelf.state.jimuMapViewMap, currentQueryState)
  const currentDsEntityStatus = getDsEntityStatus(currentQueryDsWithAdditionalStatus, currentQueryState)
  const getCurrentDsEntityNote = getDsEntityNoteFunc(currentDsEntityStatus, currentQueryState, targetSelf)
  const isCurrentSpatialFilterDisabled = () => isSpatialFilterDisabled(currentQueryState, currentJimuMapView)
  return {
    currentQueryStates,
    currentSelectedQueryStateIndex,
    currentQueryState,
    currentQueryDsWithAdditionalStatus,
    currentQueryDs,
    currentOriginDs,
    currentJimuMapView,
    currentDsEntityStatus,
    getCurrentDsEntityNote,
    isCurrentSpatialFilterDisabled
  }
}

export const getSpatialRelLayerDss = (dss: DataSourceMap, queryState: RuntimeQueryStateType) => {
  // attribute value of 'spatialRelationUseDataSources' is immutable, destruct and reconstruct to an array to resolve circular reference issue
  const spatialRelationUseDataSources = [...(queryState?.getQueryItemValue('spatialRelationUseDataSources') ?? [])]
  const layerDss = spatialRelationUseDataSources.map(useDs => {
    return getDataSourceWithAdditionalStatusById(dss, useDs?.dataSourceId).dataSource as FeatureLayerDataSource
  }).filter(item => !!item)
  return layerDss
}

export const getDataSourceWithAdditionalStatusFromQueryState = (props: Props, dss: DataSourceMap, queryState: RuntimeQueryStateType) => {
  const dataSourceId = props.config.queryItems?.[queryState?.queryItemIndex]?.outputDataSourceId
  return getDataSourceWithAdditionalStatusById(dss, dataSourceId)
}

export const getOriginDataSourceOfDataSource = (ds: DataSource) => {
  return ds?.getOriginDataSources()?.[0] as FeatureLayerDataSource
}

export const getJimuMapViewFromQueryState = (jimuMapViewMap: JimuMapViewMapType, queryState: RuntimeQueryStateType) => {
  return jimuMapViewMap?.[queryState?.getQueryItemValue('spatialMapWidgetIds')?.[0]]
}

export const getDsEntityStatus = (dsWithAdditionalStatus: DataSourceWithAdditionalStatusType, queryState: RuntimeQueryStateType) => {
  const ds = dsWithAdditionalStatus.dataSource
  const originDs = getOriginDataSourceOfDataSource(ds)
  const originDsStatus = originDs?.getStatus()
  let dsEntityStatus = EntityStatusType.None
  if (dsWithAdditionalStatus.status === EntityStatusType.Error || queryState?.dsRemoved || [DataSourceStatus.LoadError].includes(originDsStatus)) {
    dsEntityStatus = EntityStatusType.Error
  } else if (originDsStatus === DataSourceStatus.NotReady) {
    dsEntityStatus = EntityStatusType.Warning
  } else if (dsWithAdditionalStatus.status === EntityStatusType.Loading) {
    dsEntityStatus = EntityStatusType.Loading
  }
  return dsEntityStatus as EntityStatusType
}

export const getDsEntityNoteFunc = (dsEntityNote: EntityStatusType, queryState: RuntimeQueryStateType, targetSelf: Widget) => {
  const dsEntityNoteMap = {
    error: () => ({
      renderIcon: (title) => <Icon icon={iconMap.iconError} title={title} color={targetSelf.props.theme?.colors?.palette?.danger?.[500]} />,
      message: targetSelf.getI18nMessage('dataSourceCreateError'),
      type: EntityStatusType.Error
    }),
    warning: () => {
      const ds = getDataSourceWithAdditionalStatusFromQueryState(targetSelf.props, targetSelf.state.dss, queryState).dataSource
      const originDs = getOriginDataSourceOfDataSource(ds)
      return {
        renderIcon: (title) => <Icon icon={iconMap.iconWarning} title={title} color={targetSelf.props.theme?.colors?.palette?.warning?.[700]} />,
        message: targetSelf.getI18nMessage('outputDataIsNotGenerated', {
          values: {
            outputDsLabel: originDs?.getLabel(),
            sourceWidgetName: targetSelf.props.dataSourceWidgetLabels?.[queryState?.queryItemIndex]
          }
        }),
        type: EntityStatusType.Warning
      }
    },
    loading: () => ({
      renderIcon: (title) => <StatusIndicator statusType={EntityStatusType.Loading} title={title} />,
      message: targetSelf.getI18nMessage('loading'),
      type: EntityStatusType.Loading
    })
  }
  return (dsEntityNoteMap[dsEntityNote] ?? (() => null)) as (() => EntityNoteType)
}

export const isSpatialFilterDisabled = (queryState: RuntimeQueryStateType, jimuMapView: JimuMapView) => {
  const spatialFilterTypes = queryState?.getQueryItemValue('spatialFilterTypes') ?? []
  const disabled = !!(!jimuMapView && spatialFilterTypes.length && spatialFilterTypes.every(type => isMapRequiredForSpatialFilterType(type)))
  return disabled
}

export const getInitialSpatialInteractiveData = (): SpatialInteractiveDataType => {
  return {
    isReady: false,
    layer: null,
    graphic: null
  }
}

export const getInitialQueryState = (queryItems: QueryItemType[] | ImmutableArray<QueryItemType>, index: number, stateItem?: Partial<RuntimeQueryStateType>): RuntimeQueryStateType => {
  const getQueryItemValue = (key, corrected = true) => getItemValueForQueryItem([queryItems[index], key], corrected)
  return {
    spatialFilterType: getQueryItemValue('spatialFilterTypes')?.[0],
    spatialInteractiveCreateToolType: getQueryItemValue('spatialInteractiveCreateToolTypes')?.[0],
    spatialInteractiveData: getInitialSpatialInteractiveData(),
    spatialRelation: getQueryItemValue('spatialRelations')?.[0],
    spatialRelLayerIndex: 0,
    attributeFilterSqlExprObj: getQueryItemValue('sqlExprObj'),
    queryData: {},
    resultStatus: '',
    queryItem: queryItems[index],
    queryItemIndex: index,
    spatialRelLayerGeometries: undefined,
    isLoadingRelLayerGeometries: false,
    refQueryItemButton: null,
    getQueryItemValue,
    ...stateItem
  }
}

export const resetQueryStatus = (currentQueryState: RuntimeQueryStateType, targetSelf: Widget) => {
  const currentQueryDs = getDataSourceWithAdditionalStatusFromQueryState(targetSelf.props, targetSelf.state.dss, currentQueryState).dataSource
  currentQueryDs.setStatus(DataSourceStatus.NotReady)
  currentQueryDs.setCountStatus(DataSourceStatus.NotReady)
  clearQueryResults(currentQueryState, targetSelf)
}

export const clearQueryResults = (currentQueryState: RuntimeQueryStateType, targetSelf: Widget) => {
  const currentQueryDs = getDataSourceWithAdditionalStatusFromQueryState(targetSelf.props, targetSelf.state.dss, currentQueryState).dataSource
  currentQueryDs.selectRecordsByIds([])
  MessageManager.getInstance().publishMessage(new DataRecordsSelectionChangeMessage(targetSelf.props.id, []))
  MessageManager.getInstance().publishMessage(new DataRecordSetChangeMessage(targetSelf.props.id, currentQueryDs.id, RecordSetChangeType.Remove))
  currentQueryState.queryData = null
  // set resultStatus to cleared if it is not falsy
  if (currentQueryState.resultStatus) {
    currentQueryState.resultStatus = 'cleared'
  }
  targetSelf.setState(({ queryStates }) => ({ queryStates: [...queryStates] }))
}

// getFeatureLayer logic duplicated from '../../../feature-info/src/runtime/components/data-loader'
export const getFeatureLayerFromDataSource = (dataSource, FeatureLayer, widgetId) => {
  let featureLayer
  const notToLoad = dataSource?.getDataSourceJson()?.isDataInDataSourceInstance
  if (notToLoad) {
    // chart output and selected features need load
    return dataSource.load({ returnGeometry: true }, { widgetId }).then(async (records) => {
      const dataRecords = await Promise.resolve(records) as FeatureDataRecord[]
      return await dataSourceUtils.createFeatureLayerByRecords(dataSource, dataRecords)
    }).catch(() => {
      return null
    })
  }
  if (dataSource.layer) {
    featureLayer = dataSource.layer
  } else {
    if (dataSource.itemId) {
      featureLayer = new FeatureLayer({
        ...(dataSource.url ? {
          url: dataSource.url
        } : {}),
        portalItem: {
          id: dataSource.itemId,
          portal: {
            url: dataSource.portalUrl
          }
        }
      })
    } else {
      featureLayer = new FeatureLayer({
        url: dataSource.url
      })
    }
  }

  // Bug: js-api does not enter the when callback if there is no load method here.
  return featureLayer.load().then(async () => {
    return await Promise.resolve(featureLayer)
  })
}

export const getPopperStyle = () => {
  return css`
    > .panel-header {
      .action-close {
        color: var(--primary-200);
        &:hover {
          color: var(--white);
        }
        &:disabled {
          color: var(--primary-400);
        }
      }
    }
  `
}

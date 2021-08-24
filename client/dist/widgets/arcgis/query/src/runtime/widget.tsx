/** @jsx jsx */
import { IFieldInfo } from '@esri/arcgis-rest-types'
import {
  React, jsx, lodash, Immutable, AllWidgetProps, MultipleDataSourceComponent, DataSource, loadArcGISJSAPIModules, IMState,
  FeatureLayerQueryParams, DataSourceStatus, MessageManager, DataRecordSetChangeMessage, RecordSetChangeType, appConfigUtils, getAppStore, FeatureDataRecord, FeatureLayerDataSource
} from 'jimu-core'
import { Button, Popper, Icon, WidgetPlaceholder, hooks, MobilePanel } from 'jimu-ui'
import { IMConfig, QueryArrangeType, SpatialFilterType } from '../config'
import defaultMessages from './translations/default'
import { createGetI18nMessage, ViewBlock, ViewBlockComponent, addTolerance, DataSourceMap } from '../common/utils'
import { StateHolder } from '../common/common-components'
import { getStyleForQuery } from '../common/style'
import { RuntimeMainAssociatedDataMapType, getWidgetRuntimeDataMap, JimuMapViewMapType, RuntimeQueryDataType, RuntimeQueryStateType } from './widget-config'
import { getRuntimeViewBlockScenarios } from './view-block-scenarios'
import { createViewBlockForRuntimeMain } from './view-block-runtime-main'
import {
  getRuntimeMainAssociatedDataMap, resetQueryStatus, getInitialQueryState, getInitialSpatialInteractiveData,
  getDataSourceWithAdditionalStatusFromQueryState, getOriginDataSourceOfDataSource, getFeatureLayerFromDataSource, getPopperStyle, getSpatialRelLayerDss
} from './widget-utils'
import { versionManager } from '../version-manager'

const { iconMap, unitInfoMap } = getWidgetRuntimeDataMap()

const popperModifiers = [{ name: 'preventOverflow', options: { padding: 1 } }]

export interface ExecutingQueryOptionsType extends Partial<RuntimeMainAssociatedDataMapType> {
  pagingSetting: {
    page: number
    pageSize: number
  }
}

export interface Props extends AllWidgetProps<IMConfig> {
  dataSourceWidgetLabels: string[]
}

export interface State {
  queryStates: RuntimeQueryStateType[]
  selectedQueryStateIndex: number
  propConfig: IMConfig
  popperVersion: number
  isOpen: boolean
  jimuMapViewMap: JimuMapViewMapType
  dss: DataSourceMap
  esriModuleMap: { [moduleName: string]: any }
}

export default class Widget extends React.PureComponent<Props, State> {
  static mapExtraStateProps = (state: IMState, ownProps: AllWidgetProps<IMConfig>) => {
    const dataSourceWidgetLabels = Array.from(ownProps?.useDataSources ?? []).map(useDataSource => {
      const dataSourceWidgetId = appConfigUtils.getWidgetIdByOutputDataSource(useDataSource)
      return state?.appConfig?.widgets?.[dataSourceWidgetId]?.label
    })
    return {
      dataSourceWidgetLabels
    }
  }

  static getDerivedStateFromProps (nextProps: AllWidgetProps<IMConfig>, prevState: State) {
    // if config items updated, reset all query states data
    if (!lodash.isDeepEqual(nextProps.config.queryItems, prevState.propConfig?.queryItems) || nextProps.config.arrangeType !== prevState.propConfig?.arrangeType) {
      const queryStates = Array.from(nextProps.config.queryItems || []).map((queryItem, x, queryItems) => getInitialQueryState(queryItems as any, x))
      return {
        queryStates,
        selectedQueryStateIndex: queryStates?.length === 1 && nextProps.config.arrangeType !== QueryArrangeType.Inline ? 0 : -1,
        propConfig: nextProps.config
      }
    }
    return null
  }

  static versionManager = versionManager;

  mainViewBlock: ViewBlock<RuntimeMainAssociatedDataMapType>

  getI18nMessage = createGetI18nMessage({ intl: this.props.intl, defaultMessages })

  constructor (props) {
    super(props)
    this.state = {
      queryStates: [],
      selectedQueryStateIndex: -1,
      propConfig: null,
      popperVersion: 1,
      isOpen: false,
      jimuMapViewMap: null,
      dss: {},
      esriModuleMap: {}
    }

    this.mainViewBlock = createViewBlockForRuntimeMain({
      targetSelf: this
    })
  }

  componentDidMount () {
    loadArcGISJSAPIModules([
      'esri/geometry/Multipoint',
      'esri/geometry/Polyline',
      'esri/geometry/Polygon',
      'esri/geometry/geometryEngine',
      'esri/layers/FeatureLayer',
      'esri/widgets/Sketch',
      'esri/symbols/support/jsonUtils'
    ]).then(modules => {
      const [Multipoint, Polyline, Polygon, geometryEngine, FeatureLayer, SketchClass, jsonUtils] = modules
      this.setState({ esriModuleMap: { Multipoint, Polyline, Polygon, geometryEngine, FeatureLayer, SketchClass, jsonUtils } })
    })
  }

  executingQuery = async (options: ExecutingQueryOptionsType): Promise<RuntimeQueryDataType> => {
    const { currentQueryState, currentQueryDs, currentOriginDs, currentJimuMapView, pagingSetting: { page, pageSize } } = options
    const currentQueryDsJson = currentQueryDs.getDataSourceJson()
    const isLocalDs = currentQueryDsJson?.isDataInDataSourceInstance
    if (isLocalDs) {
      currentQueryDs.setSourceRecords(currentOriginDs.getSourceRecords())
    }

    const { useAttributeFilter = true, useSpatialFilter = true} = currentQueryState.queryItem
    const mergedQueryParams = useAttributeFilter ? currentQueryDs.mergeQueryParams(currentOriginDs.getCurrentQueryParams() || {}, {
      where: currentQueryState.attributeFilterSqlExprObj?.sql || '1=1',
      orderByFields: (currentQueryState.getQueryItemValue('sortOptions') || []).filter(i => i.jimuFieldName).map(i => `${i.jimuFieldName} ${i.order}`)
    }): null
    // compose query params for query
    const queryParams: FeatureLayerQueryParams = {
      // url: ds.url,
      returnGeometry: true,
      page,
      pageSize,
      ...mergedQueryParams
    }
    if (useSpatialFilter) {
      if (currentQueryState.spatialFilterType === SpatialFilterType.CurrentMapExtent) {
        currentJimuMapView && Object.assign(queryParams, {
          geometry: currentJimuMapView.view.extent.toJSON()
        })
      } else if (currentQueryState.spatialFilterType === SpatialFilterType.InteractiveDrawMode) {
        const geometry = currentQueryState.spatialInteractiveData?.graphic?.geometry
        currentJimuMapView && Object.assign(queryParams, {
          geometry: (['point', 'polyline'].includes(geometry?.type)
            ? addTolerance(geometry, currentJimuMapView.view, { geometryEngine: this.state.esriModuleMap.geometryEngine })
            : geometry)?.toJSON(),
          distance: currentQueryState.getQueryItemValue('spatialInteractiveBufferDistance'),
          units: unitInfoMap[currentQueryState.getQueryItemValue('spatialInteractiveBufferUnit')]
        })
      }
      // else if (currentQueryState.spatialFilterType === SpatialFilterType.SpatialRelationship) {
      //   const { Multipoint, Polyline, Polygon, geometryEngine } = this.state.esriModuleMap
      //   const geometry = convertGeometriesForQuery(currentQueryState.spatialRelLayerGeometries, { Multipoint, Polyline, Polygon, geometryEngine })
      //   Object.assign(queryParams, {
      //     geometry,
      //     spatialRelationship: spatialRelationInfoMap[currentQueryState.spatialRelation],
      //     distance: currentQueryState.getQueryItemValue('spatialRelationBufferDistance'),
      //     units: unitInfoMap[currentQueryState.getQueryItemValue('spatialRelationBufferUnit')]
      //   })
      // }
    }

    // update ds in order to execute query
    currentQueryDs.updateQueryParams(queryParams, this.props.id)
    currentQueryDs.setStatus(DataSourceStatus.Unloaded)
    currentQueryDs.setCountStatus(DataSourceStatus.Unloaded)

    // execute query
    const gettingQueryRecords = currentQueryDs.load(queryParams, { widgetId: this.props.id, refresh: true })
    const gettingResultCount = currentQueryDs.loadCount(queryParams, { widgetId: this.props.id, refresh: true })
    const gettingPopupInfo = currentQueryDs.getPopupInfo()

    // collect data received
    currentQueryState.spatialInteractiveData.layer?.removeAll()
    this.setState(({ queryStates }) => ({ queryStates: (currentQueryState.spatialInteractiveData = getInitialSpatialInteractiveData(), [...queryStates]) }))
    const layerDefinition = currentQueryDs.getLayerDefinition()
    const getDefaultFieldInfos = () => [{ fieldName: layerDefinition?.objectIdField ?? 'objectid', label: 'OBJECTID', tooltip: '', visible: true }] as IFieldInfo[]
    const popupInfo = await gettingPopupInfo
    const fieldInfos = ((fieldInfos) => (fieldInfos.length ? fieldInfos : getDefaultFieldInfos()))(((popupInfo)?.fieldInfos || []).filter(i => i.visible))
    const fields = currentQueryDs.getSchema()?.fields
    const selectedFieldNames = fieldInfos.map(fieldInfo => fieldInfo.fieldName)
    const selectedFieldJimuNames = fields ? Object.keys(fields).filter(jimuName => selectedFieldNames.includes(fields[jimuName].name)) : []
    currentQueryDs.setSelectedFields(selectedFieldJimuNames)
    const records = await gettingQueryRecords
    if (!currentQueryDs?.layer) {
      const featureLayer = await getFeatureLayerFromDataSource(currentQueryDs, this.state.esriModuleMap.FeatureLayer, this.props.id)
      records.forEach(record => {
        (record as any).feature.sourceLayer = featureLayer
      })
    }
    const queryData = {
      queryResult: {
        records,
        fields: fieldInfos.map(fieldInfo => fieldInfo.fieldName)
      },
      resultCount: await gettingResultCount,
      fieldInfos,
      layerDefinition,
      symbolJson: currentQueryState.getQueryItemValue('resultCustomSymbol'),
      esriModuleMap: this.state.esriModuleMap,
      intl: this.props.intl,
      ds: currentQueryDs
    }

    // publish message
    const dataRecordSetChangeMessage = new DataRecordSetChangeMessage(this.props.id, currentQueryDs.id, RecordSetChangeType.Update, {
      records: queryData?.queryResult?.records,
      fields: queryData?.queryResult?.fields,
      dataSource: currentQueryDs
    })
    MessageManager.getInstance().publishMessage(dataRecordSetChangeMessage)

    return queryData
  }

  renderArrangeIconPopper = ({ queryContent }) => {
    const { config, icon } = this.props
    const togglePopper = this.updateStateByTogglePopper
    return (
      <StateHolder initState={{}}>
        {
          ({ refContainer: [refWidgetIcon, setRefWidgetIcon] }) => {
            const isMobile = hooks.useCheckSmallBrowserSzieMode()
            const title = this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })
            return (
              <div className='runtime-query__widget-popper'>
                <Button ref={ref => setRefWidgetIcon(ref)} className='runtime-query__widget-icon-button h-100' icon size='sm' type='tertiary' onClick={togglePopper}>
                  <Icon size={16} {...(typeof icon === 'string' ? { icon, color: '' } : { icon: icon.svg, color: icon.properties.color })} />
                </Button>
                {
                  this.state.popperVersion > 1 && (
                    isMobile ? (
                      <MobilePanel
                        open={this.state.isOpen}
                        title={title}
                        toggle={togglePopper}
                      >
                        {queryContent}
                      </MobilePanel>
                    ) : (
                      <Popper
                        className='ui-unit-popper ui-unit-popper_k-arrangement-icon flex-grow-1'
                        floating
                        open={this.state.isOpen}
                        headerTitle={title}
                        onHeaderClose={togglePopper}
                        minSize={config.sizeMap?.arrangementIconPopper?.minSize}
                        defaultSize={config.sizeMap?.arrangementIconPopper?.defaultSize}
                        // onResize={() => 'handleResize'}
                        dragBounds='body'
                        version={this.state.popperVersion}
                        reference={refWidgetIcon}
                        placement='bottom-start'
                        modifiers={popperModifiers}
                        css={getPopperStyle()}
                      >
                        {queryContent}
                      </Popper>
                    )
                  )
                }
              </div>
            )
          }
        }
      </StateHolder>
    )
  }

  render () {
    const widgetLabel = this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: defaultMessages._widgetLabel })
    if (!this.state.queryStates.length) {
      return <WidgetPlaceholder icon={iconMap.iconQuery} widgetId={this.props.id} message={widgetLabel} />
    }
    const allUseDataSources = [
      ...((this.state.queryStates ?? []).map(queryState => [queryState?.queryItem?.useDataSource, {
        dataSourceId: queryState?.queryItem?.outputDataSourceId,
        mainDataSourceId: queryState?.queryItem?.outputDataSourceId
      }]) as any).flat(),
      ...((this.state.queryStates || []).map(queryState => queryState?.getQueryItemValue('spatialRelationUseDataSources')) as any).flat().filter(i => i)
    ]
    return (
      <div className='jimu-widget runtime-query' css={getStyleForQuery(this.props.theme)}>
        <MultipleDataSourceComponent
          useDataSources={Immutable(allUseDataSources)}
          widgetId={this.props.id}
          localId='local'
          onDataSourceCreated={this.updateStateByDataSourceCreated}
          onDataSourceInfoChange={infos => {
            this.state.queryStates.forEach(queryState => {
              let dsRemoved = false
              const currentQueryDs = getDataSourceWithAdditionalStatusFromQueryState(this.props, this.state.dss, queryState).dataSource
              if (currentQueryDs) {
                const originDs = getOriginDataSourceOfDataSource(currentQueryDs)
                if (originDs?.getStatus() === DataSourceStatus.NotReady && currentQueryDs?.getStatus() !== DataSourceStatus.NotReady) {
                  resetQueryStatus(queryState, this)
                }
                if (!getAppStore().getState().dataSourcesInfo[queryState?.queryItem?.useDataSource?.dataSourceId]) {
                  dsRemoved = true
                }
              }
              queryState.dsRemoved = dsRemoved
            })
            return this.updateStateByDataSourceInfoChange()
          }}
        />
        <ViewBlockComponent
          currentViewBlock={this.mainViewBlock}
          getViewBlockScenarios={getRuntimeViewBlockScenarios}
          associatedData={getRuntimeMainAssociatedDataMap(this)}
        />
      </div>
    )
  }

  updateStateByTogglePopper = () => {
    this.setState(({ isOpen, popperVersion }) => ({ isOpen: !isOpen, popperVersion: popperVersion + (+!isOpen) }))
  }

  updateStateByDataSourceCreated = (dss: { [dataSourceId: string]: DataSource }) => {
    this.setState({ dss })
  }

  updateStateByDataSourceInfoChange = () => {
    this.setState(({ dss }) => ({ dss: { ...dss } }))
  }

  selectSpatialRelLayer = (layerDss: FeatureLayerDataSource[], spatialRelLayerIndex: number) => {
    const associatedData = getRuntimeMainAssociatedDataMap(this)
    const { currentSelectedQueryStateIndex, currentJimuMapView } = associatedData
    const layerDs = layerDss[spatialRelLayerIndex]
    // remove the layer if existed in map
    currentJimuMapView?.view?.map?.layers?.removeMany(layerDss.filter(i => i !== layerDs).map(i => i.layer));
    // re-add the layer to the map
    ((layers, layer) => (layers?.includes(layer) || layers?.add(layer)))(currentJimuMapView?.view?.map?.layers, layerDs?.layer)
    this.setState(({ queryStates }) => {
      const nextQueryStates = [...queryStates]
      nextQueryStates[currentSelectedQueryStateIndex] = {
        ...nextQueryStates[currentSelectedQueryStateIndex],
        spatialRelLayerGeometries: null,
        isLoadingRelLayerGeometries: true
      }
      return { queryStates: nextQueryStates }
    }, () => {
      layerDs.query({ returnGeometry: true }).then(result => {
        const geometries = (result.records as FeatureDataRecord[]).map(record => record.feature.geometry)
        this.setState(({ queryStates }) => {
          const nextQueryStates = [...queryStates]
          nextQueryStates[currentSelectedQueryStateIndex] = {
            ...nextQueryStates[currentSelectedQueryStateIndex],
            spatialRelLayerIndex: spatialRelLayerIndex,
            spatialRelLayerGeometries: geometries,
            isLoadingRelLayerGeometries: false
          }
          return { queryStates: nextQueryStates }
        })
      })
    })
  }

  selectSpatialRelLayerOnMount = (instance) => {
    const { currentQueryState } = getRuntimeMainAssociatedDataMap(this)
    if (instance) {
      const layerDss = getSpatialRelLayerDss(this.state.dss, currentQueryState)
      this.selectSpatialRelLayer(layerDss, currentQueryState.spatialRelLayerIndex)
    } else {
      currentQueryState.spatialRelLayerGeometries = null
      this.setState(({ queryStates }) => ({ queryStates: [...queryStates] }))
    }
  }
}

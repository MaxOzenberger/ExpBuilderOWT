/** @jsx jsx */
import {
  React,
  jsx,
  AllWidgetProps,
  classNames,
  ThemeVariables,
  SerializedStyles,
  css,
  DataSourceComponent,
  QueriableDataSource,
  Immutable,
  appActions,
  lodash,
  QueryParams,
  MessageManager,
  DataRecordsSelectionChangeMessage,
  ClauseValuePair,
  ReactResizeDetector,
  Global,
  DataSourceInfo,
  IMDataSourceInfo,
  getAppStore,
  CONSTANTS,
  DataSourceStatus,
  IMState,
  dataSourceUtils,
  MutableStoreManager,
  DataSourceManager,
  DataRecord,
  appConfigUtils,
  QueryScope,
  WidgetState,
  FieldSchema,
  ImmutableObject,
  privilegeUtils,
  AppMode,
  esri
} from 'jimu-core'
import {
  IMConfig,
  LayersConfig,
  SelectionModeType,
  TableArrangeType,
  Suggestion
} from '../config'
import {
  loadArcGISJSAPIModules,
  FeatureDataRecord,
  FeatureLayerDataSource
} from 'jimu-arcgis'
import defaultMessages from './translations/default'
import {
  WidgetPlaceholder,
  defaultMessages as jimuUIDefaultMessages,
  Button,
  Icon,
  TextInput,
  Tabs,
  Tab,
  Select,
  AdvancedSelect,
  Popper,
  DataActionDropDown,
  Alert
} from 'jimu-ui'
import { LayoutItemSizeModes } from 'jimu-layouts/layout-runtime'
import { getStyle, getSuggestionStyle } from './style'
import { fetchSuggestionRecords } from './utils'

const { BREAK_POINTS, SELECTION_DATA_VIEW_ID, DATA_VIEW_ID_FOR_NO_SELECTION } = CONSTANTS
const showSelectedOnlyIcon = require('jimu-ui/lib/icons/show-selected-only.svg')
const showSelectedIconRTL = require('jimu-ui/lib/icons/show-selected-only-rtl.svg')
const showAllIcon = require('jimu-ui/lib/icons/show-all.svg')
const uncheckAllIcon = require('jimu-ui/lib/icons/uncheck-all.svg')
const resetIcon = require('jimu-ui/lib/icons/reset.svg')
const showHideIcon = require('jimu-ui/lib/icons/show-hide-cols.svg')
const IconClose = require('jimu-ui/lib/icons/close.svg')
const tablePlaceholderIcon = require('./assets/icons/placeholder-table.svg')
const SEARCH_TOOL_MIN_SIZE = 220
// Due to API limitations, the icon color of the drop-down menu requires special treatment
const showSelectedOnlyWhiteIcon = require('jimu-ui/lib/icons/show-selected-only-white.svg')
const showSelectedWhiteIconRTL = require('jimu-ui/lib/icons/show-selected-only-rtl-white.svg')
const showAllWhiteIcon = require('jimu-ui/lib/icons/show-all-white.svg')
const uncheckAllWhiteIcon = require('jimu-ui/lib/icons/uncheck-all-white.svg')
const resetWhiteIcon = require('jimu-ui/lib/icons/reset-white.svg')
const showHideWhiteIcon = require('jimu-ui/lib/icons/show-hide-cols-white.svg')
// const warningIcon = require('jimu-ui/lib/icons/warning-16.svg')
const notLoad = [DataSourceStatus.NotReady, DataSourceStatus.LoadError]
const Sanitizer = esri.Sanitizer
const sanitizer = new Sanitizer()

export interface Props {
  appMode: AppMode
  dataSourcesInfo?: { [dsId: string]: DataSourceInfo }
  isRTL: boolean
  stateShowLoading: boolean
  currentPageId: string
  viewInTableObj: { [id: string]: LayersConfig }
  enableDataAction: boolean
  belongToDataSourceInfos: any
  isWidthAuto: boolean
  isHeightAuto: boolean
}

export interface State {
  apiLoaded: boolean
  dataSource: QueriableDataSource
  activeTabId: string
  downloadOpen: boolean
  searchText: string
  selectQueryFlag: boolean
  mobileFlag: boolean
  searchToolFlag: boolean
  tableShowColumns: ClauseValuePair[]
  isOpenSearchPopper: boolean
  emptyTable: boolean
  emptyData: boolean
  selectRecords: DataRecord[]
  notReady: boolean
  selfDsChange: boolean
  advancedField: ImmutableObject<FieldSchema>
  advancedTableField: {
    value: string
    label: string
  }[]
  showLoading: boolean
  interval: number
  autoRefreshLoadingString: string
  isShowSuggestion: boolean
  searchSuggestion: Suggestion[]
}

export default class Widget extends React.PureComponent<
AllWidgetProps<IMConfig> & Props,
State
> {
  table: __esri.FeatureTable
  dataSourceChange: boolean
  dataActionCanLoad: boolean
  dropdownCsv: any
  refs: {
    tableContainer: HTMLInputElement
    advancedSelect: HTMLElement
    searchPopup: HTMLDivElement
    currentEl: HTMLElement
    suggestPopup: HTMLDivElement
  }
  updatingTable: boolean
  removeConfig: boolean
  debounceOnResize: (width, height) => void
  dsManager: DataSourceManager
  autoRefreshLoadingTime: any
  resetAutoRefreshTime: any
  suggestionsQueryTimeout: any
  currentRequestId: number
  FeatureTable: typeof __esri.FeatureTable = null
  FeatureLayer: typeof __esri.FeatureLayer = null

  static mapExtraStateProps = (
    state: IMState,
    props: AllWidgetProps<IMConfig>
  ): Props => {
    const { layoutId, layoutItemId, id } = props
    const currentWidget = state?.appConfig?.widgets?.[id]
    const enableDataAction = currentWidget?.enableDataAction
    const dsIds = currentWidget?.useDataSources?.map(dsJson => {
      return dsJson.dataSourceId
    })
    const dataInstance = DataSourceManager.getInstance()
    const belongToDataSourceInfos = {}
    dsIds?.forEach(dsId => {
      const belongToDs = dataInstance.getDataSource(dsId)?.belongToDataSource
      belongToDataSourceInfos[dsId] = state?.dataSourcesInfo?.[belongToDs?.id]
    })

    const appConfig = state && state.appConfig
    const layout = appConfig.layouts?.[layoutId]
    const layoutSetting = layout?.content?.[layoutItemId]?.setting
    const isHeightAuto =
      layoutSetting?.autoProps?.height === LayoutItemSizeModes.Auto ||
      layoutSetting?.autoProps?.height === true
    const isWidthAuto =
      layoutSetting?.autoProps?.width === LayoutItemSizeModes.Auto ||
      layoutSetting?.autoProps?.width === true
    return {
      appMode: state?.appRuntimeInfo?.appMode,
      isRTL: state?.appContext?.isRTL,
      stateShowLoading: state?.widgetsState?.[props.id]?.showLoading,
      currentPageId: state?.appRuntimeInfo?.currentPageId,
      viewInTableObj: props?.mutableStateProps?.viewInTableObj,
      enableDataAction: enableDataAction === undefined ? true : enableDataAction,
      belongToDataSourceInfos,
      isHeightAuto,
      isWidthAuto
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      apiLoaded: false,
      dataSource: undefined,
      activeTabId: undefined,
      downloadOpen: false,
      searchText: '',
      selectQueryFlag: false,
      mobileFlag: false,
      searchToolFlag: false,
      tableShowColumns: undefined,
      isOpenSearchPopper: false,
      emptyTable: false,
      emptyData: false,
      selectRecords: [],
      notReady: false,
      selfDsChange: false,
      advancedField: undefined,
      advancedTableField: [],
      showLoading: false,
      interval: 0,
      autoRefreshLoadingString: '',
      isShowSuggestion: false,
      searchSuggestion: []
    }
    this.dataSourceChange = false
    this.dataActionCanLoad = true
    this.updatingTable = false
    this.removeConfig = false
    this.currentRequestId = 0
    this.debounceOnResize = lodash.debounce(
      (width, height) => this.onToolStyleChange(width, height),
      200
    )
    this.dsManager = DataSourceManager.getInstance()
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const { config } = nextProps
    const { layersConfig } = config
    const { activeTabId } = prevState
    // data-action Table
    const daLayersConfig = new Widget(nextProps).getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({deep:true}).concat(daLayersConfig)
    if ((!activeTabId || allLayersConfig.findIndex(x => x.id === activeTabId) < 0) && allLayersConfig.length > 0) {
      const curConfig = allLayersConfig.find(
        item => item.id === allLayersConfig[0]?.id
      )
      const newAdvancedField = curConfig && curConfig.allFields[0]
      const newAdvancedTableField = curConfig && curConfig.tableFields.map(item => {
        return { value: item.name, label: item.alias }
      })
      return {
        activeTabId: allLayersConfig[0]?.id,
        advancedField: newAdvancedField,
        advancedTableField: newAdvancedTableField
      }
    }
    return null
  }

  componentDidMount () {
    if (!this.state.apiLoaded) {
      loadArcGISJSAPIModules([
        'esri/widgets/FeatureTable',
        'esri/layers/FeatureLayer'
      ]).then(modules => {
        ;[this.FeatureTable, this.FeatureLayer] = modules
        this.setState({
          apiLoaded: true
        })
        this.destoryTable().then(() => {
          this.createTable()
        })
      })
    }
  }

  componentWillUnmount () {
    const { id } = this.props
    if (this.table) {
      (this.table as any).menu.open = false
    }
    clearTimeout(this.suggestionsQueryTimeout)
    clearInterval(this.autoRefreshLoadingTime)
    MutableStoreManager.getInstance().updateStateValue(id, 'viewInTableObj', {})
  }

  componentDidUpdate (prevProps, prevState) {
    const { activeTabId, dataSource, advancedTableField } = this.state
    const { id, config, currentPageId, state, belongToDataSourceInfos, appMode } = this.props
    const { layersConfig } = config
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({deep:true}).concat(daLayersConfig)
    const removeLayerFlag = this.props?.stateProps?.removeLayerFlag || false
    const dataActionActiveObj = this.props?.stateProps?.dataActionActiveObj
    const newActiveTabId = dataActionActiveObj?.dataActionTable ? dataActionActiveObj?.activeTabId : activeTabId
    if (removeLayerFlag) {
      const popover = document.getElementsByClassName(
        'esri-popover esri-popover--open'
      )
      if (popover && popover.length > 0) popover[0].remove()
      this.props.dispatch(
        appActions.widgetStatePropChange(id, 'removeLayerFlag', false)
      )
    }
    // close table menu
    const controllerClose = state === WidgetState.Closed
    const pageClose = prevProps.currentPageId !== currentPageId
    const liveClose = prevProps.appMode === AppMode.Run && appMode === AppMode.Design
    if ((controllerClose || pageClose || liveClose) && this.table) {
      (this.table as any).menu.open = false
    }
    const prevCurConfig = prevProps.config.layersConfig.concat(daLayersConfig).find(
      item => item.id === prevState.activeTabId
    )
    const newCurConfig = allLayersConfig.find(
      item => item.id === newActiveTabId
    )
    if (this.removeConfig) {
      this.removeConfig = false
      if (!newCurConfig) return
    } else {
      if (!prevCurConfig || !newCurConfig) return
    }
    // table advanced selector
    const { allFields } = this.getFieldsFromDatasource()
    const newAdvancedTableField = newCurConfig.tableFields?.map(item => {
      return { value: item.name, label: item.alias }
    })
    if (!lodash.isDeepEqual(newAdvancedTableField,advancedTableField) || newActiveTabId !== prevState.activeTabId) {
      this.setState({
        advancedField: allFields?.[0],
        advancedTableField: newAdvancedTableField
      })
    }
    const optionKeys = [
      'enableAttachements',
      'enableEdit',
      'allowCsv',
      'enableSearch',
      'searchFields',
      'enableRefresh',
      'enableSelect',
      'selectMode',
      'tableFields'
    ]
    let optionChangeFlag = false
    for (const i in optionKeys) {
      const item = optionKeys[i]
      const changeFlag = item !== 'tableFields' ? (prevCurConfig?.[item] !== newCurConfig?.[item]) : !lodash.isDeepEqual(prevCurConfig?.[item], newCurConfig?.[item])
      if (changeFlag) {
        optionChangeFlag = true
        break
      }
    }
    // belongToDataSource info change (update geometry and sql)
    const preDsId = prevCurConfig?.useDataSource?.dataSourceId
    const curDsId = newCurConfig?.useDataSource?.dataSourceId
    const preBelongToWidgetQuery = prevProps?.belongToDataSourceInfos?.[preDsId]?.widgetQueries
    const curBelongToWidgetQuery = belongToDataSourceInfos?.[curDsId]?.widgetQueries
    const preBelongToSourceVersion = prevProps?.belongToDataSourceInfos?.[preDsId]?.sourceVersion
    const curBelongToSourceVersion = belongToDataSourceInfos?.[curDsId]?.sourceVersion
    const curBelongToDsStatus = belongToDataSourceInfos?.[curDsId]?.status
    // changes are only caused by belongtoDataSource
    if (!newCurConfig.dataActionObject && preDsId === curDsId && preBelongToWidgetQuery !== curBelongToWidgetQuery) {
      this.updateGeometryAndSql(dataSource)
    }
    const needUpdateTable = () => {
      const dsReady = !notLoad.includes(curBelongToDsStatus)
      const tabChange = dsReady && prevCurConfig?.id !== newCurConfig?.id
      const tableOptionChange = dsReady && prevCurConfig?.id === newCurConfig?.id && optionChangeFlag
      const belongToSourceVersionChange = dataSource && curBelongToSourceVersion && preBelongToSourceVersion !== curBelongToSourceVersion
      return tabChange || tableOptionChange || belongToSourceVersionChange
    }
    if (dataActionActiveObj?.dataActionTable && this.dataActionCanLoad && !this.updatingTable) {
      this.dataActionCanLoad = false
      this.props.dispatch(
        appActions.widgetStatePropChange(id, 'dataActionActiveObj', { activeTabId: newActiveTabId, dataActionTable: false })
      )
      this.updatingTable = true
      this.setState(
        {
          activeTabId: newActiveTabId,
          searchText: '',
          tableShowColumns: undefined
        },
        () => {
          this.destoryTable().then(() => {
            this.createTable()
          })
        }
      )
      return
    }
    if (needUpdateTable()) {
      this.updatingTable = true
      this.setState(
        {
          searchText: '',
          tableShowColumns: undefined
        },
        () => {
          this.destoryTable().then(() => {
            this.createTable()
          })
        }
      )
    }
  }

  getFieldsFromDatasource = () => {
    const { config } = this.props
    const { layersConfig } = config
    const { activeTabId } = this.state
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({deep:true}).concat(daLayersConfig)
    const curLayer = allLayersConfig
      .find(item => item.id === activeTabId)
    // allFields need recalculate(chart output ds)
    const selectedDs = this.dsManager.getDataSource(curLayer.useDataSource?.dataSourceId)
    const allFieldsSchema = selectedDs?.getSchema()
    const allFields = allFieldsSchema?.fields ? Object.values(allFieldsSchema?.fields) : []
    const defaultInvisible = [
      'CreationDate',
      'Creator',
      'EditDate',
      'Editor',
      'GlobalID'
    ]
    let tableFields = allFields.filter(
      item => !defaultInvisible.includes(item.jimuName)
    )
    // If there are too many columns, only the first 50 columns will be displayed by default
    if (tableFields?.length > 50) {
      tableFields = tableFields.slice(0,50)
    }
    return { allFields, tableFields }
  }

  onToolStyleChange = (width, height) => {
    width < BREAK_POINTS[0]
      ? this.setState({ mobileFlag: true })
      : this.setState({ mobileFlag: false })
    width < SEARCH_TOOL_MIN_SIZE
      ? this.setState({ searchToolFlag: true })
      : this.setState({ searchToolFlag: false })
  }

  minusArray = (array1, array2, key?: string) => {
    const keyField = key || 'jimuName'
    const lengthFlag = array1.length > array2.length
    const arr1 = lengthFlag ? array1 : array2
    const arr2 = lengthFlag ? array2 : array1
    return arr1.filter(item => {
      const hasField = arr2.some(ele => {
        return ele?.[keyField] === item?.[keyField]
      })
      return !hasField
    })
  }

  onDataSourceCreated = (dataSource: QueriableDataSource): void => {
    this.setState({ dataSource })
    const isSelectionView = dataSource?.dataViewId === SELECTION_DATA_VIEW_ID
    const hasNoSelectionView = !!dataSource.getMainDataSource().getDataView(DATA_VIEW_ID_FOR_NO_SELECTION)
    if (isSelectionView && hasNoSelectionView) {
      this.destoryTable().then(() => {
        this.createTable(dataSource)
      })
    }
  }

  updateGeometryAndSql = (dataSource) => {
    if (!this.table?.layer) return
    const dsParam: any = dataSource?.getCurrentQueryParams()
    const orgExpression = this.table.layer.definitionExpression
    if (orgExpression !== dsParam?.where) {
      this.table.layer.definitionExpression = dsParam?.where
    }
    dataSourceUtils.changeJimuFeatureLayerQueryToJSAPILayerQuery(dataSource as FeatureLayerDataSource, Immutable(dsParam)).then(res => {
      if (!res?.geometry) return
      const newGeometry = res.geometry
      const newGeometryJson = (newGeometry as any)?.toJSON()
      const orgGeometryJson = (this.table?.filterGeometry as any)?.toJSON()
      if (!lodash.isDeepEqual(orgGeometryJson, newGeometryJson)) {
        (this.table.filterGeometry as any) = newGeometry
      }
    })
  }

  onDataSourceInfoChange = (
    info: IMDataSourceInfo,
    preInfo?: IMDataSourceInfo
  ) => {
    if (!info) {
      this.destoryTable().then(() => {
        this.setState({ emptyTable: true })
      })
      return
    }
    this.dataSourceChange = true
    if (info?.status === DataSourceStatus.Loaded && preInfo?.status === DataSourceStatus.Loaded) {
      this.dataSourceChange = false
    }
    let { dataSource } = this.state
    const { selectQueryFlag, activeTabId, selfDsChange } = this.state
    const { config } = this.props
    const { layersConfig } = config
    // config info
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({deep:true}).concat(daLayersConfig)
    const curLayer = allLayersConfig
      .find(item => item.id === activeTabId)
    const useDS = curLayer?.useDataSource
    // If other widgets load data, status will be loaded at the first time
    // This time state.dataSource is undefined
    if ((!dataSource && useDS) || (dataSource?.id !== useDS?.dataSourceId)) {
      dataSource = this.dsManager.getDataSource(useDS?.dataSourceId) as QueriableDataSource
      if (!dataSource) {
        this.setState({ emptyTable: true })
        return
      }
    } else if(!dataSource && !useDS) {
      return
    }
    if (!info?.status || info?.status === DataSourceStatus.NotReady) {
      this.destoryTable().then(() => {
        this.setState({
          notReady: true,
          emptyTable: true
        })
      })
      return
    } else {
      this.setState({
        notReady: false,
        emptyTable: false
      })
    }
    // loading status
    const showLoading = this.getLoadingStatus(dataSource, info?.status)
    const interval = dataSource?.getAutoRefreshInterval() || 0
    // toggle auto refresh loading status
    this.toggleAutoRefreshLoading(dataSource, showLoading, interval)
    this.setState({
      showLoading,
      interval
    })
    // widgetQuery change (update geometry and sql)
    const dsParam: any = dataSource && dataSource.getCurrentQueryParams()
    const widgetQueryChange = !curLayer.dataActionObject && info?.widgetQueries !== preInfo?.widgetQueries
    if (widgetQueryChange) {
      this.updateGeometryAndSql(dataSource)
    }
    // shielding info change
    const preSelectedIds = preInfo?.selectedIds
    const newSelectedIds = info?.selectedIds
    const preSourceVersion = preInfo?.sourceVersion
    const newSourceVersion = info?.sourceVersion
    const newVersion = info?.gdbVersion
    const preVersion = preInfo?.gdbVersion
    const infoStatusNotChange =
      curLayer?.useDataSource?.dataSourceId === dataSource?.id &&
      preInfo?.status === info?.status &&
      preInfo?.instanceStatus === info?.instanceStatus &&
      info?.widgetQueries === preInfo?.widgetQueries &&
      preSelectedIds === newSelectedIds &&
      preSourceVersion === newSourceVersion &&
      newVersion === preVersion
    if (
      notLoad.includes(info?.status) ||
      this.updatingTable ||
      infoStatusNotChange
    ) { return }
    // data-action
    this.setState({ selectRecords: dataSource?.getSelectedRecords() })
    // version manager
    if (preVersion && newVersion && newVersion !== preVersion && this.table) {
      this.updatingTable = true
      this.destoryTable().then(() => {
        this.createTable()
      })
      return
    }
    // ds ready create table and selected features change
    const tabChange = curLayer?.useDataSource?.dataSourceId !== dataSource?.id
    const outputReapply = (!preInfo?.status || notLoad.includes(preInfo?.status)) && info && !notLoad.includes(info?.status)
    const selectedChange = preSelectedIds !== newSelectedIds && (preSelectedIds?.length !== 0 || newSelectedIds?.length !== 0)
    const infoNotChange = info?.status === preInfo?.status && info?.instanceStatus === preInfo?.instanceStatus
    const isOutputDs = dataSource?.getDataSourceJson()?.isOutputFromWidget
    const dsCreated = !curLayer.dataActionObject && info?.status === DataSourceStatus.Unloaded && info?.instanceStatus === DataSourceStatus.Created
      && !selectedChange && !infoNotChange && !isOutputDs
    const sourceVerChange = preSourceVersion !== newSourceVersion
    if (outputReapply || tabChange || dsCreated || sourceVerChange) {
      if (!this.dataActionCanLoad) return
      this.updatingTable = true
      this.destoryTable().then(() => {
        this.createTable(dataSource)
      })
      return
    }
    // async click selected
    // Action table does not need to be selected synchronously
    if (!curLayer.dataActionObject && preSelectedIds !== newSelectedIds) {
      if (selectQueryFlag) {
        this.asyncSelectedWhenSelection(newSelectedIds || Immutable([]))
        setTimeout(() => {
          this.asyncSelectedRebuild(dataSource)
        }, 500)
      } else {
        if (selfDsChange) {
          this.setState({ selfDsChange: false })
        } else {
          setTimeout(() => {
            this.asyncSelectedRebuild(dataSource)
          }, 500)
        }
      }
    }
    // update table (exclude view in table)
    if(!curLayer.dataActionObject && this.table?.layer && preSelectedIds === newSelectedIds) {
      this.table.layer.definitionExpression = dsParam.where
    }
  }

  onQueryRequired = (queryRequiredInfo) => {
    const { dataSource } = this.state
    const dataSourceId = dataSource?.id
    const needRefresh = queryRequiredInfo?.[dataSourceId]?.needRefresh
    if (needRefresh) {
      this.updatingTable = true
      this.destoryTable().then(() => {
        this.createTable(dataSource)
      })
    }
  }

  getLayerObjectIdField = () => {
    const { dataSource } = this.state
    const objectIdField =
      this.table?.layer?.objectIdField ||
      (dataSource as FeatureLayerDataSource)?.layer?.objectIdField ||
      'OBJECTID'
    return objectIdField
  }

  asyncSelectedWhenSelection = newSelectedIds => {
    const { dataSource } = this.state
    const objectIdField = this.getLayerObjectIdField()
    const curQuery: any = dataSource && dataSource.getCurrentQueryParams()
    let legal = true
    newSelectedIds.forEach(id => {
      if(!id) legal = false
    })
    const selectedQuery = (newSelectedIds.length > 0 && legal) ? `${objectIdField} IN (${newSelectedIds
      .map(id => {
        return id
      })
      .join()})`
      : curQuery.where
    if(newSelectedIds.length === 0) {
      this.setState({ selectQueryFlag: false })
    }
    if(this.table && this.table.layer) this.table.layer.definitionExpression = selectedQuery
  }

  getFeatureLayer = (dataSource: QueriableDataSource, dataRecordIds?: string[]) => {
    const { id } = this.props
    const ds = dataSource as FeatureLayerDataSource
    const notToLoad = dataSource?.getDataSourceJson()?.isDataInDataSourceInstance
    let featureLayer
    if(dataRecordIds && dataRecordIds.length > 0) {
      // The first time view in table, dataRecords is not load
      const dataRecordIdsNum = dataRecordIds.map(id => {
        return parseInt(id)
      })
      const actionQuery = { objectIds:dataRecordIdsNum, where: '1=1' } as QueryParams
      return dataSource.query(actionQuery, { scope: QueryScope.InAllData }).then(async (res) => {
        const dataRecords = await Promise.resolve(res?.records) as FeatureDataRecord[]
        return dataSourceUtils.createFeatureLayerByRecords(ds, dataRecords)
      })
    } else {
      const curQuery: any = dataSource && dataSource.getCurrentQueryParams()
      if (notToLoad) {
        // chart output and selected features need load
        return ds.load({ returnGeometry: true }, { widgetId: id }).then(async (records) => {
          const dataRecords = await Promise.resolve(records) as FeatureDataRecord[]
          return dataSourceUtils.createFeatureLayerByRecords(ds, dataRecords)
        })
      }
      // Adjust the order, because ds.layer is a reference type that changes the original data
      // csv upload type ds: only have layer, but not itemId and url
      if (!this.FeatureLayer) return Promise.resolve(featureLayer)
      if (ds.itemId) {
        const layerId = parseInt(ds.layerId)
        const layerConfig = {
          portalItem: {
            id: ds.itemId,
            portal: {
              url: ds.portalUrl
            }
          },
          definitionExpression: curQuery.where,
          layerId: layerId ? layerId : undefined
        }
        if (ds.url) layerConfig['url'] = ds.url
        featureLayer = new this.FeatureLayer(layerConfig)
      } else if (ds.url) {
        featureLayer = new this.FeatureLayer({
          definitionExpression: curQuery.where,
          url: ds.url
        })
      } else if (ds.layer) {
        return ds.load({ returnGeometry: true }, { widgetId: id }).then(async (records) => {
          const dataRecords = await Promise.resolve(records) as FeatureDataRecord[]
          return dataSourceUtils.createFeatureLayerByRecords(ds, dataRecords)
        })
      } else {
        return Promise.resolve(featureLayer)
      }
    }
    if(notToLoad) { // output ds (dynamic layer, load will rise bug)
      return Promise.resolve(featureLayer)
    } else { // need load to get layer.capabilities
      return featureLayer.load().then(async () => {
        return await Promise.resolve(featureLayer)
      })
    }
  }

  getDsAccessibleInfo (url) {
    if (!url) return Promise.resolve(false)
    return fetch(`${url}?f=pjson`).then(async res => await res.json()).then(info => {
      if (Object.keys(info).indexOf('error') > -1) {
        return false
      } else {
        return true
      }
    })
  }

  createTable = (newDataSource?) => {
    const { config, id } = this.props
    const { layersConfig } = config
    const { activeTabId } = this.state
    let { dataSource } = this.state
    if (!dataSource && newDataSource) dataSource = newDataSource
    // ds judgment
    if (dataSource?.dataViewId === SELECTION_DATA_VIEW_ID) {
      if (!dataSource?.getDataSourceJson()?.isDataInDataSourceInstance ||
        dataSource?.getSourceRecords().length === 0
      ) {
        this.setState({ emptyTable: true })
        this.dataSourceChange = false
        this.dataActionCanLoad = true
        this.updatingTable = false
        return
      } else {
        this.setState({ emptyTable: false })
      }
    }
    // data-action Table
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({deep:true}).concat(daLayersConfig)
    const curLayer = allLayersConfig
      .find(item => item.id === activeTabId)
    if (!curLayer) return
    let container
    if (document.getElementsByClassName(`table-container-${id}`).length === 0) {
      container = document && document.createElement('div')
      container.className = `table-container-${id}`
      this.refs.tableContainer &&
        this.refs.tableContainer.appendChild(container)
    } else {
      container = document.getElementsByClassName(`table-container-${id}`)[0]
    }
    const { allFields } = this.getFieldsFromDatasource()
    const invisibleColumns = this.minusArray(
      allFields,
      curLayer.tableFields
    ).map(item => {
      return item.jimuName
    })
    const fieldConfigs = curLayer.tableFields.map(item => {
      return {
        name: item.jimuName,
        label: item.alias,
        visible: invisibleColumns.indexOf(item.jimuName) < 0
      }
    })
    // when unselect all fields, do not render table
    if (fieldConfigs?.length === 0) {
      this.dataSourceChange = false
      this.dataActionCanLoad = true
      this.updatingTable = false
      this.setState({ emptyTable: false })
      return
    }
    let tableMenuItem = []
    if (curLayer.enableSelect) {
      tableMenuItem = tableMenuItem.concat([
        {
          label: this.formatMessage('showSelection'),
          iconClass: 'widget-table-tool-icon-show-selection',
          clickFunction: () => {
            this.onShowSelection()
          }
        },
        {
          label: this.formatMessage('clearSelection'),
          iconClass: 'widget-table-tool-icon-selection-clear',
          clickFunction: () => {
            this.onSelectionClear()
          }
        }
      ])
    }
    if (curLayer.enableRefresh) {
      tableMenuItem.push({
        label: this.formatMessage('refresh'),
        iconClass: 'widget-table-tool-icon-refresh',
        clickFunction: () => {
          this.onTableRefresh()
        }
      })
    }
    tableMenuItem.push({
      label: this.formatMessage('showHideCols'),
      iconClass: 'widget-table-tool-icon-show-hide-cols',
      clickFunction: () => {
        this.popupShowHideCols()
      }
    })

    const dataActionObject = curLayer.dataActionObject
    let dataRecords = undefined
    if (dataActionObject) {
      dataRecords = dataActionObject.dataActionRecordIds
      const dsId = curLayer.useDataSource?.dataSourceId
      if (dsId) {
        dataSource = this.dsManager.getDataSource(dsId) as QueriableDataSource
      }
    }
    const getPrivilege = () => {
      return privilegeUtils.checkExbAccess(privilegeUtils.CheckTarget.Experience).then(exbAccess => {
        return curLayer.enableEdit && exbAccess?.capabilities?.canEditFeature
      })
    }
    const getLayerAndNewTable = () => {
      const newId = this.currentRequestId + 1
      this.currentRequestId++
      dataSource &&
        this.getFeatureLayer(dataSource, dataRecords).then(async layer => {
          if (newId !== this.currentRequestId) return
          if (!layer) return
          if (!this.FeatureTable) return
          let featureLayer
          if (layer.layer) {
            featureLayer = layer.layer
          } else {
            featureLayer = layer
          }
          if(!this.refs.currentEl) return
          // fetch to confirm whether it's a public source
          const accessible = await this.getDsAccessibleInfo(layer?.url)
          // use exb privilege instead of api's supportsUpdateByOthers
          const privilegeEditable = await getPrivilege()
          const objectIdField = this.getLayerObjectIdField()
          // if it's not public, use 'privilegeEditable'
          const editable = curLayer.enableEdit && (accessible || privilegeEditable)
          if (editable) {
            const layerObjectIdField = featureLayer?.objectIdField
            featureLayer.on('edits', function(event) {
              const { addedFeatures, updatedFeatures, deletedFeatures } = event
              // There are no add and delete for now
              const adds = addedFeatures && addedFeatures.length > 0
              const updates = updatedFeatures && updatedFeatures.length > 0
              const deletes = deletedFeatures && deletedFeatures.length > 0
              if ( adds || updates || deletes) {
                const updateFeature = event?.edits?.updateFeatures?.[0]
                const idStr = updateFeature?.attributes?.[layerObjectIdField || objectIdField]?.toString()
                const toUpdateRecord = idStr ? dataSource.getRecordById(idStr) : undefined
                if (toUpdateRecord) {
                  (toUpdateRecord as FeatureDataRecord).setFeature(updateFeature)
                }
                // Tell other widgets that loaded records has changed
                dataSource.addVersion()
                // Tell other widgets that the database has changed
                dataSource.addSourceVersion()
              }
            })
          }
          const dsGdbVersion = (dataSource as FeatureLayerDataSource).getGDBVersion()
          if(dsGdbVersion) featureLayer.gdbVersion = dsGdbVersion
          this.table = new this.FeatureTable({
            layer: featureLayer,
            container: container,
            visibleElements: {
              header: true,
              menu: true,
              menuItems: {
                clearSelection: false,
                refreshData: false,
                toggleColumns: false
              }
            },
            menuConfig: {
              items: tableMenuItem
            },
            fieldConfigs,
            attachmentsEnabled: curLayer.enableAttachements,
            editingEnabled: editable
          })
          // async selected
          // Action table does not need to be selected synchronously
          if(!dataActionObject) {
            setTimeout(() => {
              this.asyncSelectedRebuild(dataSource)
            }, 500)
          }
          const tableInstant = this.table as any
          tableInstant.grid.visibleElements.selectionColumn = false
          if (curLayer.enableSelect) {
            tableInstant.grid.on('row-click', ({ context, native }) => {
              this.setState({ selfDsChange: true })
              const feature = context.item.feature
              if (curLayer.selectMode === SelectionModeType.Single) {
                this.table.clearSelection()
              }
              context.selected
                ? this.table.deselectRows(feature)
                : this.table.selectRows(feature)
              const selectedItems = tableInstant.grid?.selectedItems?.toArray()
              const objectIdField = this.getLayerObjectIdField()
              const selectedQuery =
                selectedItems && selectedItems.length > 0
                  ? `${objectIdField} IN (${selectedItems
                      .map(item => {
                        return (
                          item.feature?.attributes[objectIdField] || item.objectId
                        )
                      })
                      .join()})`
                  : '1=2'
              dataSource
                .query({
                  where: selectedQuery,
                  returnGeometry: true
                } as QueryParams)
                .then(result => {
                  const records = result?.records
                  if (records) {
                    MessageManager.getInstance().publishMessage(
                      new DataRecordsSelectionChangeMessage(id, result.records)
                    )
                    tableInstant.layer.queryFeatureCount().then(count => {
                      count === 0 ? this.setState({ emptyData: true }) : this.setState({ emptyData: false })
                    })
                    if (records.length > 0) {
                      dataSource.selectRecordsByIds(
                        records.map(record => record.getId()),
                        records
                      )
                    } else {
                      dataSource.clearSelection()
                    }
                  }
                })
            })
          }
          this.updateGeometryAndSql(dataSource)
          this.dataSourceChange = false
          this.dataActionCanLoad = true
          this.updatingTable = false
          this.setState({ emptyTable: false })
        })
    }
    getLayerAndNewTable()
  }

  asyncSelectedRebuild = (dataSource: QueriableDataSource) => {
    const selectedRecords = dataSource && dataSource.getSelectedRecords()
    this.table?.clearSelection && this.table.clearSelection()
    // Synchronize new selection (the record of selectedRecords has different structure)
    // layer/url ds: the featuresArray's structure is not match the 'deselectRows', use primary id
    if (selectedRecords && selectedRecords.length > 0) {
      const featuresArray = []
      selectedRecords.forEach(record => {
        const recordId = record?.getId()
        if(recordId) featuresArray.push(parseInt(recordId))
      })
      this.table?.selectRows && this.table.selectRows(featuresArray)
    }
  }

  async destoryTable () {
    if (this.table) {
      (this.table as any).menu.open = false
      !this.table.destroyed && this.table.destroy()
    }
    return await Promise.resolve()
  }

  formatMessage = (id: string, values?: { [key: string]: any }) => {
    const messages = Object.assign({}, defaultMessages, jimuUIDefaultMessages)
    return this.props.intl.formatMessage(
      { id: id, defaultMessage: messages[id] },
      values
    )
  }

  onTagClick = (dataSourceId: string) => {
    const { id } = this.props
    this.setState({
      activeTabId: dataSourceId,
      selectQueryFlag: false,
      tableShowColumns: undefined
    })
    this.props.dispatch(
      appActions.widgetStatePropChange(id, 'activeTabId', dataSourceId)
    )
  }

  handleTagChange = evt => {
    const dataSourceId = evt?.target?.value
    const { id } = this.props
    this.setState({
      activeTabId: dataSourceId,
      selectQueryFlag: false
    })
    this.props.dispatch(
      appActions.widgetStatePropChange(id, 'activeTabId', dataSourceId)
    )
  }

  onShowSelection = () => {
    const { dataSource, selectQueryFlag } = this.state
    if (selectQueryFlag) {
      const curQuery: any = dataSource && dataSource.getCurrentQueryParams()
      this.table.layer.definitionExpression = curQuery.where
      this.changeMenuConfig('showSelection')
    } else {
      const selectedArray = (this.table as any).grid.selectedItems.items
      if (selectedArray.length === 0) return
      const objectIdField = this.getLayerObjectIdField()
      const selectedQuery = `${objectIdField} IN (${selectedArray
        .map(item => {
          return item.feature?.attributes[objectIdField] || item.objectId
        })
        .join()})`
      this.table.layer.definitionExpression = selectedQuery
      this.changeMenuConfig('showAll')
    }
    setTimeout(() => {
      this.asyncSelectedRebuild(dataSource)
    }, 500)
    this.setState({ selectQueryFlag: !selectQueryFlag })
  }

  resetTable = () => {
    const { id } = this.props
    const { selectQueryFlag, dataSource } = this.state
    if (selectQueryFlag) {
      this.changeMenuConfig('showSelection')
      // reset sql
      if (this.table?.layer) {
        const curQuery: any = dataSource && dataSource.getCurrentQueryParams()
        this.table.layer.definitionExpression = curQuery.where
      }
      this.setState({
        selectQueryFlag: false,
        selfDsChange: true
      })
    }
    this.setState({ searchText: '' })
    this.table && this.table.clearSelection()
    dataSource.clearSelection()
    dataSource.updateQueryParams({where: '1=1'} as QueryParams, id)
    MessageManager.getInstance().publishMessage(
      new DataRecordsSelectionChangeMessage(id, [])
    )
  }

  onSelectionClear = () => {
    this.resetTable()
  }

  onTableRefresh = () => {
    const { dataSource } = this.state
    this.table && this.table.refresh()
    setTimeout(() => {
      this.asyncSelectedRebuild(dataSource)
    }, 0)
  }

  changeMenuConfig = (label: 'showSelection' | 'showAll') => {
    const configItems = {
      showSelection: 'widget-table-tool-icon-show-selection',
      showAll: 'widget-table-tool-icon-show-all'
    }
    const menuConfigItems = this.table.menuConfig?.items || []
    if (menuConfigItems.length > 0) {
      menuConfigItems[0].label = this.formatMessage(label)
      menuConfigItems[0].iconClass = configItems[label]
    }
    this.table.menuConfig = {
      items: menuConfigItems
    }
  }

  popupShowHideCols = () => {
    const advancedElement = this.refs.advancedSelect.getElementsByTagName(
      'button'
    )[0]
    advancedElement && advancedElement.click()
  }

  // TODO: use getArcGISSQL to update
  getQueryOptions = (curLayer: LayersConfig) => {
    let options = '1=1'
    const { useDataSources } = this.props
    const { searchText, dataSource } = this.state
    const useDS = useDataSources && useDataSources[0]
    if (!dataSource || !useDS) return null
    const isHosted = dataSourceUtils.isHostedService(dataSource?.url)
    const _prefix = (isHosted && dataSourceUtils.containsNonLatinCharacter(searchText)) ? 'N' : ''
    // not queryiable data source, return
    if (!(dataSource).query) {
      return null
    }
    if (searchText && curLayer.enableSearch && curLayer.searchFields) {
      options = (options || '1=1') + ' AND '
      options += `(${curLayer.searchFields
        .split(',')
        .map(field => {
          if (curLayer.searchExact) {
            return `LOWER(${field}) = ${_prefix}'${searchText.trim().toLowerCase()}'`
          } else {
            return `LOWER(${field}) LIKE ${_prefix}'%${searchText.trim().toLowerCase()}%'`
          }
        })
        .join(' OR ')})`
    }
    return { where: options }
  }

  handleChange = searchText => {
    if (!searchText) {
      this.setState({ searchText }, () => {
        this.handleSubmit()
      })
    } else {
      this.setState({ searchText, isShowSuggestion: true }, () => {
        clearTimeout(this.suggestionsQueryTimeout)
        this.suggestionsQueryTimeout = setTimeout(() => {
          this.getSearchSuggestions(searchText)
        }, 200)
      })
    }
  }

  getSearchSuggestions = searchText => {
    const { config } = this.props
    const { dataSource, activeTabId } = this.state
    const curLayer = config.layersConfig?.find(
      item => item.id === activeTabId
    )
    fetchSuggestionRecords(searchText, curLayer, dataSource).then(
      searchSuggestion => {
        this.setState({ searchSuggestion })
      }
    )
  }

  handleSubmit = () => {
    const { dataSource } = this.state
    const { id } = this.props
    const curLayer = this.props.config.layersConfig.find(
      item => item.id === this.state.activeTabId
    )
    const tableQuery = this.getQueryOptions(curLayer)
    dataSource.updateQueryParams(tableQuery as QueryParams, id)
  }

  onKeyUp = evt => {
    if (!evt || !evt.target) return
    if (evt.keyCode === 13) {
      this.handleSubmit()
    }
  }

  renderSearchTools = () => {
    const { searchText, searchToolFlag, isOpenSearchPopper } = this.state
    const { theme } = this.props

    return (
      <div className='table-search-div'>
        {searchToolFlag ? (
          <div
            className='float-right'
            ref={ref => (this.refs.searchPopup = ref)}
          >
            <Button
              type='tertiary'
              icon
              size='sm'
              className='tools-menu'
              title={this.formatMessage('search')}
              onClick={evt => {
                this.setState({ isOpenSearchPopper: !isOpenSearchPopper })
              }}
            >
              <Icon icon={require('jimu-ui/lib/icons/search-16.svg')} />
            </Button>
            <Popper
              placement='right-start'
              reference={this.refs.searchPopup}
              offset={[-10, -30]}
              open={isOpenSearchPopper}
              showArrow={false}
              toggle={e => {
                this.setState({ isOpenSearchPopper: !isOpenSearchPopper })
              }}
            >
              <div className='d-flex align-items-center table-popup-search m-2'>
                <Button
                  type='tertiary'
                  icon
                  size='sm'
                  onClick={evt => {
                    this.setState({ isOpenSearchPopper: false })
                  }}
                  className='search-back mr-1'
                >
                  <Icon
                    icon={require('jimu-ui/lib/icons/direction-left.svg')}
                    color={theme.colors.palette.dark[800]}
                  />
                </Button>
                <Button
                  type='tertiary'
                  icon
                  size='sm'
                  onClick={evt => this.handleSubmit()}
                  className='search-icon'
                >
                  <Icon
                    icon={require('jimu-ui/lib/icons/search-16.svg')}
                    color={theme.colors.palette.light[800]}
                  />
                </Button>
                <TextInput
                  className='popup-search-input'
                  placeholder={this.formatMessage('search')}
                  onChange={e => this.handleChange(e.target.value)}
                  value={searchText || ''}
                  onKeyDown={e => this.onKeyUp(e)}
                />
              </div>
            </Popper>
          </div>
        ) : (
          <div className='d-flex align-items-center table-search'>
            <Button
              type='tertiary'
              icon
              size='sm'
              onClick={evt => this.handleSubmit()}
              className='search-icon'
            >
              <Icon
                icon={require('jimu-ui/lib/icons/search-16.svg')}
                color={theme.colors.palette.light[800]}
              />
            </Button>
            <TextInput
              className='search-input'
              placeholder={this.formatMessage('search')}
              onChange={e => this.handleChange(e.target.value)}
              value={searchText || ''}
              onKeyDown={e => this.onKeyUp(e)}
            />
          </div>
        )}
      </div>
    )
  }

  getInitFields = () => {
    const { activeTabId } = this.state
    const { config } = this.props
    const { layersConfig } = config
    // data-action Table
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({deep:true}).concat(daLayersConfig)
    const curLayer = allLayersConfig.find(item => item.id === activeTabId)
    const { tableFields } = curLayer
    const initSelectTableFields = []
    for (const i in tableFields) {
      const item = tableFields[i]
      initSelectTableFields.push({ value: item.name, label: item.alias })
    }
    return initSelectTableFields
  }

  onValueChangeFromRuntime = (valuePairs: ClauseValuePair[]) => {
    if (!valuePairs) valuePairs = []
    const { tableShowColumns } = this.state
    const initTableFields = this.getInitFields()
    const tableColumns = tableShowColumns || initTableFields
    const selectFlag = valuePairs.length > tableColumns.length
    this.minusArray(tableColumns, valuePairs, 'value').forEach(item => {
      selectFlag
        ? this.table.showColumn(item.value)
        : this.table.hideColumn(item.value)
    })
    this.setState({ tableShowColumns: valuePairs })
  }

  getGlobalTableTools = (theme: ThemeVariables, isRTL: boolean): SerializedStyles => {
    const darkTheme = theme?.darkTheme
    const selectionIcon = darkTheme ? (isRTL ? showSelectedWhiteIconRTL : showSelectedOnlyWhiteIcon)
      : (isRTL ? showSelectedIconRTL : showSelectedOnlyIcon)
    return css`
      .widget-table-tool-icon-show-selection{
        background: url('data:image/svg+xml;utf8,${encodeURIComponent(
          selectionIcon
        )}') no-repeat center;
        background-size: 100%;
        width: 16px;
        height: 16px;
      }
      .widget-table-tool-icon-show-all{
        background: url('data:image/svg+xml;utf8,${encodeURIComponent(
          darkTheme ? showAllWhiteIcon : showAllIcon
        )}') no-repeat center;
        background-size: 100%;
        width: 16px;
        height: 16px;
      }
      .widget-table-tool-icon-selection-clear{
        background: url('data:image/svg+xml;utf8,${encodeURIComponent(
          darkTheme ? uncheckAllWhiteIcon : uncheckAllIcon
        )}') no-repeat center;
        background-size: 100%;
        width: 16px;
        height: 16px;
      }
      .widget-table-tool-icon-refresh{
        background: url('data:image/svg+xml;utf8,${encodeURIComponent(
          darkTheme ? resetWhiteIcon : resetIcon
        )}') no-repeat center;
        background-size: 100%;
        width: 16px;
        height: 16px;
      }
      .widget-table-tool-icon-show-hide-cols{
        background: url('data:image/svg+xml;utf8,${encodeURIComponent(
          darkTheme ? showHideWhiteIcon : showHideIcon
        )}') no-repeat center;
        background-size: 100%;
        width: 16px;
        height: 16px;
      }
      .esri-button-menu__item .esri-button-menu__item-label{
        padding: 4px 15px !important;
      }
      .table-popup-search{
        .search-icon{
          z-index: 2;
        }
        .popup-search-input{
          border: 1px solid ${theme.colors.palette.light[400]};
          border-radius: 2px;
          padding-left: 30px;
          margin-left: -30px;
          .input-wrapper{
            height: 30px;
            border: none;
          }
        }
      }
      .table-action-option{
        width: 100%;
        display: inline-flex;
        flex-direction: row;
        .table-action-option-tab{
          margin: auto 8px;
        }
        .table-action-option-close{
          flex: 1;
          button{
            :hover {
              color: ${theme.colors.white};
            }
            float: right;
          }
        }
      }
      .esri-popover--open{
        z-index: 1005 !important;
      }
      .jimu-dropdown-menu{
        z-index: 1006 !important;
      }
    `
  }

  getDataActionTable = () => {
    const { viewInTableObj } = this.props
    const dataActionTableArray = []
    for (const key in viewInTableObj) {
      dataActionTableArray.push({ ...viewInTableObj[key] })
    }
    return dataActionTableArray
  }

  onCloseTab = (tabId: string, evt?) => {
    const { id, viewInTableObj } = this.props
    if (evt) evt.stopPropagation()
    this.removeConfig = true
    this.setState({ tableShowColumns: undefined })
    const newViewInTableObj = viewInTableObj
    delete newViewInTableObj[tabId]
    MutableStoreManager.getInstance().updateStateValue(id, 'viewInTableObj', newViewInTableObj)
  }

  getLoadingStatus = (ds?: QueriableDataSource, queryStatus?: DataSourceStatus) => {
    const { stateShowLoading: mustLoading } = this.props
    // loading
    let showLoading = false
    if (
      mustLoading ||
      window.jimuConfig.isInBuilder ||
      (ds && queryStatus === DataSourceStatus.Loading)
    ) {
      showLoading = true
    }
    return showLoading
  }

  setRefreshLoadingString = (showLoading = false) => {
    if (!showLoading) return false
    let time = 0
    const _this = this
    clearInterval(this.autoRefreshLoadingTime)

    this.autoRefreshLoadingTime = setInterval(() => {
      time++
      _this.setState({
        autoRefreshLoadingString: _this.getLoadingString(time)
      })
    }, 60000)
  }

  getLoadingString = (time: number): string => {
    let loadingString = this.formatMessage('lastUpdateAFewTime')
    if (time > 1 && time <= 2) {
      loadingString = this.formatMessage('lastUpdateAMinute')
    } else if (time > 2) {
      loadingString = this.formatMessage('lastUpdateTime', { updateTime: time })
    }
    return loadingString
  }

  toggleAutoRefreshLoading = (ds: QueriableDataSource, showLoading: boolean, interval: number) => {
    this.resetAutoRefreshTimes(showLoading, interval)
    if (interval > 0) this.setRefreshLoadingString(showLoading)
  }

  resetAutoRefreshTimes = (showLoading = false, interval: number) => {
    const _this = this
    clearTimeout(this.resetAutoRefreshTime)
    if (interval <= 0) clearInterval(this.autoRefreshLoadingTime)

    this.resetAutoRefreshTime = setTimeout(() => {
      if (showLoading && interval > 0) {
        _this.setState({
          autoRefreshLoadingString: _this.formatMessage('lastUpdateAFewTime')
        })
      }
      _this.setState({
        showLoading: showLoading
      })
    }, 0)
  }

  renderLoading = (showLoading: boolean, interval: number) => {
    const { autoRefreshLoadingString } = this.state
    return (
      <div className='position-absolute refresh-loading-con d-flex align-items-center'>
        {showLoading && <div className='loading-con' />}
        {interval > 0 && (
          <div className='flex-grow-1 auto-refresh-loading'>
            {autoRefreshLoadingString}
          </div>
        )}
      </div>
    )
  }

  onSuggestionConfirm = suggestion => {
    this.setState({
      searchText: suggestion,
      isShowSuggestion: false
    },() => {
      this.handleSubmit()
    })
  }

  clearMessageAction = () => {
    MessageManager.getInstance().publishMessage(
      new DataRecordsSelectionChangeMessage(this.props.id, [])
    )
    this.setState({ emptyData: false })
  }

  render () {
    const {
      activeTabId,
      dataSource,
      selectQueryFlag,
      tableShowColumns,
      mobileFlag,
      emptyTable,
      selectRecords,
      notReady,
      advancedField,
      advancedTableField,
      showLoading,
      interval,
      isShowSuggestion,
      searchSuggestion
    } = this.state
    const { config, id, theme, isRTL, enableDataAction, isHeightAuto, isWidthAuto } = this.props
    const { layersConfig, arrangeType } = config
    // data-action Table
    const daLayersConfig = this.getDataActionTable()
    const allLayersConfig = layersConfig.asMutable({deep:true}).concat(daLayersConfig)
    let useDataSource
    const curLayer = allLayersConfig.find(item => item.id === activeTabId)
    if (allLayersConfig.length > 0) {
      useDataSource = curLayer
        ? curLayer.useDataSource
        : allLayersConfig[0].useDataSource
    }
    const classes = classNames(
      'jimu-widget',
      'widget-table',
      'surface-1',
      'table-widget-' + id
    )

    if (!useDataSource) {
      return (
        <WidgetPlaceholder
          widgetId={id}
          iconSize='large'
          style={{ position: 'absolute', left: 0, top: 0 }}
          icon={tablePlaceholderIcon}
          data-testid='tablePlaceholder'
        />
      )
    }

    const horizontalTag = arrangeType === TableArrangeType.Tabs
    const initSelectTableFields = this.getInitFields()
    const dataSourceLabel = dataSource?.getLabel()
    const outputDsWidgetId = appConfigUtils.getWidgetIdByOutputDataSource(useDataSource)
    const appConfig = getAppStore().getState()?.appConfig
    const widgetLabel = appConfig?.widgets?.[outputDsWidgetId]?.label
    const dataName = this.formatMessage('tableDataActionLable', { layer: (dataSource as any)?.layerDefinition?.name || '' })
    const hasSelected = dataSource?.getSelectedRecords()?.length > 0
    const partProps = { id, enableDataAction, isHeightAuto, isWidthAuto }

    return (
      <div className={classes} css={getStyle(theme, mobileFlag, partProps)} ref={el => (this.refs.currentEl = el)}>
        <div className='table-indent'>
          <div
            className={`d-flex ${
              horizontalTag ? 'horizontal-tag-list' : 'dropdown-tag-list'
            }`}
          >
            {/* someting wrong in lint check for Tabs */}
            {horizontalTag ? (
              <Tabs type='underline' onChange={this.onTagClick} className='tab-flex' value={activeTabId} onClose={this.onCloseTab}>
                {
                  allLayersConfig.map(item => {
                    const isDataAction = !!item.dataActionObject
                    return (
                      <Tab
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        className='text-truncate tag-size'
                        closeable={isDataAction}
                      >
                        <div className='mt-2' />
                      </Tab>
                    )
                  }) as any
                }
              </Tabs>
            ) : (
              <Select
                size='sm'
                value={activeTabId}
                onChange={this.handleTagChange}
                className='top-drop'
              >
                {allLayersConfig.map(item => {
                  return (
                    <option key={item.id} value={item.id} title={item.name}>
                      <div className='table-action-option'>
                        <div className='table-action-option-tab' title={item.name}>{item.name}</div>
                        {item.dataActionObject &&
                          <div className='table-action-option-close'>
                            <Button
                              size='sm'
                              icon
                              type='tertiary'
                              onClick={(evt) => this.onCloseTab(item.id, evt)}
                            >
                              <Icon icon={IconClose} size={10} />
                            </Button>
                          </div>
                        }
                      </div>
                    </option>
                  )
                })}
              </Select>
            )}
          </div>
          <div
            className={`${
              arrangeType === TableArrangeType.Tabs
                ? 'horizontal-render-con'
                : 'dropdown-render-con'
            }`}
          >
            {curLayer.enableSearch &&
              curLayer.searchFields &&
              this.renderSearchTools()}
            <div ref='suggestPopup' style={{ position: 'relative', top: 25 }}>
              <Popper
                css={getSuggestionStyle()}
                placement='bottom-start'
                reference={this.refs.suggestPopup}
                offset={[0, 8]}
                open={isShowSuggestion}
                a11yVersion={-1}
                toggle={e => {
                  this.setState({ isShowSuggestion: !isShowSuggestion })
                }}
              >
                {searchSuggestion.map((suggestion, index) => {
                  const suggestionHtml = sanitizer.sanitize(
                    suggestion.suggestionHtml
                  )
                  return (
                    <Button
                      key={index}
                      type='secondary'
                      size='sm'
                      onClick={() => this.onSuggestionConfirm(suggestion.suggestion)}
                      dangerouslySetInnerHTML={{ __html: suggestionHtml }}
                    />
                  )
                })}
              </Popper>
            </div>
            {dataSource && mobileFlag && selectRecords && enableDataAction && !emptyTable &&
              <div className='horizontal-action-dropdown'>
                <DataActionDropDown
                  dataName={dataName}
                  widgetId={id}
                  dataSource={dataSource}
                  records={selectRecords}
                />
              </div>
            }
            <div className='top-button-list'>
              {/* {curLayer.allowCsv &&
                <Dropdown className="csv-dropdown-con ml-2">
                  <DropdownButton size="sm" arrow={true} type="default" title={this.formatMessage('downloadCsv')}>
                    {this.formatMessage('downloadCsv')}
                  </DropdownButton>
                  <DropdownMenu>
                    <DropdownItem title={this.formatMessage('exportAll')} onClick={this.handleExportCSVAll}>
                      {this.formatMessage('exportAll')}
                    </DropdownItem>
                    <DropdownItem title={this.formatMessage('exportSelected')} onClick={this.handleExportCSVSelected}>
                      {this.formatMessage('exportSelected')}
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              } */}
              {curLayer.enableSelect && (
                <div className='top-button ml-2'>
                  <Button
                    size='sm'
                    onClick={this.onShowSelection}
                    icon
                    title={
                      selectQueryFlag
                        ? this.formatMessage('showAll')
                        : this.formatMessage('showSelection')
                    }
                    disabled={emptyTable || !hasSelected}
                  >
                    <Icon icon={selectQueryFlag ? showAllIcon : (isRTL ? showSelectedIconRTL : showSelectedOnlyIcon)} size={14} />
                  </Button>
                </div>
              )}
              {curLayer.enableSelect && (
                <div className='top-button ml-2'>
                  <Button
                    size='sm'
                    onClick={this.onSelectionClear}
                    icon
                    title={this.formatMessage('clearSelection')}
                    disabled={emptyTable || !hasSelected}
                  >
                    <Icon icon={uncheckAllIcon} size={14} />
                  </Button>
                </div>
              )}
              {curLayer.enableRefresh && (
                <div className='top-button ml-2'>
                  <Button
                    size='sm'
                    onClick={this.onTableRefresh}
                    icon
                    title={this.formatMessage('refresh')}
                    disabled={emptyTable}
                  >
                    <Icon icon={resetIcon} size={14} />
                  </Button>
                </div>
              )}
              <div className='top-button ml-2'>
                <Button
                  size='sm'
                  onClick={this.popupShowHideCols}
                  icon
                  title={this.formatMessage('showHideCols')}
                  disabled={emptyTable}
                >
                  <Icon icon={showHideIcon} size={14} />
                </Button>
              </div>
              {dataSource && !mobileFlag && selectRecords && enableDataAction && !emptyTable &&
                <React.Fragment>
                  <span className='tool-dividing-line mx-1'></span>
                  <div className='top-button data-action-btn'>
                    <DataActionDropDown
                      dataName={dataName}
                      widgetId={id}
                      dataSource={dataSource}
                      records={selectRecords}
                    />
                  </div>
                </React.Fragment>
              }
            </div>
            {dataSource && (
              <div ref='advancedSelect' className='adv-select-con'>
                <AdvancedSelect
                  fluid
                  dataSource={dataSource}
                  field={advancedField}
                  codedValues={advancedTableField}
                  isMultiple
                  values={Immutable(tableShowColumns || initSelectTableFields)}
                  isEmptyOptionHidden={false}
                  onChange={this.onValueChangeFromRuntime}
                />
              </div>
            )}
            {emptyTable &&
              <div className='placeholder-table-con'>
                <WidgetPlaceholder
                  icon={require('./assets/icon.svg')}
                  message={this.formatMessage('noData')}
                />
                {notReady &&
                  <div className='placeholder-alert-con'>
                    <Alert
                      form='tooltip'
                      size='small'
                      type='warning'
                      text={this.formatMessage('outputDataIsNotGenerated', { outputDsLabel: dataSourceLabel, sourceWidgetName: widgetLabel })}
                    />
                  </div>
                }
              </div>
            }
            {/* Hide the Reset button temporarily */}
            {/* {emptyData &&
              <div className='placeholder-reset-con'>
                <WidgetPlaceholder
                  icon={warningIcon}
                  message={this.formatMessage('noData')}
                />
                <Button
                  className="placeholder-reset-button"
                  size='sm'
                  title={this.formatMessage('reset')}
                  onClick={this.clearMessageAction}
                >
                  {this.formatMessage('reset')}
                </Button>
              </div>
            } */}
            <div ref='tableContainer' className='table-con' />
            {(showLoading || interval > 0) && this.renderLoading(showLoading, interval)}
            <div className='ds-container'>
              <DataSourceComponent
                widgetId={id}
                useDataSource={Immutable(useDataSource)}
                onDataSourceCreated={this.onDataSourceCreated}
                onDataSourceInfoChange={this.onDataSourceInfoChange}
                onQueryRequired={this.onQueryRequired}
              />
            </div>
            <Global styles={this.getGlobalTableTools(theme, isRTL)} />
            <ReactResizeDetector
              handleWidth
              handleHeight
              onResize={this.debounceOnResize}
            />
          </div>
        </div>
      </div>
    )
  }
}

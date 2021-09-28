/** @jsx jsx */
import {
  React, jsx, Immutable, ImmutableObject, IMState, DataSourceJson, loadArcGISJSAPIModules, IMAppConfig,
  ThemeVariables, UseDataSource, DataSourceManager, SceneLayerDataSource, FeatureLayerDataSource
} from 'jimu-core'
import { AllWidgetSettingProps, SettingChangeFunction } from 'jimu-for-builder'
import { userServices } from 'jimu-for-builder/service'
import { DataSourceRemoveWarningPopup, DataSourceRemoveWaringReason, dataComponentsUtils } from 'jimu-ui/advanced/data-source-selector'
import { IMConfig, QueryItemType } from '../config'
import defaultMessages from './translations/default'
import { createGetI18nMessage, getItemValueForQueryItem, ViewBlock, ViewBlockComponent } from '../common/utils'
import { getStyleForQuery } from '../common/style'
import { SettingMainAssociatedDataMapType, ValueManSetByKeyType } from './setting-config'
import { getSettingViewBlockScenarios } from './view-block-scenarios'
import { createViewBlockForSettingPaneQueryItem } from './view-block-setting-query-item'
import { createViewBlockForSettingMain } from './view-block-setting-main'
import { getOutputJsonOriginDs } from './setting-utils'

export interface State {
  currentQueryItemPanelIndex: number
  mainViewBlock: ViewBlock<SettingMainAssociatedDataMapType>
  self: Setting
  showRemoveQueryItemWarning: boolean
  indexOfQueryItemToRemove: number
  dsToRemove: string
  esriModuleMap: { [moduleName: string]: any }
}

export interface ExtraProps {
  dsJsons: ImmutableObject<{ [dsId: string]: DataSourceJson }>
  appConfig: IMAppConfig
  appTheme: ThemeVariables
}

export default class Setting extends React.PureComponent<AllWidgetSettingProps<IMConfig> & ExtraProps, State> {
  static mapExtraStateProps = (state: IMState, props: AllWidgetSettingProps<IMConfig>) => {
    return {
      dsJsons: state.appStateInBuilder.appConfig.dataSources,
      appConfig: state && state.appStateInBuilder && state.appStateInBuilder.appConfig,
      appTheme: state && state.appStateInBuilder && state.appStateInBuilder.theme
    }
  }

  static getDerivedStateFromProps (nextProps: AllWidgetSettingProps<IMConfig>, prevState: State) {
    const addedQueryItems = nextProps.config.queryItems.asMutable().filter(queryItem => !prevState.mainViewBlock.viewBlockState.queryItemViewBlockMap[queryItem.configId])
    if (addedQueryItems.length) {
      addedQueryItems.forEach(queryItem => {
        prevState.mainViewBlock.viewBlockState.queryItemViewBlockMap[queryItem.configId] = prevState.self.createSettingPaneQueryItemViewBlock({ configId: queryItem.configId })
      })
      return {
        mainViewBlock: { ...prevState.mainViewBlock }
      }
    }
    return null
  }

  getI18nMessage = createGetI18nMessage({ intl: this.props.intl, defaultMessages })

  constructor (props) {
    super(props)
    this.state = {
      currentQueryItemPanelIndex: -1,
      self: this,
      esriModuleMap: {},
      showRemoveQueryItemWarning: false,
      indexOfQueryItemToRemove: -1,
      dsToRemove: null,
      mainViewBlock: createViewBlockForSettingMain({
        targetSelf: this,
        getValueMan: (...configKeys) => ({
          getByIndex: (index) => this.props.config[configKeys[index]],
          setByIndices: (...setByIndexPairs) => {
            this.updateConfigForOptions(...(setByIndexPairs || [])
              .map<ValueManSetByKeyType>(([index, ...rest]) => [configKeys[index], ...rest]))
          }
        })
      })
    }
  }

  componentDidMount () {
    loadArcGISJSAPIModules([
      // 'esri/symbols/SimpleMarkerSymbol',
      'esri/widgets/Sketch',
      'esri/layers/GraphicsLayer',
      'esri/symbols/support/jsonUtils'
    ]).then(modules => {
      const [SketchClass, GraphicsLayer, jsonUtils] = modules
      this.setState({ esriModuleMap: { SketchClass, GraphicsLayer, jsonUtils } })
    })

    this.loadUserResource().catch(err => console.error(err))
  }

  loadUserResource = async () => {
    const responseInitUserResource = await userServices.initUserResource()
    if (responseInitUserResource?.success) {
      const responseUserResource = await userServices.getUserResource()
      this.state.mainViewBlock.viewBlockState.userResourceQueryWidget = responseUserResource?.widgets?.queryWidget || {}
      this.setState(({ mainViewBlock }) => ({ mainViewBlock: { ...mainViewBlock } }))
    }
  }

  createSettingPaneQueryItemViewBlock = ({ configId }) => {
    const queryItemViewBlock = createViewBlockForSettingPaneQueryItem({
      configId,
      targetSelf: this,
      updateUserServicesQueryWidgetStore: async (key, value) => await userServices.updateUserResource({ widgets: { queryWidget: { [key]: value } } }),
      onCloseSettingPane: () => this.onToggleQueryItemPanel(this.state.currentQueryItemPanelIndex),
      getValueMan: (...queryItemOptionKeys) => ({
        getByIndex: (index) => {
          // parameter: [dataMap, dataKey]
          return getItemValueForQueryItem([this.props.config.queryItems.find(i => i.configId === configId), queryItemOptionKeys[index]])
        },
        setByIndices: (...setByIndexPairs) => {
          return this.updateItemValueInQueryItem(...(setByIndexPairs || [])
            .map<ValueManSetByKeyType>(([index, ...rest]) => [queryItemOptionKeys[index], ...rest]))
        }
        // getByKey: (queryItemOptionKey) => getItemValueForQueryItem([this.props.config.queryItems.find(i => i.configId === configId), queryItemOptionKey]),
        // setByKeys: (keyValueArray) => this.updateItemValueInQueryItem(keyValueArray),
      })
    })
    return queryItemViewBlock
  }

  onToggleQueryItemPanel = (index?: number) => {
    this.setState(({ currentQueryItemPanelIndex }) => {
      const nextQueryItemPanelIndex = index === currentQueryItemPanelIndex ? -1 : index
      return { currentQueryItemPanelIndex: nextQueryItemPanelIndex }
    })
  }

  updateWidgetJson: SettingChangeFunction = (...args) => {
    const [changedWidgetJson, ...restArgs] = args
    const widgetJson = Object.assign({ id: this.props.id, ...changedWidgetJson })
    this.props.onSettingChange(widgetJson, ...restArgs)
  }

  updateConfigForOptions = (...setByKeyPairs: ValueManSetByKeyType[]) => {
    let allDataSources = null
    const config = setByKeyPairs.reduce((config, [key, value, options]) => {
      if (key === 'queryItems' && options?.dsUpdateRequired) {
        allDataSources = this.getAllDataSources(value)
      }
      return config.set(key, value)
    }, this.props.config)
    if (allDataSources) {
      this.updateWidgetJson(
        {
          config,
          useDataSources: Object.values(allDataSources.useDataSourceMap)
        },
        allDataSources.outputDataSources
      )
    } else {
      this.updateWidgetJson({ config })
    }
  }

  tryRemoveQueryItem = (index: number) => {
    const queryItems = this.props.config.queryItems
    const currentQueryItem = queryItems[index]

    const relatedWidgets = dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(currentQueryItem.outputDataSourceId, this.props.appConfig.widgets)

    if (relatedWidgets.length === 0) {
      this.doRemoveQueryItem(index, true)
    } else {
      this.setState({
        showRemoveQueryItemWarning: true,
        indexOfQueryItemToRemove: index,
        dsToRemove: currentQueryItem.outputDataSourceId,
      })
    }
  }

  beforeRemovingDataSource = () => {
    this.doRemoveQueryItem(this.state.indexOfQueryItemToRemove)
  }

  doRemoveQueryItem = (index: number, dsUpdateRequired = false) => {
    const configOptions = { dsUpdateRequired }
    const queryItems = this.props.config.queryItems.asMutable({ deep: true })
    const currentQueryItem = queryItems[index]
    queryItems.splice(index, 1)

    this.setState({
      currentQueryItemPanelIndex: queryItems.indexOf(currentQueryItem)
    })
    this.updateConfigForOptions(['queryItems', queryItems, configOptions])
  }

  afterRemovingDataSource = () => {
    this.setState({
      showRemoveQueryItemWarning: false,
      indexOfQueryItemToRemove: -1,
      dsToRemove: null,
    })
  }

  updateItemValueInQueryItem = (...setByKeyPairs: ValueManSetByKeyType[]) => {
    const configOptions = { dsUpdateRequired: false }
    const queryItems = this.props.config.queryItems.asMutable({ deep: true })
    queryItems[this.state.currentQueryItemPanelIndex] = setByKeyPairs.reduce((queryItem, setByKeyPair) => {
      const [key, value, options] = setByKeyPair
      queryItem[key] = value
      if (options?.dsUpdateRequired) configOptions.dsUpdateRequired = true
      if (options?.removeMatchingDefaultValue && options?.defaultValue === value) delete queryItem[key]
      return queryItem
    }, queryItems[this.state.currentQueryItemPanelIndex] || { configId: `${Math.random()}`.slice(2) })

    this.updateConfigForOptions(['queryItems', queryItems, configOptions])
  }

  getAllDataSources = (queryItems: QueryItemType[]) => {
    const dsMap = Immutable(queryItems).asMutable({ deep: true }).reduce((currentDsMap, queryItem) => {
      // add useDataSource
      [queryItem.useDataSource, ...queryItem.spatialRelationUseDataSources].forEach((useDs: UseDataSource) => {
        const dsId = useDs.dataSourceId
        currentDsMap.useDataSourceMap[dsId] = currentDsMap.useDataSourceMap[dsId] || useDs
        currentDsMap.useDataSourceMap[dsId].fields = Array.from(new Set([...(currentDsMap.useDataSourceMap[dsId].fields || []), ...(useDs.fields || [])]))
      })
      // add outputDataSource
      const originDs = DataSourceManager.getInstance().getDataSource(queryItem.useDataSource?.dataSourceId) as (FeatureLayerDataSource | SceneLayerDataSource)
      if (originDs) {
        const originDataSourceJson = getOutputJsonOriginDs(originDs)?.getDataSourceJson()
        const outputDataSourceJson = {
          id: queryItem.outputDataSourceId,
          label: this.getI18nMessage('outputDsLabel', { values: { label: `${queryItem.name}` } }),
          type: originDataSourceJson?.type,
          geometryType: originDataSourceJson?.geometryType,
          url: originDataSourceJson?.url,
          itemId: originDataSourceJson?.itemId,
          portalUrl: originDataSourceJson?.portalUrl,
          originDataSources: [queryItem.useDataSource],
          layerId: originDataSourceJson?.layerId,
          isDataInDataSourceInstance: originDataSourceJson?.isDataInDataSourceInstance
        }
        currentDsMap.outputDataSources.push(outputDataSourceJson)
      }
      return currentDsMap
    }, { useDataSourceMap: {}, outputDataSources: [] })
    return dsMap
  }

  hideRemovePopup = () => {
    this.setState({ showRemoveQueryItemWarning: false })
  }

  render () {
    return (
      <div className='setting-query' css={getStyleForQuery(this.props.theme)}>
        <div className='jimu-widget-setting setting-query__setting-content'>
          <ViewBlockComponent
            currentViewBlock={this.state.mainViewBlock}
            parentViewBlock={this.state.mainViewBlock}
            topViewBlock={this.state.mainViewBlock}
            getViewBlockScenarios={getSettingViewBlockScenarios}
            associatedData={{
              targetComponent: this
            }}
          />
        </div>
        <DataSourceRemoveWarningPopup
          dataSourceId={this.state.dsToRemove} isOpen={this.state.showRemoveQueryItemWarning}
          toggle={this.hideRemovePopup} reason={DataSourceRemoveWaringReason.DataSourceRemoved}
          afterRemoving={this.afterRemovingDataSource}
          beforeRemoving={this.beforeRemovingDataSource}
        />
      </div>
    )
  }
}

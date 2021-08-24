/** @jsx jsx */
import { jsx, SqlExpression, UseDataSource, Immutable, DataSourceManager, OrderByOption, DataViewJson, FeatureLayerDataSource, SceneLayerDataSource } from 'jimu-core'
import { Button, Icon } from 'jimu-ui'
import { getJimuFieldNamesBySqlExpression } from 'jimu-ui/basic/sql-expression-runtime'
import { AllDataSourceTypes } from 'jimu-ui/advanced/data-source-selector'
import { IconPicker } from 'jimu-ui/advanced/resource-selector'
import { QueryItemType, SpatialFilterType, SymbolType, UnitType, ListDirection, FieldsType, SpatialRelation, PagingType, CreateToolType, QueryArrangeType } from '../config'
import { ViewBlock } from '../common/utils'
import { DialogPanel } from '../common/common-components'
import { getWidgetSettingDataMap, SettingMainAssociatedDataMapType, ValueManSetByIndexType, ValueManType } from './setting-config'
import Setting from './setting'
import { getOutputJsonOriginDs } from './setting-utils'
import { SymbolPicker } from './components/symbol-picker'

const { iconMap } = getWidgetSettingDataMap()

export interface CreateViewBlockForSettingPaneQueryItemOptionsType {
  targetSelf: Setting
  configId: string
  onCloseSettingPane: () => void
  getValueMan: (...configKeys: string[]) => ValueManType
  updateUserServicesQueryWidgetStore: (key: string, value: any) => Promise<any>
}

export const createViewBlockForSettingPaneQueryItem = (options: CreateViewBlockForSettingPaneQueryItemOptionsType): ViewBlock<SettingMainAssociatedDataMapType> => {
  const {
    configId, targetSelf, onCloseSettingPane, getValueMan, updateUserServicesQueryWidgetStore
  } = options
  const { getI18nMessage } = targetSelf

  const updateViewBlock = async (updateFn?) => {
    return await Promise.resolve(updateFn && updateFn(targetSelf.state.mainViewBlock)).then(() => targetSelf.setState(({ mainViewBlock }) => ({ mainViewBlock: { ...mainViewBlock } })))
  }

  const onDataSourceChange = (useDataSource: UseDataSource) => {
    if (!useDataSource) {
      return
    }
    DataSourceManager.getInstance().createDataSourceByUseDataSource(Immutable(useDataSource)).then((originDs: FeatureLayerDataSource | SceneLayerDataSource) => {
      const outputJsonOriginDs = getOutputJsonOriginDs(originDs)
      if (!outputJsonOriginDs) Promise.reject(Error(''))
      return outputJsonOriginDs
    }).then((outputJsonOriginDs: FeatureLayerDataSource) => {
      const nextConfigId = configId === 'newQueryId' ? `${Math.random()}`.slice(2) : configId
      const queryItemLabel = outputJsonOriginDs?.getLabel()
      const queryItem: Partial<QueryItemType> = {
        configId: nextConfigId,
        icon: null,
        name: queryItemLabel,
        displayLabel: true,
        useDataSource: useDataSource,
        outputDataSourceId: `${targetSelf.props.id}_output_${nextConfigId}`,
        sqlExprObj: null,
        spatialMapWidgetIds: [],
        spatialFilterTypes: [],
        spatialInteractiveCreateToolTypes: [CreateToolType.Point, CreateToolType.Polyline, CreateToolType.Polygon, CreateToolType.Rectangle, CreateToolType.Circle],
        spatialInteractiveEnableBuffer: false,
        spatialInteractiveBufferDistance: 0,
        spatialInteractiveBufferUnit: UnitType.Meters,
        spatialRelations: [SpatialRelation.Intersect],
        spatialRelationUseDataSources: [],
        spatialRelationEnableSelectTool: false,
        spatialRelationEnableBuffer: false,
        spatialRelationBufferDistance: 0,
        spatialRelationBufferUnit: UnitType.Meters,
        resultListDirection: ListDirection.Vertical,
        resultPagingStyle: PagingType.MultiPage,
        resultSymbolType: SymbolType.DefaultSymbol,
        resultCustomSymbol: {
          angle: 0,
          color: [255, 255, 255, 255],
          outline: {
            color: [255, 255, 255, 255],
            style: 'esriSLSSolid',
            type: 'esriSLS',
            width: 1
          },
          size: 6,
          style: 'esriSMSCircle',
          type: 'esriSMS',
          xoffset: 0,
          yoffset: 0
        },
        resultAllowChangeSymbol: false,
        allowExport: false,
        sortOptions: [],
        itemSizeMap: {
          arrangementHorizontalPopper: {
            minSize: { width: 300, height: 300 },
            defaultSize: { width: 360, height: 480 }
          }
        }
      }
      const valueMan = getValueMan(...Object.keys(queryItem))
      const setByIndexPairs: ValueManSetByIndexType[] = Object.values(queryItem).map((i, x) => [x, i, { dsUpdateRequired: true }])
      valueMan.setByIndices(...setByIndexPairs)
    })
  }

  const onQueryParamChange = (options: { sqlExprObj?: SqlExpression, sortData?: OrderByOption[] }) => {
    const { sqlExprObj, sortData } = options
    const valueMan = getValueMan('useDataSource', 'sqlExprObj', 'sortOptions')
    const { dataSourceId, mainDataSourceId, dataViewId, rootDataSourceId, fields = [] } = valueMan.getByIndex(0).asMutable({ deep: true })
    const queryParams: Partial<DataViewJson> = {}
    const setByIndexPairs: ValueManSetByIndexType[] = []
    if (sqlExprObj) {
      const nextSqlExprObj = (sqlExprObj?.parts || []).length > 0 ? sqlExprObj : null
      queryParams.where = sqlExprObj?.sql ? sqlExprObj : undefined
      fields.push(...getJimuFieldNamesBySqlExpression(Immutable(nextSqlExprObj)))
      setByIndexPairs.push([1, nextSqlExprObj])
    }
    if (sortData) {
      const nextSortData = (sortData || []).filter(i => i.jimuFieldName)
      fields.push(...nextSortData.map(i => i.jimuFieldName))
      queryParams.orderBy = nextSortData
      setByIndexPairs.push([2, sortData])
    }
    const nextUseDataSource = {
      dataSourceId,
      mainDataSourceId,
      dataViewId,
      rootDataSourceId,
      fields: Array.from(new Set(fields))
    }
    setByIndexPairs.push([0, nextUseDataSource, { dsUpdateRequired: true }])
    valueMan.setByIndices(...setByIndexPairs)
  }

  const viewBlockContentQueryItemMain: ViewBlock<SettingMainAssociatedDataMapType> = {
    viewBlockKey: 'SettingBlockKeySettingContentQueryItemMain',
    viewBlockType: 'SettingBlockTypeSettingContent',
    isViewBlockRenderable: ({ topViewBlock }) => !topViewBlock.viewBlockState.settingStage,
    subViewBlocks: [{
      viewBlockKey: 'SettingBlockKeySectionData',
      viewBlockType: 'SettingBlockTypeSettingSection',
      getViewBlockTitle: () => getI18nMessage('data'),
      subViewBlocks: [{
        viewBlockKey: 'SettingBlockKeyFieldData',
        viewBlockType: 'SettingBlockTypeFieldDataSource',
        getViewBlockData: () => ({
          valueMan: getValueMan('useDataSource'),
          getDssProps: () => ({
            _dsTypes: [AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer],
            onChange: (useDataSources) => onDataSourceChange(useDataSources?.[0] || null),
            widgetId: targetSelf.props.id
          })
        })
      }]
    }, {
      viewBlockKey: 'SettingBlockKeySectionLabel',
      viewBlockType: 'SettingBlockTypeSettingSection',
      isViewBlockRenderable: () => !!getValueMan('useDataSource').getByIndex(0),
      getViewBlockTitle: () => getI18nMessage('label'),
      subViewBlocks: [{
        viewBlockKey: 'SettingBlockKeyFieldLabel',
        viewBlockType: 'SettingBlockTypeFieldTextInput',
        getViewBlockData: () => ({
          valueMan: getValueMan('name'),
          getTextInputProps: () => ({
            onChange: (event) => getValueMan('name').setByIndices([0, event.target.value, { dsUpdateRequired: true }])
          })
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldDisplayLabel',
        viewBlockType: 'SettingBlockTypeFieldSwitch',
        isViewBlockRenderable: () => targetSelf.props.config.queryItems.length < 2 && targetSelf.props.config.arrangeType !== QueryArrangeType.Inline,
        getViewBlockTitle: () => getI18nMessage('displayLabel'),
        getViewBlockData: () => ({
          valueMan: getValueMan('displayLabel')
        })
      }]
    }, {
      viewBlockKey: 'SettingBlockKeySectionIcon',
      viewBlockType: 'SettingBlockTypeSettingSection',
      isViewBlockRenderable: () => !!getValueMan('useDataSource').getByIndex(0),
      getViewBlockTitle: () => (
        <div className='w-100 d-flex justify-content-between'>
          <span className='pt-1 mr-2 line-height-1 text-truncate'>{getI18nMessage('icon')}</span>
          {
            ((valueMan) => (
              <IconPicker
                buttonOptions={{ type: 'default', size: 'sm' }}
                icon={valueMan.getByIndex(0) || null}
                onChange={(icon) => valueMan.setByIndices([0, icon])} configurableOption='none'
              />
            ))(getValueMan('icon'))
          }
        </div>
      )
    }, {
      viewBlockKey: 'SettingBlockKeySectionTipQueryArguments',
      viewBlockType: 'SettingBlockTypeSettingSection',
      isViewBlockRenderable: () => !!getValueMan('useDataSource').getByIndex(0) && targetSelf.state.mainViewBlock.viewBlockState.userResourceQueryWidget['query-item-arguments-tip'] !== false,
      getViewBlockTitle: () => (
        <DialogPanel
          isModal={false}
          hasFooter={false}
          title={getI18nMessage('configureQuery')}
          bodyContent={getI18nMessage('hintQueryArgumentsSetting')}
          panelVisible
          setPanelVisible={async () => await updateViewBlock(() => {
            updateUserServicesQueryWidgetStore('query-item-arguments-tip', false)
            targetSelf.state.mainViewBlock.viewBlockState.userResourceQueryWidget['query-item-arguments-tip'] = false
          })}
          getI18nMessage={targetSelf.getI18nMessage}
        />
      )
    }, {
      viewBlockKey: 'SettingBlockKeySectionAttributeFilter',
      viewBlockType: 'SettingBlockTypeSettingSectionWithSwitch',
      viewBlockState: {},
      isViewBlockRenderable: () => !!getValueMan('useDataSource').getByIndex(0),
      getViewBlockTitle: () => getI18nMessage('attributeFilter'),
      getViewBlockData: () => ({
        enabled: getValueMan('useAttributeFilter').getByIndex(0) ?? true,
        setEnabled: (enabled: boolean) => {
          const value = getValueMan('useAttributeFilter')
          value.setByIndices([0, enabled])
        }
      }),
      subViewBlocks: [{
        viewBlockKey: 'SettingBlockKeyFieldAttributeFilterLabel',
        viewBlockType: 'SettingBlockTypeFieldTextInput',
        getViewBlockTitle: () => getI18nMessage('label'),
        getViewBlockData: () => ({
          fieldStyle: { rowMode: 'TwoRow' },
          valueMan: getValueMan('attributeFilterLabel'),
          defaultValue: getI18nMessage('attributeFilter'),
          getTextInputProps: () => ({
            onChange: (event) => getValueMan('attributeFilterLabel').setByIndices([0, event.target.value, { removeMatchingDefaultValue: true, defaultValue: getI18nMessage('attributeFilter') }])
          })
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldSQLExpressionBuilder',
        viewBlockType: 'SettingBlockTypeFieldSQLExpressionBuilder',
        getViewBlockTitle: () => getI18nMessage('addSQLExpressionsToYourQuery'),
        getViewBlockData: () => ({
          valueMan: getValueMan('useDataSource', 'sqlExprObj'),
          getI18nMessage,
          getPopupProps: () => ({
            onChange: (sqlExprObj) => onQueryParamChange({ sqlExprObj })
          })
        })
      }]
    }, {
      viewBlockKey: 'SettingBlockKeySectionSpatialFilter',
      viewBlockType: 'SettingBlockTypeSettingSectionWithSwitch',
      viewBlockState: {},
      isViewBlockRenderable: () => {
        const useDataSource = getValueMan('useDataSource').getByIndex(0)
        const mainDs = DataSourceManager.getInstance().getDataSource(useDataSource?.mainDataSourceId)
        return !!useDataSource && (mainDs?.type === AllDataSourceTypes.SceneLayer || !!mainDs?.getGeometryType())
      },
      getViewBlockTitle: () => getI18nMessage('spatialFilter'),
      getViewBlockData: () => ({
        enabled: getValueMan('useSpatialFilter').getByIndex(0) ?? true,
        setEnabled: (enabled: boolean) => {
          const value = getValueMan('useSpatialFilter')
          value.setByIndices([0, enabled])
        }
      }),
      subViewBlocks: [{
        viewBlockKey: 'SettingBlockKeyFieldSpatialFilterLabel',
        viewBlockType: 'SettingBlockTypeFieldTextInput',
        getViewBlockTitle: () => getI18nMessage('label'),
        getViewBlockData: () => ({
          fieldStyle: { rowMode: 'TwoRow' },
          valueMan: getValueMan('spatialFilterLabel'),
          defaultValue: getI18nMessage('spatialFilter'),
          getTextInputProps: () => ({
            onChange: (event) => getValueMan('spatialFilterLabel').setByIndices([0, event.target.value, { removeMatchingDefaultValue: true, defaultValue: getI18nMessage('spatialFilter') }])
          })
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldMapSelect',
        viewBlockType: 'SettingBlockTypeFieldMapSelect',
        getViewBlockTitle: () => getI18nMessage('chooseAMapWidget'),
        getViewBlockData: () => ({
          fieldStyle: { rowMode: 'TwoRow' },
          valueMan: getValueMan('spatialMapWidgetIds')
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldFilterTypes',
        viewBlockType: 'SettingBlockTypeFieldCheckInputGroup',
        getViewBlockTitle: () => getI18nMessage('typesOfFilter'),
        getViewBlockData: ({ topViewBlock }) => ({
          valueMan: getValueMan('spatialFilterTypes'),
          itemChildren: Object.values(SpatialFilterType).map(type => ({
            itemKey: type,
            itemHidden: !getValueMan('spatialMapWidgetIds').getByIndex(0)?.length &&
              [SpatialFilterType.CurrentMapExtent, SpatialFilterType.InteractiveDrawMode].includes(type)
          })),
          getLabelContent: (optionKey) => getI18nMessage(`spatialFilterType_${optionKey}`),
          getAdditionalContent: (optionKey, { checked }) => {
            const renderable = [SpatialFilterType.InteractiveDrawMode, /*SpatialFilterType.SpatialRelationship*/].includes(optionKey)
            return (
              renderable && checked &&
                <Button
                  size='sm' type='tertiary' icon onClick={async () => await updateViewBlock(() => {
                    topViewBlock.viewBlockState.settingStage = optionKey
                  })}
                >
                  <Icon size={12} color={targetSelf.props.theme.colors.black} icon={iconMap.arrowRight} />
                </Button>
            )
          }
        })
      }]
    }, {
      viewBlockKey: 'SettingBlockKeySectionResults',
      viewBlockType: 'SettingBlockTypeSettingSection',
      viewBlockState: {},
      isViewBlockRenderable: () => !!getValueMan('useDataSource').getByIndex(0),
      getViewBlockTitle: () => getI18nMessage('results'),
      getViewBlockData: () => ({
        contentCollapsable: true,
        setContentCollapsed: async (updateFn) => await updateViewBlock(updateFn)
      }),
      subViewBlocks: [{
        viewBlockKey: 'SettingBlockKeyFieldResultsLabel',
        viewBlockType: 'SettingBlockTypeFieldTextInput',
        getViewBlockTitle: () => getI18nMessage('label'),
        getViewBlockData: () => ({
          fieldStyle: { rowMode: 'TwoRow' },
          valueMan: getValueMan('resultsLabel'),
          defaultValue: getI18nMessage('results'),
          getTextInputProps: () => ({
            onChange: (event) => getValueMan('resultsLabel').setByIndices([0, event.target.value, { removeMatchingDefaultValue: true, defaultValue: getI18nMessage('results') }])
          })
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldListDirection',
        viewBlockType: 'SettingBlockTypeFieldDirection',
        getViewBlockTitle: () => getI18nMessage('listDirection'),
        getViewBlockData: () => ({
          valueMan: getValueMan('resultListDirection')
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldFields',
        viewBlockType: 'SettingBlockTypeFieldCustom',
        getViewBlockTitle: () => getI18nMessage('fields'),
        getViewBlockData: () => ({
          fieldStyle: { rowMode: 'TwoRow' }
        }),
        renderViewBlock: ({ currentViewBlock }) => {
          return <span>{getI18nMessage(`field_${FieldsType.PopupSetting}`)}</span>
        }
      }, {
        viewBlockKey: 'SettingBlockKeyFieldSortSetting',
        viewBlockType: 'SettingBlockTypeFieldSortSetting',
        getViewBlockTitle: () => getI18nMessage('sort'),
        getViewBlockData: () => ({
          valueMan: getValueMan('useDataSource', 'sortOptions'),
          onChange: (sortData) => onQueryParamChange({ sortData })
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldSymbolType',
        viewBlockType: 'SettingBlockTypeFieldCheckInputGroup',
        getViewBlockTitle: () => getI18nMessage('symbol'),
        getViewBlockData: ({ topViewBlock }) => ({
          valueMan: getValueMan('resultSymbolType'),
          itemChildren: Object.values(SymbolType).map(type => ({
            itemKey: type
          })),
          getInputProps: () => ({
            _inputType: 'radio'
          }),
          getLabelContent: (optionKey) => getI18nMessage(`symbolType_${optionKey}`),
          getAdditionalContent: (optionKey, { checked }) => {
            return optionKey === SymbolType.CustomSymbol && checked ? (
              <SymbolPicker
                currentSymbol={getValueMan('resultCustomSymbol').getByIndex(0)}
                setCurrentSymbol={(currentSymbol) => getValueMan('resultCustomSymbol').setByIndices([0, currentSymbol])}
                esriModuleMap={targetSelf.state.esriModuleMap}
                intl={targetSelf.props.intl}
              />
            ) : null
          }
        })
      }]
    }]
  }

  const viewBlockContentQueryItemInteractiveDrawMode: ViewBlock<SettingMainAssociatedDataMapType> = {
    viewBlockKey: 'SettingBlockKeySettingContentQueryItemInteractiveDrawMode',
    viewBlockType: 'SettingBlockTypeSettingContent',
    isViewBlockRenderable: ({ topViewBlock }) => !!getValueMan('useDataSource').getByIndex(0) && SpatialFilterType.InteractiveDrawMode === topViewBlock.viewBlockState.settingStage,
    subViewBlocks: [{
      viewBlockKey: 'SettingBlockKeySectionIntersectNavBack',
      viewBlockType: 'SettingBlockTypeNavBackSection',
      getViewBlockTitle: () => getI18nMessage('interactiveDrawMode'),
      getViewBlockData: ({ topViewBlock }) => ({
        onNavBack: async () => await updateViewBlock(() => {
          topViewBlock.viewBlockState.settingStage = ''
        })
      })
    }, {
      viewBlockKey: 'SettingBlockKeySectionInteractiveDrawMode',
      viewBlockType: 'SettingBlockTypeSettingSection',
      subViewBlocks: [{
        viewBlockKey: 'SettingBlockKeyFieldSelectionTools',
        viewBlockType: 'SettingBlockTypeFieldSketchToolsSelect',
        getViewBlockTitle: () => getI18nMessage('chooseSelectionTools'),
        getViewBlockData: () => ({
          valueMan: getValueMan('spatialInteractiveCreateToolTypes'),
          getI18nMessage: (id) => getI18nMessage(id)
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldInteractiveBufferSetting',
        viewBlockType: 'SettingBlockTypeFieldsBufferSetting',
        getViewBlockData: () => ({
          valueMan: getValueMan('spatialInteractiveEnableBuffer', 'spatialInteractiveBufferDistance', 'spatialInteractiveBufferUnit'),
          getI18nMessage: (id) => getI18nMessage(id)
        })
      }]
    }]
  }

  const viewBlockContentQueryItemSpatialRelationship: ViewBlock<SettingMainAssociatedDataMapType> = {
    viewBlockKey: 'SettingBlockKeySettingContentQueryItemSpatialRelationship',
    viewBlockType: 'SettingBlockTypeSettingContent',
    isViewBlockRenderable: ({ topViewBlock }) => false, // !!getValueMan('useDataSource').getByIndex(0) && SpatialFilterType.SpatialRelationship === topViewBlock.viewBlockState.settingStage,
    subViewBlocks: [{
      viewBlockKey: 'SettingBlockKeySectionSpatialNavBack',
      viewBlockType: 'SettingBlockTypeNavBackSection',
      getViewBlockTitle: () => getI18nMessage('spatialRelationship'),
      getViewBlockData: ({ topViewBlock }) => ({
        onNavBack: async () => await updateViewBlock(() => {
          topViewBlock.viewBlockState.settingStage = ''
        })
      })
    }, {
      viewBlockKey: 'SettingBlockKeySectionSpatialRelationship',
      viewBlockType: 'SettingBlockTypeSettingSection',
      subViewBlocks: [{
        viewBlockKey: 'SettingBlockKeyFieldSpatialRelationship',
        viewBlockType: 'SettingBlockTypeFieldSpatialRelationshipPicker',
        getViewBlockTitle: () => getI18nMessage('chooseSpatialRelationshipRules'),
        getViewBlockData: ({ currentViewBlock }) => ({
          valueMan: getValueMan('spatialRelations'),
          fieldStyle: { rowMode: 'TwoRow' },
          getTextInputProps: () => ({
            type: 'text',
            readOnly: true
          }),
          getI18nMessage: (id) => getI18nMessage(id)
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldLayer',
        viewBlockType: 'SettingBlockTypeFieldDataSource',
        getViewBlockTitle: () => getI18nMessage('layer'),
        getViewBlockData: () => ({
          valueMan: getValueMan('spatialRelationUseDataSources'),
          getDssProps: () => ({
            _dsTypes: [AllDataSourceTypes.FeatureLayer],
            _multipleEnabled: true,
            widgetId: targetSelf.props.id
          }),
          getMapThumbProps: () => ({
            _dsJsons: targetSelf.props.dsJsons
          }),
          thumbEnabled: true
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldSelectTool',
        viewBlockType: 'SettingBlockTypeFieldSwitch',
        isViewBlockRenderable: () => !!getValueMan('spatialMapWidgetIds').getByIndex(0)?.length,
        getViewBlockTitle: () => getI18nMessage('enableSelectTool'),
        getViewBlockData: () => ({
          valueMan: getValueMan('spatialRelationEnableSelectTool')
        })
      }, {
        viewBlockKey: 'SettingBlockKeyFieldSpatialBufferSetting',
        viewBlockType: 'SettingBlockTypeFieldsBufferSetting',
        getViewBlockData: () => ({
          valueMan: getValueMan('spatialRelationEnableBuffer', 'spatialRelationBufferDistance', 'spatialRelationBufferUnit'),
          getI18nMessage: (id) => getI18nMessage(id)
        })
      }]
    }]
  }

  const viewBlockPaneQueryItem: ViewBlock<SettingMainAssociatedDataMapType> = {
    viewBlockKey: `SettingBlockKeySettingPaneQueryItem_${configId}`,
    viewBlockType: 'SettingBlockTypeSettingPane',
    viewBlockState: {
      configId,
      settingStage: ''
    },
    getViewBlockTitle: () => getI18nMessage('setQuery'),
    getViewBlockData: ({ currentViewBlock }) => ({
      getPanelHeaderProps: () => ({
        actions: [{
          name: 'tip',
          label: getI18nMessage('openTip'),
          className: 'action-tip',
          icon: iconMap.iconTipBulb,
          onClick: async () => await updateViewBlock(() => targetSelf.state.mainViewBlock.viewBlockState.userResourceQueryWidget['query-item-arguments-tip'] = true)
        }, {
          name: 'close',
          label: getI18nMessage('close'),
          className: 'action-close',
          icon: iconMap.iconClose12,
          onClick: () => onCloseSettingPane()
        }].filter((i, x) => {
          if (x === 0) {
            return !currentViewBlock.viewBlockState.settingStage && !!getValueMan('useDataSource').getByIndex(0)
          }
          return true
        })
      })
    }),
    subViewBlocks: [
      viewBlockContentQueryItemMain,
      viewBlockContentQueryItemInteractiveDrawMode,
      viewBlockContentQueryItemSpatialRelationship
    ]
  }

  return viewBlockPaneQueryItem
}

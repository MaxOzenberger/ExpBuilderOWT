/** @jsx jsx */
import {
  React, jsx, MessageManager, DataRecordsSelectionChangeMessage, moduleLoader, CONSTANTS
} from 'jimu-core'
import { FeatureDataRecordImpl } from 'jimu-core/data-source'
import { Popper, Select, DataActionDropDown, hooks, MobilePanel, Button, Icon, Tooltip } from 'jimu-ui'
import { SqlExpressionRuntime } from 'jimu-ui/basic/sql-expression-runtime'
import { JimuMapViewComponent } from 'jimu-arcgis'
import { QueryArrangeType, SpatialFilterType } from '../config'
import { ViewBlock, renderViewBlockComponentChildren, isMapRequiredForSpatialFilterType } from '../common/utils'
import { NavLine, StateHolder, EntityNoteBlock, EntityStatusType, StatusIndicator } from '../common/common-components'
import { getStyleForQuery } from '../common/style'
import { RuntimeMainAssociatedDataMapType, getWidgetRuntimeDataMap } from './widget-config'
import { QueryTaskList } from './components/query-task-list'
import { QueryResultList } from './components/query-result-list'
import { resetQueryStatus, getInitialQueryState, clearQueryResults, getPopperStyle, getSpatialRelLayerDss } from './widget-utils'
import Widget from './widget'

const { iconMap, sketchToolInfoMap } = getWidgetRuntimeDataMap()
let mapModule = null

const popperModifiers = [{ name: 'preventOverflow', options: { padding: 1 } }]

export interface CreateViewBlockForRuntimeMainOptionsType {
  targetSelf: Widget
}

export const createViewBlockForRuntimeMain = (options: CreateViewBlockForRuntimeMainOptionsType): ViewBlock<RuntimeMainAssociatedDataMapType> => {
  const { targetSelf } = options
  const { getI18nMessage, executingQuery, renderArrangeIconPopper } = targetSelf

  const viewBlockQueryStage1SelectItem: ViewBlock<RuntimeMainAssociatedDataMapType> = {
    viewBlockKey: 'RuntimeBlockKeyQueryStage1SelectItem',
    viewBlockType: 'RuntimeBlockTypeQueryStage',
    isViewBlockCollapsed: ({ associatedData: { currentSelectedQueryStateIndex } }) => targetSelf.props.config.arrangeType !== QueryArrangeType.Inline && currentSelectedQueryStateIndex >= 0,
    renderViewBlock: (scenarioData) => {
      const { associatedData: { currentQueryStates } } = scenarioData
      const { arrangeType } = targetSelf.props.config
      const queryListProps = { currentQueryStates, targetSelf, getI18nMessage, arrangeType, onClickItem: (x) => targetSelf.setState({ selectedQueryStateIndex: x }) }
      const renderQueryTaskList = () => <QueryTaskList {...queryListProps} />
      return (
        <React.Fragment>
          {
            currentQueryStates.length > 1 ? (
              renderQueryTaskList()
            ) : currentQueryStates.length > 0 ? (
              arrangeType === QueryArrangeType.Inline ? renderQueryTaskList() : null
            ) : getI18nMessage('noQueryItem')
          }
        </React.Fragment>
      )
    }
  }

  const viewBlockFormQuestions: ViewBlock<RuntimeMainAssociatedDataMapType> = {
    viewBlockKey: 'RuntimeBlockKeyFormQuestions',
    viewBlockType: 'RuntimeBlockTypeFormQuestions',
    isViewBlockRenderable: ({ associatedData: { currentQueryState } }) => !!currentQueryState,
    subViewBlocks: [{
      viewBlockKey: 'RuntimeBlockKeyAttributeFilter',
      viewBlockType: 'RuntimeBlockTypeFormLine',
      isViewBlockRenderable: ({ associatedData: { currentQueryState } }) => {
        return (currentQueryState?.getQueryItemValue('useAttributeFilter') ?? true) && !!currentQueryState?.getQueryItemValue('sqlExprObj')
      },
      // isViewBlockCollapsed: ({ associatedData: { currentQueryState } }) => !getShownClauseNumberByExpression(currentQueryState.attributeFilterSqlExprObj),
      getViewBlockTitle: ({ associatedData: { currentQueryState } }) => {
        const label = currentQueryState?.getQueryItemValue('attributeFilterLabel')
        // if label is not found in config, its value is undefined, return the default label in such case
        return label === undefined ? getI18nMessage('attributeFilter') : label
      },
      renderViewBlock: ({ associatedData: { currentQueryState, currentOriginDs } }) => {
        return currentOriginDs &&
          <SqlExpressionRuntime
            widgetId={targetSelf.props.id}
            dataSource={currentOriginDs}
            expression={currentQueryState.attributeFilterSqlExprObj}
            onChange={(sqlExprObj) => targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.attributeFilterSqlExprObj = sqlExprObj, [...queryStates]) }))}
          />
      }
    }, {
      viewBlockKey: 'RuntimeBlockKeySpatialFilter',
      viewBlockType: 'RuntimeBlockTypeFormLine',
      isViewBlockRenderable: ({ associatedData: { currentQueryState } }) => {
        return (currentQueryState?.getQueryItemValue('useSpatialFilter') ?? true) && !!currentQueryState?.getQueryItemValue('spatialFilterTypes')?.length
      },
      getViewBlockTitle: ({ associatedData: { currentQueryState } }) => {
        const label = currentQueryState?.getQueryItemValue('spatialFilterLabel')
        // if label is not found in config, its value is undefined, return the default label in such case
        return label === undefined ? getI18nMessage('spatialFilter') : label
      },
      renderViewBlock: ({ associatedData: { currentQueryState, currentJimuMapView, isCurrentSpatialFilterDisabled } }) => {
        let spatialFilterTypes = currentQueryState?.getQueryItemValue('spatialFilterTypes') ?? []
        // sort the spatial filter types
        spatialFilterTypes = Object.values(SpatialFilterType).filter(item => spatialFilterTypes.includes(item))
        const currentSpatialFilterDisabled = isCurrentSpatialFilterDisabled()
        const valueValid = currentSpatialFilterDisabled || currentJimuMapView || !isMapRequiredForSpatialFilterType(currentQueryState.spatialFilterType)
        const correctValue = () => {
          currentQueryState.spatialFilterType = spatialFilterTypes.filter(type => !isMapRequiredForSpatialFilterType(type))?.[0]
          targetSelf.setState(({ queryStates }) => ({ queryStates: [...queryStates] }))
        }
        return (
          <React.Fragment>
            <Select
              ref={valueValid ? undefined : (el) => correctValue()}
              className='ui-unit-select'
              size='sm'
              disabled={currentSpatialFilterDisabled}
              value={currentQueryState.spatialFilterType}
              onChange={(evt) => targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.spatialFilterType = evt.target.value, [...queryStates]) }))}
            >
              {
                spatialFilterTypes.map((spatialFilterType, x) => (
                  <option key={x} value={spatialFilterType} disabled={!currentJimuMapView && isMapRequiredForSpatialFilterType(spatialFilterType)}>
                    {getI18nMessage(`spatialFilterType_${spatialFilterType}`)}
                  </option>
                ))
              }
            </Select>
            {
              currentSpatialFilterDisabled &&
                <EntityNoteBlock
                  templateType='line' entityNote={{
                    renderIcon: (title) => <Icon icon={iconMap.iconWarning} title={title} color={targetSelf.props.theme?.colors?.palette?.warning?.[700]} />,
                    message: getI18nMessage('mapMustBeVisible')
                  }}
                />
            }
          </React.Fragment>
        )
      }
    }, {
      viewBlockKey: 'RuntimeBlockKeyInteractiveDraw',
      viewBlockType: 'RuntimeBlockTypeFormLine',
      isViewBlockRenderable: ({ associatedData: { currentQueryState } }) => (
        (currentQueryState?.queryItem.useSpatialFilter ?? true) && currentQueryState?.spatialFilterType === SpatialFilterType.InteractiveDrawMode
      ),
      renderViewBlock: (scenarioData) => {
        const { associatedData: { currentQueryState, currentJimuMapView } } = scenarioData
        const availableTools = (currentQueryState?.getQueryItemValue('spatialInteractiveCreateToolTypes') || [])
        const Draw = mapModule?.Draw
        if (!Draw) {
          moduleLoader.loadModule('jimu-ui/advanced/map').then(result => {
            mapModule = result
            targetSelf.setState(({ queryStates }) => ({ queryStates: [...queryStates] }))
          })
        }
        return currentJimuMapView?.view && Draw && (
          currentQueryState.spatialInteractiveData.isReady ? (
            <Draw
              jimuMapView={currentJimuMapView}
              disableSymbolSelector
              updateOnGraphicClick={false}
              creationMode='continuous'
              visibleElements={{
                createTools: Object.entries(sketchToolInfoMap).reduce((result, [key, value]) => ({ ...result, [value.drawToolName]: availableTools.includes(key) }), {}),
                selectionTools: {
                  'lasso-selection': false,
                  'rectangle-selection': false
                },
                settingsMenu: false,
                undoRedoMenu: false
              }}
              onDrawToolCreated={({ sketch }) => {
                targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.spatialInteractiveData.layer = sketch.layer, [...queryStates]) }))
              }}
              onDrawStart={() => {
                currentQueryState.spatialInteractiveData.layer?.removeAll()
              }}
              onDrawEnd={(graphic) => {
                // Since js api does not support event state 'start' for 'point' type, a workaround is used by Draw component and here to add the graphic manually, #5674
                if (graphic?.geometry?.type === 'point') {
                  currentQueryState.spatialInteractiveData.layer?.add(graphic)
                }
                targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.spatialInteractiveData.graphic = graphic, [...queryStates]) }))
              }}
              onDrawToolCleared={() => {
                targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.spatialInteractiveData.graphic = null, [...queryStates]) }))
              }}
            />
          ) : (
            <div
              style={{ display: 'none' }}
              ref={() => targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.spatialInteractiveData.isReady = true, [...queryStates]) }))}
            />
          )
        )
      }
    }, {
      viewBlockKey: 'RuntimeBlockKeySpatialRelation',
      viewBlockType: 'RuntimeBlockTypeFormLine',
      isViewBlockRenderable: ({ associatedData: { currentQueryState } }) => false, //currentQueryState?.spatialFilterType === SpatialFilterType.SpatialRelationship,
      getViewBlockTitle: () => getI18nMessage('relationship'),
      renderViewBlock: ({ associatedData: { currentQueryState } }) => {
        return (
          <Select
            className='ui-unit-select'
            size='sm'
            value={currentQueryState.spatialRelation}
            onChange={(evt) => targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.spatialRelation = evt.target.value, [...queryStates]) }))}
          >
            {
              (currentQueryState?.getQueryItemValue('spatialRelations') || [])
                .map((spatialRelation, x) => <option key={x} value={spatialRelation}>{getI18nMessage(`spatialRelation_${spatialRelation}`)}</option>)
            }
          </Select>
        )
      }
    }, {
      viewBlockKey: 'RuntimeBlockKeySpatialRelationLayer',
      viewBlockType: 'RuntimeBlockTypeFormLine',
      isViewBlockRenderable: ({ associatedData: { currentQueryState } }) => false, // currentQueryState?.spatialFilterType === SpatialFilterType.SpatialRelationship,
      getViewBlockTitle: () => getI18nMessage('layer'),
      renderViewBlock: ({ associatedData: { currentQueryState } }) => {
        const layerDss = getSpatialRelLayerDss(targetSelf.state.dss, currentQueryState)
        return !!layerDss?.length && (
          <React.Fragment>
            <Select
              ref={targetSelf.selectSpatialRelLayerOnMount}
              className='ui-unit-select'
              size='sm'
              value={currentQueryState.spatialRelLayerIndex}
              onChange={(evt) => {
                targetSelf.selectSpatialRelLayer(layerDss, evt.target.value)
              }}
            >
              {
                layerDss.map((layerDs, x) => <option key={x} value={x}>{layerDs.getLabel()}</option>)
              }
            </Select>
            {
              currentQueryState.isLoadingRelLayerGeometries &&
                <EntityNoteBlock
                  templateType='line' entityNote={{
                    renderIcon: (title) => <StatusIndicator statusType={EntityStatusType.Loading} title={title} />,
                    message: targetSelf.getI18nMessage('loading'),
                    type: EntityStatusType.Loading
                  }}
                />
            }
          </React.Fragment>
        )
      }
    }]
  }

  const viewBlockFormActions: ViewBlock<RuntimeMainAssociatedDataMapType> = {
    viewBlockKey: 'RuntimeBlockKeyFormActions',
    viewBlockType: 'RuntimeBlockTypeFormActions',
    isViewBlockRenderable: ({ associatedData: { currentQueryState } }) => !!currentQueryState,
    getViewBlockData: ({ associatedData: { currentQueryState, currentSelectedQueryStateIndex, isCurrentSpatialFilterDisabled } }) => ({
      commandItems: [{
        getButtonProps: () => ({
          buttonClass: `ui-unit-button_clear-results first-child ${currentQueryState?.queryData?.queryResult ? '' : 'collapse'}`,
          separator: 'right',
          children: <React.Fragment><Icon size={12} icon={iconMap.toolDelete} />{getI18nMessage('clearResult')}</React.Fragment>,
          type: 'tertiary',
          onClick: () => resetQueryStatus(currentQueryState, targetSelf)
        })
      }, {
        getButtonProps: () => ({
          buttonClass: 'ui-unit-button_apply active',
          children: getI18nMessage('apply'),
          disabled: (currentQueryState.getQueryItemValue('useSpatialFilter') ?? true) &&
          (isCurrentSpatialFilterDisabled() ||
          (currentQueryState?.spatialFilterType === SpatialFilterType.InteractiveDrawMode && !currentQueryState.spatialInteractiveData.graphic)),
          //(currentQueryState?.spatialFilterType === SpatialFilterType.SpatialRelationship && !currentQueryState.spatialRelLayerGeometries),
          onClick: () => {
            clearQueryResults(currentQueryState, targetSelf)
            targetSelf.setState(({ queryStates }) => {
              const nextQueryStates = [...queryStates]
              nextQueryStates[currentSelectedQueryStateIndex] = {
                ...nextQueryStates[currentSelectedQueryStateIndex],
                queryData: null,
                resultStatus: 'apply'
              }
              return { queryStates: nextQueryStates }
            })
          }
        })
      }, {
        getButtonProps: () => ({
          buttonClass: 'ui-unit-button_reset',
          children: getI18nMessage('reset'),
          onClick: () => targetSelf.setState(({ queryStates }) => {
            const nextQueryStates = [...queryStates]
            nextQueryStates[currentSelectedQueryStateIndex] = {
              ...getInitialQueryState(targetSelf.props.config.queryItems, currentSelectedQueryStateIndex, {
                queryData: queryStates[currentSelectedQueryStateIndex].queryData,
                refQueryItemButton: queryStates[currentSelectedQueryStateIndex].refQueryItemButton
              })
            }
            return { queryStates: nextQueryStates }
          })
        })
      }]
    })
  }

  const viewBlockQueryStage2s1Params: ViewBlock<RuntimeMainAssociatedDataMapType> = {
    viewBlockKey: 'RuntimeBlockKeyQueryStage2s1Params',
    viewBlockType: 'RuntimeBlockTypeQueryStage',
    isViewBlockRenderable: ({ associatedData: { currentSelectedQueryStateIndex } }) => currentSelectedQueryStateIndex >= 0,
    isViewBlockCollapsed: ({ associatedData: { currentQueryState } }) => !!currentQueryState?.resultStatus,
    getViewBlockTitle: ({ associatedData: { currentQueryStates, currentQueryState } }) => {
      const [icon, displayLabel, name] = ['icon', 'displayLabel', 'name'].map(i => currentQueryState?.getQueryItemValue(i))
      return ((currentQueryStates.length === 1 && !displayLabel) || targetSelf.props.config.arrangeType === QueryArrangeType.Inline) ? null : (
        <NavLine
          title={name}
          titleElement={<React.Fragment>{icon && <Icon className='ui-unit-icon' icon={icon.svg} />}<span className='text-truncate'>{name}</span></React.Fragment>}
          templateType='back'
          icon={currentQueryStates.length === 1 ? null : iconMap.arrowNavBack}
          onClickIcon={() => targetSelf.setState({ selectedQueryStateIndex: -1 })}
        />
      )
    },
    renderViewBlock: (scenarioData) => {
      const { associatedData: { currentQueryState, currentDsEntityStatus, getCurrentDsEntityNote } } = scenarioData
      return currentDsEntityStatus ? <EntityNoteBlock templateType='line' entityNote={getCurrentDsEntityNote()} /> : (
        <React.Fragment>
          {renderViewBlockComponentChildren(scenarioData)}
          {
            (currentQueryState?.getQueryItemValue('spatialMapWidgetIds') ?? []).map((mapWidgetId, x) => (
              <JimuMapViewComponent
                key={x} useMapWidgetId={mapWidgetId} onActiveViewChange={(jimuMapView) => {
                  targetSelf.setState(({ jimuMapViewMap }) => ({ jimuMapViewMap: { ...jimuMapViewMap, [mapWidgetId]: jimuMapView?.view ? jimuMapView : null } }))
                }}
              />
            ))
          }
        </React.Fragment>
      )
    },
    subViewBlocks: [viewBlockFormQuestions, viewBlockFormActions]
  }

  const viewBlockQueryStage2s2Results: ViewBlock<RuntimeMainAssociatedDataMapType> = {
    viewBlockKey: 'RuntimeBlockKeyQueryStage2s2Results',
    viewBlockType: 'RuntimeBlockTypeQueryStage',
    isViewBlockRenderable: ({ associatedData: { currentSelectedQueryStateIndex } }) => currentSelectedQueryStateIndex >= 0,
    isViewBlockCollapsed: ({ associatedData: { currentQueryState } }) => !currentQueryState?.resultStatus,
    getViewBlockTitle: ({ associatedData: { currentQueryState, currentQueryDs, currentDsEntityStatus } }) => {
      const enableDataAction = !('enableDataAction' in targetSelf.props) || !!targetSelf.props.enableDataAction
      const label = currentQueryState?.getQueryItemValue('resultsLabel')
      return (
        <NavLine
          title={label === undefined ? getI18nMessage('results') : label}
          templateType='back'
          icon={iconMap.arrowNavBack}
          onClickIcon={() => targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.resultStatus = '', [...queryStates]) }))}
        >
          {
            ![EntityStatusType.Error, EntityStatusType.Warning].includes(currentDsEntityStatus) &&
            currentQueryState?.queryData?.queryResult &&
              <React.Fragment>
                <Tooltip title={getI18nMessage('clearResult')} placement='bottom'>
                  <Button
                    className='ui-unit-button'
                    icon
                    onClick={() => resetQueryStatus(currentQueryState, targetSelf)}
                  >
                    <Icon icon={iconMap.toolDelete} />
                  </Button>
                </Tooltip>
                {
                  enableDataAction &&
                    <DataActionDropDown
                      dataName={currentQueryDs?.getLabel()}
                      widgetId={targetSelf.props.id}
                      dataSource={currentQueryDs}
                      size='default'
                      records={(selectedRecords => selectedRecords?.length ? selectedRecords : currentQueryState.queryData?.queryResult?.records)(currentQueryDs?.getSelectedRecords())}
                    />
                }
              </React.Fragment>
          }
        </NavLine>
      )
    },
    renderViewBlock: (scenarioData) => {
      const { associatedData: { currentQueryState, currentQueryDs, currentOriginDs, currentDsEntityStatus, getCurrentDsEntityNote } } = scenarioData
      const horizontal = currentQueryState?.getQueryItemValue('resultListDirection') === 'Horizontal'
      return [EntityStatusType.Error, EntityStatusType.Warning].includes(currentDsEntityStatus) ? <EntityNoteBlock templateType='line' entityNote={getCurrentDsEntityNote()} /> : (
        <StateHolder initState={{}}>
          {
            ({ visible: [loadingVisible, setLoadingVisible], refContainer: [refQueryResultContainer, setRefQueryResultContainer] }) => {
              const queryResultPageSize = currentOriginDs?.getQueryPageSize() ?? CONSTANTS.DEFAULT_QUERY_PAGE_SIZE
              return (
                <div ref={el => setRefQueryResultContainer(el)} className='runtime-query__query-result-list-container'>
                  <div className='runtime-query__query-result-info'>
                    {
                      currentQueryState?.queryData?.queryResult
                        ? `${getI18nMessage('featuresDisplayed')}: ${currentQueryState.queryData.queryResult?.records?.length} / ${currentQueryState.queryData.resultCount}`
                        : ''
                    }
                  </div>
                  {
                    !['', 'cleared'].includes(currentQueryState?.resultStatus) &&
                      <QueryResultList
                        className='runtime-query__query-result-list'
                        direction={horizontal ? 'horizontal' : 'vertical'}
                        // container={refQueryResultContainer}
                        pagingConfig={{ itemCountPerPage: queryResultPageSize, initialLoadItemCount: queryResultPageSize }}
                        requestDataItems={async (dataItemLength) => {
                          setLoadingVisible(true)
                          const queryData = await executingQuery({
                            ...(scenarioData?.associatedData ?? {}),
                            pagingSetting: { page: 1, pageSize: dataItemLength }
                          })
                          targetSelf.setState(({ queryStates }) => ({ queryStates: (currentQueryState.queryData = queryData, [...queryStates]) }))
                          setLoadingVisible(false)
                          return currentQueryState.queryData.queryResult.records as FeatureDataRecordImpl[]
                        }}
                        associatedListData={currentQueryState?.queryData}
                        onClickListItem={(options) => {
                          const dataItem = options?.data?.[options?.index]
                          const dataItemRecordId = dataItem.getId()
                          const nextSelectedDataItems = (currentQueryDs?.getSelectedRecordIds() ?? []).includes(dataItemRecordId) ? [] : [dataItem]
                          MessageManager.getInstance().publishMessage(new DataRecordsSelectionChangeMessage(targetSelf.props.id, nextSelectedDataItems))
                          currentQueryDs?.selectRecordsByIds?.(nextSelectedDataItems.map(i => i.getId()))
                        }}
                        onRenderDone={({ dataItems, element }) => {
                          const selectedRecordIndex = dataItems?.findIndex(dataItem => currentQueryDs?.getSelectedRecordIds()?.includes(dataItem?.getId()))
                          if (selectedRecordIndex >= 0) {
                            const elListItem: HTMLElement = element?.querySelector(`.ui-unit-query-result-list-item:nth-of-type(${selectedRecordIndex + 1})`)
                            const rect1 = element?.getBoundingClientRect()
                            const rect2 = elListItem?.getBoundingClientRect()
                            if (rect1 && rect2) {
                              if (rect1.top > rect2.bottom || rect1.right < rect2.left || rect1.bottom < rect2.top || rect1.left > rect2.right) {
                                element?.scrollTo(horizontal ? elListItem?.offsetLeft : 0, horizontal ? 0 : elListItem?.offsetTop)
                              }
                            }
                          }
                        }}
                      />
                  }
                </div>
              )
            }
          }
        </StateHolder>
      )
    }
  }

  const viewBlockQueryStage2QueryItem: ViewBlock<RuntimeMainAssociatedDataMapType> = {
    viewBlockKey: 'RuntimeBlockKeyQueryStage2QueryItem',
    viewBlockType: 'RuntimeBlockTypeQueryStage',
    isViewBlockRenderable: ({ associatedData: { currentSelectedQueryStateIndex } }) => currentSelectedQueryStateIndex >= 0,
    renderViewBlock: (scenarioData) => {
      const { associatedData: { currentQueryState, currentSelectedQueryStateIndex } } = scenarioData
      const isMobile = hooks.useCheckSmallBrowserSzieMode()
      const renderWrapper = (content) => (
        targetSelf.props.config.arrangeType === QueryArrangeType.Inline ? (
          isMobile ? (
            <MobilePanel
              open
              title={currentQueryState?.getQueryItemValue('name')}
              toggle={() => targetSelf.setState({ selectedQueryStateIndex: -1 })}
            >
              {content}
            </MobilePanel>
          ) : (
            <Popper
              key={currentSelectedQueryStateIndex}
              className='ui-unit-popper ui-unit-popper_k-query-item flex-grow-1'
              floating
              open
              headerTitle={currentQueryState?.getQueryItemValue('name')}
              onHeaderClose={() => targetSelf.setState({ selectedQueryStateIndex: -1 })}
              minSize={currentQueryState?.getQueryItemValue('itemSizeMap')?.arrangementHorizontalPopper?.minSize}
              defaultSize={currentQueryState?.getQueryItemValue('itemSizeMap')?.arrangementHorizontalPopper?.defaultSize}
              // onResize={() => console.log('handleResize')}
              dragBounds='body'
              reference={currentQueryState?.refQueryItemButton}
              placement='bottom-start'
              modifiers={popperModifiers}
              css={getPopperStyle()}
            >
              {content}
            </Popper>
          )
        ) : <React.Fragment>{content}</React.Fragment>
      )
      return renderWrapper(renderViewBlockComponentChildren(scenarioData))
    },
    subViewBlocks: [{
      viewBlockKey: 'RuntimeBlockKeyQueryBoardQueryItem',
      viewBlockType: 'RuntimeBlockTypeQueryBoard',
      getViewBlockData: () => ({
        getAdditionalClassName: () => `runtime-query_arrange-type-${targetSelf.props.config.arrangeType.toLocaleLowerCase()} runtime-query_arrange-wrap-${targetSelf.props.config.arrangeWrap}`,
        css: getStyleForQuery(targetSelf.props.theme)
      }),
      subViewBlocks: [
        viewBlockQueryStage2s1Params,
        viewBlockQueryStage2s2Results
      ]
    }]
  }

  const viewBlockRuntimeWidgetContentWrapper: ViewBlock<RuntimeMainAssociatedDataMapType> = {
    viewBlockKey: 'RuntimeBlockKeyRuntimeWidgetContentWrapper',
    viewBlockType: 'RuntimeBlockTypeCustom',
    renderViewBlock: (scenarioData) => {
      const content = renderViewBlockComponentChildren(scenarioData)
      const { arrangeType } = targetSelf.props.config
      return (
        arrangeType === QueryArrangeType.Popper
          ? renderArrangeIconPopper({ queryContent: content })
          : <div className={`runtime-query__widget-static ${arrangeType === QueryArrangeType.Block ? 'surface-1' : ''}`}>{content}</div>
      )
    },
    subViewBlocks: [{
      viewBlockKey: 'RuntimeBlockKeyRuntimeWidgetBoard',
      viewBlockType: 'RuntimeBlockTypeQueryBoard',
      getViewBlockData: () => ({
        getAdditionalClassName: () => `runtime-query_arrange-type-${targetSelf.props.config.arrangeType.toLocaleLowerCase()} runtime-query_arrange-wrap-${targetSelf.props.config.arrangeWrap}`,
        css: getStyleForQuery(targetSelf.props.theme)
      }),
      subViewBlocks: [viewBlockQueryStage1SelectItem, viewBlockQueryStage2QueryItem]
    }]
  }

  return viewBlockRuntimeWidgetContentWrapper
}

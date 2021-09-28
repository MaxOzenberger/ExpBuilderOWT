/** @jsx jsx */
import { React, jsx, urlUtils, DataSourceManager } from 'jimu-core'
import { Icon, Alert } from 'jimu-ui'
import { List, TreeItemActionType, TreeItemsType, TreeItemType } from 'jimu-ui/basic/list-tree'
import { SidePopper } from 'jimu-ui/advanced/setting-components'
import { ViewBlock, ViewBlockComponent } from '../common/utils'
import { getStyleForQuery } from '../common/style'
import { getWidgetSettingDataMap, SettingMainAssociatedDataMapType, ValueManType } from './setting-config'
import Setting from './setting'

const { iconMap, iconPropMap } = getWidgetSettingDataMap()

export interface CreateViewBlockForSettingMainOptionsType {
  targetSelf: Setting
  getValueMan: (...configKeys: string[]) => ValueManType
}

export const createViewBlockForSettingMain = (options: CreateViewBlockForSettingMainOptionsType): ViewBlock<SettingMainAssociatedDataMapType> => {
  const { targetSelf, getValueMan } = options
  const { getI18nMessage, createSettingPaneQueryItemViewBlock } = targetSelf

  const viewBlockSectionQueryItem: ViewBlock<SettingMainAssociatedDataMapType> = {
    viewBlockKey: 'SettingBlockKeySectionQueryItem',
    viewBlockType: 'SettingBlockTypeSettingSection',
    getViewBlockTitle: () => getI18nMessage('queryItem'),
    subViewBlocks: [{
      viewBlockKey: 'SettingBlockKeyFieldQueryItem',
      viewBlockType: 'SettingBlockTypeCustom',
      viewBlockState: {
      },
      getViewBlockData: () => ({
        fieldStyle: { rowMode: 'MultiRow' }
      }),
      renderViewBlock: (normalizedProps) => {
        const { topViewBlock } = normalizedProps
        const { config } = targetSelf.props
        const advancedActionMap = {
          isItemFocused: (actionData, refComponent) => {
            const { itemJsons: [currentItemJson] } = refComponent.props
            return +targetSelf.state.currentQueryItemPanelIndex === +currentItemJson?.itemKey
          },
          overrideItemBlockInfo: ({ itemBlockInfo }, refComponent) => {
            return {
              name: TreeItemActionType.RenderOverrideItem,
              children: [{
                name: TreeItemActionType.RenderOverrideItemDroppableContainer,
                children: [{
                  name: TreeItemActionType.RenderOverrideItemDraggableContainer,
                  children: [{
                    name: TreeItemActionType.RenderOverrideItemBody,
                    children: [{
                      name: TreeItemActionType.RenderOverrideItemMainLine,
                      children: [{
                        name: TreeItemActionType.RenderOverrideItemDragHandle
                      }, {
                        name: TreeItemActionType.RenderOverrideItemIcon,
                        autoCollapsed: true
                      }, {
                        name: TreeItemActionType.RenderOverrideItemTitle
                      }, {
                        name: TreeItemActionType.RenderOverrideItemDetailToggle
                      }, {
                        name: TreeItemActionType.RenderOverrideItemCommands
                      }]
                    }]
                  }]
                }]
              }]
            }
          }
        }
        /* eslint-disable-next-line */
        const sidePopperTrigger = React.useRef<HTMLDivElement>(null)
        return (
          <div ref={sidePopperTrigger}>
            <ViewBlockComponent
              {...normalizedProps} currentViewBlock={{
                viewBlockKey: 'SettingBlockKeyFieldNewQuery',
                viewBlockType: 'SettingBlockTypeFieldButton',
                getViewBlockData: () => ({
                  fieldStyle: { rowMode: 'TwoRow' },
                  getButtonProps: () => ({
                    className: 'w-100 text-dark set-link-btn',
                    type: 'primary',
                    onClick: () => {
                      targetSelf.onToggleQueryItemPanel(targetSelf.props.config.queryItems.length)
                    },
                    children: (
                      <div className='w-100 px-2 text-truncate'>
                        <Icon icon={iconMap.iconAdd} className='mr-1' size={14} />
                        {getI18nMessage('newQuery')}
                      </div>
                    )
                  })
                })
              }}
            />
            <div className='setting-ui-unit-list'>
              {
                !!config.queryItems.length && // render the existing query items
                  <List
                    className='setting-ui-unit-list-exsiting'
                    itemsJson={Array.from(config.queryItems).map((i, x) => ({
                      itemStateDetailContent: i,
                      itemKey: `${x}`,
                      itemStateIcon: { icon: i.icon?.svg },
                      itemStateTitle: i.name,
                      itemStateCommands: [
                        {
                          label: getI18nMessage('close'),
                          iconProps: () => ({ icon: iconMap.iconClose, size: 12 }),
                          action: ({ data }) => {
                            const { itemJsons: [currentItemJson] } = data
                            targetSelf.tryRemoveQueryItem(+currentItemJson.itemKey)
                          }
                        }
                      ]
                    }))}
                    dndEnabled
                    renderOverrideItemDetailToggle={(actionData, refComponent) => {
                      const { itemJsons } = refComponent.props
                      const [ currentItemJson ] = itemJsons
                      const dsId = currentItemJson?.itemStateDetailContent?.useDataSource?.dataSourceId
                      const isDataSourceInProps = targetSelf.props.useDataSources?.filter(useDs => dsId === useDs.dataSourceId).length > 0
                      const isDataSourceAvailble = DataSourceManager.getInstance().getDataSource(dsId) != null
                      return (!isDataSourceInProps || !isDataSourceAvailble) ? <Alert
                        buttonType='tertiary'
                        form='tooltip'
                        size='small'
                        type='error'
                        text={getI18nMessage('dataSourceCreateError')}
                      >
                      </Alert> : ''
                    }}
                    onUpdateItem={(actionData, refComponent) => {
                      const { itemJsons } = refComponent.props
                      const [, parentItemJson] = itemJsons as [TreeItemType, TreeItemsType]
                      getValueMan('queryItems').setByIndices([0, parentItemJson.map(i => i.itemStateDetailContent), { dsUpdateRequired: true }])
                    }}
                    onClickItemBody={(actionData, refComponent) => {
                      const { itemJsons: [currentItemJson] } = refComponent.props
                      targetSelf.onToggleQueryItemPanel(+currentItemJson.itemKey)
                    }}
                    {...advancedActionMap}
                  />
              }
              {
                config.queryItems.length === targetSelf.state.currentQueryItemPanelIndex && // render the adding query item(new query item)
                  <List
                    className='setting-ui-unit-list-new'
                    itemsJson={[{
                      icon: iconPropMap.defaultIconResult,
                      name: '......'
                    }].map((i, x) => ({
                      itemKey: `${targetSelf.state.currentQueryItemPanelIndex}`,
                      itemStateIcon: { icon: i.icon?.svg },
                      itemStateTitle: i.name,
                      itemStateCommands: []
                    }))}
                    dndEnabled={false}
                    {...advancedActionMap}
                  />
              }
              {
                !config.queryItems.length && config.queryItems.length !== targetSelf.state.currentQueryItemPanelIndex && // render empty placeholder if there is no any query items
                  <div className='empty-placeholder w-100'>
                    <div className='empty-placeholder-icon'><Icon icon={iconMap.iconEmpty} width={48} height={48} /></div>
                    <div
                      className='empty-placeholder-text'
                      dangerouslySetInnerHTML={{ __html: getI18nMessage('noQueryTip', { values: { newQuery: getI18nMessage('newQuery') } }) }}
                    />
                  </div>
              }
            </div>
            <SidePopper
              disableActivateOverlay
              isOpen={targetSelf.state.currentQueryItemPanelIndex >= 0 && !urlUtils.getAppIdPageIdFromUrl().pageId}
              toggle={() => targetSelf.onToggleQueryItemPanel(targetSelf.state.currentQueryItemPanelIndex)}
              position='right'
              trigger={sidePopperTrigger?.current}
            >
              {
                ((queryItems, index) => {
                  if (index < 0) return null
                  const queryItemViewBlock = topViewBlock.viewBlockState.queryItemViewBlockMap[index === queryItems.length ? 'newQueryId' : queryItems[index].configId]
                  return (
                    <div className='setting-query__query-item-panel w-100 h-100' css={getStyleForQuery(targetSelf.props.theme)}>
                      <ViewBlockComponent
                        {...normalizedProps}
                        currentViewBlock={queryItemViewBlock}
                        parentViewBlock={queryItemViewBlock}
                        topViewBlock={queryItemViewBlock}
                      />
                    </div>
                  )
                })(config.queryItems, targetSelf.state.currentQueryItemPanelIndex)
              }
            </SidePopper>
          </div>
        )
      }
    }]
  }

  const viewBlockSectionArrangement: ViewBlock<SettingMainAssociatedDataMapType> = {
    viewBlockKey: 'SettingBlockKeySectionArrangement',
    viewBlockType: 'SettingBlockTypeSettingSection',
    isViewBlockRenderable: () => targetSelf.props.config.queryItems.length > 0,
    getViewBlockTitle: () => getI18nMessage('arrangementStyle'),
    subViewBlocks: [{
      viewBlockKey: 'SettingBlockKeyFieldsArrangementStyle',
      viewBlockType: 'SettingBlockTypeFieldsArrangementStyle',
      getViewBlockData: () => ({
        getI18nMessage: getI18nMessage,
        valueMan: getValueMan('arrangeType', 'arrangeWrap')
      })
    }]
  }

  const viewBlockPaneMain: ViewBlock<SettingMainAssociatedDataMapType> = {
    viewBlockKey: 'SettingBlockKeySettingPaneMain',
    viewBlockType: 'SettingBlockTypeSettingPane',
    viewBlockState: {
      queryItemViewBlockMap: [
        { configId: 'newQueryId' }
      ].reduce((queryItemViewBlockMap, queryItem, x) => {
        return {
          ...queryItemViewBlockMap,
          [queryItem.configId]: createSettingPaneQueryItemViewBlock({ configId: queryItem.configId })
        }
      }, {}),
      userResourceQueryWidget: {
        'query-item-arguments-tip': false
      }
    },
    subViewBlocks: [{
      viewBlockKey: 'SettingBlockKeySettingContentMain',
      viewBlockType: 'SettingBlockTypeSettingContent',
      subViewBlocks: [
        viewBlockSectionQueryItem,
        viewBlockSectionArrangement
      ]
    }]
  }

  return viewBlockPaneMain
}

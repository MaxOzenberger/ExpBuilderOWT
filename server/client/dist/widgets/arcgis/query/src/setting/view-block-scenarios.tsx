/** @jsx jsx */
import { React, jsx, css, lodash, Immutable, DataSourceComponent, dataSourceUtils } from 'jimu-core'
import { Icon, TextInput, TextArea, NumericInput, Button, Switch, Select, Radio, Popper, Checkbox, Tooltip, PanelHeader } from 'jimu-ui'
import { SettingSection, DirectionSelector, JimuMapViewSelector, SettingCollapse } from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { Sort, SqlExpressionBuilderPopup } from 'jimu-ui/advanced/sql-expression-builder'
import MapThumb from 'jimu-ui/advanced/lib/map/components/jimu-map/components/map-thumb'
import { UnitType, ListDirection, QueryArrangeType } from '../config'
import { renderViewBlockComponentChildren, toggleItemInArray, ViewBlockComponent, ViewBlockComponentProps } from '../common/utils'
import { NavLine, StateHolder } from '../common/common-components'
import { getStyleForQuery } from '../common/style'
import { getWidgetSettingDataMap, SettingMainAssociatedDataMapType } from './setting-config'
import { SettingField } from './components/setting-form-units'
import { SpatialRelationDialog } from './components/spatial-relationship-dialog'

const { iconMap, sketchToolInfoMap, arrangementStyleMap } = getWidgetSettingDataMap()

export const getSettingViewBlockScenarios = (normalizedProps: ViewBlockComponentProps<SettingMainAssociatedDataMapType>) => {
  const { currentViewBlock, associatedData: { targetComponent } } = normalizedProps
  const currentViewBlockData = (currentViewBlock.getViewBlockData || (() => ({})))(normalizedProps)
  const viewBlockKeyForCssName = lodash.kebabCase(currentViewBlock.viewBlockKey ?? `${Math.random()}`.slice(2))
  const viewBlockTypeForCssName = lodash.kebabCase(currentViewBlock.viewBlockType ?? '')
  const generalClassName = `setting-query__${viewBlockKeyForCssName} setting-query__${viewBlockTypeForCssName}`
  return [{
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeSettingPane',
    renderScenario: () => {
      const {
        getAdditionalClassName = () => '',
        getPanelHeaderProps = () => ({})
      } = currentViewBlockData
      const title = currentViewBlock.getViewBlockTitle(normalizedProps)
      const supportedProps = getPanelHeaderProps()
      const managedProps = {
        title
      }
      return (
        <div className={`${generalClassName} ${getAdditionalClassName() || ''}`}>
          {
            supportedProps.actions &&
              <PanelHeader level={1} className='setting-ui-unit-header px-3 pt-3' {...managedProps} {...supportedProps} />
          }
          {renderViewBlockComponentChildren(normalizedProps)}
        </div>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeSettingContent',
    renderScenario: () => {
      return (
        <div className={`${generalClassName}`}>
          {renderViewBlockComponentChildren(normalizedProps)}
        </div>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeSettingSection',
    renderScenario: () => {
      const {
        getAdditionalClassName = () => '',
        contentCollapsable = false
      } = currentViewBlockData
      const {
        contentCollapsed = true
      } = currentViewBlock.viewBlockState
      const title = currentViewBlock.getViewBlockTitle(normalizedProps)
      const commonProps = {
        className: `${generalClassName} ${getAdditionalClassName() || ''}`,
        children: renderViewBlockComponentChildren(normalizedProps)
      }
      return contentCollapsable
        ? <SettingSection>
          <SettingCollapse
            {...commonProps}
            label={title}
            isOpen={!contentCollapsed}
            onRequestOpen={() => { currentViewBlockData.setContentCollapsed(() => (currentViewBlock.viewBlockState.contentCollapsed = false)) }}
            onRequestClose={() => { currentViewBlockData.setContentCollapsed(() => (currentViewBlock.viewBlockState.contentCollapsed = true)) }}
          />
          </SettingSection>
        : <SettingSection {...commonProps} title={title} />
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeSettingSectionWithSwitch',
    renderScenario: () => {
      const {
        enabled,
        getAdditionalClassName = () => '',
      } = currentViewBlockData
      const title = currentViewBlock.getViewBlockTitle(normalizedProps)
      const titleComponent = (
        <div className='d-flex'>
          <div css={css`max-width: 80%`} className='text-truncate' title={title}>{title}</div>
          <div className='ml-auto'>
            <Switch checked={enabled} onChange={(event) => {
              currentViewBlockData.setEnabled(event.target.checked)
            }}/>
          </div>
        </div>
      )
      return <SettingSection className={`${generalClassName} ${getAdditionalClassName() || ''}`} title={titleComponent} >
        {enabled && renderViewBlockComponentChildren(normalizedProps)}
      </SettingSection>
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeNavBackSection',
    renderScenario: () => {
      const { onNavBack } = currentViewBlockData
      return (
        <SettingSection
          className={`${generalClassName}`} title={
            <NavLine
              title={currentViewBlock.getViewBlockTitle(normalizedProps)}
              templateType='back'
              icon={iconMap.arrowLeft}
              onClickIcon={() => onNavBack()}
            />
          }
        />
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldSelect',
    renderScenario: () => {
      const {
        fieldStyle,
        valueMan,
        getSelectProps = () => ({})
      } = currentViewBlockData
      const { _options = null, ...supportedProps } = getSelectProps()
      const managedProps = {
        children: (_options || []).map((option, x) => <option key={x} value={option.value}>{option.children}</option>),
        value: valueMan.getByIndex(0),
        onChange: (event) => valueMan.setByIndices([0, event.target.value])
      }
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle}>
          <Select className='ui-unit-select' size='sm' {...managedProps} {...supportedProps} />
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldTextInput',
    renderScenario: () => {
      const {
        fieldStyle,
        valueMan,
        defaultValue,
        getTextInputProps = () => ({}),
        getAdditionalContent = () => null
      } = currentViewBlockData
      const supportedProps = getTextInputProps()
      const isTextArea = supportedProps.type === 'textarea'
      const isNumber = supportedProps.type === 'number'
      const value = valueMan.getByIndex(0)
      const managedProps = {
        value: value === undefined ? defaultValue : value, // if value is not found, use defaultValue instead
        onChange: (event) => valueMan.setByIndices([0, event.target?.value ?? event]) // NumericInput return value directly
      }
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle}>
          {isTextArea && (
            <TextArea className='setting-ui-unit-input' {...managedProps} {...supportedProps} />
          )}
          {isNumber && (
            <NumericInput className='setting-ui-unit-input' {...managedProps} {...supportedProps} />
          )}
          {!isTextArea && !isNumber && (
            <TextInput className='setting-ui-unit-input' {...managedProps} {...supportedProps} />
          )}
          {getAdditionalContent()}
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldCheckInputGroup',
    renderScenario: () => {
      const {
        fieldStyle,
        valueMan,
        itemChildren = [],
        getLabelContent = () => null,
        getAdditionalContent = () => null,
        getInputProps = () => ({})
      } = currentViewBlockData
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle || { rowMode: 'TwoRow' }}>
          {
            (itemChildren || []).map((...args) => {
              const [itemChild, index] = args
              const { itemKey, itemHidden } = itemChild
              const { _inputType = 'checkbox', _InputTag = _inputType === 'radio' ? Radio : Checkbox, _onBeforeClick, ...supportedProps } = getInputProps(args)
              const managedProps = {
                className: `setting-ui-unit-check-input-element setting-ui-unit-${_inputType}`,
                checked: ((value) => (_inputType === 'radio' ? value === itemKey : (value || []).includes(itemKey)))(valueMan.getByIndex(0)),
                onClick: (evt) => {
                  const value = _inputType === 'radio' ? itemKey : toggleItemInArray(itemKey, valueMan.getByIndex(0))
                  if (_onBeforeClick && !_onBeforeClick(value)) {
                    evt.nativeEvent.preventDefault()
                    // alert('at least one item needs to be checked');
                    return false
                  }
                  valueMan.setByIndices([0, value])
                }
              }
              return (
                <div key={index} className='setting-ui-unit-check-input-item' style={{ display: itemHidden ? 'none' : undefined }}>
                  <label className='setting-ui-unit-check-input-label'>
                    <_InputTag {...managedProps} {...supportedProps} />
                    <span>{getLabelContent(itemKey)}</span>
                  </label>
                  {getAdditionalContent(itemKey, { ...managedProps, ...supportedProps })}
                </div>
              )
            })
          }
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldButton',
    renderScenario: () => {
      const {
        fieldStyle,
        getButtonProps = () => ({})
      } = currentViewBlockData
      const { _buttonText = null, ...supportedProps } = getButtonProps()
      const managedProps = {
        title: _buttonText,
        children: <div className='w-100 px-2 text-truncate'>{_buttonText}</div>
      }
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle}>
          <Button className='w-100 text-dark set-link-btn' {...managedProps} {...supportedProps} />
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldSwitch',
    renderScenario: () => {
      const { fieldStyle, valueMan } = currentViewBlockData
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle}>
          <Switch checked={valueMan.getByIndex(0)} onChange={(event, checked) => valueMan.setByIndices([0, checked])} />
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldDirection',
    renderScenario: () => {
      const { fieldStyle, valueMan } = currentViewBlockData
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle}>
          <DirectionSelector
            vertical={valueMan.getByIndex(0) === ListDirection.Vertical}
            onChange={(vertical) => {
              return valueMan.setByIndices([0, vertical ? ListDirection.Vertical : ListDirection.Horizontal])
            }}
          />
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldMapSelect',
    renderScenario: () => {
      const { fieldStyle, valueMan } = currentViewBlockData
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle}>
          <JimuMapViewSelector onSelect={(useMapWidgetIds) => valueMan.setByIndices([0, useMapWidgetIds])} useMapWidgetIds={valueMan.getByIndex(0)} />
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldSortSetting',
    renderScenario: () => {
      const {
        fieldStyle,
        valueMan,
        onChange = () => { }
      } = currentViewBlockData
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle || { rowMode: 'TwoRow' }}>
          <Sort
            onChange={(sortData) => onChange(sortData)}
            value={Immutable(valueMan.getByIndex(1) || [])}
            useDataSource={Immutable(valueMan.getByIndex(0))}
            emptyHintTopSpaceSize={16}
          />
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldSketchToolsSelect',
    renderScenario: () => {
      const { fieldStyle, getI18nMessage, valueMan } = currentViewBlockData
      return (
        <React.Fragment>
          <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle} />
          {
            Object.entries(sketchToolInfoMap).map(([key, value]) => {
              const { esriClassName, drawToolName } = value
              const currentSpatialInteractiveCreateToolTypes = valueMan.getByIndex(0) || []
              const selected = currentSpatialInteractiveCreateToolTypes.includes(key)
              return (
                <ViewBlockComponent
                  key={key} {...normalizedProps} currentViewBlock={{
                    viewBlockKey: `SettingBlockKeyFieldSketchToolsSelect__${key}`,
                    viewBlockType: 'SettingBlockTypeFieldSwitch',
                    getViewBlockData: () => ({
                      valueMan: {
                        getByIndex: (index) => selected,
                        setByIndices: ([index, value]) => valueMan.setByIndices([0, toggleItemInArray(key, currentSpatialInteractiveCreateToolTypes)])
                      }
                    }),
                    getViewBlockTitle: () => (
                      <React.Fragment>
                        <span className={`ui-unit-sketch-icon ${esriClassName}`} />{getI18nMessage(`sketchTool_${drawToolName}`)}
                      </React.Fragment>
                    )
                  }}
                />
              )
            })
          }
        </React.Fragment>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldDataSource',
    renderScenario: () => {
      const {
        fieldStyle,
        valueMan,
        getDssProps = () => ({}),
        getMapThumbProps = () => ({}),
        thumbEnabled = false
      } = currentViewBlockData
      const { _multipleEnabled, _dsTypes, ...dssSupportedProps } = getDssProps()
      const ds = valueMan.getByIndex(0)
      const dssManagedProps = {
        disableRemove: () => !_multipleEnabled,
        mustUseDataSource: true,
        closeDataSourceListOnChange: !_multipleEnabled,
        types: Immutable(_dsTypes),
        isMultiple: !!_multipleEnabled,
        useDataSources: Immutable((_multipleEnabled ? (ds || []) : [ds]).filter(i => i)),
        onChange: (useDataSources) => valueMan.setByIndices([0, (_multipleEnabled ? useDataSources : useDataSources?.[0]) || null, { dsUpdateRequired: true }])
      }
      const { _dsJsons, ...mapThumbSupportedProps } = getMapThumbProps()
      const dsJson = _dsJsons?.[ds?.dataSourceId]
      const mapThumbManagedProps = {
        mapItemId: dsJson?.itemId || null,
        portUrl: dsJson?.portalUrl || null
      }
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle || { rowMode: 'MultiRow' }}>
          <DataSourceSelector {...dssManagedProps} {...dssSupportedProps} />
          {thumbEnabled && <MapThumb {...mapThumbManagedProps} {...mapThumbSupportedProps} />}
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldsArrangementStyle',
    renderScenario: () => {
      const { getI18nMessage, valueMan } = currentViewBlockData
      const [arrangeTypeValueMan, arrangeWrapValueMan] = Array.from({ length: 2 }).map((i, x) => ({
        getByIndex: (index) => valueMan.getByIndex(x),
        setByIndices: ([index, value]) => valueMan.setByIndices([x, value])
      }))
      const viewBlocks = [{
        viewBlockKey: 'SettingBlockKeyFieldArrangementType',
        viewBlockType: 'SettingBlockTypeFieldCustom',
        renderViewBlock: () => (
          Object.entries(arrangementStyleMap).map(([arrangementStyleKey, arrangementStyleValue]) => {
            return (
              <Tooltip key={arrangementStyleKey} title={arrangementStyleValue.getTitle(getI18nMessage)} placement='bottom'>
                <Button onClick={() => arrangeTypeValueMan.setByIndices([0, arrangementStyleKey])} icon size='sm' type='tertiary' active={arrangeTypeValueMan.getByIndex(0) === arrangementStyleKey}>
                  <Icon width={68} height={68} icon={arrangementStyleValue.icon} />
                </Button>
              </Tooltip>
            )
          })
        )
      }, {
        viewBlockKey: 'SettingBlockKeyFieldArrangementWrap',
        viewBlockType: 'SettingBlockTypeFieldSwitch',
        isViewBlockRenderable: () => arrangeTypeValueMan.getByIndex(0) === QueryArrangeType.Inline,
        getViewBlockData: () => ({
          valueMan: arrangeWrapValueMan
        }),
        getViewBlockTitle: () => getI18nMessage('wrapItems')
      }]
      return (
        <React.Fragment>
          {viewBlocks.map((viewBlock, x) => (<ViewBlockComponent key={x} {...normalizedProps} currentViewBlock={viewBlock} />))}
        </React.Fragment>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldSpatialRelationshipPicker',
    renderScenario: () => {
      const {
        fieldStyle,
        getI18nMessage,
        valueMan,
        getTextInputProps = () => ({})
      } = currentViewBlockData
      return (
        <StateHolder initState={{ visible: false }}>
          {
            ({ visible: [popupVisible, setPopupVisible], refContainer: [refPopupContainer, setRefPopupContainer] }) => {
              return (
                <ViewBlockComponent
                  {...normalizedProps} currentViewBlock={{
                    viewBlockKey: 'SettingBlockKeyFieldSpatialRelationship',
                    viewBlockType: 'SettingBlockTypeFieldTextInput',
                    getViewBlockTitle: currentViewBlock.getViewBlockTitle,
                    getViewBlockData: () => ({
                      fieldStyle: fieldStyle || { rowMode: 'TwoRow' },
                      valueMan: {
                        getByIndex: (index) => (valueMan.getByIndex(0) || []).map(i => getI18nMessage(`spatialRelation_${i}`)).join(', ')
                      },
                      getTextInputProps,
                      getAdditionalContent: () => {
                        return (
                          <React.Fragment>
                            <Button
                              ref={el => setRefPopupContainer(el)}
                              className='more-input-setting-btn'
                              type='tertiary'
                              icon
                              size='sm'
                              onClick={() => setPopupVisible(true)}
                            >
                              <Icon size={12} icon={iconMap.iconSetting} />
                            </Button>
                            {
                              popupVisible &&
                                <Popper open reference={refPopupContainer}>
                                  <div className='widget-container controller-configuration-container d-flex p-1' css={getStyleForQuery(targetComponent.props.theme)}>
                                    <SpatialRelationDialog
                                      getI18nMessage={getI18nMessage}
                                      selectedOptions={valueMan.getByIndex(0)}
                                      onChange={(selectedOptions) => {
                                        valueMan.setByIndices([0, selectedOptions])
                                        setPopupVisible(false)
                                      }}
                                      onCancel={() => setPopupVisible(false)}
                                    />
                                  </div>
                                </Popper>
                            }
                          </React.Fragment>
                        )
                      }
                    })
                  }}
                />
              )
            }
          }
        </StateHolder>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldSQLExpressionBuilder',
    renderScenario: () => {
      const {
        fieldStyle,
        getI18nMessage,
        valueMan,
        getPopupProps = () => ({})
      } = currentViewBlockData
      const [useDataSource, expression] = [valueMan.getByIndex(0), valueMan.getByIndex(1)]
      const { onChange } = getPopupProps()
      const dataSourceIdAvailable = !!useDataSource?.dataSourceId
      return (
        <StateHolder initState={{ visible: false }}>
          {
            ({ visible: [popupVisible, setPopupVisible] }) => {
              const viewBlocks = [{
                viewBlockKey: 'SettingBlockKeyFieldSQLExpressionBuilderButton',
                viewBlockType: 'SettingBlockTypeFieldButton',
                getViewBlockData: () => ({
                  fieldStyle: { rowMode: 'NoRow' },
                  getButtonProps: () => ({
                    type: dataSourceIdAvailable ? 'primary' : 'secondary',
                    disabled: !dataSourceIdAvailable,
                    onClick: () => setPopupVisible(true),
                    _buttonText: getI18nMessage('builderName')
                  })
                })
              }, {
                viewBlockKey: 'SettingBlockKeyFieldSQLExpressionBuilderText',
                viewBlockType: 'SettingBlockTypeFieldTextInput',
                getViewBlockData: () => ({
                  fieldStyle: { rowMode: 'NoRow' },
                  valueMan: {
                    getByIndex: (index) => expression?.displaySQL || ''
                  },
                  getTextInputProps: () => ({
                    type: 'textarea',
                    spellCheck: false,
                    readOnly: true,
                    onClick: e => e.currentTarget.select(),
                    placeholder: getI18nMessage('pleaseAddYourSQLExpressionsFirst')
                  })
                })
              }]
              return (
                <SettingField className={generalClassName} data={normalizedProps} fieldStyle={fieldStyle || { rowMode: 'MultiRow' }}>
                  {
                    viewBlocks.map((viewBlock, x) => (<ViewBlockComponent key={x} {...normalizedProps} currentViewBlock={viewBlock} />))
                  }
                  {
                    dataSourceIdAvailable &&
                      <DataSourceComponent useDataSource={useDataSource}>
                        {
                          (ds) => {
                          // check if timezone is changed
                            if (expression) {
                              const sqlResult = dataSourceUtils.getArcGISSQL(expression, ds)
                              if (sqlResult.displaySQL !== expression.displaySQL) {
                                onChange(Object.assign({}, expression, sqlResult))
                              }
                            }
                            return (
                              <SqlExpressionBuilderPopup
                                dataSource={ds}
                                isOpen={!!popupVisible}
                                toggle={() => setPopupVisible(!popupVisible)}
                                expression={expression}
                                onChange={(expr) => onChange(expr?.asMutable({ deep: true }))}
                              />
                            )
                          }
                        }
                      </DataSourceComponent>
                  }
                </SettingField>
              )
            }
          }
        </StateHolder>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldsBufferSetting',
    renderScenario: () => {
      const { getI18nMessage, valueMan } = currentViewBlockData
      const [enableBufferValueMan, bufferDistanceValueMan, bufferUnitValueMan] = Array.from({ length: 3 }).map((i, x) => ({
        getByIndex: (index) => valueMan.getByIndex(x),
        setByIndices: ([index, value]) => valueMan.setByIndices([x, value])
      }))
      const viewBlocks = [{
        viewBlockKey: null,
        viewBlockType: 'SettingBlockTypeFieldSwitch',
        getViewBlockData: () => ({
          valueMan: enableBufferValueMan
        }),
        getViewBlockTitle: () => getI18nMessage('enableBuffer')
      }, {
        viewBlockKey: null,
        viewBlockType: 'SettingBlockTypeFieldTextInput',
        isViewBlockRenderable: () => enableBufferValueMan.getByIndex(0),
        getViewBlockData: () => ({
          valueMan: bufferDistanceValueMan,
          getTextInputProps: () => ({
            type: 'number'
          })
        }),
        getViewBlockTitle: () => getI18nMessage('defaultDistance')
      }, {
        viewBlockKey: null,
        viewBlockType: 'SettingBlockTypeFieldSelect',
        isViewBlockRenderable: () => enableBufferValueMan.getByIndex(0),
        getViewBlockData: () => ({
          valueMan: bufferUnitValueMan,
          getSelectProps: () => ({
            _options: Object.values(UnitType).map(value => ({
              value,
              children: getI18nMessage(`unit_${value}`)
            }))
          })
        }),
        getViewBlockTitle: () => getI18nMessage('defaultUnit')
      }]
      return (
        <React.Fragment>
          {viewBlocks.map((viewBlock, x) => (<ViewBlockComponent key={x} {...normalizedProps} currentViewBlock={viewBlock} />))}
        </React.Fragment>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeFieldCustom',
    renderScenario: () => {
      return (
        <SettingField className={generalClassName} data={normalizedProps} fieldStyle={currentViewBlockData.fieldStyle}>
          {currentViewBlock.renderViewBlock(normalizedProps)}
        </SettingField>
      )
    }
  }, {
    testScenario: () => currentViewBlock.viewBlockType === 'SettingBlockTypeCustom',
    renderScenario: () => (
      currentViewBlock.renderViewBlock(normalizedProps)
    )
  }]
}

/** @jsx jsx */
import {
  React,
  jsx,
  ThemeVariables,
  Immutable,
  IntlShape,
  IMUseDataSource,
  UseDataSource,
  SerializedStyles,
  polished,
  css,
  JimuFieldType,
  DataSourceComponent,
  QueriableDataSource,
  IMFieldSchema,
  FeatureLayerDataSource,
  DataSourceManager,
  CONSTANTS
} from 'jimu-core'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import {
  TextInput,
  Switch,
  defaultMessages as jimuUIMessages,
  Checkbox,
  MultiSelect,
  MultiSelectItem,
  Select,
  PanelHeader,
  Label
} from 'jimu-ui'
import {
  DataSourceSelector,
  AllDataSourceTypes,
  FieldSelector,
  dataComponentsUtils
} from 'jimu-ui/advanced/data-source-selector'
import { LayersConfig, SelectionModeType } from '../config'
import defaultMessages from './translations/default'
import { Fragment } from 'react'
import { List, TreeItemActionType, TreeItemsType, TreeItemType } from 'jimu-ui/basic/list-tree'

const { OUTPUT_DATA_VIEW_ID } = CONSTANTS

interface Props {
  useDataSource: IMUseDataSource
  intl: IntlShape
  theme: ThemeVariables
  onClose?: () => void
  optionChange: (prop: string, value: any) => void
  multiOptionsChange: (options: any) => void
  dataSourceChange: (useDataSources: UseDataSource[]) => void
}

interface State {
  dataSource: QueriableDataSource
}

export default class LayerConfig extends React.PureComponent<
Props & LayersConfig,
State
> {
  supportedDsTypes = Immutable([AllDataSourceTypes.FeatureLayer])
  colRef: React.RefObject<HTMLButtonElement>

  constructor (props) {
    super(props)

    this.state = {
      dataSource: undefined
    }
    this.colRef = React.createRef()
  }

  nameChange = event => {
    if (event && event.target && event.target.value) {
      const value = event.target.value.trim()
      this.props.optionChange('name', value)
    }
  }

  handleCheckboxChange = evt => {
    const target = evt.currentTarget
    if (!target) return
    this.props.optionChange(target.dataset.field, target.checked)
  }

  formatMessage = (id: string, values?: { [key: string]: any }) => {
    const messages = Object.assign({}, defaultMessages, jimuUIMessages)
    return this.props.intl.formatMessage(
      { id: id, defaultMessage: messages[id] },
      values
    )
  }

  displaySelectedFields = values => {
    return this.formatMessage('numSelected', { number: values.length })
  }

  filterSearchFields = (newTableFields) => {
    const { searchFields } = this.props
    const searchFieldsArray = searchFields.split(',')
    const tableFieldsNames = newTableFields.map(item => item.jimuName)
    const filteredSearchFields = searchFieldsArray.filter(field => tableFieldsNames.includes(field))
    return filteredSearchFields.join(',')
  }

  onFieldChange = (allSelectedFields: IMFieldSchema[]) => {
    if (!allSelectedFields) return
    const filteredFields = allSelectedFields.filter(item => item)
    // update searchFields and tableFields
    const filteredSearchFields = this.filterSearchFields(filteredFields)
    this.props.multiOptionsChange({ searchFields: filteredSearchFields, tableFields: filteredFields })
  }

  onDataSourceCreated = (dataSource: QueriableDataSource): void => {
    this.setState({ dataSource })
  }

  getSearchingFields = (): MultiSelectItem[] => {
    const res = []
    const { tableFields } = this.props
    if (tableFields.length > 0) {
      tableFields.forEach(item => {
        if (item.type == JimuFieldType.String) {
          res.push({
            value: item.jimuName || item.name,
            label: item.alias || item.name
          })
        }
      })
    }
    return res
  }

  handleChooseSearchingFieldsChange = (evt, value, values) => {
    this.props.optionChange('searchFields', values.join(','))
  }

  getSelectModeOptions = (): JSX.Element[] => {
    return [
      <option key={SelectionModeType.Single} value={SelectionModeType.Single}>
        {this.formatMessage('single')}
      </option>,
      <option
        key={SelectionModeType.Multiple}
        value={SelectionModeType.Multiple}
      >
        {this.formatMessage('multiple')}
      </option>
    ]
  }

  getStyle (theme: ThemeVariables): SerializedStyles {
    return css`
      .layer-config-panel {
        .panel-inner {
          .title {
            max-width: 70%;
          }
        }
        .setting-container {
          height: calc(100% - ${polished.rem(58)});
          overflow: auto;
          .selected-fields-list {
            flex: 1;
            max-height: 265px;
            overflow-y: auto;
          }
          .table-options {
            .table-options-item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8px;
            }
            .select-option {
              margin-bottom: 8px;
            }
          }
          .ds-container {
            position: absolute;
            display: none;
          }
          .component-field-selector {
            .search-input {
              width: 100%;
            }
            .field-list {
              max-height: 300px;
            }
          }
          .config-word-break {
            word-wrap: break-word;
          }
        }
      }
    `
  }

  getFieldsFromDatasource = () => {
    const { useDataSource } = this.props
    const selectedDs = DataSourceManager.getInstance().getDataSource(useDataSource?.dataSourceId)
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

  checkFieldsExist = (allFields, tableField) => {
    let exist = false
    for (const item of allFields) {
      if (item.jimuName === tableField.jimuName) {
        exist = true
        break
      }
    }
    return exist
  }

  render () {
    const {
      useDataSource,
      optionChange,
      theme,
      tableFields,
      searchFields
    } = this.props
    const { dataSource } = this.state
    const layerDefinition =
      dataSource && (dataSource as FeatureLayerDataSource).getLayerDefinition()
    const optionsArray = ['enableSelect', 'enableRefresh'] // 'allowCsv',
    const _tableFields: string[] = []
    if (tableFields && tableFields.length > 0) {
      tableFields.map(item => {
        _tableFields.push(item.jimuName)
      })
    }
    const { allFields } = this.getFieldsFromDatasource()
    // Can't edit Feature collection(dataSource.url is undefined) and output ds
    const capabilities = layerDefinition?.capabilities
    let editing = false
    if(capabilities) {
      editing = Array.isArray(capabilities) ? capabilities.join().toLowerCase().includes('editing')
        : layerDefinition?.capabilities.toLowerCase().includes('editing')
    }
    const editAble =
      dataSource?.url &&
      dataSource?.dataViewId !== OUTPUT_DATA_VIEW_ID &&
      editing
    const advancedActionMap = {
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
                    name: TreeItemActionType.RenderOverrideItemCommands
                  }]
                }]
              }]
            }]
          }]
        }
      }
    }

    return (
      <div className='w-100 h-100' css={this.getStyle(theme)}>
        <div className='w-100 h-100 layer-config-panel'>
          <div className="w-100 d-flex px-3 py-0">
            <PanelHeader
              level={1}
              className='py-3 panel-inner'
              showClose={!!this.props.onClose}
              onClose={this.props.onClose}
              title={this.formatMessage('layerConfig')}>
            </PanelHeader>
          </div>
          <div className='setting-container'>
            <SettingSection title={this.formatMessage('data')} className="pt-0">
              <SettingRow>
                <DataSourceSelector
                  types={this.supportedDsTypes}
                  disableRemove={() => true}
                  useDataSources={
                    useDataSource ? Immutable([useDataSource]) : Immutable([])
                  }
                  mustUseDataSource
                  onChange={this.props.dataSourceChange}
                  closeDataSourceListOnChange
                />
              </SettingRow>
            </SettingSection>

            {useDataSource &&
              <React.Fragment>
                <SettingSection title={this.formatMessage('label')}>
                  <SettingRow>
                    <TextInput
                      type='text'
                      className='w-100'
                      value={this.props.name ? this.props.name : ''}
                      onChange={this.nameChange}
                    />
                  </SettingRow>
                </SettingSection>

                <SettingSection title={this.formatMessage('configFields')}>
                  <SettingRow>{this.formatMessage('configTips')}</SettingRow>
                  <SettingRow>
                    <FieldSelector
                      useDataSources={
                        useDataSource ? Immutable([useDataSource]) : Immutable([])
                      }
                      onChange={this.onFieldChange}
                      selectedFields={Immutable(_tableFields)}
                      isMultiple
                      isSearchInputHidden={false}
                      isDataSourceDropDownHidden
                      useDropdown
                      useMultiDropdownBottomTools
                    />
                  </SettingRow>
                  <SettingRow>
                    <List
                      className='selected-fields-list'
                      itemsJson={Array.from(tableFields).map((item, index) => ({
                        itemStateDetailContent: item,
                        itemStateDisabled: !this.checkFieldsExist(allFields,item),
                        itemKey: `${index}`,
                        itemStateIcon: dataComponentsUtils.getIconFromFieldType(item.type,theme),
                        itemStateTitle: item.alias || item.jimuName || item.name,
                        itemStateCommands: []
                      }))}
                      dndEnabled
                      onUpdateItem={(actionData, refComponent) => {
                        const { itemJsons } = refComponent.props
                        const [ , parentItemJson] = itemJsons as [TreeItemType, TreeItemsType]
                        const newTableFields = parentItemJson.map(item => {
                          return item.itemStateDetailContent
                        })
                        this.props.optionChange('tableFields', newTableFields)
                      }}
                      isItemFocused={() => false}
                      {...advancedActionMap}
                    />
                  </SettingRow>
                  {/* {layerDefinition?.hasAttachments &&
                    <SettingRow>
                      <div className="d-flex w-100">
                        <Checkbox
                          data-field="enableAttachements"
                          onClick={this.handleCheckboxChange}
                          checked={this.props.enableAttachements} />
                        <div className="ml-2 config-word-break" title={this.formatMessage('enableAttachements')}>{this.formatMessage('enableAttachements')}</div>
                      </div>
                    </SettingRow>
                  } */}
                  {editAble && (
                    <SettingRow>
                      <div className='d-flex w-100'>
                        <Checkbox
                          id='editable-cb'
                          data-field='enableEdit'
                          onClick={this.handleCheckboxChange}
                          checked={this.props.enableEdit}
                        />
                        <Label
                          for='editable-cb'
                          style={{ cursor: 'pointer' }}
                          className='ml-2'
                          title={this.formatMessage('enableEdit')}
                        >
                          {this.formatMessage('enableEdit')}
                        </Label>
                      </div>
                    </SettingRow>
                  )}
                </SettingSection>

                <SettingSection title={this.formatMessage('tools')}>
                  <div className='w-100 table-options'>
                    <div className='table-options-item' key='enableSearch'>
                      <span className='text-break' style={{ width: '80%' }}>
                        {this.formatMessage('enableSearch')}
                      </span>
                      <Switch
                        className='can-x-switch'
                        checked={this.props.enableSearch || false}
                        onChange={evt => {
                          optionChange('enableSearch', evt.target.checked)
                        }}
                      />
                    </div>
                  </div>
                  <div className='ds-container'>
                    <DataSourceComponent
                      useDataSource={Immutable(useDataSource)}
                      onDataSourceCreated={this.onDataSourceCreated}
                    />
                  </div>
                  {this.props.enableSearch && (
                    <SettingRow
                      flow='wrap'
                      label={this.formatMessage('searchFields')}
                    >
                      <div
                        className='d-flex w-100 search-container'
                        style={{ zIndex: 3 }}
                      >
                        <MultiSelect
                          items={Immutable(this.getSearchingFields())}
                          values={
                            searchFields ? Immutable(searchFields.split(',')) : Immutable([])
                          }
                          className='search-multi-select'
                          fluid
                          onClickItem={this.handleChooseSearchingFieldsChange}
                          displayByValues={this.displaySelectedFields}
                        />
                      </div>
                      <div className='d-flex w-100' style={{ marginTop: '10px' }}>
                        <Checkbox
                          id='fullMatch-cb'
                          data-field='searchExact'
                          onClick={this.handleCheckboxChange}
                          checked={this.props.searchExact}
                        />
                        <Label
                          for='fullMatch-cb'
                          style={{ cursor: 'pointer' }}
                          className='ml-2'
                          title={this.formatMessage('fullMatch')}
                        >
                          {this.formatMessage('fullMatch')}
                        </Label>
                      </div>
                    </SettingRow>
                  )}
                  <SettingRow>
                    <div className='w-100 table-options'>
                      {optionsArray.map((key, index) => {
                        return (
                          <Fragment key={index}>
                            <div className='table-options-item'>
                              <span
                                className='text-break'
                                style={{ width: '80%' }}
                              >
                                {this.formatMessage(key)}
                              </span>
                              <Switch
                                className='can-x-switch'
                                checked={this.props[key] || false}
                                onChange={evt => {
                                  optionChange(key, evt.target.checked)
                                }}
                              />
                            </div>
                            {key === 'enableSelect' && this.props[key] && (
                              <SettingRow
                                flow='wrap'
                                label={this.formatMessage('selectMode')}
                                className='select-option'
                              >
                                <Select
                                  value={
                                    this.props.selectMode ||
                                    SelectionModeType.Multiple
                                  }
                                  onChange={evt => {
                                    optionChange('selectMode', evt.target.value)
                                  }}
                                >
                                  {this.getSelectModeOptions()}
                                </Select>
                              </SettingRow>
                            )}
                          </Fragment>
                        )
                      })}
                    </div>
                  </SettingRow>
                </SettingSection>
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}

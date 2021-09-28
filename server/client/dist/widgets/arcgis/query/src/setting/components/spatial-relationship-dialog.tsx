/** @jsx jsx */
import { React, jsx, Immutable, ImmutableObject } from 'jimu-core'
import { Checkbox, Button, Table } from 'jimu-ui'
import { Tree, treeUtils, TreeItemType } from 'jimu-ui/basic/list-tree'
import { SpatialRelation } from '../../config'
import { DialogPanel, StateHolder } from '../../common/common-components'
import { GetI18nMessageType } from '../../common/utils'

const TopTagTree = ({ children }) => <React.Fragment>{children}</React.Fragment>
function generateSpatialRelationshipMap (selectedOptions: SpatialRelation[]) {
  const spatialRelationshipMap: TreeItemType = {
    itemKey: 'Types',
    itemStateExpanded: true,
    itemChildren: Object.entries(SpatialRelation).map(([key, value]) => ({
      itemKey: key,
      itemStateDetailContent: value,
      itemStateChecked: (selectedOptions || []).includes(value)
    }))
  }
  return Immutable(spatialRelationshipMap)
}

export interface SpatialRelationDialogProps {
  getI18nMessage: GetI18nMessageType
  selectedOptions: SpatialRelation[]
  onChange: (selectedOptions: SpatialRelation[]) => void
  onCancel: () => void
}

export interface SpatialRelationDialogState {
  spatialRelationshipMap: ImmutableObject<TreeItemType>
  propSelectedOptions: SpatialRelation[]
}

export class SpatialRelationDialog extends React.PureComponent<SpatialRelationDialogProps, SpatialRelationDialogState> {
  constructor (props) {
    super(props)
    this.state = {
      spatialRelationshipMap: null,
      propSelectedOptions: []
    }
  }

  static getDerivedStateFromProps (nextProps: SpatialRelationDialogProps, prevState: SpatialRelationDialogState) {
    if (nextProps.selectedOptions !== prevState.propSelectedOptions) {
      return {
        spatialRelationshipMap: generateSpatialRelationshipMap(nextProps.selectedOptions),
        propSelectedOptions: nextProps.selectedOptions
      }
    }
    return null
  }

  render () {
    const { getI18nMessage } = this.props
    const { spatialRelationshipMap } = this.state
    return (
      <div className='setting-query__spatial-relationship-dialog'>
        <Table>
          <Tree
            className=''
            topTag={TopTagTree}
            rootItemJson={spatialRelationshipMap as any}
            rootItemVisible
            renderOverrideItem={(actionData, refComponent) => {
              const itemJsons = refComponent.props.itemJsons as TreeItemType[]
              const [currentItemJson, ...parentItemJsons] = itemJsons
              const level = parentItemJsons.length
              const checkProgress = level === 0 ? treeUtils.getCheckProgress(currentItemJson) : !!currentItemJson.itemStateChecked
              const getItemLevelDataMap = [() => ({
                onClick: (evt) => {
                  this.setState(({ spatialRelationshipMap }) => ({
                    spatialRelationshipMap: spatialRelationshipMap.itemChildren.reduce((r, i, x) => r.setIn(['itemChildren', x, 'itemStateChecked'], !checkProgress), spatialRelationshipMap)
                  }))
                },
                textContent1: getI18nMessage('relationship'),
                textContent2: getI18nMessage('label')
              }), () => ({
                onClick: (evt) => {
                  this.setState(({ spatialRelationshipMap }) => ({
                    spatialRelationshipMap: spatialRelationshipMap.setIn(['itemChildren', itemJsons[1].itemChildren.indexOf(currentItemJson), 'itemStateChecked'], !checkProgress)
                  }))
                },
                textContent1: getI18nMessage(`spatialRelation_${currentItemJson.itemStateDetailContent}`),
                textContent2: currentItemJson.itemStateDetailContent
              })]
              const itemLevelDataMap = getItemLevelDataMap[level]()
              const renderRow = (CellTag = 'td' as any) => {
                return (
                  <tr className={`tree-item tree-item_level-${level} tree-item_checkprogress-${checkProgress}`}>
                    <CellTag className='setting-ui-unit-table-col'>
                      <Checkbox indeterminate={typeof checkProgress === 'number'} checked={!!checkProgress} onClick={itemLevelDataMap.onClick} />
                    </CellTag>
                    <CellTag className='setting-ui-unit-table-col text-content'>{itemLevelDataMap.textContent1}</CellTag>
                    <CellTag className='setting-ui-unit-table-col text-content'>{itemLevelDataMap.textContent2}</CellTag>
                  </tr>
                )
              }
              return level === 0 ? (
                <React.Fragment>
                  <thead>{renderRow('th')}</thead>
                  <tbody>{refComponent.props.children}</tbody>
                </React.Fragment>
              ) : level === 1 ? (
                renderRow()
              ) : null
            }}
          />
        </Table>
        <hr />
        <div className='ui-unit-form-action-bar'>
          <StateHolder initState={{ visible: false }}>
            {
              ({ visible: [panelVisible, setPanelVisible] }) => {
                return (
                  <React.Fragment>
                    <Button
                      className='ui-unit-button first-child' onClick={() => {
                        const editingItems = spatialRelationshipMap.itemChildren.filter(editingItem => editingItem.itemStateChecked)
                        if (!editingItems.length) {
                          setPanelVisible(true)
                          return
                        }
                        this.props.onChange(editingItems.asMutable({ deep: true }).map(editingItem => editingItem.itemStateDetailContent))
                      }}
                    >
                      {getI18nMessage('ok')}
                    </Button>
                    <DialogPanel bodyContent={getI18nMessage('atLeastOneItemIsRequired')} {...{ panelVisible, setPanelVisible, getI18nMessage }} />
                  </React.Fragment>
                )
              }
            }
          </StateHolder>
          <Button className='ui-unit-button' onClick={this.props.onCancel}>
            {getI18nMessage('cancel')}
          </Button>
        </div>
      </div>
    )
  }
}

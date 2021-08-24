/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import { Button, Icon } from 'jimu-ui'
import { QueryArrangeType } from '../../config'
import { EntityNoteBlock, NavLine } from '../../common/common-components'
import { GetI18nMessageType } from '../../common/utils'
import Widget from '../widget'
import { getWidgetRuntimeDataMap, RuntimeQueryStateType } from '../widget-config'
import { getRuntimeMainAssociatedDataMap } from '../widget-utils'

const { iconMap } = getWidgetRuntimeDataMap()

export interface QueryTaskListProps {
  currentQueryStates: RuntimeQueryStateType[]
  targetSelf: Widget
  getI18nMessage: GetI18nMessageType
  arrangeType: QueryArrangeType
  onClickItem: (index: number) => void
}

export const QueryTaskList = (props: QueryTaskListProps) => {
  const { currentQueryStates, targetSelf, arrangeType, onClickItem } = props
  return (
    <div className='runtime-query__query-list'>
      {
        currentQueryStates.map((queryState, x) => {
          const [icon, name] = ['icon', 'name'].map(i => queryState?.getQueryItemValue(i))
          const { getCurrentDsEntityNote } = getRuntimeMainAssociatedDataMap(targetSelf, x)
          const dsEntityNote = getCurrentDsEntityNote()
          const renderQueryListItem = () => {
            const renderButton = ({ className, mainContent, action }) => (
              <Button ref={ref => queryState.refQueryItemButton = ref} className={className} onClick={action}>{mainContent}</Button>
            )
            const renderNavLine = ({ className, mainContent, action }) => (
              <NavLine className={className} title={name} titleElement={mainContent} templateType='enter' disabled={!!dsEntityNote} icon={iconMap.arrowRight} onClick={action} />
            )
            const data = {
              className: 'runtime-query__query-list-item',
              mainContent: (
                <React.Fragment>
                  {icon && <Icon className='ui-unit-icon' icon={icon.svg} />}
                  <div className='ui-unit-title-text-group text-truncate'>
                    <div className='ui-unit-title-text-main text-truncate'>{name}</div>
                    {
                      dsEntityNote &&
                        <EntityNoteBlock templateType='icon' entityNote={dsEntityNote} />
                    }
                  </div>
                </React.Fragment>
              ),
              action: () => onClickItem(x)
            }
            return arrangeType === QueryArrangeType.Inline ? renderButton(data) : renderNavLine(data)
          }
          return <React.Fragment key={x}>{renderQueryListItem()}</React.Fragment>
        })
      }
    </div>
  )
}

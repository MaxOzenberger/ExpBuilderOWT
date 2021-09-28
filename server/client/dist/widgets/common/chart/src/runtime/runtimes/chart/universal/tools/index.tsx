/** @jsx jsx */
import {
  React,
  jsx,
  css,
  classNames,
  IMSqlExpression,
  ImmutableObject,
  getAppStore,
} from 'jimu-core'
import { DataActionDropDown, hooks } from 'jimu-ui'
import { ChartTools } from '../../../../../config'
import { FilterPicker } from './filter-picker'
import { RangeCursorModeValue } from './range-cursor-mode'
import { useChartRuntimeDispatch, useChartRuntimeState } from '../../../state'
import { useSourceRecords } from '../../../utils'
import { SelectionZoom } from './selection-zoom'

export interface ToolsProps {
  widgetId: string
  className?: boolean
  tools?: ImmutableObject<ChartTools>
  enableDataAction?: boolean
}

const style = css`
  .tool-dividing-line {
    height: 16px;
    width: 1px;
    background-color: var(--light-400);
  }
`

export const Tools = (props: ToolsProps): React.ReactElement => {
  const { className, widgetId, tools, enableDataAction } = props

  const translate = hooks.useTranslate()
  const widgetLabel =
    getAppStore().getState().appConfig.widgets?.[widgetId]?.label ?? 'Chart'
  const dataActionLabel = translate('outputStatistics', { name: widgetLabel })
  const { outputDataSource, chart } = useChartRuntimeState()
  const dispatch = useChartRuntimeDispatch()

  const records = useSourceRecords(outputDataSource)
  const propFilter = tools?.filter
  const cursorEnable = tools?.cursorEnable

  const handleRangeModeChange = (mode: RangeCursorModeValue) => {
    if (mode === 'selection') {
      chart?.enableSelection()
    } else if (mode === 'zoom') {
      chart?.enableZoom()
    }
  }

  const handleClearSelection = () => {
    chart?.clearSelection()
  }

  React.useEffect(() => {
    if (cursorEnable) {
      chart?.addSelectionEventListeners()
    } else {
      chart?.removeSelectionEventListeners()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorEnable, chart])

  const handleFilterChange = (filter: IMSqlExpression) => {
    dispatch({ type: 'SET_FILTER', value: filter })
  }

  return (
    <div
      css={style}
      className={classNames(
        'chart-tool-bar w-100 d-flex align-items-center justify-content-end px-2 pt-2',
        className
      )}
    >
      {propFilter != null && (
        <FilterPicker
          className='mr-1'
          widgetId={widgetId}
          filter={propFilter}
          onChange={handleFilterChange}
        />
      )}

      {cursorEnable && (
        <SelectionZoom
          className='mr-1'
          onModeChange={handleRangeModeChange}
          onClearSelection={handleClearSelection}
        />
      )}

      {enableDataAction && (
        <React.Fragment>
          <span className='tool-dividing-line mx-1'></span>
          <DataActionDropDown
            type='tertiary'
            dataName={dataActionLabel}
            widgetId={widgetId}
            dataSource={outputDataSource}
            records={records}
          />
        </React.Fragment>
      )}
    </div>
  )
}

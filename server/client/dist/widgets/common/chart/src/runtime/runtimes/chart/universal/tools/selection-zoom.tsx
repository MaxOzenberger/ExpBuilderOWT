import { React, classNames } from 'jimu-core'
import { Button, hooks, Icon, Tooltip, } from 'jimu-ui'
import { RangeCursorModeProps, RangeCursorModeValue, RangeCursorMode } from './range-cursor-mode'
const clearIcon = require('jimu-ui/lib/icons/clear-selection.svg')

export interface SelectionZoomProps extends Omit<RangeCursorModeProps, 'onChange'> {
  onModeChange?: (mode?: RangeCursorModeValue) => void
  onClearSelection?: () => void
}

export const SelectionZoom = (props: SelectionZoomProps): React.ReactElement => {
  const translate = hooks.useTranslate()

  const { className, onModeChange, onClearSelection } = props

  return <div className={classNames('selection-zoom d-flex', className)}>
    <RangeCursorMode className="mr-1" onChange={onModeChange} />
    <Tooltip title={translate('clearSelection')}>
      <Button
        size='sm'
        icon
        type='tertiary'
        onClick={onClearSelection}
      >
        <Icon icon={clearIcon} size={16} />
      </Button>
    </Tooltip>
  </div>
}

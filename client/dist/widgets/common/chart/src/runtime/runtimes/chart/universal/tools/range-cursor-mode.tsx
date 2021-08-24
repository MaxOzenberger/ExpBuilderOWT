import { React, classNames } from 'jimu-core'
import { Button, hooks, Icon, Tooltip, } from 'jimu-ui'
const selectionIcon = require('jimu-ui/lib/icons/selection.svg')
const zoomIcon = require('jimu-ui/lib/icons/zoom-in-16.svg')

export type RangeCursorModeValue = 'selection' | 'zoom'

export interface RangeCursorModeProps {
  className?: string
  onChange: (mode?: RangeCursorModeValue) => void
}

export const RangeCursorMode = (props: RangeCursorModeProps): React.ReactElement => {
  const translate = hooks.useTranslate()

  const [mode, setMode] = React.useState<RangeCursorModeValue>('selection')

  const { className, onChange } = props
  const handleSelectionClick = () => {
    onChange('selection')
    setMode('selection')
  }

  const handleZoomClick = () => {
    onChange('zoom')
    setMode('zoom')
  }

  return <div className={classNames('range-cursor-mode', className)}>
    <Tooltip title={translate('SelectLabel')}>
      <Button
        size='sm'
        className="mr-1"
        icon
        type='tertiary'
        onClick={handleSelectionClick}
        active={mode === 'selection'}
      >
        <Icon icon={selectionIcon} size={16} />
      </Button>
    </Tooltip>
    <Tooltip title={translate('ZoomLabel')}>
      <Button
        size='sm'
        icon
        type='tertiary'
        onClick={handleZoomClick}
        active={mode === 'zoom'}
      >
        <Icon icon={zoomIcon} size={16} />
      </Button>
    </Tooltip>
  </div>
}

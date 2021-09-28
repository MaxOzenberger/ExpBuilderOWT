/** @jsx jsx */
import { css, jsx, IMState, React, ReactRedux, classNames } from 'jimu-core'
import { Icon, Tooltip } from 'jimu-ui'
const iconInfo = require('jimu-ui/lib/icons/info-16.svg')

export interface IconTooltipProps {
  className?: string
  icon?: any
  tooltip: string
}

const useStyle = () => {
  const theme = ReactRedux.useSelector((state: IMState) => state.theme)
  const dark600 = theme?.colors.palette.dark[600]
  const black = theme?.colors.black

  return css`
    .jimu-icon {
      color: ${dark600};
      &:hover {
        color: ${black};
      }
    }
  `
}

export const IconTooltip = (props: IconTooltipProps): React.ReactElement => {
  const style = useStyle()
  const { className, tooltip = '', icon = iconInfo } = props
  return (
    <Tooltip title={tooltip}>
      <div css={style} className={classNames('icon-tooltip d-flex align-items-center', className)}>
        <Icon size={12} icon={icon} />
      </div>
    </Tooltip>
  )
}

export interface LabelTooltipProps extends IconTooltipProps {
  label: string
}

export const LabelTooltip = (props: LabelTooltipProps) => {
  const { className, label, tooltip = '', icon } = props

  return <div className={classNames('label-tooltip d-flex align-items-center', className)}>
    <div className='mr-2 text-truncate' title={label}>{label}</div>
    <IconTooltip icon={icon} tooltip={tooltip}></IconTooltip>
  </div>
}

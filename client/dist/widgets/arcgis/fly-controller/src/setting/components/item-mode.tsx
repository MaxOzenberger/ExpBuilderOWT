/** @jsx jsx */
import { jsx, useIntl } from 'jimu-core'
import { Icon, Checkbox, Label } from 'jimu-ui'
import { FlyItemMode, ItemsType } from '../../config'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import nls from '../translations/default'
// resources
const rotateIcon = require('../../assets/icons/fly-rotate.svg')
const pathIcon = require('../../assets/icons/fly-path.svg')
const routesIcon = require('../../assets/icons/fly-routes.svg')
const arrowUpIcon = require('jimu-ui/lib/icons/arrow-up-12.svg')
const arrowDownIcon = require('jimu-ui/lib/icons/arrow-down-12.svg')

interface Props {
  styleConfig: ItemsType
  idx: number
  handleFlyModesChange: (isInUse: boolean, idx: number) => void
}

export const ItemMode = (props: Props) => {
  const intl = useIntl()

  const { styleConfig, idx } = props
  const isInUse = styleConfig.isInUse
  const flyItemMode = styleConfig.name

  // innner funs
  const handleRowClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
    event.stopPropagation()
    props.handleFlyModesChange(!isInUse, idx)
  }
  const getIcon = (mode: FlyItemMode) => {
    switch (mode) {
      case FlyItemMode.Rotate: {
        return rotateIcon
      }
      case FlyItemMode.Path: {
        return pathIcon
      }
      case FlyItemMode.Route: {
        return routesIcon
      }

      default: break
    }
  }
  const getLabel = (mode: FlyItemMode) => {
    switch (mode) {
      case FlyItemMode.Rotate: {
        return intl.formatMessage({ id: 'flyStyleRotate', defaultMessage: nls.flyStyleRotate })
      }
      case FlyItemMode.Path: {
        return intl.formatMessage({ id: 'flyStylePath', defaultMessage: nls.flyStylePath })
      }
      case FlyItemMode.Route: {
        return intl.formatMessage({ id: 'flyStyleRecord', defaultMessage: nls.flyStyleRecord })
      }

      default: break
    }
  }
  const getArrow = (isInUse: boolean) => {
    return isInUse ? arrowUpIcon : arrowDownIcon
  }

  // renders
  const icon = getIcon(flyItemMode)
  const label = getLabel(flyItemMode)
  const arrow = getArrow(isInUse)

  return (
    <div onClick={evt => handleRowClick(evt, idx)} style={{ cursor: 'pointer' }}>
      <SettingRow className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <Checkbox checked={isInUse} />
          <Label style={{ cursor: 'pointer' }}>
            <Icon icon={icon} className='m-2' />
            {label}
          </Label>
        </div>

        <Icon icon={arrow} size={12} className='d-flex' />
      </SettingRow>
    </div>
  )
}

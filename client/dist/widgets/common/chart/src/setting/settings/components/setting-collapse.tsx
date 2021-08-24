import { React } from 'jimu-core'
import { SettingCollapse as _SettingCollapse, SettingCollapseProps } from 'jimu-ui/advanced/setting-components'
const IconEdit = require('jimu-ui/lib/icons/tool-edit.svg')

export const SettingCollapse = (props: SettingCollapseProps): React.ReactElement => {
  const { rightIcon = IconEdit, ...others } = props
  return (<_SettingCollapse rightIcon={rightIcon} {...others} />)
}

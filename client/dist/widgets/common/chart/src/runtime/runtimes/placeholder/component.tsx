import { React } from 'jimu-core'
import { WidgetPlaceholder, WidgetPlaceholderProps } from 'jimu-ui'
import { TemplateType } from '../../../config'

const Icons = {
  bar: require('../../assets/icons/bar.svg'),
  column: require('../../assets/icons/column.svg'),
  'stacked-bar': require('../../assets/icons/stacked-bar.svg'),
  'stacked100-bar': require('../../assets/icons/stacked100-bar.svg'),
  'stacked-column': require('../../assets/icons/stacked-column.svg'),
  'stacked100-column': require('../../assets/icons/stacked100-column.svg')
}

const getPlaceholderIcon = (templateType: TemplateType) => {
  return Icons[templateType]
}

export interface PlaceholderComponentProps extends Omit<WidgetPlaceholderProps, 'icon'> {
  templateType?: TemplateType
}

export const PlaceholderComponent = (props: PlaceholderComponentProps): React.ReactElement => {
  const { iconSize, templateType } = props

  const icon = React.useMemo(() => getPlaceholderIcon(templateType), [templateType])
  return <WidgetPlaceholder
    iconSize={iconSize}
    style={{ position: 'absolute', left: 0, top: 0 }}
    icon={icon}
  />
}

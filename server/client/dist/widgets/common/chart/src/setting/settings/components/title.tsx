import { React, ImmutableObject } from 'jimu-core'
import { WebChartText } from 'jimu-ui/advanced/chart'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import {
  hooks,
  defaultMessages as jimuiDefaultMessage,
  TextInput,
  TextArea
} from 'jimu-ui'
import defaultMessages from '../../translations/default'

export interface TitleProps {
  title: ImmutableObject<WebChartText>
  footer: ImmutableObject<WebChartText>
  onTitleChange?: (title: ImmutableObject<WebChartText>) => void
  onFooterChange?: (footer: ImmutableObject<WebChartText>) => void
}

export const Title = (props: TitleProps): React.ReactElement => {
  const { title, footer, onTitleChange, onFooterChange } = props

  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const titleText = title?.content?.text ?? ''
  const subTitleText = footer?.content?.text ?? ''

  const handleTitleChange = (value: string): void => {
    const visible = value !== ''
    onTitleChange?.(
      title.setIn(['content', 'text'], value).set('visible', visible)
    )
  }

  const handleFooterChange = (value: string): void => {
    const visible = value !== ''
    onFooterChange?.(
      footer.setIn(['content', 'text'], value).set('visible', visible)
    )
  }

  return (
    <>
      <SettingRow label={translate('chartTitle')} flow='wrap'>
        <TextInput
          size='sm'
          className='w-100'
          value={titleText}
          onAcceptValue={handleTitleChange}
        />
      </SettingRow>
      <SettingRow label={translate('description')} flow='wrap'>
        <TextArea
          value={subTitleText}
          onAcceptValue={handleFooterChange}
        />
      </SettingRow>
    </>
  )
}

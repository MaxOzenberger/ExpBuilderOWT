import { React, ImmutableObject } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessage, Switch, TextInput, Select } from 'jimu-ui'
import { WebChartText, WebChartLegend, WebChartLegendPositions } from 'jimu-ui/advanced/chart'
import { SettingRow, DirectionSelector } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../../translations/default'
import { Title } from '../../components/title'

export interface SerialGeneratProps {
  title?: ImmutableObject<WebChartText>
  footer?: ImmutableObject<WebChartText>
  rotated: boolean
  legend?: ImmutableObject<WebChartLegend>
  legendValid?: boolean
  onTitleChange?: (title: ImmutableObject<WebChartText>) => void
  onFooterChange?: (footer: ImmutableObject<WebChartText>) => void
  onRotatedChange?: (rotated: boolean) => void
  onLegendChange?: (legend: ImmutableObject<WebChartLegend>) => void
}

export const SerialGeneral = (props: SerialGeneratProps): React.ReactElement => {
  const {
    title,
    footer,
    rotated,
    legend,
    legendValid,
    onTitleChange,
    onFooterChange,
    onRotatedChange,
    onLegendChange
  } = props
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)

  const handleRotatedChange = (vertical: boolean): void => {
    onRotatedChange?.(!vertical)
  }

  const handleLetendTitleTextChange = (text: string): void => {
    onLegendChange?.(legend.setIn(['title', 'content', 'text'], text))
  }

  const handleLegendVisibleChange = (_, visible: boolean): void => {
    onLegendChange?.(legend.set('visible', visible))
  }

  const handleLegendPositionChange = (
    evt: React.MouseEvent<HTMLSelectElement>
  ): void => {
    const position = evt.currentTarget.value as WebChartLegendPositions
    onLegendChange?.(legend.set('position', position))
  }

  return (
    <div className='serial-general w-100 mt-2'>
      <Title
        title={title}
        footer={footer}
        onTitleChange={onTitleChange}
        onFooterChange={onFooterChange}
      />
      <SettingRow label={translate('chartOrientation')} flow='no-wrap'>
        <DirectionSelector
          size='sm'
          vertical={!rotated}
          onChange={handleRotatedChange}
        />
      </SettingRow>

      <SettingRow label={translate('LegendLabel')} flow='no-wrap'>
        <Switch
          disabled={!legendValid}
          checked={legendValid && legend.visible}
          onChange={handleLegendVisibleChange}
        />
      </SettingRow>

      {legendValid && legend.visible && (
        <>
          <SettingRow label={translate('legendTitle')} flow='wrap'>
            <TextInput
              size='sm'
              className='w-100'
              value={legend.title?.content.text}
              onAcceptValue={handleLetendTitleTextChange}
            />
          </SettingRow>
          <SettingRow label={translate('legendPosition')} flow='no-wrap'>
            <Select
              size='sm'
              value={legend.position}
              style={{ width: '88px' }}
              onChange={handleLegendPositionChange}
            >
              <option value={WebChartLegendPositions.Left}>
                {translate(WebChartLegendPositions.Left)}
              </option>
              <option value={WebChartLegendPositions.Right}>
                {translate(WebChartLegendPositions.Right)}
              </option>
              <option value={WebChartLegendPositions.Top}>
                {translate(WebChartLegendPositions.Top)}
              </option>
              <option value={WebChartLegendPositions.Bottom}>
                {translate(WebChartLegendPositions.Bottom)}
              </option>
            </Select>
          </SettingRow>
        </>
      )}
    </div>
  )
}

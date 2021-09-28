import { React, ImmutableObject, classNames } from 'jimu-core'
import { ISimpleFillSymbol } from '@esri/arcgis-rest-types'
import { TextInput, defaultMessages, hooks } from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { FillSymbolSetting } from '../../../components/style-setting/fill-symbol-setting'
import { WebChartSeries } from '../../../../../config'
import { SeriesColors } from '../../../../../utils/default'

export interface SerieStyleProps {
  className?: string
  defaultFillColor: string
  defaultLineColor: string
  serie: ImmutableObject<WebChartSeries>
  onChange?: (serie: ImmutableObject<WebChartSeries>) => void
}

export const PresetSeriesColors = SeriesColors.map((color) => ({
  label: color,
  value: color,
  color: color
}))

export const SerieStyle = (props: SerieStyleProps): React.ReactElement => {
  const { className, serie, defaultFillColor, defaultLineColor, onChange } = props
  const seriesType = serie?.type
  const translate = hooks.useTranslate(defaultMessages)

  const handleLabelChange = (value: string): void => {
    onChange?.(serie.set('name', value))
  }

  const handleFillSymbolChange = (
    value: ImmutableObject<ISimpleFillSymbol>
  ): void => {
    onChange?.(serie.set('fillSymbol', value))
  }

  return (
    <div className={classNames('serial-serie-style w-100', className)}>
      <SettingRow label={translate('label')} flow='no-wrap'>
        <TextInput
          size='sm'
          className='w-50'
          value={serie?.name ?? ''}
          onAcceptValue={handleLabelChange}
        />
      </SettingRow>
      <SettingRow label={translate('symbol')} flow='wrap'>
        {seriesType === 'barSeries' && (
          <FillSymbolSetting
            defaultFillColor={defaultFillColor}
            defaultLineColor={defaultLineColor}
            presetFillColors={PresetSeriesColors}
            value={(serie as any)?.fillSymbol}
            onChange={handleFillSymbolChange}
          />
        )}
      </SettingRow>
    </div>
  )
}

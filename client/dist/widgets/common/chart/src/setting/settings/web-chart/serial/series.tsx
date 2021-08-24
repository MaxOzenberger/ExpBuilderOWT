
import { React, ImmutableArray, ImmutableObject, Immutable } from 'jimu-core'
import { Select, hooks, defaultMessages as jimuiDefaultMessage, Switch } from 'jimu-ui'
import { WebChartBarSeriesKinds, getSeriesType } from 'jimu-ui/advanced/chart'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { WebChartSeries } from '../../../../config'
import { getSerialDataLabelsVisible } from './utils'
import defaultMessages from '../../../translations/default'
import { SerieStyle } from './components/series-style'
import { SettingCollapse } from '../../components/setting-collapse'
import { MaxSeries } from '../../../../constants'
import { DefaultSeriesOutlineColor, getSeriesFillColor } from '../../../../utils/default'
import { getSerialMultipleBarType } from '../../../../utils/common/serial'

export interface SerialSeriesProps {
  series: ImmutableArray<WebChartSeries>
  onChange?: (series: ImmutableArray<WebChartSeries>) => void
}

export const SerialSeries = (props: SerialSeriesProps): React.ReactElement => {
  const { series: _propSeries, onChange } = props
  const propSeries = _propSeries?.slice(0, MaxSeries) ?? Immutable([])
  const [serieIndex, setSerieIndex] = React.useState<number>(-1)
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const seriesType = propSeries != null ? getSeriesType((propSeries as unknown) as WebChartSeries[]) : 'barSeries'
  const handleClick = (index: number): void => {
    setSerieIndex(index)
  }

  const handleChange = (serie: ImmutableObject<WebChartSeries>): void => {
    const series = Immutable.set(propSeries, serieIndex, serie)
    onChange?.(series)
  }

  const handleMultipleBarTypeChange = (
    evt: React.MouseEvent<HTMLSelectElement>
  ): void => {
    const multipleBarType = evt.currentTarget.value as WebChartBarSeriesKinds
    const series = propSeries?.map(propSerie => {
      return propSerie.set('multipleBarType', multipleBarType)
    })
    onChange?.(series as any)
  }

  const handleDataLabelsVisibleChange = (evt): void => {
    const visible = evt.target.checked
    const series = propSeries?.map(propSerie => {
      return propSerie.setIn(['dataLabels', 'visible'], visible)
    })
    onChange?.(series as any)
  }

  return (
    <div className='serial-series w-100'>
      {seriesType === 'barSeries' && (
        <SettingRow label={translate('stacking')} className="mt-2">
          <Select
            size='sm'
            className='w-50'
            value={getSerialMultipleBarType(propSeries)}
            onChange={handleMultipleBarTypeChange}
          >
            <option value={WebChartBarSeriesKinds.Side}>
              {translate(WebChartBarSeriesKinds.Side)}
            </option>
            <option value={WebChartBarSeriesKinds.Stacked}>
              {translate(WebChartBarSeriesKinds.Stacked)}
            </option>
            <option value={WebChartBarSeriesKinds.Stacked100}>
              {translate(WebChartBarSeriesKinds.Stacked100)}
            </option>
          </Select>
        </SettingRow>
      )}
      <SettingRow label={translate('valueLabel')}>
        <Switch
          checked={getSerialDataLabelsVisible(propSeries)}
          onChange={handleDataLabelsVisibleChange}
        />
      </SettingRow>
      <div className='mt-3'>
        {propSeries?.map((serie, index) => (
          <SettingCollapse
            className='mt-2'
            key={index}
            level={1}
            type='primary'
            bottomLine={false}
            label={serie.name}
            isOpen={serieIndex === index}
            onRequestOpen={() => handleClick(index)}
            onRequestClose={() => handleClick(-1)}
          >
            <SerieStyle
              defaultFillColor={getSeriesFillColor(serieIndex)}
              defaultLineColor={DefaultSeriesOutlineColor}
              className='mt-4'
              serie={propSeries?.[serieIndex]}
              onChange={handleChange}
            />
          </SettingCollapse>
        ))}
      </div>
    </div>
  )
}

import { React, ImmutableArray, ImmutableObject, Immutable } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { WebChartAxis } from 'jimu-ui/advanced/chart'
import defaultMessages from '../../../translations/default'
import { SettingCollapse } from '../../components/setting-collapse'
import { AxisStyle } from './components/axis-style'

export interface SerialAxesProps {
  rotated: boolean
  axes: ImmutableArray<WebChartAxis>
  onChange?: (axes: ImmutableArray<WebChartAxis>) => void
}

export const SerialAxes = (props: SerialAxesProps): React.ReactElement => {
  const { axes: propAxes, rotated, onChange } = props
  const [axisIndex, setAxisIndex] = React.useState<number>(-1)
  const type = axisIndex === 0 ? 'category' : 'value'
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)

  const handleClick = (index: number): void => {
    setAxisIndex(index)
  }

  const handleChange = (axis: ImmutableObject<WebChartAxis>): void => {
    onChange?.(Immutable.set(propAxes, axisIndex, axis))
  }

  return (
    <div className='serial-axes w-100'>
      {propAxes?.map((_, index) => {
        const name = index === 0 ? 'categoryAxis' : 'valueAxis'
        return (
          <SettingCollapse
            level={1}
            className='mt-2'
            key={index}
            bottomLine={index == 0}
            label={translate(name)}
            isOpen={axisIndex === index}
            onRequestOpen={() => handleClick(index)}
            onRequestClose={() => handleClick(-1)}
          >
            <AxisStyle
              className='mt-3'
              type={type}
              rotated={rotated}
              axis={propAxes?.[index]}
              onChange={handleChange}
            />
          </SettingCollapse>
        )
      })}
    </div>
  )
}

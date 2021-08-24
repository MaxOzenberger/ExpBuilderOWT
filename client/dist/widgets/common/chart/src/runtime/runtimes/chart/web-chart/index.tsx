
import { ImmutableObject, React } from 'jimu-core'
import { IWebChart } from '../../../../config'
import { getChartType } from '../../../../utils/default'
import { SerialChart } from './serial'

interface WebChartPorps {
  widgetId: string
  webChart: ImmutableObject<IWebChart>
}

export const WebChart = (props: WebChartPorps) => {
  const { widgetId, webChart } = props
  //Current chart type
  const type = getChartType(webChart?.series)

  return <div className='web-chart w-100'>
    {type === 'serial' && <SerialChart widgetId={widgetId} webChart={webChart} />}
  </div>
}
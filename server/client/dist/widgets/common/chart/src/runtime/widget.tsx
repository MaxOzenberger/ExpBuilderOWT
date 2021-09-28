import { React, AllWidgetProps } from 'jimu-core'
import { IMConfig } from '../config'
import { ChartRuntimeStateProvider, DataSourceManager, ChartRuntime } from './runtimes'

const Widget = (props: AllWidgetProps<IMConfig>): React.ReactElement => {
  const { outputDataSources, useDataSources, config, id, enableDataAction } = props

  return (
    <div className='jimu-widget widget-chart '>
      <ChartRuntimeStateProvider>
        <DataSourceManager
          widgetId={id}
          series={config?.webChart?.series}
          useDataSource={useDataSources?.[0]}
          outputDataSourceId={outputDataSources?.[0]}
        />
        <ChartRuntime
          widgetId={id}
          useDataSource={useDataSources?.[0]}
          config={config}
          enableDataAction={enableDataAction} />
      </ChartRuntimeStateProvider>
    </div>
  )
}
export default Widget

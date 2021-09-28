/** @jsx jsx */
import { React, jsx, css, ImmutableObject, UseDataSource } from 'jimu-core'
import { IMConfig } from '../../config'
import { Chart } from './chart'
import { Placeholder, getTemplateType, useWarningMessage } from './placeholder'
import { SourceStatus, useChartRuntimeState } from './state'

interface ChartRuntimePorps {
  widgetId: string
  useDataSource: ImmutableObject<UseDataSource>
  config: IMConfig
  enableDataAction: boolean
}

/**
 * Whether to render chart
 * @param sourceStatus
 * @returns
 */
const whetherRenderChart = (sourceStatus: SourceStatus): boolean => {
  //Render the chart when the data is loading or loaded
  const renderChart = sourceStatus === SourceStatus.Loaded || sourceStatus === SourceStatus.Loading
  return renderChart
}

/**
 * Whether to display warning message
 * @param useDataSource
 * @param sourceStatus
 */
const wehtherDisplayWarningMessage = (sourceStatus: SourceStatus): boolean => {
  const displayWarningMessage = sourceStatus === SourceStatus.NotReady
    || sourceStatus === SourceStatus.ExceedLimit
    || sourceStatus === SourceStatus.LoadError

  return displayWarningMessage
}

const useStyle = (background: string) => {
  return React.useMemo(() => {
    return css`
      position: relative;
      background-color: ${background} !important;
    `
  }, [background])
}

export const ChartRuntime = (props: ChartRuntimePorps) => {
  const { dataSource, sourceStatus } = useChartRuntimeState()

  const { widgetId, useDataSource, config, enableDataAction } = props
  const { tools, webChart, _templateType } = config

  const style = useStyle(webChart?.background)

  //The template type of the placeholder
  const templateType = getTemplateType(webChart?.series, _templateType)

  const renderChart = whetherRenderChart(sourceStatus)
  const displayWarningMessage = useDataSource && wehtherDisplayWarningMessage(sourceStatus)
  const messageType = sourceStatus === SourceStatus.ExceedLimit ? 'basic' : 'tooltip'

  const message = useWarningMessage(sourceStatus, useDataSource, dataSource)

  return <div css={style} className='chart-runtime w-100 h-100'>
    {renderChart && (<Chart
      widgetId={widgetId}
      webChart={webChart}
      enableDataAction={enableDataAction}
      tools={tools} />)
    }
    {!renderChart && (<Placeholder
      templateType={templateType}
      message={message}
      messageType={messageType}
      showMessage={displayWarningMessage}
    />)
    }
  </div>
}

export * from './data-source-manager'
export * from './state'
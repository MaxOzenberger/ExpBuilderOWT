/** @jsx jsx */
import { ImmutableObject, UseDataSource, DataSource, ImmutableArray, appConfigUtils, getAppStore, defaultMessages as jimucoreDefaultMessages } from 'jimu-core'
import { hooks, defaultMessages as jimuDefaultMessages } from 'jimu-ui'
import { TemplateType, WebChartSeries } from '../../../config'

import defaultMessages from '../../translations/default'
import { getSerialMultipleBarType, getSerialSeriesRotated } from '../../../utils/common/serial'
import { SourceStatus } from '../state'

/**
 * Get the warning message that needs to be displayed
 * @param dsNotReady
 * @param useDataSource
 * @param dataSource
 */
export const useWarningMessage = (
  sourceStatus: SourceStatus,
  useDataSource: ImmutableObject<UseDataSource>,
  dataSource: DataSource
): string => {
  const translate = hooks.useTranslate(jimucoreDefaultMessages, jimuDefaultMessages, defaultMessages)

  let message = ''
  if (sourceStatus === SourceStatus.NotReady) {
    const labels = getDataSourceLabels(useDataSource, dataSource)
    message = translate('outputDataIsNotGenerated', { outputDsLabel: labels.dataSourceLabel, sourceWidgetName: labels.widgetLabel })
  } else if (sourceStatus === SourceStatus.ExceedLimit) {
    message = translate('datalimitedTip')
  } else if (sourceStatus === SourceStatus.LoadError) {
    message = translate('widgetLoadError')
  }
  return message
}

/**
 * Get the template type of the current series
 * @param series
 * @param _templateType
 */
export const getTemplateType = (series: ImmutableArray<WebChartSeries>, _templateType: TemplateType): TemplateType => {
  const selectedType = getBarChartTemplateType(series)
  const templateType = selectedType ? selectedType : _templateType ?? 'column'
  return templateType
}

/**
 * Get the template type of the current series for bar chart
 * @param series
 */
const getBarChartTemplateType = (series: ImmutableArray<WebChartSeries>): TemplateType => {
  const multipleBarType = getSerialMultipleBarType(series)
  const rotated = getSerialSeriesRotated(series)
  if (multipleBarType == null || rotated == null) return

  const suffix = rotated ? 'bar' : 'column'
  const prefix = multipleBarType === 'sideBySide' ? '' : multipleBarType
  const type = (prefix ? `${prefix}-${suffix}` : suffix) as TemplateType
  return type
}

/**
 * Get the label of the widget that outputs the data source
 * @param useDataSource
 */
export const getWidgetLabelFromUseDataSource = (useDataSource: ImmutableObject<UseDataSource>) => {
  const widgetId = appConfigUtils.getWidgetIdByOutputDataSource(useDataSource)
  const widgetLabel = getAppStore().getState()?.appConfig.widgets?.[widgetId]?.label

  return widgetLabel
}
/**
 * Get the label of the data source and the label of the widget that outputs the data source
 * @param useDataSource
 * @param dataSource
 * @returns
 */
export const getDataSourceLabels = (
  useDataSource: ImmutableObject<UseDataSource>,
  dataSource: DataSource,
): { dataSourceLabel: string, widgetLabel: string } => {
  const dataSourceLabel = dataSource?.getLabel()
  const widgetLabel = getWidgetLabelFromUseDataSource(useDataSource)
  return { dataSourceLabel, widgetLabel }
}
import {
  React, Immutable, classNames, UseDataSource, DataSourceManager, QueriableDataSource, DataSourceSchema, getAppStore,
  defaultMessages as jimucoreMessages, ImmutableObject
} from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { defaultMessages as jimuiMessages, hooks } from 'jimu-ui'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import { DataSourceSelector, AllDataSourceTypes } from 'jimu-ui/advanced/data-source-selector'
import { ChartTools, IMConfig, IWebChart } from '../config'
import {
  ChartTypeSelector, SerialSetting, getInitSchema, BuildInTemplateJson, Placeholder,
  getInitOutDataSource, DefalutTools, getUseAndOutputDataSourceWithNewSchema
} from './settings'
import { getChartType } from '../utils/default'
import defaultMessages from './translations/default'

const SUPPORTED_TYPES = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer])

type SettingProps = AllWidgetSettingProps<IMConfig>

const Setting = (props: SettingProps): React.ReactElement => {
  const {
    id,
    useDataSources,
    outputDataSources,
    onSettingChange,
    config,
    label
  } = props

  const translate = hooks.useTranslate(defaultMessages, jimuiMessages, jimucoreMessages)

  const { template: templateId = '', webChart, tools } = config
  //Selected template information
  const template = React.useMemo(() => Immutable(BuildInTemplateJson[templateId]), [templateId])
  //Current chart type
  const type = getChartType(webChart?.series) ?? 'serial'
  //Is the data source selected
  const hasDataSource = useDataSources?.[0] != null
  //The id of the data source used
  const dataSourceId = useDataSources?.[0]?.dataSourceId ?? ''
  //The id of the output data source
  const propOutputDataSourceId = outputDataSources?.[0] ?? ''
  //The label of output data source
  const outputDataSourceLabel = translate('outputStatistics', { name: label })
  //When setting loads, try to get the data source instance
  const dataSource = React.useMemo(() => {
    return DataSourceManager.getInstance().getDataSource(dataSourceId) as QueriableDataSource
  }, [dataSourceId])

  const handleDataSourceChange = (useDataSources: UseDataSource[]): void => {
    let outputDataSources = []
    if (useDataSources?.length > 0) {
      //After selecting the data source, create the corresponding output data source
      const outputDataSource = getInitOutDataSource(id, outputDataSourceLabel, useDataSources[0])
      outputDataSources = [outputDataSource]
    }
    onSettingChange({
      id,
      useDataSources,
      config: config.without('webChart').set('tools', DefalutTools).without('template') as IMConfig
    }, outputDataSources)
  }

  //Update the schema of the output data source
  const handleSchemaChange = (schema: DataSourceSchema) => {
    const [useDataSourcesWithFields, outputDataSource] = getUseAndOutputDataSourceWithNewSchema(schema, useDataSources, propOutputDataSourceId, outputDataSourceLabel)
    if (useDataSourcesWithFields && outputDataSource) {
      onSettingChange({ id, useDataSources: useDataSourcesWithFields.asMutable({ deep: true }) }, [outputDataSource.asMutable({ deep: true })])
    }
  }

  //Update output ds label when the label of widget changes
  React.useEffect(() => {
    let outputDataSource = getAppStore().getState().appStateInBuilder.appConfig?.dataSources?.[propOutputDataSourceId]
    if (outputDataSource && outputDataSource.label !== outputDataSourceLabel) {
      outputDataSource = outputDataSource.set('label', outputDataSourceLabel)
      onSettingChange({ id }, [outputDataSource.asMutable({ deep: true })])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outputDataSourceLabel])

  const handleWebChartChange = (webChart: ImmutableObject<IWebChart>): void => {
    onSettingChange({ id, config: config.set('webChart', webChart) })
  }

  const handleToolsChange = (tools: ImmutableObject<ChartTools>): void => {
    onSettingChange({ id, config: config.set('tools', tools) })
  }

  const handleTemplateChange = (templateId: string, webChart: ImmutableObject<IWebChart>): void => {
    const newConfig = config.set('template', templateId).set('webChart', webChart).set('tools', DefalutTools) as IMConfig
    const schema = getInitSchema(outputDataSourceLabel)
    const [useDataSourcesWithFields, outputDataSource] = getUseAndOutputDataSourceWithNewSchema(schema, useDataSources, propOutputDataSourceId, outputDataSourceLabel)
    if (useDataSourcesWithFields && outputDataSource) {
      onSettingChange({
        id,
        config: newConfig,
        useDataSources: useDataSourcesWithFields.asMutable({ deep: true })
      }, [outputDataSource.asMutable({ deep: true })])
    } else {
      onSettingChange({
        id,
        config: newConfig
      })
    }
  }

  return (
    <div className='widget-setting-chart jimu-widget-setting'>
      <div className='w-100 h-100'>
        <SettingSection className={classNames('d-flex flex-column', { 'border-bottom-0': !hasDataSource })}>
          <SettingRow label={translate('whatsNewStep2Title')} flow="wrap" level={1}>
            <DataSourceSelector
              isMultiple={false}
              mustUseDataSource
              types={SUPPORTED_TYPES}
              useDataSources={useDataSources}
              onChange={handleDataSourceChange}
              widgetId={id}
            />
          </SettingRow>
          {hasDataSource && (
            <SettingRow label={translate('chartType')} flow="wrap" level={1}>
              <ChartTypeSelector
                templateId={templateId}
                onChange={handleTemplateChange}
              />
            </SettingRow>)}
        </SettingSection>

        {!hasDataSource && <Placeholder />}

        {hasDataSource && templateId && <div className='chart-setting'>
          {type === 'serial' && (
            <SerialSetting
              template={template}
              tools={tools}
              webChart={webChart}
              useDataSources={useDataSources as any}
              dataSource={dataSource}
              onToolsChange={handleToolsChange}
              onWebChartChange={handleWebChartChange}
              onSchemaChange={handleSchemaChange}
            />
          )}
        </div>}
      </div>

    </div>
  )
}

export default Setting

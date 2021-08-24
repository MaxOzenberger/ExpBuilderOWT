import { React, ImmutableArray, UseDataSource, ImmutableObject, QueriableDataSource, DataSourceSchema } from 'jimu-core'
import { SettingSection, SettingRow, SettingCollapse } from 'jimu-ui/advanced/setting-components'
import { IWebChart, WebChartSeries, ChartTools } from '../../../../config'
import { SerialDataSetting } from './data'
import { hooks, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { defaultMessages as jimuBuilderDefaultMessage } from 'jimu-for-builder'
import { WebChartAxis, WebChartText, WebChartLegend } from 'jimu-ui/advanced/chart'
import defaultMessages from '../../../translations/default'
import { SerialSeries, SerialAxes, SerialGeneral, SerialAppearance } from '.'
import { SerialTools } from '../../universal'
import { getSerialSeriesRotated } from '../../../../utils/common/serial'

export interface ChartSettingProps {
  dataSource: QueriableDataSource
  template: ImmutableObject<IWebChart>
  webChart: ImmutableObject<IWebChart>
  tools: ImmutableObject<ChartTools>
  useDataSources: ImmutableArray<UseDataSource>
  onWebChartChange: (webChart: ImmutableObject<IWebChart>) => void
  onToolsChange: (tools: ImmutableObject<ChartTools>) => void
  onSchemaChange?: (schema: DataSourceSchema) => void
}

export enum ChartSection {
  Data = 'data',
  Series = 'series',
  Axes = 'axes',
  Guides = 'guides',
  General = 'general',
  Appearance = 'appearance',
  Tools = 'tools',
  None = 'none'
}

export const SerialSetting = (props: ChartSettingProps): React.ReactElement => {
  const {
    useDataSources,
    dataSource,
    template,
    webChart,
    onWebChartChange,
    tools,
    onToolsChange,
    onSchemaChange
  } = props

  const rotated = getSerialSeriesRotated(webChart?.series)
  const legendValid = webChart?.series != null && webChart?.series?.length > 1

  const [section, setSection] = React.useState(ChartSection.Data)
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage, jimuBuilderDefaultMessage)

  const handleSeriesChange = (series: ImmutableArray<WebChartSeries>): void => {
    onWebChartChange?.(webChart.set('series', series))
  }

  const handleAxesChange = (axes: ImmutableArray<WebChartAxis>): void => {
    onWebChartChange?.(webChart.set('axes', axes))
  }

  const handleTitleChange = (title: ImmutableObject<WebChartText>): void => {
    onWebChartChange?.(webChart.set('title', title))
  }

  const onFooterChange = (footer: ImmutableObject<WebChartText>): void => {
    onWebChartChange?.(webChart.set('footer', footer))
  }

  const handleRotatedChange = (rotated: boolean): void => {
    const series = webChart?.series.map(serie => serie.set('rotated', rotated))
    onWebChartChange?.(webChart.set('series', series))
  }

  const handleLegendChange = (legend: ImmutableObject<WebChartLegend>): void => {
    onWebChartChange?.(webChart.set('legend', legend))
  }

  return (
    <div className='serial-setting w-100'>
      <SettingSection>
        <SettingCollapse
          label={translate('data')}
          isOpen={section === ChartSection.Data}
          onRequestOpen={() => setSection(ChartSection.Data)}
          onRequestClose={() => setSection(ChartSection.None)}
        >
          <SettingRow flow='wrap'>
            <SerialDataSetting
              template={template?.series}
              useDataSources={useDataSources}
              dataSource={dataSource}
              series={webChart?.series}
              onChange={handleSeriesChange}
              onSchemaChange={onSchemaChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('series')}
          isOpen={section === ChartSection.Series}
          onRequestOpen={() => setSection(ChartSection.Series)}
          onRequestClose={() => setSection(ChartSection.None)}
        >
          <SettingRow flow='wrap'>
            <SerialSeries
              series={webChart?.series}
              onChange={handleSeriesChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('axes')}
          isOpen={section === ChartSection.Axes}
          onRequestOpen={() => setSection(ChartSection.Axes)}
          onRequestClose={() => setSection(ChartSection.None)}
        >
          <SettingRow flow='wrap'>
            <SerialAxes
              rotated={rotated}
              axes={webChart?.axes as any}
              onChange={handleAxesChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('general')}
          isOpen={section === ChartSection.General}
          onRequestOpen={() => setSection(ChartSection.General)}
          onRequestClose={() => setSection(ChartSection.None)}
        >
          <SettingRow flow='wrap'>
            <SerialGeneral
              title={webChart?.title}
              footer={webChart?.footer}
              legend={webChart?.legend}
              legendValid={legendValid}
              rotated={rotated}
              onTitleChange={handleTitleChange}
              onFooterChange={onFooterChange}
              onRotatedChange={handleRotatedChange}
              onLegendChange={handleLegendChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('appearance')}
          isOpen={section === ChartSection.Appearance}
          onRequestOpen={() => setSection(ChartSection.Appearance)}
          onRequestClose={() => setSection(ChartSection.None)}
        >
          <SettingRow flow='wrap'>
            <SerialAppearance
              webChart={webChart}
              onChange={onWebChartChange}
            />
          </SettingRow>
        </SettingCollapse>
      </SettingSection>
      <SettingSection>
        <SettingCollapse
          label={translate('tools')}
          isOpen={section === ChartSection.Tools}
          onRequestOpen={() => setSection(ChartSection.Tools)}
          onRequestClose={() => setSection(ChartSection.None)}
        >
          <SerialTools
            datasource={dataSource}
            tools={tools}
            onChange={onToolsChange}
          />
        </SettingCollapse>
      </SettingSection>
    </div>
  )
}

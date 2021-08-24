import {
  FeatureLayerQueryParams,
  ImmutableObject,
  SqlExpression
} from 'jimu-core'
import {
  WebChart as _WebChart,
  WebChartBarChartSeries
} from 'jimu-ui/advanced/chart'

export type TemplateType = 'bar' | 'column' | 'stacked-bar' | 'stacked100-bar' | 'stacked-column' | 'stacked100-column'

export type WebChartSeries = Omit<WebChartBarChartSeries, 'query'> & {
  query?: FeatureLayerQueryParams
}

export interface IWebChart extends Omit<_WebChart, 'background' | 'series'> {
  background?: string
  series: WebChartSeries[]
}

export enum CategoryType {
  ByGroup = 'BYGROUP',
  ByField = 'BYFIELD',
  // ac-js does not support feature-by-feature now
  ByFeature = 'BYFEATURE'
}

export interface ChartTools {
  filter?: SqlExpression,
  cursorEnable?: boolean
}

export type ChartType = 'serial' | 'pie' | 'gauge'

export interface Config {
  //It is only used when configuring the app template
  _templateType?: TemplateType
  template: string
  webChart: IWebChart
  tools?: ChartTools
}

export type IMConfig = ImmutableObject<Config>

import {
  ISimpleMarkerSymbol,
  IFont,
  ITextSymbol,
  ISimpleLineSymbol,
  ISimpleFillSymbol
} from '@esri/arcgis-rest-types'
import {
  IMFieldSchema,
  ImmutableArray,
  JimuFieldType,
  utils,
  getAppStore,
  Immutable,
  ImmutableObject
} from 'jimu-core'
import { utils as uiUtils } from 'jimu-ui'
import {
  RESTSymbolType,
  RESTHorizontalAlignment,
  WebChartAxis,
  RESTSimpleMarkerSymbolStyle,
  WebChartTypes,
  getDefaultCategoryFormat,
  WebChartSeriesType,
  WebChartOverlay,
  RESTVerticalAlignment,
  WebChartLegendPositions,
  getSeriesType,
  RESTFontStyle,
  RESTFontWeight,
  RESTFontDecoration,
  RESTSimpleLineSymbolStyle,
  RESTSimpleFillSymbolStyle,
  WebChartText,
  WebChartColoringPatterns,
  WebChartBarSeriesKinds,
  WebChartLegend,
  WebChartCurrentVersion
} from 'jimu-ui/advanced/chart'
import { utils as jimuUtils } from 'jimu-ui'
import { ChartType, WebChartSeries, IWebChart } from '../../config'

export const DefaultColor = 'var(--dark)'
export const DefaultTextColor = 'var(--dark)'
export const DefaultBgColor = 'var(--white)'
export const DefaultLineColor = 'var(--light-900)'
export const DefaultFillColor = 'var(--primary)'
export const DefaultTextSize = 14
export const DefaultFontWeight = 400

// title
export const DefaultTitleColor = 'var(--black)'
export const DefaultTitleWeight = 500
export const DefaultTitleSize = 24

// footer
export const DefaultFooterSize = 14
export const DefaultFooterColor = 'var(--dark-800)'

// series
export const DefaultSeriesLabelSize = 10
export const DefaultValueLabelColor = 'var(--dark-600)'

// axes
export const DefaultAxisColor = 'var(--light-800)'
export const DefaultAxisLabelColor = 'var(--dark-500)'
export const DefaultAxisTitleColor = 'var(--dark-800)'
export const DefaultAxisTitleSize = 20
export const DefaultAxisLabelSize = 14

// legend
export const DefaultLegendTitleSize = 20
export const DefaultLegendLabelSize = 14
export const DefaultLegendTitleColor = 'var(--dark-800)'
export const DefaultLegendLabelColor = 'var(--dark-800)'
// grid
export const DefaultGridColor = 'var(--light-300)'

export const getDefaultColor = (): string => {
  return DefaultColor
}

export const getDefaultTextColor = (): string => {
  return DefaultTextColor
}

export const getDefaultBgColor = (): string => {
  return DefaultBgColor
}

export const getDefaultTitleColor = (): string => {
  return DefaultTitleColor
}

export const getDefaultFooterColor = (): string => {
  return DefaultFooterColor
}

export const getDefaultAxisLabelColor = (): string => {
  return DefaultAxisLabelColor
}

export const getDefaultAxisTitleColor = (): string => {
  return DefaultAxisTitleColor
}

export const getDefaultLegendTitleColor = (): string => {
  return DefaultAxisTitleColor
}

export const getDefaultLegendLabelColor = (): string => {
  return DefaultAxisTitleColor
}

export const getDefaultValueLabelColor = (): string => {
  return DefaultValueLabelColor
}

export const getDefaultLineColor = () => {
  return DefaultLineColor
}

export const getDefaultAxisColor = (): string => {
  return DefaultAxisColor
}

export const getDefaultGridColor = (): string => {
  return DefaultGridColor
}

export const SeriesColors = [
  '#5E8FD0',
  '#77B484',
  '#DF6B35',
  '#DBCF4E',
  '#41546D',
  '#8257C2',
  '#D6558B'
]

export const DefaultSeriesOutlineColor = 'var(--light-900)'

export const getDefaultSeriesOutlineColor = () => {
  return DefaultSeriesOutlineColor
}

export const getDefaultSeriesFillColor = (): string => {
  return SeriesColors[0]
}

export const getDefaultNumberFormat = () => {
  return {
    type: WebChartTypes.NumberAxisFormat,
    intlOptions: {
      style: 'decimal',
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 3
    }
  };
}

/**
 * Get series fill colors in order
 */
export const getSeriesFillColor = (index: number = 0): string => {
  const length = SeriesColors?.length ?? 0
  if (length < 0) return
  index = index % length
  if (index < 0) index = 0
  return SeriesColors[index]
}

export const DefaultFont: IFont = {
  family: 'Arial',
  size: DefaultTextSize,
  style: RESTFontStyle.Normal,
  weight: RESTFontWeight.Normal,
  decoration: RESTFontDecoration.None
}

export const DefaultTextSymbol: ITextSymbol = {
  type: RESTSymbolType.TS,
  color: DefaultTextColor as any,
  font: DefaultFont,
  horizontalAlignment: RESTHorizontalAlignment.Center
}

export const DefaultLineSymbol: ISimpleLineSymbol = {
  type: RESTSymbolType.SLS,
  style: RESTSimpleLineSymbolStyle.Solid,
  color: DefaultLineColor as any,
  width: 1
}

export const DefaultFillSymbol: ISimpleFillSymbol = {
  type: RESTSymbolType.SFS,
  style: RESTSimpleFillSymbolStyle.Solid,
  color: DefaultFillColor as any,
  outline: DefaultLineSymbol
}

/**
 * Get all theme variables
 */
export const getThemeColorVariables = (): string[] => {
  let state = getAppStore().getState()
  state = state?.appStateInBuilder ?? state
  const colors = state?.theme?.colors
  const palette = colors?.getPalette != null ? colors.getPalette() : colors?.palette

  const variables = []
  Object.keys(palette).forEach(name => {
    for (let i = 1; i <= 9; i++) {
      const shadeIndex = i * 100
      const value = jimuUtils.toColorVariable(name, shadeIndex)
      variables.push(value)
    }
  })

  return variables
}


/**
 * Generate a random theme color
 */
export const generateRandomThemeColor = (): string => {
  const varialbes = getThemeColorVariables()
  const length = varialbes.length
  const randomIndex = Math.floor(Math.random() * length)
  return varialbes[randomIndex]
}

export const getFont = (size = DefaultTextSize): IFont => {
  return {
    ...DefaultFont,
    size
  }
}

/**
 * Get the default text symbol
 * @param text
 * @param size
 */
export const getTextSymbol = (
  text = '',
  size = DefaultTextSize,
  color = DefaultTextColor as any
): ITextSymbol => {
  return {
    ...DefaultTextSymbol,
    text,
    color,
    font: getFont(size)
  }
}

/**
 * Get the default line symbol
 * @param useRandomColor Whether to randomly generate colors
 * @param width
 */
export const getLineSymbol = (
  width: number = 1,
  color = DefaultLineColor as any,
  style: RESTSimpleLineSymbolStyle = RESTSimpleLineSymbolStyle.Solid
): ISimpleLineSymbol => {
  return {
    ...DefaultLineSymbol,
    width,
    color,
    style
  }
}

/**
 * Get the default fill symbol
 */
export const getFillSymbol = (props?: {
  useRandomColor?: boolean
  useRampColor?: { colorIndex?: number }
  outlineWidth?: number
}): ISimpleFillSymbol => {
  const useRandomColor = props?.useRandomColor ?? false
  const useRampColor = props?.useRampColor
  const outlineWidth = props?.outlineWidth ?? 1
  let color: any = getDefaultColor()
  if (useRandomColor) color = generateRandomThemeColor()
  else if (useRampColor !== undefined) { color = getSeriesFillColor(useRampColor.colorIndex) }

  return {
    ...DefaultFillSymbol,
    color,
    outline: getLineSymbol(outlineWidth)
  }
}

/**
 * Generate a default chart text
 * @param visible
 */
export const getChartText = (
  text = '',
  visible: boolean = true,
  size?: number,
  color = DefaultTextColor as any
): WebChartText => {
  return {
    type: WebChartTypes.Text,
    visible,
    content: getTextSymbol(text, size, color)
  }
}

export const getCategoryAxis = (text = ''): WebChartAxis => {
  const title = getChartText(text, false, DefaultAxisTitleSize, DefaultAxisTitleColor)
  title.content.horizontalAlignment = RESTHorizontalAlignment.Center
  return {
    type: WebChartTypes.Axis,
    visible: true,
    title,
    labels: getChartText('', false, DefaultAxisLabelSize, DefaultAxisLabelColor),
    valueFormat: getDefaultCategoryFormat(),
    lineSymbol: getLineSymbol(1, DefaultAxisColor)
  }
}

export const getValueAxis = (
  text = '',
  isYAxis?: boolean
): WebChartAxis => {
  const title = getChartText(text, false, DefaultAxisTitleSize, DefaultAxisTitleColor)
  if (isYAxis) {
    title.content.horizontalAlignment = undefined
    title.content.verticalAlignment = RESTVerticalAlignment.Middle
    title.content.angle = 270
  } else {
    title.content.horizontalAlignment = RESTHorizontalAlignment.Center
  }
  return {
    type: WebChartTypes.Axis,
    visible: true,
    title,
    labels: getChartText('', false, DefaultAxisLabelSize, DefaultAxisLabelColor),
    valueFormat: getDefaultNumberFormat(),
    lineSymbol: getLineSymbol(1, DefaultAxisColor)
  }
}

/**
 * Returns default axes based on chart type as per the WebChart Specification
 * @param chartType The type of WebChart which is of type WebChartTypes.BarSeries | WebChartTypes.HistogramSeries | WebChartTypes.ScatterSeries
 *
 */
export function getDefaultAxes(
  chartType:
    typeof WebChartTypes.BarSeries
    | typeof WebChartTypes.HistogramSeries
    | typeof WebChartTypes.ScatterSeries
): WebChartAxis[] {
  const defaultAxes: WebChartAxis[] = []
  const xAxisTitle = ''
  const yAxisTitle = ''
  const yAxis = getValueAxis(yAxisTitle, true)
  const defaultGridLine = getLineSymbol(
    1,
    DefaultGridColor,
    RESTSimpleLineSymbolStyle.Dash
  )
  switch (chartType) {
    case WebChartTypes.BarSeries: {
      // Setting Bar Chart baseline to 0.
      yAxis.minimum = 0
      yAxis.grid = defaultGridLine
      defaultAxes.push(getCategoryAxis(xAxisTitle), yAxis)
      break
    }
    case WebChartTypes.ScatterSeries: {
      const xAxis = getValueAxis(xAxisTitle)
      xAxis.grid = defaultGridLine
      yAxis.grid = defaultGridLine
      defaultAxes.push(xAxis, yAxis)
      break
    }
    case WebChartTypes.HistogramSeries: {
      yAxis.grid = defaultGridLine
      defaultAxes.push(getValueAxis(xAxisTitle), yAxis)
      break
    }
    default:
      break
  }
  // TODO: once `getDefaultAxes` is only needed via `getDefaultBarChart` deep clone can be removed.
  return defaultAxes
}

/**
 * Returns a default BarChartSeries object as per the WebChart Specification
 */
export function getDefaultBarChartSeries(index: number): WebChartSeries {
  return {
    type: WebChartTypes.BarSeries,
    id: '',
    name: '',
    x: '',
    y: '',
    colorType: WebChartColoringPatterns.Single,
    multipleBarType: WebChartBarSeriesKinds.Side,
    fillSymbol: getFillSymbol({
      useRampColor: { colorIndex: index },
      outlineWidth: 0
    }),
    query: {
      groupByFieldsForStatistics: [],
      outStatistics: [{
        onStatisticField: '',
        statisticType: 'sum',
        outStatisticFieldName: ''
      }]
    },
    dataLabels: getChartText('', false, DefaultSeriesLabelSize, DefaultValueLabelColor),
    rotated: false
  }
}

/**
 * Returns a BarChartSeries object with specific props
 * @param props
 */
export function getBarChartSeries(
  props: Partial<WebChartSeries>,
  index: number
): WebChartSeries {
  const { multipleBarType, rotated, dataLabels } = props
  return {
    type: WebChartTypes.BarSeries,
    id: '',
    name: '',
    x: '',
    y: '',
    colorType: WebChartColoringPatterns.Single,
    multipleBarType,
    fillSymbol: getFillSymbol({
      useRampColor: { colorIndex: index },
      outlineWidth: 0
    }),
    dataLabels: dataLabels ?? getChartText('', false, DefaultSeriesLabelSize),
    rotated
  }
}

export const getDefaultLegend = (visible = true): WebChartLegend => {
  return {
    type: WebChartTypes.Legend,
    visible,
    title: getChartText('', true, DefaultLegendTitleSize, DefaultLegendTitleColor),
    body: getTextSymbol('', DefaultLegendLabelSize, DefaultLegendLabelColor),
    position: WebChartLegendPositions.Right
  }
}

export function getDefaultOverlay(): WebChartOverlay {
  return {
    type: WebChartTypes.Overlay,
    visible: true,
    created: false,
    symbol: getLineSymbol()
  }
}

export const getDefaultMarkerSymbol = (
  useRandomColor = false
): ISimpleMarkerSymbol => {
  return {
    type: RESTSymbolType.SMS,
    style: RESTSimpleMarkerSymbolStyle.Circle,
    color: (!useRandomColor ? getDefaultColor() : generateRandomThemeColor()) as any,
    size: 7
  }
}

export const compeleteBarChart = (
  chart: IWebChart
): ImmutableObject<IWebChart> => {
  let webChart = Immutable(chart)
  let axes = null
  if (!webChart.version) {
    webChart = webChart.set('version', WebChartCurrentVersion)
  }
  if (webChart.background === '' || webChart.background == null) {
    webChart = webChart.set('background', DefaultBgColor)
  } else {
    const background = uiUtils.convertJsAPISymbolColorToStringColor(
      webChart.background as any
    )
    webChart = webChart.set('background', background)
  }
  if (webChart.axes == null) {
    axes = getDefaultAxes('barSeries')
    webChart = webChart.set('axes', axes)
  } else if (webChart.axes[0].grid == null) {
    const grid = getLineSymbol(1, DefaultGridColor, RESTSimpleLineSymbolStyle.Dash)
    axes = webChart.axes.map(axis => axis.set('grid', grid))
    webChart = webChart.set('axes', axes)
  }
  if (webChart.series == null) {
    const series = getDefaultBarChartSeries(0)
    webChart = webChart.set('series', [series])
  }
  if (webChart.title == null) {
    const title = getChartText('', true, DefaultTitleSize, DefaultTitleColor)
    webChart = webChart.set('title', title)
  }
  if (webChart.footer == null) {
    const footer = getChartText('', true, DefaultFooterSize, DefaultFooterColor)
    webChart = webChart.set('footer', footer)
  }
  if (webChart.legend == null) {
    const legend = getDefaultLegend(false)
    webChart = webChart.set('legend', legend)
  }
  return webChart
}

/**
 * Generate a `FormatOptions` of ac-spec by a field schema
 * @param fieldSchema
 * @param characterLimit
 */
export const getValueFormat = (
  fieldSchema: IMFieldSchema,
  characterLimit: number = 10
): any => {
  if (fieldSchema.type === JimuFieldType.Date) {
    const intlOptions = utils.getIntlOption(fieldSchema)
    return {
      type: 'date',
      intlOptions
    }
  } else if (fieldSchema.type === JimuFieldType.String) {
    return {
      type: 'category',
      characterLimit
    }
  } else if (fieldSchema.type === JimuFieldType.Number) {
    const intlOptions = utils.getIntlOption(fieldSchema)
    return {
      type: 'number',
      intlOptions
    }
  }
}

export const SerialSeriesType: WebChartSeriesType[] = [
  'barSeries',
  'lineSeries'
]

export const isSerialSeries = (
  value?: WebChartSeriesType | WebChartSeries[] | ImmutableArray<WebChartSeries>
): boolean => {
  if (value == null || (value as string) === '') return
  const seriesType = typeof value === 'string' ? value : getSeriesType(value as any) as WebChartSeriesType

  return SerialSeriesType.includes(seriesType)
}

export const getChartType = (
  series: ImmutableArray<WebChartSeries>
): ChartType | undefined => {
  if (series == null || series?.length <= 0) return
  const serial = isSerialSeries(series)
  if (serial) return 'serial'
}

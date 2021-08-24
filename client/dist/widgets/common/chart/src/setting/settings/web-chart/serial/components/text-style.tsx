import { React, ImmutableObject, classNames, Immutable } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessage, Switch } from 'jimu-ui'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../../../translations/default'
import { TextSymbolSetting, TextSymbol } from '../../../components'
import { SingleTextStyleSetting } from './single-text-style'
import { IWebChart } from '../../../../../config'
import {
  getDefaultAxisLabelColor,
  getDefaultAxisTitleColor,
  getDefaultFooterColor,
  getDefaultLegendLabelColor,
  getDefaultLegendTitleColor,
  getDefaultTextColor,
  getDefaultTitleColor,
  getDefaultValueLabelColor
} from '../../../../../utils/default'
import { RESTHorizontalAlignment, RESTSymbolType } from 'jimu-ui/advanced/chart'

export enum TextElementPathes {
  ChartTitle = 'title.content',
  ChartDescription = 'footer.content',
  AxisTitle = 'axes.title.content',
  AxisLabel = 'axes.labels.content',
  LegendTitle = 'legend.title.content',
  LegendLabel = 'legend.body',
  ValueLabel = 'series.dataLabels.content'
}

const TextElementsTranslation = {
  [TextElementPathes.ChartTitle]: 'chartTitle',
  [TextElementPathes.ChartDescription]: 'chartDescription',
  [TextElementPathes.AxisTitle]: 'axisTitle',
  [TextElementPathes.AxisLabel]: 'axisLabel',
  [TextElementPathes.LegendTitle]: 'legendTitle',
  [TextElementPathes.LegendLabel]: 'legendLabel',
  [TextElementPathes.ValueLabel]: 'valueLabel'
}

const getDefaultTextElementColor = (element?: TextElementPathes) => {
  if (element === TextElementPathes.ChartTitle) {
    return getDefaultTitleColor()
  } else if (element === TextElementPathes.ChartDescription) {
    return getDefaultFooterColor()
  } else if (element === TextElementPathes.AxisTitle) {
    return getDefaultAxisTitleColor()
  } else if (element === TextElementPathes.AxisLabel) {
    return getDefaultAxisLabelColor()
  } else if (element === TextElementPathes.LegendTitle) {
    return getDefaultLegendTitleColor()
  } else if (element === TextElementPathes.LegendLabel) {
    return getDefaultLegendLabelColor()
  } else if (element === TextElementPathes.ValueLabel) {
    return getDefaultValueLabelColor()
  }
  return getDefaultTextColor()
}

export const SerialTextElements = Object.values(TextElementPathes)

export interface TextStyleProps {
  className?: string
  elements: TextElementPathes[]
  webChart: ImmutableObject<IWebChart>
  onChange: (webChart: ImmutableObject<IWebChart>) => void
}

const TextSymbolKeys = [
  'color',
  'weight',
  'style',
  'decoration',
  'family',
  'size'
]

/**
 * Convert path to array path
 * @param path
 * @param capture
 */
const getPathArray = (path: TextElementPathes, capture: boolean = true): string[] => {
  let paths = path.split('.')
  if (
    path === TextElementPathes.AxisLabel ||
    path === TextElementPathes.AxisTitle ||
    path === TextElementPathes.ValueLabel
  ) {
    if (capture) {
      paths.splice(1, 0, '0')
    } else {
      paths = paths.slice(1)
    }
  }
  return paths
}

/**
 * Check whether a style is the same in all elements
 * @param key
 * @param textElements
 * @param webChart
 */
const isSameTextStyle = (
  key: string,
  textElements: TextElementPathes[],
  webChart: ImmutableObject<IWebChart>
): boolean => {
  const first =
    key === 'color'
      ? webChart.getIn(getPathArray(textElements[0]))?.color
      : webChart.getIn(getPathArray(textElements[0]))?.font?.[key]

  return textElements.every(path => {
    const symbol = webChart.getIn(getPathArray(path))
    return key === 'color'
      ? symbol?.color === first
      : symbol?.font?.[key] === first
  })
}

/**
 * Gets the same style in all elements
 * @param textElements
 * @param webChart
 */
const getSameTextStyle = (
  textElements: TextElementPathes[],
  webChart: ImmutableObject<IWebChart>
): ImmutableObject<TextSymbol> => {
  let symbol = Immutable({
    type: RESTSymbolType.TS,
    horizontalAlignment: RESTHorizontalAlignment.Center
  }) as ImmutableObject<TextSymbol>

  const first = webChart.getIn(getPathArray(textElements[0]))

  TextSymbolKeys.forEach(key => {
    const same = isSameTextStyle(key, textElements, webChart)
    if (same) {
      symbol =
        key === 'color'
          ? symbol.set(key, first?.[key])
          : symbol.setIn(['font', key], first?.font?.[key])
    }
  })

  return symbol
}

/**
 * Set the style in webChart according to the path
 * @param key
 * @param path
 * @param value
 * @param webChart
 */
const setWebChart = (
  key: string,
  path: TextElementPathes,
  value: any,
  webChart: ImmutableObject<IWebChart>
): ImmutableObject<IWebChart> => {
  let ret = webChart

  const paths = getPathArray(path, false).concat(
    key === 'color' ? ['color'] : ['font', key]
  )

  if (
    path === TextElementPathes.AxisLabel ||
    path === TextElementPathes.AxisTitle
  ) {
    ret = webChart.set(
      'axes',
      ret.axes?.map(axis => {
        return axis?.setIn(paths, value)
      })
    )
  } else if (path === TextElementPathes.ValueLabel) {
    ret = ret.set(
      'series',
      ret.series.map(serie => {
        return serie.setIn(paths, value)
      })
    )
  } else {
    ret = ret.setIn(paths, value)
  }
  return ret
}

export const TextStyle = (props: TextStyleProps): React.ReactElement => {
  const { className, elements = SerialTextElements, webChart, onChange } = props

  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const [useAll, setUseAll] = React.useState(false)
  const [currentPath, setCurrentPath] = React.useState<TextElementPathes>()
  const allSymbol = getSameTextStyle(elements, webChart)

  const handleAllElementsTextChange = (key: string, value: any): void => {
    let ret = webChart
    elements.forEach(path => {
      ret = setWebChart(key, path, value, ret)
    })
    onChange(ret)
  }

  const handleSingleTextChange = (
    path: TextElementPathes,
    value: ImmutableObject<TextSymbol>
  ): void => {
    let ret = webChart
    const paths = getPathArray(path, false)

    if (
      path === TextElementPathes.AxisLabel ||
      path === TextElementPathes.AxisTitle
    ) {
      ret = webChart.set(
        'axes',
        ret.axes?.map(axis => {
          const text = axis.getIn(paths)?.text ?? ''
          value = value.set('text', text)
          return axis?.setIn(paths, value)
        })
      )
    } else if (path === TextElementPathes.ValueLabel) {
      ret = ret.set(
        'series',
        ret.series.map(serie => {
          return serie.setIn(paths, value)
        })
      )
    } else {
      ret = ret.setIn(paths, value)
    }
    onChange(ret)
  }

  return (
    <div className={classNames('text-style w-100', className)}>
      <SettingSection>
        <SettingRow label={translate('allText')} level={1}>
          <Switch
            checked={useAll}
            onChange={(_, checked) => setUseAll(checked)}
          />
        </SettingRow>
      </SettingSection>

      <SettingSection>
        {useAll && (
          <TextSymbolSetting
            defaultColor={getDefaultTextElementColor()}
            value={allSymbol}
            onColorChange={value => handleAllElementsTextChange('color', value)}
            onFontChange={handleAllElementsTextChange}
          />
        )}
        {!useAll && (
          <>
            {elements.map((path, idx) => {
              const symbol = webChart.getIn(getPathArray(path))
              const label = translate(TextElementsTranslation[path])
              return (
                <SingleTextStyleSetting
                  className='mb-2'
                  defaultColor={getDefaultTextElementColor(path)}
                  editable={currentPath === path}
                  bottomLine={idx !== elements?.length - 1}
                  onEditableChange={editable => setCurrentPath(editable ? path : undefined)}
                  label={label}
                  key={idx}
                  value={symbol}
                  onChange={value => handleSingleTextChange(path, value)}
                />
              )
            })}
          </>
        )}
      </SettingSection>
    </div>
  )
}
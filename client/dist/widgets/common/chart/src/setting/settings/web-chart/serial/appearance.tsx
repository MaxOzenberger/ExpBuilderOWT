import { React, ImmutableObject, getAppStore } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessage, PanelHeader } from 'jimu-ui'
import { SettingRow, SidePopper } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../../translations/default'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import { Navigation } from '../../components'
import { IWebChart } from '../../../../config'
import {
  TextStyle,
  LineStyle,
  SerialTextElements,
  SerialLineElements
} from './components'
import { DefaultBgColor } from '../../../../utils/default'

export enum StyledElements {
  SymbolElements = 'symbolElements',
  TextElements = 'textElements'
}

export interface SerialAppearanceProps {
  webChart: ImmutableObject<IWebChart>
  onChange: (webChart: ImmutableObject<IWebChart>) => void
}

export const SerialAppearance = (props: SerialAppearanceProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const appTheme = getAppStore()?.getState()?.appStateInBuilder?.theme
  const { webChart, onChange } = props
  const background = webChart?.background

  const [elements, setElements] = React.useState<string>('')

  const handleBackgroundChange = (background: string): void => {
    onChange?.(webChart.set('background', background || DefaultBgColor))
  }

  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div className='serial-general w-100'>
      <SettingRow label={translate('background')} flow='no-wrap' className='mt-2'>
        <ThemeColorPicker
          specificTheme={appTheme}
          value={background as any}
          onChange={handleBackgroundChange}
        />
      </SettingRow>
      <div ref={ref}>
        <Navigation
          className='mt-2'
          active={elements === StyledElements.TextElements}
          title={translate(StyledElements.TextElements)}
          onClick={() => setElements(StyledElements.TextElements)}
        />
        <Navigation
          className='mt-2'
          active={elements === StyledElements.SymbolElements}
          title={translate(StyledElements.SymbolElements)}
          onClick={() => setElements(StyledElements.SymbolElements)}
        />
      </div>
      <SidePopper isOpen={elements !== ''} position="right" toggle={() => setElements('')} trigger={ref?.current}>
        <PanelHeader className='px-3 pt-3' level={1} title={elements !== '' ? translate(elements) : ''} onClose={() => setElements('')} />
        <div className='appearance-style'>
          {elements === StyledElements.TextElements && (
            <TextStyle
              webChart={webChart}
              elements={SerialTextElements}
              onChange={onChange}
            />
          )}
          {elements === StyledElements.SymbolElements && (
            <LineStyle
              webChart={webChart}
              elements={SerialLineElements}
              onChange={onChange}
            />
          )}
        </div>
      </SidePopper>
    </div>
  )
}

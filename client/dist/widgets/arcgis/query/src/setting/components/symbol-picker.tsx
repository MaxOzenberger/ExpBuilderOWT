/** @jsx jsx */
import { React, jsx, css } from 'jimu-core'
import { Popper, Loading, LoadingType } from 'jimu-ui'
import { SymbolSelector, SymbolItem } from 'jimu-ui/advanced/lib/map'

const { useMemo, useState } = React

export const SymbolPicker = ({ currentSymbol, setCurrentSymbol, esriModuleMap, intl }) => {
  const esriSymbol = useMemo(() => currentSymbol && esriModuleMap.jsonUtils && esriModuleMap.jsonUtils.fromJSON(currentSymbol), [currentSymbol, esriModuleMap.jsonUtils])
  const refMap = useMemo(() => ({ refToolbarContainer: null }), [])
  const [symbolSelectorVisible, setSymbolSelectorVisible] = useState(false)
  const mainCss = css`
    &.setting-ui-unit-symbol-preview {
      position: relative;
      cursor: pointer;
    }
  `
  const symbolSelectorCss = css`
    &.setting-ui-unit-symbol-selector {
      width: 600px;
    }
  `
  return (
    <React.Fragment>
      <div
        ref={el => refMap.refToolbarContainer = el}
        css={mainCss}
        className='setting-ui-unit-symbol-preview'
        onClick={() => setSymbolSelectorVisible(!symbolSelectorVisible)}
      >
        {
          currentSymbol &&
          (esriModuleMap.SketchClass ? <SymbolItem symbol={esriSymbol} isUsedForPreview /> : <Loading type={LoadingType.Donut} width={16} height={16} />)
        }
      </div>
      {
        currentSymbol && symbolSelectorVisible &&
          <Popper
            className='surface-2 border-0'
            reference={refMap.refToolbarContainer}
            placement='top'
            open
            offset={[0, 12]}
            toggle={() => setSymbolSelectorVisible(!symbolSelectorVisible)}
          >
            <SymbolSelector
              className='setting-ui-unit-symbol-selector'
              css={symbolSelectorCss}
              intl={intl}
              symbol={esriSymbol}
              onPointSymbolChanged={(symbol) => setCurrentSymbol(symbol.toJSON())}
            />
          </Popper>
      }
    </React.Fragment>
  )
}

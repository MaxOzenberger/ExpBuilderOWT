/** @jsx jsx */
import {
  React,
  css,
  polished,
  jsx,
  IMState,
  ReactRedux,
  Immutable,
  ImmutableObject,
  classNames
} from 'jimu-core'
import { ISimpleLineSymbol } from '@esri/arcgis-rest-types'
import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
import {
  LineStyleSelector,
  InputUnit
} from 'jimu-ui/advanced/style-setting-components'
import { getLineSymbol } from '../../../../utils/default'
import { LineType } from 'jimu-ui'

export interface LineSymbolProps {
  className?: string
  value: ImmutableObject<ISimpleLineSymbol>
  outlineColorPicker?: boolean
  defaultColor: string
  onChange?: (value: ImmutableObject<ISimpleLineSymbol>) => void
  onPropsChange?: (key: string, value: any) => void
}

const cssStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > .item {
    flex: 0 1 auto;
  }
  > .item.style-setting--line-style-selector {
    width: 45%;
  }
  > .item.style-setting--input-unit {
    width: 30%;
  }
  .jimu-builder--color {
    height: ${polished.rem(26)};
  }
`
export const LineSymbolSetting = (props: LineSymbolProps): React.ReactElement => {
  const {
    className,
    value: propValue = Immutable(getLineSymbol()),
    outlineColorPicker = false,
    defaultColor,
    onChange,
    onPropsChange
  } = props

  const colorPickerBlockProps = React.useMemo(() => {
    if (outlineColorPicker) return { outline: true }
  }, [outlineColorPicker])

  const appTheme = ReactRedux.useSelector(
    (state: IMState) => state.appStateInBuilder.theme
  )
  const color = (propValue.color as unknown) as string
  const style = propValue.style
  const width = `${propValue.width}px`

  const handleChange = (key: string, value: any): void => {
    if (key === 'color') {
      value = value || defaultColor
    }
    onPropsChange?.(key, value)
    onChange?.(propValue.set(key, value))
  }

  return (
    <div
      className={classNames('line-symbol-setting', className)}
      css={cssStyle}
    >
      <ThemeColorPicker
        pickerBlockProps={colorPickerBlockProps}
        specificTheme={appTheme}
        className='item'
        onChange={value => handleChange('color', value)}
        value={color}
      />
      <LineStyleSelector
        className='item'
        type='symbol'
        value={style as LineType}
        onChange={value => handleChange('style', value)}
      />
      <InputUnit
        className='item'
        value={width}
        onChange={value => handleChange('width', value.distance)}
      />
    </div>
  )
}

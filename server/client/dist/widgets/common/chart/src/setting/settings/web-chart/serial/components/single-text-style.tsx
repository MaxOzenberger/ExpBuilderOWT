import { React, ImmutableObject, classNames } from 'jimu-core'
import { TextSymbolSetting, TextSymbol } from '../../../components'
import { SettingCollapse } from '../../../components/setting-collapse'


export interface SingleTextStyleProps {
  label: string
  value: ImmutableObject<TextSymbol>
  className?: string
  defaultColor: string
  editable: boolean
  bottomLine?: boolean
  onEditableChange: (editable: boolean) => void
  onChange: (value: ImmutableObject<TextSymbol>) => void
}

export const SingleTextStyleSetting = (props: SingleTextStyleProps): React.ReactElement => {
  const { className, editable, bottomLine, onEditableChange, label, value, defaultColor, onChange } = props

  return (
    <div className={classNames('single-text-style', className)}>
      <SettingCollapse
        label={label}
        level={1}
        isOpen={editable}
        bottomLine={bottomLine}
        onRequestClose={() => onEditableChange(false)}
        onRequestOpen={() => onEditableChange(true)}>
        <TextSymbolSetting
          defaultColor={defaultColor}
          className='mt-2'
          value={value}
          onChange={onChange}
        />
      </SettingCollapse>
    </div>
  )
}

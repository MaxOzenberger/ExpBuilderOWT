import { ISimpleLineSymbol } from '@esri/arcgis-rest-types'
import { React, ImmutableObject, classNames } from 'jimu-core'
import { LineSymbolSetting } from '../../../components'
import { SettingCollapse } from '../../../components/setting-collapse'

export interface SingleLineStyleProps {
  label: string
  className?: string
  value: ImmutableObject<ISimpleLineSymbol>
  defaultColor: string
  editable: boolean
  bottomLine?: boolean
  onEditableChange: (editable: boolean) => void
  onChange: (value: ImmutableObject<ISimpleLineSymbol>) => void
}

export const SingleLineStyle = (props: SingleLineStyleProps): React.ReactElement => {
  const { className, editable, bottomLine, onEditableChange, label, value, defaultColor, onChange } = props

  return (
    <div className={classNames('single-line-style', className)}>
      <SettingCollapse
        label={label}
        level={1}
        isOpen={editable}
        bottomLine={bottomLine}
        onRequestClose={() => onEditableChange(false)}
        onRequestOpen={() => onEditableChange(true)}>
        <LineSymbolSetting
          defaultColor={defaultColor}
          className='mt-2'
          value={value}
          onChange={onChange}
        />
      </SettingCollapse>
    </div>
  )
}

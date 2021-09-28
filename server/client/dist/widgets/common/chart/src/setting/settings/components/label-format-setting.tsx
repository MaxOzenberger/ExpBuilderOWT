/** @jsx jsx */
import {
  React,
  css,
  jsx,
  ImmutableObject,
  IMState,
  ReactRedux,
  SerializedStyles
} from 'jimu-core'
import {
  NumericInput,
  Checkbox,
  hooks,
  defaultMessages as jimuUiDefaultMessage,
  Label
} from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../translations/default'
import {
  NumberFormatOptions,
  CategoryFormatOptions,
  DateTimeFormatOptions
} from 'jimu-ui/advanced/chart'

export type IMValueFormat =
  | ImmutableObject<CategoryFormatOptions>
  | ImmutableObject<NumberFormatOptions>
  | ImmutableObject<DateTimeFormatOptions>

export interface LabelFormatSettingProps {
  value: IMValueFormat
  onChange: (value: IMValueFormat) => void
}

const useStyle = (): SerializedStyles => {
  const theme = ReactRedux.useSelector((state: IMState) => state.theme)
  const dark400 = theme?.colors?.palette?.dark?.[400]

  return React.useMemo(() => {
    return css`
      .jimu-widget-setting--row-label {
        color: ${dark400};
      }
    `
  }, [dark400])
}

// More info about intl option: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
export const LabelFormatSetting = (props: LabelFormatSettingProps): React.ReactElement => {
  const { value, onChange } = props
  const style = useStyle()

  const type = value?.type ?? 'category'
  const characterLimit = (value as CategoryFormatOptions)?.characterLimit ?? ''
  const intlOptions = (value as NumberFormatOptions)?.intlOptions
  const decimal = intlOptions?.minimumFractionDigits ?? 0
  const show1000Seperator = ((intlOptions as any)?.notation == null || (intlOptions as any)?.notation === 'standard') ? intlOptions?.useGrouping : true

  const translate = hooks.useTranslate(defaultMessages, jimuUiDefaultMessage)

  const handleCharacterLimitChange = (characterLimit: number): void => {
    onChange(
      (value as ImmutableObject<CategoryFormatOptions>).set(
        'characterLimit',
        +characterLimit
      )
    )
  }

  const handleDecimalChange = (decimal: number): void => {
    onChange(
      (value as ImmutableObject<NumberFormatOptions>)
        .setIn(['intlOptions', 'minimumFractionDigits'], +decimal)
        .setIn(['intlOptions', 'maximumFractionDigits'], +decimal)
    )
  }

  const handleShow1000SeperatorChange = (_, show1000Seperator: boolean): void => {
    let option = (value as ImmutableObject<NumberFormatOptions>).setIn(
      ['intlOptions', 'useGrouping'],
      show1000Seperator
    )
    if (show1000Seperator) {
      option = option.set(
        'intlOptions',
        (option.intlOptions as any).without('notation')
      )
    }
    onChange(option)
  }

  return (
    <div className='label-format-setting' css={style}>
      {type === 'category' && (
        <SettingRow label={translate('characterLimit')} flow='no-wrap'>
          <NumericInput
            size='sm'
            showHandlers={false}
            value={characterLimit}
            className='w-50'
            onAcceptValue={handleCharacterLimitChange}
          />
        </SettingRow>
      )}
      {type === 'number' && (
        <React.Fragment>
          <SettingRow label={translate('decimal')} flow='no-wrap'>
            <NumericInput
              size='sm'
              min={0}
              max={15}
              showHandlers={false}
              value={decimal}
              className='w-50'
              onAcceptValue={handleDecimalChange}
            />
          </SettingRow>
          <Label check className='justify-content-start align-items-start mt-2 setting-text-level-3'>
            <Checkbox
              checked={show1000Seperator}
              onChange={handleShow1000SeperatorChange}
            />
            <span className='ml-2'>{translate('show1000Seperator')}</span>
          </Label>
        </React.Fragment>
      )}
    </div>
  )
}

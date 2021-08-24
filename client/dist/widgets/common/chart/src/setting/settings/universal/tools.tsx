import { React, IMSqlExpression, DataSource, Immutable, defaultMessages as jimuCoreDefaultMessage } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessage, Switch, Button } from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { SqlExpressionBuilderPopup } from 'jimu-ui/advanced/sql-expression-builder'
import { ImmutableObject } from 'seamless-immutable'
import { ChartTools } from '../../../config'

export interface ToolsProps {
  datasource: DataSource
  tools: ImmutableObject<ChartTools>
  onChange?: (tools: ImmutableObject<ChartTools>) => void
}

//Hide filter tool in version 9.1
const FilterAbility = false

const DefaultTools: ImmutableObject<ChartTools> = Immutable({ filter: null, dataAction: false })

export const SerialTools = (props: ToolsProps): React.ReactElement => {
  const { datasource, tools: propTools = DefaultTools, onChange } = props
  const filter = propTools?.filter
  const cursorEnable = propTools?.cursorEnable ?? false

  const translate = hooks.useTranslate(jimuiDefaultMessage, jimuCoreDefaultMessage)

  const [showFilter, setShowFilter] = React.useState(filter != null)
  const [filterPopupVisible, setFilterPopupVisible] = React.useState(false)

  const toggleFilterPopupVisible = (): void => {
    setFilterPopupVisible(v => !v)
  }

  const handleFilterVisibleChange = (_, checked: boolean): void => {
    setShowFilter(checked)
    if (!checked) {
      const tools = propTools.without('filter')
      onChange?.(tools)
    }
  }

  const handleFilterChange = (filter: IMSqlExpression): void => {
    const tools = propTools.set('filter', filter)
    onChange?.(tools)
  }

  const handleCursorEnableChange = (_, checked: boolean): void => {
    const tools = propTools.set('cursorEnable', checked)
    onChange?.(tools)
  }

  return (
    <div className='serial-tools w-100'>
      {FilterAbility && <>
        <SettingRow label={translate('filter')} flow='no-wrap' className='mt-3'>
          <Switch
            checked={showFilter}
            onChange={handleFilterVisibleChange}
          />
        </SettingRow>
        {showFilter && (
          <SettingRow>
            <Button
              className='w-100'
              disabled={datasource == null}
              onClick={() => setFilterPopupVisible(true)}
              title={translate('setFilters')}
            >
              {translate('setFilters')}
            </Button>
          </SettingRow>
        )}
        <SqlExpressionBuilderPopup
          dataSource={datasource}
          isOpen={filterPopupVisible}
          toggle={toggleFilterPopupVisible}
          expression={filter}
          onChange={handleFilterChange}
        />
      </>}
      <SettingRow label={`${translate('selection')} & ${translate('ZoomLabel')}`} flow='no-wrap' className='mt-3'>
        <Switch
          checked={cursorEnable}
          onChange={handleCursorEnableChange}
        />
      </SettingRow>

    </div>
  )
}

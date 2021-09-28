import { React, ImmutableArray, UseDataSource, StatisticType, DataSourceSchema } from 'jimu-core'
import { Select, hooks, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { WebChartSeries } from '../../../../../config'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { FieldSelector } from '../../../components/field-selector'
import defaultMessages from '../../../../translations/default'
import { getNumericFields, getOrderByFields, getStatisticType } from '../../../../../utils/common'
import { SorteSetting } from '../components/sort-setting'
import { createByFieldSeries, getByFieldOrderFields, getByFieldSchema } from '../utils'
import { StatisticFunctions } from '../../../utils'
import { ByFieldSeriesX } from '../../../../../constants'

export interface ByFieldDataProps extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
  template: ImmutableArray<WebChartSeries>
  series: ImmutableArray<WebChartSeries>
  useDataSources: ImmutableArray<UseDataSource>
  onChange?: (series: ImmutableArray<WebChartSeries>) => void
  onSchemaChange?: (schema: DataSourceSchema) => void
}

const DefaultOrderByFields = [`${ByFieldSeriesX} ASC`]

export const ByFieldData = (props: ByFieldDataProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const {
    useDataSources,
    series: propSeries,
    template: templateSeries,
    onChange,
    onSchemaChange
  } = props

  const dataSourceId = useDataSources?.[0]?.dataSourceId
  const numericFields = getNumericFields(propSeries)
  const statisticType = getStatisticType(propSeries) ?? StatisticType.Sum
  const orderByFields = getOrderByFields(propSeries) ?? DefaultOrderByFields

  const ByFieldSeriesName = React.useMemo(() => translate('sumOfValue'), [translate])

  const orderFields = React.useMemo(() => getByFieldOrderFields(propSeries, translate), [translate, propSeries])

  const handleSeriesChange = (series: ImmutableArray<WebChartSeries>): void => {
    const schema = getByFieldSchema(series, dataSourceId)
    onSchemaChange?.(schema)
    onChange?.(series)
  }

  const handleStatisticTypeChange = (evt: React.MouseEvent<HTMLSelectElement>): void => {
    const statisticType = evt?.currentTarget.value as StatisticType

    const series = propSeries.map((serie) => {
      return serie.setIn(['query', 'outStatistics'], serie?.query?.outStatistics.map((outStatistic) => {
        return outStatistic.set('statisticType', statisticType)
      }))
    }) as unknown as ImmutableArray<WebChartSeries>

    handleSeriesChange?.(series)
  }

  const handleNumericFieldsChange = (fields: ImmutableArray<string>): void => {
    const name = ByFieldSeriesName
    const numericFields = fields

    const series = createByFieldSeries({ name, numericFields, statisticType, orderByFields }, templateSeries)

    handleSeriesChange?.(series)
  }

  const handleOrderChanged = (value: string): void => {
    const orderByFields = value
    const series = propSeries.map((serie) => {
      return serie.setIn(['query', 'orderByFields'], [orderByFields])
    }) as unknown as ImmutableArray<WebChartSeries>
    onChange?.(series)
  }

  return (
    <>
      <SettingRow label={translate('statistics')} flow='wrap'>
        <Select
          size='sm'
          value={statisticType}
          onChange={handleStatisticTypeChange}
        >
          {Object.keys(StatisticType).filter(
            st => !(StatisticType[st] === StatisticType.Count)
          ).map((st, i) => (
            <option
              value={StatisticType[st]}
              key={i}
              className='text-truncate'
            >
              {StatisticFunctions[StatisticType[st]]}
            </option>
          ))}
        </Select>
      </SettingRow>

      <SettingRow label={translate('numberFields')} flow='wrap'>
        <FieldSelector
          className='numeric-fields-selector'
          type='numeric'
          isMultiple={true}
          useDataSources={useDataSources}
          fields={numericFields}
          onChange={handleNumericFieldsChange}
        />
      </SettingRow>

      <SettingRow label={translate('sortBy')} flow='wrap'>
        <SorteSetting
          value={orderByFields?.[0]}
          fields={orderFields}
          onChange={handleOrderChanged}
        />
      </SettingRow>
    </>
  )
}

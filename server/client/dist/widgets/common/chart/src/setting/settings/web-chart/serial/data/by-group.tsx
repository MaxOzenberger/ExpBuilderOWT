import { React, ImmutableArray, UseDataSource, Immutable, StatisticType, QueriableDataSource, DataSourceSchema } from 'jimu-core'
import { Select, hooks, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { WebChartSeries } from '../../../../../config'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { FieldSelector } from '../../../components/field-selector'
import defaultMessages from '../../../../translations/default'
import { getCategoryField, getNumericFields, getOrderByFields, getStatisticType, getObjectIdField, getSplitByValues, getSplitByField, getPageSize } from '../../../../../utils/common'
import { SorteSetting } from '../components/sort-setting'
import { createByGroupSeries, createByGroupSlpitSeries, getByFroupSchema, getByGroupOrderFields, querySplitByValues } from '../utils'
import { MaxSeries } from '../../../../../constants'
import { LabelTooltip } from '../../../components'
import { StatisticFunctions } from '../../../utils'

export interface ByGroupDataProps {
  template: ImmutableArray<WebChartSeries>
  series: ImmutableArray<WebChartSeries>
  dataSource: QueriableDataSource
  useDataSources: ImmutableArray<UseDataSource>
  onChange?: (series: ImmutableArray<WebChartSeries>) => void
  onSchemaChange?: (schema: DataSourceSchema) => void
}

//Hide split by field function in version 9.1
const SplitByFieldAbility = false

export const ByGroupData = (props: ByGroupDataProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const {
    useDataSources,
    dataSource,
    template: templateSeries,
    series: propSeries,
    onChange,
    onSchemaChange
  } = props

  const dataSourceId = useDataSources?.[0]?.dataSourceId
  const firstSerie = propSeries?.[0]

  const categoryField = getCategoryField(propSeries)
  const numericFields = getNumericFields(propSeries)
  const splitByValues = getSplitByValues(propSeries)
  const splitByField = getSplitByField(propSeries?.[0])
  const statisticType = getStatisticType(propSeries) ?? StatisticType.Sum
  const orderByFields = getOrderByFields(propSeries)
  const pageSize = getPageSize(propSeries)

  const orderFields = React.useMemo(() => getByGroupOrderFields(propSeries, dataSourceId), [dataSourceId, propSeries])
  const isNumericFieldsSingle = statisticType === StatisticType.Count || (splitByField != null && splitByField !== '')
  const splitByFieldEnabled = numericFields?.length === 1
  const hideNumericFields = numericFields?.length === 1 && statisticType === StatisticType.Count

  const handleSeriesChange = (series: ImmutableArray<WebChartSeries>): void => {
    const schema = getByFroupSchema(series, dataSourceId)
    onSchemaChange?.(schema)
    onChange?.(series)
  }

  const handleCategoryFieldChange = (fields: ImmutableArray<string>): void => {
    const categoryField = fields?.[0]
    const series = propSeries.map((serie) => {
      return serie.set('x', categoryField)
        .setIn(['query', 'groupByFieldsForStatistics'], [categoryField])
        .setIn(['query', 'orderByFields'], [`${categoryField} ASC`])
    }) as unknown as ImmutableArray<WebChartSeries>

    handleSeriesChange?.(series)
  }

  const handleStatisticTypeChange = (evt: React.MouseEvent<HTMLSelectElement>): void => {
    const statisticType = evt?.currentTarget.value as StatisticType
    let series = null
    const objectidField = getObjectIdField(dataSourceId)

    if (statisticType === StatisticType.Count) {
      const numericFields = [objectidField]
      if (!splitByField) {
        series = createByGroupSeries({ categoryField, numericFields, statisticType, orderByFields, pageSize }, firstSerie, templateSeries, dataSourceId)
      } else {
        series = createByGroupSlpitSeries({ categoryField, numericFields, statisticType, orderByFields, pageSize, splitByField, splitByValues }, firstSerie, templateSeries)
      }
    } else {
      if (!numericFields?.length) {
        series = propSeries.map((serie) => {
          return serie.setIn(['query', 'outStatistics', '0', 'statisticType'], statisticType)
        }) as unknown as ImmutableArray<WebChartSeries>
      } else {
        if (!splitByField) {
          series = createByGroupSeries({ categoryField, numericFields, statisticType, orderByFields, pageSize }, firstSerie, templateSeries, dataSourceId)
        } else {
          series = createByGroupSlpitSeries({ categoryField, numericFields, statisticType, orderByFields, pageSize, splitByField, splitByValues }, firstSerie, templateSeries)
        }
      }
    }

    handleSeriesChange?.(series)
  }

  const handleNumericFieldsChange = (fields: ImmutableArray<string>): void => {
    const numericFields = fields

    // At least one sereis
    if (!numericFields?.length) return
    //No more than `MaxSeries` series
    if (numericFields?.length > MaxSeries) return

    let series: ImmutableArray<WebChartSeries> = null
    if (!splitByField) {
      series = createByGroupSeries({ categoryField, numericFields, statisticType, orderByFields, pageSize }, firstSerie, templateSeries, dataSourceId)
    } else {
      series = createByGroupSlpitSeries({ categoryField, numericFields, statisticType, orderByFields, pageSize, splitByField, splitByValues }, firstSerie, templateSeries)
    }

    handleSeriesChange?.(series)
  }

  const handleSplitByFieldChange = async (fields: ImmutableArray<string>): Promise<void> => {
    const splitByField = fields?.[0]
    let series = propSeries
    if (splitByField) {
      let splitByValues = await querySplitByValues(dataSource, splitByField)
      //No more than `MaxSeries` series
      splitByValues = splitByValues?.slice(0, MaxSeries)
      series = createByGroupSlpitSeries({ categoryField, numericFields, statisticType, orderByFields, pageSize, splitByField, splitByValues }, firstSerie, templateSeries)
    } else {
      series = createByGroupSeries({ categoryField, numericFields, statisticType, orderByFields, pageSize }, firstSerie, templateSeries, dataSourceId)
    }
    handleSeriesChange?.(series)
  }

  const handleOrderChanged = (value: string): void => {
    const orderByFields = [value]
    const series = propSeries.map((serie) => {
      return serie.setIn(['query', 'orderByFields'], orderByFields)
    }) as unknown as ImmutableArray<WebChartSeries>
    onChange?.(series)
  }

  return (
    <>
      <SettingRow label={translate('categoryField')} flow='wrap'>
        <FieldSelector
          className='category-field-selector'
          type='category'
          useDataSources={useDataSources}
          isMultiple={false}
          fields={categoryField !== '' ? Immutable([categoryField]) : undefined}
          onChange={handleCategoryFieldChange}
        />
      </SettingRow>

      <SettingRow label={translate('statistics')} flow='wrap'>
        <Select
          size='sm'
          value={statisticType}
          onChange={handleStatisticTypeChange}
        >
          {Object.keys(StatisticType).map((st, i) => (
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
      {!hideNumericFields &&
        <>
          <SettingRow label={<LabelTooltip label={translate('numberFields')} tooltip={translate('seriesLimitedTip')} />} flow='no-wrap'></SettingRow>
          <FieldSelector
            className='numeric-fields-selector mt-2 mb-3'
            type='numeric'
            isMultiple={!isNumericFieldsSingle}
            useDataSources={useDataSources}
            fields={numericFields}
            onChange={handleNumericFieldsChange}
          />
        </>}

      {SplitByFieldAbility && <>
        <SettingRow label={<LabelTooltip label={translate('splitByField')} tooltip={translate('SplitSeriesLimitedTip')} />} flow='no-wrap'></SettingRow>
        <FieldSelector
          showEmptyItem
          disabled={!splitByFieldEnabled}
          type='category'
          className='split-by-field-selector mt-2 mb-3'
          isMultiple={false}
          useDataSources={useDataSources}
          fields={Immutable(splitByField !== '' ? [splitByField] : [])}
          onChange={handleSplitByFieldChange}
        />
      </>}
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

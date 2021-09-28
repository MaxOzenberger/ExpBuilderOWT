import { React, ImmutableArray, UseDataSource, Immutable, DataSourceSchema } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { WebChartSeries } from '../../../../../config'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { FieldSelector } from '../../../components/field-selector'
import defaultMessages from '../../../../translations/default'
import { createByFeatureSeries, getByFeatureOrderFields, getByFeatureSchema } from '../utils'
import { getCategoryField, getNumericFields, getOrderByFields, getPageSize } from '../../../../../utils/common'
import { SorteSetting } from '../components/sort-setting'
import { MaxSeries } from '../../../../../constants'
import { LabelTooltip } from '../../../components'

export interface ByFeatureDataProps {
  template: ImmutableArray<WebChartSeries>
  series: ImmutableArray<WebChartSeries>
  useDataSources: ImmutableArray<UseDataSource>
  onChange?: (series: ImmutableArray<WebChartSeries>) => void
  onSchemaChange?: (schema: DataSourceSchema) => void
}

export const ByFeatureData = (props: ByFeatureDataProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)

  const {
    useDataSources,
    template: templateSeries,
    series: propSeries,
    onChange,
    onSchemaChange
  } = props

  const dataSourceId = useDataSources?.[0]?.dataSourceId
  const firstSerie = propSeries?.[0]

  const categoryField = getCategoryField(propSeries)
  const numericFields = getNumericFields(propSeries)
  const orderByFields = getOrderByFields(propSeries)
  const orderFields = React.useMemo(() => getByFeatureOrderFields(dataSourceId), [dataSourceId])
  const pageSize = getPageSize(propSeries)


  const handleSeriesChange = (series: ImmutableArray<WebChartSeries>): void => {
    const schema = getByFeatureSchema(series, dataSourceId)
    onSchemaChange?.(schema)
    onChange?.(series)
  }

  const handleCategoryFieldChange = (fields: ImmutableArray<string>): void => {
    const categoryField = fields?.[0]
    const series = propSeries.map((serie) => {
      return serie.set('x', categoryField)
        .setIn(['query', 'outFields', '0'], categoryField)
        .setIn(['query', 'orderByFields'], [`${categoryField} ASC`])
    }) as unknown as ImmutableArray<WebChartSeries>

    handleSeriesChange?.(series)
  }

  const handleNumericFieldsChange = (fields: ImmutableArray<string>): void => {
    const numericFields = fields

    // At least one sereis
    if (!numericFields?.length) return
    //No more than `MaxSeries` series
    if (numericFields?.length > MaxSeries) return

    const series = createByFeatureSeries({ categoryField, numericFields, orderByFields, pageSize }, firstSerie, templateSeries, dataSourceId)
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

      <SettingRow label={<LabelTooltip label={translate('numberFields')} tooltip={translate('seriesLimitedTip')} />} flow='no-wrap'>
      </SettingRow>
      <FieldSelector
        className='numeric-fields-selector  mt-2 mb-3'
        type='numeric'
        isMultiple={true}
        useDataSources={useDataSources}
        fields={numericFields}
        onChange={handleNumericFieldsChange}
      />

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

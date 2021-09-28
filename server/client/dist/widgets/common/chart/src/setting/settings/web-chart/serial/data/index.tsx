import { React, ImmutableArray, UseDataSource, Immutable, QueriableDataSource, DataSourceSchema } from 'jimu-core'
import { Select, hooks, defaultMessages as jimuiDefaultMessage, NumericInput } from 'jimu-ui'
import { CategoryType, WebChartSeries } from '../../../../../config'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../../../translations/default'
import { getInitSchema, getSeireTemplate } from '../utils'
import { ByGroupData } from './by-group'
import { ByFeatureData } from './by-feature'
import { ByFieldData } from './by-field'
import { getCategoryType, getPageSize, getSplitByField } from '../../../../../utils/common'

export interface SerialDataSettingProps extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
  template: ImmutableArray<WebChartSeries>
  series: ImmutableArray<WebChartSeries>
  dataSource: QueriableDataSource
  useDataSources: ImmutableArray<UseDataSource>
  onChange?: (series: ImmutableArray<WebChartSeries>) => void
  onSchemaChange?: (schema: DataSourceSchema) => void
}

const CategoryTypes = {
  [CategoryType.ByFeature]: 'byFeature',
  [CategoryType.ByGroup]: 'byGroup',
  [CategoryType.ByField]: 'byField'
}

export const SerialDataSetting = (props: SerialDataSettingProps): React.ReactElement => {
  const translate = hooks.useTranslate(defaultMessages, jimuiDefaultMessage)
  const {
    useDataSources,
    dataSource,
    template,
    series,
    onChange,
    onSchemaChange,
    ...others
  } = props

  const categoryType = getCategoryType(series) ?? CategoryType.ByGroup
  const pageSize = getPageSize(series)
  const splitByField = getSplitByField(series?.[0])
  const showMaxCategories = categoryType !== CategoryType.ByField && !splitByField

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCategoryTypeChange = (evt: React.MouseEvent<HTMLSelectElement>): void => {
    const categoryType = evt?.currentTarget.value as CategoryType
    const template = getSeireTemplate(series?.[0], categoryType) as unknown as WebChartSeries

    const schema = getInitSchema()
    onSchemaChange?.(schema)

    onChange?.(Immutable([template]))
  }

  const handlePageSizeChange = (value: number | string): void => {
    const pageSize = typeof value === 'string' ? parseInt(value) : value

    const _series = series.map((serie) => {
      return isNaN(pageSize) ? serie.setIn(['query'], serie.query.without('pageSize')) : serie.setIn(['query', 'pageSize'], pageSize)
    }) as unknown as ImmutableArray<WebChartSeries>
    onChange?.(_series)
  }

  return (
    <div className='chart-data-setting w-100' {...others}>
      <SettingRow label={translate('categoryType')} flow='wrap'>
        <Select
          size='sm'
          value={categoryType}
          onChange={handleCategoryTypeChange}
        >
          {/* Hide `ByFeature` mode in version 9.1 */}
          {Object.keys(CategoryType).filter(f => f !== 'ByFeature').map((f, i) => (
            <option value={CategoryType[f]} key={i} className='text-truncate'>
              {translate(CategoryTypes[CategoryType[f]])}
            </option>
          ))}
        </Select>
      </SettingRow>
      <>
        {
          categoryType === CategoryType.ByFeature && <ByFeatureData
            template={template}
            series={series}
            useDataSources={useDataSources}
            onChange={onChange}
            onSchemaChange={onSchemaChange}
          ></ByFeatureData>
        }
        {
          categoryType === CategoryType.ByGroup && <ByGroupData
            template={template}
            series={series}
            dataSource={dataSource}
            useDataSources={useDataSources}
            onChange={onChange}
            onSchemaChange={onSchemaChange}
          ></ByGroupData>
        }
        {
          categoryType === CategoryType.ByField && <ByFieldData
            template={template}
            series={series}
            useDataSources={useDataSources}
            onChange={onChange}
            onSchemaChange={onSchemaChange}
          ></ByFieldData>
        }
      </>

      {showMaxCategories && <SettingRow label={translate('maxCategories')} flow='no-wrap'>
        <NumericInput
          style={{ width: '60px' }}
          value={pageSize}
          onAcceptValue={handlePageSizeChange}
          min={1}
          step={1}
          size='sm'
          showHandlers={false}
        />
      </SettingRow>}
    </div>
  )
}

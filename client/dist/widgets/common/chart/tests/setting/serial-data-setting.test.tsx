import {
  DataSourceManager,
  getAppStore,
  React,
  Immutable,
  ImmutableArray
} from 'jimu-core'
import {
  withStoreThemeIntlRender,
  mockTheme,
  WithRenderResult,
  waitForMilliseconds
} from 'jimu-for-test'
import {
  SerialDataSetting,
  SerialDataSettingProps
} from '../../src/setting/settings/web-chart/serial/data'
import { WebChartSeries } from '../../src/config'
import { fireEvent } from '@testing-library/react'
import { mockDataSource } from '../mock-data-source'
import { getNumericFields } from '../../src/utils/common'
const ColumnTemplate = require('../../src/setting/template/column.json')
const chartsConfig = require('./charts.json')
const StringFields = ['Year', 'Arrest', 'Primary_Ty']
const NumericFields = ['Beat', 'District', 'Ward']

jest.mock('jimu-ui', () => {
  return {
    ...jest.requireActual('jimu-ui') as any,
    NumericInput: props => {
      const { onAcceptValue, ...others } = props
      const [value, setValue] = React.useState()
      const handleChange = (e): void => {
        setValue(e.target.value)
      }
      const handleBlur = (): void => {
        onAcceptValue(value)
      }

      return (
        <input
          type='number'
          onChange={handleChange}
          onBlur={handleBlur}
          className='jimu-input jimu-input-sm jimu-numeric-input jimu-numeric-input-input'
          {...others}
        />
      )
    }
  }
})

jest.mock('../../src/utils/common', () => {
  return {
    ...jest.requireActual('../../src/utils/common') as any,
    getObjectIdField: () => 'FID'
  }
})

jest.mock('../../src/setting/settings/components/field-selector', () => {
  return {
    FieldSelector: ({
      className,
      type,
      isMultiple,
      fields: selectedFields,
      onChange
    }) => {
      const AllFields = type === 'category' ? StringFields : NumericFields
      const [open, setOpen] = React.useState(false)
      const handleClick = (e): void => {
        let fields = []
        const field = e.target.value
        if (isMultiple === false) {
          fields = [field]
        } else {
          if (selectedFields.includes(field) === true) {
            fields = selectedFields.filter(e => e !== field)
          } else {
            fields = selectedFields.concat([field])
          }
        }

        if (isMultiple) {
          const newField = fields.find((field) => !selectedFields.includes(field))
          const deletedField = selectedFields.find((field) => !fields.includes(field))
          onChange?.(Immutable(fields), newField, deletedField)
        } else {
          const newField = fields?.[0]
          const deletedField = selectedFields?.[0]
          onChange?.(Immutable(fields), newField, deletedField)
        }

        setOpen(false)
      }

      return (
        <div className={`mock-field-selector ${className as string}`}>
          <div className='selected-fields' onClick={() => setOpen(!open)}>
            {isMultiple != null ? (
              selectedFields?.map((field, idx) => (
                <div key={idx} className='selected-field-item'>
                  {field}
                </div>
              ))
            ) : (
              <div className='selected-field-item'>{selectedFields?.[0]}</div>
            )}
          </div>
          {open && (
            <div>
              {AllFields.map((field, idx) => (
                <option
                  key={idx}
                  className='field-selector-item'
                  value={field}
                  onClick={handleClick}
                >
                  {field}
                </option>
              ))}
            </div>
          )}
        </div>
      )
    }
  }
})

mockDataSource()

const SerialDatatestId = 'serial-data-setting'

const Container = (props: SerialDataSettingProps): React.ReactElement => {
  const { series: propSeries, onChange, ...others } = props
  const [series, setSeries] = React.useState<ImmutableArray<WebChartSeries>>(
    propSeries
  )
  const handleChange = (series): void => {
    onChange?.(series)
    setSeries(series)
  }

  return (
    <SerialDataSetting
      data-testid={SerialDatatestId}
      {...others}
      series={series}
      onChange={handleChange}
    />
  )
}

describe('<SerialDataSetting />', () => {
  let useDataSources = null
  let render: WithRenderResult = null
  let dataSource = null
  describe('<SerialDataSetting />', () => {
    beforeAll(async done => {
      useDataSources = [
        {
          dataSourceId: 'ds1',
          mainDataSourceId: 'ds1'
        }
      ]
      try {
        dataSource = await DataSourceManager.getInstance().createDataSourceByUseDataSource(
          useDataSources[0]
        )
      } catch (err) {
        console.log(err)
      }
      render = withStoreThemeIntlRender(getAppStore(), mockTheme as any)
      done()
    })

    afterAll(() => {
      if (dataSource != null) {
        dataSource = DataSourceManager.getInstance().destroyDataSource(
          dataSource.id
        )
      }
    })

    it('should render ok', () => {
      const series = ColumnTemplate.series
      const props = {
        template: ColumnTemplate,
        series,
        useDataSources,
        dataSource
      }
      const testId = 'serial-data-setting-1'
      const { queryByTestId } = render(
        <SerialDataSetting data-testid={testId} {...props} />
      )
      expect(queryByTestId(testId)).toHaveClass('chart-data-setting')
    })

    it('should render by series', () => {
      const series = chartsConfig[1].series
      const props = {
        template: ColumnTemplate,
        series,
        useDataSources,
        dataSource
      }
      const { getByText, getBySelector } = render(
        <Container {...props} />
      )

      expect(getByText('By group')).toBeInTheDocument()
      expect(
        getBySelector('.category-field-selector .selected-field-item')
      ).toHaveTextContent('Year')
      expect(getByText('SUM')).toBeInTheDocument()
      expect(getByText('District')).toBeInTheDocument()
      expect(getByText('Ward')).toBeInTheDocument()

      expect(
        getBySelector('.sort-select .dropdown-button-content')
      ).toHaveTextContent('Year')
    })

    it('should clean ui when change category type', () => {
      const series = Immutable(
        chartsConfig[1]
      ).series
      const onChange = jest.fn()
      const props = {
        template: ColumnTemplate,
        series,
        useDataSources,
        dataSource,
        onChange
      }
      const { getByText, queryByText, queryBySelector, getBySelector } = render(
        <Container {...props} />
      )

      expect(getByText('By group')).toBeInTheDocument()
      expect(getBySelector('.category-field-selector .selected-field-item')).toHaveTextContent('Year')
      expect(getByText('SUM')).toBeInTheDocument()
      expect(getByText('District')).toBeInTheDocument()
      expect(getByText('Ward')).toBeInTheDocument()
      expect(getBySelector('.sort-select .dropdown-button-content')).toHaveTextContent('Year')

      fireEvent.click(getByText('By group'))
      // fireEvent.click(getByText('By field'))
      // const ret = getSeireTemplate(series[0], CategoryType.ByFeature)
      // expect(onChange).toHaveBeenCalledWith([ret])

      // expect(getByText('By feature')).toBeInTheDocument()
      // expect(queryBySelector('.category-field-selector .selected-field-item')).not.toHaveTextContent('Year')
      // expect(queryByText('SUM')).not.toBeInTheDocument()
      // expect(queryByText('District')).not.toBeInTheDocument()
      // expect(queryByText('Ward')).not.toBeInTheDocument()
      // expect(getBySelector('.sort-select .dropdown-button-content')).not.toHaveTextContent('Year')

      // fireEvent.click(getByText('By feature'))
      fireEvent.click(getByText('By field'))

      expect(getByText('By field')).toBeInTheDocument()
      expect(queryBySelector('.category-field-selector')).not.toBeInTheDocument()
      expect(queryByText('SUM')).toBeInTheDocument()
    })

    it('test category field change', () => {
      const series = Immutable(
        chartsConfig[1]
      ).series
      const props = {
        template: ColumnTemplate,
        series,
        useDataSources,
        dataSource
      }
      const { getByText, getBySelector } = render(
        <Container {...props} />
      )

      fireEvent.click(getBySelector('.category-field-selector .selected-field-item'))
      fireEvent.click(getByText(StringFields[1]))

      expect(getBySelector('.category-field-selector .selected-field-item')).toHaveTextContent(StringFields[1])
      expect(getByText('SUM')).toBeInTheDocument()
      expect(getByText('District')).toBeInTheDocument()
      expect(getByText('Ward')).toBeInTheDocument()
      expect(getBySelector('.sort-select .dropdown-button-content')).toHaveTextContent(StringFields[1])
    })

    it('test statistics type change', () => {
      const series = Immutable(
        chartsConfig[1]
      ).series
      const onChange = jest.fn()
      const props = { template: ColumnTemplate, series, useDataSources, dataSource, onChange }
      const { getByText, getBySelector, queryBySelector } = render(
        <Container {...props} />
      )

      fireEvent.click(getByText('SUM'))
      fireEvent.click(getByText('MAX'))
      expect(
        getBySelector('.category-field-selector .selected-field-item')
      ).toHaveTextContent('Year')
      expect(getByText('MAX')).toBeInTheDocument()
      expect(getByText('District')).toBeInTheDocument()
      expect(getByText('Ward')).toBeInTheDocument()
      expect(
        getBySelector('.sort-select .dropdown-button-content')
      ).toHaveTextContent('Year')

      onChange.mockClear()
      fireEvent.click(getByText('MAX'))
      fireEvent.click(getByText('COUNT'))
      expect(
        getBySelector('.category-field-selector .selected-field-item')
      ).toHaveTextContent('Year')
      expect(getByText('COUNT')).toBeInTheDocument()
      expect(queryBySelector('.numeric-fields-selector')).not.toBeInTheDocument()
      expect(
        getBySelector('.sort-select .dropdown-button-content')
      ).toHaveTextContent('Year')
      expect(getNumericFields(onChange.mock.calls[0][0])).toEqual(['FID'])
    })

    it('test numeric fields change', async () => {
      const series = Immutable(
        chartsConfig[1]
      ).series
      const props = { template: ColumnTemplate, series, useDataSources, dataSource }
      const {
        getByText,
        queryByText,
        getBySelector,
        getAllBySelector
      } = render(<Container {...props} />)

      fireEvent.click(getBySelector('.numeric-fields-selector .selected-fields'))
      fireEvent.click(getAllBySelector('.numeric-fields-selector .field-selector-item')[1])

      expect(getBySelector('.category-field-selector .selected-field-item')).toHaveTextContent('Year')
      expect(getByText('SUM')).toBeInTheDocument()
      expect(queryByText('District')).not.toBeInTheDocument()
      expect(getByText('Ward')).toBeInTheDocument()
      expect(getBySelector('.sort-select .dropdown-button-content')).toHaveTextContent('Year')

      fireEvent.click(getBySelector('.numeric-fields-selector .selected-fields'))
      fireEvent.click(getAllBySelector('.numeric-fields-selector .field-selector-item')[0])

      await waitForMilliseconds(100)

      expect(
        getBySelector('.category-field-selector .selected-field-item')
      ).toHaveTextContent('Year')

      expect(getByText('SUM')).toBeInTheDocument()
      expect(getByText(NumericFields[0])).toBeInTheDocument()
      expect(getByText('Ward')).toBeInTheDocument()
      expect(
        getBySelector('.sort-select .dropdown-button-content')
      ).toHaveTextContent('Year')
    })

    it.skip('test split by field change', async () => {
      const series = Immutable(
        chartsConfig[1]
      ).series
      const onChange = jest.fn()
      const props = {
        template: ColumnTemplate,
        series,
        useDataSources,
        dataSource,
        onChange
      }
      const { getByText, getBySelector, getAllBySelector } = render(
        <Container {...props} />
      )

      fireEvent.click(
        getBySelector('.numeric-fields-selector .selected-fields')
      )
      // Unselect numberic fields: NumericFields[1]
      fireEvent.click(
        getAllBySelector('.numeric-fields-selector .field-selector-item')[1]
      )
      await waitForMilliseconds()
      onChange.mockClear()

      // Select split field: StringFields[2]
      fireEvent.click(
        getBySelector('.split-by-field-selector .selected-fields')
      )

      fireEvent.click(
        getAllBySelector('.split-by-field-selector .field-selector-item')[2]
      )
      await waitForMilliseconds(1000)

      expect(
        getBySelector('.category-field-selector .selected-field-item')
      ).toHaveTextContent('Year')
      expect(getByText('SUM')).toBeInTheDocument()
      expect(getByText('Ward')).toBeInTheDocument()
      expect(getByText(StringFields[2])).toBeInTheDocument()
      expect(onChange.mock.calls[0][0].length).toBe(3)
    })

    it('test order by fields change', async () => {
      const onChange = jest.fn()
      const series = Immutable(
        chartsConfig[1]
      ).series
      const props = {
        template: ColumnTemplate,
        series,
        useDataSources,
        dataSource,
        onChange
      }
      const {
        getByText,
        getAllByText,
        queryByText,
        getBySelector,
        getAllBySelector
      } = render(<Container {...props} />)

      fireEvent.click(getBySelector('.sort-select .jimu-dropdown-button'))
      fireEvent.click(getAllBySelector('.dropdown-menu .dropdown-item')[1])
      expect(queryByText('Year')).toBeInTheDocument()
      expect(getByText('SUM')).toBeInTheDocument()
      expect(getAllByText('District')).toHaveLength(2)
      expect(getByText('Ward')).toBeInTheDocument()
      await waitForMilliseconds()
      expect(onChange.mock.calls[0][0][0].query.orderByFields).toEqual([
        'sb453 ASC'
      ])
      onChange.mockClear()
      fireEvent.click(getBySelector('.sort-select .jimu-dropdown-button'))
      fireEvent.click(getAllBySelector('.dropdown-menu .dropdown-item')[0])
      await waitForMilliseconds()
      expect(onChange.mock.calls[0][0][0].query.orderByFields).toEqual([
        'Year ASC'
      ])
    })

    it('test page size change', async () => {
      const onChange = jest.fn()
      let series = Immutable(chartsConfig[1]).series
      series = series.map((serie) => {
        return serie.setIn(['query', 'pageSize'], '99')
      }) as unknown as ImmutableArray<WebChartSeries>

      const props = { template: ColumnTemplate, series, useDataSources, dataSource, onChange }
      const { getByText, getByDisplayValue, getBySelector } = render(<Container {...props} />)

      const input = getByDisplayValue('99')
      fireEvent.input(input, { target: { value: '10' } })
      fireEvent.blur(input)
      expect(
        getBySelector('.category-field-selector .selected-field-item')
      ).toHaveTextContent('Year')
      expect(getByText('SUM')).toBeInTheDocument()
      expect(getByText('District')).toBeInTheDocument()
      expect(getByText('Ward')).toBeInTheDocument()
      expect(getByDisplayValue('10')).toBeInTheDocument()
      await waitForMilliseconds()
      expect(onChange.mock.calls[0][0][0].query.pageSize).toBe(10)
    })
  })
})

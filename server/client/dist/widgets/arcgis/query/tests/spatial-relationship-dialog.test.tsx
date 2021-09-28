import { fireEvent } from '@testing-library/react'
import { React, getAppStore, appActions } from 'jimu-core'
import { mockTheme, getInitState, widgetRender } from 'jimu-for-test'
import { SpatialRelation } from '../src/config'
import { SpatialRelationDialog } from '../src/setting/components/spatial-relationship-dialog'

const initState = getInitState().merge({ appConfig: {} })
getAppStore().dispatch(appActions.updateStoreState(initState))

describe('<SpatialRelationDialog />', () => {
  const mockGetI18nMessage = jest.fn((id) => id)
  const dummySelectedOptions = [SpatialRelation.Intersect]
  it('renders without crash', () => {
    const mockOnCancel = jest.fn()
    const mockOnChange = jest.fn()
    const renderContent = (
      <SpatialRelationDialog
        getI18nMessage={mockGetI18nMessage}
        selectedOptions={dummySelectedOptions}
        onChange={mockOnChange}
        onCancel={mockOnCancel}
      />
    )
    const { container } = widgetRender(getAppStore(), mockTheme as any)(renderContent)
    expect(container.firstChild).not.toBeNull()
  })
  it('onCancel is called when clicking Cancel', () => {
    const mockOnCancel = jest.fn()
    const mockOnChange = jest.fn()
    const renderContent = (
      <SpatialRelationDialog
        getI18nMessage={mockGetI18nMessage}
        selectedOptions={dummySelectedOptions}
        onChange={mockOnChange}
        onCancel={mockOnCancel}
      />
    )
    const { queryByText } = widgetRender(getAppStore(), mockTheme as any)(renderContent)
    fireEvent.click(queryByText('cancel'))
    expect(mockOnCancel).toHaveBeenCalledTimes(1)
  })
  it('onChange is not called when clicking OK without anything selected', () => {
    const mockOnCancel = jest.fn()
    const mockOnChange = jest.fn()
    const renderContent = (
      <SpatialRelationDialog
        getI18nMessage={mockGetI18nMessage}
        selectedOptions={[]}
        onChange={mockOnChange}
        onCancel={mockOnCancel}
      />
    )
    const { queryByText } = widgetRender(getAppStore(), mockTheme as any)(renderContent)
    fireEvent.click(queryByText('ok'))
    expect(mockOnChange).toHaveBeenCalledTimes(0)
  })
  it('onChange is called with selected options when clicking OK', () => {
    const mockOnCancel = jest.fn()
    const mockOnChange = jest.fn()
    const renderContent = (
      <SpatialRelationDialog
        getI18nMessage={mockGetI18nMessage}
        selectedOptions={[]}
        onChange={mockOnChange}
        onCancel={mockOnCancel}
      />
    )
    const { container, queryByText } = widgetRender(getAppStore(), mockTheme as any)(renderContent)
    const spatialRelationTypes = Object.keys(SpatialRelation)
    fireEvent.click(container.querySelector('thead input[type=checkbox]'))
    fireEvent.click(queryByText('ok'))
    expect(mockOnChange).toHaveBeenCalledWith(spatialRelationTypes)
    fireEvent.click(container.querySelector('thead input[type=checkbox]'))
    fireEvent.click(container.querySelectorAll('tbody input[type=checkbox]')[spatialRelationTypes.indexOf(SpatialRelation.Cross)])
    fireEvent.click(queryByText('ok'))
    expect(mockOnChange).toHaveBeenCalledWith([SpatialRelation.Cross])
  })
})

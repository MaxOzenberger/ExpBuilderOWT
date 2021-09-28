/** @jsx jsx */
import { React, jsx, IntlShape, DataSource } from 'jimu-core'
import { SpatialFilterType } from '../config'
import { EntityStatusType } from './common-components'

/**
 * Toggle items in an array
 */
export const toggleItemInArray = (item, items = []) => items.includes(item) ? items.filter(i => i !== item) : [...items, item]
/**
 * Test conditions by order and execute the action of the first meeting condition
 */
export const executeScenario = (scenarios, { test = 'testScenario', action = 'actionScenario' } = {}) => (s => s?.[action]?.(s))(scenarios.find(s => s?.[test]?.(s)))

export interface DataSourceMap {
  [dataSourceId: string]: DataSource
}

export interface ViewBlock<T> {
  // Identical id
  viewBlockKey: string
  // Type that can be used in scenario determination
  viewBlockType: string
  // Stores data that may be updated in ViewBlock's lifecycle
  viewBlockState?: any
  // Gets ViewBlock's associated data that can be used by corresponding scenario
  getViewBlockData?: (data: ViewBlockComponentProps<T>) => any
  // Gets title content to be rendered
  getViewBlockTitle?: (data: ViewBlockComponentProps<T>) => any
  // Determine if the component can be rendered
  isViewBlockRenderable?: (data: ViewBlockComponentProps<T>) => boolean
  // Determine if the rendered content is visible (content still occupies place)
  isViewBlockHidden?: (data: ViewBlockComponentProps<T>) => boolean
  // Determine if the rendered content is collapsed (content occupies no place)
  isViewBlockCollapsed?: (data: ViewBlockComponentProps<T>) => boolean
  // Function that can be used to override the rendering content
  renderViewBlock?: (data: ViewBlockComponentProps<T>) => any
  // child ViewBlocks
  subViewBlocks?: Array<ViewBlock<T>>
}
export type ViewBlockComponentType<T> = React.FunctionComponent<ViewBlockComponentProps<T>>
export interface ViewBlockScenarioType<T> {
  // Function to check if this scenario should be rendered
  testScenario: (normalizedProps: ViewBlockComponentProps<T>) => boolean
  // Funtion to render the scenario
  renderScenario: (normalizedProps: ViewBlockComponentProps<T>) => any
}
export interface ViewBlockComponentProps<T> {
  // Current ViewBlock
  currentViewBlock: ViewBlock<T>
  // Parent ViewBlock of current ViewBlock
  parentViewBlock?: ViewBlock<T>
  // Top level parent ViewBlock of current ViewBlock
  topViewBlock?: ViewBlock<T>
  // Component's associated data that can be used by corresponding scenario
  associatedData?: T
  /* Returns the supported scenarios */
  getViewBlockScenarios?: (normalizedProps: ViewBlockComponentProps<T>) => Array<ViewBlockScenarioType<T>>
}

/**
 * A component that renders content provided by ViewBlock and corresponding scenario
 */
export const ViewBlockComponent = <T,>(props: ViewBlockComponentProps<T>) => {
  const normalizedProps: ViewBlockComponentProps<T> = {
    ...props,
    currentViewBlock: {
      viewBlockState: {},
      getViewBlockData: () => ({}),
      getViewBlockTitle: () => null,
      isViewBlockRenderable: () => true,
      isViewBlockHidden: () => false,
      isViewBlockCollapsed: () => false,
      renderViewBlock: () => null,
      ...props.currentViewBlock
    }
  }
  const scenarios = [
    {
      testScenario: () => !normalizedProps.currentViewBlock.isViewBlockRenderable(normalizedProps),
      renderScenario: () => null
    },
    ...(props.getViewBlockScenarios?.(normalizedProps) || []),
    {
      testScenario: () => true,
      renderScenario: () => null
    }
  ]
  let element = executeScenario(scenarios, { action: 'renderScenario' })
  if (element && normalizedProps.currentViewBlock.isViewBlockHidden(normalizedProps)) {
    element = React.createElement(element.type, { ...element.props, style: { visibility: 'hidden' } })
  }
  if (element && normalizedProps.currentViewBlock.isViewBlockCollapsed(normalizedProps)) {
    element = React.createElement(element.type, { ...element.props, style: { display: 'none' } })
  }
  return element
}

/**
 * Renders the childrens of a ViewBlock
 */
export const renderViewBlockComponentChildren = <T,>(normalizedProps: ViewBlockComponentProps<T>): any[] => {
  const subViewBlocks = normalizedProps?.currentViewBlock?.subViewBlocks
  return (subViewBlocks || []).map((subViewBlock, x) => (
    subViewBlock &&
      <ViewBlockComponent
        key={x}
        {...normalizedProps}
        parentViewBlock={normalizedProps.currentViewBlock}
        currentViewBlock={subViewBlock}
      />
  ))
}

export type GetI18nMessageType = (id: string, options?: {messages?: any, values?: any}) => string
/**
 * A factory to create a function of getting i18n message
 */
export function createGetI18nMessage (options: {intl: IntlShape, defaultMessages?: any}) {
  const { intl, defaultMessages = {} } = options || {}
  const getI18nMessage: GetI18nMessageType = (id, options) => {
    const { messages, values } = options || {}
    return intl.formatMessage({ id, defaultMessage: (messages || defaultMessages)[id] }, values)
  }
  return getI18nMessage
}

/**
 * A factory to create a function of getting the corrected value of an object property
 */
export function createGetItemValueForObject (options) {
  const { getFeatureScenarios = () => [] } = options || {}
  const getItemValueForObject = (data, corrected = true) => {
    const [dataMap = {}, dataKey] = data
    const scenarios = [
      ...(corrected ? getFeatureScenarios(data, getItemValueForObject) : []),
      {
        testScenario: () => true,
        actionScenario: () => {
          return dataMap[dataKey]
        }
      }
    ]
    return executeScenario(scenarios)
  }
  return getItemValueForObject
}

/**
 * Check if a map widget is required for the given spatial filter type
 */
export const isMapRequiredForSpatialFilterType = (type: SpatialFilterType) => {
  return [SpatialFilterType.CurrentMapExtent, SpatialFilterType.InteractiveDrawMode].includes(type)
}

/**
 * Gets the corrected value of a query item
 */
export const getItemValueForQueryItem = createGetItemValueForObject({
  getFeatureScenarios: ([queryItem = {}, queryItemOptionKey], getItemValueForObject) => {
    return [{
      testScenario: () => queryItemOptionKey === 'spatialFilterTypes',
      actionScenario: () => {
        const value = (queryItem[queryItemOptionKey] || []).filter(type =>
          getItemValueForObject([queryItem, 'spatialMapWidgetIds']).length ? true
            : !isMapRequiredForSpatialFilterType(type)
        )
        return value
      }
    }, {
      testScenario: () => queryItemOptionKey === 'spatialRelationEnableSelectTool',
      actionScenario: () => {
        const value = getItemValueForObject([queryItem, 'spatialMapWidgetIds'])?.length ? queryItem[queryItemOptionKey] : false
        return value
      }
    }, {
      testScenario: () => ['spatialInteractiveBufferDistance', 'spatialInteractiveBufferUnit'].includes(queryItemOptionKey),
      actionScenario: () => {
        const value = getItemValueForObject([queryItem, 'spatialInteractiveEnableBuffer']) ? queryItem[queryItemOptionKey] : undefined
        return value
      }
    }, {
      testScenario: () => ['spatialRelationBufferDistance', 'spatialRelationBufferUnit'].includes(queryItemOptionKey),
      actionScenario: () => {
        const value = getItemValueForObject([queryItem, 'spatialRelationEnableBuffer']) ? queryItem[queryItemOptionKey] : undefined
        return value
      }
    }]
  }
})

export const convertGeometriesForQuery = (geometries, { Multipoint, Polyline, Polygon, geometryEngine }) => {
  function combineGeometries () {
    const combineGeometry = (type, geos) => {
      if (type === 'point') {
        // geos is an array of point or multipoint
        const mpJson = {
          points: geos.reduce((currentPoints, geo) => currentPoints.concat.apply(currentPoints, geo.type === 'point' ? [[[geo.x, geo.y]]] : [geo.points]), []),
          spatialReference: geos[0].spatialReference.toJSON()
        }
        const multipoint = new Multipoint(mpJson)
        return multipoint
      } else if (type === 'polyline') {
        // geos is an array of polyline
        const polylineJson = {
          paths: geos.reduce((currentPaths, geo) => currentPaths.concat(geo.paths), []),
          spatialReference: geos[0].spatialReference.toJSON()
        }
        const polyline = new Polyline(polylineJson)
        return polyline
      } else if (type === 'polygon') {
        // geos is an array of extent
        const polygonJson = {
          rings: geos.reduce((currentRings, geo) => {
            const plg = Polygon.fromExtent(geo)
            return currentRings.concat.apply(currentRings, [plg.rings])
          }, []),
          spatialReference: geos[0].spatialReference.toJSON()
        }
        const polygon = new Polygon(polygonJson)
        return polygon
      }
    }

    let geometry = null
    if (currentGeometries.length === 1) {
      geometry = currentGeometries[0]
    } else {
      const geometryType = currentGeometries.reduce((currentGeometryType, geometry, x, currentGeometries) => {
        if (x > 0 && !currentGeometryType) return null
        const getType = (testType) => testType === 'multipoint' ? 'point' : testType === 'extent' ? 'polygon' : testType
        let geometryType = getType(geometry.type)
        if (x > 0) {
          if (currentGeometryType != geometryType || !geometry.spatialReference.equals(currentGeometries[x - 1].spatialReference)) geometryType = null
        }
        return geometryType || null
      }, null)
      if (geometryType) {
        geometry = combineGeometry(geometryType, currentGeometries)
      }
    }
    return geometry
  }

  const currentGeometries = geometries ?? []
  if (currentGeometries.length > 0) {
    const combinedFeatureGeometry = currentGeometries[0].type === 'polygon' ? geometryEngine.union(currentGeometries) : combineGeometries()
    return combinedFeatureGeometry?.toJSON?.()
  }
}

export const addTolerance = (geometry, view, { geometryEngine }) => {
  // Add tolerance of 10px based on current map scale, use fixed dpi 96
  const resolution = view.scale * 2.54 / 9600 // meters of each pixel
  return geometryEngine.buffer(geometry, 10 * resolution, 'meters')
}

export interface DataSourceWithAdditionalStatusType {
  status: EntityStatusType
  dataSource: DataSource
}

export const getDataSourceWithAdditionalStatusById = (dss: DataSourceMap, dataSourceId: string): DataSourceWithAdditionalStatusType => {
  if (!dataSourceId) {
    return {
      status: EntityStatusType.Error,
      dataSource: null
    }
  }
  const dataSource = dss?.[dataSourceId]
  return {
    status: dataSource ? EntityStatusType.None : EntityStatusType.Loading,
    dataSource: dataSource
  }
}

import { ImmutableObject, ImmutableArray, SqlExpression, UseDataSource, IconResult, OrderByOption } from 'jimu-core'
import { Size } from 'jimu-ui'

export enum CreateToolType {
  Point = 'Point',
  Polyline = 'Polyline',
  Polygon = 'Polygon',
  Rectangle = 'Rectangle',
  Circle = 'Circle'
}

export const getSketchToolInfoMap = () => ({
  [CreateToolType.Point]: { drawToolName: 'point', esriClassName: 'esri-icon-map-pin', toolIndex: 4 },
  [CreateToolType.Polyline]: { drawToolName: 'polyline', esriClassName: 'esri-icon-polyline', toolIndex: 3 },
  [CreateToolType.Polygon]: { drawToolName: 'polygon', esriClassName: 'esri-icon-polygon', toolIndex: 1 },
  [CreateToolType.Rectangle]: { drawToolName: 'rectangle', esriClassName: 'esri-icon-checkbox-unchecked', toolIndex: 0 },
  [CreateToolType.Circle]: { drawToolName: 'circle', esriClassName: 'esri-icon-radio-unchecked', toolIndex: 2 }
})

export enum SelectionType {
  NewSelection = 'NEW_SELECTION',
  AddToSelection = 'ADD_TO_CURRENT_SELECTION',
  RemoveFromSelection = 'REMOVE_FROM_CURRENT_SELECTION',
  SubsetSelection = 'SUBSET_FROM_CURRENT_SELECTION',
  SwitchSelction = 'SWITCH_CURRENT_SELECTION',
}

export interface Field {
  name: string
  alias?: string
  label?: string
}

export enum QueryArrangeType {
  Block = 'BLOCK',
  Inline = 'INLINE',
  Popper = 'POPPER',
}

export enum SpatialFilterType {
  CurrentMapExtent = 'CurrentMapExtent',
  InteractiveDrawMode = 'InteractiveDrawMode',
  // SpatialRelationship = 'SpatialRelationship',
  ReturnAllFeatures = 'ReturnAllFeatures',
}

export enum SpatialRelation {
  Intersect = 'Intersect',
  Contain = 'Contain',
  Cross = 'Cross',
  EnvelopeIntersect = 'EnvelopeIntersect',
  IndexIntersect = 'IndexIntersect',
  Overlap = 'Overlap',
  Touch = 'Touch',
  Within = 'Within',
}

export const getSpatialRelationInfoMap = () => ({ // "intersects" | "contains" | "crosses" | "disjoint" | "envelope-intersects" | "index-intersects" | "overlaps" | "touches" | "within" | "relation"
  [SpatialRelation.Intersect]: 'intersects',
  [SpatialRelation.Contain]: 'contains',
  [SpatialRelation.Cross]: 'crosses',
  [SpatialRelation.EnvelopeIntersect]: 'envelope-intersects',
  [SpatialRelation.IndexIntersect]: 'index-intersects',
  [SpatialRelation.Overlap]: 'overlaps',
  [SpatialRelation.Touch]: 'touches',
  [SpatialRelation.Within]: 'within'
})

export enum UnitType {
  Miles = 'Miles',
  Kilometers = 'Kilometers',
  Feet = 'Feet',
  Meters = 'Meters',
  Yards = 'Yards',
  NauticalMiles = 'NauticalMiles',
}

export const getUnitInfoMap = () => ({ // "feet" | "kilometers" | "meters" | "miles" | "nautical-miles" | "yards"
  [UnitType.Miles]: 'miles',
  [UnitType.Kilometers]: 'kilometers',
  [UnitType.Feet]: 'feet',
  [UnitType.Meters]: 'meters',
  [UnitType.Yards]: 'yards',
  [UnitType.NauticalMiles]: 'nauticalMiles'
})

export enum ListDirection {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}

export enum PagingType {
  MultiPage = 'MultiPage',
  LazyLoad = 'LazyLoad',
}

export enum FieldsType {
  PopupSetting = 'PopupSetting',
  // SelectAttributes = 'SelectAttributes',
}

export enum SortDirection {
  Asc = 'Asc',
  Desc = 'Desc',
}

export interface SortOption {
  name: string
  direction: SortDirection
}

export enum SymbolType {
  DefaultSymbol = 'DefaultSymbol',
  CustomSymbol = 'CustomSymbol',
}

// eslint-disable-next-line  @typescript-eslint/naming-convention
export interface QueryItemType {
  configId: string
  icon?: IconResult
  name?: string
  displayLabel?: boolean
  useDataSource?: UseDataSource
  outputDataSourceId?: string
  useAttributeFilter?: boolean
  useSpatialFilter?: boolean
  attributeFilterLabel?: string
  spatialFilterLabel?: string
  resultsLabel?: string
  sqlExprObj?: SqlExpression
  spatialMapWidgetIds?: string[]
  spatialFilterTypes?: SpatialFilterType[]
  spatialInteractiveCreateToolTypes?: CreateToolType[]
  spatialInteractiveEnableBuffer?: boolean
  spatialInteractiveBufferDistance?: number
  spatialInteractiveBufferUnit?: UnitType
  spatialRelations?: SpatialRelation[]
  spatialRelationUseDataSources?: UseDataSource[]
  spatialRelationEnableSelectTool?: boolean
  spatialRelationEnableBuffer?: boolean
  spatialRelationBufferDistance?: number
  spatialRelationBufferUnit?: UnitType
  resultListDirection?: ListDirection
  resultPagingStyle?: PagingType
  // resultFieldsType?: FieldsType;
  resultSymbolType?: SymbolType
  resultCustomSymbol?: any
  resultAllowChangeSymbol?: boolean
  allowExport?: boolean
  sortOptions?: OrderByOption[]
  itemSizeMap?: {
    arrangementHorizontalPopper?: SizeMap
  }
}

export interface SizeMap {
  minSize?: Size
  defaultSize?: Size
}

export interface SettingConfig {
  queryItems?: ImmutableArray<QueryItemType>
  arrangeType: QueryArrangeType
  arrangeWrap?: boolean
  sizeMap?: {
    arrangementIconPopper?: SizeMap
  }
}

export type IMConfig = ImmutableObject<SettingConfig>

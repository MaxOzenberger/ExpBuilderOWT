/** @jsx jsx */
import { IFieldInfo } from '@esri/arcgis-rest-types'
import { DataRecord, ImmutableObject, IMSqlExpression, IntlShape, QueriableDataSource, ServiceDefinition } from 'jimu-core'
import { FeatureLayerDataSource, JimuMapView } from 'jimu-arcgis'
import { CreateToolType, getSketchToolInfoMap, getSpatialRelationInfoMap, getUnitInfoMap, QueryItemType, SpatialFilterType, SpatialRelation } from '../config'
import { EntityNoteType, EntityStatusType } from '../common/common-components'
import { DataSourceWithAdditionalStatusType } from '../common/utils'

export interface JimuMapViewMapType {
  [widgetId: string]: JimuMapView
}

export interface SpatialInteractiveDataType {
  isReady: boolean
  layer: any
  graphic: any
}

export interface RuntimeQueryDataType {
  queryResult?: {
    records?: DataRecord[]
    fields?: string[]
  }
  resultCount?: number
  fieldInfos?: IFieldInfo[]
  layerDefinition?: ServiceDefinition
  showOnMapDataId?: string
  intl?: IntlShape
  ds?: QueriableDataSource
  symbolJson?: any
  esriModuleMap?: { [moduleName: string]: any }
}

export interface RuntimeQueryStateType {
  dsRemoved?: boolean
  spatialFilterType?: SpatialFilterType
  spatialInteractiveCreateToolType?: CreateToolType
  spatialInteractiveData: SpatialInteractiveDataType
  spatialRelation: SpatialRelation
  spatialRelLayerIndex: number
  spatialRelLayerGeometries: any[]
  isLoadingRelLayerGeometries: boolean
  attributeFilterSqlExprObj: IMSqlExpression
  queryData: RuntimeQueryDataType
  resultStatus: '' | 'apply' | 'cleared'
  queryItem: QueryItemType | ImmutableObject<QueryItemType>
  queryItemIndex: number
  refQueryItemButton: HTMLElement
  getQueryItemValue: (key: string) => any
}

export interface RuntimeMainAssociatedDataMapType {
  currentQueryStates: RuntimeQueryStateType[]
  currentSelectedQueryStateIndex: number
  currentQueryState: RuntimeQueryStateType
  currentQueryDsWithAdditionalStatus: DataSourceWithAdditionalStatusType
  currentQueryDs: FeatureLayerDataSource
  currentOriginDs: FeatureLayerDataSource
  currentJimuMapView: JimuMapView
  currentDsEntityStatus: EntityStatusType
  getCurrentDsEntityNote: () => EntityNoteType
  isCurrentSpatialFilterDisabled: () => boolean
}

export const getWidgetRuntimeDataMap = () => ({
  iconMap: {
    iconQuery: require('./assets/icons/icon.svg'),
    iconWarning: require('jimu-ui/lib/icons/warning-16.svg'),
    iconError: require('jimu-ui/lib/icons/exclamation-16.svg'),
    arrowNavBack: require('jimu-ui/lib/icons/direction-left.svg'),
    arrowRight: require('jimu-ui/lib/icons/arrow-right-8.svg'),
    toolDelete: require('jimu-ui/lib/icons/tool-delete.svg')
  },
  sketchToolInfoMap: getSketchToolInfoMap(),
  unitInfoMap: getUnitInfoMap(),
  spatialRelationInfoMap: getSpatialRelationInfoMap()
})

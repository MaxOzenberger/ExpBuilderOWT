/** @jsx jsx */
import { getSketchToolInfoMap, QueryArrangeType } from '../config'
import Setting from './setting'

export type ValueManSetByKeyType = [string, any, { [optionKey: string]: any }?] // represents: [key, value, options]
export type ValueManSetByIndexType = [number, any, { [optionKey: string]: any }?] // represents: [index, value, options]

export interface ValueManType {
  getByIndex: (index: number) => any
  setByIndices: (...indexValuePairs: ValueManSetByIndexType[]) => void
}

export interface SettingMainAssociatedDataMapType {
  targetComponent: Setting
}

export const getWidgetSettingDataMap = () => {
  const iconMap = {
    iconQuery: require('../../icon.svg'),
    iconTipBulb: require('./assets/icons/tip-bulb.svg'),
    iconClose: require('jimu-ui/lib/icons/close.svg'),
    iconClose12: require('jimu-ui/lib/icons/close-12.svg'),
    iconAdd: require('jimu-ui/lib/icons/add-16.svg'),
    iconClose16: require('jimu-ui/lib/icons/close-16.svg'),
    iconSetting: require('jimu-ui/lib/icons/settings-12.svg'),
    arrowDown: require('jimu-ui/lib/icons/arrow-down-8.svg'),
    arrowUp: require('jimu-ui/lib/icons/arrow-up-8.svg'),
    arrowLeft: require('jimu-ui/lib/icons/direction-left.svg'),
    arrowRight: require('jimu-ui/lib/icons/arrow-right-8.svg'),
    iconEmpty: require('jimu-ui/lib/icons/click-outlined-48.svg')
  }
  return {
    iconMap,
    iconPropMap: {
      defaultIconResult: {
        svg: iconMap.iconQuery,
        properties: {
          color: '',
          filename: 'filter-16.svg',
          originalName: 'filter-16.svg',
          inlineSvg: true,
          path: ['general', 'filter'],
          size: 14
        }
      }
    },
    sketchToolInfoMap: getSketchToolInfoMap(),
    arrangementStyleMap: {
      [QueryArrangeType.Block]: {
        getTitle: (getI18nMessage) => getI18nMessage('vertical'),
        icon: require('./assets/arrange-vertical.svg')
      },
      [QueryArrangeType.Inline]: {
        getTitle: (getI18nMessage) => getI18nMessage('horizontal'),
        icon: require('./assets/arrange-horizontal.svg')
      },
      [QueryArrangeType.Popper]: {
        getTitle: (getI18nMessage) => getI18nMessage('icon'),
        icon: require('./assets/arrange-icon.svg')
      }
    }
  }
}

/** @jsx jsx */
import { React, ReactRedux, IMState, jsx, Immutable, ImmutableObject, APP_FRAME_NAME_IN_BUILDER } from 'jimu-core'
import { AllWidgetSettingProps, getAppConfigAction } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { RowLayoutSetting, utils as layoutUtils } from 'jimu-layouts/layout-runtime'
import { DEFAULT_ROW_LAYOUT_SETTING } from 'jimu-layouts/layout-builder'
import { Sides, LinearUnit, utils, FourSidesUnit, UnitTypes, styleUtils } from 'jimu-ui'
import defaultMessages from './translations/default'
import { FourSides, InputUnit } from 'jimu-ui/advanced/style-setting-components'

const marginSides = [Sides.T, Sides.R, Sides.B, Sides.L]

interface StateToProps {
  layoutSetting: ImmutableObject<RowLayoutSetting>
}

class Setting extends React.PureComponent<AllWidgetSettingProps<null> & StateToProps> {
  getLayoutIds (): string[] {
    const result = []

    const { layouts } = this.props
    if (layouts != null) {
      const layoutName = Object.keys(layouts)[0]
      const sizemodeLayouts = layouts[layoutName]
      Object.keys(sizemodeLayouts).forEach(sizemode => {
        result.push(sizemodeLayouts[sizemode])
      })
    }
    return result
  }

  handleSpaceChange = (value: LinearUnit): void => {
    const { layoutSetting } = this.props
    const appConfigAction = getAppConfigAction()
    this.getLayoutIds().forEach(layoutId => {
      appConfigAction.editLayoutSetting({ layoutId },
        layoutSetting.set('space', value.distance))
    })
    appConfigAction.exec()
  }

  handlePaddingChange = (value: FourSidesUnit): void => {
    const { layoutSetting } = this.props
    const previousUnit = layoutSetting.style.padding.unit
    let paddingNumbers: number[] = styleUtils.expandStyleArray(value.number)

    if (previousUnit !== value.unit) {
      // convert value to specified unit
      const rect = this.getSizeOfItem()
      if (rect != null) {
        paddingNumbers = paddingNumbers.map((numItem, index) => {
          const size = index % 2 === 0 ? rect.height : rect.width
          if (value.unit === UnitTypes.PIXEL) {
            // convert from percentage to pixel
            return Math.round(numItem * size / 100)
          }
          // convert from pixel to percentage, keep 1 decimal number
          return Math.round((numItem / size) * 1000) / 10
        })
      }
    }

    const appConfigAction = getAppConfigAction()
    this.getLayoutIds().forEach(layoutId => {
      appConfigAction.editLayoutSetting(
        { layoutId },
        layoutSetting.setIn(['style', 'padding'], {
          number: paddingNumbers,
          unit: value.unit
        })
      )
    })
    appConfigAction.exec()
  }

  getSizeOfItem (): ClientRect {
    const { id } = this.props
    const widgetElem = this.querySelector(`div[data-widgetid="${id}"]`)
    if (widgetElem != null) {
      return widgetElem.getBoundingClientRect()
    }
    return null
  }

  querySelector (selector: string): HTMLElement {
    const appFrame: HTMLFrameElement = document.querySelector(`iframe[name="${APP_FRAME_NAME_IN_BUILDER}"]`)
    if (appFrame != null) {
      const appFrameDoc = appFrame.contentDocument || appFrame.contentWindow.document
      return appFrameDoc.querySelector(selector)
    }
    return null
  }

  formatMessage = (id: string): string => {
    return this.props.intl.formatMessage({ id, defaultMessage: defaultMessages[id] })
  }

  render (): JSX.Element {
    const { layoutSetting } = this.props
    const space = layoutSetting.space >= 0 ? layoutSetting.space : DEFAULT_ROW_LAYOUT_SETTING.space
    const max = layoutSetting.style.padding?.unit === UnitTypes.PERCENTAGE ? 100 : Number.POSITIVE_INFINITY

    return (
      <div className='row-layout-setting'>
        <SettingSection title={this.formatMessage('layout')}>
          <SettingRow label={this.formatMessage('gap')}>
            <InputUnit value={utils.stringOfLinearUnit(space)} min={0} onChange={this.handleSpaceChange} style={{ width: 110 }} />
          </SettingRow>
          <SettingRow label={this.formatMessage('padding')} flow='wrap'>
            <FourSides
              showTip sides={marginSides} value={layoutSetting.style.padding as any} max={max}
              onChange={this.handlePaddingChange}
            />
          </SettingRow>
        </SettingSection>
      </div>
    )
  }
}

const mapStateToProps = (state: IMState, ownProps: AllWidgetSettingProps<null>): StateToProps => {
  const { layouts } = ownProps
  let setting = DEFAULT_ROW_LAYOUT_SETTING
  if (layouts != null) {
    const layoutName = Object.keys(layouts)[0]
    const sizemodeLayouts = layouts[layoutName]
    const layoutId = sizemodeLayouts[layoutUtils.getCurrentSizeMode()]
    setting = state.appStateInBuilder.appConfig.layouts[layoutId]?.setting ?? DEFAULT_ROW_LAYOUT_SETTING
  }
  return {
    layoutSetting: Immutable(setting)
  }
}

// connect<IMapStateToProps, IMapDispatchToProps, ICompProps, IReduxState>(mapStateToProps, mapDispatchToProps)
export default ReactRedux.connect<StateToProps, unknown, AllWidgetSettingProps<null>>(mapStateToProps)(Setting)

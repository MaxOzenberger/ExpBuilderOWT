/** @jsx jsx */
import { React, jsx, SerializedStyles, ThemeVariables, css, IntlShape } from 'jimu-core'
import { Icon, Dropdown, DropdownButton, DropdownMenu, DropdownItem, Select } from 'jimu-ui'
import { RouteItemConfig, PanelLayout, FlyItemMode } from '../../config'
import { ItemData } from '../../common/fly-facade/fly-manager'
import * as utils from '../../common/utils/utils'
import { getDropdownStyle } from '../style'
import nls from '../translations/default'

const routeListIconImage = require('../../assets/icons/route-list.svg')
interface Props {
  isEnable: boolean
  layout: PanelLayout
  theme: ThemeVariables
  intl: IntlShape
  isRouteMode: boolean
  itemsList: ItemData[]

  activedItemUuid: string
  activedRouteUuid: string

  onActivedRouteChange: ((routeIdx: string) => void)
}
interface States {
  isPopupOpen: boolean
}

export class RouteMenu extends React.PureComponent<Props, States> {
  constructor (props) {
    super(props)

    this.state = {
      isPopupOpen: false
    }
  }

  togglePopup = (): void => {
    this.setState({ isPopupOpen: !this.state.isPopupOpen })
  }

  handleActivedRouteChangeBySelect = (evt): void => {
    const idx = evt.target.value
    this.handleActivedRouteChange(idx)
  }

  handleActivedRouteChange = (routeIdx: string): void => {
    this.props.onActivedRouteChange(routeIdx)
  }

  getStyle = (): SerializedStyles => {
    return css`
      .routes-dropdown {
        width: 170px;

        .jimu-dropdown-button,
        .jimu-dropdown-button:hover{
          height: 100%;
          border: none;
        }
      }
      `
  }

  getRouteItemStyle (): SerializedStyles {
    return css`
      .route-item {
        max-width: 120px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    `
  }

  render (): React.ReactElement {
    const { isRouteMode, isEnable, layout } = this.props
    const plannedRoutesTip = this.props.intl.formatMessage({ id: 'plannedRoutesTip', defaultMessage: nls.plannedRoutesTip })

    const routeItem = this._getItemByActivedItemUuid()
    const routeModeConfig = routeItem?.config as RouteItemConfig
    const routeName = this.getActivedRouteName(routeModeConfig)

    return isRouteMode &&
      <div className='h-100 item' css={this.getStyle()}>
        {/* 1.Palette */}
        {(layout === PanelLayout.Palette) &&
          <Dropdown isOpen={this.state.isPopupOpen} disabled={!isEnable} toggle={this.togglePopup} className='btns routes-dropdown dropdowns' activeIcon>
            <DropdownButton icon className='dropdown-btn' type='tertiary' arrow={false} title={routeName ?? plannedRoutesTip}>
              <Icon icon={routeListIconImage} size={12} />
            </DropdownButton>
            <DropdownMenu showArrow css={getDropdownStyle(this.props.theme)}>
              {
                routeModeConfig?.routes.map((route, idx) => {
                  return route.isInUse &&
                    <div key={idx}>
                      <DropdownItem
                        title={route.displayName}
                        onClick={() => this.handleActivedRouteChange(route.idx)} active={this.props.activedRouteUuid === route.idx}
                      >
                        <div css={this.getRouteItemStyle()}>
                          <div className='mx-2 route-item'>{route.displayName}</div>
                        </div>
                      </DropdownItem>
                    </div>
                })
              }
            </DropdownMenu>
          </Dropdown>}
        {/* 2.Bar */}
        {(layout === PanelLayout.Horizontal) &&
          <React.Fragment>
            <div className='separator-line' />
            <Select onChange={this.handleActivedRouteChangeBySelect} placeholder={routeName ?? plannedRoutesTip} className='routes-dropdown' disabled={!isEnable}>
              {
                routeModeConfig?.routes.map((route, idx) => {
                  return route.isInUse &&
                    <option
                      key={idx} label={route.displayName} title={route.displayName}
                      value={route.idx} selected={this.props.activedRouteUuid === route.idx}
                    >
                      <div css={this.getRouteItemStyle()}>
                        <div className='route-item'>{route.displayName}</div>
                      </div>
                    </option>
                })
              }
            </Select>
          </React.Fragment>}
      </div>
  }

  _getItemByActivedItemUuid = (): ItemData => {
    let item = null
    if (utils.isDefined(this.props.activedItemUuid) && utils.isDefined(this.props.itemsList)) {
      item = this.props.itemsList.find(itemConfig => (
        itemConfig.config.uuid === this.props.activedItemUuid && FlyItemMode.Route === itemConfig.config.name
      ))
    }
    return item
  }

  getActivedRouteName = (routesConfig: RouteItemConfig): string => {
    const route = utils.getRouteConfigByIdx(routesConfig?.routes, { routeUuid: this.props.activedRouteUuid })
    return route?.displayName
  }
}

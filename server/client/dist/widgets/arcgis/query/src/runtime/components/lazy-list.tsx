/** @jsx jsx */
import { React, jsx, css, themeUtils } from 'jimu-core'
import { ThemeProps } from 'jimu-ui'
import { EntityStatusType, StatusIndicator } from '../../common/common-components'

const { useRef, useEffect, useCallback, useState } = React

export type LazyListDirectionType = 'horizontal' | 'vertical'

export interface RenderLazyListItemOptionsType<TItemData> {
  index: number
  direction?: LazyListDirectionType
  data?: TItemData[]
}

export interface LazyListProps<TItemData> {
  className: string
  // direction to display the list result
  direction?: LazyListDirectionType
  // function to load more list items
  requestDataItems: (dataItemCountToLoad: number) => Promise<TItemData[]>
  // function to render a list item
  renderListItem?: (options: RenderLazyListItemOptionsType<TItemData>) => any
  // some values to be used for paging purpose
  pagingConfig?: { itemCountPerPage: number, initialLoadItemCount: number }
  // determine how many items will be loaded in the following time
  getNextDataItemsCount?: () => number
  // triggered when render is finished
  onRenderDone?: (options: { dataItems: TItemData[], element: HTMLElement }) => void
}

export const LazyList: (<TItemData,>(props: LazyListProps<TItemData>) => any) = themeUtils.withTheme(
  <TItemData,>(props: LazyListProps<TItemData> & ThemeProps) => {
    const [dataItems, setDataItems] = useState<TItemData[]>([])
    const [loadStatus, setLoadStatus] = useState<EntityStatusType>(EntityStatusType.Init)
    const [allDataItemsLoaded, setAllDataItemsLoaded] = useState(false)
    const {
      direction = 'vertical',
      requestDataItems,
      renderListItem,
      pagingConfig = { itemCountPerPage: 5, initialLoadItemCount: 20 },
      getNextDataItemsCount = () => Math.max((dataItems || []).length + pagingConfig.itemCountPerPage, pagingConfig.initialLoadItemCount),
      onRenderDone = () => { }
    } = props
    const el = useRef(null)
    const loadByPages = useCallback(async () => {
      if (allDataItemsLoaded || loadStatus === EntityStatusType.Loading) return
      const currentNextDataItemsCount = getNextDataItemsCount()
      setLoadStatus(EntityStatusType.Loading)
      const nextDataItems = await requestDataItems(currentNextDataItemsCount)
      setAllDataItemsLoaded(currentNextDataItemsCount > (nextDataItems || []).length)
      setDataItems(nextDataItems)
      setLoadStatus(EntityStatusType.Loaded)
    }, [loadStatus, allDataItemsLoaded, requestDataItems, getNextDataItemsCount])
    useEffect(() => {
      const elLoadDetector = el?.current?.querySelector('.ui-unit-lazy-list__lazyload-detector')
      if (elLoadDetector) {
        const observer = new IntersectionObserver((entries) => {
          const morePageRequired = entries?.[0]?.intersectionRatio > 0
          if (morePageRequired) loadByPages()
        }, {
          root: el?.current
        })
        observer?.observe(elLoadDetector)
        return () => {
          observer?.disconnect()
        }
      }
    })
    useEffect(() => {
      onRenderDone({
        dataItems,
        element: el?.current
      })
    })
    return (
      <div ref={el} className={`ui-unit-lazy-list ui-unit-lazy-list_direction-${direction} ui-unit-lazy-list_load-status-${loadStatus}`} css={getStyle}>
        <div className='ui-unit-lazy-list__items'>
          {
            dataItems.map((dataItem, x) => <React.Fragment key={x}>{renderListItem({ index: x, data: dataItems, direction })}</React.Fragment>)
          }
        </div>
        <div className='ui-unit-lazy-list__lazyload-detector'>&nbsp;</div>
        <StatusIndicator className='ui-unit-lazy-list__loading-indicator' statusType={loadStatus} />
      </div>
    )
    function getStyle () {
      return css`
      &.ui-unit-lazy-list {
        display: flex;
        flex: 1;
        overflow: auto;
        &.ui-unit-lazy-list_direction-vertical {
          flex-direction: column;
          .ui-unit-lazy-list__items {
            position: relative;
            flex-direction: column;
          }
        }
        .ui-unit-lazy-list__items {
          display: flex;
        }
        .ui-unit-lazy-list__lazyload-detector {
          height: 2px;
          width: 2px;
          opacity: 0;
        }
        .ui-unit-lazy-list__loading-indicator {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
        }
      }
    `
    }
  })

/** @jsx jsx */
import { jsx, css, themeUtils } from 'jimu-core'
import { FeatureDataRecordImpl } from 'jimu-core/data-source'
import { ThemeProps } from 'jimu-ui'
import { RuntimeQueryDataType } from '../widget-config'
import { LazyList, LazyListProps, RenderLazyListItemOptionsType } from './lazy-list'
import FeatureInfo from './feature-info'
import { SymbolItem } from 'jimu-ui/advanced/map'

export interface QueryResultListItemProps extends RenderLazyListItemOptionsType<FeatureDataRecordImpl> {
  associatedListData?: RuntimeQueryDataType
  onClick?: () => void
}

const visibleElements = {
  title: true,
  content: {
    fields: true,
    text: true,
    media: true,
    attachments: true
  },
  lastEditedInfo: true
}

export const QueryResultListItem = themeUtils.withTheme((props: QueryResultListItemProps & ThemeProps) => {
  const { theme, index, data, associatedListData, direction, onClick } = props
  const selected = associatedListData?.ds?.getSelectedRecordIds()?.includes(data?.[index]?.getId())
  return (
    <div
      className={`ui-unit-query-result-list-item ui-unit-query-result-list-item_direction-${direction} ui-unit-query-result-list-item_selected-${selected}`}
      onClick={onClick}
      css={getStyle}
    >
      {
        associatedListData.esriModuleMap.jsonUtils &&
          <div className='ui-unit-query-result-list-item__symbol'>
            <SymbolItem symbol={associatedListData.esriModuleMap.jsonUtils.fromJSON(associatedListData.symbolJson)} isUsedForPreview />
          </div>
      }
      <FeatureInfo
        graphic={data[index].feature as __esri.Graphic}
        visibleElements={visibleElements}
        dataSource={associatedListData?.ds}
      />
    </div>
  )
  function getStyle () {
    return css`
      &.ui-unit-query-result-list-item {
        display: flex;
        overflow: auto;
        flex-flow: row;
        padding: .5rem;
        border: 2px solid transparent;
        cursor: pointer;
        flex-shrink: 0;
        &.ui-unit-query-result-list-item_selected-true {
          &.ui-unit-query-result-list-item_selected-true {
            &.ui-unit-query-result-list-item_selected-true {
              border-color: ${theme.colors.palette.primary[500]};
            }
          }
        }
        &.ui-unit-query-result-list-item_direction-horizontal {
          width: 240px;
          border-color: ${theme.colors.palette.light[200]};
          &:not(:first-of-type) {
            margin-left: .5rem;
          }
        }
        &.ui-unit-query-result-list-item_direction-vertical {
          &:not(:first-of-type) {
            border-top-color: ${theme.colors.palette.light[200]};
          }
        }
        > .ui-unit-query-result-list-item__symbol {
          flex: none;
          padding-right: .5rem;
          >.symbol-item {
            align-items: flex-start!important;
          }
        }
        > .feature-info-component {
          flex: 1;
        }
      }
    `
  }
})

export interface QueryResultListProps extends LazyListProps<FeatureDataRecordImpl> {
  associatedListData?: RuntimeQueryDataType
  onClickListItem?: (options: RenderLazyListItemOptionsType<FeatureDataRecordImpl>) => void
}

export const QueryResultList = (props: QueryResultListProps) => {
  return (
    <LazyList
      {...props}
      renderListItem={(options) => {
        return (
          props.associatedListData &&
            <QueryResultListItem {...options} associatedListData={props.associatedListData} onClick={() => props.onClickListItem(options)} />
        )
      }}
    />
  )
}

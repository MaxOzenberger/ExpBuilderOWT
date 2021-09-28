import { ThemeVariables, css, SerializedStyles, polished } from 'jimu-core'

export function getStyleForQuery (theme: ThemeVariables): SerializedStyles {
  return css`
    .jimu-rtl & {
      .setting-query__setting-block-type-setting-pane {
        .setting-query__setting-block-key-field-arrangement-type,
        .setting-query__setting-block-key-field-filter-types,
        .setting-query__setting-block-type-nav-back-section {
          button.jimu-btn {
            transform: scaleX(-1);
          }
        }
      }
      .ui-unit-nav-line {
        button.jimu-btn {
          transform: scaleX(-1);
        }
      }
    }

    .expand-mobile-panel & {
      &.runtime-query__runtime-block-type-query-board {
        padding: .5rem;
      }
    }

    &.runtime-query {
      .runtime-query__widget-popper {
      }
      .runtime-query__widget-static {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
    &.runtime-query__runtime-block-type-query-board {
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 1rem;

      &.runtime-query_arrange-type-popper {
        min-width: 300px;
        max-width: 800px;
      }

      &.runtime-query_arrange-type-inline {
        &.runtime-query_arrange-wrap-true {
          .runtime-query__query-list {
            flex-wrap: wrap;
          }
        }
        .runtime-query__query-list {
          flex-direction: row;
          .runtime-query__query-list-item {
            align-items: center;
            margin: .25rem;
            .ui-unit-entity-status_type-icon {
              margin-left: .5rem;
              .jimu-icon {
                margin-right: 0;
              }
            }
          }
        }
      }

      .runtime-query__runtime-block-type-query-board {
        padding: 0;
      }
      .runtime-query__runtime-block-type-query-stage {
        position: relative;
        display: flex;
        flex-flow: column;
        flex: 1;
        overflow: auto;
        .runtime-query__runtime-block-key-spatial-filter {
          .ui-unit-entity-status {
            padding-top: .5rem;
          }
        }
        .runtime-query__runtime-block-key-interactive-draw {
          display: flex;
        }
      }
      .ui-unit-form-action-bar {
        align-items: flex-end;
        padding: .25rem 0;
        .ui-unit-button {
          font-weight: 500;
        }
        .ui-unit-button_clear-results {
          font-size: .8125rem;
          padding: 0 .5rem;
        }
      }
      .ui-unit-nav-line {
        font-weight: 500;
        font-size: .875rem;
        padding: .25rem 0;
      }
      .ui-unit-title-text-group {
        display: flex;
        flex: 1;
        justify-content: space-between;
      }
      .runtime-query__query-list {
        display: flex;
        flex-flow: column;
        .runtime-query__query-list-item {
          display: flex;
        }
      }
      .runtime-query__runtime-block-type-form-line {
        padding: .25rem 0;
        .runtime-ui-unit-form-line__title {
          font-weight: 500;
          font-size: .875rem;
          padding: .25rem 0;
        }
      }
      .runtime-query__runtime-block-type-form-questions {
        flex: 1;
        padding: .5rem 0;
      }
      .runtime-query__query-result-info {
      }
      .runtime-query__query-result-list-container {
        display: flex;
        flex: 1;
        flex-flow: column;
        overflow: auto;
      }
    }
    &.ui-unit-popper_k-query-item {
      .panel-header {
        display: none;
      }
    }

    .ui-unit-nav-line {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      &.ui-unit-nav-line_type-back {

        .ui-unit-nav-line-button {
          padding-left: 0;
        }
      }
      &.ui-unit-nav-line_type-enter {
        justify-content: flex-end;
        cursor: pointer;
      }
      &.ui-unit-nav-line_disabled-true {
        cursor: unset;
        .ui-unit-nav-line-button {
          opacity: .2;
        }
      }

      .ui-unit-nav-line-option {
        display: flex;
        .ui-unit-button {
          margin: 0 .25rem;
        }
      }

      .ui-unit-nav-line-title {
        display: flex;
        flex: 1;
        align-items: center;
        padding-right: 0.5rem;
      }

      .ui-unit-icon {
        width: 0.875rem;
        margin-right: 0.25rem;
      }
    }

    .setting-query__setting-block-type-setting-pane {
      width: 100%;
      height: 100%;

      &.setting-query__setting-block-key-setting-pane-main {
        .setting-query__setting-block-key-section-query-item {
          .setting-ui-unit-list {
            margin-top: 1rem;
          }
        }

        .setting-query__setting-block-key-field-arrangement-type {
          margin-top: 10px;
          margin-left: -0.5rem;
          display: flex;
          justify-content: flex-start;
          .jimu-btn {
            margin-left: 0.5rem;
            padding: 0;
            background: ${theme.colors.palette.light[200]};
            &.active {
              border: 1px solid ${theme.colors.palette.primary[600]};
            }
          }
        }
      }

      .setting-query__setting-block-key-setting-content-query-item-main {
        &.setting-query__setting-block-type-setting-content {
          height: calc(100% - ${polished.rem(50)});
          overflow: auto;
          .setting-query__setting-block-key-field-symbol-type {
            label {
              flex: none;
            }
          }
        }
      }

      .setting-ui-unit-header {
        .left-part {
          .jimu-btn {
            border-radius: 50%;
            background: ${theme.colors.palette.light[500]};
          }
        }
      }

      .setting-query__setting-block-type-setting-content {

        .setting-query__setting-field-row0:not(.collapse)+.jimu-widget-setting--row {
          margin-top: 0;
        }

        .ui-unit-select, .setting-ui-unit-input {
          flex: 1;
        }

        textarea.setting-ui-unit-input {
          height: 80px;
        }

        .jimu-widget-setting--row-label {
          +.ui-unit-select, +.setting-ui-unit-input {
            flex: 0 0 50%;
          }
        }

        .setting-ui-unit-check-input-item {
          width: 100%;
          display: flex;
          align-items: center;

          .setting-ui-unit-check-input-label {
            flex: 1;
            overflow: hidden;
          }

          .setting-ui-unit-check-input-element, .setting-ui-unit-check-input-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin: .25rem .5rem .25rem 0;
          }
        }

        .setting-ui-unit-tree, .setting-ui-unit-list {
          width: 100%;

          .tree-item {
            justify-content: space-between;
            align-items: center;
            font-size: ${polished.rem(13)};

            &.tree-item_level-1 {
            }
            .jimu-checkbox {
              margin-right: .5rem;
            }
          }
        }
      }

      .setting-collapse {
        > .collapse {
          margin-top: 1rem;
        }
      }
    }

    .setting-query__spatial-relationship-dialog {
      width: 400px;
      padding: 10px;
      background-color: ${theme.colors.palette.light[300]};

      table {
        .setting-ui-unit-table-col:nth-of-type(1) {
          width: 20%;
        }
        .setting-ui-unit-table-col:nth-of-type(2) {
          width: 40%;
        }
        .setting-ui-unit-table-col:nth-of-type(3) {
          width: 40%;
        }
        .text-content {
          color: ${theme.colors.black};
          font-size: 0.875rem;
        }
      }
    }
    .ui-unit-form-action-bar {
      display: flex;
      justify-content: flex-end;
      > .ui-unit-separator {
        flex: 1;
      }
      > * {
        &.first-child {
          margin-left: 0;
        }
        margin-left: 0.5rem;
      }
    }
    .ui-unit-sketch-icon {
      vertical-align: middle;
      padding-right: .5rem;
    }
    .empty-placeholder {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 2rem;
      .empty-placeholder-text {
        color: ${theme.colors.palette.dark[500]};
        font-size: ${polished.rem(14)};
        margin-top: 16px;
        text-align: center;
      }
      .empty-placeholder-icon {
        color: ${theme.colors.palette.dark[200]};
      }
    }
  `
}

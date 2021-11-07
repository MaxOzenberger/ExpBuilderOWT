import { ThemeVariables, css, SerializedStyles, polished } from 'jimu-core';

export function getStyle(theme: ThemeVariables): SerializedStyles {
  return css`

    .widget-setting-coordinate-conversion {

      .cursor-pointer {
        cursor: pointer;
      }

      .map-selector-section .component-map-selector .form-control{
        width: 100%;
      }

      .selectOption {
        width: 227px;
      }
    }
  `;
}

export function getTableStyle(theme: ThemeVariables): SerializedStyles {
  return css`

    .tableHeading {
      background-color: ${theme.colors.palette.light[400]};
    }

    .tableBody {
      background-color : ${theme.colors.palette.light[200]};
      word-break: break-word;
    }

    .checkboxStyle {
      width: 1px;
      padding: 8px 5px;
    }

    .coordinateHeaderLabel {
      font-size: 14px;
      padding: 0px 0px 9px 0px;
      max-width: 4rem;
    }

    .coordinateHeaderFormat {
      font-size: 14px;
      padding: 0px 0px 9px 12px;
      max-width: 4rem;
    }

    .coordinateHeaderEdit {
      padding: 0px 0px 9px 0px;
    }

    .coordinatesNotation {
      padding: 8px 0px;
    }

    .coordinatesFormat {
      padding: 9px 7px 9px 14px;
    }

    .hidden {
      display: none;
    }

    `;
}

export function getStyleForEditHeader(theme: ThemeVariables): SerializedStyles {
  return css`
    .layer-item-panel{
      .setting-header {
        padding: ${polished.rem(10)} ${polished.rem(16)} ${polished.rem(0)} ${polished.rem(16)}
      }
      .setting-title {
        font-size: ${polished.rem(16)};
        .layer-item-label{
          color: ${theme.colors.palette.dark[600]};
        }
      }
      .setting-container {
        height: calc(100% - ${polished.rem(50)});
        overflow: auto;

        .title-desc{
          color: ${theme.colors.palette.dark[200]};
        }
      }
    }

  `
}

export function getInputSettingsStyle(theme: ThemeVariables): SerializedStyles {
  return css`
  .formatLabel {
    width: 194px;
  }

  .hidden {
    display: none;
  }
  `
}

export function getOutputSettingsStyle(theme: ThemeVariables): SerializedStyles {
  return css`
  .add-conversion{
    height: ${polished.rem(40)};
    width: 100%;
    color: ${theme.colors.palette.primary[700]};
    font-size: ${polished.rem(14)};
    cursor: pointer;
    &:hover{
      .add-conversion-icon-container{
        background-color: ${theme.colors.palette.primary[800]};
      }
      color: ${theme.colors.palette.primary[800]};
    }
    .add-conversion-icon-container{
      width: 20px;
      height: 20px;
      background-color: ${theme.colors.palette.primary[700]};
      border-radius: 10px;
    }
    .add-conversion-icon{
      color: ${theme.colors.palette.light[300]};
    }
  }
  `
}

export function getAddressSettingsStyle(theme: ThemeVariables): SerializedStyles {
  return css`

  .locator-url {
    background-color: ${theme.colors.palette.dark[200]};
    padding: 2px;
  }
  
  .locator-url label {
    word-break: break-all;
  }
   
  .candidateScoreInput {
    width: 105px;
  }
  `
}

export function getAlertPopupStyle(theme: ThemeVariables): SerializedStyles {
  return css`
    .popupContents {
      width: 450px;
    }

    .invalidServiceURL {
      display: block;
    }

    .validServiceURL {
      display: none;
    }

    .locatorErrorMessage {
      padding-top: 5px;
      color: ${theme.colors.danger};
      font-weight: bold;
    }

    .alertValidationContent{
      height: 42px;
    }
    `;
}

export function getGeneralSettingsStyle(theme: ThemeVariables): SerializedStyles {
  return css`
  
  .hint label{
    font-style: italic;
  }

  .zoomScaleInput {
    width: 105px;
  }
  
  .symbolItem {
    cursor: pointer;
  }
  `
}






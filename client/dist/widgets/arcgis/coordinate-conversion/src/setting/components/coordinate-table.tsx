/** @jsx jsx */ // <-- make sure to include the jsx pragma
import { React, jsx, IntlShape, ThemeVariables } from 'jimu-core';
import { Checkbox, Table, Button, Icon, defaultMessages as jimuUIDefaultMessages } from 'jimu-ui';
import { getTableStyle } from '../lib/style';
import defaultMessages from '../translations/default'
import { OutputSettings } from '../../config';

const iconEdit = require('jimu-ui/lib/icons/edit.svg');

interface Props {
  theme: ThemeVariables;
  intl: IntlShape;
  allSupportedFormats: OutputSettings[];
  config: OutputSettings[];
  onEditClick?: () => void;
  onSettingsUpdate?: (prop: OutputSettings[]) => void;
}


export default class CoordinateTable extends React.PureComponent<Props>{

  private _rows: JSX.Element[];
  private _outputSettings: OutputSettings[];
  private _isAllChecked: boolean;

  constructor(props) {
    super(props);
    this._rows = [];
    this._isAllChecked = false;
    this._outputSettings = [];
  }

  nls = (id: string) => {
    const messages = Object.assign({}, defaultMessages, jimuUIDefaultMessages);
    //for unit testing no need to mock intl we can directly use default en msg
    if (this.props.intl && this.props.intl.formatMessage) {
      return this.props.intl.formatMessage({ id: id, defaultMessage: messages[id] });
    } else {
      return messages[id];
    }
  }

  componentDidMount = () => {
    this.renderTable(true);
  }

  componentDidUpdate = (prevProps) => {
    if (this.isChange(prevProps)) {
      this._outputSettings = this.props.config;
    }
  }

  isChange = (prevProps) => {
    let isChangeDone = false;
    if (prevProps.config.length > 0) {
      prevProps.config.some((format) => {
        this.props.config.some((currentFormat) => {
          if (format.name === currentFormat.name) {
            if (format.currentPattern !== currentFormat.currentPattern ||
              format.enabled !== currentFormat.enabled) {
              isChangeDone = true;
              return true;
            }
          }
        });
      });
    }
    return isChangeDone;
  }

  renderTable = (publishEvent?: boolean) => {
    this._rows = [];
    const coordsConfig = [];
    let isAllChecked = true;

    this.props.allSupportedFormats.map((coordinateFormat, index) => {
      const currentPattern = coordinateFormat.currentPattern;
      const tableRow: JSX.Element = <tr key={index}>
        <td className={'checkboxStyle'}><Checkbox className={'cursor-pointer mr-2 font-13'} checked={coordinateFormat.enabled}
          onChange={e => { this.onCheckBoxChange(e, index) }}
        /> </td>
        <td className={'coordinatesNotation'}>{coordinateFormat.label}</td>
        <td colSpan={2} className={'coordinatesFormat'}>{currentPattern}</td>
      </tr>
      this._rows.push(tableRow);
      const inputOption = {
        name: coordinateFormat.name,
        label: coordinateFormat.label,
        defaultPattern: coordinateFormat.defaultPattern,
        currentPattern: currentPattern,
        enabled: coordinateFormat.enabled,
        isCustom: coordinateFormat.isCustom
      };
      if (!coordinateFormat.enabled) {
        isAllChecked = false;
      }
      coordsConfig.push(inputOption);
    });

    if (coordsConfig.length > 0 && this._outputSettings.length !== coordsConfig.length) {
      this._outputSettings = coordsConfig;
    }
    if (publishEvent) {
      this.props.onSettingsUpdate(this._outputSettings);
    }
    this._isAllChecked = isAllChecked;
  }

  updateHeaderCheckBoxState = (updatedSettings) => {
    let isAllChecked = true;
    updatedSettings.some((formatSettings) => {
      if (!formatSettings.enabled) {
        isAllChecked = false;
        return true;
      }
    });
    this._isAllChecked = isAllChecked;
  }

  onHeaderCheckBoxChange = (checked) => {
    const outputSettings = this._outputSettings;
    const updatedSettings = outputSettings.map((coordinateSetting) => {
      var temp = Object.assign({}, coordinateSetting);
      temp.enabled = checked;
      return temp;
    });
    this.props.onSettingsUpdate(updatedSettings);
    this._outputSettings = updatedSettings;
  }

  onCheckBoxChange = (evt, formatIndex: number) => {
    const outputSettings = this._outputSettings;
    let updatedSettings: OutputSettings;
    outputSettings.some((coordinateSetting, index) => {
      if (formatIndex === index) {
        updatedSettings = {
          name: coordinateSetting.name,
          label: coordinateSetting.label,
          defaultPattern: coordinateSetting.defaultPattern,
          currentPattern: coordinateSetting.currentPattern,
          enabled: evt.target.checked,
          isCustom: coordinateSetting.isCustom
        };
        return true;
      }
    });
    this.updateItem(formatIndex, updatedSettings);
  }

  updateItem(index, itemAttributes) {
    if (index > -1) {
      this._outputSettings = [
        ...this._outputSettings.slice(0, index),
        Object.assign({}, this._outputSettings[index], itemAttributes),
        ...this._outputSettings.slice(index + 1)
      ]

      this.props.onSettingsUpdate(this._outputSettings);
      this.updateHeaderCheckBoxState(this._outputSettings);
    }
  }

  onEditButtonClick = () => {
    this.props.onEditClick();
  }

  render() {
    this.renderTable();
    return <div css={getTableStyle(this.props.theme)} style={{ height: '100%', width: '100%' }}>
      <div className={this._rows && this._rows.length === 0 ? 'hidden' : ''}>
        <Table>
          <thead className={'tableHeading'}>
            <tr>
              <th className={'checkboxStyle'}><Checkbox className={'cursor-pointer mr-2 font-13'}
                checked={Boolean(this._isAllChecked ? true : false)}
                onChange={evt => { this.onHeaderCheckBoxChange(evt.target.checked) }} /></th>
              <th className={'coordinateHeaderLabel text-truncate'} title={this.nls('coordinateLabel')}>{this.nls('coordinateLabel')}</th>
              <th className={'coordinateHeaderFormat text-truncate'} title={this.nls('coordinateFormat')}>{this.nls('coordinateFormat')}</th>
              <th className={'coordinateHeaderEdit'}><Button aria-label={this.nls('edit')} className={'ml-2'} title={this.nls('edit')} size={'sm'} icon type={'tertiary'}
                onClick={this.onEditButtonClick.bind(this)}>
                <Icon icon={iconEdit} size={14} />
              </Button></th>
            </tr>
          </thead>
          <tbody className={'tableBody'}>{this._rows}</tbody>
        </Table>
      </div>
    </div >
  }
}

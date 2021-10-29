/** @jsx jsx */
import {
  React,
  IMAppConfig,
  IMState,
  jsx,
  ThemeVariables,
  IMThemeVariables,
  Immutable,
  UseDataSource,
  WidgetJson
} from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import {
  Icon,
  TextInput,
  TextArea,
  Switch,
  NumericInput,
  defaultMessages as jimuUiMessages,
  ButtonGroup,
  Button
} from 'jimu-ui'
import defaultMessages from './translations/default'
import { IMConfig, EmbedType } from '../config'
import { getStyle } from './style'
import {
  DataSourceSelector,
  AllDataSourceTypes
} from 'jimu-ui/advanced/data-source-selector'
import { DynamicUrlEditor } from 'jimu-ui/advanced/dynamic-url-editor'

interface ExtraProps {
  appConfig: IMAppConfig
  appTheme: ThemeVariables
  selectWidgets: WidgetJson[]
}

interface CustomeProps {
  theme: IMThemeVariables
}

interface State {
  showUrlError: boolean
  urlError: string
  isExpPopupOpen: boolean
}

export default class Setting extends React.PureComponent<
AllWidgetSettingProps<IMConfig> & ExtraProps & CustomeProps,
State
> {
  supportedDsTypes = Immutable([
    AllDataSourceTypes.FeatureLayer,
    AllDataSourceTypes.SceneLayer
  ])

  attributePlaceHolder: string
  expressionPlaceHolder: string
  constructor (props) {
    super(props)

    this.state = {
      showUrlError: false,
      urlError: '',
      isExpPopupOpen: false
    }
  }

  static mapExtraStateProps = (
    state: IMState,
    props: AllWidgetSettingProps<IMConfig>
  ) => {
    const widgets = state && state.appStateInBuilder?.appConfig?.widgets
    const selectWidgets = []
    if(widgets) {
      for (const name in widgets) {
        const item = widgets[name]
        if(item.uri == 'widgets/common/embed/' && item.id !== props.id) {
          selectWidgets.push(item)
        }
      }
    }
    return {
      appConfig:
        state && state.appStateInBuilder && state.appStateInBuilder.appConfig,
      appTheme:
        state && state.appStateInBuilder && state.appStateInBuilder.theme,
      selectWidgets
    }
  }

  embedTypeChange = (type: EmbedType) => {
    const { config } = this.props
    if (this.props.config.embedType !== type) {
      this.props.onSettingChange({
        id: this.props.id,
        config: config.set('embedType', type)
      })
    }
  }

  checkURL = (str: string): boolean => {
    if (!str || str === '') {
      this.setState({ urlError: '' })
      return true
    }
    const httpsRex = '^(([h][t]{2}[p][s])?://)'
    const re = new RegExp(httpsRex)
    if (!re.test(str)) {
      this.setState({
        urlError: this.formatMessage('httpsUrlMessage')
      })
      return false
    }
    // url of localhost works without '.'
    const httpsLocalRex = new RegExp('^(([h][t]{2}[p][s])?://localhost)')
    if (httpsLocalRex.test(str)) {
      this.setState({ urlError: '' })
      return true
    }
    const index = str.indexOf('.')
    if (index < 0 || index === str.length - 1) {
      this.setState({
        urlError: this.formatMessage('invalidUrlMessage')
      })
      return false
    }
    this.setState({ urlError: '' })
    return true
  }

  embedCodeChangeRightAway = value => {
    const { config, id } = this.props
    this.props.onSettingChange({
      config: config.set('embedCode', value),
      id: id
    })
  }

  formatMessage = (id: string) => {
    return this.props.intl.formatMessage({
      id: id,
      defaultMessage: { ...jimuUiMessages, ...defaultMessages }[id]
    })
  }

  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    if (!useDataSources) {
      return
    }

    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    })
  }

  onToggleUseDataEnabled = (useDataSourcesEnabled: boolean) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSourcesEnabled
    })
  }

  onSwitchChanged = (checked, name): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
  }

  handleAutoInterval = (valueInt: number) => {
    const { config, id } = this.props
    this.props.onSettingChange({
      id,
      config: config.set('autoInterval', valueInt)
    })
  }

  labelChange = event => {
    const { config, id } = this.props
    const value = event?.target?.value
    this.props.onSettingChange({
      id,
      config: config.set('label', value),
    })
  }

  webAddressExpressionChange = (expression: string) => {
    const { config, onSettingChange, id, useDataSourcesEnabled, useDataSources } = this.props
    const { embedType } = config
    const UINF_TAG_REGEXP = /\<urlsearch((?!\<urlsearch).)+\<\/urlsearch\>/gmi
    const EXP_TAG_REGEXP = /\<exp((?!\<exp).)+\<\/exp\>/gmi
    const haveUrlsearch = expression?.match(UINF_TAG_REGEXP)
    const haveExp = expression?.match(EXP_TAG_REGEXP)
    const expressionStr = expression && expression.replace(/<[^>]+>/g, '').replace(/(^\s*|\s*$)/g,'')
    if ((haveUrlsearch || haveExp) && expressionStr.indexOf('{') === 0) {
      // show expression in runtime
      this.setState({ showUrlError: false })
    } else {
      if(this.checkURL(expressionStr)){
        this.setState({ showUrlError: false })
      } else {
        this.setState({ showUrlError: true })
      }
    }

    const hasExpressionTag = expression?.match(EXP_TAG_REGEXP)
    const useLabel = embedType === EmbedType.Url && useDataSourcesEnabled && useDataSources?.length > 0 && hasExpressionTag
    if (!useLabel) {
      onSettingChange({
        id,
        config: config.set('expression', expression).set('enableLabel', false)
      })
    } else {
      onSettingChange({
        id,
        config: config.set('expression', expression)
      })
    }
  }

  isUsedDataSource = () => {
    const { useDataSources, useDataSourcesEnabled } = this.props
    return useDataSourcesEnabled && useDataSources && useDataSources.length > 0
  }

  hasExpressionTag = (expression: string) => {
    const EXP_TAG_REGEXP = /\<exp((?!\<exp).)+\<\/exp\>/gmi
    return expression?.match(EXP_TAG_REGEXP)
  }

  render () {
    const { showUrlError, urlError } = this.state
    const { theme, useDataSources, config, useDataSourcesEnabled, id, selectWidgets } = this.props
    const { embedType, enableLabel, label } = config
    const useLabel = embedType === EmbedType.Url && useDataSourcesEnabled && useDataSources?.length > 0 && this.hasExpressionTag(config.expression)

    return (
      <div css={getStyle(this.props.theme)}>
        <div className='widget-iframe jimu-widget'>
          <div>
            <SettingSection>
              <SettingRow label={this.formatMessage('embedBy')} />
              <SettingRow>
                <ButtonGroup className='w-100'>
                  <Button
                    className='w-50'
                    type={embedType === EmbedType.Url ? 'primary' : 'default'}
                    onClick={() => this.embedTypeChange(EmbedType.Url)}
                  >
                    {this.formatMessage('url')}
                  </Button>
                  <Button
                    className='w-50'
                    type={embedType === EmbedType.Code ? 'primary' : 'default'}
                    onClick={() => this.embedTypeChange(EmbedType.Code)}
                  >
                    {this.formatMessage('code')}
                  </Button>
                </ButtonGroup>
              </SettingRow>
              {embedType === EmbedType.Url && (
                <SettingRow>
                  <div className='choose-ds w-100'>
                    <DataSourceSelector
                      types={this.supportedDsTypes}
                      useDataSources={this.props.useDataSources}
                      useDataSourcesEnabled={useDataSourcesEnabled}
                      onToggleUseDataEnabled={this.onToggleUseDataEnabled}
                      onChange={this.onDataSourceChange}
                      widgetId={this.props.id}
                    />
                  </div>
                </SettingRow>
              )}
              <SettingRow>
                {embedType === EmbedType.Url ? (
                  <div
                    className='d-flex flex-column w-100 embed-dynamic-con'
                  >
                    <DynamicUrlEditor
                      widgetId={id}
                      useDataSourcesEnabled={useDataSourcesEnabled}
                      useDataSources={useDataSources}
                      selectWidgets={selectWidgets}
                      onChange={this.webAddressExpressionChange}
                      value={config.expression}
                    />
                    {showUrlError && (
                      <div
                        className='d-flex w-100 align-items-center justify-content-between'
                        style={{ marginTop: '5px' }}
                      >
                        <Icon
                          size={16}
                          icon={require('jimu-ui/lib/icons/warning.svg')}
                          color={theme.colors.danger}
                        />
                        <div
                          style={{
                            width: 'calc(100% - 20px)',
                            margin: '0 4px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            color: theme.colors.danger
                          }}
                        >
                          {urlError}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <TextArea
                    style={{ height: '300px' }}
                    className='w-100'
                    spellCheck={false}
                    placeholder={this.formatMessage('codePlaceholder')}
                    value={config.embedCode || ''}
                    onAcceptValue={this.embedCodeChangeRightAway}
                  />
                )}
              </SettingRow>
              {useLabel &&
                <React.Fragment>
                  <SettingRow>
                    <div className='d-flex justify-content-between w-100'>
                      <label className='w-75 text-truncate d-inline-block font-dark-600'>
                        {this.formatMessage('label')}
                      </label>
                      <Switch
                        className='can-x-switch'
                        checked={enableLabel || false}
                        data-key='enableLabel'
                        onChange={evt => {
                          this.onSwitchChanged(evt.target.checked, 'enableLabel')
                        }}
                      />
                    </div>
                  </SettingRow>
                  {enableLabel &&
                    <SettingRow>
                      <TextInput
                        type='text'
                        className='w-100'
                        value={label || ''}
                        onChange={this.labelChange}
                      />
                    </SettingRow>
                  }
                </React.Fragment>
              }
              <SettingRow>
                <div className='d-flex justify-content-between w-100'>
                  <label className='w-75 text-truncate d-inline-block font-dark-600'>
                    {this.formatMessage('autoRefresh')}
                  </label>
                  <Switch
                    className='can-x-switch'
                    checked={
                      (this.props.config && this.props.config.autoRefresh) ||
                      false
                    }
                    data-key='autoRefresh'
                    onChange={evt => {
                      this.onSwitchChanged(evt.target.checked, 'autoRefresh')
                    }}
                  />
                </div>
              </SettingRow>
              {config.autoRefresh && (
                <SettingRow
                  flow='wrap'
                  label={`${this.formatMessage(
                    'autoInterval'
                  )} (${this.formatMessage('autoUnit')})`}
                >
                  <NumericInput
                    style={{ width: '100%' }}
                    value={config.autoInterval || 1}
                    precision={2}
                    min={0.2}
                    max={1440}
                    onChange={this.handleAutoInterval}
                  />
                </SettingRow>
              )}
            </SettingSection>
          </div>
        </div>
      </div>
    )
  }
}

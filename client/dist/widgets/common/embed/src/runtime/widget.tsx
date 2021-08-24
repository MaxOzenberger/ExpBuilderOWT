import {
  React,
  AllWidgetProps,
  getAppStore,
  AppMode,
  urlUtils,
  queryString,
  IMState,
  SessionManager
} from 'jimu-core'
import { WidgetPlaceholder, DynamicUrlResolver, AlertButton } from 'jimu-ui'
import { IMConfig, EmbedType } from '../config'
import defaultMessages from './translations/default'
import { versionManager } from '../version-manager'
import {
  ViewVisibilityContext,
  ViewVisibilityContextProps,
  searchUtils,
  ParentType,
  utils
} from 'jimu-layouts/layout-runtime'

interface State {
  content?: string
  reuseContent?: string
  isResetting?: boolean
  loadErr?: boolean
  errMessage?: string
  resolveErr?: boolean
  refreshFlag?: boolean
  refreshInterval?: number
  refreshTimer?: any
  changeTimerFlag?: boolean
}

interface Props {
  appMode: AppMode
  sectionNavInfos: any
}

export default class Widget extends React.PureComponent<
AllWidgetProps<IMConfig> & Props,
State
> {
  static versionManager = versionManager
  ifr: HTMLIFrameElement
  needReload: boolean
  // Indicates whether the iFrame needs to be loaded in the View, and keep the loaded iframe ununloaded.
  shouldRenderIframeInView: boolean
  // Indicates whether content needs to be loaded on the iFrame after switching the view.
  needLoadContentInView: boolean
  size: {
    width: number
    height: number
  }

  errMessages: {
    httpsCheck: string
    unSupportUrl: string
    unSupportIframeUrl: string
  }

  static mapExtraStateProps = (
    state: IMState,
    props: AllWidgetProps<IMConfig>
  ): Props => {
    return {
      appMode: state?.appRuntimeInfo?.appMode,
      sectionNavInfos: state?.appRuntimeInfo?.sectionNavInfos
    }
  }

  constructor (props) {
    super(props)
    const { config } = props
    const { embedType, embedCode } = config

    this.errMessages = {
      httpsCheck: this.formatMessage('httpsUrlMessage'),
      unSupportUrl: this.formatMessage('unSupportUrl'),
      unSupportIframeUrl: this.formatMessage('unSupportIframeUrl')
    }

    this.checkUrl = this.checkUrl.bind(this)
    const state: State = {
      content:
        embedType === EmbedType.Url
          ? config.expression
          : embedCode,
      reuseContent: '',
      loadErr: false,
      resolveErr: false,
      refreshFlag: false,
      refreshInterval: 10,
      refreshTimer: undefined,
      changeTimerFlag: false
    }
    this.state = state
    this.shouldRenderIframeInView = false
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (
      !nextProps ||
      Object.keys(nextProps).length === 0 ||
      !prevState ||
      Object.keys(prevState).length === 0
    ) {
      return null
    }
    const { config } = nextProps
    const { autoRefresh = false, autoInterval = 10 } = config
    const { refreshFlag, refreshInterval } = prevState
    if (autoRefresh !== refreshFlag || autoInterval !== refreshInterval) {
      return {
        refreshFlag: autoRefresh,
        refreshInterval: autoInterval,
        changeTimerFlag: true
      }
    } else {
      return null
    }
  }

  componentDidMount () {
    const { config } = this.props
    const { content } = this.state
    if (content && content.trim().length > 0) {
      this.setState(
        {
          isResetting: true
        },
        () => {
          if (config.embedType === EmbedType.Url) {
            this.checkUrl(this.processUrl(content))
          } else {
            this.loadContent()
          }
        }
      )
    }
  }

  componentDidUpdate (preProps, preStates) {
    const {
      appMode,
      config,
      sectionNavInfos,
      layoutId
    } = this.props
    const {
      embedCode,
      embedType,
      autoRefresh,
      autoInterval
    } = config
    const autoConfChange =
      autoRefresh !== preProps.config.autoRefresh ||
      autoInterval !== preProps.config.autoInterval
    const {
      content,
      reuseContent,
      refreshFlag,
      refreshInterval,
      refreshTimer,
      changeTimerFlag
    } = this.state
    const { content: oldContent } = preStates

    if (
      (appMode !== preProps.appMode && appMode === AppMode.Design) ||
      autoConfChange
    ) {
      this.reload()
    }
    if (embedType !== preProps.config.embedType) {
      const content =
        embedType === EmbedType.Url
          ? reuseContent : embedCode
      this.setState({
        loadErr: false,
        resolveErr: false,
        content
      })
    } else {
      if (embedType === EmbedType.Code) {
        if (preProps.config.embedCode !== embedCode) {
          this.setState({
            content: embedCode
          })
        }
      }
    }

    if (content !== oldContent) {
      this.setState(
        {
          isResetting: !!content,
          loadErr: false
        },
        () => {
          if (embedType === EmbedType.Url) {
            this.checkUrl(this.processUrl(content))
          } else {
            this.loadContent()
          }
        }
      )
    }

    // current section change reload embed
    const preSectionNavInfos = preProps.sectionNavInfos
    if (
      this.needLoadContentInView &&
      sectionNavInfos &&
      preSectionNavInfos !== sectionNavInfos
    ) {
      const changedSection = []
      for (const sectionIndex in sectionNavInfos) {
        const curSectionInfo = sectionNavInfos[sectionIndex]
        const preSectionInfo = preSectionNavInfos?.[sectionIndex]
        if (curSectionInfo !== preSectionInfo) {
          changedSection.push(sectionIndex)
        }
      }
      const appState = getAppStore().getState()
      const appConfig = appState?.appConfig
      const pageId = appState?.appRuntimeInfo?.currentPageId
      const sizeMode = utils.getCurrentSizeMode()
      const rootLayoutId = appConfig?.pages?.[pageId]?.layout?.[sizeMode]
      const structure = searchUtils.buildLayoutStructure(appConfig, rootLayoutId, pageId, ParentType.Page, sizeMode)
      const { sectionId } = searchUtils.findParentViewId(layoutId, structure)
      if (changedSection.includes(sectionId)) {
        this.loadContent()
      }
    }

    // autorefresh setting
    if (!refreshTimer && refreshFlag) {
      const autoRefreshTimer = setInterval(() => {
        if (embedType === EmbedType.Url) {
          if (this.ifr) {
            const src = this.ifr.src
            this.ifr.src = ''
            setTimeout(() => {
              if(this.ifr) this.ifr.src = src
            }, 100)
          }
        } else {
          const srcDoc = this.ifr.srcdoc
          this.ifr.srcdoc = srcDoc
        }
      }, refreshInterval * 60 * 1000)
      this.setState({
        refreshTimer: autoRefreshTimer
      })
    } else if (refreshTimer && !refreshFlag) {
      clearInterval(refreshTimer)
      this.setState({
        refreshTimer: undefined
      })
    }
    if (changeTimerFlag && !refreshFlag) {
      if (refreshTimer) clearInterval(refreshTimer)
      const changeTimer = setInterval(() => {
        if (embedType === EmbedType.Url) {
          if (this.ifr) {
            const src = this.ifr.src
            this.ifr.src = ''
            setTimeout(() => {
              if(this.ifr) this.ifr.src = src
            }, 100)
          }
        } else {
          const srcDoc = this.ifr.srcdoc
          this.ifr.srcdoc = srcDoc
        }
      }, refreshInterval * 60 * 1000)
      this.setState({
        refreshTimer: changeTimer,
        changeTimerFlag: false
      })
    }
  }

  iframeOnLoad = evt => {
    this.setState({ isResetting: false })
  }

  checkSafeDomain = (url: string): boolean => {
    let safeFlag = false
    if (!url) return safeFlag
    const safeDomain = ['.arcgis.com', '.esri.com']
    let tobeCheckedDomain = ''
    if (url.includes('https://')) {
      tobeCheckedDomain = url.substr(8).split('/')[0]
    }
    // Check safedomain
    for (const safeItem of safeDomain) {
      if (tobeCheckedDomain.includes(safeItem)) {
        safeFlag = true
        break
      }
    }
    return safeFlag
  }

  processUrl = (url: string): string => {
    if (!url) return url
    // support Google Map, Youtube Facebook Vimeo now.
    const lowerUrl = url.toLowerCase()
    // Google Map
    // if(lowerUrl.indexOf('https://www.google.com/maps') > -1 || lowerUrl.indexOf('https://goo.gl/maps') > -1){//google map
    //   return url;
    // }

    // Vimeo
    if (/https:\/\/vimeo\.com\/.*/.test(lowerUrl)) {
      url = urlUtils.removeSearchFromUrl(url)
      const splits = url.split('/')
      const id = splits[splits.length - 1]
      return `https://player.vimeo.com/video/${id}`
    }

    // Youtube
    if (/https:\/\/www\.youtube\.com\/watch\?.*v=.*/.test(lowerUrl)) {
      const queryObj = queryString.parseUrl(url)?.query
      const id = queryObj?.v
      return `https://www.youtube.com/embed/${id}`
    } else if (/https:\/\/youtu\.be\/.*/.test(lowerUrl)) {
      url = urlUtils.removeSearchFromUrl(url)
      const splits = url.split('/')
      const id = splits[splits.length - 1]
      return `https://www.youtube.com/embed/${id}`
    }

    // Facebook video
    if (/https:\/\/www\.facebook\.com\/.*\/videos\/.*/.test(lowerUrl)) {
      return `https://www.facebook.com/plugins/video.php?href=${lowerUrl}&show_text=0`
    }

    if (!this.checkURLFormat(url)) {
      url = 'about:blank'
    }

    // Check and replace the url to current user's org to avoid duplicate sign-in
    // This is the matching rule, and the target Domain contains these three types, which need to be replaced
    const matchedUrl = [
      '.maps.arcgis.com',
      '.mapsdevext.arcgis.com',
      '.mapsqa.arcgis.com'
    ]
    let tobeCheckedDomain = ''
    if (url.includes('https://')) {
      tobeCheckedDomain = url.substr(8).split('/')[0]
    }
    let matchFlag = false
    let matchEnv = ''
    // Check domain
    for (const item of matchedUrl) {
      if (tobeCheckedDomain.includes(item)) {
        matchFlag = true
        switch (item) {
          case '.maps.arcgis.com':
            matchEnv = 'prod'
            break
          case '.mapsdevext.arcgis.com':
            matchEnv = 'dev'
            break
          case '.mapsqa.arcgis.com':
            matchEnv = 'qa'
            break
        }
        break
      }
    }

    const hostEnv = window.jimuConfig.hostEnv
    if (matchFlag && matchEnv === hostEnv) {
      const appState = getAppStore().getState()
      if (appState && appState.user) {
        const urlKey = appState?.portalSelf?.urlKey
        const customBaseUrl = appState?.portalSelf?.customBaseUrl
        if (tobeCheckedDomain && urlKey && customBaseUrl) {
          url = url.replace(tobeCheckedDomain, `${urlKey}.${customBaseUrl}`)
        }
      }
    }
    return url
  }

  checkURLFormat = (str: string): boolean => {
    if (!str || str === '') {
      this.setState({ errMessage: this.errMessages.unSupportUrl })
      return false
    }
    if (str === 'about:blank') {
      return false
    }
    const httpsRex = '^(([h][t]{2}[p][s])?://)'
    const re = new RegExp(httpsRex)
    if (!re.test(str)) {
      this.setState({ errMessage: this.errMessages.httpsCheck })
      return false
    }
    // url of localhost works without '.'
    const httpsLocalRex = new RegExp('^(([h][t]{2}[p][s])?://localhost)')
    if (httpsLocalRex.test(str)) {
      return true
    }
    const index = str.indexOf('.')
    if (index < 0 || index === str.length - 1) {
      this.setState({ errMessage: this.errMessages.unSupportUrl })
      return false
    }
    return true
  }

  checkUrl (url: string) {
    const { config } = this.props
    const { enableLabel, label } = config
    if (!this.checkURLFormat(url)) {
      this.setState({ loadErr: true })
      return
    } else {
      this.setState({ loadErr: false })
    }
    const appMode = getAppStore()?.getState()?.appRuntimeInfo?.appMode
    if (
      !window.jimuConfig.isInBuilder ||
      appMode === AppMode.Run ||
      window.jimuConfig.isInPortal
    ) {
      this.loadContent()
    }
    if (
      !url ||
      !window.jimuConfig.isInBuilder ||
      appMode === AppMode.Run ||
      window.jimuConfig.isInPortal
    ) { return }
    const supUrl = [
      'https://www.facebook.com/plugins/video.php?show_text=0&href=',
      'https://www.youtube.com/embed/',
      'https://player.vimeo.com/video/'
    ]
    if (supUrl.includes(url)) {
      this.setState({ loadErr: false })
      return
    }
    if (url.indexOf('{') === 0 || url.indexOf('{') > 0 && enableLabel && !!label) {
      return
    }
    this.fetchUrl(`${window.location.origin}/rest/check_url`, url).then(res => {
      let canLoadUrl: boolean = true
      if (res && res.success) {
        const data = res.data
        const status = data?.status
        const cspForbid = ['default-src "self"', 'frame-ancestors']
        const checkCsp = (csp: string) => {
          let embedForbidden = false
          cspForbid.map(rule => {
            if (csp.indexOf(rule) > 0) {
              embedForbidden = true
            }
          })
          return embedForbidden
        }
        if (status && status < 400) {
          const contentSecurityPolicy =
            data?.headers?.['content-security-policy']
          const cspClose =
            contentSecurityPolicy && checkCsp(contentSecurityPolicy)
          if (cspClose) {
            canLoadUrl = false
          }
          const xFrameOptions = data?.headers?.[
            'x-frame-options'
          ]?.toLowerCase()
          if (xFrameOptions) {
            if (xFrameOptions === 'deny') {
              canLoadUrl = false
            } else if (xFrameOptions === 'sameorigin') {
              if (!this.isOriginSameAsLocation(url)) {
                canLoadUrl = false
              }
            }
          }
        } else {
          canLoadUrl = false
        }
      } else {
        canLoadUrl = false
      }
      const alterState: State = {
        loadErr: !canLoadUrl
      }
      if (!canLoadUrl) {
        alterState.isResetting = false
        alterState.errMessage = this.errMessages.unSupportIframeUrl
      } else {
        this.loadContent()
      }
      this.setState(alterState)
    })
  }

  isOriginSameAsLocation (url) {
    // Domains under *.arcgis.com or *.esri.com, should be considered as the same origin.
    const safeDomainArray = ['.arcgis.com', '.esri.com']
    var pageLocation = window.location
    var URL_HOST_PATTERN = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/
    var urlMatch = URL_HOST_PATTERN.exec(url) || []
    var urlparts = {
      protocol: urlMatch[1] || '',
      host: urlMatch[2] || '',
      port: urlMatch[3] || ''
    }
    // Check safedomain
    let safeDomain = ''
    for (const safeItem of safeDomainArray) {
      if (pageLocation.host.includes(safeItem)) {
        safeDomain = safeItem
        break
      }
    }
    if (urlMatch[2].includes(safeDomain)) {
      return true
    }

    const defaultPort = protocol => {
      return { 'http:': 80, 'https:': 443 }[protocol]
    }

    const portOf = location => {
      return (
        location.port || defaultPort(location.protocol || pageLocation.protocol)
      )
    }

    return !!(
      urlparts.protocol &&
      urlparts.protocol == pageLocation.protocol &&
      urlparts.host &&
      urlparts.host == pageLocation.host &&
      urlparts.host &&
      portOf(urlparts) == portOf(pageLocation)
    )
  }

  formatMessage = (id: string) => {
    return this.props.intl.formatMessage({
      id: id,
      defaultMessage: defaultMessages[id]
    })
  }

  fetchUrl = async (fetchUrl, url): Promise<any> => {
    const session = SessionManager.getInstance().getMainSession()
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
    const result = await fetch(fetchUrl, {
      method: 'post',
      headers: headers,
      body: JSON.stringify({ token: session?.token, url })
    }).catch(err => {})
    if (!result) return Promise.resolve(null)
    const json = await result.json().catch(error => {})
    return Promise.resolve(json)
  }

  isUsedDataSource = (props?: AllWidgetProps<IMConfig>) => {
    if (!props) props = this.props
    const { useDataSources, useDataSourcesEnabled } = props
    return useDataSourcesEnabled && useDataSources && useDataSources.length > 0
  }

  reload = () => {
    const { config } = this.props
    if (this.ifr) {
      if (config.embedType === EmbedType.Code) {
        const srcDoc = this.ifr.srcdoc
        this.ifr.srcdoc = srcDoc
      } else {
        const src = this.ifr.src
        this.ifr.src = src
      }
    }
  }

  loadContent = () => {
    const { config } = this.props
    const { content } = this.state
    const { embedType } = config
    const docSafeString =
    `<script>
      if(window !== window.parent || window !== window.top){
        window.parent = undefined
        window.top = undefined
        document.cookie = undefined
        localStorage = undefined
        sessionStorage = undefined
      }
    </script>`
    if (this.ifr) {
      if (embedType === EmbedType.Code) {
        this.ifr.srcdoc = `${docSafeString}${content}`
      } else {
        this.ifr.removeAttribute('srcdoc')
        this.ifr.removeAttribute('src')
        setTimeout(() => {
          if (this.ifr) this.ifr.src = this.processUrl(content)
        }, 100)
      }
    }
  }

  onHtmlResolved = (html) => {
    const { config } = this.props
    const { enableLabel, label } = config
    // html.match(/{[^}]+}/g)
    const trimHtml = html ? html.replace(/(^\s*|\s*$)/g,'') : ''
    const unSolvedTag = trimHtml.indexOf('{') > 0 && enableLabel && !!label
    const errFlag = trimHtml.indexOf('{') === 0 || unSolvedTag
    this.setState({
      content: html,
      reuseContent: html,
      resolveErr: errFlag
    })
  }

  render () {
    const { isResetting, loadErr, errMessage, resolveErr, content } = this.state
    const { theme, id, config } = this.props
    const { embedCode, embedType, expression, enableLabel, label } = config
    // the expression value will be '<p><br></p>' after the input is cleared
    const showPlaceholder =
      embedType === EmbedType.Code
        ? !embedCode : (!expression || expression === '<p><br></p>')

    if (showPlaceholder) {
      return (
        <WidgetPlaceholder
          widgetId={this.props.id}
          icon={require('./assets/icon.svg')}
          message={this.formatMessage('embedHint')}
        />
      )
    }
    let withSandbox = true
    if (embedType === EmbedType.Url) {
      withSandbox = !this.checkSafeDomain(content)
    }

    return (
      <ViewVisibilityContext.Consumer>
        {({ isInView, isInCurrentView }: ViewVisibilityContextProps) => {
          let embedLoad = true
          if (!this.shouldRenderIframeInView) {
            embedLoad = isInView ? isInCurrentView : true
            if (embedLoad) this.shouldRenderIframeInView = true
          }
          this.needLoadContentInView = isInView && isInCurrentView;
          return <>
            {embedLoad &&
              <div style={{ width: '100%', height: '100%', position: 'relative' }} className="jimu-widget widget-embed">
                {withSandbox ? <iframe
                  id="ifrSandbox"
                  className={`iframe-${id}`}
                  style={{ width: '100%', height: '100%' }}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-popups-to-escape-sandbox"
                  allowFullScreen
                  onLoad={this.iframeOnLoad}
                  frameBorder="0"
                  ref={(f) => { this.ifr = f; }}
                  allow="geolocation"
                  data-testid="embedSandbox"
                />
                  : <iframe
                    id="ifrSafe"
                    className={`iframe-${id}`}
                    style={{ width: '100%', height: '100%' }}
                    allowFullScreen
                    onLoad={this.iframeOnLoad}
                    frameBorder="0"
                    ref={(f) => { this.ifr = f; }}
                    allow="geolocation"
                    data-testid="embedSafe"
                  />
                }
                {isResetting && <div className="jimu-secondary-loading"></div>}
                {loadErr &&
                  <div className="mask text-center"
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundColor: theme.colors.white
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <AlertButton
                        buttonType='tertiary'
                        size='small'
                        type='warning'
                      />
                      {errMessage}
                    </div>
                  </div>
                }
                {resolveErr &&
                  <div
                    data-testid='test-expressionMask'
                    className="mask text-center"
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundColor: theme.colors.white
                    }}
                  >
                    <div
                      className={!(enableLabel && label) && 'text-truncate'}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50%'
                      }}
                    >
                      {(enableLabel && label) || content}
                    </div>
                  </div>
                }
                {embedType === EmbedType.Url &&
                  <DynamicUrlResolver
                    widgetId={id}
                    useDataSources={this.props.useDataSources}
                    value={config.expression}
                    onHtmlResolved={this.onHtmlResolved}
                  />
                }
              </div>
            }
          </>
        }}
      </ViewVisibilityContext.Consumer>
    )
  }
}

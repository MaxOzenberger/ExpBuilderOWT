System.register(["jimu-core","jimu-ui"],(function(t){var e,o;return{setters:[function(t){e=t},function(t){o=t}],execute:function(){t(function(t){var e={};function o(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=31)}({0:function(t,o){t.exports=e},1:function(t,e){t.exports=o},31:function(t,e,o){"use strict";o.r(e),o.d(e,"LoadStatus",(function(){return I})),o.d(e,"default",(function(){return v}));var s,n=o(0),l=o(1),i="Sign in",r="Portal URL",a="Client ID",c="Specify the URL to your ArcGIS Online organization or Portal for ArcGIS",d="Provide the Client ID for Experience Builder registered in the portal you specify above",u="Please enter the full URL of your ArcGIS Online organization or Portal for ArcGIS, for example,",p="Unable to access",h="Your application domain is not allowed via Cross-Origin Resource Sharing (CORS) to access",f="A server with the specified hostname could not be found.",g=o(7);!function(t){t.InvalidPortalUrl="InvalidPortalUrl",t.UnableToCorsAccess="UnableToCorsAccess",t.UnableToAccess="UnableToAccess"}(s||(s={}));class m{constructor(){this.validPortalInfos=[]}getDefaultProtalInfo(t){return{isValid:!1,invalidMessage:"",isWebTier:!1,supportsOAuth:!0,tokenInfo:{token:null,expires:null,ssl:!1,server:"",userId:""},url:this.getStandardPortalUrl(t)}}getValidPortalInfo(t){let e=null;return this.validPortalInfos.some(o=>!!n.portalUrlUtils.isSamePortalUrl(t,o.url)&&(e=o,!0)),e}getStandardPortalUrl(t){if(!t)return"";const e=0===t.toLowerCase().indexOf("http://"),o=0===t.toLowerCase().indexOf("https://");return e||o||(t=n.urlUtils.setProtocol(t,n.UrlProtocol.Https)),t=n.portalUrlUtils.getStandardPortalUrl(t),t=n.urlUtils.setProtocol(t,n.UrlProtocol.Https)}validatePortalUrl(t){const e=this.getDefaultProtalInfo(t);return/www.arcgis.com/gi.test(t)?(e.isValid=!1,e.invalidMessage=s.InvalidPortalUrl):e.isValid=!0,e}fetcher(t,e){return fetch(t,e)}generateToken(t){const e=n.urlUtils.setProtocol(n.portalUrlUtils.getPortalRestUrl(t)+"generateToken?f=json",n.UrlProtocol.Https);return this.fetcher(e,{cache:"no-cache",credentials:"include"}).then(t=>t.json()).then(t=>t,t=>null)}getPortalSelfInfo(t){const e=n.urlUtils.setProtocol(n.portalUrlUtils.getPortalRestUrl(t)+"portals/self?f=json",n.UrlProtocol.Https);return this.fetcher(e,{cache:"no-cache",credentials:"include"}).then(t=>t.json()).then(t=>t).catch(t=>g(e,{jsonpCallback:"callback",timeout:3e3}).then(t=>({invalidPortalSelf:!0,invalidMessage:s.UnableToCorsAccess})).catch(t=>({invalidPortalSelf:!0,invalidMessage:s.UnableToAccess})))}getPortalInfo(t){const e=this.getDefaultProtalInfo(t);return this.getPortalSelfInfo(t).then(o=>!o||o.invalidPortalSelf||!o.isPortal&&!o.urlKey?(e.isValid=!1,void(e.invalidMessage=(null==o?void 0:o.invalidMessage)||s.UnableToAccess)):(e.isValid=!0,e.supportsOAuth=o.supportsOAuth,e.tokenInfo.userId=o.user?o.user.username:"",this.validPortalInfos.push(e),this.generateToken(t))).then(o=>(o&&o.token&&(e.tokenInfo.token=o.token,e.tokenInfo.expires=o.expires,e.tokenInfo.ssl=o.ssl,e.tokenInfo.server=n.portalUrlUtils.getPortalRestUrl(t),e.isWebTier=!0,e.supportsOAuth=!1),e))}validatePortal(t){if(!t)return Promise.reject("Portal URL is empty.");let e;const o=this.getStandardPortalUrl(t);let s=this.getValidPortalInfo(o);return s?e=Promise.resolve(s):(s=this.validatePortalUrl(o),e=s.isValid?this.getPortalInfo(o):Promise.resolve(s)),e}}var I,P=function(t,e,o,s){return new(o||(o=Promise))((function(n,l){function i(t){try{a(s.next(t))}catch(t){l(t)}}function r(t){try{a(s.throw(t))}catch(t){l(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(i,r)}a((s=s.apply(t,e||[])).next())}))};!function(t){t.Pending="Pending",t.Fulfilled="Fulfilled",t.Rejected="Rejected"}(I||(I={}));class v extends n.React.PureComponent{constructor(t){super(t),this.checkPortalUrlOnAccept=t=>P(this,void 0,void 0,(function*(){try{let e;return t?(this.setState({loadStatus:I.Pending,selectedPortalInfo:{isValid:!1,invalidMessage:"",isWebTier:!1,supportsOAuth:!0,tokenInfo:null,url:t},showUrlList:!1}),e=yield this.portalValidator.validatePortal(t)):e=this.portalValidator.getDefaultProtalInfo(),this.setState({selectedPortalInfo:e,loadStatus:I.Fulfilled}),!e||e.invalidMessage?{valid:!1}:{valid:!0}}catch(t){return this.setState({loadStatus:I.Rejected}),{valid:!1}}})),this.onSignInBtnClick=()=>{if(!this.state.selectedPortalInfo.isValid)return;const t={portalUrl:this.state.selectedPortalInfo.url,clientId:this.clientIdInput.current.value,supportsOAuth:this.state.selectedPortalInfo.supportsOAuth,isWebTier:this.state.selectedPortalInfo.isWebTier};this.addSigninInfo(t).then(()=>{this.signIn(t)})},this.onUrlListBtnClick=()=>{this.setState({showUrlList:!this.state.showUrlList})},this.onUrlListItemClick=t=>{this.selectPortalUrl(t)},this.portalValidator=new m,this.state={signinInfos:[],showUrlList:!1,loadStatus:I.Pending,selectedPortalInfo:this.portalValidator.getDefaultProtalInfo()},this.urlInput=n.React.createRef(),this.clientIdInput=n.React.createRef()}componentDidMount(){this.fetchSigninInfo()}getDefaultPortalUrl(t){const e=window.jimuConfig.hostEnv||"dev",o=n.urlUtils.getFixedRootPath()+"builder/setting.json";return window.fetch(o).then(t=>t.json()).then(o=>{const s=(window.jimuConfig.isDevEdition?o.devEnv:o.env)[e];return s&&s.portalUrl||t[0]&&t[0].portalUrl||""})}fetchSigninInfo(){const t=`${window.location.protocol}//${window.location.host}/signininfo`;return window.fetch(t,{cache:"no-cache"}).then(t=>t.json()).then(t=>(this.setState({signinInfos:t}),this.getDefaultPortalUrl(t).then(t=>{this.selectPortalUrl(t)}),t)).catch(t=>(console.error(t),t))}addSigninInfo(t){const e=`${window.location.protocol}//${window.location.host}/signinInfo`;return window.fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).catch(t=>{console.error(t)})}getSigninInfo(t){let e=null;return this.state.signinInfos.some(o=>!!n.portalUrlUtils.isSamePortalUrl(o.portalUrl,t)&&(e=o,!0)),e}OAuthSignIn(t){const e=t.portalUrl+"/sharing/rest/",o=`${`${window.location.origin}${n.urlUtils.getFolder(n.moduleLoader.resolveModuleFullPath("jimu-core"))}`}/oauth-callback.html?clientID=${t.clientId}&portal=${e}&isDevEdition=${window.jimuConfig.isDevEdition}&fromUrl=/`,s={portal:e,clientId:t.clientId,redirectUri:o,popup:!1,params:{showSignupOption:!0,signupType:"esri"}};n.esri.restAuth.UserSession.beginOAuth2(s)}webTierSignIn(){const t=this.state.selectedPortalInfo.tokenInfo,e=n.esri.restAuth.UserSession.fromCredential(t);n.SessionManager.getInstance().writeAuthInfo(e),window.location.href="/"}signIn(t){t.supportsOAuth?this.OAuthSignIn(t):this.state.selectedPortalInfo.isWebTier&&this.webTierSignIn()}validatePortal(t){return this.portalValidator.validatePortal(t)}selectPortalUrl(t,e){t?(this.setState({loadStatus:I.Pending,selectedPortalInfo:{isValid:!1,invalidMessage:"",isWebTier:!1,supportsOAuth:!0,tokenInfo:null,url:t},showUrlList:!1}),this.validatePortal(t).then(t=>{this.setState(Object.assign({selectedPortalInfo:t,loadStatus:I.Fulfilled},e))}).catch(()=>this.setState({loadStatus:I.Rejected}))):this.setState({selectedPortalInfo:this.portalValidator.getDefaultProtalInfo(),loadStatus:I.Fulfilled})}render(){const t=Object(n.styled)(l.Button)`
      display: block;
      margin: 0 auto;
    `,e=this.state.signinInfos.map((t,e)=>Object(n.jsx)(l.DropdownItem,{key:e,active:!!n.portalUrlUtils.isSamePortalUrl(t.portalUrl,this.state.selectedPortalInfo.url),onClick:()=>this.onUrlListItemClick(t.portalUrl)},t.portalUrl)),o=this.getSigninInfo(this.state.selectedPortalInfo.url),g=o&&o.clientId||"";let m,P;if(this.state.selectedPortalInfo.url||this.state.loadStatus===I.Pending||(m=Object(n.jsx)("div",null,Object(n.jsx)("div",null,"http://myorg.maps.arcgis.com"),Object(n.jsx)("div",null,"http://myportal.company.com/arcgis"))),this.state.selectedPortalInfo&&this.state.selectedPortalInfo.invalidMessage&&this.state.loadStatus!==I.Pending)if(this.state.selectedPortalInfo.invalidMessage===s.InvalidPortalUrl)P=Object(n.jsx)("div",null,Object(n.jsx)("div",null,this.props.intl.formatMessage({id:"invalidPortalUrlMessage",defaultMessage:u})),Object(n.jsx)("div",null,"http://myorg.maps.arcgis.com"),Object(n.jsx)("div",null,"http://myportal.company.com/arcgis"));else if(this.state.selectedPortalInfo.invalidMessage===s.UnableToCorsAccess){const t=this.props.intl.formatMessage({id:"unableToCorsAccessMessage",defaultMessage:h});P=Object(n.jsx)("div",null,Object(n.jsx)("div",null,`${t} ${this.state.selectedPortalInfo.url}`))}else{const t=this.props.intl.formatMessage({id:"unableToAccessMessage",defaultMessage:p}),e=this.props.intl.formatMessage({id:"invalidHostNameMessage",defaultMessage:f});P=Object(n.jsx)("div",null,Object(n.jsx)("div",null,`${t} ${this.state.selectedPortalInfo.url}`),Object(n.jsx)("div",null,e))}const v=this.state.selectedPortalInfo&&this.state.selectedPortalInfo.supportsOAuth?"displayed":"hidden";let j="hidden",b=!1;this.state.loadStatus===I.Pending&&(b=!0,j="displayed");const U=!this.state.selectedPortalInfo.isValid;return Object(n.jsx)("div",{css:(x=this.props.theme,this.props.isRTL,n.css`
    width: 700px;
    margin: 0 auto;
    .portal-url-input{
      margin-right: 1px;
    }
    .portal-clientId.hidden{
      display: none;
    }
    .loading-panel {
      position: absolute;
      width: 15px;
      background-color: ${x.colors.light};

      .jimu-secondary-loading {
        left: 2px;
        top: 12px;
      }
      
      .jimu-secondary-loading, .jimu-secondary-loading:before, .jimu-secondary-loading:after {
        width: 2px;
        height: 5px;
        left: -27px;
      }
      .jimu-secondary-loading:before {
        left: -5px;
      }
      .jimu-secondary-loading:after {
        left: 5px;
      }
    }

    .loading-panel.hidden {
      display: none;
    }

    .dropdown-menu {
      width: 700px;
    }

    .description, .message {
      color: ${x.colors.palette.dark[600]};
    }

    .invalid-message {
      color: ${x.colors.palette.danger[700]};
    }
  `),className:"widget-set-portalurl"},Object(n.jsx)("div",{className:"mt-5 mb-2"},Object(n.jsx)(l.Label,{className:"description"}," ",this.props.intl.formatMessage({id:"portalUrlDescription",defaultMessage:c})," "),Object(n.jsx)(l.ButtonGroup,{className:"w-100"},Object(n.jsx)(l.InputGroup,null,Object(n.jsx)(l.TextInput,{className:"portal-url-input",id:"caret",disabled:b,size:"lg",placeholder:this.props.intl.formatMessage({id:"portalUrl",defaultMessage:r}),min:0,max:100,type:"text",checkValidityOnAccept:this.checkPortalUrlOnAccept,value:this.state.selectedPortalInfo.url||"",ref:this.urlInput}),Object(n.jsx)(l.InputGroupAddon,{addonType:"append"},Object(n.jsx)("div",{className:"loading-panel "+j},Object(n.jsx)("div",{className:"jimu-secondary-loading"})))),Object(n.jsx)(l.Dropdown,{activeIcon:!0,className:"dropdown",isOpen:this.state.showUrlList,toggle:this.onUrlListBtnClick},Object(n.jsx)(l.DropdownButton,{style:{width:"auto"},icon:!0}),Object(n.jsx)(l.DropdownMenu,{className:"dropdown-menu",zIndex:"55",style:{width:"700px"},alignment:"end"},e)))),Object(n.jsx)(l.FormFeedback,{className:"message mx-2",valid:!0}," ",m," "),Object(n.jsx)(l.FormFeedback,{className:"message invalid-message mx-2",valid:!0}," ",P," "),Object(n.jsx)(l.FormGroup,{className:"portal-clientId mt-5 "+v},Object(n.jsx)(l.Label,{className:"description",for:"clientIdText"}," ",this.props.intl.formatMessage({id:"clientIdDescription",defaultMessage:d})," "),Object(n.jsx)(l.TextInput,{disabled:b,size:"lg",type:"text",name:"text",id:"clientIdText",placeholder:this.props.intl.formatMessage({id:"clientId",defaultMessage:a}),value:g,ref:this.clientIdInput})),Object(n.jsx)(t,{disabled:b||U,size:"lg",onClick:()=>this.onSignInBtnClick()},this.props.intl.formatMessage({id:"portalUrlSignIn",defaultMessage:i})));var x}}v.mapExtraStateProps=t=>({isRTL:t.appContext.isRTL})},7:function(t,e,o){var s,n,l;n=[e,t],void 0===(l="function"==typeof(s=function(t,e){"use strict";var o=5e3,s="callback";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function l(t){try{delete window[t]}catch(e){window[t]=void 0}}function i(t){var e=document.getElementById(t);e&&document.getElementsByTagName("head")[0].removeChild(e)}e.exports=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t,a=e.timeout||o,c=e.jsonpCallback||s,d=void 0;return new Promise((function(o,s){var u=e.jsonpCallbackFunction||n(),p=c+"_"+u;window[u]=function(t){o({ok:!0,json:function(){return Promise.resolve(t)}}),d&&clearTimeout(d),i(p),l(u)},r+=-1===r.indexOf("?")?"?":"&";var h=document.createElement("script");h.setAttribute("src",""+r+c+"="+u),e.charset&&h.setAttribute("charset",e.charset),h.id=p,document.getElementsByTagName("head")[0].appendChild(h),d=setTimeout((function(){s(new Error("JSONP request to "+t+" timed out")),l(u),i(p),window[u]=function(){l(u)}}),a),h.onerror=function(){s(new Error("JSONP request to "+t+" failed")),l(u),i(p),d&&clearTimeout(d)}}))}})?s.apply(e,n):s)||(t.exports=l)}}))}}}));
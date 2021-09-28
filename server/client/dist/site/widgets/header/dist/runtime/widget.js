System.register(["jimu-core","jimu-ui","jimu-for-builder"],(function(e){var t,i,o;return{setters:[function(e){t=e},function(e){i=e},function(e){o=e}],execute:function(){e(function(e){var t={};function i(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=34)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},28:function(e,t){e.exports="data:image/png;base64,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"},3:function(e,t){e.exports=o},34:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return a}));var o,r=i(0),s=i(1),n={createNew:"Create new",newExperience:"New experience",experiences:"Experiences",templates:"Templates",developerEdition:"Developer Edition"},l=i(3);!function(e){e.AppList="applist",e.TemplateList="templatelist"}(o||(o={}));class a extends r.React.PureComponent{constructor(e){super(e),this.titleTextInput=r.React.createRef(),this.spanTextInput=r.React.createRef(),this.getHelpUrl=()=>{var e;null===(e=null===l.helpUtils||void 0===l.helpUtils?void 0:l.helpUtils.getHomeHelpLink())||void 0===e||e.then(e=>{e&&this.setState({helpUrl:e})})},this.focusEditTitle=()=>{this.titleTextInput.current.select()},this.titleTextChange=e=>{const t=e.target.value;this.setState({titleText:t})},this.newApp=()=>{this.setState({menuPopoverOpen:!1}),r.jimuHistory.changePage("template")},this.handleKeydown=e=>{13===e.keyCode&&this.titleTextInput.current.blur()},this.toggleMenu=()=>{this.setState({menuPopoverOpen:!this.state.menuPopoverOpen})},this.toggleNav=e=>{this.setState({views:e})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:n[e]}):e,this.initViews=()=>{const e=this.getQueryString("views");let t=o.AppList;switch(e){case o.AppList:t=o.AppList;break;case o.TemplateList:t=o.TemplateList}this.setState({views:t})},this.checkUserPrivilege=()=>{const{CheckTarget:e}=r.privilegeUtils;r.privilegeUtils.checkExbAccess(e.AppList).then(e=>{this.setState({valid:null==e?void 0:e.valid})})},this.appTaskToggle=this.appTaskToggle.bind(this),this.state={appTaskDropdown:!1,titleText:"",titleLength:0,menuPopoverOpen:!1,views:o.AppList,valid:!1,helpUrl:"#"}}componentDidMount(){this.checkUserPrivilege(),this.initViews(),this.getHelpUrl()}getStyle(){const e=this.props.theme,{colors:t}=e,i=window.jimuConfig.isDevEdition?`"(${this.nls("developerEdition")})"`:"";return r.css`
      min-width: ${r.polished.rem(960)};
      min-height: ${r.polished.rem(50)};
      .widget-site-header {
        background-color: ${t.palette.light[500]};
        border: 1px solid ${t.palette.light[800]};
        padding-left: ${r.polished.rem(16)};
        .header-nav-bar-con {
          & {
            margin-left:${r.polished.rem(92)};
            padding-top: 0;
            padding-bottom: 0;
            height: 100%;
          }
          .jimu-nav {
            border:none;
            height: 100%;
          }
          .navbar-nav .nav-item {
            margin-left: ${r.polished.rem(20)};
            overflow: inherit;
          }
          .navbar-nav .nav-link {
            color: ${t.palette.dark[600]};
            white-space: nowrap;
            line-height: ${r.polished.rem(30)};
            margin-left: ${r.polished.rem(20)};
            padding-left: 0;
            padding-right: 0;
            width: auto;
            font-weight: 300;
          }
          .navbar-nav .nav-link .jimu-nav-link-wrapper{
            margin-bottom: ${r.polished.rem(-4)};
          }
          .nav-link.active {
            font-weight: 500;
            box-sizing: border-box;
          }
          .navbar-nav .nav-link:hover {
            color: ${t.black};
          }
        }
        .header-logo {
          .header-logo-item {
            height: ${r.polished.rem(24)};
            width: ${r.polished.rem(24)};
          }

          .header-logo-container {
            display: block;
            position: relative;
          }

          .header-logo-label {
            font-size: 14px;
            color: ${e.colors.palette.dark[800]};
          }

          .header-logo-label:after {
            color:  #A6A6A6;
            font-size: 10px;
            font-weight: 900;
            content: ${i};
          }

          .header-logo-label:not(:disabled):not(.disabled):active {
            color: ${e.colors.black};
          }
        }



        .header-dropdown {
          float: left;
          color: ${e.colors.black};

          div {
            background-color: ${t.palette.light[500]};
          }

          &:hover {
            background-color: ${e.colors.white};
          }
        }

        .header-login {
          cursor: pointer;
          fill: ${e.colors.black};
        }

        .header-dropdown {
          user-select: none;
          transition: none;
        }

        .header-account {
          float: left;
          color: ${e.colors.black};
          padding-right: ${r.polished.rem(16)};

          div {
            background-color: initial;
          }

        }
        @media (max-width: 1080px) {
          .header-nav-bar-con {
            margin-left:${r.polished.rem(10)};
          }
        }
      }

      .popover-item {
        padding: 0.75rem ${r.polished.rem(16)};

        .popover-item-icon {
          fill: ${e.colors.black};
          color: ${e.colors.black};
        }

        .popover-item-label {
          color: ${e.colors.black}
        }

        &:hover {
          background-color: ${e.colors.primary};
          color: ${e.colors.black}
        }

      }`}appTaskToggle(){this.setState(e=>({appTaskDropdown:!e.appTaskDropdown}))}getSnapshotBeforeUpdate(e,t){return!(!this.props.queryObject.id||e.queryObject.id===this.props.queryObject.id)}componentDidUpdate(e,t,i){i&&this.setState({titleText:""}),this.spanTextInput.current&&this.state.titleLength!==this.spanTextInput.current.offsetWidth&&this.setState({titleLength:this.spanTextInput.current.offsetWidth+2})}getQueryString(e){const t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(t);return null!=i?unescape(i[2]):null}render(){const e=this.getQueryString("locale");return Object(r.jsx)("div",{css:this.getStyle(),className:"h-100"},Object(r.jsx)("div",{className:"widget-site-header d-flex justify-content-between h-100 border-left-0 border-right-0 border-top-0"},Object(r.jsx)("div",{className:"header-logo d-flex align-items-center"},Object(r.jsx)("img",{className:"header-logo-item mr-2 d-block",src:i(28)}),Object(r.jsx)("div",null,Object(r.jsx)("h4",{className:"mb-0 font-weight-normal header-logo-container"},Object(r.jsx)("a",{className:"header-logo-label px-0",href:""+window.jimuConfig.mountPath},"ArcGIS Experience Builder   "))),this.state.valid&&Object(r.jsx)(s.Navbar,{className:"header-nav-bar-con",border:!1,color:"false",light:!0},Object(r.jsx)(s.Nav,{underline:!0,navbar:!0,justified:!0,fill:!0},Object(r.jsx)(s.NavItem,{onClick:()=>{this.toggleNav(o.AppList)},className:"link-con"},Object(r.jsx)(s.NavLink,{active:this.state.views==o.AppList,to:`${location.pathname}?views=experienceslist${e?"&locale="+e:""}`},this.props.intl.formatMessage({id:"experiences",defaultMessage:n.experiences}))),Object(r.jsx)(s.NavItem,{onClick:()=>{this.toggleNav(o.TemplateList)}},Object(r.jsx)(s.NavLink,{active:this.state.views==o.TemplateList,to:`${location.pathname}?views=templatelist${e?"&locale="+e:""}`},this.props.intl.formatMessage({id:"templates",defaultMessage:n.templates})))))),Object(r.jsx)("span",{className:"px-1 border font-weight-normal",style:{fontSize:"16px",position:"absolute",opacity:0,whiteSpace:"pre",zIndex:-1},ref:this.spanTextInput},this.state.titleText),Object(r.jsx)("div",{className:"float-right d-flex"},this.props.user&&Object(r.jsx)(s.UserProfile,{user:this.props.user,portalUrl:this.props.portalUrl,helpUrl:this.state.helpUrl}))))}}a.mapExtraStateProps=e=>({queryObject:e.queryObject})}}))}}}));
System.register(["jimu-core","jimu-ui","jimu-for-builder"],(function(e){var t,s,i;return{setters:[function(e){t=e},function(e){s=e},function(e){i=e}],execute:function(){e(function(e){var t={};function s(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(i,o,function(t){return e[t]}.bind(null,o));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=109)}({0:function(e,s){e.exports=t},1:function(e,t){e.exports=s},109:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h}));var i=s(0),o=s(1),n=s(2),r="Show help guide",a="What's new",l="Live view",p="Lock layout",c="Unable to add widgets in {liveViewElement} mode. Turn off {liveViewElement} to enable it.",d="Unable to insert a widget from here when layout editing is disabled. Turn off the {lockLayoutElement} option to enable it.";const u={page:"./widgets/setting-navigator/dist/runtime/assets/page.svg",data:"./widgets/setting-navigator/dist/runtime/assets/data.svg",theme:"./widgets/setting-navigator/dist/runtime/assets/theme.svg",insert:"./widgets/setting-navigator/dist/runtime/assets/insert.svg"};class h extends i.React.PureComponent{constructor(e){super(e),this.viewLabel={page:this.props.intl.formatMessage({id:"page",defaultMessage:i.defaultMessages.page}),data:this.props.intl.formatMessage({id:"data",defaultMessage:o.defaultMessages.data}),theme:this.props.intl.formatMessage({id:"theme",defaultMessage:i.defaultMessages.theme}),insert:this.props.intl.formatMessage({id:"insert",defaultMessage:o.defaultMessages.insert})},this.onInsertMouseEnter=e=>{"insert"===e&&this.getWhetherViewDisabled("insert")&&this.setState({isInsertDisabledPopperShown:!0})},this.onInsertMouseLeave=e=>{"insert"===e&&this.setState({isInsertDisabledPopperShown:!1})},this.getHelpUrl=()=>{var e;null===(e=null===n.helpUtils||void 0===n.helpUtils?void 0:n.helpUtils.getHomeHelpLink())||void 0===e||e.then(e=>{e&&this.setState({helpHref:e})})},this.getStyle=e=>i.css`
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: ${e.colors.secondary};

      .jimu-nav-link-wrapper{
        > div{
          display: flex;
          justify-content: center;
        }
      }

      .nav.nav-underline {
        border: 0 !important;
        .nav-item{
          display: flex !important;
        }
        .nav-item:focus{
          border: 0;
          outline: none;
          box-shadow: 0 0 0;
        }
        .nav-item > .jimu-link{
          height: auto !important;
          padding-left: 0;
          padding-right: 0;
          position: relative;
          border-width: 0 !important;
          &::before {
            content: " ";
            display: block;
            position: absolute;
            width: 4px;
            height: 100%;
            top: 0;
            left: -4px;
            background-color: ${e.colors.palette.primary[600]};
            transition: left ease-in .2s .2s;
            z-index: 1;
          }
          > .jimu-icon {
            margin: 0;
          }
          &:active,
          &.active {
            border-left-width: 0 !important;
            &::before {
              left: 0;
            }
          }
        }
      }

      .top-sections {
        .link-icon-color{
          svg{
            margin-right: 0 !important;
            margin-left: 0 !important;
          }
        }

        .link-icon-color:not(.disable-setting){
          &:hover{
            svg{
              color: ${e.colors.dark} !important;
            }
          }
        }
      }

      .nav-item:hover{
        background-color: ${e.colors.palette.secondary[600]};
      }

      .active-setting:not(.disable-setting){
        background-color: ${e.colors.palette.light[800]};
      }

      .disable-setting{
        &.nav-item:focus, &.nav-item button:focus, &.nav-item:active, &.nav-item button:active, &.nav-item:hover, &.nav-item button:hover{
          outline: none !important;
          cursor: default !important;
          border: 0 !important;
          box-shadow: 0 0 0 !important;
        }
        &.nav-item button:active::before{
          width: 0 !important;
        }
      }

      .link-focus{
        &:focus, button:focus{
          outline: 0;
          border: 0;
          box-shadow: 0 0 0;
        }
      }

      .top-sections{
        height: ${i.polished.rem(220)};
      }
      .bottom-sections{
        position: absolute;
        bottom: 0;
        .func-buttons{
          width: 100%;
          >span{
            display: inline-block;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .dropdown-button.cover-dropdown-button:hover{
            background-color: ${e.colors.palette.secondary[600]};
            svg{
              color: ${e.colors.dark} !important
            }
          }
        }
      }
    `,this.state={isInsertDisabledPopperShown:!1,helpHref:"#"}}componentDidMount(){this.getHelpUrl(),this.getWhetherDisableInsert(this.props)&&"insert"===this.props.currentViewId&&i.jimuHistory.changeView("opts-section","page")}componentDidUpdate(e){this.getWhetherDisableInsert(this.props)&&!this.getWhetherDisableInsert(e)&&"insert"===this.props.currentViewId&&i.jimuHistory.changeView("opts-section","page")}getWhetherDisableInsert(e){return e.lockLayoutLabel||e.appMode===i.AppMode.Run}changeView(e){this.getWhetherViewDisabled(e)||(this.props.currentViewId===e?Object(i.getAppStore)().dispatch(i.appActions.widgetStatePropChange("left-sidebar","collapse",!this.props.sidebarVisible)):(i.jimuHistory.changeView("opts-section",e),this.props.sidebarVisible||Object(i.getAppStore)().dispatch(i.appActions.widgetStatePropChange("left-sidebar","collapse",!0))))}getWhetherViewDisabled(e){return this.getWhetherDisableInsert(this.props)&&"insert"===e}getWhetherViewActive(e){return e===this.props.currentViewId&&this.props.sidebarVisible}render(){const{sectionJson:e,theme:t}=this.props,s=this.props.intl.formatMessage({id:"liveView",defaultMessage:l}),h=this.props.intl.formatMessage({id:"lockLayouts",defaultMessage:p}),g=this.props.intl.formatMessage({id:"diableInsertDueToLiveViewTip",defaultMessage:c},{liveViewElement:Object(i.jsx)("strong",{key:"diableInsertDueToLiveViewTip"},s)});g[1]=Object(i.jsx)("strong",{key:"diableInsertDueToLiveViewTip_1"},s),g[3]=Object(i.jsx)("strong",{key:"diableInsertDueToLiveViewTip_2"},s);const b=this.props.intl.formatMessage({id:"diableInsertDueToLockLayoutTip",defaultMessage:d},{lockLayoutElement:Object(i.jsx)("strong",{key:"diableInsertDueToLockLayoutTip"},h)});return Object(i.jsx)("div",{css:this.getStyle(t),className:"widget-builder-setting-navigator h-100"},Object(i.jsx)(o.Popper,{open:this.state.isInsertDisabledPopperShown,showArrow:!0,reference:this.insertDom,placement:"right",offset:[0,2],css:i.css`
            width: ${i.polished.rem(300)};
            padding: ${i.polished.rem(12)};
            background-color: ${t.colors.palette.light[500]};
            color: ${t.colors.palette.dark[800]};
            font-size: ${i.polished.rem(13)};
            strong{
              font-size: ${i.polished.rem(16)};
              color: ${t.colors.black};
            }
            .jimu-popper--arrow::after {
              border-right-color: ${t.colors.palette.light[500]} !important;
            }
          `},Object(i.jsx)("div",{className:"insert-disable-tooltip"},this.props.appMode===i.AppMode.Run?Object(i.jsx)("div",null,Object(i.jsx)("div",null,g)):Object(i.jsx)("div",null,Object(i.jsx)("div",null,b)))),Object(i.jsx)(o.Nav,{fill:!0,underline:!0,vertical:!0,right:!0,className:"top-sections"},e.views.map(e=>{const t=this.getWhetherViewDisabled(e),s=this.getWhetherViewActive(e);return Object(i.jsx)(o.NavItem,{key:e,className:Object(i.classNames)("link-icon-color",{"active-setting":s,"disable-setting":t}),disabled:t,onMouseEnter:()=>this.onInsertMouseEnter(e),onMouseLeave:()=>this.onInsertMouseLeave(e)},Object(i.jsx)(o.NavLink,{iconPosition:"above",tag:"button",active:s,onClick:t=>this.changeView(e),themeStyle:{icon:!0},title:this.viewLabel[e]},Object(i.jsx)("div",{className:"w-100 h-100",ref:t=>{"insert"===e&&(this.insertDom=t)}},Object(i.jsx)(o.Icon,{className:Object(i.classNames)({"active-setting":s}),icon:u[e],size:"20",color:t?this.props.theme.colors.palette.secondary[800]:s?this.props.theme.colors.dark:this.props.theme.colors.palette.dark[600]}))))})),Object(i.jsx)("div",{className:"bottom-sections w-100"},Object(i.jsx)("div",{className:"func-buttons"},Object(i.jsx)(o.Dropdown,{direction:"right",className:"link-focus link-icon-color w-100 d-flex justify-content-center"},Object(i.jsx)(o.DropdownButton,{css:i.css`min-height: 3rem`,icon:!0,arrow:!1,title:this.props.intl.formatMessage({id:"help",defaultMessage:o.defaultMessages.help}),className:"cover-dropdown-button"},Object(i.jsx)(o.Icon,{autoFlip:"ar"===window.locale.split("-")[0],icon:"./widgets/setting-navigator/dist/runtime/assets/help.svg",color:this.props.theme.colors.palette.dark[600]})),Object(i.jsx)(o.DropdownMenu,null,Object(i.jsx)(o.DropdownItem,{tag:"a",href:this.state.helpHref,target:"_blank",title:this.props.intl.formatMessage({id:"help",defaultMessage:o.defaultMessages.help})},Object(i.jsx)(o.Icon,{autoFlip:!0,icon:"./widgets/setting-navigator/dist/runtime/assets/help-document.svg",className:"mr-2"}),this.props.intl.formatMessage({id:"help",defaultMessage:o.defaultMessages.help})),Object(i.jsx)(o.DropdownItem,{title:this.props.intl.formatMessage({id:"showGuide",defaultMessage:r}),onClick:()=>{Object(i.getAppStore)().dispatch(n.builderActions.startGuide("opening-tour"))}},Object(i.jsx)(o.Icon,{icon:"./widgets/setting-navigator/dist/runtime/assets/launch.svg",className:"mr-2"}),this.props.intl.formatMessage({id:"showGuide",defaultMessage:r})),Object(i.jsx)(o.DropdownItem,{title:this.props.intl.formatMessage({id:"whatsNew",defaultMessage:a}),onClick:()=>{Object(i.getAppStore)().dispatch(n.builderActions.startGuide("whats-new"))}},Object(i.jsx)(o.Icon,{icon:"./widgets/setting-navigator/dist/runtime/assets/whats-new.svg",className:"mr-2"}),this.props.intl.formatMessage({id:"whatsNew",defaultMessage:a})))))))}}h.mapExtraStateProps=(e,t)=>{var s,i,o,n,r,a,l,p;const c=Object.keys(e.appRuntimeInfo.sectionNavInfos||{}).map(t=>e.appRuntimeInfo.sectionNavInfos[t].currentViewId);return{sectionJson:null===(s=e.appConfig)||void 0===s?void 0:s.sections[t.config.sectionId],currentViewId:c[0]?c[0]:"insert",sidebarVisible:null===(n=null===(o=null===(i=e.widgetsState)||void 0===i?void 0:i["left-sidebar"])||void 0===o?void 0:o.collapse)||void 0===n||n,lockLayoutLabel:null===(l=null===(a=null===(r=e.appStateInBuilder)||void 0===r?void 0:r.appConfig)||void 0===a?void 0:a.forBuilderAttributes)||void 0===l?void 0:l.lockLayout,appMode:null===(p=e.appStateInBuilder)||void 0===p?void 0:p.appRuntimeInfo.appMode}}},2:function(e,t){e.exports=i}}))}}}));
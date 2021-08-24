System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-ui/advanced/data-source-selector","jimu-layouts/layout-builder"],(function(e){var t,o,i,n,s,a,r;return{setters:[function(e){t=e},function(e){o=e},function(e){i=e},function(e){n=e},function(e){s=e},function(e){a=e},function(e){r=e}],execute:function(){e(function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=103)}({0:function(e,o){e.exports=t},1:function(e,t){e.exports=o},103:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return O}));var i=o(0),n=o(2),s=o(1),a=o(3);const r=i.css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;function l(e,t,o){return i.css`
    ${e?r:""};
    overflow: auto;

    .content-section {
      height: 100%;
      width: 100%;
      overflow: auto;
    }

    .content {
      padding: 1.5rem;
      margin: 0 auto;
    }

    .top-section {
      margin-top: 5px;
    }

    .page-name {
      color: ${o.colors.palette.dark[200]};
    }

    .body-section {
      width: 100%;
      display: flex;
      margin-top: 5px;
      overflow: visible;
      position: relative;
      align-items: center;
      // box-shadow: 0 2px 5px 1px rgba(0,0,0,0.15);

      .device-frame {
        position: relative;
        overflow: hidden;
        height: ${t>0?t+"px":"auto"};
        flex-grow: 0;
        flex-shrink: 0;

        &.center-origin {
          transform-origin: top center;
          align-self: center;
        }
        &.left-origin {
          transform-origin: top left;
          align-self: flex-start;
        }

        iframe {
          width: 100%;
          // height: 100%;
          border: none;
          position: relative;
          overflow: visible;
        }
      }
    }
  `}var d=o(4),c=o(6),u=function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};function p(e,t,o){var s,a,r,l,c,p;return u(this,void 0,void 0,(function*(){const{layoutId:h,layoutItemId:m}=o,f=null===(a=null===(s=e.layouts[h])||void 0===s?void 0:s.content[m])||void 0===a?void 0:a.widgetId,v=e.widgets[f],y=Object.keys(null!==(r=null==v?void 0:v.layouts)&&void 0!==r?r:{})[0],b=null===(c=null===(l=null==v?void 0:v.layouts)||void 0===l?void 0:l[y])||void 0===c?void 0:c[t];if(!b)return yield Promise.resolve(e);const C=e.layouts[b],w=Object.keys(null!==(p=C.content)&&void 0!==p?p:{}).sort((e,t)=>parseInt(C.content[e].bbox.left,10)-parseInt(C.content[t].bbox.left,10));let{embedLayoutId:I,updatedAppConfig:x}=yield function(e,t,o){return u(this,void 0,void 0,(function*(){const s=Object(n.getAppConfigAction)(e),a=n.appConfigUtils.getUniqueId(e,"widget"),r={uri:"widgets/layout/column/",id:a},l=yield n.AppWidgetManager.getInstance().handleNewWidgetJson(r);s.createWidget(Object(i.Immutable)(l));const c=Object(i.Immutable)({bbox:{left:0,width:12},id:""+(d.utils.getMaximumId(e.layouts[o])+1),type:i.LayoutItemType.Widget,widgetId:r.id,setting:{autoProps:{height:d.LayoutItemSizeModes.Auto},autoHeight:!0}}),u=s.appConfig.widgets[a],p=Object.keys(u.layouts)[0],g=u.layouts[p][t],h=e.layouts[o].order;return{widgetId:a,embedLayoutId:g,updatedAppConfig:s.appConfig.setIn(["layouts",o,"content",c.id],c).setIn(["layouts",o,"order"],[].concat(null!=h?h:[],c.id))}}))}(e,t,b);for(let e=0;e<w.length;e+=1){const t=x.layouts[b].content[w[e]],o=d.utils.calHeightOfLayoutItem(200,t),i=g(x,{layoutId:b,layoutItemId:w[e]},I),s=i.layoutInfo;x=i.appConfig;let a=Object(n.getAppConfigAction)(x);a.editLayoutItemBBox(s,{width:"auto",height:o.height}).editLayoutItemSetting(s,o.setting),x=a.appConfig}return x=x.setIn(["layouts",h,"content",m,"setting","autoHeight"],!0).setIn(["layouts",h,"content",m,"setting","autoProps","height"],d.LayoutItemSizeModes.Auto),Promise.resolve(x)}))}function g(e,t,o){var i;const{layoutId:n,layoutItemId:s}=t,a=e.layouts[n].content[s],r=e.layouts[o],l=""+(d.utils.getMaximumId(r)+1),c=a.set("id",l).setIn(["setting","autoProps","width"],d.LayoutItemSizeModes.Auto);let u=e.setIn(["layouts",o,"content",l],c).setIn(["layouts",o,"order"],[].concat(null!==(i=r.order)&&void 0!==i?i:[],l)),p=e.layouts[n];const g=[].concat(p.order),h=g.indexOf(s);return g.splice(h,1),p=p.set("content",p.content.without(s)).set("order",g),u=u.setIn(["layouts",n],p),{appConfig:u,layoutInfo:{layoutId:o,layoutItemId:l}}}function h(e){var t,o,s,a,r,l;if((null===(o=null===(t=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===o?void 0:o.appMode)!==i.AppMode.Design)return;const{layoutId:u,layoutItemId:p}=e,g=Object(n.getAppConfigAction)().appConfig,h=null===(a=null===(s=g.layouts[u])||void 0===s?void 0:s.content)||void 0===a?void 0:a[p];if(!h)return;var m;null!==(l=null===(r=g.forBuilderAttributes)||void 0===r?void 0:r.lockLayout)&&void 0!==l&&l?h.type===i.LayoutItemType.Widget&&h.widgetId&&function(e,t){Object(n.getAppConfigAction)().updateLayoutItem(e,"widgetId",void 0).removeWidget(t).exec()}(e,h.widgetId):h.type===i.LayoutItemType.Widget?h.widgetId?function(e,t){const o=Object(n.getAppConfigAction)(),i=d.searchUtils.findParentLayoutItem(e,o.appConfig,Object(c.getRootLayoutId)(),d.utils.getCurrentSizeMode());o.removeWidget(t).exec(),n.builderAppSync.publishChangeSelectionToApp(i)}(e,h.widgetId):function(e){const t=Object(n.getAppConfigAction)(),o=d.searchUtils.findParentLayoutItem(e,t.appConfig,Object(c.getRootLayoutId)(),d.utils.getCurrentSizeMode());t.removeLayoutItem(e,!1).exec(),n.builderAppSync.publishChangeSelectionToApp(o)}(e):h.type===i.LayoutItemType.Section?function(e,t){const o=Object(n.getAppConfigAction)(),i=d.searchUtils.findParentLayoutItem(e,o.appConfig,Object(c.getRootLayoutId)(),d.utils.getCurrentSizeMode());o.removeSection(t).exec(),n.builderAppSync.publishChangeSelectionToApp(i)}(e,h.sectionId):h.type===i.LayoutItemType.ScreenGroup&&(m=h.screenGroupId,Object(n.getAppConfigAction)().removeScreenGroup(m).exec(),n.builderAppSync.publishChangeSelectionToApp(null))}const m=o(30);class f extends i.React.PureComponent{constructor(e){super(e),this.handleCloseBtn=()=>{this.isOkClick=!1,this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.handleOkClick=()=>{this.isOkClick=!0,this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.handleToggle=()=>{this.setState({isOpen:!this.state.isOpen});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.onModalClosed=()=>{const{onClosed:e}=this.props;e&&e(this.isOkClick),this.isOkClick=!1},this.formatMessage=e=>this.props.formatMessage(e),this.getStyle=()=>i.css`
      .modal-body{
        overflow-y: auto;
        max-height: 360px;
        padding: 0;
      }
      .modal-content{
        width: auto;
        background: var(--light-300);
        padding: 30px;
        border: none;
      }
      .modal-footer{
        padding: 0;
        margin-top: 30px;
        .btn {
          min-width: 80px;
          + .btn {
            margin-left: 10px;
          }
        }
      }
      &.modal-dialog{
        width: auto;
      }
      .choose-template-description{
        width: 100%;
        font-size: ${14/17}rem;
        user-select:none;
      }

      .title-icon {
        padding: 0 6px;
      }
      .title-label {
        font-size: 1rem;
        color: var(--black);
      }

      .message {
        color: var(--dark-800);
        margin-left: 36px;
        margin-top: 1rem;
      }
    `,this.state={isOpen:!!e.isOpen}}render(){let{isOpen:e}=this.props;return e=void 0===e?this.state.isOpen:e,Object(i.jsx)(s.Modal,{css:this.getStyle(),modalClassName:"toc-add-page-modal",backdropClassName:"toc-add-page-modal",isOpen:e,onClosed:this.onModalClosed,toggle:this.handleToggle,centered:!0},Object(i.jsx)(s.ModalBody,null,Object(i.jsx)("div",{className:"d-flex align-items-center"},Object(i.jsx)("div",{className:"title-icon"},Object(i.jsx)(s.Icon,{icon:m,size:24,color:"var(--warning-600)"})),Object(i.jsx)("div",{className:"title-label"},this.props.title)),Object(i.jsx)("div",{className:"message font-body2"},this.props.children)),Object(i.jsx)(s.ModalFooter,null,Object(i.jsx)(s.Button,{type:"primary",onClick:this.handleOkClick},this.formatMessage("certainly")),Object(i.jsx)(s.Button,{onClick:this.handleCloseBtn},this.formatMessage("cancel"))))}}var v=function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};class y extends i.React.PureComponent{constructor(e){super(e),this.formatMessage=(e,t)=>this.props.formatMessage(e,t),this.toggleLayoutMode=()=>{const{isAuto:e}=this.props;e?this.handleToggleCustomConfirm():this.handleToggleAutoConfirm()},this.handleToggleAutoConfirm=()=>{this.setState({showAutoConfirm:!this.state.showAutoConfirm})},this.autoConfirmClosed=e=>{e&&(this.props.isHeader?this.resetHeader():this.props.isFooter?this.resetFooter():this.props.isDialog?this.resetDialog():this.resetPageBody())},this.handleToggleCustomConfirm=()=>{this.setState({showCustomConfirm:!this.state.showCustomConfirm})},this.customConfirmClosed=e=>{e&&(this.props.isHeader?this.unLockHeaderLayout():this.props.isFooter?this.unLockFooterLayout():this.props.isDialog?this.unLockDialogLayout():this.unLockPageBodyLayout())},this.unLockFooterLayout=()=>{const{browserSizeMode:e,mainSizeMode:t}=this.props;Object(n.getAppConfigAction)().createLayoutForSizeModeForFooter(e,t).exec()},this.unLockHeaderLayout=()=>{const{browserSizeMode:e,mainSizeMode:t}=this.props;Object(n.getAppConfigAction)().createLayoutForSizeModeForHeader(e,t).exec()},this.unLockPageBodyLayout=()=>v(this,void 0,void 0,(function*(){const{browserSizeMode:e,mainSizeMode:t,pageId:o}=this.props,s=Object(n.getAppConfigAction)(),a=s.appConfig.pages[o];s.createLayoutForSizeModeForPageBody(e,t,o);let r=s.appConfig;if(a.mode===i.PageMode.AutoScroll&&e===i.BrowserSizeMode.Small){const t=r.pages[o].layout[e];r=yield function(e,t,o){return u(this,void 0,void 0,(function*(){const i=[],n=o=>{var s;const a=e.layouts[o],r=null!==(s=a.order)&&void 0!==s?s:[];for(let s=0;s<r.length;s++){const l=a.content[r[s]];if(l.widgetId){const a=e.widgets[l.widgetId];if("widgets/layout/row/"===(null==a?void 0:a.uri)&&i.push({layoutId:o,layoutItemId:r[s]}),null==a?void 0:a.layouts)for(let e in a.layouts){const o=a.layouts[e][t];n(o)}}}};n(o);let s=e;for(let e=0;e<i.length;e++)s=yield p(s,t,i[e]);return Promise.resolve(s)}))}(r,e,t)}Object(n.getAppConfigAction)(r).exec()})),this.unLockDialogLayout=()=>{const{browserSizeMode:e,mainSizeMode:t,dialogId:o}=this.props,i=Object(n.getAppConfigAction)();i.createLayoutForSizeModeForDialog(e,t,o);const s=i.appConfig;Object(n.getAppConfigAction)(s).exec()},this.resetHeader=()=>{const{browserSizeMode:e}=this.props;Object(n.getAppConfigAction)().removeSizeModeLayoutFromHeader(e).exec()},this.resetFooter=()=>{const{browserSizeMode:e}=this.props;Object(n.getAppConfigAction)().removeSizeModeLayoutFromFooter(e).exec()},this.resetPageBody=()=>{const{browserSizeMode:e,pageId:t}=this.props;Object(n.getAppConfigAction)().removeSizeModeLayoutFromPageBody(t,e).exec()},this.resetDialog=()=>{const{browserSizeMode:e,dialogId:t}=this.props;Object(n.getAppConfigAction)().removeSizeModeLayoutFromDialog(t,e).exec()},this.state={showAutoConfirm:!1,showCustomConfirm:!1}}getStyle(){const{isAuto:e,isHeader:t,isFooter:o}=this.props;let n;return o?n=i.css`position: absolute;`:t||o||(n=i.css`
        position: sticky;
        transform: translateZ(1px);
      `),i.css`
      ${n};
      .state-toggle-btn{
        cursor: pointer;
        position: relative;
        padding: 0 1rem;
        overflow: hidden;
        background: var(--light-500);
        border-radius: 2px;
      }
      .toggle-part {
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
      }
      .toggle-highlight {
        position: absolute;
        height: 30px;
        left: 0;
        right: 0;
        background-color: var(--primary);
        transition: 0.2s;
        top: ${e?0:30}px;
      }
    `}getSizeModeNls(e){switch(e){case i.BrowserSizeMode.Small:return this.formatMessage("smallScreen");case i.BrowserSizeMode.Medium:return this.formatMessage("mediumScreen");default:return this.formatMessage("largeScreen")}}render(){const{isAuto:e,theme:t,mainSizeMode:o}=this.props,n=this.getSizeModeNls(o);return Object(i.jsx)("div",{style:this.props.style,css:this.getStyle()},Object(i.jsx)("div",{className:"d-flex flex-column state-toggle-btn",onClick:this.toggleLayoutMode,title:e?`${this.formatMessage("autoEnabledTip",{label:n})} ${this.formatMessage("customDisabledTip")}`:`${this.formatMessage("customEnabledTip")} ${this.formatMessage("autoDisabledTip")}`},Object(i.jsx)("div",{className:"toggle-part text-nowrap"},this.formatMessage("auto")),Object(i.jsx)("div",{className:"toggle-part text-nowrap"},this.formatMessage("custom")),Object(i.jsx)("div",{className:"toggle-highlight"})),Object(i.jsx)(f,{theme:t,toggle:this.handleToggleAutoConfirm,onClosed:this.autoConfirmClosed,title:this.formatMessage("enableConfirm"),isOpen:this.state.showAutoConfirm,formatMessage:this.props.formatMessage},Object(i.jsx)("div",null,Object(i.jsx)("div",null,this.formatMessage("autoConfirmMsg",{label:n,auto:this.formatMessage("auto").toLocaleLowerCase()})))),Object(i.jsx)(f,{theme:t,toggle:this.handleToggleCustomConfirm,onClosed:this.customConfirmClosed,title:this.formatMessage("enableConfirm"),isOpen:this.state.showCustomConfirm,formatMessage:this.props.formatMessage},Object(i.jsx)("div",null,Object(i.jsx)("div",null,this.formatMessage("customConfirmMsg1",{custom:this.formatMessage("custom").toLocaleLowerCase()})),Object(i.jsx)("div",{css:i.css`margin-top: 1rem;`},this.formatMessage("customConfirmMsg2")))))}}var b={certainly:"OK",autoEnabledTip:"Auto layout is enabled. Widgets are synced with those on the {label} and arranged automatically.",autoDisabledTip:"Click to enable auto layout.",customEnabledTip:"Custom layout is enabled. Widgets added in other device modes will not be automatically added here. Alternatively, you can manually add them from the pending list on the Insert panel.",customDisabledTip:"Click to enable custom layout.",confirm:"Confirm",enableConfirm:"Are you sure you want to enable it?",autoConfirmMsg:"By enabling {auto}, the widgets will be synced with those on the {label} and arranged automatically.",customConfirmMsg1:"By enabling {custom}, you can manually arrange widgets for this device mode.",customConfirmMsg2:"However, widgets added in other device modes will not be automatically added here. Alternatively, you can manually add them from the pending list on the Insert panel.",dragToResize:"Drag to resize",largeScreen:"Large screen device",mediumScreen:"Medium screen device",smallScreen:"Small screen device",deleteWarning:'Deleting a widget will remove it from all devices views. Use "Move to the pending list" button to remove it from current device view and preserve it in the others.',confirmDelete:"Are you sure you want to delete this widget from all devices?"};const C=o(30);function w(){return i.utils.getLocalStorageAppKey()+"-confirm-delete-widget"}function I(){return"false"!==i.utils.readLocalStorage(w())}function x(e,t,o,s){var a,r;if(!e)return!1;if(!I())return!1;if(!function(e){var t;if(!e)return!1;const o=Object(n.getAppConfigAction)().appConfig,{layoutId:s,layoutItemId:a}=e,r=o.layouts[s].content[a];if(!r)return!1;if(r.type===i.LayoutItemType.Section)return!0;if(r.type===i.LayoutItemType.Widget&&r.widgetId){return(null===(t=o.widgets[r.widgetId].manifest)||void 0===t?void 0:t.widgetType)!==i.WidgetType.Layout}return!1}(e))return!1;const l=Object(n.getAppConfigAction)().appConfig;let c;return c=t===i.PagePart.Header?null===(a=l.header)||void 0===a?void 0:a.layout:t===i.PagePart.Footer?null===(r=l.footer)||void 0===r?void 0:r.layout:t===i.PagePart.Body?l.pages[o].layout:l.dialogs[s].layout,Object.keys(null!=c?c:{}).length>1&&function(e,t){var o,s;const{layoutId:a,layoutItemId:r}=e,l=Object(n.getAppConfigAction)().appConfig,c=l.layouts[a].content[r],u=c.type;let p;p=u===i.LayoutItemType.Widget?c.widgetId:c.sectionId;const g=null!==(s=null===(o=Object(i.getAppStore)().getState().appStateInBuilder)||void 0===o?void 0:o.browserSizeMode)&&void 0!==s?s:i.BrowserSizeMode.Large;return Object.keys(t).filter(e=>e!==g).some(e=>d.searchUtils.getContentsInLayoutRecursive(l,t[e],u,e).includes(p))}(e,c)}function j(e){const{activePagePart:t,currentPageId:o,currentDialogId:n,formatMessage:a,onConfirmDelete:r,onCancelDelete:l}=e,[d,c]=i.React.useState(!1),u=i.ReactRedux.useSelector(e=>{var t;return null===(t=e.builder)||void 0===t?void 0:t.contentToDelete},i.ReactRedux.shallowEqual),p=i.React.useMemo(()=>x(u,t,o,n),[u,t,o,n]),g=i.React.useCallback(()=>{r(u)},[u]);i.React.useEffect(()=>{u&&!p&&g()},[u,p]);const h=i.React.useCallback(()=>{c(!d)},[d]),m=i.React.useCallback(()=>{c(!1),l()},[]),f=i.React.useCallback(()=>{var e;e=!d,i.utils.setLocalStorage(w(),""+e),g(),c(!1)},[u,d]);return p?Object(i.jsx)(s.Modal,{isOpen:!0,centered:!0,css:i.css`
    .modal-body{
      overflow-y: auto;
      max-height: 360px;
      padding: 0;
    }
    .modal-content{
      width: auto;
      background: var(--light-300);
      padding: 30px;
      border: none;
    }
    .modal-footer{
      padding: 0;
      margin-top: 30px;
      .btn {
        min-width: 80px;
        + .btn {
          margin-left: 10px;
        }
      }
    }
    &.modal-dialog{
      width: auto;
    }

    .title-icon {
      padding: 0 6px;
    }
    .title-label {
      font-size: 1rem;
      color: var(--black);
    }

    .message {
      margin-left: 36px;
      margin-top: 1rem;
    }
  `},Object(i.jsx)(s.ModalBody,null,Object(i.jsx)("div",{className:"d-flex align-items-start"},Object(i.jsx)("div",{className:"title-icon"},Object(i.jsx)(s.Icon,{icon:C,size:24,color:"var(--danger)"})),Object(i.jsx)("div",{className:"title-label"},a("confirmDelete"))),Object(i.jsx)("div",{className:"message"},Object(i.jsx)("div",{"data-testid":"confirmDeleteMessage",className:"font-body2",css:i.css`
            color: var(--dark-800);
          `},a("deleteWarning")),Object(i.jsx)("div",{css:i.css`margin-top: 1.5rem;`},Object(i.jsx)(s.Label,{check:!0,className:"justify-content-start align-items-start",css:i.css`
              color: var(--black);
            `},Object(i.jsx)(s.Checkbox,{"data-testid":"dontShowAgain",style:{cursor:"pointer"},className:"mr-2",checked:d,onChange:h}),a("dialogPreventDisplayAgainDefaultText"))))),Object(i.jsx)(s.ModalFooter,null,Object(i.jsx)(s.Button,{"data-testid":"deleteBtn",type:"danger",onClick:f},a("delete")),Object(i.jsx)(s.Button,{"data-testid":"cancelBtn",onClick:m},a("cancel")))):null}var S=o(5);function M(e){var t,o,s;const a=i.ReactRedux.useSelector(e=>{var t;return null===(t=e.builder)||void 0===t?void 0:t.contentToDelete},i.ReactRedux.shallowEqual),r=i.React.useMemo(()=>function(e){var t,o,s,a,r;let l=!1;const{layoutId:d,layoutItemId:c}=e,u=Object(n.getAppConfigAction)().appConfig,p=null===(s=null===(o=null===(t=u.layouts)||void 0===t?void 0:t[d])||void 0===o?void 0:o.content)||void 0===s?void 0:s[c];if((null==p?void 0:p.type)===i.LayoutItemType.Widget&&p.widgetId){const e=null===(a=u.widgets)||void 0===a?void 0:a[p.widgetId];(null===(r=null==e?void 0:e.outputDataSources)||void 0===r?void 0:r.length)>0&&(l=e.outputDataSources.some(e=>S.dataComponentsUtils.getWidgetsUsingDsOrItsDescendantDss(e,u.widgets).length>0))}return l}(a),[a]),l=i.React.useCallback(()=>{e.onConfirmDelete(a)},[a]);i.React.useEffect(()=>{a&&!r&&l()},[a,r]);const d=i.React.useCallback(()=>{e.onCancelDelete()},[]);if(!r)return null;const c=Object(n.getAppConfigAction)().appConfig,u=null===(s=null===(o=null===(t=null==c?void 0:c.layouts)||void 0===t?void 0:t[null==a?void 0:a.layoutId])||void 0===o?void 0:o.content)||void 0===s?void 0:s[null==a?void 0:a.layoutItemId];return Object(i.jsx)(S.DataSourceRemoveWarningPopup,{isOpen:!0,toggle:d,widgetId:null==u?void 0:u.widgetId,reason:S.DataSourceRemoveWaringReason.SourceWidgetRemoved,afterRemoving:l})}class O extends i.React.PureComponent{constructor(e){super(e),this.resizeIframe=()=>{const{viewportSize:e,pageMode:t,appMode:o,currentDialogId:n}=this.props;if(o!==i.AppMode.Design||n)return void(this.deviceRef.current.style.height=e.height+"px");if(t!==i.PageMode.AutoScroll)return;const s=this.appIframe.contentWindow.document.documentElement.querySelector("div#app > div.page-renderer");if(s){const t=s.getBoundingClientRect(),o=Math.round(Math.max(t.height,e.height));this.deviceRef.current.style.height=o+"px"}},this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e,defaultMessage:b[e]},t),this.onChooseWidget=e=>{const t={id:i.appConfigUtils.getUniqueId(this.props.appConfig,"widget"),uri:e,context:i.appConfigUtils.getWidgetContext(e)};n.AppWidgetManager.getInstance().handleNewWidgetJson(t).then(e=>{this.props.dispatch(n.builderActions.closeChooseWidgetPopup())})},this.clearSelectionInApp=()=>{n.builderAppSync.publishChangeSelectionToApp(null)},this.showConfirmDeleteDsDialog=()=>{this.setState({shouldShowDeleteDsDialog:!0})},this.hideConfirmDeleteDsDialog=()=>{this.setState({shouldShowDeleteDsDialog:!1})},this.removeLayoutItem=e=>{this.resetConfirmDeleteContent(),h({layoutId:null==e?void 0:e.layoutId,layoutItemId:null==e?void 0:e.layoutItemId})},this.resetConfirmDeleteContent=()=>{this.hideConfirmDeleteDsDialog(),Object(i.getAppStore)().dispatch(n.builderActions.confirmDeleteContentChanged(null))},this.state={appUrl:null,isPortrait:!0,shouldShowDeleteDsDialog:!1},this.resizeRef=i.React.createRef(),this.deviceRef=i.React.createRef(),this.contentRef=i.React.createRef(),this.debounceResizeIframe=i.lodash.debounce(this.resizeIframe,200)}componentDidMount(){this.setAppUrl(),i.lodash.defer(()=>this.resizeIframe())}componentDidUpdate(e){this.setAppUrl();const{viewportSize:t,zoomScale:o,appMode:n}=this.props;this.viewportWidth===t.width&&Math.round(10*this.zoomScale)===Math.round(10*o)||(this.viewportWidth=t.width,this.zoomScale=o,this.applyZoomScale(this.props.zoomScale)),n!==e.appMode&&n===i.AppMode.Run&&this.contentRef.current&&(this.contentRef.current.scrollTop=0),this.debounceResizeIframe()}setAppUrl(){const e=i.urlUtils.getAppIdPageIdFromUrl().pageId;if(e&&"default"!==e)return;let t=window.jimuConfig.mountPath+"experience/";const o=this.props.queryObject;let s,a={draft:"true"};if(o.id?(s=o.id,window.jimuConfig.useStructuralUrl?t+=this.props.queryObject.id+"/":a.id=this.props.queryObject.id):o.app_config&&(s=o.app_config,a.config=o.app_config),a=Object.assign(a,o.without("id","config","views","theme")),t+="?"+i.queryString.stringify(a),this.state.appUrl!==t){if(this.props.currentAppId!==s){const e=n.AppResourceManager.getInstance();e.clearResources(this.props.currentAppId),e.clearResources(s),n.WidgetSettingManager.getInstance().deleteAllWidgetSettingClasses()}this.setState({appUrl:t})}this.props.currentAppId!==s&&this.props.dispatch(n.appStateActions.inAppAppStateChanged(null))}calAvailableWidth(){const e=this.contentRef.current.getBoundingClientRect();let t=parseFloat(s.styleUtils.remToPixel("3rem"));return isNaN(t)&&(t=48),e.width-t}applyZoomScale(e,t){const{viewportSize:o}=this.props;(null!=t?t:this.calAvailableWidth())<o.width?(this.deviceRef.current.classList.add("left-origin"),this.deviceRef.current.classList.remove("center-origin")):(this.deviceRef.current.classList.add("center-origin"),this.deviceRef.current.classList.remove("left-origin")),this.deviceRef.current.style.transform=`scale(${e})`}getButtonGroupStyle(){return i.css`
      position: absolute !important;
      right: 20px;
      top: 15px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
      button {
        background: white !important;
        border: none !important;
      }

      button:focus {
        box-shadow: none !important;
      }

      button.active {
        background: #00a6b6 !important;
      }
    `}syncLayoutHandler(){var e,t,o,n;const{appConfig:s,appMode:a,currentPageId:r,browserSizeMode:l,viewportSize:d,currentDialogId:c}=this.props;if(!s||a!==i.AppMode.Design)return null;const u=s.mainSizeMode;if(l===u)return null;let p;p=(null===(t=null===(e=this.deviceRef)||void 0===e?void 0:e.current)||void 0===t?void 0:t.classList.contains("center-origin"))?`calc(50% + ${d.width/2+10}px)`:d.width+10+"px";const g=null===(o=s.pages)||void 0===o?void 0:o[r],h=null===(n=s.dialogs)||void 0===n?void 0:n[c],m=s.header&&g.header&&(s.header.height[l]||s.header.height[u])||0;return Object(i.jsx)("div",{css:i.css`
          position: absolute;
          top: 0;
          bottom: 0;
          left: ${p};
        `,className:"d-flex flex-column sync-layout-handler"},g.header&&!c&&Object(i.jsx)(y,{isAuto:!s.header.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,pageId:r,browserSizeMode:l,mainSizeMode:s.mainSizeMode,isHeader:!0}),!c&&Object(i.jsx)(y,{isAuto:!g.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:s.mainSizeMode,pageId:r,style:{marginTop:Math.max(+m-60,20)+"px",top:20}}),g.footer&&!c&&Object(i.jsx)(y,{isAuto:!s.footer.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:s.mainSizeMode,pageId:r,isFooter:!0,style:{bottom:30}}),c&&Object(i.jsx)(y,{isAuto:!h.layout[l],formatMessage:this.formatMessage,theme:this.props.theme,browserSizeMode:l,mainSizeMode:s.mainSizeMode,dialogId:c,isDialog:!0,style:{top:"calc( 50% - 30px)",position:"fixed"}}))}render(){var e;const{appConfig:t,theme:o,pageMode:r,viewportSize:d,loadAppConfigError:c}=this.props,u=r===i.PageMode.FitWindow,p=this.getScaledViewportSize(),g=null!==(e=null==d?void 0:d.height)&&void 0!==e?e:0,h=t||c;return Object(i.jsx)("div",{css:l(u,g,o),onClick:this.clearSelectionInApp,className:"jimu-widget widget-builder-app-loader"},!h&&i.ReactDOM.createPortal(Object(i.jsx)(s.Loading,{type:s.LoadingType.Primary}),document.body),Object(i.jsx)("div",{className:"content-section",ref:this.contentRef},Object(i.jsx)("div",{className:"content",style:{minHeight:u?p.height+100:null,minWidth:"100%",width:`calc(${p.width}px + 3rem)`}},Object(i.jsx)("div",{ref:this.resizeRef,className:Object(i.classNames)("body-section d-flex flex-column justify-content-start")},Object(i.jsx)("div",{ref:this.deviceRef,className:Object(i.classNames)("device-frame shadow d-flex flex-grow-1",{invisible:!h}),style:Object.assign(Object.assign({},this.getDeviceSize()),{overflow:"visible"})},Object(i.jsx)("iframe",{allowFullScreen:!0,name:i.APP_FRAME_NAME_IN_BUILDER,src:this.state.appUrl,className:"config-preview",ref:e=>this.appIframe=e}),this.syncLayoutHandler())),this.props.showChooseWidgetPopup&&Object(i.jsx)(a.WidgetSelector,{onOK:this.onChooseWidget,title:"Choose Widget",onCancel:()=>this.props.dispatch(n.builderActions.closeChooseWidgetPopup())}))),Object(i.jsx)(j,{formatMessage:this.formatMessage,activePagePart:this.props.activePagePart,currentPageId:this.props.currentPageId,currentDialogId:this.props.currentDialogId,onConfirmDelete:this.showConfirmDeleteDsDialog,onCancelDelete:this.resetConfirmDeleteContent}),this.state.shouldShowDeleteDsDialog&&Object(i.jsx)(M,{onConfirmDelete:this.removeLayoutItem,onCancelDelete:this.resetConfirmDeleteContent}))}getDeviceSize(){const{pageMode:e,viewportSize:t,appMode:o,currentDialogId:n}=this.props;return e===i.PageMode.FitWindow||o!==i.AppMode.Design||e===i.PageMode.AutoScroll&&n?t:{width:t.width}}getScaledViewportSize(){const{viewportSize:e}=this.props,{zoomScale:t}=this.props;return{width:e.width*t,height:e.height*t}}}O.mapExtraStateProps=(e,t)=>{var o,n,s,a,r,l,d,c,u,p,g,h,m,f,v,y,b,C,w,I,x;const j=null===(n=null===(o=e.appStateInBuilder)||void 0===o?void 0:o.appRuntimeInfo)||void 0===n?void 0:n.currentPageId,S=(null===(s=e.appStateInBuilder)||void 0===s?void 0:s.browserSizeMode)||i.BrowserSizeMode.Large;let M;j&&(M=null===(d=null===(l=null===(r=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===r?void 0:r.pages)||void 0===l?void 0:l[j])||void 0===d?void 0:d.mode);const O=i.utils.findViewportSize(null===(c=e.appStateInBuilder)||void 0===c?void 0:c.appConfig,S);return{showChooseWidgetPopup:e.builder.showChooseWidgetPopup,currentDialogId:null===(p=null===(u=e.appStateInBuilder)||void 0===u?void 0:u.appRuntimeInfo)||void 0===p?void 0:p.currentDialogId,currentPageId:j,pageMode:M,viewportSize:O,appConfig:null===(g=e.appStateInBuilder)||void 0===g?void 0:g.appConfig,loadAppConfigError:null===(h=e.appStateInBuilder)||void 0===h?void 0:h.loadAppConfigError,currentAppId:e.builder.currentAppId,browserSizeMode:S,appMode:null===(f=null===(m=e.appStateInBuilder)||void 0===m?void 0:m.appRuntimeInfo)||void 0===f?void 0:f.appMode,zoomScale:null!==(b=null===(y=null===(v=e.appStateInBuilder)||void 0===v?void 0:v.appRuntimeInfo)||void 0===y?void 0:y.zoomScale)&&void 0!==b?b:1,widgetsRuntimeInfo:null===(C=e.appStateInBuilder)||void 0===C?void 0:C.widgetsRuntimeInfo,activePagePart:null===(I=null===(w=e.appStateInBuilder)||void 0===w?void 0:w.appRuntimeInfo)||void 0===I?void 0:I.activePagePart,isRTL:null===(x=e.appContext)||void 0===x?void 0:x.isRTL,queryObject:e.queryObject}}},2:function(e,t){e.exports=i},3:function(e,t){e.exports=n},30:function(e,t){e.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.65 9.793c-.08-.782.547-1.46 1.35-1.46s1.43.678 1.35 1.46l-.525 5.144a.822.822 0 01-.825.73.822.822 0 01-.825-.73l-.526-5.144zM12 20.067c.828 0 1.5-.657 1.5-1.467s-.672-1.467-1.5-1.467-1.5.657-1.5 1.467.672 1.467 1.5 1.467z" fill="#FFC300"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 23L12 1l12 22H0zm2.5-1.467L12 4.117l9.5 17.416h-19z" fill="#FFC300"></path></svg>'},4:function(e,t){e.exports=s},5:function(e,t){e.exports=a},6:function(e,t){e.exports=r}}))}}}));
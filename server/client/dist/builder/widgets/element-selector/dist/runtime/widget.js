System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-layouts/layout-runtime"],(function(e){var t,i,s,o;return{setters:[function(e){t=e},function(e){i=e},function(e){s=e},function(e){o=e}],execute:function(){e(function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=102)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},102:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return k}));var s=i(0),o=i(1);class n extends s.React.PureComponent{constructor(e){super(e),this.onSelectItem=e=>{this.stopBubble(e),this.props.onSelect&&this.props.onSelect(this.props.item)},this.beginDrag=e=>{if(this.props.appMode!==s.AppMode.Design)return;const{item:t}=this.props;if(e.dataTransfer&&e.dataTransfer.setData("exbWidget",t.name||t.id),window._dragging_widget_item=Object.assign(Object.assign({},t),{count:this.uniqueId}),this.uniqueId++,!this.appFrameDoc){const e=document.querySelector(`iframe[name="${s.APP_FRAME_NAME_IN_BUILDER}"]`);this.appFrameDoc=e.contentDocument||e.contentWindow.document}this.appFrameDoc&&this.appFrameDoc.documentElement.classList.add("exb-h5-dragging")},this.endDrag=e=>{window._dragging_widget_item=null,this.appFrameDoc&&this.appFrameDoc.documentElement.classList.remove("exb-h5-dragging")},this.MemoChildFunctionComponent=s.React.memo(({item:e,fullLine:t})=>this.props.children?Object(s.jsx)("div",{className:"w-100 h-100"},this.props.children(e,t)):null),this.uniqueId=0}stopBubble(e){e&&e.stopPropagation?e.stopPropagation():window.event&&(window.event.cancelBubble=!0)}maskStyle(){return s.css`
      position: absolute;
      user-select: none;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      cursor: default;

      &.can-drag {
        cursor: pointer;

        &:active {
          cursor: grabbing;
        }
      }
    `}render(){const{item:e,fullLine:t,appMode:i}=this.props,o=this.MemoChildFunctionComponent;return Object(s.jsx)("div",{className:Object(s.classNames)({"col-6":!t,col:t,[this.props.className]:!!this.props.className}),draggable:i===s.AppMode.Design,onClick:this.onSelectItem,onDragStart:this.beginDrag,onDragEnd:this.endDrag,key:e.name,title:e.label,"data-widget-name":e.name},"function"==typeof this.props.children?Object(s.jsx)(o,{item:e,fullLine:t}):this.props.children,Object(s.jsx)("div",{className:Object(s.classNames)({"can-drag":i===s.AppMode.Design}),css:this.maskStyle()}))}}var a=i(2),r="This area lists widgets that have been configured but not on the current canvas. They may exist in other device modes.",l="Insert widget",p="New",d="Pending",c="Placeholder",u="Basic",m="Layout",h="About this widget",g="Take a tour";const f=()=>{const e={color:"#fff",bg:"#5f5fff",shadow:"0 2px 12px 0 rgba(95,95,255,0.40)"},t={color:"#fff",bg:"#4949ff"};return s.css`
    width: 240px;
    padding: 1rem;
    h1, h2, h3, h4, h5, h6 {
      color: var(--dark-600);
    }
    .btn-primary {
      min-width: 100px;
      color: ${e.color};
      background-color: ${e.bg};
      border: 1px solid transparent;
      box-shadow: ${e.shadow};
      &:hover {
        color: ${t.color};
        background-color: ${t.bg};
        border: 1px solid transparent;
      }
    }
  `};const b=Object(s.injectIntl)((function(e){var t,n;const{widgetItem:r,intl:l}=e,[p,d]=s.React.useState(!1),c=s.React.useRef(),u=s.React.useMemo(()=>l.formatMessage({id:"widgetHelpIconLabel",defaultMessage:h}),[l]),m=s.React.useMemo(()=>l.formatMessage({id:"widgetGuideStart",defaultMessage:g}),[l]);return Object(s.jsx)(s.React.Fragment,null,Object(s.jsx)(o.Button,{type:"tertiary",className:"widget-help-btn",icon:!0,size:"sm",title:u,onClick:()=>{d(!p)},ref:c},Object(s.jsx)(o.Icon,{icon:i(15),size:12}),Object(s.jsx)("span",{className:"sr-only"},m),Object(s.jsx)(o.Popper,{showArrow:!0,css:f,open:p,placement:"right",offset:[0,10],reference:c.current,toggle:()=>{d(!1)}},Object(s.jsx)("h5",null,null==r?void 0:r.label),Object(s.jsx)("p",null,null==r?void 0:r.desription),(null===(n=null===(t=null==r?void 0:r.manifest)||void 0===t?void 0:t.properties)||void 0===n?void 0:n.hasGuide)&&Object(s.jsx)(o.Button,{className:"float-right",type:"primary",size:"sm",onClick:e=>{Object(s.getAppStore)().dispatch(a.builderActions.startGuide(r.uri)),d(!1)}},m))))}));class v extends s.React.PureComponent{constructor(e){super(e)}render(){var e,t,i,n;const{item:a,hideLabel:r}=this.props;return Object(s.jsx)("div",{className:Object(s.classNames)("d-flex justify-content-center w-100 h-100 widget-card-item-content",{"align-items-start":!r,"align-items-center":r,"pt-0":r}),key:a.name},Object(s.jsx)("div",{className:Object(s.classNames)("d-flex flex-column",{"h-100":!r})},(null===(t=null===(e=a.manifest)||void 0===e?void 0:e.properties)||void 0===t?void 0:t.hasGuide)&&Object(s.jsx)(b,{widgetItem:a}),Object(s.jsx)("div",{className:"d-flex justify-content-center"},Object(s.jsx)("div",{className:"widget-card-image"},Object(s.jsx)(o.Icon,{className:"w-100",icon:a.icon,size:20,autoFlip:null===(n=null===(i=a.manifest)||void 0===i?void 0:i.properties)||void 0===n?void 0:n.flipIcon}))),!r&&Object(s.jsx)("div",{className:Object(s.classNames)("widget-card-name flex-grow-1 d-flex align-items-center mt-0"),title:a.label},Object(s.jsx)("span",{className:"text-center text-truncate widget-card-name-content",title:a.label},a.label))))}}function j(e,t){return!!e&&(!t||e.toLocaleLowerCase().includes(t.toLocaleLowerCase()))}function x(e){var t,i,s;return"insert"===(Object.keys((null===(t=null==e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos)||{}).map(t=>{var i;return null===(i=e.appRuntimeInfo.sectionNavInfos[t])||void 0===i?void 0:i.currentViewId})[0]||"insert")&&(null===(s=null===(i=null==e?void 0:e.widgetsState)||void 0===i?void 0:i["left-sidebar"])||void 0===s?void 0:s.collapse)}class w extends s.React.PureComponent{constructor(e){super(e),this.sectionItem={itemType:s.LayoutItemType.Section,label:this.props.intl.formatMessage({id:"section",defaultMessage:s.defaultMessages.section}),uri:"",manifest:{properties:{},defaultSize:{width:500,height:500}},icon:"./widgets/element-selector/dist/runtime/assets/section.svg",name:"section"},this.placeholderItem={itemType:s.LayoutItemType.Widget,label:this.props.intl.formatMessage({id:"placeholder",defaultMessage:c}),uri:null,manifest:{defaultSize:{width:300,height:300}},icon:"./widgets/element-selector/dist/runtime/assets/placeholder.svg",name:"placeholder"},this.state={selectedItemName:""}}isLoading(){return!this.props.widgetList}render(){const e=this.props.widgetList||[],t={label:this.props.intl.formatMessage({id:"basicWidget",defaultMessage:u}),groups:[]},i={label:this.props.intl.formatMessage({id:"layoutWidget",defaultMessage:m}),groups:[{groupId:8,itemList:[]}]},o={label:this.props.intl.formatMessage({id:"section",defaultMessage:s.defaultMessages.section}),groups:[{groupId:9,itemList:[]}]};return j(this.sectionItem.label,this.props.searchValue)&&o.groups[0].itemList.push(this.sectionItem),e.forEach(e=>{if(j(e.label,this.props.searchValue))if(e.manifest.widgetType===s.WidgetType.Layout)i.groups[0].itemList.push(e);else if("navigator"===e.manifest.name)o.groups[0].itemList.push(e);else{const i=t.groups.find(t=>t.groupId===e.group);i?i.itemList.push(e):t.groups.push({groupId:e.group,itemList:[e]})}}),j(this.placeholderItem.label,this.props.searchValue)&&i.groups[0].itemList.push(this.placeholderItem),Object(s.jsx)("div",{className:"flex-column bg-light-300 d-flex"},Object(s.jsx)("div",{className:"jimu-builder-panel--content choose-widget-popup-content text-black"},this.isLoading()?Object(s.jsx)("div",{className:"jimu-secondary-loading"}):Object(s.jsx)("div",null,Object(s.jsx)(I,{info:t,appMode:this.props.appMode}),Object(s.jsx)(I,{info:i,appMode:this.props.appMode}),Object(s.jsx)(I,{info:o,appMode:this.props.appMode}))))}}function I({info:e,appMode:t}){const{label:i,groups:o}=e;return Object(s.jsx)("section",{className:"mb-4 mt-2 px-3"},Object(s.jsx)("h4",{className:"new-elements-title text-break"},i),o.map((e,i)=>Object(s.jsx)(y,{key:e.groupId,group:e,isLast:i===o.length-1,appMode:t})))}function y({group:e,isLast:t,appMode:i}){return Object(s.jsx)("div",{className:Object(s.classNames)("container-fluid p-0",{"mb-10":!t})},Object(s.jsx)("div",{className:"row no-gutters"},e.itemList.map((e,t)=>e?Object(s.jsx)(n,{item:e,fullLine:!1,className:"widget-card-item mt-2",appMode:i,key:t},(e,t)=>Object(s.jsx)(v,{item:e,hideLabel:!1})):Object(s.jsx)("div",{className:"col-6",style:{visibility:"hidden"},key:t}))))}const M=s.themeUtils.withTheme(w);var O=i(4);class S extends s.React.PureComponent{constructor(e){super(e),this.getListItemJSX=e=>{if(!e)return Object(s.jsx)("div",{className:"col-6",style:{visibility:"hidden"}});const t=this.Item;return Object(s.jsx)("div",{key:e.name||e.id},Object(s.jsx)(n,{item:e,fullLine:!0,appMode:this.props.appMode,className:"dragable-element p-0 mb-12"},()=>Object(s.jsx)(t,{item:e})))},this.Item=({item:e})=>{var t,i;const n="string"==typeof e.icon?e.icon:e.icon&&e.icon.svg,a="string"==typeof e.icon?null:e.icon&&e.icon.properties&&e.icon.properties.color;return Object(s.jsx)("div",{title:e.label,className:"d-flex align-items-center pendding-elements-item px-2"},Object(s.jsx)("div",{className:"pendding-elements-item-icon-container d-flex justify-content-center align-items-center"},Object(s.jsx)(o.Icon,{className:"pendding-elements-item-icon",icon:n,color:a,autoFlip:null===(i=null===(t=e.manifest)||void 0===t?void 0:t.properties)||void 0===i?void 0:i.flipIcon})),Object(s.jsx)("div",{className:"text-truncate pendding-elements-item-label"},e.label))}}render(){return Object(s.jsx)("div",{className:"w-100"},this.getListItemJSX(this.props.item))}}const L=s.themeUtils.withTheme(S);class P extends s.React.PureComponent{constructor(){super(...arguments),this.convertLayoutItemToElementItem=(e,t)=>{var i,o;const n=this.props.layouts[e.layoutId].content[e.layoutItemId],a=null===(i=Object(s.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appConfig,r=O.searchUtils.getWidgetIdThatUseTheLayoutId(a,e.layoutId);if(n.type===s.LayoutItemType.Widget){const i=n.widgetId,o=this.props.widgets[i];let a;a=r&&this.props.widgets[r].manifest.widgetType!==s.WidgetType.Layout?Object.keys(this.props.widgets[r].layouts).length>1&&this.props.layouts[e.layoutId].label?this.props.widgets[r].label+"-"+this.props.layouts[e.layoutId].label+"-"+o.label:this.props.widgets[r].label+"-"+o.label:o.label;const l=o&&o.icon?"string"==typeof o.icon?o.icon:o.icon.asMutable({deep:!0}):"./widgets/element-selector/dist/runtime/assets/section.svg";return{id:n.widgetId,itemType:s.LayoutItemType.Widget,layoutInfo:e,isFromCurrentSizeMode:t,label:a,uri:o&&o.uri,icon:l,manifest:o&&o.manifest&&o.manifest.asMutable({deep:!0})}}if(n.type===s.LayoutItemType.Section){const i=n.sectionId,a=null===(o=this.props.sections)||void 0===o?void 0:o[i],r=a&&a.icon?"string"==typeof a.icon?a.icon:a.icon.asMutable({deep:!0}):"./widgets/element-selector/dist/runtime/assets/section.svg";return{id:i,itemType:s.LayoutItemType.Section,layoutInfo:e,isFromCurrentSizeMode:t,label:a&&a.label,uri:"",icon:r,manifest:{properties:{}}}}return null}}render(){var e,t,i,o,n,a,l,p,d,c,u,m,h,g;if(!this.props.currentPageId||!(null===(e=this.props.pages)||void 0===e?void 0:e[this.props.currentPageId])||(null===(i=null===(t=this.props.pages)||void 0===t?void 0:t[this.props.currentPageId])||void 0===i?void 0:i.type)!==s.PageType.Normal)return null;if(this.props.activeOptsSectionViewId&&"insert"!==this.props.activeOptsSectionViewId)return null;const f=null===(o=Object(s.getAppStore)().getState().appStateInBuilder)||void 0===o?void 0:o.appConfig;if(!f)return null;let b;b=this.props.activePagePart===s.PagePart.Header?null===(a=null===(n=f.header)||void 0===n?void 0:n.layout)||void 0===a?void 0:a[this.props.browserSizeMode]:this.props.activePagePart===s.PagePart.Footer?null===(p=null===(l=f.footer)||void 0===l?void 0:l.layout)||void 0===p?void 0:p[this.props.browserSizeMode]:this.props.activePagePart===s.PagePart.Body?null===(u=null===(c=null===(d=f.pages)||void 0===d?void 0:d[this.props.currentPageId])||void 0===c?void 0:c.layout)||void 0===u?void 0:u[this.props.browserSizeMode]:null===(g=null===(h=null===(m=f.dialogs)||void 0===m?void 0:m[this.props.currentDialogId])||void 0===h?void 0:h.layout)||void 0===g?void 0:g[this.props.browserSizeMode];const v=b?O.searchUtils.getPendingLayoutItemsFromOtherSizeModeInPage(f,this.props.currentPageId,this.props.browserSizeMode,this.props.activePagePart):[],x=b?O.searchUtils.getPendingLayoutItemsFromOtherSizeModeInDialog(f,this.props.currentDialogId,this.props.browserSizeMode):[],w=v.map(e=>this.convertLayoutItemToElementItem(e,!1)).concat(x.map(e=>this.convertLayoutItemToElementItem(e,!1))),I=b?O.searchUtils.getPendingLayoutItemsInPage(f,this.props.currentPageId,this.props.browserSizeMode,this.props.activePagePart):[],y=b?O.searchUtils.getPendingLayoutItemsInDialog(f,this.props.currentDialogId,this.props.browserSizeMode):[],M=I.map(e=>this.convertLayoutItemToElementItem(e,!0)).concat(y.map(e=>this.convertLayoutItemToElementItem(e,!0))),S=w.concat(M).filter(e=>j(e.label,this.props.searchValue));return Object(s.jsx)("div",{className:"flex-column bg-light-300 d-flex px-3 pb-3"},0===S.length&&Object(s.jsx)("div",{className:"pt-1 text-white-50 text-left text-break"},this.props.intl.formatMessage({id:"pendingElementsInfo",defaultMessage:r})),S.map(e=>Object(s.jsx)(L,{key:e.id,item:e,appMode:this.props.appMode})))}}const N=s.ReactRedux.connect((function(e){var t,i,s,o,n,a,r,l,p,d,c,u,m,h,g,f;return x(e)?{currentPageId:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.currentPageId,currentDialogId:null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo.currentDialogId,appMode:null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appRuntimeInfo.appMode,browserSizeMode:null===(o=e.appStateInBuilder)||void 0===o?void 0:o.browserSizeMode,activePagePart:null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appRuntimeInfo.activePagePart,layouts:null===(r=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig)||void 0===r?void 0:r.layouts,widgets:null===(p=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appConfig)||void 0===p?void 0:p.widgets,pages:null===(c=null===(d=e.appStateInBuilder)||void 0===d?void 0:d.appConfig)||void 0===c?void 0:c.pages,sections:null===(m=null===(u=e.appStateInBuilder)||void 0===u?void 0:u.appConfig)||void 0===m?void 0:m.sections,activeOptsSectionViewId:null===(f=null===(g=null===(h=e.appRuntimeInfo)||void 0===h?void 0:h.sectionNavInfos)||void 0===g?void 0:g["opts-section"])||void 0===f?void 0:f.currentViewId}:{}}))(s.themeUtils.withTheme(P));var z=function(e,t,i,s){return new(i||(i=Promise))((function(o,n){function a(e){try{l(s.next(e))}catch(e){n(e)}}function r(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,r)}l((s=s.apply(e,t||[])).next())}))};const T=i(12);class k extends s.React.PureComponent{constructor(e){super(e),this.onSearchIconClick=e=>{this.setState({isSearchInputShown:!this.state.isSearchInputShown})},this.onSearchValueChange=e=>{this.setState({searchValue:e.target.value})},this.MemoNewElements=s.React.memo(e=>Object(s.jsx)(M,{widgetList:e.widgetList,appMode:e.appMode,intl:e.intl,searchValue:e.searchValue})),this.MemoPendingElements=s.React.memo(e=>Object(s.jsx)(N,{intl:e.intl,searchValue:e.searchValue})),this.state={widgetList:null,isSearchInputShown:!1,searchValue:""}}componentDidMount(){this.getWidgetListInfo()}componentDidUpdate(e,t){t.isSearchInputShown!==this.state.isSearchInputShown&&this.state.isSearchInputShown&&this.searchInput&&(this.searchInput.focus(),this.searchInput.select())}getWidgetListInfo(){fetch(s.moduleLoader.resolveModuleFullPath("widgets/")+"/widgets-info.json").then(e=>z(this,void 0,void 0,(function*(){return yield e.json()}))).then(e=>{const t=e.map(e=>{var t,i;e.manifest=s.appConfigUtils.addWidgetManifestProperties(e.manifest);const o=s.i18n.findLocale(Object(s.getAppStore)().getState().appContext.locale,e.manifest.translatedLocales);return{itemType:s.LayoutItemType.Widget,name:e.name,label:(null===(t=e.i18nLabel)||void 0===t?void 0:t[o])||e.manifest.label||e.name,desription:(null===(i=e.i18nDescription)||void 0===i?void 0:i[o])||e.manifest.desription||e.name,uri:e.uri,manifest:e.manifest,icon:"../"+e.icon,group:e.group}});this.setState({widgetList:t})})}render(){const e=this.MemoNewElements,t=this.MemoPendingElements;return Object(s.jsx)("div",{css:(i=this.props.theme,s.css`
  .widget-builder-header-insert-elements {
    .text-dark-600{
      color: ${i.colors.palette.dark[600]};
    }
    .mb-10{
      margin-bottom: ${s.polished.rem(10)};
    }
    .mb-18{
      margin-bottom: ${s.polished.rem(18)};
    }
    .mb-12{
      margin-bottom: ${s.polished.rem(12)};
    }
    .title{
      padding: 18px 16px 8px 16px !important;
      font-size: 1rem !important;
      font-weight: 500;
      .search-icon{
        cursor: pointer;
        width: 30px;
      }
    }
    .search-input{
      height: 26px;
      border-radius: 2px;
    }
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    text-align: left;
    /* border-right: 1px solid ${i.colors.palette.light[800]}; */
    .collapse-btn{
      cursor: pointer;
      .jimu-icon{
        vertical-align: top;
      }
    }
    .jimu-nav{
      flex-shrink: 0;
      flex-grow: 0;
    }
    .new-elements-title{
      font-size: 14px;
      font-weight: 400;
      color: ${i.colors.palette.dark[400]};
      margin-bottom: ${s.polished.rem(8)};
    }
    .jimu-nav{
      height: ${s.polished.rem(43)} !important;
    }
    .jimu-tab{
      height: calc(100% - 50px);
    }
    .with-search-input.jimu-tab{
      height: calc(100% - 90px);
    }
    .tab-content{
      overflow: auto;
      padding-top: ${s.polished.rem(18)};
    }

    .dragable-element:hover{
      .pendding-elements-item{
        background-color: ${i.colors.palette.light[600]};
      }
    }

    .pendding-elements-item{
      height: ${s.polished.rem(32)};
      background: ${i.colors.secondary};

      .pendding-elements-item-icon-container{
        margin-right: ${s.polished.rem(8)};
        .pendding-elements-item-icon{
          width: ${s.polished.rem(16)};
          height: ${s.polished.rem(16)};
          color: ${i.colors.palette.dark[800]};
        }
      }
      .pendding-elements-item-label{
        max-width: ${s.polished.rem(180)};
        color: ${i.colors.palette.dark[800]};
        line-height: ${s.polished.rem(32)};
        font-size: ${s.polished.rem(13)};
      }
    }

    .btn{
      .jimu-icon{
        margin: 0;
      }
    }
    .jimu-builder-panel--header {
      padding: ${i.sizes[2]} ${i.sizes[3]};
      display: flex;
      flex-direction: row;
      align-items: center;
      h3 {
        margin: 0;
        line-height: 1.5;
        flex-grow: 1;
      }
    }
    .jimu-builder-panel--content {
      height: 100%;
      overflow: auto;
      .widget-card-item{
        height: 80px;
        font-size: 13px;

        user-select: none;
        cursor: pointer;
        .widget-card-item-content{
          position: relative;
          padding-top: 16px;
          background-color: ${i.colors.palette.light[500]};
        }
        &:hover .widget-card-item-content{
          background-color: ${i.colors.palette.light[600]};
        }
        .widget-card-image{
          width: 20px;
          height: 20px;
          &:after{
            display: none;
          }
        }

        .widget-card-name{
          max-width: 90px;
          margin: 0 auto;
          .widget-card-name-content{
            line-height: 1rem;
            max-height:2rem;
            white-space: normal;
          }
        }

        .widget-help-btn {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
        }
      }

      .row {
        .col-6:nth-of-type(2n) {
          padding-left: ${i.sizes[1]};
        }
        .col-6:nth-of-type(2n+1) {
          padding-right: ${i.sizes[1]};
        }

        .col {
          flex-basis: 100%;
        }
      }
    }
    &.widget-popup-hide-animation{
      transition: transform 0.3s ease-out;
      &.from-left {
        transform: translateX(-100%);
      }
      &.from-right {
        transform: translateX(100%);
      }
    }
    &.widget-popup-show-animation{
      transition: transform 0.3s ease-in;
      &.from-left {
        transform: translateX(0%);
      }
      &.from-right {
        transform: translateX(0%);
      }
    }
    &.from-left {
      left: 0;
    }
    &.from-right {
      right: 0;
    }
  }`)},Object(s.jsx)("div",{className:"jimu-builder-panel widget-builder-header-insert-elements from-left flex-column bg-light-300"},Object(s.jsx)("div",{className:"jimu-builder-panel--header d-flex flex-row justify-content-between text-dark-600 title"},Object(s.jsx)("div",{className:"flex-grow-1 m-0 text-truncate text-left"},this.props.intl.formatMessage({id:"element",defaultMessage:l})),Object(s.jsx)("div",{className:"search-icon d-flex align-items-start justify-content-end",onClick:this.onSearchIconClick,title:this.props.intl.formatMessage({id:"search",defaultMessage:s.defaultMessages.search})},Object(s.jsx)(o.Button,{size:"sm",icon:!0,type:"tertiary"},Object(s.jsx)(o.Icon,{icon:T,size:16})))),Object(s.jsx)("div",{className:"w-100 px-3"},this.state.isSearchInputShown&&Object(s.jsx)(o.TextInput,{value:this.state.searchValue,onChange:this.onSearchValueChange,className:"search-input my-2",placeholder:this.props.intl.formatMessage({id:"search",defaultMessage:s.defaultMessages.search}),ref:e=>this.searchInput=e})),Object(s.jsx)(o.Tabs,{type:"underline",fill:!0,className:Object(s.classNames)({"with-search-input":this.state.isSearchInputShown}),defaultValue:"new"},Object(s.jsx)(o.Tab,{id:"new",className:"w-50",title:this.props.intl.formatMessage({id:"new",defaultMessage:p})},Object(s.jsx)(e,{widgetList:this.state.widgetList,appMode:this.props.appMode,intl:this.props.intl,searchValue:this.state.searchValue})),Object(s.jsx)(o.Tab,{id:"pending",className:"w-50",title:this.props.intl.formatMessage({id:"pending",defaultMessage:d})},Object(s.jsx)(t,{intl:this.props.intl,searchValue:this.state.searchValue})))));var i}}k.mapExtraStateProps=e=>{var t,i,s;return x(e)?{appMode:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.appMode,appPath:e.appPath,browserSizeMode:null===(i=e.appStateInBuilder)||void 0===i?void 0:i.browserSizeMode,activePagePart:null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appRuntimeInfo.activePagePart}:{}}},12:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 13a7 7 0 115.621-2.828l-.222.284 3.405 3.404a.668.668 0 01-.944.944L11.456 12.4A6.974 6.974 0 017 14z" fill="#000" fill-rule="evenodd"></path></svg>'},15:function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 3.5a1 1 0 11-2 0 1 1 0 012 0zM5 5.5a.5.5 0 000 1h.5v2H5a.5.5 0 000 1h2a.5.5 0 000-1h-.5v-3H5z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6A6 6 0 110 6a6 6 0 0112 0zm-1 0A5 5 0 111 6a5 5 0 0110 0z" fill="#000"></path></svg>'},2:function(e,t){e.exports=s},4:function(e,t){e.exports=o}}))}}}));
System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-ui/advanced/setting-components"],(function(e){var t,o,a,i;return{setters:[function(e){t=e},function(e){o=e},function(e){a=e},function(e){i=e}],execute:function(){e(function(e){var t={};function o(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=107)}({0:function(e,o){e.exports=t},1:function(e,t){e.exports=o},107:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return h}));var a=o(0),i=o(1),r=o(2);var n=o(3);function l(e){const{pageId:t,label:o,isInFolder:r,isFolder:n,isActive:l,hasSubPage:s,onSelect:c}=e,d=a.React.useCallback(()=>{c(t)},[t,c]);return Object(a.jsx)(i.DropdownItem,{className:Object(a.classNames)({"page-item":!n||s,"in-folder":r,folder:n&&!s,"has-subpage":s,active:l}),active:l,header:n&&!s,onClick:d},Object(a.jsx)("div",{className:"text-truncate w-100",title:o},o))}function s(e){Object(n.changeCurrentPage)(e)}function c(e){const t=a.ReactRedux.useSelector(e=>{var t,o;return null===(o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.pageStructure}),o=[];if(t){const e=Object(r.getAppConfigAction)().appConfig.pages;t.forEach(t=>{var i,r;const n=Object.keys(t)[0],l=e[n];if(l.type===a.PageType.Normal)if((null===(i=t[n])||void 0===i?void 0:i.length)>0){const i=[];t[n].forEach(t=>{const o=e[t];o.type===a.PageType.Normal&&i.push({pageId:t,label:o.label,isInFolder:!0})}),i.length>0?(o.push({pageId:n,label:l.label,isFolder:!0,hasSubPage:!0}),o.push(...i)):o.push({pageId:n,label:l.label})}else o.push({pageId:n,label:l.label});else if(l.type===a.PageType.Folder){const i=[];(null===(r=t[n])||void 0===r?void 0:r.length)>0&&t[n].forEach(t=>{const o=e[t];o.type===a.PageType.Normal&&i.push({pageId:t,label:o.label,isInFolder:!0})}),i.length>0&&(o.push({pageId:n,label:l.label,isFolder:!0}),o.push(...i))}})}return Object(a.jsx)(a.React.Fragment,null,o.map(t=>Object(a.jsx)(l,Object.assign({key:t.pageId,onSelect:s,isActive:t.pageId===e.currentPageId},t))))}function d(e){Object(n.changeCurrentDialog)(e)}function p(e){const t=a.ReactRedux.useSelector(e=>{var t,o;return null===(o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.dialogs});if(!t||0===Object.keys(t).length)return null;const o=[],r=[];return Object.keys(t).forEach(e=>{const i=t[e];i.mode===a.DialogMode.Fixed?o.push({id:e,label:i.label}):i.mode===a.DialogMode.Anchored&&r.push({id:e,label:i.label})}),Object(a.jsx)(a.React.Fragment,null,Object(a.jsx)(i.DropdownItem,{header:!0,className:"page-header"},e.formatMessage("dialog")),Object(a.jsx)(i.DropdownItem,{className:"folder",header:!0},e.formatMessage("fixedWindows")),o.map(t=>Object(a.jsx)(i.DropdownItem,{key:t.id,className:Object(a.classNames)("page-item in-folder",{active:e.currentDialogId===t.id}),active:e.currentDialogId===t.id,onClick:()=>d(t.id)},Object(a.jsx)("div",{className:"text-truncate w-100",title:t.label},t.label))),Object(a.jsx)(i.DropdownItem,{className:"folder",header:!0},e.formatMessage("anchoredWindows")),r.map(t=>Object(a.jsx)(i.DropdownItem,{key:t.id,className:Object(a.classNames)("page-item in-folder",{active:e.currentDialogId===t.id}),active:e.currentDialogId===t.id,onClick:()=>d(t.id)},Object(a.jsx)("div",{className:"text-truncate w-100",title:t.label},t.label))))}const u=o(83),g=o(84);class h extends a.React.PureComponent{constructor(e){super(e),this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e},t),this.onPreviewScaleChange=e=>{e.stopPropagation();const t=this.fromRangeToZoomScale(Number(e.currentTarget.value));this.updateScale(t)},this.zoomout=e=>{e.stopPropagation();const{zoomScale:t}=this.props,o=Math.round(100*t),a=10*Math.floor(o/10);let i;i=o===a?t-.1:a/100,i=Math.round(10*i)/10,i=Math.max(.5,i),this.updateScale(i)},this.zoomin=e=>{e.stopPropagation();const{zoomScale:t}=this.props,o=Math.round(100*t),a=10*Math.ceil(o/10);let i;i=o===a?t+.1:a/100,i=Math.round(10*i)/10,i=Math.min(2,i),this.updateScale(i)},this.zoomToFit=e=>{e.stopPropagation();const{viewportSize:t}=this.props;let o=this.calAvailableWidth()/t.width;o=Math.floor(100*o)/100,o=Math.max(.5,Math.min(2,o)),this.updateScale(o)},this.zoomToNormal=e=>{e.stopPropagation(),this.updateScale(1)},this.stopPropgation=e=>{e.stopPropagation()},this.toggleSettingPanel=()=>{Object(a.getAppStore)().dispatch(a.appActions.widgetStatePropChange("right-sidebar","collapse",!this.props.settingPanelVisible))},this.onDropDownToggle=e=>{const{isPageListOpen:t}=this.state;this.setState({isPageListOpen:!t}),e.stopPropagation()},this.handlePageListItemClick=(e,t)=>{e.stopPropagation();const{currentPageId:o}=this.props;t!==o&&(r.builderAppSync.publishChangeSelectionToApp(null),r.builderAppSync.publishPageChangeToApp(t))},this.getDropdownStyle=()=>a.css`
      padding: unset;
      max-width: 240px;

      .page-header {
        height: 2rem;
        background-color: var(--light-700);
        color: var(--dark-800) !important;
        font-size: 14px;
        line-height: 2rem;
        display: flex !important;
        align-items: center;
      }

      .page-item {
        font-size: 13px;
        color: var(--black) !important;
        padding: 0 24px !important;
        height: 2rem;

        &:not(.active):hover {
          background: var(--light-600) !important;
        }

        &.active {
          background: var(--primary);
        }
      }

      .folder {
        font-size: 13px;
        color: var(--dark-500) !important;
        padding: 0 !important;
        margin: 0 24px;
        height: 2rem;
        line-height: 2rem;
      }

      .page-header,
      .folder {
        &:focus {
          outline: none;
        }
      }

      .in-folder {
        padding-left: 2.25rem !important;
      }
    `,this.renderPageList=()=>{var e;const{isPageListOpen:t}=this.state,{pages:o,currentPageId:r,currentDialogId:n,currentDialogLabel:l}=this.props,s=n?l:null===(e=null==o?void 0:o[r])||void 0===e?void 0:e.label;return Object(a.jsx)("div",{className:"d-flex page-list align-items-center ml-3"},Object(a.jsx)("div",{className:"page-label"},n?this.formatMessage("dialog"):this.formatMessage("page"),":"),Object(a.jsx)(i.Dropdown,{direction:"up",size:"sm",toggle:this.onDropDownToggle,isOpen:t},Object(a.jsx)(i.DropdownToggle,{className:"text-truncate",title:s,css:a.css`max-width: 240px`,icon:!0,size:"sm",type:"tertiary",caret:!0},s),Object(a.jsx)(i.DropdownMenu,{css:this.getDropdownStyle()},Object(a.jsx)(i.DropdownItem,{header:!0,className:"page-header"},this.formatMessage("page")),Object(a.jsx)(c,{currentPageId:n?null:r}),Object(a.jsx)(p,{currentDialogId:n,formatMessage:this.formatMessage}))))},this.state={isPageListOpen:!1}}calAvailableWidth(){const e=document.querySelector('div[data-widgetid="app-loader"]').getBoundingClientRect();let t=parseFloat(i.styleUtils.remToPixel("3rem"));isNaN(t)&&(t=48);return e.width-t-10}updateScale(e){r.builderAppSync.publichChangeZoomScaleToApp(e)}percentageZoomScale(){const{zoomScale:e,locale:t}=this.props,o=(null!=t?t:"").toLowerCase();return"ar"===o||"tr"===o?"%"+Math.round(100*e):Math.round(100*e)+"%"}mapStep(){return.1}fromZoomScaleToRange(e){return e<1?50*(e-.5)/.5+0:e>1?50*(e-1)/1+50:50}fromRangeToZoomScale(e){return e<50?.5*(e-0)/50+.5:e>50?1*(e-50)/50+1:1}calBackground(){const e=100*(this.fromZoomScaleToRange(this.props.zoomScale)-0)/100+"%",t=`linear-gradient(to right, var(--dark-600) 0%, var(--dark-600) ${e}, var(--light-800) ${e}, var(--light-600))`;return a.css`
      &::-webkit-slider-runnable-track {
        background: ${t} !important;
      }
      &::-moz-range-track {
        background: ${t} !important;
      }
      &::-ms-track {
        background: ${t} !important;
      }
    `}render(){const{zoomScale:e,settingPanelVisible:t}=this.props;return Object(a.jsx)("div",{css:(o=this.props.theme,a.css`
    overflow: hidden;
    height: 100%;
    background-color: var(--secondary);
    border-top: 1px solid var(--light-800);

    .zoom-section {
      .percentage-label {
        width: 4rem;
        color: var(--dark-800);
      }
      .form-control-range {
        margin: 0 8px 1px;
      }
    }

    .btn {
      padding: 0 0 2px;

      .jimu-icon {
        margin-right: 0;
        margin-left: 0;
      }
    }

    .dropdown-toggle-content {
      font-size: 12px;
      line-height: 16px;
    }

    .setting-panel-visible {
      background-color: var(--light-700);
      .btn {
        color: var(--black);
      }
    }

    .jimu-dropdown .jimu-icon {
      transform: rotate(180deg);
    }

    .page-list {
      .page-label {
        color: var(--dark-800);
        font-size: 12px;
        margin-right: 8px;
      }
      .icon-btn {
        color: var(--dark-800);
        &:hover {
          color: var(--black);
        }
        .jimu-icon {
          margin-left: 6px;
        }
      }
    }

    input[type='range'] {
      -webkit-appearance: none;
      background: transparent;
    }
    input[type='range']:focus {
      outline: none;
    }
    input[type='range']::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: var(--light-800);
      border-radius: 2px;
    }
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 12px;
      width: 12px;
      border-radius: 6px;
      cursor: pointer;
      background: var(--light-300);
      border: 2px solid var(--dark-600);
      margin-top: -5px;

      &:hover {
        border-color: var(--black);
      }
    }
    input[type='range']:focus::-webkit-slider-runnable-track {
      background: var(--light-800);
    }
    input[type='range']::-moz-range-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: var(--light-800);
      border-radius: 2px;
    }
    input[type='range']::-moz-range-thumb {
      height: 10px;
      width: 10px;
      border-radius: 8px;
      cursor: pointer;
      background: var(--light-300);
      border: 2px solid var(--dark-600);
      margin-top: -5px;
      &:hover {
        border-color: var(--black);
      }
    }
    input[type='range']::-ms-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: ${null===(n=null===(r=null==o?void 0:o.colors)||void 0===r?void 0:r.palette)||void 0===n?void 0:n.light[800]};
      border-radius: 2px;
    }
    input[type='range']::-ms-thumb {
      height: 10px;
      width: 10px;
      border-radius: 8px;
      cursor: pointer;
      background: ${null===(s=null===(l=null==o?void 0:o.colors)||void 0===l?void 0:l.palette)||void 0===s?void 0:s.light[300]};
      border: 2px solid ${null===(d=null===(c=null==o?void 0:o.colors)||void 0===c?void 0:c.palette)||void 0===d?void 0:d.dark[600]};
      margin-top: 0px;
      &:hover {
        border-color: ${null===(p=null==o?void 0:o.colors)||void 0===p?void 0:p.black};
      }
    }
  `),className:"jimu-widget widget-status-bar d-flex"},this.renderPageList(),Object(a.jsx)("div",{className:"zoom-section flex-grow-1 d-flex justify-content-end align-items-center"},Object(a.jsx)(i.Button,{type:"tertiary",disabled:e<=.5,title:this.formatMessage("zoomOut"),onClick:this.zoomout},Object(a.jsx)(i.Icon,{icon:u,width:12,height:12})),Object(a.jsx)("input",{css:this.calBackground(),type:"range",className:"form-control-range",min:0,max:100,step:this.mapStep(),value:this.fromZoomScaleToRange(e),onClick:this.stopPropgation,onChange:this.onPreviewScaleChange}),Object(a.jsx)(i.Button,{type:"tertiary",disabled:e>=2,title:this.formatMessage("zoomIn"),onClick:this.zoomin},Object(a.jsx)(i.Icon,{icon:g,width:12,height:12})),Object(a.jsx)(i.Dropdown,{direction:"up",size:"sm",className:"ml-2"},Object(a.jsx)(i.DropdownToggle,{icon:!0,size:"sm",type:"tertiary"},this.percentageZoomScale()),Object(a.jsx)(i.DropdownMenu,{css:a.css`min-width: 5rem;`},[200,175,150,125,100,75,50].map(e=>Object(a.jsx)(i.DropdownItem,{className:"justify-content-center",key:e,onClick:()=>this.updateScale(e/100)},a.utils.formatPercentageNumber(e+"%"))))),Object(a.jsx)(i.Button,{type:"tertiary",className:"ml-2",onClick:this.zoomToNormal,title:this.formatMessage("zoomToNormal")},Object(a.jsx)(i.Icon,{icon:"./widgets/status-bar/dist/runtime/assets/union.svg",width:12,height:12,className:"m-0"})),Object(a.jsx)(i.Button,{type:"tertiary",className:"ml-2",onClick:this.zoomToFit,title:this.formatMessage("zoomToFit")},Object(a.jsx)(i.Icon,{icon:"./widgets/status-bar/dist/runtime/assets/tool-width-max.svg",width:12,height:12,className:"m-0"}))),Object(a.jsx)("div",{className:Object(a.classNames)("setting-panel-section d-flex justify-content-center align-items-center ml-4 mr-2",{"setting-panel-visible":t})},Object(a.jsx)(i.Button,{type:"tertiary",title:t?this.formatMessage("closeSettingPanel"):this.formatMessage("openSettingPanel"),className:"px-2",onClick:this.toggleSettingPanel},Object(a.jsx)(i.Icon,{icon:"./widgets/status-bar/dist/runtime/assets/setting-panel.svg",width:12,height:12,className:"m-0",autoFlip:!0}))));var o,r,n,l,s,c,d,p}}h.mapExtraStateProps=(e,t)=>{var o,i,r,n,l,s,c,d,p,u,g,h,m,v,b,f,x,j,w;const S=null!==(r=null===(i=null===(o=e.appStateInBuilder)||void 0===o?void 0:o.appRuntimeInfo)||void 0===i?void 0:i.zoomScale)&&void 0!==r?r:1,k=null!==(l=null===(n=e.appStateInBuilder)||void 0===n?void 0:n.browserSizeMode)&&void 0!==l?l:a.BrowserSizeMode.Large,y=a.utils.findViewportSize(null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig,k),O=null===(d=null===(c=null==e?void 0:e.appStateInBuilder)||void 0===c?void 0:c.appConfig)||void 0===d?void 0:d.pages,I=null===(u=null===(p=null==e?void 0:e.appStateInBuilder)||void 0===p?void 0:p.appConfig)||void 0===u?void 0:u.pageStructure,P=null===(h=null===(g=null==e?void 0:e.appStateInBuilder)||void 0===g?void 0:g.appRuntimeInfo)||void 0===h?void 0:h.currentPageId,M=null===(v=null===(m=null==e?void 0:e.appStateInBuilder)||void 0===m?void 0:m.appRuntimeInfo)||void 0===v?void 0:v.currentDialogId,z=M?null===(b=null==e?void 0:e.appStateInBuilder)||void 0===b?void 0:b.appConfig.dialogs[M].label:null;return{zoomScale:S,viewportSize:y,settingPanelVisible:null===(j=null===(x=null===(f=e.widgetsState)||void 0===f?void 0:f["right-sidebar"])||void 0===x?void 0:x.collapse)||void 0===j||j,pages:O,pageStructure:I,currentPageId:P,currentDialogId:M,currentDialogLabel:z,locale:null===(w=null==e?void 0:e.appContext)||void 0===w?void 0:w.locale}}},2:function(e,t){e.exports=a},3:function(e,t){e.exports=i},83:function(e,t){e.exports='<svg viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h8v1H0z" fill-rule="evenodd"></path></svg>'},84:function(e,t){e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 3.5v-3a.5.5 0 011 0v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3z" fill-rule="evenodd"></path></svg>'}}))}}}));
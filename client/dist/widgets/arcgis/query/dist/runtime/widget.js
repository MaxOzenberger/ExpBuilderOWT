System.register(["jimu-core","jimu-ui","jimu-arcgis","jimu-ui/basic/sql-expression-runtime","jimu-ui/advanced/map"],(function(e){var t,i,n,a,r;return{setters:[function(e){t=e},function(e){i=e},function(e){n=e},function(e){a=e},function(e){r=e}],execute:function(){e(function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=485)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},111:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M9 6V2.333C9 .939 10.408 0 12 0h8c1.592 0 3 .939 3 2.333V6h8a1 1 0 010 2h-3l-1.858 22.153A2 2 0 0124.148 32H7.852a2 2 0 01-1.994-1.847L4 8H1a1 1 0 010-2h8zm2 0h10V2c0-.078-10-.078-10 0v4zM6.006 8l1.846 22h16.296l1.846-22H6.006zM13 12a1 1 0 011 1v12a1 1 0 01-2 0V13a1 1 0 011-1zm6 0a1 1 0 011 1v12a1 1 0 01-2 0V13a1 1 0 011-1z"></path></svg>'},134:function(e,t){e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M2.307 6.479L4.677 4l-2.37-2.479a.517.517 0 010-.708.464.464 0 01.677 0l2.71 2.833a.517.517 0 010 .708l-2.71 2.833a.464.464 0 01-.677 0 .517.517 0 010-.708z"></path><path d="M0 0h8v8H0z" fill="none"></path></svg>'},24:function(e,t,i){"use strict";var n;i.d(t,"a",(function(){return n})),i.d(t,"j",(function(){return a})),i.d(t,"e",(function(){return l})),i.d(t,"f",(function(){return o})),i.d(t,"g",(function(){return s})),i.d(t,"k",(function(){return u})),i.d(t,"i",(function(){return c})),i.d(t,"l",(function(){return d})),i.d(t,"c",(function(){return p})),i.d(t,"d",(function(){return y})),i.d(t,"b",(function(){return m})),i.d(t,"h",(function(){return v})),function(e){e.Point="Point",e.Polyline="Polyline",e.Polygon="Polygon",e.Rectangle="Rectangle",e.Circle="Circle"}(n||(n={}));const a=()=>({[n.Point]:{drawToolName:"point",esriClassName:"esri-icon-map-pin",toolIndex:4},[n.Polyline]:{drawToolName:"polyline",esriClassName:"esri-icon-polyline",toolIndex:3},[n.Polygon]:{drawToolName:"polygon",esriClassName:"esri-icon-polygon",toolIndex:1},[n.Rectangle]:{drawToolName:"rectangle",esriClassName:"esri-icon-checkbox-unchecked",toolIndex:0},[n.Circle]:{drawToolName:"circle",esriClassName:"esri-icon-radio-unchecked",toolIndex:2}});var r,l,o,s;!function(e){e.NewSelection="NEW_SELECTION",e.AddToSelection="ADD_TO_CURRENT_SELECTION",e.RemoveFromSelection="REMOVE_FROM_CURRENT_SELECTION",e.SubsetSelection="SUBSET_FROM_CURRENT_SELECTION",e.SwitchSelction="SWITCH_CURRENT_SELECTION"}(r||(r={})),function(e){e.Block="BLOCK",e.Inline="INLINE",e.Popper="POPPER"}(l||(l={})),function(e){e.CurrentMapExtent="CurrentMapExtent",e.InteractiveDrawMode="InteractiveDrawMode",e.ReturnAllFeatures="ReturnAllFeatures"}(o||(o={})),function(e){e.Intersect="Intersect",e.Contain="Contain",e.Cross="Cross",e.EnvelopeIntersect="EnvelopeIntersect",e.IndexIntersect="IndexIntersect",e.Overlap="Overlap",e.Touch="Touch",e.Within="Within"}(s||(s={}));const u=()=>({[s.Intersect]:"intersects",[s.Contain]:"contains",[s.Cross]:"crosses",[s.EnvelopeIntersect]:"envelope-intersects",[s.IndexIntersect]:"index-intersects",[s.Overlap]:"overlaps",[s.Touch]:"touches",[s.Within]:"within"});var c;!function(e){e.Miles="Miles",e.Kilometers="Kilometers",e.Feet="Feet",e.Meters="Meters",e.Yards="Yards",e.NauticalMiles="NauticalMiles"}(c||(c={}));const d=()=>({[c.Miles]:"miles",[c.Kilometers]:"kilometers",[c.Feet]:"feet",[c.Meters]:"meters",[c.Yards]:"yards",[c.NauticalMiles]:"nauticalMiles"});var p,y,m,g,v;!function(e){e.Horizontal="Horizontal",e.Vertical="Vertical"}(p||(p={})),function(e){e.MultiPage="MultiPage",e.LazyLoad="LazyLoad"}(y||(y={})),function(e){e.PopupSetting="PopupSetting"}(m||(m={})),function(e){e.Asc="Asc",e.Desc="Desc"}(g||(g={})),function(e){e.DefaultSymbol="DefaultSymbol",e.CustomSymbol="CustomSymbol"}(v||(v={}))},26:function(e,t,i){"use strict";i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return o})),i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return u})),i.d(t,"f",(function(){return c})),i.d(t,"b",(function(){return d}));var n=i(0),a=i(1);const{useState:r}=n.React,l=n.themeUtils.withTheme(e=>{const{theme:t,className:i,title:r,titleElement:l,disabled:o,icon:s,onClick:u,onClickIcon:c,templateType:d="collapsable",children:p}=e,y=[()=>s&&Object(n.jsx)(a.Button,{className:"ui-unit-nav-line-button",size:"sm",type:"tertiary",disabled:!!o,icon:!0,onClick:c},Object(n.jsx)(a.Icon,{size:16,color:t.colors.black,icon:s})),()=>Object(n.jsx)("span",{className:"ui-unit-nav-line-title text-truncate",title:r},l||Object(n.jsx)("span",{className:"text-truncate"},r)),()=>Object(n.jsx)("span",{className:"ui-unit-nav-line-option text-truncate"},p)];return["collapsable","enter"].includes(d)&&y.push(y.shift()),Object(n.jsx)("div",{className:`${i||""} ui-unit-nav-line ui-unit-nav-line_type-${d} ui-unit-nav-line_disabled-${!!o}`,onClick:o?null:u},y.map((e,t)=>Object(n.jsx)(n.React.Fragment,{key:t},e())))}),o=e=>{const{initState:t={},children:i}=e,a=!0,l=null,o={visible:r("visible"in t?t.visible:a),refContainer:r("refContainer"in t?t.refContainer:l),customData:r(Object.assign({},t.customData))};return Object(n.jsx)(n.React.Fragment,null,i(o))},s=n.themeUtils.withTheme(e=>{const{theme:t,panelVisible:i,setPanelVisible:r,getI18nMessage:l,isModal:o=!0,title:s=l("queryMessage"),bodyContent:u="",hasHeader:c=!0,hasFooter:d=!0}=e,p=()=>r(!1),y=()=>Object(n.jsx)(n.React.Fragment,null,c&&Object(n.jsx)(a.PanelHeader,{className:"py-2",title:s,onClose:p}),Object(n.jsx)(a.ModalBody,null,u),d&&Object(n.jsx)(a.ModalFooter,null,Object(n.jsx)(a.Button,{onClick:p},l("ok"))));return o?Object(n.jsx)(a.Modal,{className:"ui-unit-dialog-panel",isOpen:i,toggle:p,backdrop:"static"},y()):Object(n.jsx)("div",{className:"ui-unit-dialog-panel modal-dialog "+(i?"":"collapse"),css:n.css`
      &.ui-unit-dialog-panel.modal-dialog {
        margin: 0;
        width: 100%;
        .modal-content {
          background-color: ${t.colors.palette.light[600]};
          color: ${t.colors.black};
          font-size: .75rem;
          font-weight: 400;
          border: none;
          .panel-header {
            font-size: .8125rem;
            padding: .625rem;
          }
          .modal-body {
            padding: 0 .625rem .75rem;
            white-space: normal;
          }
        }
      }
    `},Object(n.jsx)("div",{className:"modal-content"},y()))});var u;!function(e){e.None="",e.Init="init",e.Loading="loading",e.Loaded="loaded",e.Warning="warning",e.Error="error"}(u||(u={}));const c=n.themeUtils.withTheme(e=>{const{theme:t,className:i,title:a,statusType:r}=e;return r&&Object(n.jsx)("div",{className:`${null!=i?i:""} ui-unit-status-indicator ui-unit-status-indicator_status-type-${r}`,title:a,css:n.css`
    &.ui-unit-status-indicator {
      display: flex;
      &.ui-unit-status-indicator_status-type-loading {
        &:before {
          @keyframes loading {
            0% {transform: rotate(0deg); };
            100% {transform: rotate(360deg)};
          }
          content: '';
          width: 1rem;
          height: 1rem;
          display: block;
          border: 1px solid ${null===(s=null===(o=null===(l=null==t?void 0:t.colors)||void 0===l?void 0:l.palette)||void 0===o?void 0:o.light)||void 0===s?void 0:s[400]};
          border-radius: 50%;
          border-top: 1px solid ${null===(d=null===(c=null===(u=null==t?void 0:t.colors)||void 0===u?void 0:u.palette)||void 0===c?void 0:c.primary)||void 0===d?void 0:d[600]};
          box-sizing: border-box;
          animation: loading 2s infinite linear;
          margin-right: .25rem;
        }
      }
    }
  `});var l,o,s,u,c,d}),d=n.themeUtils.withTheme(e=>{const{className:t,templateType:i="line",entityNote:a}=e;return a&&Object(n.jsx)("div",{className:`${null!=t?t:""} ui-unit-entity-status ui-unit-entity-status_type-${i}`,css:n.css`
    &.ui-unit-entity-status {
      display: flex;
      align-items: center;
      > .jimu-icon {
        flex: none;
        + .ui-unit-entity-status__message {
          margin-left: .25rem;
        }
      }
    }
  `},i&&Object(n.jsx)(n.React.Fragment,null,null==a?void 0:a.renderIcon(null==a?void 0:a.message),"line"===i&&Object(n.jsx)("div",{className:"ui-unit-entity-status__message"},null==a?void 0:a.message)))})},260:function(e,t){e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.417 0H0v12.888h5.607v-.805H.8V.806h12.815V6.04h.801V0z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.412 14.902a4.373 4.373 0 002.868-1.067L15.434 16l.566-.57-2.161-2.173c.612-.761.979-1.73.979-2.785 0-2.447-1.973-4.43-4.405-4.43-2.433 0-4.406 1.983-4.406 4.43 0 2.447 1.973 4.43 4.405 4.43zm0-.805c1.991 0 3.605-1.623 3.605-3.625s-1.614-3.625-3.604-3.625c-1.991 0-3.605 1.623-3.605 3.625s1.614 3.625 3.604 3.625z" fill="#fff"></path><path d="M2.403 2.417h9.611v.805H2.403v-.805zM7.209 4.833H2.403v.806h4.806v-.806zM2.403 7.25h2.403v.805H2.403V7.25zM4.806 9.666H2.403v.806h2.403v-.806z" fill="#fff"></path></svg>'},261:function(e,t){e.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7.194L7.194 6l4.836 4.836 4.776-4.776L18 7.254l-4.776 4.776 4.716 4.716-1.194 1.194-4.716-4.716L7.254 18 6.06 16.806l4.776-4.776L6 7.194z" fill="#E1001B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6l6-6h12l6 6v12l-6 6H6l-6-6V6zm1.5.621L6.621 1.5H17.38L22.5 6.621V17.38L17.379 22.5H6.62L1.5 17.378V6.621z" fill="#E1001B"></path></svg>'},31:function(e,t,i){"use strict";i.d(t,"i",(function(){return l})),i.d(t,"d",(function(){return o})),i.d(t,"a",(function(){return s})),i.d(t,"h",(function(){return u})),i.d(t,"c",(function(){return c})),i.d(t,"g",(function(){return d})),i.d(t,"f",(function(){return p})),i.d(t,"b",(function(){return y})),i.d(t,"e",(function(){return m}));var n=i(0),a=i(24),r=i(26);const l=(e,t=[])=>t.includes(e)?t.filter(t=>t!==e):[...t,e],o=(e,{test:t="testScenario",action:i="actionScenario"}={})=>(e=>{var t;return null===(t=null==e?void 0:e[i])||void 0===t?void 0:t.call(e,e)})(e.find(e=>{var i;return null===(i=null==e?void 0:e[t])||void 0===i?void 0:i.call(e,e)})),s=e=>{var t;const i=Object.assign(Object.assign({},e),{currentViewBlock:Object.assign({viewBlockState:{},getViewBlockData:()=>({}),getViewBlockTitle:()=>null,isViewBlockRenderable:()=>!0,isViewBlockHidden:()=>!1,isViewBlockCollapsed:()=>!1,renderViewBlock:()=>null},e.currentViewBlock)}),a=[{testScenario:()=>!i.currentViewBlock.isViewBlockRenderable(i),renderScenario:()=>null},...(null===(t=e.getViewBlockScenarios)||void 0===t?void 0:t.call(e,i))||[],{testScenario:()=>!0,renderScenario:()=>null}];let r=o(a,{action:"renderScenario"});return r&&i.currentViewBlock.isViewBlockHidden(i)&&(r=n.React.createElement(r.type,Object.assign(Object.assign({},r.props),{style:{visibility:"hidden"}}))),r&&i.currentViewBlock.isViewBlockCollapsed(i)&&(r=n.React.createElement(r.type,Object.assign(Object.assign({},r.props),{style:{display:"none"}}))),r},u=e=>{var t;return((null===(t=null==e?void 0:e.currentViewBlock)||void 0===t?void 0:t.subViewBlocks)||[]).map((t,i)=>t&&Object(n.jsx)(s,Object.assign({key:i},e,{parentViewBlock:e.currentViewBlock,currentViewBlock:t})))};function c(e){const{intl:t,defaultMessages:i={}}=e||{};return(e,n)=>{const{messages:a,values:r}=n||{};return t.formatMessage({id:e,defaultMessage:(a||i)[e]},r)}}const d=e=>[a.f.CurrentMapExtent,a.f.InteractiveDrawMode].includes(e),p=function(e){const{getFeatureScenarios:t=(()=>[])}=e||{},i=(e,n=!0)=>{const[a={},r]=e,l=[...n?t(e,i):[],{testScenario:()=>!0,actionScenario:()=>a[r]}];return o(l)};return i}({getFeatureScenarios:([e={},t],i)=>[{testScenario:()=>"spatialFilterTypes"===t,actionScenario:()=>(e[t]||[]).filter(t=>!!i([e,"spatialMapWidgetIds"]).length||!d(t))},{testScenario:()=>"spatialRelationEnableSelectTool"===t,actionScenario:()=>{var n;return!!(null===(n=i([e,"spatialMapWidgetIds"]))||void 0===n?void 0:n.length)&&e[t]}},{testScenario:()=>["spatialInteractiveBufferDistance","spatialInteractiveBufferUnit"].includes(t),actionScenario:()=>i([e,"spatialInteractiveEnableBuffer"])?e[t]:void 0},{testScenario:()=>["spatialRelationBufferDistance","spatialRelationBufferUnit"].includes(t),actionScenario:()=>i([e,"spatialRelationEnableBuffer"])?e[t]:void 0}]}),y=(e,t,{geometryEngine:i})=>{const n=2.54*t.scale/9600;return i.buffer(e,10*n,"meters")},m=(e,t)=>{if(!t)return{status:r.c.Error,dataSource:null};const i=null==e?void 0:e[t];return{status:i?r.c.None:r.c.Loading,dataSource:i}}},4:function(e,t){e.exports=n},40:function(e,t){e.exports=a},45:function(e,t){e.exports=r},485:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return te}));var n=i(0),a=i(1),r=i(24),l={_widgetLabel:"Query",noDataAvailable:"Error in loading data",noQueryItem:"No query",newQueryHint:'Add content by clicking the "{label}" button on the configuration panel',attributeFilter:"Attribute filter",spatialFilter:"Spatial filter",spatialFilterType_CurrentMapExtent:"Current map extent",spatialFilterType_InteractiveDrawMode:"Interactive draw mode",spatialFilterType_SpatialRelationship:"Spatial relationship",spatialFilterType_ReturnAllFeatures:"Return all features",relationship:"Relationship",spatialRelation_Intersect:"Intersect",spatialRelation_Contain:"Contain",spatialRelation_Cross:"Cross",spatialRelation_EnvelopeIntersect:"Envelope Intersect",spatialRelation_IndexIntersect:"Index Intersect",spatialRelation_Overlap:"Overlap",spatialRelation_Touch:"Touch",spatialRelation_Within:"Within",results:"Results",featuresDisplayed:"Features displayed",clearResult:"Clear results",mapMustBeVisible:"Map must be visible"},o=i(31),s=i(26),u=i(62);const c=()=>({iconMap:{iconQuery:i(260),iconWarning:i(96),iconError:i(261),arrowNavBack:i(69),arrowRight:i(134),toolDelete:i(111)},sketchToolInfoMap:Object(r.j)(),unitInfoMap:Object(r.l)(),spatialRelationInfoMap:Object(r.k)()});var d=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i};const p=e=>{var t,i;const{currentViewBlock:r}=e,l=(r.getViewBlockData||(()=>({})))(e),s=`runtime-query__${n.lodash.kebabCase(null!==(t=r.viewBlockKey)&&void 0!==t?t:(""+Math.random()).slice(2))} runtime-query__${n.lodash.kebabCase(null!==(i=r.viewBlockType)&&void 0!==i?i:"")}`;return[{testScenario:()=>"RuntimeBlockTypeQueryBoard"===r.viewBlockType,renderScenario:()=>{const{getAdditionalClassName:t=(()=>""),css:i}=l;return Object(n.jsx)("div",{className:`${s} ${t()||""}`,css:i},Object(o.h)(e))}},{testScenario:()=>"RuntimeBlockTypeQueryStage"===r.viewBlockType,renderScenario:()=>Object(n.jsx)("div",{className:""+s},Object(n.jsx)("div",{className:"runtime-ui-unit-form-line__title"},r.getViewBlockTitle(e)),r.renderViewBlock(e))},{testScenario:()=>"RuntimeBlockTypeFormQuestions"===r.viewBlockType,renderScenario:()=>Object(n.jsx)("div",{className:""+s},Object(o.h)(e))},{testScenario:()=>"RuntimeBlockTypeFormLine"===r.viewBlockType,renderScenario:()=>Object(n.jsx)("div",{className:""+s},Object(n.jsx)("div",{className:"runtime-ui-unit-form-line__title"},r.getViewBlockTitle(e)),r.renderViewBlock(e))},{testScenario:()=>"RuntimeBlockTypeFormActions"===r.viewBlockType,renderScenario:()=>{const{commandItems:e=[]}=l;return Object(n.jsx)("div",{className:""+s},Object(n.jsx)("div",{className:"ui-unit-form-action-bar"},e.map((e,t)=>{var i,r;const l=null!==(r=null===(i=e.getButtonProps)||void 0===i?void 0:i.call(e))&&void 0!==r?r:{},{buttonClass:o,separator:s=""}=l,u=d(l,["buttonClass","separator"]),c=()=>Object(n.jsx)("div",{className:"ui-unit-separator"}," ");return Object(n.jsx)(n.React.Fragment,{key:t},"left"===s&&c(),Object(n.jsx)(a.Button,Object.assign({className:"ui-unit-button "+(null!=o?o:"")},u)),"right"===s&&c())})))}},{testScenario:()=>"RuntimeBlockTypeFormResult"===r.viewBlockType,renderScenario:()=>Object(n.jsx)("div",{className:""+s},r.renderViewBlock(e))},{testScenario:()=>"RuntimeBlockTypeCustom"===r.viewBlockType,renderScenario:()=>r.renderViewBlock(e)}]};var y=i(40),m=i(4),g=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function l(e){try{s(n.next(e))}catch(e){r(e)}}function o(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,o)}s((n=n.apply(e,t||[])).next())}))};const{iconMap:v}=c(),f=(e,t=e.state.selectedQueryStateIndex)=>{const i=e.state.queryStates,n=t,a=null==i?void 0:i[n],r=S(e.props,e.state.dss,a),l=r.dataSource,o=h(l),s=j(e.state.jimuMapViewMap,a),u=w(r,a),c=x(u,a,e);return{currentQueryStates:i,currentSelectedQueryStateIndex:n,currentQueryState:a,currentQueryDsWithAdditionalStatus:r,currentQueryDs:l,currentOriginDs:o,currentJimuMapView:s,currentDsEntityStatus:u,getCurrentDsEntityNote:c,isCurrentSpatialFilterDisabled:()=>I(a,s)}},b=(e,t)=>{var i;return[...null!==(i=null==t?void 0:t.getQueryItemValue("spatialRelationUseDataSources"))&&void 0!==i?i:[]].map(t=>Object(o.e)(e,null==t?void 0:t.dataSourceId).dataSource).filter(e=>!!e)},S=(e,t,i)=>{var n,a;const r=null===(a=null===(n=e.config.queryItems)||void 0===n?void 0:n[null==i?void 0:i.queryItemIndex])||void 0===a?void 0:a.outputDataSourceId;return Object(o.e)(t,r)},h=e=>{var t;return null===(t=null==e?void 0:e.getOriginDataSources())||void 0===t?void 0:t[0]},j=(e,t)=>{var i;return null==e?void 0:e[null===(i=null==t?void 0:t.getQueryItemValue("spatialMapWidgetIds"))||void 0===i?void 0:i[0]]},w=(e,t)=>{const i=e.dataSource,a=h(i),r=null==a?void 0:a.getStatus();let l=s.c.None;return e.status===s.c.Error||(null==t?void 0:t.dsRemoved)||[n.DataSourceStatus.LoadError].includes(r)?l=s.c.Error:r===n.DataSourceStatus.NotReady?l=s.c.Warning:e.status===s.c.Loading&&(l=s.c.Loading),l},x=(e,t,i)=>{var r;const l={error:()=>({renderIcon:e=>{var t,r,l,o;return Object(n.jsx)(a.Icon,{icon:v.iconError,title:e,color:null===(o=null===(l=null===(r=null===(t=i.props.theme)||void 0===t?void 0:t.colors)||void 0===r?void 0:r.palette)||void 0===l?void 0:l.danger)||void 0===o?void 0:o[500]})},message:i.getI18nMessage("dataSourceCreateError"),type:s.c.Error}),warning:()=>{var e;const r=S(i.props,i.state.dss,t).dataSource,l=h(r);return{renderIcon:e=>{var t,r,l,o;return Object(n.jsx)(a.Icon,{icon:v.iconWarning,title:e,color:null===(o=null===(l=null===(r=null===(t=i.props.theme)||void 0===t?void 0:t.colors)||void 0===r?void 0:r.palette)||void 0===l?void 0:l.warning)||void 0===o?void 0:o[700]})},message:i.getI18nMessage("outputDataIsNotGenerated",{values:{outputDsLabel:null==l?void 0:l.getLabel(),sourceWidgetName:null===(e=i.props.dataSourceWidgetLabels)||void 0===e?void 0:e[null==t?void 0:t.queryItemIndex]}}),type:s.c.Warning}},loading:()=>({renderIcon:e=>Object(n.jsx)(s.f,{statusType:s.c.Loading,title:e}),message:i.getI18nMessage("loading"),type:s.c.Loading})};return null!==(r=l[e])&&void 0!==r?r:()=>null},I=(e,t)=>{var i;const n=null!==(i=null==e?void 0:e.getQueryItemValue("spatialFilterTypes"))&&void 0!==i?i:[];return!(t||!n.length||!n.every(e=>Object(o.g)(e)))},k=(e,t,i)=>{var n,a,r;const l=(i,n=!0)=>Object(o.f)([e[t],i],n);return Object.assign({spatialFilterType:null===(n=l("spatialFilterTypes"))||void 0===n?void 0:n[0],spatialInteractiveCreateToolType:null===(a=l("spatialInteractiveCreateToolTypes"))||void 0===a?void 0:a[0],spatialInteractiveData:{isReady:!1,layer:null,graphic:null},spatialRelation:null===(r=l("spatialRelations"))||void 0===r?void 0:r[0],spatialRelLayerIndex:0,attributeFilterSqlExprObj:l("sqlExprObj"),queryData:{},resultStatus:"",queryItem:e[t],queryItemIndex:t,spatialRelLayerGeometries:void 0,isLoadingRelLayerGeometries:!1,refQueryItemButton:null,getQueryItemValue:l},i)},O=(e,t)=>{const i=S(t.props,t.state.dss,e).dataSource;i.setStatus(n.DataSourceStatus.NotReady),i.setCountStatus(n.DataSourceStatus.NotReady),B(e,t)},B=(e,t)=>{const i=S(t.props,t.state.dss,e).dataSource;i.selectRecordsByIds([]),n.MessageManager.getInstance().publishMessage(new n.DataRecordsSelectionChangeMessage(t.props.id,[])),n.MessageManager.getInstance().publishMessage(new n.DataRecordSetChangeMessage(t.props.id,i.id,n.RecordSetChangeType.Remove)),e.queryData=null,e.resultStatus&&(e.resultStatus="cleared"),t.setState(({queryStates:e})=>({queryStates:[...e]}))},R=()=>n.css`
    > .panel-header {
      .action-close {
        color: var(--primary-200);
        &:hover {
          color: var(--white);
        }
        &:disabled {
          color: var(--primary-400);
        }
      }
    }
  `,{iconMap:q}=c(),_=e=>{const{currentQueryStates:t,targetSelf:i,arrangeType:l,onClickItem:o}=e;return Object(n.jsx)("div",{className:"runtime-query__query-list"},t.map((e,t)=>{const[u,c]=["icon","name"].map(t=>null==e?void 0:e.getQueryItemValue(t)),{getCurrentDsEntityNote:d}=f(i,t),p=d();return Object(n.jsx)(n.React.Fragment,{key:t},(()=>{const i={className:"runtime-query__query-list-item",mainContent:Object(n.jsx)(n.React.Fragment,null,u&&Object(n.jsx)(a.Icon,{className:"ui-unit-icon",icon:u.svg}),Object(n.jsx)("div",{className:"ui-unit-title-text-group text-truncate"},Object(n.jsx)("div",{className:"ui-unit-title-text-main text-truncate"},c),p&&Object(n.jsx)(s.b,{templateType:"icon",entityNote:p}))),action:()=>o(t)};return l===r.e.Inline?(({className:t,mainContent:i,action:r})=>Object(n.jsx)(a.Button,{ref:t=>e.refQueryItemButton=t,className:t,onClick:r},i))(i):(({className:e,mainContent:t,action:i})=>Object(n.jsx)(s.d,{className:e,title:c,titleElement:t,templateType:"enter",disabled:!!p,icon:q.arrowRight,onClick:i}))(i)})())}))};var D=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function l(e){try{s(n.next(e))}catch(e){r(e)}}function o(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,o)}s((n=n.apply(e,t||[])).next())}))};const{useRef:C,useEffect:M,useCallback:T,useState:V}=n.React,N=n.themeUtils.withTheme(e=>{const[t,i]=V([]),[a,r]=V(s.c.Init),[l,o]=V(!1),{direction:u="vertical",requestDataItems:c,renderListItem:d,pagingConfig:p={itemCountPerPage:5,initialLoadItemCount:20},getNextDataItemsCount:y=(()=>Math.max((t||[]).length+p.itemCountPerPage,p.initialLoadItemCount)),onRenderDone:m=(()=>{})}=e,g=C(null),v=T(()=>D(void 0,void 0,void 0,(function*(){if(l||a===s.c.Loading)return;const e=y();r(s.c.Loading);const t=yield c(e);o(e>(t||[]).length),i(t),r(s.c.Loaded)})),[a,l,c,y]);return M(()=>{var e;const t=null===(e=null==g?void 0:g.current)||void 0===e?void 0:e.querySelector(".ui-unit-lazy-list__lazyload-detector");if(t){const e=new IntersectionObserver(e=>{var t;(null===(t=null==e?void 0:e[0])||void 0===t?void 0:t.intersectionRatio)>0&&v()},{root:null==g?void 0:g.current});return null==e||e.observe(t),()=>{null==e||e.disconnect()}}}),M(()=>{m({dataItems:t,element:null==g?void 0:g.current})}),Object(n.jsx)("div",{ref:g,className:`ui-unit-lazy-list ui-unit-lazy-list_direction-${u} ui-unit-lazy-list_load-status-${a}`,css:function(){return n.css`
      &.ui-unit-lazy-list {
        display: flex;
        flex: 1;
        overflow: auto;
        &.ui-unit-lazy-list_direction-vertical {
          flex-direction: column;
          .ui-unit-lazy-list__items {
            position: relative;
            flex-direction: column;
          }
        }
        .ui-unit-lazy-list__items {
          display: flex;
        }
        .ui-unit-lazy-list__lazyload-detector {
          height: 2px;
          width: 2px;
          opacity: 0;
        }
        .ui-unit-lazy-list__loading-indicator {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
        }
      }
    `}},Object(n.jsx)("div",{className:"ui-unit-lazy-list__items"},t.map((e,i)=>Object(n.jsx)(n.React.Fragment,{key:i},d({index:i,data:t,direction:u})))),Object(n.jsx)("div",{className:"ui-unit-lazy-list__lazyload-detector"}," "),Object(n.jsx)(s.f,{className:"ui-unit-lazy-list__loading-indicator",statusType:a}))});var F;!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(F||(F={}));class Q extends n.React.PureComponent{constructor(e){super(e),this.state={loadStatus:F.Pending}}componentDidMount(){this.createFeature()}componentDidUpdate(){if(this.feature){const e={popupTemplate:{content:""}};this.feature.graphic=this.props.graphic||e,this.feature.visibleElements=this.props.visibleElements}}destoryFeature(){this.feature&&!this.feature.destroyed&&this.feature.destroy()}createFeature(){let e;return e=this.Feature?Promise.resolve():Object(m.loadArcGISJSAPIModules)(["esri/widgets/Feature"]).then(e=>{[this.Feature]=e}),e.then(()=>{var e,t;const i=document&&document.createElement("div");i.className="jimu-widget",this.refs.featureContainer.appendChild(i);const n=this.props.dataSource.getRootDataSource();this.destoryFeature(),this.feature=new this.Feature({container:i,defaultPopupTemplateEnabled:!0,spatialReference:(null===(t=null===(e=this.props.dataSource)||void 0===e?void 0:e.layer)||void 0===t?void 0:t.spatialReference)||null,map:(null==n?void 0:n.map)||null})}).then(()=>{this.setState({loadStatus:F.Fulfilled})})}render(){return n.React.createElement("div",{className:"feature-info-component"},n.React.createElement("div",{ref:"featureContainer"}))}}var L=i(45);const E={title:!0,content:{fields:!0,text:!0,media:!0,attachments:!0},lastEditedInfo:!0},z=n.themeUtils.withTheme(e=>{var t,i,a;const{theme:r,index:l,data:o,associatedListData:s,direction:u,onClick:c}=e,d=null===(i=null===(t=null==s?void 0:s.ds)||void 0===t?void 0:t.getSelectedRecordIds())||void 0===i?void 0:i.includes(null===(a=null==o?void 0:o[l])||void 0===a?void 0:a.getId());return Object(n.jsx)("div",{className:`ui-unit-query-result-list-item ui-unit-query-result-list-item_direction-${u} ui-unit-query-result-list-item_selected-${d}`,onClick:c,css:function(){return n.css`
      &.ui-unit-query-result-list-item {
        display: flex;
        overflow: auto;
        flex-flow: row;
        padding: .5rem;
        border: 2px solid transparent;
        cursor: pointer;
        flex-shrink: 0;
        &.ui-unit-query-result-list-item_selected-true {
          &.ui-unit-query-result-list-item_selected-true {
            &.ui-unit-query-result-list-item_selected-true {
              border-color: ${r.colors.palette.primary[500]};
            }
          }
        }
        &.ui-unit-query-result-list-item_direction-horizontal {
          width: 240px;
          border-color: ${r.colors.palette.light[200]};
          &:not(:first-of-type) {
            margin-left: .5rem;
          }
        }
        &.ui-unit-query-result-list-item_direction-vertical {
          &:not(:first-of-type) {
            border-top-color: ${r.colors.palette.light[200]};
          }
        }
        > .ui-unit-query-result-list-item__symbol {
          flex: none;
          padding-right: .5rem;
          >.symbol-item {
            align-items: flex-start!important;
          }
        }
        > .feature-info-component {
          flex: 1;
        }
      }
    `}},s.esriModuleMap.jsonUtils&&Object(n.jsx)("div",{className:"ui-unit-query-result-list-item__symbol"},Object(n.jsx)(L.SymbolItem,{symbol:s.esriModuleMap.jsonUtils.fromJSON(s.symbolJson),isUsedForPreview:!0})),Object(n.jsx)(Q,{graphic:o[l].feature,visibleElements:E,dataSource:null==s?void 0:s.ds}))}),P=e=>Object(n.jsx)(N,Object.assign({},e,{renderListItem:t=>e.associatedListData&&Object(n.jsx)(z,Object.assign({},t,{associatedListData:e.associatedListData,onClick:()=>e.onClickListItem(t)}))}));var $=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function l(e){try{s(n.next(e))}catch(e){r(e)}}function o(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,o)}s((n=n.apply(e,t||[])).next())}))};const{iconMap:A,sketchToolInfoMap:K}=c();let W=null;const U=[{name:"preventOverflow",options:{padding:1}}],H=e=>{const{targetSelf:t}=e,{getI18nMessage:i,executingQuery:l,renderArrangeIconPopper:c}=t;return{viewBlockKey:"RuntimeBlockKeyRuntimeWidgetContentWrapper",viewBlockType:"RuntimeBlockTypeCustom",renderViewBlock:e=>{const i=Object(o.h)(e),{arrangeType:a}=t.props.config;return a===r.e.Popper?c({queryContent:i}):Object(n.jsx)("div",{className:"runtime-query__widget-static "+(a===r.e.Block?"surface-1":"")},i)},subViewBlocks:[{viewBlockKey:"RuntimeBlockKeyRuntimeWidgetBoard",viewBlockType:"RuntimeBlockTypeQueryBoard",getViewBlockData:()=>({getAdditionalClassName:()=>`runtime-query_arrange-type-${t.props.config.arrangeType.toLocaleLowerCase()} runtime-query_arrange-wrap-${t.props.config.arrangeWrap}`,css:Object(u.a)(t.props.theme)}),subViewBlocks:[{viewBlockKey:"RuntimeBlockKeyQueryStage1SelectItem",viewBlockType:"RuntimeBlockTypeQueryStage",isViewBlockCollapsed:({associatedData:{currentSelectedQueryStateIndex:e}})=>t.props.config.arrangeType!==r.e.Inline&&e>=0,renderViewBlock:e=>{const{associatedData:{currentQueryStates:a}}=e,{arrangeType:l}=t.props.config,o={currentQueryStates:a,targetSelf:t,getI18nMessage:i,arrangeType:l,onClickItem:e=>t.setState({selectedQueryStateIndex:e})},s=()=>Object(n.jsx)(_,Object.assign({},o));return Object(n.jsx)(n.React.Fragment,null,a.length>1?s():a.length>0?l===r.e.Inline?s():null:i("noQueryItem"))}},{viewBlockKey:"RuntimeBlockKeyQueryStage2QueryItem",viewBlockType:"RuntimeBlockTypeQueryStage",isViewBlockRenderable:({associatedData:{currentSelectedQueryStateIndex:e}})=>e>=0,renderViewBlock:e=>{const{associatedData:{currentQueryState:i,currentSelectedQueryStateIndex:l}}=e,s=a.hooks.useCheckSmallBrowserSzieMode();return u=Object(o.h)(e),t.props.config.arrangeType===r.e.Inline?s?Object(n.jsx)(a.MobilePanel,{open:!0,title:null==i?void 0:i.getQueryItemValue("name"),toggle:()=>t.setState({selectedQueryStateIndex:-1})},u):Object(n.jsx)(a.Popper,{key:l,className:"ui-unit-popper ui-unit-popper_k-query-item flex-grow-1",floating:!0,open:!0,headerTitle:null==i?void 0:i.getQueryItemValue("name"),onHeaderClose:()=>t.setState({selectedQueryStateIndex:-1}),minSize:null===(d=null===(c=null==i?void 0:i.getQueryItemValue("itemSizeMap"))||void 0===c?void 0:c.arrangementHorizontalPopper)||void 0===d?void 0:d.minSize,defaultSize:null===(y=null===(p=null==i?void 0:i.getQueryItemValue("itemSizeMap"))||void 0===p?void 0:p.arrangementHorizontalPopper)||void 0===y?void 0:y.defaultSize,dragBounds:"body",reference:null==i?void 0:i.refQueryItemButton,placement:"bottom-start",modifiers:U,css:R()},u):Object(n.jsx)(n.React.Fragment,null,u);var u,c,d,p,y},subViewBlocks:[{viewBlockKey:"RuntimeBlockKeyQueryBoardQueryItem",viewBlockType:"RuntimeBlockTypeQueryBoard",getViewBlockData:()=>({getAdditionalClassName:()=>`runtime-query_arrange-type-${t.props.config.arrangeType.toLocaleLowerCase()} runtime-query_arrange-wrap-${t.props.config.arrangeWrap}`,css:Object(u.a)(t.props.theme)}),subViewBlocks:[{viewBlockKey:"RuntimeBlockKeyQueryStage2s1Params",viewBlockType:"RuntimeBlockTypeQueryStage",isViewBlockRenderable:({associatedData:{currentSelectedQueryStateIndex:e}})=>e>=0,isViewBlockCollapsed:({associatedData:{currentQueryState:e}})=>!!(null==e?void 0:e.resultStatus),getViewBlockTitle:({associatedData:{currentQueryStates:e,currentQueryState:i}})=>{const[l,o,u]=["icon","displayLabel","name"].map(e=>null==i?void 0:i.getQueryItemValue(e));return 1===e.length&&!o||t.props.config.arrangeType===r.e.Inline?null:Object(n.jsx)(s.d,{title:u,titleElement:Object(n.jsx)(n.React.Fragment,null,l&&Object(n.jsx)(a.Icon,{className:"ui-unit-icon",icon:l.svg}),Object(n.jsx)("span",{className:"text-truncate"},u)),templateType:"back",icon:1===e.length?null:A.arrowNavBack,onClickIcon:()=>t.setState({selectedQueryStateIndex:-1})})},renderViewBlock:e=>{var i;const{associatedData:{currentQueryState:a,currentDsEntityStatus:r,getCurrentDsEntityNote:l}}=e;return r?Object(n.jsx)(s.b,{templateType:"line",entityNote:l()}):Object(n.jsx)(n.React.Fragment,null,Object(o.h)(e),(null!==(i=null==a?void 0:a.getQueryItemValue("spatialMapWidgetIds"))&&void 0!==i?i:[]).map((e,i)=>Object(n.jsx)(m.JimuMapViewComponent,{key:i,useMapWidgetId:e,onActiveViewChange:i=>{t.setState(({jimuMapViewMap:t})=>({jimuMapViewMap:Object.assign(Object.assign({},t),{[e]:(null==i?void 0:i.view)?i:null})}))}})))},subViewBlocks:[{viewBlockKey:"RuntimeBlockKeyFormQuestions",viewBlockType:"RuntimeBlockTypeFormQuestions",isViewBlockRenderable:({associatedData:{currentQueryState:e}})=>!!e,subViewBlocks:[{viewBlockKey:"RuntimeBlockKeyAttributeFilter",viewBlockType:"RuntimeBlockTypeFormLine",isViewBlockRenderable:({associatedData:{currentQueryState:e}})=>{var t;return(null===(t=null==e?void 0:e.getQueryItemValue("useAttributeFilter"))||void 0===t||t)&&!!(null==e?void 0:e.getQueryItemValue("sqlExprObj"))},getViewBlockTitle:({associatedData:{currentQueryState:e}})=>{const t=null==e?void 0:e.getQueryItemValue("attributeFilterLabel");return void 0===t?i("attributeFilter"):t},renderViewBlock:({associatedData:{currentQueryState:e,currentOriginDs:i}})=>i&&Object(n.jsx)(y.SqlExpressionRuntime,{widgetId:t.props.id,dataSource:i,expression:e.attributeFilterSqlExprObj,onChange:i=>t.setState(({queryStates:t})=>({queryStates:(e.attributeFilterSqlExprObj=i,[...t])}))})},{viewBlockKey:"RuntimeBlockKeySpatialFilter",viewBlockType:"RuntimeBlockTypeFormLine",isViewBlockRenderable:({associatedData:{currentQueryState:e}})=>{var t,i;return(null===(t=null==e?void 0:e.getQueryItemValue("useSpatialFilter"))||void 0===t||t)&&!!(null===(i=null==e?void 0:e.getQueryItemValue("spatialFilterTypes"))||void 0===i?void 0:i.length)},getViewBlockTitle:({associatedData:{currentQueryState:e}})=>{const t=null==e?void 0:e.getQueryItemValue("spatialFilterLabel");return void 0===t?i("spatialFilter"):t},renderViewBlock:({associatedData:{currentQueryState:e,currentJimuMapView:l,isCurrentSpatialFilterDisabled:u}})=>{var c;let d=null!==(c=null==e?void 0:e.getQueryItemValue("spatialFilterTypes"))&&void 0!==c?c:[];d=Object.values(r.f).filter(e=>d.includes(e));const p=u(),y=p||l||!Object(o.g)(e.spatialFilterType);return Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(a.Select,{ref:y?void 0:i=>(()=>{var i;e.spatialFilterType=null===(i=d.filter(e=>!Object(o.g)(e)))||void 0===i?void 0:i[0],t.setState(({queryStates:e})=>({queryStates:[...e]}))})(),className:"ui-unit-select",size:"sm",disabled:p,value:e.spatialFilterType,onChange:i=>t.setState(({queryStates:t})=>({queryStates:(e.spatialFilterType=i.target.value,[...t])}))},d.map((e,t)=>Object(n.jsx)("option",{key:t,value:e,disabled:!l&&Object(o.g)(e)},i("spatialFilterType_"+e)))),p&&Object(n.jsx)(s.b,{templateType:"line",entityNote:{renderIcon:e=>{var i,r,l,o;return Object(n.jsx)(a.Icon,{icon:A.iconWarning,title:e,color:null===(o=null===(l=null===(r=null===(i=t.props.theme)||void 0===i?void 0:i.colors)||void 0===r?void 0:r.palette)||void 0===l?void 0:l.warning)||void 0===o?void 0:o[700]})},message:i("mapMustBeVisible")}}))}},{viewBlockKey:"RuntimeBlockKeyInteractiveDraw",viewBlockType:"RuntimeBlockTypeFormLine",isViewBlockRenderable:({associatedData:{currentQueryState:e}})=>{var t;return(null===(t=null==e?void 0:e.queryItem.useSpatialFilter)||void 0===t||t)&&(null==e?void 0:e.spatialFilterType)===r.f.InteractiveDrawMode},renderViewBlock:e=>{const{associatedData:{currentQueryState:i,currentJimuMapView:a}}=e,r=(null==i?void 0:i.getQueryItemValue("spatialInteractiveCreateToolTypes"))||[],l=null==W?void 0:W.Draw;return l||n.moduleLoader.loadModule("jimu-ui/advanced/map").then(e=>{W=e,t.setState(({queryStates:e})=>({queryStates:[...e]}))}),(null==a?void 0:a.view)&&l&&(i.spatialInteractiveData.isReady?Object(n.jsx)(l,{jimuMapView:a,disableSymbolSelector:!0,updateOnGraphicClick:!1,creationMode:"continuous",visibleElements:{createTools:Object.entries(K).reduce((e,[t,i])=>Object.assign(Object.assign({},e),{[i.drawToolName]:r.includes(t)}),{}),selectionTools:{"lasso-selection":!1,"rectangle-selection":!1},settingsMenu:!1,undoRedoMenu:!1},onDrawToolCreated:({sketch:e})=>{t.setState(({queryStates:t})=>({queryStates:(i.spatialInteractiveData.layer=e.layer,[...t])}))},onDrawStart:()=>{var e;null===(e=i.spatialInteractiveData.layer)||void 0===e||e.removeAll()},onDrawEnd:e=>{var n,a;"point"===(null===(n=null==e?void 0:e.geometry)||void 0===n?void 0:n.type)&&(null===(a=i.spatialInteractiveData.layer)||void 0===a||a.add(e)),t.setState(({queryStates:t})=>({queryStates:(i.spatialInteractiveData.graphic=e,[...t])}))},onDrawToolCleared:()=>{t.setState(({queryStates:e})=>({queryStates:(i.spatialInteractiveData.graphic=null,[...e])}))}}):Object(n.jsx)("div",{style:{display:"none"},ref:()=>t.setState(({queryStates:e})=>({queryStates:(i.spatialInteractiveData.isReady=!0,[...e])}))}))}},{viewBlockKey:"RuntimeBlockKeySpatialRelation",viewBlockType:"RuntimeBlockTypeFormLine",isViewBlockRenderable:({associatedData:{currentQueryState:e}})=>!1,getViewBlockTitle:()=>i("relationship"),renderViewBlock:({associatedData:{currentQueryState:e}})=>Object(n.jsx)(a.Select,{className:"ui-unit-select",size:"sm",value:e.spatialRelation,onChange:i=>t.setState(({queryStates:t})=>({queryStates:(e.spatialRelation=i.target.value,[...t])}))},((null==e?void 0:e.getQueryItemValue("spatialRelations"))||[]).map((e,t)=>Object(n.jsx)("option",{key:t,value:e},i("spatialRelation_"+e))))},{viewBlockKey:"RuntimeBlockKeySpatialRelationLayer",viewBlockType:"RuntimeBlockTypeFormLine",isViewBlockRenderable:({associatedData:{currentQueryState:e}})=>!1,getViewBlockTitle:()=>i("layer"),renderViewBlock:({associatedData:{currentQueryState:e}})=>{const i=b(t.state.dss,e);return!!(null==i?void 0:i.length)&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(a.Select,{ref:t.selectSpatialRelLayerOnMount,className:"ui-unit-select",size:"sm",value:e.spatialRelLayerIndex,onChange:e=>{t.selectSpatialRelLayer(i,e.target.value)}},i.map((e,t)=>Object(n.jsx)("option",{key:t,value:t},e.getLabel()))),e.isLoadingRelLayerGeometries&&Object(n.jsx)(s.b,{templateType:"line",entityNote:{renderIcon:e=>Object(n.jsx)(s.f,{statusType:s.c.Loading,title:e}),message:t.getI18nMessage("loading"),type:s.c.Loading}}))}}]},{viewBlockKey:"RuntimeBlockKeyFormActions",viewBlockType:"RuntimeBlockTypeFormActions",isViewBlockRenderable:({associatedData:{currentQueryState:e}})=>!!e,getViewBlockData:({associatedData:{currentQueryState:e,currentSelectedQueryStateIndex:l,isCurrentSpatialFilterDisabled:o}})=>({commandItems:[{getButtonProps:()=>{var r;return{buttonClass:"ui-unit-button_clear-results first-child "+((null===(r=null==e?void 0:e.queryData)||void 0===r?void 0:r.queryResult)?"":"collapse"),separator:"right",children:Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(a.Icon,{size:12,icon:A.toolDelete}),i("clearResult")),type:"tertiary",onClick:()=>O(e,t)}}},{getButtonProps:()=>{var n;return{buttonClass:"ui-unit-button_apply active",children:i("apply"),disabled:(null===(n=e.getQueryItemValue("useSpatialFilter"))||void 0===n||n)&&(o()||(null==e?void 0:e.spatialFilterType)===r.f.InteractiveDrawMode&&!e.spatialInteractiveData.graphic),onClick:()=>{B(e,t),t.setState(({queryStates:e})=>{const t=[...e];return t[l]=Object.assign(Object.assign({},t[l]),{queryData:null,resultStatus:"apply"}),{queryStates:t}})}}}},{getButtonProps:()=>({buttonClass:"ui-unit-button_reset",children:i("reset"),onClick:()=>t.setState(({queryStates:e})=>{const i=[...e];return i[l]=Object.assign({},k(t.props.config.queryItems,l,{queryData:e[l].queryData,refQueryItemButton:e[l].refQueryItemButton})),{queryStates:i}})})}]})}]},{viewBlockKey:"RuntimeBlockKeyQueryStage2s2Results",viewBlockType:"RuntimeBlockTypeQueryStage",isViewBlockRenderable:({associatedData:{currentSelectedQueryStateIndex:e}})=>e>=0,isViewBlockCollapsed:({associatedData:{currentQueryState:e}})=>!(null==e?void 0:e.resultStatus),getViewBlockTitle:({associatedData:{currentQueryState:e,currentQueryDs:r,currentDsEntityStatus:l}})=>{var o;const u=!("enableDataAction"in t.props)||!!t.props.enableDataAction,c=null==e?void 0:e.getQueryItemValue("resultsLabel");return Object(n.jsx)(s.d,{title:void 0===c?i("results"):c,templateType:"back",icon:A.arrowNavBack,onClickIcon:()=>t.setState(({queryStates:t})=>({queryStates:(e.resultStatus="",[...t])}))},![s.c.Error,s.c.Warning].includes(l)&&(null===(o=null==e?void 0:e.queryData)||void 0===o?void 0:o.queryResult)&&Object(n.jsx)(n.React.Fragment,null,Object(n.jsx)(a.Tooltip,{title:i("clearResult"),placement:"bottom"},Object(n.jsx)(a.Button,{className:"ui-unit-button",icon:!0,onClick:()=>O(e,t)},Object(n.jsx)(a.Icon,{icon:A.toolDelete}))),u&&Object(n.jsx)(a.DataActionDropDown,{dataName:null==r?void 0:r.getLabel(),widgetId:t.props.id,dataSource:r,size:"default",records:(t=>{var i,n;return(null==t?void 0:t.length)?t:null===(n=null===(i=e.queryData)||void 0===i?void 0:i.queryResult)||void 0===n?void 0:n.records})(null==r?void 0:r.getSelectedRecords())})))},renderViewBlock:e=>{const{associatedData:{currentQueryState:a,currentQueryDs:r,currentOriginDs:o,currentDsEntityStatus:u,getCurrentDsEntityNote:c}}=e,d="Horizontal"===(null==a?void 0:a.getQueryItemValue("resultListDirection"));return[s.c.Error,s.c.Warning].includes(u)?Object(n.jsx)(s.b,{templateType:"line",entityNote:c()}):Object(n.jsx)(s.e,{initState:{}},({visible:[s,u],refContainer:[c,p]})=>{var y,m,g,v;const f=null!==(y=null==o?void 0:o.getQueryPageSize())&&void 0!==y?y:n.CONSTANTS.DEFAULT_QUERY_PAGE_SIZE;return Object(n.jsx)("div",{ref:e=>p(e),className:"runtime-query__query-result-list-container"},Object(n.jsx)("div",{className:"runtime-query__query-result-info"},(null===(m=null==a?void 0:a.queryData)||void 0===m?void 0:m.queryResult)?`${i("featuresDisplayed")}: ${null===(v=null===(g=a.queryData.queryResult)||void 0===g?void 0:g.records)||void 0===v?void 0:v.length} / ${a.queryData.resultCount}`:""),!["","cleared"].includes(null==a?void 0:a.resultStatus)&&Object(n.jsx)(P,{className:"runtime-query__query-result-list",direction:d?"horizontal":"vertical",pagingConfig:{itemCountPerPage:f,initialLoadItemCount:f},requestDataItems:i=>$(void 0,void 0,void 0,(function*(){var n;u(!0);const r=yield l(Object.assign(Object.assign({},null!==(n=null==e?void 0:e.associatedData)&&void 0!==n?n:{}),{pagingSetting:{page:1,pageSize:i}}));return t.setState(({queryStates:e})=>({queryStates:(a.queryData=r,[...e])})),u(!1),a.queryData.queryResult.records})),associatedListData:null==a?void 0:a.queryData,onClickListItem:e=>{var i,a,l;const o=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i[null==e?void 0:e.index],s=o.getId(),u=(null!==(a=null==r?void 0:r.getSelectedRecordIds())&&void 0!==a?a:[]).includes(s)?[]:[o];n.MessageManager.getInstance().publishMessage(new n.DataRecordsSelectionChangeMessage(t.props.id,u)),null===(l=null==r?void 0:r.selectRecordsByIds)||void 0===l||l.call(r,u.map(e=>e.getId()))},onRenderDone:({dataItems:e,element:t})=>{const i=null==e?void 0:e.findIndex(e=>{var t;return null===(t=null==r?void 0:r.getSelectedRecordIds())||void 0===t?void 0:t.includes(null==e?void 0:e.getId())});if(i>=0){const e=null==t?void 0:t.querySelector(`.ui-unit-query-result-list-item:nth-of-type(${i+1})`),n=null==t?void 0:t.getBoundingClientRect(),a=null==e?void 0:e.getBoundingClientRect();n&&a&&(n.top>a.bottom||n.right<a.left||n.bottom<a.top||n.left>a.right)&&(null==t||t.scrollTo(d?null==e?void 0:e.offsetLeft:0,d?0:null==e?void 0:e.offsetTop))}}}))})}}]}]}]}]}};class G extends n.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.5.0",description:"1.5.0",upgrader:e=>{var t;let i=e;return null===(t=e.queryItems)||void 0===t||t.forEach((e,t)=>{null==e.useAttributeFilter&&(i=i.setIn(["queryItems",t,"useAttributeFilter"],!0)),null==e.useSpatialFilter&&(i=i.setIn(["queryItems",t,"useSpatialFilter"],!0))}),i}}]}}const J=new G;var Y=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function l(e){try{s(n.next(e))}catch(e){r(e)}}function o(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,o)}s((n=n.apply(e,t||[])).next())}))};const{iconMap:X,unitInfoMap:Z}=c(),ee=[{name:"preventOverflow",options:{padding:1}}];class te extends n.React.PureComponent{constructor(e){super(e),this.getI18nMessage=Object(o.c)({intl:this.props.intl,defaultMessages:l}),this.executingQuery=e=>Y(this,void 0,void 0,(function*(){var t,i,a,l,s,u,c,d,p;const{currentQueryState:y,currentQueryDs:m,currentOriginDs:v,currentJimuMapView:f,pagingSetting:{page:b,pageSize:S}}=e,h=m.getDataSourceJson();(null==h?void 0:h.isDataInDataSourceInstance)&&m.setSourceRecords(v.getSourceRecords());const{useAttributeFilter:j=!0,useSpatialFilter:w=!0}=y.queryItem,x=j?m.mergeQueryParams(v.getCurrentQueryParams()||{},{where:(null===(t=y.attributeFilterSqlExprObj)||void 0===t?void 0:t.sql)||"1=1",orderByFields:(y.getQueryItemValue("sortOptions")||[]).filter(e=>e.jimuFieldName).map(e=>`${e.jimuFieldName} ${e.order}`)}):null,I=Object.assign({returnGeometry:!0,page:b,pageSize:S},x);if(w)if(y.spatialFilterType===r.f.CurrentMapExtent)f&&Object.assign(I,{geometry:f.view.extent.toJSON()});else if(y.spatialFilterType===r.f.InteractiveDrawMode){const e=null===(a=null===(i=y.spatialInteractiveData)||void 0===i?void 0:i.graphic)||void 0===a?void 0:a.geometry;f&&Object.assign(I,{geometry:null===(l=["point","polyline"].includes(null==e?void 0:e.type)?Object(o.b)(e,f.view,{geometryEngine:this.state.esriModuleMap.geometryEngine}):e)||void 0===l?void 0:l.toJSON(),distance:y.getQueryItemValue("spatialInteractiveBufferDistance"),units:Z[y.getQueryItemValue("spatialInteractiveBufferUnit")]})}m.updateQueryParams(I,this.props.id),m.setStatus(n.DataSourceStatus.Unloaded),m.setCountStatus(n.DataSourceStatus.Unloaded);const k=m.load(I,{widgetId:this.props.id,refresh:!0}),O=m.loadCount(I,{widgetId:this.props.id,refresh:!0}),B=m.getPopupInfo();null===(s=y.spatialInteractiveData.layer)||void 0===s||s.removeAll(),this.setState(({queryStates:e})=>({queryStates:(y.spatialInteractiveData={isReady:!1,layer:null,graphic:null},[...e])}));const R=m.getLayerDefinition(),q=(e=>e.length?e:(()=>{var e;return[{fieldName:null!==(e=null==R?void 0:R.objectIdField)&&void 0!==e?e:"objectid",label:"OBJECTID",tooltip:"",visible:!0}]})())(((null===(u=yield B)||void 0===u?void 0:u.fieldInfos)||[]).filter(e=>e.visible)),_=null===(c=m.getSchema())||void 0===c?void 0:c.fields,D=q.map(e=>e.fieldName),C=_?Object.keys(_).filter(e=>D.includes(_[e].name)):[];m.setSelectedFields(C);const M=yield k;if(!(null==m?void 0:m.layer)){const e=yield((e,t,i)=>{var a;let r;return(null===(a=null==e?void 0:e.getDataSourceJson())||void 0===a?void 0:a.isDataInDataSourceInstance)?e.load({returnGeometry:!0},{widgetId:i}).then(t=>g(void 0,void 0,void 0,(function*(){const i=yield Promise.resolve(t);return yield n.dataSourceUtils.createFeatureLayerByRecords(e,i)}))).catch(()=>null):(r=e.layer?e.layer:e.itemId?new t(Object.assign(Object.assign({},e.url?{url:e.url}:{}),{portalItem:{id:e.itemId,portal:{url:e.portalUrl}}})):new t({url:e.url}),r.load().then(()=>g(void 0,void 0,void 0,(function*(){return yield Promise.resolve(r)}))))})(m,this.state.esriModuleMap.FeatureLayer,this.props.id);M.forEach(t=>{t.feature.sourceLayer=e})}const T={queryResult:{records:M,fields:q.map(e=>e.fieldName)},resultCount:yield O,fieldInfos:q,layerDefinition:R,symbolJson:y.getQueryItemValue("resultCustomSymbol"),esriModuleMap:this.state.esriModuleMap,intl:this.props.intl,ds:m},V=new n.DataRecordSetChangeMessage(this.props.id,m.id,n.RecordSetChangeType.Update,{records:null===(d=null==T?void 0:T.queryResult)||void 0===d?void 0:d.records,fields:null===(p=null==T?void 0:T.queryResult)||void 0===p?void 0:p.fields,dataSource:m});return n.MessageManager.getInstance().publishMessage(V),T})),this.renderArrangeIconPopper=({queryContent:e})=>{const{config:t,icon:i}=this.props,r=this.updateStateByTogglePopper;return Object(n.jsx)(s.e,{initState:{}},({refContainer:[o,s]})=>{var u,c,d,p;const y=a.hooks.useCheckSmallBrowserSzieMode(),m=this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:l._widgetLabel});return Object(n.jsx)("div",{className:"runtime-query__widget-popper"},Object(n.jsx)(a.Button,{ref:e=>s(e),className:"runtime-query__widget-icon-button h-100",icon:!0,size:"sm",type:"tertiary",onClick:r},Object(n.jsx)(a.Icon,Object.assign({size:16},"string"==typeof i?{icon:i,color:""}:{icon:i.svg,color:i.properties.color}))),this.state.popperVersion>1&&(y?Object(n.jsx)(a.MobilePanel,{open:this.state.isOpen,title:m,toggle:r},e):Object(n.jsx)(a.Popper,{className:"ui-unit-popper ui-unit-popper_k-arrangement-icon flex-grow-1",floating:!0,open:this.state.isOpen,headerTitle:m,onHeaderClose:r,minSize:null===(c=null===(u=t.sizeMap)||void 0===u?void 0:u.arrangementIconPopper)||void 0===c?void 0:c.minSize,defaultSize:null===(p=null===(d=t.sizeMap)||void 0===d?void 0:d.arrangementIconPopper)||void 0===p?void 0:p.defaultSize,dragBounds:"body",version:this.state.popperVersion,reference:o,placement:"bottom-start",modifiers:ee,css:R()},e)))})},this.updateStateByTogglePopper=()=>{this.setState(({isOpen:e,popperVersion:t})=>({isOpen:!e,popperVersion:t+ +!e}))},this.updateStateByDataSourceCreated=e=>{this.setState({dss:e})},this.updateStateByDataSourceInfoChange=()=>{this.setState(({dss:e})=>({dss:Object.assign({},e)}))},this.selectSpatialRelLayer=(e,t)=>{var i,n,a,r,l;const o=f(this),{currentSelectedQueryStateIndex:s,currentJimuMapView:u}=o,c=e[t];var d,p;null===(a=null===(n=null===(i=null==u?void 0:u.view)||void 0===i?void 0:i.map)||void 0===n?void 0:n.layers)||void 0===a||a.removeMany(e.filter(e=>e!==c).map(e=>e.layer)),d=null===(l=null===(r=null==u?void 0:u.view)||void 0===r?void 0:r.map)||void 0===l?void 0:l.layers,p=null==c?void 0:c.layer,(null==d?void 0:d.includes(p))||null==d||d.add(p),this.setState(({queryStates:e})=>{const t=[...e];return t[s]=Object.assign(Object.assign({},t[s]),{spatialRelLayerGeometries:null,isLoadingRelLayerGeometries:!0}),{queryStates:t}},()=>{c.query({returnGeometry:!0}).then(e=>{const i=e.records.map(e=>e.feature.geometry);this.setState(({queryStates:e})=>{const n=[...e];return n[s]=Object.assign(Object.assign({},n[s]),{spatialRelLayerIndex:t,spatialRelLayerGeometries:i,isLoadingRelLayerGeometries:!1}),{queryStates:n}})})})},this.selectSpatialRelLayerOnMount=e=>{const{currentQueryState:t}=f(this);if(e){const e=b(this.state.dss,t);this.selectSpatialRelLayer(e,t.spatialRelLayerIndex)}else t.spatialRelLayerGeometries=null,this.setState(({queryStates:e})=>({queryStates:[...e]}))},this.state={queryStates:[],selectedQueryStateIndex:-1,propConfig:null,popperVersion:1,isOpen:!1,jimuMapViewMap:null,dss:{},esriModuleMap:{}},this.mainViewBlock=H({targetSelf:this})}static getDerivedStateFromProps(e,t){var i,a;if(!n.lodash.isDeepEqual(e.config.queryItems,null===(i=t.propConfig)||void 0===i?void 0:i.queryItems)||e.config.arrangeType!==(null===(a=t.propConfig)||void 0===a?void 0:a.arrangeType)){const t=Array.from(e.config.queryItems||[]).map((e,t,i)=>k(i,t));return{queryStates:t,selectedQueryStateIndex:1===(null==t?void 0:t.length)&&e.config.arrangeType!==r.e.Inline?0:-1,propConfig:e.config}}return null}componentDidMount(){Object(n.loadArcGISJSAPIModules)(["esri/geometry/Multipoint","esri/geometry/Polyline","esri/geometry/Polygon","esri/geometry/geometryEngine","esri/layers/FeatureLayer","esri/widgets/Sketch","esri/symbols/support/jsonUtils"]).then(e=>{const[t,i,n,a,r,l,o]=e;this.setState({esriModuleMap:{Multipoint:t,Polyline:i,Polygon:n,geometryEngine:a,FeatureLayer:r,SketchClass:l,jsonUtils:o}})})}render(){var e;const t=this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:l._widgetLabel});if(!this.state.queryStates.length)return Object(n.jsx)(a.WidgetPlaceholder,{icon:X.iconQuery,widgetId:this.props.id,message:t});const i=[...(null!==(e=this.state.queryStates)&&void 0!==e?e:[]).map(e=>{var t,i,n;return[null===(t=null==e?void 0:e.queryItem)||void 0===t?void 0:t.useDataSource,{dataSourceId:null===(i=null==e?void 0:e.queryItem)||void 0===i?void 0:i.outputDataSourceId,mainDataSourceId:null===(n=null==e?void 0:e.queryItem)||void 0===n?void 0:n.outputDataSourceId}]}).flat(),...(this.state.queryStates||[]).map(e=>null==e?void 0:e.getQueryItemValue("spatialRelationUseDataSources")).flat().filter(e=>e)];return Object(n.jsx)("div",{className:"jimu-widget runtime-query",css:Object(u.a)(this.props.theme)},Object(n.jsx)(n.MultipleDataSourceComponent,{useDataSources:Object(n.Immutable)(i),widgetId:this.props.id,localId:"local",onDataSourceCreated:this.updateStateByDataSourceCreated,onDataSourceInfoChange:e=>(this.state.queryStates.forEach(e=>{var t,i;let a=!1;const r=S(this.props,this.state.dss,e).dataSource;if(r){const l=h(r);(null==l?void 0:l.getStatus())===n.DataSourceStatus.NotReady&&(null==r?void 0:r.getStatus())!==n.DataSourceStatus.NotReady&&O(e,this),Object(n.getAppStore)().getState().dataSourcesInfo[null===(i=null===(t=null==e?void 0:e.queryItem)||void 0===t?void 0:t.useDataSource)||void 0===i?void 0:i.dataSourceId]||(a=!0)}e.dsRemoved=a}),this.updateStateByDataSourceInfoChange())}),Object(n.jsx)(o.a,{currentViewBlock:this.mainViewBlock,getViewBlockScenarios:p,associatedData:f(this)}))}}te.mapExtraStateProps=(e,t)=>{var i;return{dataSourceWidgetLabels:Array.from(null!==(i=null==t?void 0:t.useDataSources)&&void 0!==i?i:[]).map(t=>{var i,a,r;const l=n.appConfigUtils.getWidgetIdByOutputDataSource(t);return null===(r=null===(a=null===(i=null==e?void 0:e.appConfig)||void 0===i?void 0:i.widgets)||void 0===a?void 0:a[l])||void 0===r?void 0:r.label})}},te.versionManager=J},62:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(0);function a(e){return n.css`
    .jimu-rtl & {
      .setting-query__setting-block-type-setting-pane {
        .setting-query__setting-block-key-field-arrangement-type,
        .setting-query__setting-block-key-field-filter-types,
        .setting-query__setting-block-type-nav-back-section {
          button.jimu-btn {
            transform: scaleX(-1);
          }
        }
      }
      .ui-unit-nav-line {
        button.jimu-btn {
          transform: scaleX(-1);
        }
      }
    }

    .expand-mobile-panel & {
      &.runtime-query__runtime-block-type-query-board {
        padding: .5rem;
      }
    }

    &.runtime-query {
      .runtime-query__widget-popper {
      }
      .runtime-query__widget-static {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
    &.runtime-query__runtime-block-type-query-board {
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 1rem;

      &.runtime-query_arrange-type-popper {
        min-width: 300px;
        max-width: 800px;
      }

      &.runtime-query_arrange-type-inline {
        &.runtime-query_arrange-wrap-true {
          .runtime-query__query-list {
            flex-wrap: wrap;
          }
        }
        .runtime-query__query-list {
          flex-direction: row;
          .runtime-query__query-list-item {
            align-items: center;
            margin: .25rem;
            .ui-unit-entity-status_type-icon {
              margin-left: .5rem;
              .jimu-icon {
                margin-right: 0;
              }
            }
          }
        }
      }

      .runtime-query__runtime-block-type-query-board {
        padding: 0;
      }
      .runtime-query__runtime-block-type-query-stage {
        position: relative;
        display: flex;
        flex-flow: column;
        flex: 1;
        overflow: auto;
        .runtime-query__runtime-block-key-spatial-filter {
          .ui-unit-entity-status {
            padding-top: .5rem;
          }
        }
        .runtime-query__runtime-block-key-interactive-draw {
          display: flex;
        }
      }
      .ui-unit-form-action-bar {
        align-items: flex-end;
        padding: .25rem 0;
        .ui-unit-button {
          font-weight: 500;
        }
        .ui-unit-button_clear-results {
          font-size: .8125rem;
          padding: 0 .5rem;
        }
      }
      .ui-unit-nav-line {
        font-weight: 500;
        font-size: .875rem;
        padding: .25rem 0;
      }
      .ui-unit-title-text-group {
        display: flex;
        flex: 1;
        justify-content: space-between;
      }
      .runtime-query__query-list {
        display: flex;
        flex-flow: column;
        .runtime-query__query-list-item {
          display: flex;
        }
      }
      .runtime-query__runtime-block-type-form-line {
        padding: .25rem 0;
        .runtime-ui-unit-form-line__title {
          font-weight: 500;
          font-size: .875rem;
          padding: .25rem 0;
        }
      }
      .runtime-query__runtime-block-type-form-questions {
        flex: 1;
        padding: .5rem 0;
      }
      .runtime-query__query-result-info {
      }
      .runtime-query__query-result-list-container {
        display: flex;
        flex: 1;
        flex-flow: column;
        overflow: auto;
      }
    }
    &.ui-unit-popper_k-query-item {
      .panel-header {
        display: none;
      }
    }

    .ui-unit-nav-line {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      &.ui-unit-nav-line_type-back {

        .ui-unit-nav-line-button {
          padding-left: 0;
        }
      }
      &.ui-unit-nav-line_type-enter {
        justify-content: flex-end;
        cursor: pointer;
      }
      &.ui-unit-nav-line_disabled-true {
        cursor: unset;
        .ui-unit-nav-line-button {
          opacity: .2;
        }
      }

      .ui-unit-nav-line-option {
        display: flex;
        .ui-unit-button {
          margin: 0 .25rem;
        }
      }

      .ui-unit-nav-line-title {
        display: flex;
        flex: 1;
        align-items: center;
        padding-right: 0.5rem;
      }

      .ui-unit-icon {
        width: 0.875rem;
        margin-right: 0.25rem;
      }
    }

    .setting-query__setting-block-type-setting-pane {
      width: 100%;
      height: 100%;

      &.setting-query__setting-block-key-setting-pane-main {
        .setting-query__setting-block-key-section-query-item {
          .setting-ui-unit-list {
            margin-top: 1rem;
          }
        }

        .setting-query__setting-block-key-field-arrangement-type {
          margin-top: 10px;
          margin-left: -0.5rem;
          display: flex;
          justify-content: flex-start;
          .jimu-btn {
            margin-left: 0.5rem;
            padding: 0;
            background: ${e.colors.palette.light[200]};
            &.active {
              border: 1px solid ${e.colors.palette.primary[600]};
            }
          }
        }
      }

      .setting-query__setting-block-key-setting-content-query-item-main {
        &.setting-query__setting-block-type-setting-content {
          height: calc(100% - ${n.polished.rem(50)});
          overflow: auto;
          .setting-query__setting-block-key-field-symbol-type {
            label {
              flex: none;
            }
          }
        }
      }

      .setting-ui-unit-header {
        .left-part {
          .jimu-btn {
            border-radius: 50%;
            background: ${e.colors.palette.light[500]};
          }
        }
      }

      .setting-query__setting-block-type-setting-content {

        .setting-query__setting-field-row0:not(.collapse)+.jimu-widget-setting--row {
          margin-top: 0;
        }

        .ui-unit-select, .setting-ui-unit-input {
          flex: 1;
        }

        textarea.setting-ui-unit-input {
          height: 80px;
        }

        .jimu-widget-setting--row-label {
          +.ui-unit-select, +.setting-ui-unit-input {
            flex: 0 0 50%;
          }
        }

        .setting-ui-unit-check-input-item {
          width: 100%;
          display: flex;
          align-items: center;

          .setting-ui-unit-check-input-label {
            flex: 1;
            overflow: hidden;
          }

          .setting-ui-unit-check-input-element, .setting-ui-unit-check-input-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin: .25rem .5rem .25rem 0;
          }
        }

        .setting-ui-unit-tree, .setting-ui-unit-list {
          width: 100%;

          .tree-item {
            justify-content: space-between;
            align-items: center;
            font-size: ${n.polished.rem(13)};

            &.tree-item_level-1 {
            }
            .jimu-checkbox {
              margin-right: .5rem;
            }
          }
        }
      }

      .setting-collapse {
        > .collapse {
          margin-top: 1rem;
        }
      }
    }

    .setting-query__spatial-relationship-dialog {
      width: 400px;
      padding: 10px;
      background-color: ${e.colors.palette.light[300]};

      table {
        .setting-ui-unit-table-col:nth-of-type(1) {
          width: 20%;
        }
        .setting-ui-unit-table-col:nth-of-type(2) {
          width: 40%;
        }
        .setting-ui-unit-table-col:nth-of-type(3) {
          width: 40%;
        }
        .text-content {
          color: ${e.colors.black};
          font-size: 0.875rem;
        }
      }
    }
    .ui-unit-form-action-bar {
      display: flex;
      justify-content: flex-end;
      > .ui-unit-separator {
        flex: 1;
      }
      > * {
        &.first-child {
          margin-left: 0;
        }
        margin-left: 0.5rem;
      }
    }
    .ui-unit-sketch-icon {
      vertical-align: middle;
      padding-right: .5rem;
    }
    .empty-placeholder {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 2rem;
      .empty-placeholder-text {
        color: ${e.colors.palette.dark[500]};
        font-size: ${n.polished.rem(14)};
        margin-top: 16px;
        text-align: center;
      }
      .empty-placeholder-icon {
        color: ${e.colors.palette.dark[200]};
      }
    }
  `}},69:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 8a.522.522 0 01-.516.527H3.976L7.473 12.1a.535.535 0 010 .746.508.508 0 01-.73 0L2 8l4.743-4.846a.508.508 0 01.73 0 .535.535 0 010 .746L3.976 7.473h9.508c.285 0 .516.236.516.527z" fill="#000" fill-rule="nonzero"></path></svg>'},96:function(e,t){e.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.65 9.793c-.08-.782.547-1.46 1.35-1.46s1.43.678 1.35 1.46l-.525 5.144a.822.822 0 01-.825.73.822.822 0 01-.825-.73l-.526-5.144zM12 20.067c.828 0 1.5-.657 1.5-1.467s-.672-1.467-1.5-1.467-1.5.657-1.5 1.467.672 1.467 1.5 1.467z" fill="#FFC300"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 23L12 1l12 22H0zm2.5-1.467L12 4.117l9.5 17.416h-19z" fill="#FFC300"></path></svg>'}}))}}}));
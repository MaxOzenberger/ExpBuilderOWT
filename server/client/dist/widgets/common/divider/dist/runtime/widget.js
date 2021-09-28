System.register(["jimu-core"],(function(t){var e;return{setters:[function(t){e=t}],execute:function(){t(function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=330)}({0:function(t,o){t.exports=e},11:function(t,e,o){"use strict";var i,n,r,s,l;o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return s})),o.d(e,"d",(function(){return l})),function(t){t.Regular="REGULAR",t.Hover="HOVER"}(i||(i={})),function(t){t.Horizontal="Horizontal",t.Vertical="Vertical"}(n||(n={})),function(t){t.Style0="Style0",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10"}(r||(r={})),function(t){t.None="None",t.Point0="Point0",t.Point1="Point1",t.Point2="Point2",t.Point3="Point3",t.Point4="Point4",t.Point5="Point5",t.Point6="Point6",t.Point7="Point7",t.Point8="Point8"}(s||(s={})),function(t){t.None="None",t.Default="Default",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10",t.Style11="Style11",t.Style12="Style12",t.Style13="Style13",t.Style14="Style14",t.Style15="Style15",t.Style16="Style16",t.Style17="Style17",t.Style18="Style18",t.Style19="Style19"}(l||(l={}))},330:function(t,e,o){"use strict";o.r(e),o.d(e,"Widget",(function(){return s}));var i=o(0),n=o(11),r=o(70);class s extends i.React.PureComponent{constructor(t){super(t),this.editWidgetConfig=t=>{if(!window.jimuConfig.isInBuilder)return;this.props.builderSupportModules.jimuForBuilderLib.getAppConfigAction().editWidgetConfig(this.props.id,t).exec()},this.getStyle=()=>i.css`
      & {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: ${i.polished.rem(6)};
      }
      .divider-con {
        height: 100%;
        width: 100%;
      }
    `,this.getDividerLinePositionStyle=t=>{const{direction:e,pointEnd:o,pointStart:i,strokeStyle:s}=t,l=e==n.a.Horizontal,a=i.pointStyle,d=i.pointSize*this.getSize(null==s?void 0:s.size),p=o.pointStyle,u=o.pointSize*this.getSize(null==s?void 0:s.size),c=a!=n.c.None,$=p!=n.c.None;return Object(r.a)(l,c,$,d,u)},this.getSize=t=>{const e=t.split("px")[0];return Number(e)},this.getDividerLineStyle=t=>{const{direction:e}=t,{size:o,color:i,type:n}=t.strokeStyle;return Object(r.c)(o,i,e)[n]},this.getPointStyle=(t,e=!0)=>{const{pointEnd:o,pointStart:i,strokeStyle:n,direction:s}=t,l=Number(this.getSize(n.size)),a=(e?i.pointSize*l:o.pointSize*l)+"px",d=null==n?void 0:n.color,p=e?i.pointStyle:o.pointStyle;return Object(r.b)(a,d,s,e)[p]},this.onQuickStyleChange=t=>{var e;const o=this.props.id,i=this.props.builderSupportModules,n=null===(e=null==i?void 0:i.jimuForBuilderLib)||void 0===e?void 0:e.getAppConfigAction;n&&n().editWidgetProperty(o,"config",t).exec()},this.toggleQuickStyle=(t=!1)=>{this.props.dispatch(i.appActions.widgetStatePropChange(this.props.id,"showQuickStyle",t))},this.getQuickStyleComponent=()=>{var t,e,o;const{config:n,showQuickStyle:r,active:s,theme:l}=this.props,{direction:a,themeStyle:d}=n,{isMount:p}=this.state,u=null===(o=null===(e=null===(t=null==this?void 0:this.props)||void 0===t?void 0:t.builderSupportModules)||void 0===e?void 0:e.widgetModules)||void 0===o?void 0:o.QuickStyle;return!u&&p?null:Object(i.jsx)(u,{direction:a,isOpen:r&&s,theme:l,selectedType:null==d?void 0:d.quickStyleType,onChange:this.onQuickStyleChange,reference:null==this?void 0:this.domNode,getDividerLineStyle:this.getDividerLineStyle,getDividerLinePositionStyle:this.getDividerLinePositionStyle,closeQuickStyle:this.toggleQuickStyle,getPointStyle:this.getPointStyle})},this.state={isMount:!1}}componentDidMount(){this.props.active&&this.toggleQuickStyle(!0),this.setState({isMount:!0})}componentDidUpdate(t,e){(this.props.appMode!==t.appMode&&this.props.appMode===i.AppMode.Run||this.props.active!==t.active)&&this.toggleQuickStyle()}render(){const{config:t,id:e}=this.props,{direction:o,pointEnd:r,pointStart:s}=t,l=Object(i.classNames)("jimu-widget","widget-divider","position-relative","divider-widget-"+e),a=o==n.a.Horizontal?"horizontal":"vertical",d=this.getDividerLineStyle(t),p=this.getDividerLinePositionStyle(t),u=this.getPointStyle(t,!0),c=this.getPointStyle(t,!1),$=Object(i.classNames)("divider-line","position-absolute",a,"point-start-"+s.pointStyle,"point-end-"+r.pointStyle);return Object(i.jsx)("div",{className:l,css:this.getStyle(),ref:t=>this.domNode=t},Object(i.jsx)("div",{className:"position-relative divider-con"},Object(i.jsx)("div",{className:"point-con"},s.pointStyle!=n.c.None&&Object(i.jsx)("span",{"data-testid":"divider-point-start",className:"point-start position-absolute",css:u}),r.pointStyle!=n.c.None&&Object(i.jsx)("span",{"data-testid":"divider-point-end",className:"point-end position-absolute",css:c})),Object(i.jsx)("div",{"data-testid":"divider-line",className:$,css:[d,p]}),window.jimuConfig.isInBuilder&&this.getQuickStyleComponent()))}}s.mapExtraStateProps=(t,e)=>{var o;let n=!1;const r=t.appRuntimeInfo.selection;if(r&&t.appConfig.layouts[r.layoutId]){const o=t.appConfig.layouts[r.layoutId].content[r.layoutItemId];n=o&&o.widgetId===e.id}const s=t.appContext.isInBuilder&&n,l=!!(t.widgetsState[e.id]||Object(i.Immutable)({})).showQuickStyle;return{appMode:r?null===(o=null==t?void 0:t.appRuntimeInfo)||void 0===o?void 0:o.appMode:null,active:s,showQuickStyle:l}},e.default=s},70:function(t,e,o){"use strict";o.d(e,"c",(function(){return r})),o.d(e,"b",(function(){return s})),o.d(e,"a",(function(){return a}));var i=o(0),n=o(11);function r(t,e,o=n.a.Horizontal,r=!1){const s=o==n.a.Horizontal,a={},d={};return e=e||"transparent",a.Style0=i.css`
    & {
      border-bottom: ${t} solid ${e};
    }
  `,a.Style1=i.css`
    & {
      border-bottom: ${t} dashed ${e};
    }
  `,a.Style2=i.css`
    & {
      border-bottom: ${t} dotted ${e};
    }
  `,a.Style3=i.css`
    & {
      height: ${t};
      position: relative;
    }
    &:before {
      position: absolute;
      content: '';
      height: ${t};
      left: ${l(t,4)};
      right: 0;
      background-image: repeating-linear-gradient(
        to right,
        ${e} 0,
        ${e} ${l(t,1)},
        transparent 0,
        transparent ${l(t,6)}
      );
    }
    &:after {
      position: absolute;
      content: '';
      height: ${t};
      left: 0;
      right: 0;
      background-image: repeating-linear-gradient(
        to right,
        ${e} 0,
        ${e} ${l(t,3)},
        transparent 0,
        transparent ${l(t,6)}
      );
    }
  `,a.Style6=i.css`
    & {
      height: ${t};
      background-image: repeating-linear-gradient(
        to right,
        ${e} 0,
        ${e} ${l(t,4)},
        transparent 0,
        transparent ${l(t,6)}
      );
    }
  `,a.Style7=i.css`
    & {
      border-color: ${e};
      border-bottom-style: double;
      border-bottom-width: ${r?"4px":t};
    }
  `,a.Style8=i.css`
    & {
      height: ${t};
      min-height: ${r?"6px":"unset"};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: ${l(t,.2,"4px")};
      background: ${e};
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${l(t,.4,"4px")};
      background: ${e};
    }
  `,a.Style9=i.css`
    & {
      height: ${t};
      min-height: ${r?"6px":"unset"};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: ${l(t,.4,"4px")};
      background: ${e};
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${l(t,.2,"4px")};
      background: ${e};
    }
  `,a.Style10=i.css`
    & {
      height: ${t};
      min-height: ${r?"8px":"unset"};
      position: relative;
      background-clip: content-box;
      border-top: ${l(t,.167)} solid ${e};
      border-bottom: ${l(t,.167)} solid ${e};
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: ${r?"2px":l(t,.3)};
      background: ${e};
      transform: translateY(-50%);
    }
  `,d.Style0=i.css`
    & {
      border-left: ${t} solid ${e};
    }
  `,d.Style1=i.css`
    & {
      border-left: ${t} dashed ${e};
    }
  `,d.Style2=i.css`
    & {
      border-left: ${t} dotted ${e};
    }
  `,d.Style3=i.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      position: absolute;
      content: '';
      width: ${t};
      top: ${l(t,3.8)};
      bottom: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        ${e} 0,
        ${e} ${l(t,1)},
        transparent 0,
        transparent ${l(t,6)}
      );
    }
    &:after {
      position: absolute;
      content: '';
      width: ${t};
      top: 0;
      bottom: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        ${e} 0,
        ${e} ${l(t,2.5)},
        transparent 0,
        transparent ${l(t,6)}
      );
    }
  `,d.Style6=i.css`
    & {
      width: ${t};
      background-image: repeating-linear-gradient(
        to bottom,
        ${e} 0,
        ${e} ${l(t,4)},
        transparent 0,
        transparent ${l(t,6)}
      );
    }
  `,d.Style7=i.css`
    & {
      border-left: ${t} double ${e};
    }
  `,d.Style8=i.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${l(t,.2,"4px")};
      background: ${e};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${l(t,.4,"4px")};
      background: ${e};
    }
  `,d.Style9=i.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${l(t,.4,"4px")};
      background: ${e};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${l(t,.2,"4px")};
      background: ${e};
    }
  `,d.Style10=i.css`
    & {
      width: ${t};
      position: relative;
      background-clip: content-box;
      border-left: ${l(t,.167)} solid ${e};
      border-right: ${l(t,.167)} solid ${e};
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: ${r?"2px":l(t,.3)};
      background: ${e};
      transform: translateX(-50%);
    }
  `,s?a:d}function s(t,e,o=n.a.Horizontal,r=!0){const s=l(t,1),a=l(t,.5),d=l(t,.1),p=l(t,.3);e=e||"transparent";const u=o==n.a.Horizontal;let c={None:"None"},$={None:"None"};c.Point0=i.css`
    & {
      width: ${s};
      height: ${s};
      border-radius: 50%;
      background-color: ${e};
      left: ${r?0:"unset"};
      right: ${r?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,c.Point1=i.css`
    & {
      width: ${p};
      height: ${s};
      background-color: ${e};
      left: ${r?"4%":"unset"};
      right: ${r?"unset":"4%"};
      top: 50%;
      transform: translateY(-50%);
    }
  `,c.Point2=i.css`
    & {
      width: ${p};
      height: ${s};
      background-color: ${e};
      left: ${r?0:"unset"};
      right: ${r?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,c.Point3=i.css`
    & {
      width: ${s};
      height: ${s};
      background-color: ${e};
      left: ${r?0:"unset"};
      right: ${r?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,c.Point4=i.css`
    & {
      width: ${l(t,.71)};
      height: ${l(t,.71)};
      background-color: ${e};
      left: ${r?l(t,.2):"unset"};
      right: ${r?"unset":l(t,.2)};
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  `;const h=i.css`
    .jimu-rtl & {
      border-color: transparent ${e} transparent transparent;
    }
    & {
      width: 0;
      height: 0;
      border-width: ${a};
      border-style: solid;
      border-color: transparent transparent transparent ${e};
      left: ${r?0:"unset"};
      right: ${r?"unset":"-"+l(t,.5)};
      top: 50%;
      transform: translateY(-50%);
    }
  `,g=i.css`
    .jimu-rtl & {
      border-color: transparent transparent transparent ${e};
    }
    & {
      width: 0;
      height: 0;
      border-width: ${a};
      border-style: solid;
      border-color: transparent ${e} transparent transparent;
      left: ${r?"-"+l(t,.5):"unset"};
      right: ${r?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,b=i.css`
    .jimu-rtl & {
      border-top: ${p} solid ${e};
      border-left: ${p} solid ${e};
    }
    .jimu-ltr & {
      border-bottom: ${p} solid ${e};
      border-left: ${p} solid ${e};
    }
    & {
      width: ${l(t,.8)};
      height: ${l(t,.8)};
      left: ${r?""+l(t,.2):"unset"};
      right: ${r?"unset":"-"+l(t,.2)};
      top: 50%;
      border-radius: ${d};
      transform: translateY(-50%) rotate(45deg);
    }
  `,f=i.css`
    .jimu-rtl & {
      border-right: ${p} solid ${e};
      border-bottom: ${p} solid ${e};
    }
    .jimu-ltr & {
      border-top: ${p} solid ${e};
      border-right: ${p} solid ${e};
    }
    & {
      width: ${l(t,.8)};
      height: ${l(t,.8)};
      left: ${r?"-"+l(t,.2):"unset"};
      right: ${r?"unset":""+l(t,.2)};
      top: 50%;
      border-radius: ${d};
      transform: translateY(-50%) rotate(45deg);
    }
  `;$.Point0=i.css`
    & {
      width: ${s};
      height: ${s};
      border-radius: 50%;
      background-color: ${e};
      top: ${r?0:"unset"};
      bottom: ${r?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,$.Point1=i.css`
    & {
      width: ${s};
      height: ${p};
      background-color: ${e};
      top: ${r?"4%":"unset"};
      bottom: ${r?"unset":"4%"};
      left: 50%;
      transform: translateX(-50%);
    }
  `,$.Point2=i.css`
    & {
      width: ${s};
      height: ${p};
      background-color: ${e};
      top: ${r?0:"unset"};
      bottom: ${r?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,$.Point3=i.css`
    & {
      width: ${s};
      height: ${s};
      background-color: ${e};
      top: ${r?0:"unset"};
      bottom: ${r?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,$.Point4=i.css`
    & {
      width: ${l(t,.71)};
      height: ${l(t,.71)};
      background-color: ${e};
      top: ${r?l(t,.2):"unset"};
      bottom: ${r?"unset":l(t,.2)};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  `;const y=i.css`
    & {
      width: 0;
      height: 0;
      border-width: ${a};
      border-style: solid;
      border-color: transparent transparent ${e} transparent;
      top: ${r?"-"+l(t,.5):"unset"};
      bottom: ${r?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,S=i.css`
    & {
      width: 0;
      height: 0;
      border-width: ${a};
      border-style: solid;
      border-color: ${e} transparent transparent transparent;
      top: ${r?0:"unset"};
      bottom: ${r?"unset":"-"+l(t,.5)};
      left: 50%;
      transform: translateX(-50%);
    }
  `,m=i.css`
    .jimu-rtl & {
      border-bottom: ${p} solid ${e};
      border-left: ${p} solid ${e};
    }
    .jimu-ltr & {
      border-bottom: ${p} solid ${e};
      border-right: ${p} solid ${e};
    }
    & {
      width: ${l(t,.8)};
      height: ${l(t,.8)};
      top: ${r?"-"+l(t,.2):"unset"};
      bottom: ${r?"unset":""+l(t,.2)};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-radius: ${d};
    }
  `,P=i.css`
    .jimu-rtl & {
      border-top: ${p} solid ${e};
      border-right: ${p} solid ${e};
    }
    .jimu-ltr & {
      border-top: ${p} solid ${e};
      border-left: ${p} solid ${e};
    }
    & {
      width: ${l(t,.8)};
      height: ${l(t,.8)};
      top: ${r?""+l(t,.2):"unset"};
      bottom: ${r?"unset":"-"+l(t,.2)};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-radius: ${d};
    }
  `;let v,w;return r?(v={Point5:h,Point6:g,Point7:b,Point8:f},w={Point5:S,Point6:y,Point7:P,Point8:m}):(v={Point5:g,Point6:h,Point7:f,Point8:b},w={Point5:y,Point6:S,Point7:m,Point8:P}),c=Object.assign(Object.assign({},c),v),$=Object.assign(Object.assign({},$),w),u?c:$}function l(t,e=1.5,o=null){if(!t)return"0px";const i=o?Number(o.split("px")[0]):0;let n=Number(t.split("px")[0]);return n=i>n?i:n,n*e<1?"1px":Math.round(n*e)+"px"}function a(t,e,o,n,r){const s=e?n/2+"px":0,l=e?n/2.5+"px":0,a=o?r/2+"px":0,d=o?r/2.5+"px":0,p=i.css`
    left: ${s};
    right: ${a};
    top: 50%;
    transform: translateY(-50%);
    &.point-start-Point1,
    &.point-start-Point2,
    &.point-start-Point5 {
      left: 0;
    }
    &.point-end-Point1,
    &.point-end-Point2,
    &.point-end-Point5 {
      right: 0;
    }
    &.point-start-Point7 {
      left: ${l};
    }
    &.point-end-Point7 {
      right: ${d};
    }
  `,u=i.css`
    top: ${s};
    bottom: ${a};
    left: 50%;
    transform: translateX(-50%);
    &.point-start-Point1,
    &.point-start-Point2,
    &.point-start-Point5 {
      top: 0;
    }
    &.point-end-Point1,
    &.point-end-Point2,
    &.point-end-Point5 {
      bottom: 0;
    }
  `;return t?p:u}}}))}}}));
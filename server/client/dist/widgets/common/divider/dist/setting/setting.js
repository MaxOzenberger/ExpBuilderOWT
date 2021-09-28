System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-for-builder","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(t){var e,o,i,n,r,s;return{setters:[function(t){e=t},function(t){o=t},function(t){i=t},function(t){n=t},function(t){r=t},function(t){s=t}],execute:function(){t(function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=498)}({0:function(t,o){t.exports=e},1:function(t,e){t.exports=o},10:function(t,e){t.exports=n},11:function(t,e,o){"use strict";var i,n,r,s,l;o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return s})),o.d(e,"d",(function(){return l})),function(t){t.Regular="REGULAR",t.Hover="HOVER"}(i||(i={})),function(t){t.Horizontal="Horizontal",t.Vertical="Vertical"}(n||(n={})),function(t){t.Style0="Style0",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10"}(r||(r={})),function(t){t.None="None",t.Point0="Point0",t.Point1="Point1",t.Point2="Point2",t.Point3="Point3",t.Point4="Point4",t.Point5="Point5",t.Point6="Point6",t.Point7="Point7",t.Point8="Point8"}(s||(s={})),function(t){t.None="None",t.Default="Default",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10",t.Style11="Style11",t.Style12="Style12",t.Style13="Style13",t.Style14="Style14",t.Style15="Style15",t.Style16="Style16",t.Style17="Style17",t.Style18="Style18",t.Style19="Style19"}(l||(l={}))},17:function(t,e){t.exports=r},2:function(t,e){t.exports=i},28:function(t,e){t.exports=s},498:function(t,e,o){"use strict";o.r(e);var i=o(0),n=o(10),r=o(2),s=o(17),l=o(28),a=o(1),d=o(11),u={stroke:"Stroke",start:"Start",end:"End",endpoints:"End point",startpoints:"Start point",nonePoint:"None",dividerSize:"Size",strokeSolid:"Solid",strokeDashed:"Dashed",strokeDotted:"Dotted",strokeDashdotted:"Dashdotted",strokeLongDashed:"Long dashed",strokeDouble:"Double",strokeThinThick:"Thin thick",strokeThickThin:"Thick thin",strokeTriple:"Triple",pointCircle:"Circle",pointCross:"Cross",pointLine:"Line",pointSquare:"Square",pointDiamond:"Diamond",pointInverted:"Inverted arrow",pointArrow:"Arrow",pointOpenArrow:"Open arrow",pointInvertedArrow:"Inverted open arrow"};class p extends i.React.PureComponent{constructor(t){super(t),this.getStyle=()=>{var t,e,o,n,r,s,l,a,d,u,p,h,c,g,b,$,v,m,S,y,f,j,x,k,P,w,O,C,N,T,z,D,L,R,A,Y,H,M,X;const{theme:I}=this.props;return i.css`
      & {
        width: ${i.polished.rem(84)};
        margin-left: ${i.polished.rem(8)};
      }
      .point {
        position: absolute;
        border-radius: 50%;
        background: ${null===(e=null===(t=null==I?void 0:I.colors)||void 0===t?void 0:t.palette)||void 0===e?void 0:e.primary[500]};
        background: ${null===(n=null===(o=null==I?void 0:I.colors)||void 0===o?void 0:o.palette)||void 0===n?void 0:n.light[800]};
        top: 50%;
      }
      .start-point {
        left: 0;
        width: ${i.polished.rem(6)};
        height: ${i.polished.rem(6)};
        transform: translateY(-3px);
      }
      .end-point {
        right: 0;
        width: ${i.polished.rem(10)};
        height: ${i.polished.rem(10)};
        transform: translateY(-5px);
      }
      .scale-con {
        & {
          width: 100%;
          top: ${i.polished.rem(-2)};
        }
        span {
          height: ${i.polished.rem(3)};
          width: 1px;
          background: ${null===(s=null===(r=null==I?void 0:I.colors)||void 0===r?void 0:r.palette)||void 0===s?void 0:s.light[800]};
        }
      }
      input[type='range'] {
        -webkit-appearance: none;
        background: transparent;
        position: relative;
        z-index: 10;
        width: 100%;
        display: block;
      }
      input[type='range']:focus {
        outline: none;
      }
      input[type='range']::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${null===(a=null===(l=null==I?void 0:I.colors)||void 0===l?void 0:l.palette)||void 0===a?void 0:a.light[800]};
        border-radius: 2px;
      }
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: ${i.polished.rem(10)};
        width: ${i.polished.rem(10)};
        cursor: pointer;
        background: ${null===(u=null===(d=null==I?void 0:I.colors)||void 0===d?void 0:d.palette)||void 0===u?void 0:u.light[300]};
        border: 2px solid ${null===(h=null===(p=null==I?void 0:I.colors)||void 0===p?void 0:p.palette)||void 0===h?void 0:h.dark[600]};
        border-radius: 50%;
        margin-top: ${i.polished.rem(-4)};
        position: relative;
        &:hover {
          border-color: var(--black);
        }
      }
      input[type='range']:focus::-webkit-slider-runnable-track {
        background: ${null===(g=null===(c=null==I?void 0:I.colors)||void 0===c?void 0:c.palette)||void 0===g?void 0:g.light[800]};
      }
      input[type='range']::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${null===($=null===(b=null==I?void 0:I.colors)||void 0===b?void 0:b.palette)||void 0===$?void 0:$.light[800]};
        border-radius: 2px;
      }
      input[type='range']::-moz-range-thumb {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        background: ${null===(m=null===(v=null==I?void 0:I.colors)||void 0===v?void 0:v.palette)||void 0===m?void 0:m.light[300]};
        border: 2px solid ${null===(y=null===(S=null==I?void 0:I.colors)||void 0===S?void 0:S.palette)||void 0===y?void 0:y.dark[600]};
        margin-top: ${i.polished.rem(-4)};
        position: relative;
        &:hover {
          border-color: var(--black);
        }
      }
      input[type='range']::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${null===(j=null===(f=null==I?void 0:I.colors)||void 0===f?void 0:f.palette)||void 0===j?void 0:j.light[800]};
        border-radius: 2px;
      }
      input[type='range']::-ms-thumb {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        background: ${null===(k=null===(x=null==I?void 0:I.colors)||void 0===x?void 0:x.palette)||void 0===k?void 0:k.light[300]};
        border: 2px solid ${null===(w=null===(P=null==I?void 0:I.colors)||void 0===P?void 0:P.palette)||void 0===w?void 0:w.dark[600]};
        margin-top: 0px;
        &:hover {
          border-color: ${null===(O=null==I?void 0:I.colors)||void 0===O?void 0:O.black};
        }
      }
      input:disabled::-webkit-slider-thumb {
        border-color: ${null===(N=null===(C=null==I?void 0:I.colors)||void 0===C?void 0:C.palette)||void 0===N?void 0:N.light[800]};
        &:hover {
          border-color: ${null===(z=null===(T=null==I?void 0:I.colors)||void 0===T?void 0:T.palette)||void 0===z?void 0:z.light[800]};
        }
      }
      input:disabled::-ms-thumb {
        border-color: ${null===(L=null===(D=null==I?void 0:I.colors)||void 0===D?void 0:D.palette)||void 0===L?void 0:L.light[800]};
        &:hover {
          border-color: ${null===(A=null===(R=null==I?void 0:I.colors)||void 0===R?void 0:R.palette)||void 0===A?void 0:A.light[800]};
        }
      }
      input:disabled::-moz-range-thumb {
        border-color: ${null===(H=null===(Y=null==I?void 0:I.colors)||void 0===Y?void 0:Y.palette)||void 0===H?void 0:H.light[800]};
        &:hover {
          border-color: ${null===(X=null===(M=null==I?void 0:I.colors)||void 0===M?void 0:M.palette)||void 0===X?void 0:X.light[800]};
        }
      }
    `},this.getScale=()=>{const t=[];for(let e=0;e<99;e++)t.push(Object(i.jsx)("span",{className:"position-absolute",key:e,style:{left:1*(e+1)+"%"}}));return Object(i.jsx)("div",{className:"scale-con position-absolute left-0 right-0"},t)},this.onChange=t=>{const e=2*(t.target.value/100)+3;this.setState({value:e}),clearTimeout(this.updateConfigTimeout),this.updateConfigTimeout=setTimeout(()=>{var t;null===(t=null==this?void 0:this.props)||void 0===t||t.onChange(e)},100)},this.getRangeValue=()=>{const{value:t}=this.state;return 100*(t-3)/2},this.state={value:(null==t?void 0:t.value)||0}}componentWillUnmount(){clearTimeout(this.updateConfigTimeout)}render(){const{pointStyle:t,intl:e}=this.props,o=this.getRangeValue();return Object(i.jsx)("div",{className:"range-input position-relative",css:this.getStyle()},Object(i.jsx)("div",{className:"start-point point"}),Object(i.jsx)("input",{type:"range",title:e("dividerSize"),disabled:t==d.c.None,value:o,step:1,min:0,max:100,onChange:t=>{this.onChange(t)}}),Object(i.jsx)("div",{className:"end-point point"}))}}var h=o(70);class c extends i.React.PureComponent{constructor(t){super(t),this.nls=t=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:u[t]}):t,this.getLineStyles=()=>{const{isPointStart:t}=this.props,e=[],o=Object(h.b)("11px","#fff",d.a.Horizontal,t);for(const t in o){const i=o[t],n=t==d.c.None?{value:t}:{style:i,value:t};e.push(n)}return e},this.getStyle=()=>i.css`
      & {
        width: ${i.polished.rem(68)};
      }
      & > div {
        width: 100%;
      }
    `,this.getOptionStyle=()=>i.css`
      & {
        display: block;
        width: 100%;
      }
      &.divider-line-con {
        margin: ${i.polished.rem(8)} 0 ${i.polished.rem(8)} ${i.polished.rem(2)};
        height: ${i.polished.rem(2)};
      }
      .points {
        /* left: 0;
        top: 50%;
        transform: translateY(-50%); */
      }
    `,this.getSelectStyle=()=>i.css`
      .dropdown-menu--inner {
        width: ${i.polished.rem(94)};
      }
      & {
        width: ${i.polished.rem(94)};
      }
    `,this.getDividerLineStyle=()=>{const{isPointStart:t}=this.props;return Object(h.a)(!0,t,!t,11,11)},this.pointTitle={None:this.nls("nonePoint"),Point0:this.nls("pointCircle"),Point1:this.nls("pointCross"),Point2:this.nls("pointLine"),Point3:this.nls("pointSquare"),Point4:this.nls("pointDiamond"),Point5:this.nls("pointInverted"),Point6:this.nls("pointArrow"),Point7:this.nls("pointOpenArrow"),Point8:this.nls("pointInvertedArrow")}}_onLineStyleChange(t){const e=t.target.value;this.props.onChange(e)}render(){const{value:t,className:e,style:o,isPointStart:n}=this.props,r=n?"point-start-":"point-end-";return Object(i.jsx)("div",{className:Object(i.classNames)(e,"style-setting--line-style-selector"),style:o,css:this.getStyle()},Object(i.jsx)(a.Select,{size:"sm",name:"lineType",value:t,title:this.pointTitle[t],onChange:this._onLineStyleChange.bind(this),css:this.getSelectStyle()},this.getLineStyles().map((t,e)=>Object(i.jsx)(a.Option,{key:e,value:t.value,title:this.pointTitle[t.value]},Object(i.jsx)("div",{className:"w-100 pl-1 pr-1"},t.value==d.c.None&&Object(i.jsx)("div",{className:"position-relative",css:this.getOptionStyle()},Object(i.jsx)("span",null,this.nls("nonePoint"))),t.value!=d.c.None&&Object(i.jsx)("div",{className:"position-relative divider-line-con",css:this.getOptionStyle()},Object(i.jsx)("div",{className:Object(i.classNames)("position-absolute divider-line",`${r}${t.value}`),css:this.getDividerLineStyle(),style:{border:"1px solid #fff"}}),Object(i.jsx)("span",{className:"position-absolute points",css:t.style})))))))}}c.defaultProps={value:d.c.None,onChange:()=>{}};class g extends i.React.PureComponent{constructor(t){super(t),this.nls=t=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:u[t]}):t,this.getLineStyles=()=>{const t=[],e=Object(h.c)("2px","#fff",d.a.Horizontal,!0);for(const o in e)t.push({style:e[o],value:o});return t},this.getStyle=()=>i.css`
      & {
        width: ${i.polished.rem(92)};
      }
    `,this.lineTitle={Style0:this.nls("strokeSolid"),Style1:this.nls("strokeDashed"),Style2:this.nls("strokeDotted"),Style3:this.nls("strokeDashdotted"),Style6:this.nls("strokeLongDashed"),Style7:this.nls("strokeDouble"),Style8:this.nls("strokeThinThick"),Style9:this.nls("strokeThickThin"),Style10:this.nls("strokeTriple")}}_onLineStyleChange(t){const e=t.target.value;this.props.onChange(e)}render(){const{value:t,className:e,style:o}=this.props,n=i.css`
      width: 100%;
      margin: 6px 0;
    `;return Object(i.jsx)("div",{className:Object(i.classNames)(e,"style-setting--line-style-selector"),style:o,css:this.getStyle()},Object(i.jsx)(a.Select,{size:"sm",name:"lineType",value:t,title:this.lineTitle[t],onChange:this._onLineStyleChange.bind(this)},this.getLineStyles().map((t,e)=>Object(i.jsx)(a.Option,{key:e,value:t.value,title:this.lineTitle[t.value]},Object(i.jsx)("div",{css:[t.style,n]})))))}}g.defaultProps={value:d.b.Style0,onChange:()=>{}};class b extends i.React.PureComponent{constructor(t){super(t),this.units=[a.UnitTypes.PIXEL],this.getStyle=t=>{var e,o;return i.css`
      .padding-top-0 {
        padding-top: 0;
      }
      .unit-width {
        width: ${i.polished.rem(60)};
        min-width: ${i.polished.rem(60)};
      }
      .start-end-point .jimu-widget-setting--section-header h6 {
        font-size: ${i.polished.rem(13)};
        color: ${null===(o=null===(e=null==t?void 0:t.colors)||void 0===e?void 0:e.palette)||void 0===o?void 0:o.dark[400]};
      }
    `},this.onSettingChange=(t,e)=>{let o=this.props.config;o=Array.isArray(t)?o.setIn(t,e):o.set(t,e),o.themeStyle.quickStyleType!=d.d.None&&(o=o.setIn(["themeStyle","quickStyleType"],d.d.None)),this.props.onSettingChange({id:this.props.id,config:o})},this.onRadioChange=(t,e,o)=>{t.currentTarget.checked&&(this.onSettingChange(e,o),Object(n.getAppConfigAction)().exchangeWidthAndHeight().exec())},this.onDirectionChange=t=>{const e=t?d.a.Vertical:d.a.Horizontal,{direction:o}=this.props.config;if(e==o)return!1;this.onSettingChange("direction",e),Object(n.getAppConfigAction)().exchangeWidthAndHeight().exec()},this.translate=(t,e,o)=>{const i=e?a.defaultMessages:u;return this.props.intl.formatMessage({id:t,defaultMessage:i[t]},o)},this.onDividerLineStyleChange=(t,e)=>{this.onSettingChange(["dividerStyle",t],e)},this.onLineStyleChange=t=>{var e,o,i;if(t==(null===(i=null===(o=null===(e=null==this?void 0:this.props)||void 0===e?void 0:e.config)||void 0===o?void 0:o.strokeStyle)||void 0===i?void 0:i.type))return!1;this.onSettingChange(["strokeStyle","type"],t)},this.onStrokeSizeChange=t=>{var e,o,i;const n=`${t.distance}${t.unit}`;if(n==(null===(i=null===(o=null===(e=null==this?void 0:this.props)||void 0===e?void 0:e.config)||void 0===o?void 0:o.strokeStyle)||void 0===i?void 0:i.size))return!1;this.onSettingChange(["strokeStyle","size"],n)},this.onColorChange=t=>{var e,o,i;if(t==(null===(i=null===(o=null===(e=null==this?void 0:this.props)||void 0===e?void 0:e.config)||void 0===o?void 0:o.strokeStyle)||void 0===i?void 0:i.color))return!1;this.onSettingChange(["strokeStyle","color"],t)},this.onPointStyleChange=(t,e)=>{var o,i;if(e==(null===(i=null===(o=null==this?void 0:this.props)||void 0===o?void 0:o.config[t])||void 0===i?void 0:i.pointStyle))return!1;this.onSettingChange([t,"pointStyle"],e)},this.onPointSizeChange=(t,e)=>{var o,i;if(e==(null===(i=null===(o=null==this?void 0:this.props)||void 0===o?void 0:o.config[t])||void 0===i?void 0:i.pointSize))return!1;this.onSettingChange([t,"pointSize"],e)},this.state={isLinkSettingShown:!1,isAdvance:!1}}render(){const{config:t,theme:e,appTheme:o,intl:n}=this.props,{direction:a,strokeStyle:u,pointEnd:h,pointStart:b}=t;return Object(i.jsx)("div",{className:Object(i.classNames)("jimu-widget-card-setting","jimu-widget-setting"),css:this.getStyle(this.props.theme)},Object(i.jsx)(r.SettingSection,null,Object(i.jsx)(r.SettingRow,{label:this.translate("direction",!0)},Object(i.jsx)(r.DirectionSelector,{vertical:a==d.a.Vertical,onChange:this.onDirectionChange}))),Object(i.jsx)(r.SettingSection,{title:this.translate("style",!0),className:"border-bottom-0"},Object(i.jsx)(r.SettingRow,{label:this.translate("color")},Object(i.jsx)(l.ThemeColorPicker,{value:null==u?void 0:u.color,specificTheme:o,onChange:this.onColorChange})),Object(i.jsx)(r.SettingRow,{label:this.translate("stroke")},Object(i.jsx)(g,{intl:n,value:(null==u?void 0:u.type)||null,onChange:this.onLineStyleChange,className:"mr-2"}),Object(i.jsx)("div",{className:"unit-width"},Object(i.jsx)(s.InputUnit,{units:this.units,value:null==u?void 0:u.size,onChange:this.onStrokeSizeChange,className:"item"})))),Object(i.jsx)(r.SettingSection,{className:"pt-0 start-end-point"},Object(i.jsx)(r.SettingRow,{label:this.translate("startpoints")},Object(i.jsx)("div",{className:"d-flex align-items-center"},Object(i.jsx)(c,{intl:n,value:null==b?void 0:b.pointStyle,isPointStart:!0,onChange:t=>{this.onPointStyleChange("pointStart",t)}}),(null==b?void 0:b.pointStyle)!==d.c.None&&Object(i.jsx)(p,{theme:e,pointStyle:null==b?void 0:b.pointStyle,value:null==b?void 0:b.pointSize,intl:this.translate,onChange:t=>{this.onPointSizeChange("pointStart",t)}}))),Object(i.jsx)(r.SettingRow,{label:this.translate("endpoints")},Object(i.jsx)("div",{className:"d-flex align-items-center"},Object(i.jsx)(c,{intl:n,value:null==h?void 0:h.pointStyle,isPointStart:!1,onChange:t=>{this.onPointStyleChange("pointEnd",t)}}),(null==h?void 0:h.pointStyle)!==d.c.None&&Object(i.jsx)(p,{theme:e,pointStyle:null==h?void 0:h.pointStyle,value:null==h?void 0:h.pointSize,intl:this.translate,onChange:t=>{this.onPointSizeChange("pointEnd",t)}})))))}}e.default=i.ReactRedux.connect((t,e)=>({appTheme:t.appStateInBuilder.theme}))(b)},70:function(t,e,o){"use strict";o.d(e,"c",(function(){return r})),o.d(e,"b",(function(){return s})),o.d(e,"a",(function(){return a}));var i=o(0),n=o(11);function r(t,e,o=n.a.Horizontal,r=!1){const s=o==n.a.Horizontal,a={},d={};return e=e||"transparent",a.Style0=i.css`
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
  `,s?a:d}function s(t,e,o=n.a.Horizontal,r=!0){const s=l(t,1),a=l(t,.5),d=l(t,.1),u=l(t,.3);e=e||"transparent";const p=o==n.a.Horizontal;let h={None:"None"},c={None:"None"};h.Point0=i.css`
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
  `,h.Point1=i.css`
    & {
      width: ${u};
      height: ${s};
      background-color: ${e};
      left: ${r?"4%":"unset"};
      right: ${r?"unset":"4%"};
      top: 50%;
      transform: translateY(-50%);
    }
  `,h.Point2=i.css`
    & {
      width: ${u};
      height: ${s};
      background-color: ${e};
      left: ${r?0:"unset"};
      right: ${r?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,h.Point3=i.css`
    & {
      width: ${s};
      height: ${s};
      background-color: ${e};
      left: ${r?0:"unset"};
      right: ${r?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,h.Point4=i.css`
    & {
      width: ${l(t,.71)};
      height: ${l(t,.71)};
      background-color: ${e};
      left: ${r?l(t,.2):"unset"};
      right: ${r?"unset":l(t,.2)};
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  `;const g=i.css`
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
  `,b=i.css`
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
  `,$=i.css`
    .jimu-rtl & {
      border-top: ${u} solid ${e};
      border-left: ${u} solid ${e};
    }
    .jimu-ltr & {
      border-bottom: ${u} solid ${e};
      border-left: ${u} solid ${e};
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
  `,v=i.css`
    .jimu-rtl & {
      border-right: ${u} solid ${e};
      border-bottom: ${u} solid ${e};
    }
    .jimu-ltr & {
      border-top: ${u} solid ${e};
      border-right: ${u} solid ${e};
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
  `;c.Point0=i.css`
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
  `,c.Point1=i.css`
    & {
      width: ${s};
      height: ${u};
      background-color: ${e};
      top: ${r?"4%":"unset"};
      bottom: ${r?"unset":"4%"};
      left: 50%;
      transform: translateX(-50%);
    }
  `,c.Point2=i.css`
    & {
      width: ${s};
      height: ${u};
      background-color: ${e};
      top: ${r?0:"unset"};
      bottom: ${r?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,c.Point3=i.css`
    & {
      width: ${s};
      height: ${s};
      background-color: ${e};
      top: ${r?0:"unset"};
      bottom: ${r?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,c.Point4=i.css`
    & {
      width: ${l(t,.71)};
      height: ${l(t,.71)};
      background-color: ${e};
      top: ${r?l(t,.2):"unset"};
      bottom: ${r?"unset":l(t,.2)};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  `;const m=i.css`
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
  `,y=i.css`
    .jimu-rtl & {
      border-bottom: ${u} solid ${e};
      border-left: ${u} solid ${e};
    }
    .jimu-ltr & {
      border-bottom: ${u} solid ${e};
      border-right: ${u} solid ${e};
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
  `,f=i.css`
    .jimu-rtl & {
      border-top: ${u} solid ${e};
      border-right: ${u} solid ${e};
    }
    .jimu-ltr & {
      border-top: ${u} solid ${e};
      border-left: ${u} solid ${e};
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
  `;let j,x;return r?(j={Point5:g,Point6:b,Point7:$,Point8:v},x={Point5:S,Point6:m,Point7:f,Point8:y}):(j={Point5:b,Point6:g,Point7:v,Point8:$},x={Point5:m,Point6:S,Point7:y,Point8:f}),h=Object.assign(Object.assign({},h),j),c=Object.assign(Object.assign({},c),x),p?h:c}function l(t,e=1.5,o=null){if(!t)return"0px";const i=o?Number(o.split("px")[0]):0;let n=Number(t.split("px")[0]);return n=i>n?i:n,n*e<1?"1px":Math.round(n*e)+"px"}function a(t,e,o,n,r){const s=e?n/2+"px":0,l=e?n/2.5+"px":0,a=o?r/2+"px":0,d=o?r/2.5+"px":0,u=i.css`
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
  `,p=i.css`
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
  `;return t?u:p}}}))}}}));
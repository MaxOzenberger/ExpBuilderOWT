System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components"],(function(e){var t,r,n;return{setters:[function(e){t=e},function(e){r=e},function(e){n=e}],execute:function(){e(function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=518)}({0:function(e,r){e.exports=t},1:function(e,t){e.exports=r},2:function(e,t){e.exports=n},518:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(1),o=r(2),s={_widgetLabel:"Button"};class c extends n.React.PureComponent{constructor(e){super(e),this.THEMETYPES=["default","primary","secondary","tertiary","danger","link"],this.translate=e=>{const{intl:t}=this.props;return t?t.formatMessage({id:e,defaultMessage:s[e]}):""},this.getStyle=e=>n.css`
      width: ${n.polished.rem(360)};
      background-color: ${e.colors.palette.light[300]};
      color: ${e.colors.dark};
      border: 1px solid ${e.colors.palette.light[500]};
      box-shadow: 0 4px 20px 4px ${n.polished.rgba(e.colors.white,.5)};
      .button-item{
        width: 100%;
        font-size: ${n.polished.rem(13)};
      }
      .quick-style-item-container{
        padding-left: 4px;
        padding-right: 4px;
        padding-bottom: 8px;
      }
      .quick-style-item{
        border: 2px solid transparent;
        &.quick-style-item-selected{
          border: 2px solid ${e.colors.palette.primary[600]};
        }
        .quick-style-item-inner{
          background-color: ${e.colors.palette.light[400]};
          cursor: pointer;
        }
      }
    `,this.state={}}render(){return Object(n.jsx)(o.QuickStylePopper,{reference:this.props.reference,open:!0,placement:"right-start",css:this.getStyle(n.themeUtils.getBuilderThemeVariables()),onClose:this.props.onClose,a11yVersion:-1},Object(n.jsx)("div",{className:"container-fluid mb-2"},Object(n.jsx)("div",{className:"row no-gutters"},this.THEMETYPES.map((e,t)=>Object(n.jsx)("div",{key:t,className:"col-4 quick-style-item-container"},Object(n.jsx)("div",{className:Object(n.classNames)("quick-style-item",{"quick-style-item-selected":this.props.selectedType===e})},Object(n.jsx)("div",{className:"quick-style-item-inner p-2",onClick:()=>this.props.onChange(e)},Object(n.jsx)(i.Link,{title:this.translate("_widgetLabel"),className:"d-inline-block button-item text-truncate",themeStyle:{type:e}},this.translate("_widgetLabel")))))))))}}const l=Object(n.injectIntl)(c);t.default={QuickStyle:l}}}))}}}));
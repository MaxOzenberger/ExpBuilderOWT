System.register(["jimu-core"],(function(e){var t;return{setters:[function(e){t=e}],execute:function(){e(function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,r){e.exports=t},,,function(e,t,r){"use strict";r.r(t),r.d(t,"Global",(function(){return o}));var n=r(0);const o=e=>{const t=e.theme;return n.css`
    ${t&&n.css`
      /* Scrollbar */
      ::-webkit-scrollbar-track {
        width: 7px;
        height: 7px;
        background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAABCAYAAAASC7TOAAAAFklEQVQYV2NkQAL///+XYmRkfAYTAgA2lgQCRkeKWAAAAABJRU5ErkJggg==');
        &:horizontal {
          background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAHCAYAAADJTCeUAAAAEklEQVQYV2NgQAX///+XQhMCADeNAxg/eOklAAAAAElFTkSuQmCC');
        }
      }

      ::-webkit-scrollbar-thumb {
        background: ${t.colors.palette.light[800]||"#6c7278"};
        transition: background .15s;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${t.colors.palette.dark[800]||"#808589"};
      }
    `}
  `}}]))}}}));
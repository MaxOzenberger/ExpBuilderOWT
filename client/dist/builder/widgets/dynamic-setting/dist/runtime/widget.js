System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-layouts/layout-builder","jimu-ui/advanced/style-setting-components","jimu-core/dnd","jimu-for-builder/templates","jimu-ui/basic/color-picker","jimu-ui/advanced/resource-selector"],(function(e){var t,i,s,o,n,a,l,r,c,p,d;return{setters:[function(e){t=e},function(e){i=e},function(e){s=e},function(e){o=e},function(e){n=e},function(e){a=e},function(e){l=e},function(e){r=e},function(e){c=e},function(e){p=e},function(e){d=e}],execute:function(){e(function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=99)}([function(e,i){e.exports=t},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t){e.exports=o},function(e,t){e.exports=n},,function(e,t){e.exports=a},function(e,t){e.exports=l},,function(e,t){e.exports=r},,function(e,t){e.exports=c},,function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'},function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M9.5 6.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm-4.75 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM0 6.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 3.5a1 1 0 11-2 0 1 1 0 012 0zM5 5.5a.5.5 0 000 1h.5v2H5a.5.5 0 000 1h2a.5.5 0 000-1h-.5v-3H5z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6A6 6 0 110 6a6 6 0 0112 0zm-1 0A5 5 0 111 6a5 5 0 0110 0z" fill="#000"></path></svg>'},,function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M.146 3.146a.5.5 0 01.708 0L6 8.5l5.146-5.354a.5.5 0 01.708.708l-5.5 5.707a.5.5 0 01-.708 0l-5.5-5.707a.5.5 0 010-.708z" fill="#000"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>'},,function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M7.185 0c.105 0 .195.118.232.24l.013.062.245 1.567c.294.145.588.29.85.465l.19.138 1.53-.603c.154-.05.264-.016.332.031l.036.03 1.224 2.11c.051.1.06.201-.01.302l-.05.06-1.286 1.025c.061.181.061.362.061.603 0 .181-.034.328-.052.467l-.01.136 1.409.965c.105.052.12.192.083.307l-.022.055-1.224 2.11c-.053.104-.195.163-.312.14l-.056-.019-1.53-.603a4.796 4.796 0 01-.82.494l-.22.109-.245 1.568c0 .103-.135.207-.25.234L7.246 12H4.798c-.157 0-.27-.089-.298-.19l-.253-1.619c-.293-.145-.587-.29-.85-.465l-.19-.138-1.53.603c-.153.05-.264.017-.332-.03l-.036-.03L.085 8.02c-.05-.101-.06-.202.01-.302l.051-.06 1.286-1.026c-.061-.18-.061-.362-.061-.603 0-.18.034-.328.051-.466l.01-.137-1.286-.965c-.104-.103-.164-.25-.14-.329L1.247 1.99c.102-.1.204-.16.342-.141l.087.02 1.469.603.419-.281c.135-.09.268-.17.407-.236l.214-.086.245-1.628c0-.103.135-.207.25-.234L4.738 0h2.448zm-.658 1h-1.2l-.243 1.627-.586.192a1.42 1.42 0 00-.3.154l-.503.335-.441.29-1.439-.593-.59 1.017 1.207.905v.5c0 .088-.003.147-.013.228l-.044.31a.577.577 0 00-.004.065l.005.26.005.027.223.66L1.258 8.05l.581 1.001 1.536-.604.45.356c.162.126.334.226.712.416l.618.304.23 1.476h1.274l.23-1.476.751-.371c.206-.106.342-.182.453-.258l.126-.091.451-.356 1.506.595.587-1.01-1.272-.872v-.607l.009-.117.048-.341.003-.035v-.18l-.003-.098-.004-.034-.225-.665 1.345-1.073-.581-1.002-1.535.605-.451-.355-.126-.092a5.312 5.312 0 00-.59-.326l-.614-.303L6.527 1zM6 3.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M3.305 7.294L10.693.215a.79.79 0 011.083 0c.299.287.299.751 0 1.038L4.736 8l7.04 6.747c.299.287.299.751 0 1.038a.79.79 0 01-1.083 0l-7.388-7.08a.968.968 0 010-1.41z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},function(e,t){e.exports=p},,,,function(e,t){e.exports='<svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h2v2H0V0zm0 5h2v2H0V5zm0 5h2v2H0v-2zM4 0h2v2H4V0zm0 5h2v2H4V5zm0 5h2v2H4v-2z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm8.282-1.718a.961.961 0 011.359 0l4.077 4.077a.961.961 0 01-1.359 1.36l-4.077-4.078a.961.961 0 010-1.36z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M20 18a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h16a2 2 0 012 2v16zm-1-3H1v3a1 1 0 001 1h16a1 1 0 001-1v-3zm0-9H1v8h18V6zm-1-5H2a1 1 0 00-1 1v3h18V2a1 1 0 00-1-1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 7V0h16v7H0zm1-6h14v5H1V1zM0 16V9h16v7H0zm1-6h14v5H1v-5z" fill="#000"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.212 9.936L2 12.27l2.333-.212L13.27 3.12 11.149 1 2.212 9.936zm-.707-.707L10.441.293a1 1 0 011.415 0l2.12 2.121a1 1 0 010 1.414l-8.935 8.937a1 1 0 01-.617.289l-2.333.212a1 1 0 01-1.087-1.087l.212-2.333a1 1 0 01.289-.617zm7.434-6.497l2.829 2.829-.707.707-2.829-2.829.707-.707zM.5 15h15a.5.5 0 010 1H.5a.5.5 0 010-1z" fill="#000" fill-rule="nonzero"></path></svg>'},,function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.637 15.866L30.951 27.18a2.667 2.667 0 01-3.771 3.771L15.866 19.637 4.552 30.951A2.667 2.667 0 01.781 27.18l11.314-11.314L.781 4.552A2.667 2.667 0 014.552.781l11.314 11.314L27.18.781a2.667 2.667 0 013.771 3.771L19.637 15.866z"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M4.586 8.657l6.01-6.01a.5.5 0 01.707.707l-6.01 6.01a1 1 0 01-1.414 0L.697 6.182a.5.5 0 01.707-.707l3.182 3.182z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M.5 0a.5.5 0 01.5.5v15a.5.5 0 01-1 0V.5A.5.5 0 01.5 0zm5.973 3.154a.535.535 0 010 .746L2.976 7.473h12.508c.285 0 .516.236.516.527a.522.522 0 01-.516.527H2.976L6.473 12.1a.535.535 0 010 .746.508.508 0 01-.73 0L1 8l4.743-4.846a.508.508 0 01.73 0z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 0a.5.5 0 01.5.5v15a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5zm-5.243 3.154L15 8l-4.743 4.846a.508.508 0 01-.73 0 .535.535 0 010-.746l3.497-3.573H.516A.522.522 0 010 8c0-.291.231-.527.516-.527h12.508L9.527 3.9a.535.535 0 010-.746.508.508 0 01.73 0z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M18 14h10.667a2 2 0 110 4H18v10.667a2 2 0 11-4 0V18H3.333a2 2 0 110-4H14V3.333a2 2 0 114 0V14z"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h11a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v11h11V4H4zm-4 7.5V1a1 1 0 011-1h9.5a.5.5 0 010 1H1v10.5a.5.5 0 01-1 0z" fill-rule="nonzero"></path></svg>'},,function(e,t){e.exports=d},,,,,,,,,,,,,,function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEwN3B4IiBoZWlnaHQ9IjY4cHgiIHZpZXdCb3g9IjAgMCAxMDcgNjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MS4xICg4OTY1MCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+DQogICAgPHRpdGxlPkN1c3RvbTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IkNvbXBvbmVudHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iJDE1LUl0ZW0tU2VsZWN0b3IiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODcuMDAwMDAwLCAtMzA4LjAwMDAwMCkiPg0KICAgICAgICAgICAgPGcgaWQ9IkN1c3RvbSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzg2LjAwMDAwMCwgMzA3LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iTGF5b3V0IiBmaWxsPSIjNTI1MjUyIiB4PSIyOCIgeT0iMTQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMjgyODI4IiB4PSI4NyIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjY4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSI4NyIgeTE9IjAiIHgyPSI4NyIgeTI9IjY4IiBpZD0iRGFzaC1saW5lIiBzdHJva2U9IiM1MjUyNTIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1kYXNoYXJyYXk9IjQsNCI+PC9saW5lPg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMjgyODI4IiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iNjgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjIwIiB5MT0iMCIgeDI9IjIwIiB5Mj0iNjgiIGlkPSJEYXNoLWxpbmUiIHN0cm9rZT0iIzUyNTI1MiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWRhc2hhcnJheT0iNCw0Ij48L2xpbmU+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJTY3JvbGwtYmFyIiBmaWxsPSIjNkE2QTZBIiB4PSIxMDEiIHk9IjMiIHdpZHRoPSIzIiBoZWlnaHQ9IjQwIiByeD0iMS41Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEwN3B4IiBoZWlnaHQ9IjY4cHgiIHZpZXdCb3g9IjAgMCAxMDcgNjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MS4xICg4OTY1MCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+DQogICAgPHRpdGxlPkF1dG88L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJDb21wb25lbnRzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IiQxNS1JdGVtLVNlbGVjdG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTA2LjAwMDAwMCwgLTMwOC4wMDAwMDApIj4NCiAgICAgICAgICAgIDxnIGlkPSJBdXRvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDUuMDAwMDAwLCAzMDcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDEuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDciIGhlaWdodD0iNjgiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IkxheW91dCIgZmlsbD0iIzUyNTI1MiIgeD0iNiIgeT0iMTQiIHdpZHRoPSI5MCIgaGVpZ2h0PSI0MCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iU2Nyb2xsLWJhciIgZmlsbD0iIzZBNkE2QSIgeD0iMTAxIiB5PSIzIiB3aWR0aD0iMyIgaGVpZ2h0PSI0MCIgcng9IjEuNSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},function(e,t){e.exports='<svg viewBox="0 0 9 12" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0A2.5 2.5 0 017 2.5V4h1a1 1 0 011 1v6a1 1 0 01-1 1H1a1 1 0 01-1-1V5a1 1 0 011-1h1V2.5A2.5 2.5 0 014.5 0zM8 5H1v6h7V5zM4.5 7a1 1 0 110 2 1 1 0 010-2zm0-6a1.5 1.5 0 00-1.493 1.356L3 2.5V4h3V2.5a1.5 1.5 0 00-1.356-1.493L4.5 1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 2.5C6 1.12 7.122 0 8.507 0c1.263 0 2.308.932 2.481 2.144l.011.145a.487.487 0 01-.463.51l-.024.001a.525.525 0 01-.524-.483 1.28 1.28 0 00-.023-.185 1.504 1.504 0 00-1.313-1.125L8.507 1c-.782 0-1.425.595-1.497 1.356l-.007.144V4H8a1 1 0 011 1v6a1 1 0 01-1 1H1a1 1 0 01-1-1V5a1 1 0 011-1h5V2.5zM8 5H1v6h7V5zM4.5 7a1 1 0 110 2 1 1 0 010-2z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="9" width="6" height="6" rx="2" fill="#6A6A6A"></rect><path fill="#6A6A6A" d="M14 10h50v4H14z"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="9" width="6" height="6" rx="2" fill="#6A6A6A"></rect><rect x="51" y="9" width="13" height="6" rx="2" fill="#6A6A6A"></rect><path fill="#6A6A6A" d="M14 10h33v4H14z"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="9" width="6" height="6" rx="2" fill="#6A6A6A"></rect><rect x="51" y="16" width="13" height="6" rx="2" fill="#6A6A6A"></rect><path fill="#6A6A6A" d="M14 10h33v4H14z"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.667 10H1a1 1 0 01-1-1V3a1 1 0 011-1h10a1 1 0 011 1v6a1 1 0 01-1 1H8.333l.448 1.342a.5.5 0 01-.475.658H3.694a.5.5 0 01-.475-.658L3.667 10zM1 3h10v6H1V3zm3.72 7l-.333 1h3.226l-.334-1H4.721z" fill="#000"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2h-7v9h7V2zm-7-1a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V2a1 1 0 00-1-1h-7z" fill="#000"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 9a.5.5 0 000 1h1a.5.5 0 000-1h-1z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0h4v7H4V4z" fill="#000"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M7.42 8.84a.502.502 0 010 .71L6 10.97A3.515 3.515 0 111.03 6l1.42-1.42a.502.502 0 11.71.71L1.74 6.71a2.51 2.51 0 103.55 3.55l1.42-1.42a.502.502 0 01.71 0zm1.42-2.13l1.42-1.42a2.51 2.51 0 10-3.55-3.55L5.29 3.16a.502.502 0 11-.71-.71L6 1.03A3.515 3.515 0 1110.97 6L9.55 7.42a.502.502 0 11-.71-.71zm-4.97.71l3.55-3.55a.502.502 0 01.71.71L4.58 8.13a.502.502 0 01-.71-.71z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M7.294 4.305L.215 11.693a.79.79 0 000 1.083c.287.299.751.299 1.038 0L8 5.736l6.747 7.04c.287.299.751.299 1.038 0a.79.79 0 000-1.083l-7.08-7.388a.968.968 0 00-1.41 0z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 0a.5.5 0 01.5.5v15a.5.5 0 11-1 0V.5A.5.5 0 018 0zm4.973 5.154a.535.535 0 010 .746l-1.497 1.573h3.508c.285 0 .516.236.516.527a.522.522 0 01-.516.527h-3.508l1.497 1.573a.535.535 0 010 .746.508.508 0 01-.73 0L9.5 8l2.743-2.846a.508.508 0 01.73 0zm-9.946 0a.508.508 0 01.73 0L6.5 8l-2.743 2.846a.508.508 0 01-.73 0 .535.535 0 010-.746l1.497-1.573H1.016A.522.522 0 01.5 8c0-.291.231-.527.516-.527h3.508L3.027 5.9a.535.535 0 010-.746z" fill="#000" fill-rule="nonzero"></path><path d="M0 0h16v16H0z"></path></g></svg>'},function(e,t){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 0a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h16zm1 5H1v13a1 1 0 00.883.993L2 19h16a1 1 0 00.993-.883L19 18V5zm-8.5 9a.5.5 0 010 1h-7a.5.5 0 010-1h7zm6-4a.5.5 0 010 1h-13a.5.5 0 010-1h13zM18 1H2a1 1 0 00-.993.883L1 2v2h18V2a1 1 0 00-.883-.993L18 1zM2.5 2a.5.5 0 110 1 .5.5 0 010-1zm2 0a.5.5 0 110 1 .5.5 0 010-1zm2 0a.5.5 0 110 1 .5.5 0 010-1z" fill="#000" fill-rule="nonzero"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M1.1 3H.5a.5.5 0 010-1H3V1a1 1 0 011-1h4a1 1 0 011 1v1h2.5a.5.5 0 010 1h-.6l-.81 8.1a1 1 0 01-.995.9h-6.19a1 1 0 01-.995-.9L1.1 3zm1.005 0l.8 8h6.19l.8-8h-7.79zM4 2h4V1H4v1zm.5 2a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zm3 0a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5z" fill-rule="evenodd"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.477 22.045c-.53-.142-.844-.686-.74-1.226.653-3.414.13-7.07-1.744-10.316-4.142-7.175-13.316-9.633-20.49-5.49-7.175 4.142-9.633 13.315-5.49 20.49a14.944 14.944 0 008.24 6.728c.526.176.848.723.704 1.258-.142.531-.688.85-1.21.681a16.938 16.938 0 01-9.467-7.667C.586 18.372 3.372 7.975 11.503 3.28c8.13-4.694 18.528-1.908 23.222 6.223a16.936 16.936 0 011.95 11.823c-.108.543-.662.863-1.198.72zm-5.8-1.554c-.529-.142-.84-.683-.763-1.225a8.961 8.961 0 00-1.117-5.763 9 9 0 10-10.989 12.914c.52.197.845.743.701 1.28-.142.53-.686.85-1.202.667a10.957 10.957 0 01-5.83-4.861c-3.038-5.261-1.235-11.989 4.026-15.026 5.261-3.038 11.988-1.235 15.026 4.026a10.954 10.954 0 011.332 7.262c-.09.55-.646.87-1.183.726zM43.78 35.583l-12.512 1.648-7.682 10.011c-.564.736-1.738.375-1.792-.55L20.24 19.918a1 1 0 011.548-.893l22.41 14.731c.774.51.5 1.706-.42 1.827zm-14.099.43l-6.046 7.88-1.282-22.104 18.501 12.162-9.847 1.297a2 2 0 00-1.326.765z" fill="#000"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.473 11.484c0 .285.236.516.527.516a.522.522 0 00.527-.516V1.976L12.1 5.473c.206.202.54.202.746 0a.508.508 0 000-.73L8 0 3.154 4.743a.508.508 0 000 .73c.206.202.54.202.746 0l3.573-3.497v9.508z" fill="#E3E3E3"></path><path d="M1 8v7h14V8h1v8H0V8h1z" fill="#E3E3E3"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 18V0h18v18H0zM2 2h14v14H2V2zM0 42V24h18v18H0zm2-16h14v14H2V26zM24 0v18h18V0H24zm16 2H26v14h14V2z" fill="#8B8B8B"></path><path d="M32 42v-8h-8v-2h8v-8h2v8h8v2h-8v8h-2z" fill="#8B8B8B"></path></svg>'},function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm0 12a1 1 0 100 2 1 1 0 000-2zM7.938 2C6.387 2 5.058 3.06 4.57 4.465c-.07.174-.07.342-.07.342a.74.74 0 00.765.793l.114-.007c.458-.053.775-.314.947-.742.09-.189.123-.238.14-.262a1.778 1.778 0 011.47-.789c.98 0 1.782.81 1.782 1.8 0 .54-.178.99-.535 1.26L8.116 8.03c-.578.51-.921 1.198-1.03 1.968a.701.701 0 00-.006.073v.133a.855.855 0 00.858.796l.104-.006c.45-.049.817-.409.849-.845l.037-.185c.151-.652.474-1.046.969-1.484.495-.438.801-.81.801-.81.446-.54.802-1.26.802-2.07C11.5 3.62 9.897 2 7.938 2z" fill="#000" fill-rule="evenodd"></path></svg>'},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return rt}));var s=i(0),o={previousView:"Previous view",nextView:"Next view",originTL:"Top left as origin",originTR:"Top right as origin",originBL:"Bottom left as origin",originBR:"Bottom right as origin",alignLeft:"Align left",alignRight:"Align right",alignTop:"Align top",alignCenter:"Align center",alignHCenter:"Horizontal center",alignVCenter:"Vertical center",alignBottom:"Align bottom",alignStretch:"Align stretch",sendBackward:"Send backward",bringForward:"Bring forward",sendToBack:"Send to back",bringToFront:"Bring to front",zoomoutFixed:"Zoom out fixed",order:"Order",moveToLeft:"Move to left",moveToRight:"Move to right",moveToTop:"Move to top",moveToBottom:"Move to bottom",addView:"Add view",duplicateScreen:"Duplicate screen",deleteScreen:"Delete screen",applyToFirstPanel:"Apply to the first panel",deleteView:"Delete view",duplicateView:"Duplicate view",insertABlock:"Insert block",insertAScreenGroup:"Insert screen group",moveup:"Move up",movedown:"Move down",chooseTemplate:"Choose a {type} template",chooseHeaderTemplate:"Choose a header template",chooseFooterTemplate:"Choose a footer template",dropWidgetToAdd:"Or drag a widget here",snapToLeft:"Snap to left",snapToTop:"Snap to top",snapToBottom:"Snap to bottom",snapToRight:"Snap to right",fullWidth:"Full width",fullHeight:"Full height",fullSize:"Full size",restoreSize:"Restore size",pendingTip:"Move to the pending list",setting:"Settings",dragToMove:"Drag to move",lockLayout:"Lock position and size",unlockLayout:"Unlock position and size",editHeader:"Edit header",editFooter:"Edit footer",transform:"Transform",rotation:"Rotation",angle:"Angle",floating:"Pin",sinking:"Unpin",floatingArea:"Floating area",changeToAuto:"Change to auto",changeToCustom:"Change to custom",positionType:"Position type",sticky:"Sticky",fixed:"Fixed",flow:"Flow",stack:"Stack",fixedAtTop:"Floating at the top when scrolling",actNormal:"Act as normal widget",hideInDesignView:"Hide in design view",showInDesignView:"Show in design view"},n=i(2),a=i(1);class l extends s.React.PureComponent{constructor(e){super(e),this.formatMessage=e=>this.props.formatMessage(e),this.onSettingChange=(e,t)=>Object(n.getAppConfigAction)().editWidget(e,t).exec(),this.renderWidgetSetting=e=>{const t=this.props.widgetsSettingRuntimeInfo[e]&&this.props.widgetsSettingRuntimeInfo[e].isClassLoaded?n.WidgetSettingManager.getInstance().getWidgetSettingClass(e):null;return t&&this.props.widgetJson.config?s.React.createElement(s.ErrorBoundary,null,s.React.createElement(t,{key:e,widgetId:e,onSettingChange:this.onSettingChange})):s.React.createElement(a.Loading,{type:a.LoadingType.Secondary})}}componentDidUpdate(){this.loadWidgetSettingClass()}componentDidMount(){this.loadWidgetSettingClass()}loadWidgetSettingClass(){const{widgetId:e}=this.props;e&&!n.WidgetSettingManager.getInstance().getWidgetSettingClass(e)&&n.WidgetSettingManager.getInstance().loadWidgetSettingClass(e)}render(){if(!this.props.widgetJson)return s.React.createElement(a.Loading,{type:a.LoadingType.Secondary});const{widgetId:e}=this.props;return s.React.createElement("div",{className:"setting-container h-100"},e?this.renderWidgetSetting(e):s.React.createElement("div",null,"  ",this.formatMessage("noWidget")))}}var r=s.ReactRedux.connect((e,t)=>({widgetJson:e.appStateInBuilder&&e.appStateInBuilder.appConfig&&e.appStateInBuilder.appConfig.widgets[t.widgetId]}))(l),c=i(3),p=i(21),d=i(7);const g={width:110};class h extends s.React.PureComponent{constructor(e){super(e),this.isOpen=()=>{const{pagePart:e,pageId:t}=this.props,i=this.getAppConfig();return"body"===e||!!(i&&i.pages[t]&&i[e]&&i.pages[t][e])},this.formatMessage=e=>this.props.formatMessage(e),this.onSwitchChange=()=>{const{pageId:e,pagePart:t,emptyLayout:i}=this.props,o=this.getAppConfig(),a=o.pages[e];let l=o[t];const r=Object(n.getAppConfigAction)();if(!l){const e=s.appConfigUtils.getUniqueId(o,"layout"),n=Object(s.Immutable)(Object.assign(Object.assign({},i),{id:e,type:s.LayoutType.FixedLayout})).setIn(["setting","lockDescendants"],!0);l=Object(s.Immutable)({}).setIn(["layout",s.BrowserSizeMode.Large],e).setIn(["height",s.BrowserSizeMode.Large],75),"header"===t?r.editHeader(l,[n]):r.editFooter(l,[n])}const c=a.set(t,!a[t]);r.editPage(c).exec(),"body"===t||c[t]||n.builderAppSync.publichActivePagePartChangeToApp(s.PagePart.Body),this.setState({isOpen:c[t]})},this.onHeightChange=e=>{const t=a.utils.stringOfLinearUnit(e),{pagePart:i,browserSizeMode:s}=this.props,o=this.getAppConfig();"header"===i?Object(n.getAppConfigAction)().editHeader(o.header.setIn(["height",s],t)).exec():Object(n.getAppConfigAction)().editFooter(o.footer.setIn(["height",s],t)).exec()},this.onStickHeaderChange=e=>{const t=this.getAppConfig();Object(n.getAppConfigAction)().editHeader(t.header.set("sticky",e.target.checked)).exec()},this.onBackgroundColorChange=e=>{const{pageId:t,pagePart:i}=this.props,s=this.getAppConfig(),o=s.pages[t];"body"===i?Object(n.getAppConfigAction)().editPage(o.set("bodyBackgroundColor",e)).exec():"header"===i?Object(n.getAppConfigAction)().editHeader(s.header.set("backgroundColor",e)).exec():Object(n.getAppConfigAction)().editFooter(s.footer.set("backgroundColor",e)).exec()},this.state={isOpen:this.isOpen()}}getAppConfig(){return Object(s.getAppStore)().getState().appStateInBuilder&&Object(s.getAppStore)().getState().appStateInBuilder.appConfig||{pages:{empty:{}}}}componentDidUpdate(e){if(this.props.pageId!==e.pageId){const{pageJson:e,pagePart:t}=this.props;this.setState({isOpen:"body"===t||e&&e[t]})}}render(){var e,t,i,o,n,l,r,h,u;const m={body:this.formatMessage("body"),header:this.formatMessage("header"),footer:this.formatMessage("footer")},{pageId:b,pagePart:f,browserSizeMode:j,theme:v,header:x}=this.props,w=this.getAppConfig(),I=w.pages[b];let S;S="body"===f?I.bodyBackgroundColor:null===(e=w[f])||void 0===e?void 0:e.backgroundColor,!S&&v&&(S="header"===f?null===(t=v.header)||void 0===t?void 0:t.bg:"footer"===f?null===(i=v.footer)||void 0===i?void 0:i.bg:null===(o=v.body)||void 0===o?void 0:o.bg);const y=s.React.createElement("div",{className:"setting-title d-flex justify-content-between"},s.React.createElement("div",null,s.React.createElement("span",null,m[this.props.pagePart])),s.React.createElement("div",{className:"d-flex align-items-center"},"body"===f?null:s.React.createElement(a.Switch,{checked:this.isOpen(),onChange:this.onSwitchChange}))),O=w.mainSizeMode,C=null===(l=null===(n=w[f])||void 0===n?void 0:n.height)||void 0===l?void 0:l[j],A=null===(h=null===(r=w[f])||void 0===r?void 0:r.height)||void 0===h?void 0:h[O],M=a.utils.stringOfLinearUnit(null!==(u=null!=C?C:A)&&void 0!==u?u:75);return s.React.createElement(c.SettingSection,{title:y},s.React.createElement(a.Collapse,{isOpen:this.state.isOpen},"body"===f?null:s.React.createElement(c.SettingRow,{label:""+this.formatMessage("dynamicHeight")},s.React.createElement(d.InputUnit,{value:M,min:0,onChange:this.onHeightChange,style:g})),s.React.createElement(c.SettingRow,{label:this.formatMessage("dsFill")},s.React.createElement(p.ThemeColorPicker,{specificTheme:v,value:S,onChange:this.onBackgroundColorChange})),"header"===f&&I.mode===s.PageMode.AutoScroll&&s.React.createElement(c.SettingRow,{label:s.React.createElement(a.Label,{check:!0,className:"justify-content-start align-items-start"},s.React.createElement(a.Checkbox,{className:"mr-2",checked:Boolean(null==x?void 0:x.sticky),onChange:this.onStickHeaderChange}),this.formatMessage("keepFixedOnScroll"))})))}}var u=i(6),m=i(4);const b=i(15),f={};class j extends s.React.PureComponent{constructor(e){super(e),this.onMaxWidthChange=e=>{let t=this.props.pageJson;t=t.set("maxWidth",e),Object(n.getAppConfigAction)().editPage(t).exec()},this.formatMessage=e=>this.props.formatMessage(e),this.setPageWidthModeAuto=()=>{let e=this.props.pageJson;e=e.without("maxWidth"),Object(n.getAppConfigAction)().editPage(e).exec()},this.setPageWidthModeFixed=()=>{let e=this.props.pageJson;e=e.set("maxWidth",1024),Object(n.getAppConfigAction)().editPage(e).exec()},this.openWithDialogChanged=e=>{let t=this.props.pageJson;t=t.set("autoOpenDialogId",e.target.value),Object(n.getAppConfigAction)().editPage(t).exec()},this.onEffectSettingChange=(e,t)=>{const{pageJson:i}=this.props;Object(n.getAppConfigAction)().editPage(i.set("oneByOneEffect",t)).exec(),(null==t?void 0:t.type)!==s.AnimationType.None&&n.builderAppSync.publishAnimationPreviewToApp({pageId:i.id,playMode:e,id:Symbol("preview animation")})},this.previewAnimation=e=>{const{pageJson:t}=this.props;t.oneByOneEffect&&t.oneByOneEffect.type!==s.AnimationType.None&&n.builderAppSync.publishAnimationPreviewToApp({pageId:t.id,playMode:e,id:Symbol("preview animation")})},this.state={isSetImageUrl:!1,currentImgUrlInput:""},this.fileInput=s.React.createRef()}getAppConfig(){return Object(s.getAppStore)().getState().appStateInBuilder&&Object(s.getAppStore)().getState().appStateInBuilder.appConfig||{pages:{empty:{}}}}layoutSetting(){var e;const{pageId:t}=this.props,i=this.getAppConfig(),o=i.pages[t];if(o&&o.layout){const t=m.searchUtils.findLayoutId(o.layout,null===(e=Object(s.getAppStore)().getState().appStateInBuilder)||void 0===e?void 0:e.browserSizeMode,i.mainSizeMode),n=i.layouts[t];if(n&&n.type===s.LayoutType.FlowLayout)return Object(s.jsx)(u.FlowLayoutSetting,{layoutId:t,formatMessage:this.props.formatMessage})}}getDialogList(){const e=[{value:"",index:-1,label:this.formatMessage("none")}],t=this.props.dialogs;return t&&(Object.keys(t).map(i=>{t[i].isSplash||t[i].mode!==s.DialogMode.Fixed||e.push({value:i,index:t[i].index,label:t[i].label})}),e.sort((e,t)=>e.index-t.index)),e}getStyle(){const{theme:e}=this.props;return s.css`
    .image-setting-input {
      opacity: 0;
      position: absolute;
      left: 88px;
      width: 70px !important;
      height: 30px !important;
    }
    input, select {
      width: 130px;
      max-width: 130px;
    }
    .setting-row-label{
      line-height: 30px;
      font-size: 0.8125rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: ${e.colors.palette.dark[400]};
    }
    .content-width-item {
      width: calc(50% - 4px);
      .img-container {
        width: auto;
        height: auto;
        cursor: pointer;
        outline: 1px solid ${e.colors.palette.light[800]};
        background-color: ${e.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        &.active {
          outline: 2px solid ${e.colors.palette.primary[600]};
        }
      }
      span {
        overflow-x: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
    }

    `}render(){const{pageMode:e,maxWidth:t,pageJson:o}=this.props,n=this.props.pageJson.autoOpenDialogId||"",l=o.oneByOneEffect,r=o.maxWidth>0?0:1;return Object(s.jsx)("div",{className:"setting-pane widget-builder-page-setting",css:this.getStyle()},Object(s.jsx)(c.SettingSection,null,Object(s.jsx)("div",{className:"setting-row-label"},this.formatMessage("openWithWindow"),Object(s.jsx)(a.Tooltip,{title:this.formatMessage("openWithWindowTip"),placement:"bottom"},Object(s.jsx)("div",{className:"ml-2 d-inline"},Object(s.jsx)(a.Icon,{size:12,icon:b})))),Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(a.Select,{value:n,onChange:this.openWithDialogChanged},this.getDialogList().map((e,t)=>Object(s.jsx)("option",{value:e.value,key:t,selected:e.value===n},e.label))))),e===s.PageMode.AutoScroll&&Object(s.jsx)(c.SettingSection,{title:this.formatMessage("contentWidth")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"d-flex w-100 justify-content-between"},Object(s.jsx)("div",{className:"d-flex flex-column align-items-center content-width-item"},Object(s.jsx)("div",{className:"img-container "+(0===r?"active":""),onClick:this.setPageWidthModeFixed},Object(s.jsx)(a.Icon,{autoFlip:!0,width:0===r?105:107,height:0===r?66:68,icon:i(52)})),Object(s.jsx)("span",{className:"text-center"},this.formatMessage("dsCustom"))),Object(s.jsx)("div",{className:"d-flex flex-column align-items-center content-width-item"},Object(s.jsx)("div",{className:"img-container "+(1===r?"active":""),onClick:this.setPageWidthModeAuto},Object(s.jsx)(a.Icon,{autoFlip:!0,width:1===r?105:107,height:1===r?66:68,icon:i(53)})),Object(s.jsx)("span",{className:"text-center"},this.formatMessage("dsAuto"))))),0===r&&Object(s.jsx)(c.SettingRow,{label:this.formatMessage("maxWidth")},Object(s.jsx)(a.NumericInput,{className:"setting-input-select",min:300,onChange:this.onMaxWidthChange,value:isNaN(t)?"":t,style:{width:"110px"}}))),Object(s.jsx)(c.SettingSection,{title:this.formatMessage("animation")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(d.AnimationSettingComponent,{oneByOneSetting:l,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!1,supportOneByOne:!0,onPreviewClicked:this.previewAnimation,formatMessage:this.formatMessage}))),Object(s.jsx)(h,{formatMessage:this.formatMessage,emptyLayout:f,dispatch:this.props.dispatch,pageId:this.props.pageId,pagePart:"body",pageJson:this.props.pageJson,theme:this.props.appTheme,browserSizeMode:this.props.browserSizeMode}),Object(s.jsx)(h,{formatMessage:this.formatMessage,emptyLayout:f,dispatch:this.props.dispatch,pageId:this.props.pageId,pagePart:"header",pageJson:this.props.pageJson,header:this.props.header,theme:this.props.appTheme,browserSizeMode:this.props.browserSizeMode}),Object(s.jsx)(h,{formatMessage:this.formatMessage,emptyLayout:f,dispatch:this.props.dispatch,pageJson:this.props.pageJson,pageId:this.props.pageId,pagePart:"footer",footer:this.props.footer,theme:this.props.appTheme,browserSizeMode:this.props.browserSizeMode}),this.layoutSetting())}}var v=s.ReactRedux.connect((e,t)=>{var i,s,o,n,a,l,r,c,p;return{pageJson:null!==(o=null===(s=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.pages[t.pageId])&&void 0!==o?o:{},dialogs:null===(a=null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appConfig)||void 0===a?void 0:a.dialogs,header:null===(r=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appConfig)||void 0===r?void 0:r.header,footer:null===(p=null===(c=e.appStateInBuilder)||void 0===c?void 0:c.appConfig)||void 0===p?void 0:p.footer}})(j);const x=i(54),w=i(55),I=i(56),S=i(57),y=i(58),O=i(59),C=i(60),A=i(61),M="260px",T="300px",N="480px",k="432px";class D extends s.React.PureComponent{constructor(e){super(e),this.formatMessage=e=>this.props.formatMessage(e),this.getFormatedValue=(e,t)=>t.toFixed(e===a.UnitTypes.PIXEL?0:1),this.updateDialogMask=e=>{this.editDialogProperty("overlayColor",e)},this.getDialogBackgroud=()=>{var e;const{dialogJson:t}=this.props;return"var(--light)"===(null===(e=t.dialogBackground)||void 0===e?void 0:e.color)?t.dialogBackground.set("color",""):t.dialogBackground},this.updateDialogBackgroud=e=>{""===e.color&&(e.color="var(--light)"),this.editDialogProperty("dialogBackground",e)},this.updateBorder=e=>{this.editDialogProperty("border",e)},this.updateBorderRadius=e=>{this.editDialogProperty("borderRadius",e)},this.updateShadow=e=>{this.editDialogProperty("boxShadow",e)},this.onEffectSettingChange=(e,t)=>{const{dialogJson:i}=this.props,o=e===s.AnimationPlayMode.OneByOne?"oneByOneEffect":"effect";Object(n.getAppConfigAction)().editDialog(i.set(o,t)).exec(),n.builderAppSync.publishAnimationPreviewToApp({dialogId:i.id,playMode:e,id:Symbol("preview dialog animation")})},this.previewAnimation=e=>{const{dialogJson:t}=this.props;(t.effect||t.oneByOneEffect)&&n.builderAppSync.publishAnimationPreviewToApp({dialogId:t.id,playMode:e,id:Symbol("preview dialog animation")})},this.getBrowserIcons=e=>{const t=!this.props.dialogJson.layout[s.BrowserSizeMode.Medium],i=!this.props.dialogJson.layout[s.BrowserSizeMode.Small],o=this.props.browserSizeMode===s.BrowserSizeMode.Large||!this.props.dialogJson.layout[this.props.browserSizeMode],n=this.props.browserSizeMode===s.BrowserSizeMode.Large&&t||this.props.browserSizeMode===s.BrowserSizeMode.Medium||this.props.browserSizeMode===s.BrowserSizeMode.Small&&t&&i,l=this.props.browserSizeMode===s.BrowserSizeMode.Large&&i||this.props.browserSizeMode===s.BrowserSizeMode.Medium&&t&&i||this.props.browserSizeMode===s.BrowserSizeMode.Small,r=this.props.theme.colors.palette.dark[200],c=this.props.formatMessage("applyToLargeScreen"),p=this.props.formatMessage("applyToMediumScreen"),d=this.props.formatMessage("applyToSmallScreen");return Object(s.jsx)("div",{className:"d-flex justify-content-between align-items-center"},o&&Object(s.jsx)(a.Icon,{size:e,icon:O,color:r,title:c}),n&&Object(s.jsx)(a.Icon,{size:e,icon:C,color:r,className:o?"ml-1":"",title:p}),l&&Object(s.jsx)(a.Icon,{size:e,icon:A,color:r,className:o||n?"ml-1":"",title:d}))},this.state={isRenderer:!1},this.isRTL=Object(s.getAppStore)().getState().appContext.isRTL}getDialogBrowserSizeMode(){return this.props.dialogJson.layout[this.props.browserSizeMode]?this.props.browserSizeMode:s.BrowserSizeMode.Large}defaultInteractionStyles(){return{text:"",textSize:"13px",buttonText:"",buttonTextSize:"16px"}}getAppConfig(){return Object(s.getAppStore)().getState().appStateInBuilder&&Object(s.getAppStore)().getState().appStateInBuilder.appConfig||{dialogs:{empty:{}}}}editDialogProperty(e,t){Object(n.getAppConfigAction)().editDialogProperty(this.props.dialogId,e,t).exec()}editDialog(e){Object(n.getAppConfigAction)().editDialog(e).exec()}setDialogMode(e){let t=this.props.dialogJson;if(e===t.mode)return;const i=this.getDialogBrowserSizeMode();let o=t.sizeMode[i];if(e===s.DialogMode.Anchored){let e=N,n=k;if(o.position===s.DialogPosition.Center){const t=s.utils.findViewportSize(this.getAppConfig(),this.props.browserSizeMode);e=o.width.includes(a.UnitTypes.PIXEL)?o.width:t.width*parseFloat(o.width.split("%")[0])/100+"px",n=o.height.includes(a.UnitTypes.PIXEL)?o.height:t.height*parseFloat(o.height.split("%")[0])/100+"px"}o=o.set("width",e).set("height",n).set("position",null),t=t.setIn(["sizeMode",i],o).set("overlayColor",null)}else t=t.setIn(["sizeMode",i,"position"],s.DialogPosition.Center).set("overlayColor","var(--dark-900)");t=t.set("mode",e).set("interactionType",null).set("interactionStyles",null).set("confirmBeforeClose",!0).set("alwaysShowConfirmation",!1),this.editDialog(t)}setDialogPosition(e){const t=this.getDialogBrowserSizeMode();let i=this.props.dialogJson.sizeMode[t];i=i.set("position",e),i=e===s.DialogPosition.Left||e===s.DialogPosition.Right?i.set("aspectRatio",!1).set("width",M):e===s.DialogPosition.Top||e===s.DialogPosition.Bottom?i.set("aspectRatio",!1).set("height",T):i.set("width",N).set("height",k);const o=this.props.dialogJson.setIn(["sizeMode",t],i);this.editDialog(o)}getDialogSize(e){const t=this.props.dialogJson.sizeMode[this.getDialogBrowserSizeMode()][e];if(!t)return null;const i=t.indexOf(a.UnitTypes.PIXEL)>=0?a.UnitTypes.PIXEL:a.UnitTypes.PERCENTAGE;return{distance:t.split(i)[0],unit:i}}setDialogSize(e,t){const i=this.getDialogBrowserSizeMode();let o=this.props.dialogJson;const n=o.sizeMode[i];if((n[e].indexOf(a.UnitTypes.PIXEL)>=0?a.UnitTypes.PIXEL:a.UnitTypes.PERCENTAGE)!==t.unit){const i=s.utils.findViewportSize(this.getAppConfig(),this.props.browserSizeMode),o="height"===e?i.height:i.width;t.unit===a.UnitTypes.PIXEL?t.distance=o*t.distance/100:t.distance=100*t.distance/o}else if(n.aspectRatio){const s="width"===e?"height":"width",l=n[s].indexOf(a.UnitTypes.PIXEL)>=0?a.UnitTypes.PIXEL:a.UnitTypes.PERCENTAGE,r=t.distance*parseFloat(n[s].split(l)[0])/parseFloat(n[e].split(t.unit)[0]),c=this.getFormatedValue(l,r)+l;o=o.setIn(["sizeMode",i,s],c)}t.distance=this.getFormatedValue(t.unit,t.distance),o=o.setIn(["sizeMode",i,e],t.distance+t.unit),this.editDialog(o)}getFontSize(e){const t=this.interactionStyles[e],i=t.indexOf(a.UnitTypes.PIXEL)>=0?a.UnitTypes.PIXEL:a.UnitTypes.REM;return{distance:t.split(i)[0],unit:i}}setInteraction(e){let t=this.props.dialogJson;t=t.set("interactionType",e?s.DialogInteractionType.NoButton:null).set("interactionStyles",e?this.defaultInteractionStyles():null).set("confirmBeforeClose",!0).set("alwaysShowConfirmation",!1),this.editDialog(t)}changeInteractionType(e){let t=this.props.dialogJson;e!==t.interactionType&&(t=t.set("interactionType",e),this.editDialog(t))}setConfirmationType(e){let t=this.props.dialogJson;t=t.set("confirmBeforeClose",e).set("alwaysShowConfirmation",!e),this.editDialog(t)}updateAspectRatio(e){const t=this.props.dialogJson.setIn(["sizeMode",this.getDialogBrowserSizeMode(),"aspectRatio"],e);this.editDialog(t)}updateInteractionStyles(e,t){this.editDialogProperty("interactionStyles",this.interactionStyles.set(e,t))}updateCheckboxTextSize(e,t){this.interactionStyles[e]!==t&&this.updateInteractionStyles(e,t)}updateCheckboxText(e,t,i){i===t&&(t=""),this.interactionStyles[e]!==t?this.updateInteractionStyles(e,t):""===t&&this.setState({isRenderer:!this.state.isRenderer})}getStyle(){return s.css`
      .mode-radio{
        cursor: pointer;
        &.mode-label-disabled{
          cursor: inherit;
        }
      }
      .mode-label{
        margin-left: 0.5rem;
        cursor: pointer;
        &.mode-label-disabled{
          cursor: inherit;
          color: var(--dark-200);
        }
      }
      .confirmation-container {
        .confirmation-item{
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
      }

      .position-size-setting{
        display: flex;
        justify-content: space-between;

        .position-container{
          position: relative;
          width: 90px;
          height: 90px;
          border: 1px solid var(--light-500);

          .content {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            padding: 6px;
            justify-content: space-between;
          }

          .w-part {
            width: 19px;
            position: relative;
            z-index: 0;
            &.w-center {
              width: 24px;
              justify-content: space-between;
            }
          }
          .h-part {
            width: 100%;
            height: 19px;
            position: relative;
            z-index: 0;
            &.h-center {
              height: 24px;
            }
          }

          .from-left {
            &.line-h{
              &:after {
                left: 6px;
              }
              &.is-selected:after {
                border-left: none;
              }
            }
          }
          .from-top {
            &.line-v{
              &:after {
                position: absolute;
                top: 6px;
              }
              &.is-selected:after {
                border-top: none;
              }
            }
          }

          .from-center {
            border: 2px solid var(--dark-100);
          }

          .from-right {
            &.line-h{
              &:before {
                position: absolute;
                right: 0;
              }
              &:after {

                right: 6px;
              }
              &.is-selected:after {
                border-right: none;
              }
            }
          }

          .from-bottom {
            &.line-v{
              &:before {
                position: absolute;
                bottom: 0;
              }
              &:after {
                position: absolute;
                top: -2px;
              }
              &.is-selected:after {
                border-bottom: none;
              }
            }
          }
          .line-h.is-selected,
          .line-v.is-selected {
            border-color: var(--primary-700);

            &:before, &:after{
              background: var(--primary-100);
              border: 2px solid var(--primary-700);
            }
          }
          .line-h {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            height: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 0;
            cursor: pointer;

            &:before {
              content: '';
              width: 6px;
              height: 100%;
              background: var(--dark-100);
            }
            &.is-selected:before {
              width: 8px;
            }

            &:after {
              position: absolute;
              top: 9px;
              content: '';
              height: 6px;
              width: 15px;
              background: var(--dark-100);
            }
            &.is-selected:after {
              height: 8px;
            }
          }
          .line-v {
            position: absolute;
            height: 100%;
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            z-index: 0;
            cursor: pointer;

            &:before {
              content: '';
              width: 100%;
              height: 6px;
              background: var(--dark-100);
            }
            &.is-selected:before {
              height: 8px;
            }

            &:after {
              content: '';
              width: 6px;
              height: 15px;
              background: var(--dark-100);
            }
            &.is-selected:after {
              width: 8px;
            }
          }
          .line-center {
            height: 100%;
            width: 100%;
            z-index: 0;
            cursor: pointer;
            background: var(--dark-100);
            &.is-selected {
              background: var(--primary-100);
              border-color: var(--primary-700);
            }
          }
        }

        .size-container{
          width: calc(100% - 106px);
          height: 90px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .size-label{
            color: var(--dark-400);
          }

          .size-input{
            margin-left: 6px;
            width: 100%;
            &.size-auto-input{
              color: var(--dark-400);
              background: var(--light-400);
            }
          }
        }
      }


      .size-setting{
        width: 100%;

        .size-container{
          height: 26px;
          display: flex;
          justify-content: space-between;

          .unit-container{
            display: flex;
            width: calc(50% - 18px);

            .size-label{
              color: var(--dark-400);
            }

            .size-input{
              margin-left: 6px;
            }
          }
        }

      }

      .interaction-container{
        .interaction-type-container{
          display: flex;
          justify-content: space-between;
          .jimu-btn{
            padding: 0;
            background-color: var(--light-200);
            &.active{
              outline: 2px solid var(--primary-600);
            }
          }
        }
      }

    `}render(){var e,t;const{dialogJson:i}=this.props,o=i.isSplash||n.utils.getPageListByDialogId(this.getAppConfig().pages,i.id).length>0;if(!i.id)return null;const l=i.mode===s.DialogMode.Anchored?[a.UnitTypes.PIXEL]:[a.UnitTypes.PIXEL,a.UnitTypes.PERCENTAGE];this.interactionStyles=i.interactionStyles?i.interactionStyles:this.defaultInteractionStyles();const r=i.interactionType?this.formatMessage(i.confirmBeforeClose?"dialogConfirmationDefaultText":"dialogPreventDisplayAgainDefaultText"):"",g=i.sizeMode[this.getDialogBrowserSizeMode()];return Object(s.jsx)("div",{className:"setting-pane widget-builder-page-setting",css:this.getStyle()},Object(s.jsx)(c.SettingSection,{title:this.formatMessage("mode")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("fixedModeTip")},Object(s.jsx)("div",{className:"align-items-center d-flex"},Object(s.jsx)(a.Radio,{className:"mode-radio",onChange:()=>this.setDialogMode(s.DialogMode.Fixed),checked:i.mode===s.DialogMode.Fixed}),Object(s.jsx)("label",{className:"mode-label",onClick:()=>this.setDialogMode(s.DialogMode.Fixed)},this.formatMessage("fixedMode")))))),Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:o?this.formatMessage(i.isSplash?"splashDlgWarning":"pageDlgWarning"):this.formatMessage("anchoredModeTip")},Object(s.jsx)("div",{className:"align-items-center d-flex"},Object(s.jsx)(a.Radio,{className:Object(s.classNames)("mode-radio",o?"mode-radio-disabled":""),onChange:()=>this.setDialogMode(s.DialogMode.Anchored),checked:i.mode===s.DialogMode.Anchored,disabled:o}),Object(s.jsx)("label",{className:Object(s.classNames)("mode-label",o?"mode-label-disabled":""),onClick:()=>!o&&this.setDialogMode(s.DialogMode.Anchored)},this.formatMessage("anchoredMode"))))))),!this.props.lockLayout&&Object(s.jsx)(c.SettingSection,null,Object(s.jsx)("div",{className:"d-flex mb-3"},Object(s.jsx)("h6",{className:"flex-lg-grow-1 mb-0 text-truncate setting-text-level-1"},i.mode===s.DialogMode.Fixed?`${this.formatMessage("position")} & ${this.formatMessage("size")}`:this.formatMessage("size")),this.getBrowserIcons(12)),Object(s.jsx)(c.SettingRow,null,i.mode===s.DialogMode.Fixed?Object(s.jsx)("div",{className:"position-size-setting"},Object(s.jsx)("div",{className:"position-container"},Object(s.jsx)("div",{className:"content d-flex"},Object(s.jsx)("div",{className:"w-part flex-column justify-content-center align-items-center"},Object(s.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("left")},Object(s.jsx)("div",{className:Object(s.classNames)("from-left line-h flex-grow-1 flex-shrink-1",{"is-selected":g.position===s.DialogPosition.Left}),onClick:()=>{this.setDialogPosition(s.DialogPosition.Left)}})))),Object(s.jsx)("div",{className:"d-flex w-part w-center h-100 flex-column"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("top")},Object(s.jsx)("div",{className:"h-part"},Object(s.jsx)("div",{className:Object(s.classNames)("from-top line-v flex-grow-1 flex-shrink-1",{"is-selected":g.position===s.DialogPosition.Top}),onClick:()=>{this.setDialogPosition(s.DialogPosition.Top)}}))),Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("center")},Object(s.jsx)("div",{className:"h-part h-center"},Object(s.jsx)("div",{className:Object(s.classNames)("from-center line-center flex-grow-1 flex-shrink-1",{"is-selected":g.position===s.DialogPosition.Center}),onClick:()=>{this.setDialogPosition(s.DialogPosition.Center)}}))),Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("bottom")},Object(s.jsx)("div",{className:"h-part"},Object(s.jsx)("div",{className:Object(s.classNames)("from-bottom line-v flex-grow-1 flex-shrink-1",{"is-selected":g.position===s.DialogPosition.Bottom}),onClick:()=>{this.setDialogPosition(s.DialogPosition.Bottom)}})))),Object(s.jsx)("div",{className:"w-part flex-column"},Object(s.jsx)("div",{className:"d-flex w-100 justify-content-center align-items-center"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("right")},Object(s.jsx)("div",{className:Object(s.classNames)("from-right line-h flex-grow-1 flex-shrink-1",{"is-selected":g.position===s.DialogPosition.Right}),onClick:()=>{this.setDialogPosition(s.DialogPosition.Right)}})))))),Object(s.jsx)("div",{className:"size-container"},Object(s.jsx)("div",{className:"d-flex"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("width")},Object(s.jsx)("label",{className:"size-label"},"W")),i.mode!==s.DialogMode.Fixed||g.position!==s.DialogPosition.Top&&g.position!==s.DialogPosition.Bottom?Object(s.jsx)(d.InputUnit,{className:"size-input",units:l,value:this.getDialogSize("width"),min:0,onChange:e=>this.setDialogSize("width",e)}):Object(s.jsx)("div",{className:"size-input p-1 size-auto-input"},this.formatMessage("auto"))),Object(s.jsx)("div",{className:"d-flex justify-content-center"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:g.position!==s.DialogPosition.Center?"":this.formatMessage("aspectRatio")},Object(s.jsx)(a.Button,{icon:!0,type:"tertiary",disabled:g.position!==s.DialogPosition.Center,onClick:()=>this.updateAspectRatio(!g.aspectRatio)},Object(s.jsx)(a.Icon,{size:12,icon:g.aspectRatio?x:w})))),Object(s.jsx)("div",{className:"d-flex"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("height")},Object(s.jsx)("label",{className:"size-label"},"H")),i.mode!==s.DialogMode.Fixed||g.position!==s.DialogPosition.Left&&g.position!==s.DialogPosition.Right?Object(s.jsx)(d.InputUnit,{className:"size-input",units:l,value:this.getDialogSize("height"),min:0,onChange:e=>this.setDialogSize("height",e)}):Object(s.jsx)("div",{className:"size-input p-1 size-auto-input"},this.formatMessage("auto"))))):Object(s.jsx)("div",{className:"size-setting"},Object(s.jsx)("div",{className:"size-container"},Object(s.jsx)("div",{className:"unit-container"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("width")},Object(s.jsx)("label",{className:"size-label"},"W")),Object(s.jsx)(d.InputUnit,{className:"size-input",units:l,value:this.getDialogSize("width"),min:0,onChange:e=>this.setDialogSize("width",e)})),Object(s.jsx)("div",null,Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("aspectRatio")},Object(s.jsx)(a.Button,{icon:!0,type:"tertiary",size:"sm",onClick:()=>this.updateAspectRatio(!g.aspectRatio)},Object(s.jsx)(a.Icon,{size:12,icon:g.aspectRatio?x:w})))),Object(s.jsx)("div",{className:"unit-container"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:this.formatMessage("height")},Object(s.jsx)("label",{className:"size-label"},"H")),Object(s.jsx)(d.InputUnit,{className:"size-input",units:l,value:this.getDialogSize("height"),min:0,onChange:e=>this.setDialogSize("height",e)})))))),Object(s.jsx)(c.SettingSection,{title:this.formatMessage("closeOptions")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(a.Label,{check:!0,className:"justify-content-start align-items-start"},Object(s.jsx)(a.Checkbox,{style:{cursor:"pointer"},className:"mr-2",checked:i.closeWhenClickOverlay,onChange:()=>this.editDialogProperty("closeWhenClickOverlay",!i.closeWhenClickOverlay)}),this.formatMessage("clickOutside"))),i.mode===s.DialogMode.Fixed&&Object(s.jsx)("div",{className:"mt-3"},Object(s.jsx)(c.SettingRow,{label:this.formatMessage("interaction")},Object(s.jsx)(a.Switch,{checked:!!i.interactionType,onChange:(e,t)=>this.setInteraction(t)})),i.interactionType&&Object(s.jsx)("div",{className:"interaction-container mt-3"},Object(s.jsx)(c.SettingRow,{className:"confirmation-item",label:this.formatMessage("style")}),Object(s.jsx)("div",{className:"interaction-type-container mt-3 mb-3"},Object(s.jsx)(a.Tooltip,{title:this.formatMessage("interactionStyle1"),placement:"bottom"},Object(s.jsx)(a.Button,{icon:!0,size:"sm",type:"tertiary",onClick:()=>this.changeInteractionType(s.DialogInteractionType.NoButton),active:i.interactionType===s.DialogInteractionType.NoButton},Object(s.jsx)(a.Icon,{width:65,height:26,icon:I,flip:this.isRTL?"horizontal":null}))),Object(s.jsx)(a.Tooltip,{title:this.formatMessage("interactionStyle2"),placement:"bottom"},Object(s.jsx)(a.Button,{icon:!0,size:"sm",type:"tertiary",onClick:()=>this.changeInteractionType(s.DialogInteractionType.ButtonInline),active:i.interactionType===s.DialogInteractionType.ButtonInline},Object(s.jsx)(a.Icon,{width:65,height:26,icon:S,flip:this.isRTL?"horizontal":null}))),Object(s.jsx)(a.Tooltip,{title:this.formatMessage("interactionStyle3"),placement:"bottom"},Object(s.jsx)(a.Button,{icon:!0,size:"sm",type:"tertiary",onClick:()=>this.changeInteractionType(s.DialogInteractionType.ButtonBlock),active:i.interactionType===s.DialogInteractionType.ButtonBlock},Object(s.jsx)(a.Icon,{width:65,height:26,icon:y,flip:this.isRTL?"horizontal":null})))),Object(s.jsx)(c.SettingRow,{className:"confirmation-item",label:this.formatMessage("type")}),Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},Object(s.jsx)("div",{className:"align-items-center d-flex"},Object(s.jsx)(a.Radio,{className:"mode-radio",onChange:()=>this.setConfirmationType(!0),checked:i.confirmBeforeClose}),Object(s.jsx)("label",{className:"mode-label",onClick:()=>this.setConfirmationType(!0)},this.formatMessage("confirmation"))))),Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},Object(s.jsx)("div",{className:"align-items-center d-flex"},Object(s.jsx)(a.Radio,{className:"mode-radio",onChange:()=>this.setConfirmationType(!1),checked:!i.confirmBeforeClose}),Object(s.jsx)("label",{className:"mode-label",onClick:()=>this.setConfirmationType(!1)},this.formatMessage("preventDisplayAgain"))))),Object(s.jsx)("div",{className:"confirmation-container mt-3 mb-3"},Object(s.jsx)(c.SettingRow,{className:"confirmation-item",label:this.formatMessage("checkboxText")}),Object(s.jsx)("div",{className:"confirmation-item"},Object(s.jsx)(a.TextArea,{className:"w-100",style:{height:"60px"},spellCheck:!1,placeholder:this.formatMessage("confirmationRequiredText"),value:(null===(e=this.interactionStyles)||void 0===e?void 0:e.text)||r,onBlur:e=>{this.updateCheckboxText("text",e.target.value,r)}})),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("fontSize")},Object(s.jsx)(d.InputUnit,{style:{width:"80px"},units:[a.UnitTypes.PIXEL,a.UnitTypes.REM],value:this.getFontSize("textSize"),onChange:e=>{this.updateCheckboxTextSize("textSize",e.distance+e.unit)}})),i.interactionType!==s.DialogInteractionType.NoButton&&Object(s.jsx)("div",null,Object(s.jsx)(c.SettingRow,{className:"confirmation-item",label:this.formatMessage("checkboxButtonText")}),Object(s.jsx)(c.SettingRow,{className:"confirmation-item"},Object(s.jsx)(a.TextInput,{type:"text",size:"sm",className:"w-100",spellCheck:!1,placeholder:this.formatMessage("confirmationRequiredText"),value:(null===(t=this.interactionStyles)||void 0===t?void 0:t.buttonText)||this.formatMessage("ok"),onBlur:e=>{this.updateCheckboxText("buttonText",e.target.value,this.formatMessage("ok"))}})),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("fontSize")},Object(s.jsx)(d.InputUnit,{style:{width:"80px"},units:[a.UnitTypes.PIXEL,a.UnitTypes.REM],value:this.getFontSize("buttonTextSize"),onChange:e=>{this.updateCheckboxTextSize("buttonTextSize",e.distance+e.unit)}})))),i.confirmBeforeClose&&Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(a.Label,{check:!0,className:"justify-content-start align-items-start"},Object(s.jsx)(a.Checkbox,{style:{cursor:"pointer"},className:"mr-2",checked:i.alwaysShowConfirmation,onChange:()=>this.editDialogProperty("alwaysShowConfirmation",!i.alwaysShowConfirmation)}),this.formatMessage("alwaysShow")))))),Object(s.jsx)(c.SettingSection,{title:this.formatMessage("animation")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(d.AnimationSettingComponent,{effectSetting:i.effect,oneByOneSetting:i.oneByOneEffect,onSettingChange:this.onEffectSettingChange,previewEnabled:!0,supportAsOne:!0,supportOneByOne:!0,onPreviewClicked:this.previewAnimation,formatMessage:this.formatMessage}))),i.mode===s.DialogMode.Fixed&&Object(s.jsx)(c.SettingSection,null,Object(s.jsx)(c.SettingRow,{label:this.formatMessage("maskColor")},Object(s.jsx)(p.ThemeColorPicker,{specificTheme:this.props.appTheme,value:i.overlayColor,onChange:this.updateDialogMask}))),Object(s.jsx)(c.SettingSection,{title:this.formatMessage("background")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(d.BackgroundSetting,{background:this.getDialogBackgroud(),onChange:this.updateDialogBackgroud}))),Object(s.jsx)(c.SettingSection,{title:this.formatMessage("border")},Object(s.jsx)(c.SettingRow,{flow:"wrap"},Object(s.jsx)(d.BorderSetting,{value:i.border,onChange:this.updateBorder})),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("borderRadius"),flow:"wrap"},Object(s.jsx)(d.BorderRadiusSetting,{value:i.borderRadius,onChange:this.updateBorderRadius}))),Object(s.jsx)(c.SettingSection,{title:this.formatMessage("boxShadow")},Object(s.jsx)(c.SettingRow,{flow:"wrap"},Object(s.jsx)(d.BoxShadowSetting,{value:i.boxShadow,onChange:this.updateShadow}))))}}var R=s.ReactRedux.connect((e,t)=>{var i,s,o;return{lockLayout:null===(o=null===(s=null===(i=null==e?void 0:e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.forBuilderAttributes)||void 0===o?void 0:o.lockLayout,dialogJson:e.appStateInBuilder&&e.appStateInBuilder.appConfig&&e.appStateInBuilder.appConfig.dialogs[t.dialogId]||{}}})(D);const z=i(31),P=i(32),L=i(62),B={value:"",openType:c.OpenTypes.NewWindow,linkType:s.LinkType.WebAddress};class E extends s.React.PureComponent{constructor(e){super(e),this.linkSettingTrigger=s.React.createRef(),this.getCurrentPageName=e=>{const{appConfig:t,pageId:i}=e;return t.pages[i].label||""},this.openBrowseImage=()=>{const e=this.fileInput.current.files;if(!e||!e[0])return;const t=new FileReader;t.readAsDataURL(e[0]),t.onload=e=>{const t=e.target;this.changeIcon(t.result)}},this.setImageUrl=()=>{const{currentImgUrlInput:e}=this.state;""!=e&&(this.setState({isSetImageUrl:!1}),this.changeIcon(e))},this.getPageType=e=>{const{pages:t}=this.props.appConfig;for(const i in t){const s=t[i];if(s.id===e)return s}return{}},this.settingLinkConfirm=e=>{this.setState({isShowLinkSetting:!1}),(e.value||""===e.value)&&this.setState({currentUrl:e.value}),this.changeUrl(e.value,e.openType)},this.changeUrl=(e,t)=>{const i=this.props.appConfig.pages[this.props.pageId],o=Object(s.Immutable)(i).merge({linkUrl:e||"#",openTarget:t});Object(n.getAppConfigAction)().editPage(o).exec(),B.value=e,B.openType=t},this.changeIcon=e=>{const t=this.props.appConfig.pages[this.props.pageId],i=Object(s.Immutable)(t).merge({icon:e});Object(n.getAppConfigAction)().editPage(i).exec()},this.formatMessage=e=>this.props.formatMessage(e),this.state={isSetImageUrl:!1,currentImgUrlInput:"",isShowLinkSetting:!1,currentUrl:this.props.currentUrl||""},this.fileInput=s.React.createRef()}resetLinkParam(){B.value="",B.openType=c.OpenTypes.NewWindow;const e=this.props.appConfig.pages[this.props.pageId];e&&e.linkUrl&&"#"!=e.linkUrl&&(B.value=e.linkUrl),e&&e.openTarget&&(B.openType=e.openTarget)}getStyle(e){return s.css`
    .image-setting-input {
      opacity: 0;
      position: absolute;
      left: 88px;
      width: 70px !important;
      height: 30px !important;
    }
    `}render(){var e;const{isSetImageUrl:t,currentImgUrlInput:i,isShowLinkSetting:o}=this.state;return this.resetLinkParam(),Object(s.jsx)("div",{className:"setting-pane widget-builder-page-setting widget-setting-image"},Object(s.jsx)(c.SettingSection,null,t&&Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"d-flex flex-row justify-content-around border w-100 align-items-center"},Object(s.jsx)(a.TextInput,{className:"border-0 w-100",value:i,placeholder:this.formatMessage("urlIsHere")+"...",onChange:e=>{this.setState({currentImgUrlInput:e.target.value})},onKeyUp:this.setImageUrl}),Object(s.jsx)("div",{className:"btn btn-light pl-1 pr-1 h-100",onClick:this.setImageUrl},Object(s.jsx)(a.Icon,{icon:P,className:"float-right"})),Object(s.jsx)("div",{className:"btn btn-light pl-1 pr-1 h-100",onClick:()=>{this.setState({isSetImageUrl:!1})}},Object(s.jsx)(a.Icon,{icon:z,className:"float-right"})))),Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(a.Button,{className:"w-100 text-dark set-link-btn",onClick:()=>{this.setState({isShowLinkSetting:!o})},ref:this.linkSettingTrigger},Object(s.jsx)(a.Icon,{icon:L,className:"mr-3"}),"Set link"))),o&&Object(s.jsx)(c.LinkSettingPopup,{isOpen:o,isLinkPageSetting:!0,linkParam:Object(s.Immutable)(B),onSettingCancel:()=>{this.setState({isShowLinkSetting:!1})},onSettingConfirm:this.settingLinkConfirm,trigger:null===(e=this.linkSettingTrigger)||void 0===e?void 0:e.current}))}}E.mapExtraStateProps=e=>({pageId:e.appRuntimeInfo.currentPageId});var W=s.themeUtils.withTheme(E);const U=i(31),H=i(32);class V extends s.React.PureComponent{constructor(e){super(e),this.getCurrentPageName=e=>{const{appConfig:t,pageId:i}=e;return t.pages[i].label||""},this.openBrowseImage=()=>{const e=this.fileInput.current.files;if(!e||!e[0])return;const t=new FileReader;t.readAsDataURL(e[0]),t.onload=e=>{const t=e.target;this.changeIcon(t.result)}},this.setImageUrl=()=>{const{currentImgUrlInput:e}=this.state;""!==e&&(this.setState({isSetImageUrl:!1}),this.changeIcon(e))},this.formatMessage=e=>this.props.formatMessage(e),this.getPageType=e=>{const{pages:t}=this.props.appConfig;for(const i in t){const s=t[i];if(s.id===e)return s}return{}},this.changeIcon=e=>{const t=this.props.appConfig.pages[this.props.pageId],i=Object(s.Immutable)(t).merge({icon:e});Object(n.getAppConfigAction)().editPage(i).exec()},this.state={isSetImageUrl:!1,currentImgUrlInput:""},this.fileInput=s.React.createRef()}getStyle(){return s.css`
    .image-setting-input {
      opacity: 0;
      position: absolute;
      left: 88px;
      width: 70px !important;
      height: 30px !important;
    }
    `}render(){const{isSetImageUrl:e,currentImgUrlInput:t}=this.state;return Object(s.jsx)("div",{className:"setting-pane widget-builder-page-setting widget-setting-image"},Object(s.jsx)(c.SettingSection,null,Object(s.jsx)(a.TextInput,{placeholder:this.formatMessage("noSettingOptions"),disabled:!0,style:{border:0,background:"transparent",userSelect:"none"}}),e&&Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"d-flex flex-row justify-content-around border w-100 align-items-center"},Object(s.jsx)(a.TextInput,{className:"border-0 w-100",value:t,placeholder:this.formatMessage("urlIsHere")+"...",onChange:e=>{this.setState({currentImgUrlInput:e.target.value})},onKeyUp:this.setImageUrl}),Object(s.jsx)("div",{className:"btn btn-light pl-1 pr-1 h-100",onClick:this.setImageUrl},Object(s.jsx)(a.Icon,{icon:H,className:"float-right"})),Object(s.jsx)("div",{className:"btn btn-light pl-1 pr-1 h-100",onClick:()=>{this.setState({isSetImageUrl:!1})}},Object(s.jsx)(a.Icon,{icon:U,className:"float-right"}))))))}}V.mapExtraStateProps=e=>({pageId:e.appRuntimeInfo.currentPageId});var F=i(9);class $ extends s.React.PureComponent{constructor(e){super(e),this.onDidDrop=(e,t,i)=>{const{sectionId:s}=this.props;"moveInto"===i||Object(n.getAppConfigAction)().moveViewInSection(s,e.id,t.id,i).exec()},this.onDropHover=e=>{this.state.dropType!==e&&this.setState({dropType:e})},this.formatMessage=e=>this.props.formatMessage(e),this._select=e=>{e.stopPropagation(),this.props.onSelect(this.props.view.id)},this._enableEditing=e=>{e.stopPropagation(),this.dragInteractable.draggable(!1),this.setState({editingLabel:!0})},this._disableEditing=()=>{this._onLabelUpdate(this.inputRef.value),this.dragInteractable.draggable(!0),this.setState({editingLabel:!1})},this._onLabelUpdate=e=>{if(e&&(""+e).trim().length>0){const{view:t}=this.props,i=Object(s.Immutable)(t).set("label",e);Object(n.getAppConfigAction)().editView(i).exec()}else this.inputRef.value=this.props.view.label},this.toggleDropDown=e=>{null==e||e.stopPropagation(),this.setState({isDropDownOpen:!this.state.isDropDownOpen})},this.state={editingLabel:!1,dropType:"none",isDragging:!1,isDropDownOpen:!1},this.dropDownItems=[Object(s.Immutable)({label:this.formatMessage("rename"),event:this._enableEditing.bind(this),visible:!0}),Object(s.Immutable)({label:this.formatMessage("duplicate"),event:this._duplicateView.bind(this),visible:!0}),Object(s.Immutable)({label:this.formatMessage("sectionDelete"),event:this._removeView.bind(this),visible:!0})],this.readonlyDropDownItems=[this.dropDownItems[0]],this.dropDownItemsWithoutDelete=[this.dropDownItems[0],this.dropDownItems[1]]}componentWillUnmount(){this.dragInteractable&&(this.dragInteractable.unset(),this.dragInteractable=null),this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidUpdate(){this.inputRef&&(this.inputRef.select(),this.inputRef.focus())}componentDidMount(){if(this.inputRef&&(this.inputRef.select(),this.inputRef.focus()),this.dropZoneRef&&this.dragRef){const{view:e}=this.props;let t=null;this.dragRef.setAttribute("itemJson",JSON.stringify(e)),this.dropZoneInteractable=Object(F.interact)(this.dropZoneRef).dropzone({accept:".view-item-drag",overlap:"pointer",ondropactivate:e=>{},ondropmove:t=>{const i=t.relatedTarget,s=t.target,o=JSON.parse(i.getAttribute("itemJson")),n=s.getBoundingClientRect(),a=(n.bottom-n.top)/2,l=t.dragEvent.client.y-n.top;let r=this.state.dropType;r=o.id!==e.id?0===this.props.index?l>a?"below":"above":"below":"none",this.onDropHover(r)},ondragenter:e=>{},ondragleave:e=>{this.onDropHover("none")},ondrop:t=>{const i=this.state.dropType;if("none"===i)return;const s=t.relatedTarget,o=JSON.parse(s.getAttribute("itemJson"));this.onDidDrop(o,e,i),this.onDropHover("none")},ondropdeactivate:e=>{}}),this.dragInteractable=Object(F.interact)(this.dragRef).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{this.setState({isDragging:!0});const{onTocDragStatusChage:t}=this.props;t&&t(!0)},onmove:e=>{const{clientX:i,clientY:s,clientX0:o,clientY0:n,target:a}=e,l=parseFloat(a.getAttribute("start-x"))||0,r=parseFloat(a.getAttribute("start-y"))||0;let c=i-o+l;const p=s-n+r,d=-a.clientWidth/2,g=a.clientWidth/2;c<d?c=d:c>g&&(c=g),t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{a.style.webkitTransform=a.style.transform="translate("+c+"px, "+p+"px)",t=null})},onend:e=>{const{target:i}=e;t&&cancelAnimationFrame(t),i.style.webkitTransform=i.style.transform="translate(0px, 0px)",this.setState({isDragging:!1});const{onTocDragStatusChage:s}=this.props;s&&s(!1)}})}}_removeView(){const{view:e,sectionId:t,selected:i}=this.props,s=Object(n.getAppConfigAction)().appConfig.sections[t].views;if(i){const i=s.indexOf(e.id);let o;o=i>0?s[i-1]:s[1],n.builderAppSync.publishSectionNavInfoToApp(t,{currentViewId:o,useProgress:!1})}Object(n.getAppConfigAction)().removeView(e.id,t).exec()}_duplicateView(){if(!this.props.view)return;const e=Object(n.getAppConfigAction)(),t=e.duplicateView(this.props.view.id,this.props.sectionId,!0);e.exec(),s.lodash.defer(()=>{this.props.onSelect(t.id)})}_focusInput(){this.inputRef&&(this.inputRef.select(),this.inputRef.focus())}_getStyle(){const{theme:e,isListDragging:t}=this.props,{isDragging:i}=this.state;return s.css`
    padding: 2px 10px;
    cursor: pointer;
    position: relative;
    .drop-down {
      visibility: hidden;
      text-align:right;
      .popover{
        .popover-inner {
          box-shadow: 0 0 0;
        }
      }
    }
    .drag-icon {
      visibility: hidden;
      margin-right:${s.polished.rem(8)};
      color:${e.colors.palette.dark[600]};
    }
    .view-item-drag:hover {
      cursor: pointer !important;
    }
    .label-con {
      width: ${s.polished.rem(123)};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      align-items: center;
    }
    .label-input {
      width: ${s.polished.rem(123)};
    }
    .view-item-drag {
      z-index: 1;
      background-color: ${i?s.polished.rgba(e.colors.palette.light[400],.6):"transparent"};
      box-shadow: ${i?e.boxShadows.lg:"none"};
    }

    .drag-move-out-order-below {
      background-color: ${s.polished.rgba(e.colors.palette.light[400],.4)};
      :after{
        content: '';
        position: absolute;
        left: 0;
        top: auto;
        bottom: 0;
        right: auto;
        height: 2px;
        width: 100%;
        background-color: ${e.colors.palette.primary[700]};
      }
    }

    .drag-move-out-order-above {
      background-color: ${s.polished.rgba(e.colors.palette.light[400],.4)};
      :before {

        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: auto;
        right: auto;
        height: 2px;
        width: 100%;
        background-color: ${e.colors.palette.primary[700]};
      }
    }


    &.selected {
      ${t?"":`background-color: ${e.colors.palette.light[500]};`}
      border: 0;
      background-color: ${e.colors.palette.light[500]};
    }

    &:hover {
      .drop-down {
        visibility: visible;
      }
      .drag-icon {
        visibility: visible;
      }
    }

    &:not(.selected):hover {
      background-color: ${s.polished.rgba(e.colors.palette.light[500],.4)};
    }
    `}render(){const{selected:e,listDraggingStatus:t,isListDragging:o,isLastItem:n,isFirstItem:l,editable:r}=this.props,{label:c}=this.props.view,{editingLabel:p,dropType:d}=this.state;let g="drag-move-out-order-"+d;o&&"on"!==t&&("below"===t&&n||"above"===t&&l)&&(g="drag-move-out-order-"+t),p&&this._focusInput();const h=Object(s.classNames)("d-flex justify-content-between w-100",{selected:e}),u=r?this.props.canRemove?this.dropDownItems:this.dropDownItemsWithoutDelete:this.readonlyDropDownItems;return Object(s.jsx)("div",{ref:e=>this.dropZoneRef=e,css:this._getStyle(),className:h,onClick:this._select,"data-testid":"viewItem"},Object(s.jsx)("div",{className:"w-100 view-item-drag d-flex justify-content-between "+g,ref:e=>this.dragRef=e},Object(s.jsx)("div",{className:"d-flex align-items-center"},Object(s.jsx)("div",{className:"toc-item-icon drag-icon"},Object(s.jsx)(a.Icon,{size:"12",icon:i(25),className:"header-title-icon"})),!p&&Object(s.jsx)("div",{title:c,className:"label-con",onDoubleClick:this._enableEditing},c),p&&Object(s.jsx)("div",null,Object(s.jsx)(a.TextInput,{title:c,className:"label-input",type:"text",value:c,ref:e=>{this.inputRef=e},onAcceptValue:this._disableEditing}))),Object(s.jsx)("div",{className:"drop-down d-flex toc-item-icon"},Object(s.jsx)("div",{title:this.formatMessage("titleOption")},Object(s.jsx)(a.Dropdown,{direction:"down",size:"sm",toggle:this.toggleDropDown,isOpen:this.state.isDropDownOpen},Object(s.jsx)(a.DropdownButton,{arrow:!1,onClick:this.toggleDropDown,type:"tertiary"},Object(s.jsx)(a.Icon,{size:12,icon:i(14)})),Object(s.jsx)(a.DropdownMenu,null,u.map((e,t)=>Object(s.jsx)(a.DropdownItem,{key:t,onClick:e.event},e.label))))))))}}class Z extends s.React.PureComponent{constructor(){super(...arguments),this.getEchoBackground=()=>{var e;const{view:t,appTheme:i}=this.props,s=t.backgroundPosition?t.backgroundPosition.toUpperCase():"";let o,n;o=null==t.backgroundColor&&i?null===(e=null==i?void 0:i.body)||void 0===e?void 0:e.bg:""===t.backgroundColor?"rgba(0,0,0,0)":t.backgroundColor?t.backgroundColor:"",t.backgroundIMage&&(n="object"==typeof t.backgroundIMage?t.backgroundIMage:{});return{fillType:s?a.FillType[s]:a.FillType.FIT,color:o,image:n}},this.onBackgroundStyleChange=e=>{this.setState({config:e});const t=e.image?e.image:{},i=Object(s.Immutable)({id:this.props.view.id,label:this.props.view.label,layout:this.props.view.layout,backgroundPosition:e.fillType,backgroundColor:e.color?e.color:null,backgroundIMage:t});Object(n.getAppConfigAction)().editView(i).exec()}}render(){const{view:e}=this.props;return e?Object(s.jsx)(c.SettingSection,{className:"p-0 mt-4",title:this.props.formatMessage("background")},Object(s.jsx)(c.SettingRow,{className:"background-setting-con",flow:"wrap"},Object(s.jsx)(d.BackgroundSetting,{background:this.getEchoBackground(),onChange:e=>this.onBackgroundStyleChange(e)}))):null}}const G=i(33),J=i(34);class _ extends s.React.PureComponent{constructor(){super(...arguments),this.snapLeft=()=>{this.props.onDirectionChange("l")},this.snapRight=()=>{this.props.onDirectionChange("r")},this.snapTop=()=>{this.props.onDirectionChange("t")},this.snapBottom=()=>{this.props.onDirectionChange("b")}}render(){const{direction:e,formatMessage:t}=this.props;return Object(s.jsx)(a.ButtonGroup,{size:"sm"},Object(s.jsx)(a.Tooltip,{placement:"bottom",title:t("left")},Object(s.jsx)(a.Button,{icon:!0,active:"l"===e,onClick:this.snapLeft},Object(s.jsx)(a.Icon,{size:12,icon:G,autoFlip:!0}))),Object(s.jsx)(a.Tooltip,{placement:"bottom",title:t("top")},Object(s.jsx)(a.Button,{icon:!0,active:"t"===e,onClick:this.snapTop},Object(s.jsx)(a.Icon,{size:12,icon:G,rotate:90}))),Object(s.jsx)(a.Tooltip,{placement:"bottom",title:t("right")},Object(s.jsx)(a.Button,{icon:!0,active:"r"===e,onClick:this.snapRight},Object(s.jsx)(a.Icon,{size:12,icon:J,autoFlip:!0}))),Object(s.jsx)(a.Tooltip,{placement:"bottom",title:t("bottom")},Object(s.jsx)(a.Button,{icon:!0,active:"b"===e,onClick:this.snapBottom},Object(s.jsx)(a.Icon,{size:12,icon:G,rotate:-90}))))}}const X=i(35),K=i(36),Y=i(63),Q=[a.UnitTypes.PIXEL];class q extends s.React.PureComponent{constructor(e){super(e),this.onDidDrop=(e,t,i)=>{const{sectionId:s}=this.props;"moveInto"===i||Object(n.getAppConfigAction)().moveViewInSection(s,e.id,t.id,i).exec()},this.handleDraggingStatusChange=e=>{this.setState({draggingStatus:e})},this.formatMessage=(e,t=!1)=>t?this.props.intl.formatMessage({id:e,defaultMessage:s.defaultMessages[e]}):this.props.formatMessage(e),this._addView=()=>{const{section:e}=this.props,t=Object(n.getAppConfigAction)().appConfig,i=Object(s.Immutable)({}).merge({id:s.appConfigUtils.getUniqueId(t,"view"),label:s.appConfigUtils.getUniqueLabel(t,"view",this.formatMessage("view",!0))});Object(n.getAppConfigAction)().addView(i,e.id).exec(),s.lodash.defer(()=>{this._selectView(i.id)})},this._duplicateView=()=>{const{activeViewId:e,sectionId:t}=this.props,i=Object(n.getAppConfigAction)(),o=i.duplicateView(e,t,!0);i.exec(),s.lodash.defer(()=>{this._selectView(o.id)})},this._toggleViewList=()=>{this.setState({isShowViewList:!this.state.isShowViewList})},this._selectView=(e,t=!1)=>{const{section:i}=this.props;n.builderAppSync.publishSectionNavInfoToApp(i.id,{previousViewId:this.props.activeViewId,currentViewId:e,useProgress:!1}),t&&this.setState({showViewSetting:!0})},this._sortView=(e,t)=>{const{section:i}=this.props;let o=i.views.asMutable();const a=o[e],l=o[t];o=o.splice(e,1);const r=o.indexOf(l);o=o.splice(r,0,a);const c=Object(s.Immutable)(i).set("views",o);Object(n.getAppConfigAction)().editSection(c).exec()},this.handleOnTocDragStatusChange=e=>{this.setState({isViewListDragging:e})},this.getStyle=()=>s.css`
      .toc-dropzone {
        margin-top: 0.5rem;
      }
      .toc-dropzone .jimu-widget-setting--row.row{
        margin-top: 0;
      }
      .jimu-widget-setting--row-label{
        color:${this.props.theme.colors.palette.dark[600]};
      }
    `,this.hideViewSetting=()=>{this.setState({showViewSetting:!1})},this.onAutoPlayChanged=e=>{const{section:t}=this.props,i=Object(s.Immutable)(t).set("autoPlay",e.target.checked);Object(n.getAppConfigAction)().editSection(i).exec()},this.onLoopChanged=e=>{const{section:t}=this.props,i=Object(s.Immutable)(t).set("loop",e.target.checked);Object(n.getAppConfigAction)().editSection(i).exec()},this.onIntervalChanged=e=>{const t=+e;if(t>=1){const{section:e}=this.props,i=Object(s.Immutable)(e).set("interval",t);Object(n.getAppConfigAction)().editSection(i).exec()}},this.updateNav=(e,t,i)=>{const{section:o}=this.props,a=Object(s.Immutable)(o).setIn([e,t],i);Object(n.getAppConfigAction)().editSection(a).exec()},this.dropZoneRef=s.React.createRef(),this.viewListRef=s.React.createRef(),this.state={isViewListDragging:!1,draggingStatus:"on",showViewSetting:!1,isShowViewList:!0}}componentDidMount(){this.dropZoneRef.current&&(this.dropZoneInteractable=Object(F.interact)(this.dropZoneRef.current).dropzone({accept:".view-item-drag",overlap:"pointer",ondropactivate:e=>{},ondropmove:e=>{},ondragenter:e=>{console.log("enter view-list");const{views:t}=this.props,{relatedTarget:i,dragEvent:s}=e;if(this.viewListRef.current&&t&&t.length>0){const e=JSON.parse(i.getAttribute("itemJson")),o=this.viewListRef.current.getBoundingClientRect().top;if(s.client.y<o){t[0].id!==e.id&&this.handleDraggingStatusChange("top")}else{t[t.length-1].id!==e.id&&this.handleDraggingStatusChange("bottom")}}},ondragleave:e=>{this.handleDraggingStatusChange("on"),console.log("leave view-list")},ondrop:e=>{const{views:t}=this.props,i=this.state.draggingStatus;if("on"===i)return;let s;if("below"===i){s=t[t.length-1]}else s=t[0];const o=e.relatedTarget,n=JSON.parse(o.getAttribute("itemJson"));this.onDidDrop(n,s,i),this.handleDraggingStatusChange("on")},ondropdeactivate:e=>{}}))}componentWillUnmount(){this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}render(){var e,t,i,o,n,l,r,p,g,h,u,b,f,j,v,x,w,I,S;const{section:y,views:O,theme:C,dispatch:A,activeViewId:M,editable:T}=this.props,{isViewListDragging:N,draggingStatus:k,showViewSetting:D}=this.state;if(!y)return null;const R=s.css`
      cursor:pointer;
      margin-top: ${s.polished.rem(-8)};

      .toggle-view {
        transform: ${this.state.isShowViewList?null:"rotate(180deg)"};
      }
    `,z=O.find(e=>e.id===M),P=null!==(t=null===(e=y.dotsNav)||void 0===e?void 0:e.position)&&void 0!==t?t:"b";return Object(s.jsx)("div",{className:"flexbox-layout-setting h-100",css:this.getStyle()},Object(s.jsx)("div",{ref:this.dropZoneRef,className:"h-100 w-100"},Object(s.jsx)(c.SettingSection,null,Object(s.jsx)(c.SettingRow,{label:this.formatMessage("views")},this.state.isShowViewList&&T&&Object(s.jsx)(s.React.Fragment,null,Object(s.jsx)(a.Button,{css:R,type:"link",onClick:this._addView,title:this.formatMessage("newView")},Object(s.jsx)(a.Icon,{icon:X,color:this.props.theme.colors.palette.dark[400],className:"mr-0"})),Object(s.jsx)(a.Button,{css:R,type:"link",onClick:this._duplicateView,title:this.formatMessage("dsDuplicateView")},Object(s.jsx)(a.Icon,{icon:K,color:this.props.theme.colors.palette.dark[400],className:"mr-0"}))),Object(s.jsx)(a.Button,{css:R,type:"link",onClick:this._toggleViewList,title:this.formatMessage("toggleViewList")},Object(s.jsx)(a.Icon,{icon:Y,color:this.props.theme.colors.palette.dark[400],className:"mr-0 toggle-view"}))),this.state.isShowViewList&&Object(s.jsx)("div",{ref:this.viewListRef,className:"toc-dropzone"},O.asMutable().map((e,t)=>Object(s.jsx)(c.SettingRow,{key:e.id},Object(s.jsx)($,{index:t,canRemove:O.length>1,formatMessage:this.formatMessage,isLastItem:t===O.length-1,dispatch:A,sectionId:y.id,theme:C,view:e,isFirstItem:0===t,onSelect:e=>this._selectView(e,!0),isListDragging:N,listDraggingStatus:k,selected:M===e.id,onTocDragStatusChage:this.handleOnTocDragStatusChange,moveItem:this._sortView,editable:T}))))),Object(s.jsx)(c.SettingSection,{title:this.formatMessage("tools")},Object(s.jsx)(c.SettingRow,{label:this.formatMessage("arrows")},Object(s.jsx)(a.Switch,{checked:null===(i=y.arrowsNav)||void 0===i?void 0:i.visible,onChange:()=>{var e,t;return this.updateNav("arrowsNav","visible",!(null!==(t=null===(e=y.arrowsNav)||void 0===e?void 0:e.visible)&&void 0!==t&&t))}})),(null===(o=y.arrowsNav)||void 0===o?void 0:o.visible)&&Object(s.jsx)(s.React.Fragment,null,Object(s.jsx)(c.SettingRow,{label:this.formatMessage("direction")},Object(s.jsx)(c.DirectionSelector,{size:"sm",vertical:"v"===y.arrowsNav.direction,onChange:e=>this.updateNav("arrowsNav","direction",e?"v":"h")})),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("size"),flow:"wrap"},Object(s.jsx)(a.Slider,{min:5,max:100,step:1,value:null!==(n=y.arrowsNav.size)&&void 0!==n?n:12,css:s.css`width: 50%`,onChange:e=>this.updateNav("arrowsNav","size",e.target.value)}),Object(s.jsx)(d.InputUnit,{min:5,max:100,units:Q,value:(null!==(l=y.arrowsNav.size)&&void 0!==l?l:12)+"px",onChange:e=>this.updateNav("arrowsNav","size",e.distance),css:s.css`width: 40%; margin-left: auto;`})),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("offset"),flow:"wrap"},Object(s.jsx)(a.Slider,{min:-100,max:100,step:1,value:null!==(r=y.arrowsNav.offset)&&void 0!==r?r:0,css:s.css`width: 50%`,onChange:e=>this.updateNav("arrowsNav","offset",e.target.value)}),Object(s.jsx)(d.InputUnit,{min:-100,max:100,units:Q,value:(null!==(p=y.arrowsNav.offset)&&void 0!==p?p:0)+"px",onChange:e=>this.updateNav("arrowsNav","offset",e.distance),css:s.css`width: 40%; margin-left: auto;`}))),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("dots")},Object(s.jsx)(a.Switch,{checked:null===(g=y.dotsNav)||void 0===g?void 0:g.visible,onChange:()=>{var e,t;return this.updateNav("dotsNav","visible",!(null!==(t=null===(e=y.dotsNav)||void 0===e?void 0:e.visible)&&void 0!==t&&t))}})),(null===(h=y.dotsNav)||void 0===h?void 0:h.visible)&&Object(s.jsx)(s.React.Fragment,null,Object(s.jsx)(c.SettingRow,{label:this.formatMessage("position")},Object(s.jsx)(_,{direction:P,formatMessage:this.formatMessage,onDirectionChange:e=>this.updateNav("dotsNav","position",e)})),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("size"),flow:"wrap"},Object(s.jsx)(a.Slider,{min:5,max:30,step:1,value:null!==(u=y.dotsNav.size)&&void 0!==u?u:8,css:s.css`width: 50%`,onChange:e=>this.updateNav("dotsNav","size",e.target.value)}),Object(s.jsx)(d.InputUnit,{min:5,max:30,units:Q,value:(null!==(b=y.dotsNav.size)&&void 0!==b?b:8)+"px",onChange:e=>this.updateNav("dotsNav","size",e.distance),css:s.css`width: 40%; margin-left: auto;`})),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("offset"),flow:"wrap"},Object(s.jsx)(a.Slider,{min:-100,max:100,step:1,value:null!==(f=y.dotsNav.offset)&&void 0!==f?f:50,css:s.css`width: 50%`,onChange:e=>this.updateNav("dotsNav","offset",e.target.value)}),Object(s.jsx)(d.InputUnit,{min:-100,max:100,units:Q,value:(null!==(j=y.dotsNav.offset)&&void 0!==j?j:50)+"px",onChange:e=>this.updateNav("dotsNav","offset",e.distance),css:s.css`width: 40%; margin-left: auto;`})),Object(s.jsx)(c.SettingRow,{label:this.formatMessage("spacing"),flow:"wrap"},Object(s.jsx)(a.Slider,{min:0,max:30,step:1,value:null!==(v=y.dotsNav.spacing)&&void 0!==v?v:10,css:s.css`width: 50%`,onChange:e=>this.updateNav("dotsNav","spacing",e.target.value)}),Object(s.jsx)(d.InputUnit,{min:0,max:30,units:Q,value:(null!==(x=y.dotsNav.spacing)&&void 0!==x?x:10)+"px",onChange:e=>this.updateNav("dotsNav","spacing",e.distance),css:s.css`width: 40%; margin-left: auto;`})))),Object(s.jsx)(c.SettingSection,null,Object(s.jsx)(c.SettingRow,{label:this.formatMessage("autoPlay")},Object(s.jsx)(a.Switch,{checked:y.autoPlay,onChange:this.onAutoPlayChanged})),y.autoPlay&&Object(s.jsx)(c.SettingRow,{label:this.formatMessage("interval")},Object(s.jsx)(a.NumericInput,{size:"sm",css:s.css`width: 4rem`,value:null!==(w=y.interval)&&void 0!==w?w:m.DEFAULT_AUTOPLAY_INTERVAL,min:1,onChange:this.onIntervalChanged})),y.autoPlay&&Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(a.Label,{check:!0},Object(s.jsx)(a.Checkbox,{checked:null===(I=y.loop)||void 0===I||I,onChange:this.onLoopChanged,className:"mr-2"}),this.formatMessage("loop")))),Object(s.jsx)(c.SidePopper,{isOpen:D,position:"right",toggle:this.hideViewSetting,trigger:null===(S=this.viewListRef)||void 0===S?void 0:S.current},Object(s.jsx)("div",{className:"p-3"},Object(s.jsx)(a.PanelHeader,{title:null==z?void 0:z.label,onClose:this.hideViewSetting}),Object(s.jsx)(Z,{formatMessage:this.formatMessage,appTheme:this.props.appTheme,view:z})))))}}var ee=s.ReactRedux.connect((e,t)=>{var i,o,n,a,l,r,c,p,d,g;const{sectionId:h}=t,{appConfig:u}=e.appStateInBuilder,m=u.sections[h];if(!m)return null;const b=m.views.map(e=>u.views[e]),f=null===(n=null===(o=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===o?void 0:o.sectionNavInfos)||void 0===n?void 0:n[m.id],j=null!==(a=null==f?void 0:f.currentViewId)&&void 0!==a?a:m.views[0],v=null!==(p=null===(c=null===(r=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appConfig)||void 0===r?void 0:r.forBuilderAttributes)||void 0===c?void 0:c.lockLayout)&&void 0!==p&&p,x=null===(g=null===(d=e.appStateInBuilder)||void 0===d?void 0:d.appRuntimeInfo)||void 0===g?void 0:g.appMode;return{section:m,views:b,activeViewId:j,browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode,editable:x===s.AppMode.Design&&!v}})(q),te=i(11);const ie=i(25);class se extends s.React.PureComponent{constructor(e){super(e),this.onDidDrop=(e,t)=>{const{screenGroupId:i,index:s}=this.props;Object(n.getAppConfigAction)().moveScreenInGroup(i,e,s,t).exec()},this.onDropHover=e=>{this.state.dropType!==e&&this.setState({dropType:e})},this.formatMessage=e=>this.props.formatMessage(e),this._select=e=>{e.stopPropagation(),this.props.onSelect(this.props.index)},this._enableEditing=e=>{e.stopPropagation(),this.dragInteractable.draggable(!1),this.setState({editingLabel:!0})},this._disableEditing=()=>{this._onLabelUpdate(this.inputRef.value),this.dragInteractable.draggable(!0),this.setState({editingLabel:!1})},this._onLabelUpdate=e=>{const{screen:t}=this.props;if(e&&(""+e).trim().length>0){const i=Object(s.Immutable)(t).set("label",e);Object(n.getAppConfigAction)().editScreen(i).exec()}else this.inputRef.value=t.label},this.toggleDropDown=e=>{null==e||e.stopPropagation(),this.setState({isDropDownOpen:!this.state.isDropDownOpen})},this.state={editingLabel:!1,dropType:"none",isDragging:!1,isDropDownOpen:!1},this.dropDownItems=[Object(s.Immutable)({label:this.formatMessage("rename"),event:this._enableEditing.bind(this),visible:!0}),Object(s.Immutable)({label:this.formatMessage("duplicate"),event:this._duplicateView.bind(this),visible:!0}),Object(s.Immutable)({label:this.formatMessage("sectionDelete"),event:this._removeScreen.bind(this),visible:!0})],this.readonlyDropDownItems=[this.dropDownItems[0]],this.dropDownItemsWithoutDelete=[this.dropDownItems[0],this.dropDownItems[1]]}componentWillUnmount(){this.dragInteractable&&(this.dragInteractable.unset(),this.dragInteractable=null),this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidUpdate(){this.inputRef&&(this.inputRef.select(),this.inputRef.focus())}componentDidMount(){if(this.inputRef&&(this.inputRef.select(),this.inputRef.focus()),this.dropZoneRef&&this.dragRef){let e,t=0,i=0;const{index:s}=this.props;this.dropZoneInteractable=Object(F.interact)(this.dropZoneRef).dropzone({accept:".screen-item-drag",overlap:"pointer",ondropmove:t=>{const i=t.relatedTarget.getAttribute("data-index");e||(e=t.dropzone.getRect());const o=(e.bottom-e.top)/2,n=t.dragEvent.client.y-e.top;let a=this.state.dropType;a=+i!==s?n>o?"below":"above":"none",this.onDropHover(a)},ondragenter:t=>{e=t.dropzone.getRect()},ondragleave:()=>{e=null,this.onDropHover("none")},ondrop:t=>{e=null;const i=this.state.dropType;if("none"===i)return;const s=t.relatedTarget.getAttribute("data-index");this.onDidDrop(+s,i),this.onDropHover("none")},ondropdeactivate:e=>{}}),this.dragInteractable=Object(F.interact)(this.dragRef).draggable({inertia:!1,autoScroll:!0,onstart:e=>{this.setState({isDragging:!0}),t=0,i=0},onmove:e=>{t+=e.dx,i+=e.dy;const s=e.target;s.style.webkitTransform=s.style.transform=`translate(${t}px, ${i}px)`},onend:e=>{const{target:t}=e;t.style.webkitTransform=t.style.transform=null,this.setState({isDragging:!1})}})}}_removeScreen(e){e.stopPropagation();const{index:t}=this.props;this.props.onRemove(t)}_duplicateView(){const{index:e}=this.props;this.props.onDuplicate(e)}_focusInput(){this.inputRef&&(this.inputRef.select(),this.inputRef.focus())}_getStyle(){const{theme:e}=this.props,{isDragging:t}=this.state;return s.css`
      cursor: pointer;
      position: relative;
      height: ${s.polished.rem(32)};

      .drop-down {
        visibility: hidden;
        text-align: right;
        .popover {
          .popover-inner {
            box-shadow: 0 0 0;
          }
        }
      }
      .drag-icon {
        visibility: hidden;
        color: ${e.colors.palette.dark[600]};
        cursor: move;
      }
      .screen-item-drag:hover {
        cursor: pointer !important;
      }
      .label-con {
        width: ${s.polished.rem(123)};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .label-input {
        width: ${s.polished.rem(123)};
      }
      .screen-item-drag {
        z-index: 1;
        background-color: ${t?s.polished.rgba(e.colors.palette.light[400],.6):"transparent"};
        box-shadow: ${t?e.boxShadows.lg:"none"};
      }

      .drag-move-out-order-below {
        background-color: ${s.polished.rgba(e.colors.palette.light[400],.4)};
        :after {
          content: '';
          position: absolute;
          left: 0;
          top: auto;
          bottom: 0;
          right: auto;
          height: 2px;
          width: 100%;
          background-color: ${e.colors.palette.primary[700]};
        }
      }

      .drag-move-out-order-above {
        background-color: ${s.polished.rgba(e.colors.palette.light[400],.4)};
        :before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: auto;
          right: auto;
          height: 2px;
          width: 100%;
          background-color: ${e.colors.palette.primary[700]};
        }
      }

      &.selected {
        border: 0;
        background-color: ${e.colors.palette.light[500]};
      }

      &:hover {
        .drop-down {
          visibility: visible;
        }
        .drag-icon {
          visibility: visible;
        }
      }

      &:not(.selected):hover {
        background-color: ${s.polished.rgba(e.colors.palette.light[500],.4)};
      }
    `}render(){const{selected:e,index:t,browserSizeMode:o,editable:n}=this.props,{label:l}=this.props.screen,{editingLabel:r,dropType:c}=this.state,p="drag-move-out-order-"+c,d=!n||o!==s.BrowserSizeMode.Large?this.readonlyDropDownItems:this.props.canRemove?this.dropDownItems:this.dropDownItemsWithoutDelete;r&&this._focusInput();const g=Object(s.classNames)("d-flex justify-content-between w-100",{selected:e});return Object(s.jsx)("div",{ref:e=>this.dropZoneRef=e,css:this._getStyle(),className:g,onClick:this._select,"data-testid":"screenItem"},Object(s.jsx)("div",{className:"w-100 screen-item-drag d-flex justify-content-between "+p,"data-index":t,ref:e=>this.dragRef=e},Object(s.jsx)("div",{className:"d-flex align-items-center"},Object(s.jsx)("div",{className:"toc-item-icon drag-icon"},Object(s.jsx)(a.Icon,{size:"12",icon:ie,className:"header-title-icon"})),!r&&Object(s.jsx)("div",{title:l,className:"label-con",onDoubleClick:this._enableEditing},l),r&&Object(s.jsx)("div",null,Object(s.jsx)(a.TextInput,{title:l,className:"label-input",type:"text",value:l,ref:e=>{this.inputRef=e},onAcceptValue:this._disableEditing}))),Object(s.jsx)("div",{className:"drop-down d-flex toc-item-icon"},Object(s.jsx)("div",{title:this.formatMessage("titleOption"),css:s.css`
              & > div {
                height: 100%;
              }
            `},Object(s.jsx)(a.Dropdown,{direction:"down",size:"sm",toggle:this.toggleDropDown,isOpen:this.state.isDropDownOpen},Object(s.jsx)(a.DropdownButton,{arrow:!1,onClick:this.toggleDropDown,type:"tertiary"},Object(s.jsx)(a.Icon,{size:12,icon:i(14)})),Object(s.jsx)(a.DropdownMenu,null,d.map((e,t)=>Object(s.jsx)(a.DropdownItem,{key:t,onClick:e.event},e.label))))))))}}var oe=s.ReactRedux.connect((e,t)=>{const{screenId:i}=t,{appConfig:s}=e.appStateInBuilder;return{screen:s.screens[i]}})(se);const ne=i(33),ae=i(64),le=i(34),re=[a.UnitTypes.PIXEL,a.UnitTypes.PERCENTAGE],ce=[a.Sides.T,a.Sides.R,a.Sides.B,a.Sides.L];class pe extends s.React.PureComponent{constructor(e){super(e),this.onMainBackgroundChange=e=>{const{screen:t}=this.props,i=t.setIn(["main","background"],e);Object(n.getAppConfigAction)().editScreen(i).exec()},this.onSideBackgroundChange=e=>{const{screen:t}=this.props,i=t.setIn(["panel","background"],e);Object(n.getAppConfigAction)().editScreen(i).exec()},this.setOverlay=e=>{const{screen:t}=this.props;let i=t.setIn(["panel","overlay"],e);e||(i=i.setIn(["panel","offset"],0),"center"===t.panel.side&&(i=i.setIn(["panel","side"],"left"))),Object(n.getAppConfigAction)().editScreen(i).exec()},this.updateWidth=e=>{var t,i,s;const{screen:o,viewportSize:l}=this.props,{distance:r,unit:c}=e;let p;if(m.utils.isPercentage(null===(t=o.panel)||void 0===t?void 0:t.size)&&c===a.UnitTypes.PIXEL){const t=m.utils.fromRatio(null===(i=o.panel)||void 0===i?void 0:i.size,l.width);p=o.setIn(["panel","size"],`${Math.round(t)}${e.unit}`)}else if(m.utils.isPercentage(null===(s=o.panel)||void 0===s?void 0:s.size)||c!==a.UnitTypes.PERCENTAGE)p=o.setIn(["panel","size"],`${e.distance}${e.unit}`);else{const e=m.utils.toRatio(r,l.width);p=o.setIn(["panel","size"],""+e)}Object(n.getAppConfigAction)().editScreen(p).exec()},this.updateSide=e=>{const{screen:t}=this.props,i=t.setIn(["panel","side"],e);Object(n.getAppConfigAction)().editScreen(i).exec()},this.updateOffsetX=e=>{const{screen:t}=this.props,i=t.setIn(["panel","offset"],e+"px");Object(n.getAppConfigAction)().editScreen(i).exec()},this.updatePadding=e=>{const{screen:t}=this.props,i=t.setIn(["panel","padding"],e);Object(n.getAppConfigAction)().editScreen(i).exec()},this.handleGapChange=e=>{const{screen:t}=this.props,i=Object(n.getAppConfigAction)(),s=t.setIn(["panel","gap"],e.distance);i.editScreen(s),Object.keys(t.panel.layout).map(e=>t.panel.layout[e]).forEach(t=>{i.editLayoutSetting({layoutId:t},{space:e.distance})}),i.exec()},this._getStyle=()=>{const e=this.props.theme?this.props.theme.colors.palette.dark[600]:"#c5c5c5",t=this.props.theme?this.props.theme.colors.palette.dark[600]:"#a8a8a8";return s.css`
      height: calc(100% - 40px);
      overflow: auto;
      & {
        width: 100%;
      }
      .inner-section {
        border-bottom: none;
        padding-bottom: 0;
      }
      .back-btn-con {
        margin: 1rem 0.25rem 0;
        cursor: pointer;
        align-items: center;
      }
      .screen-group-title {
        margin: 1rem 1rem 0;
      }
      .background-set-back {
        color: ${t};
        font-weight: 500;
      }
      .background-setting-con .form-group {
        margin-bottom: ${s.polished.rem(16)};
      }
      .background-setting-header {
        color: ${e};
        font-weight: 500;
      }
    `},this.isRTL=Object(s.getAppStore)().getState().appContext.isRTL}render(){var e,t,i;const{screen:o,formatMessage:n}=this.props;return o?Object(s.jsx)("div",{css:this._getStyle(),className:"pb-2"},Object(s.jsx)("div",{className:"screen-group-title"},n("mainStage")),Object(s.jsx)(c.SettingSection,{title:n("background")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(d.BackgroundSetting,{background:o.main.background,onChange:e=>this.onMainBackgroundChange(e)}))),o.panel&&Object(s.jsx)(s.React.Fragment,null,Object(s.jsx)("div",{className:"screen-group-title"},n("scrollingPanel")),Object(s.jsx)(c.SettingSection,{className:"inner-section",title:n("mode")},Object(s.jsx)("div",null,Object(s.jsx)(a.Label,{className:"mr-3"},Object(s.jsx)(a.Radio,{className:"mr-2",onChange:()=>this.setOverlay(!1),value:"docked",checked:!(null!==(e=o.panel.overlay)&&void 0!==e&&e)}),n("docked"))),Object(s.jsx)("div",null,Object(s.jsx)(a.Label,{className:"mr-3"},Object(s.jsx)(a.Radio,{className:"mr-2",onChange:()=>this.setOverlay(!0),value:"floating",checked:o.panel.overlay}),n("floatingScreen")))),Object(s.jsx)(c.SettingSection,{className:"inner-section",title:n("size")},Object(s.jsx)(c.SettingRow,{label:n("width")},Object(s.jsx)("div",{style:{width:110}},Object(s.jsx)(d.SizeEditor,{label:"W",availableUnits:re,mode:m.LayoutItemSizeModes.Custom,disableModeSelect:!0,value:o.panel.size,onChange:this.updateWidth})))),Object(s.jsx)(c.SettingSection,{className:"inner-section",title:n("position")},Object(s.jsx)(c.SettingRow,{label:n("align")},Object(s.jsx)(a.ButtonGroup,{size:"sm"},Object(s.jsx)(a.Tooltip,{title:n(this.isRTL?"right":"left"),placement:"bottom"},Object(s.jsx)(a.Button,{icon:!0,active:"left"===o.panel.side,onClick:()=>this.updateSide("left")},Object(s.jsx)(a.Icon,{size:12,icon:ne,autoFlip:!0}))),o.panel.overlay&&Object(s.jsx)(a.Tooltip,{title:n("center"),placement:"bottom"},Object(s.jsx)(a.Button,{icon:!0,active:"center"===o.panel.side,onClick:()=>this.updateSide("center")},Object(s.jsx)(a.Icon,{size:12,icon:ae}))),Object(s.jsx)(a.Tooltip,{title:n(this.isRTL?"left":"right"),placement:"bottom"},Object(s.jsx)(a.Button,{icon:!0,active:"right"===o.panel.side,onClick:()=>this.updateSide("right")},Object(s.jsx)(a.Icon,{size:12,icon:le,autoFlip:!0}))))),(null===(t=o.panel)||void 0===t?void 0:t.overlay)&&Object(s.jsx)(c.SettingRow,{label:n("offsetX")},Object(s.jsx)(a.NumericInput,{value:parseInt(null!==(i=o.panel.offset)&&void 0!==i?i:"0"),onChange:this.updateOffsetX,size:"sm",css:s.css`width: 110px`}))),Object(s.jsx)(c.SettingSection,{className:"inner-section",title:n("gap")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(d.InputUnit,{className:"w-100",value:{distance:o.panel.gap>=0?o.panel.gap:10,unit:void 0},min:0,onChange:this.handleGapChange}))),Object(s.jsx)(c.SettingSection,{className:"inner-section",title:n("padding")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(d.FourSides,{showTip:!0,sides:ce,value:o.panel.padding,onChange:this.updatePadding}))),Object(s.jsx)(c.SettingSection,{className:"inner-section",title:n("background")},Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(d.BackgroundSetting,{background:o.panel.background,onChange:e=>this.onSideBackgroundChange(e)}))))):null}}var de=s.ReactRedux.connect((e,t)=>{const{screenId:i}=t,{appConfig:o}=e.appStateInBuilder,n=s.utils.findViewportSize(o,e.browserSizeMode||s.BrowserSizeMode.Large);return{screen:o.screens[i],viewportSize:n}})(pe);const ge=i(35);class he extends s.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=s.React.createRef(),this.formatMessage=(e,t=!1)=>t?this.props.intl.formatMessage({id:e,defaultMessage:s.defaultMessages[e]}):this.props.formatMessage(e),this._addScreen=e=>{const t=Object(n.getAppConfigAction)(),{screenGroupId:i}=this.props;n.templateUtils.createScreenFromTemplate(t.appConfig,e,e.screenId,{}).then(({appConfig:e,newScreenId:t})=>{e=e.setIn(["screenGroups",i,"screens"],[].concat(e.screenGroups[i].screens,t)),n.builderAppSync.publishAppConfigChangeToApp(e),n.builderAppSync.publishScreenGroupNavInfoToApp(i,e.screenGroups[i].screens.length-1)}),this.closeScreenPopper()},this._duplicateScreen=e=>{const{screenGroupId:t}=this.props,i=Object(n.getAppConfigAction)();i.duplicateScreenByIndex(e,t),i.exec(),n.builderAppSync.publishScreenGroupNavInfoToApp(t,e+1)},this._duplicateActiveScreen=()=>{this._duplicateScreen(this.props.activeScreen)},this._selectScreen=e=>{const{screenGroupId:t}=this.props;n.builderAppSync.publishScreenGroupNavInfoToApp(t,e),this.setState({showScreenSetting:!0})},this._removeScreen=e=>{const{screenGroupId:t,screens:i,activeScreen:s}=this.props;Object(n.getAppConfigAction)().removeScreen(i[e],t).exec(),(s>e||s===e&&s===i.length-1)&&n.builderAppSync.publishScreenGroupNavInfoToApp(t,s-1)},this.getStyle=()=>s.css`
      .screen-list {
        padding: 1rem;
      }

      .setting-header {
        margin-bottom: 1rem;
      }

      .screen-group-title {
        font-size: 14px;
        color: var(--dark-900);
      }
    `,this.hideScreenSetting=()=>{this.setState({showScreenSetting:!1})},this.toggleScreenPopper=()=>{this.props.hasPanel?this.setState({showPopper:!this.state.showPopper}):this._addScreen(Object(te.getBlankScreenTemplate)())},this.closeScreenPopper=()=>{this.setState({showPopper:!1})},this.popperRef=s.React.createRef(),this.state={showPopper:!1,showScreenSetting:!1}}showEditButtons(){const{editable:e,browserSizeMode:t}=this.props,i=t===s.BrowserSizeMode.Large;return e&&i}render(){var e;const{screenGroupId:t,screens:o,theme:n,dispatch:l,activeScreen:r,browserSizeMode:p,editable:d}=this.props,{showScreenSetting:g}=this.state;if(!o)return null;const h=s.css`
      cursor: pointer;
      margin-top: ${s.polished.rem(-8)};
    `;return Object(s.jsx)("div",{className:"screen-group-setting mb-4",css:this.getStyle()},Object(s.jsx)("div",{className:"h-100 screen-list",ref:this.sidePopperTrigger},Object(s.jsx)("div",{className:"d-flex align-items-center setting-header"},Object(s.jsx)("div",{className:"screen-group-title"},this.formatMessage("screen")),this.showEditButtons()&&Object(s.jsx)(s.React.Fragment,null,Object(s.jsx)("div",{ref:this.popperRef,css:s.css`margin-left: auto;`},Object(s.jsx)(a.Tooltip,{title:this.formatMessage("addScreen"),placement:"bottom"},Object(s.jsx)(a.Button,{css:h,type:"link",onClick:this.toggleScreenPopper,className:"rounded-circle"},Object(s.jsx)(a.Icon,{icon:ge,className:"mr-0",color:"var(--dark-400)",size:16})))),this.state.showPopper&&Object(s.jsx)(c.ScreenTemplatePopper,{referenceElement:this.popperRef.current,theme:n,onItemSelect:this._addScreen,onClose:this.closeScreenPopper}),Object(s.jsx)(a.Tooltip,{title:this.formatMessage("dsDuplicateScreen"),placement:"bottom"},Object(s.jsx)(a.Button,{css:h,type:"link",onClick:this._duplicateActiveScreen},Object(s.jsx)(a.Icon,{icon:i(36),color:this.props.theme.colors.palette.dark[400],className:"mr-0"}))))),o.map((e,i)=>Object(s.jsx)(oe,{key:e,index:i,screenGroupId:t,screenId:e,canRemove:o.length>1,formatMessage:this.formatMessage,dispatch:l,theme:n,editable:d,onSelect:this._selectScreen,onRemove:this._removeScreen,onDuplicate:this._duplicateScreen,selected:o[r]===e,browserSizeMode:p}))),Object(s.jsx)(c.SidePopper,{isOpen:g,position:"right",toggle:this.hideScreenSetting,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current},Object(s.jsx)(a.PanelHeader,{className:"pt-3 px-3",title:this.props.activeScreenLabel,onClose:this.hideScreenSetting}),Object(s.jsx)(de,{formatMessage:this.formatMessage,theme:this.props.theme,screenId:o[r],hideBackgroundWidget:this.hideScreenSetting})))}}var ue=s.ReactRedux.connect((e,t)=>{var i,o,n,a,l,r,c,p,d,g,h,u;const{screenGroupId:m}=t,{appConfig:b}=e.appStateInBuilder,f=b.screenGroups[m];if(!f)return null;const j=b.screens[f.screens[0]],v=null!==(a=null===(n=null===(o=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===o?void 0:o.forBuilderAttributes)||void 0===n?void 0:n.lockLayout)&&void 0!==a&&a,x=null===(r=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appRuntimeInfo)||void 0===r?void 0:r.appMode,w=f.screens,I=null!==(h=null===(g=null===(d=null===(p=null===(c=e.appStateInBuilder)||void 0===c?void 0:c.appRuntimeInfo)||void 0===p?void 0:p.screenGroupNavInfos)||void 0===d?void 0:d[m])||void 0===g?void 0:g.activeIndex)&&void 0!==h?h:0,S=w[I];return{screens:w,activeScreen:I,activeScreenLabel:null===(u=b.screens[S])||void 0===u?void 0:u.label,browserSizeMode:e.appStateInBuilder.browserSizeMode,hasPanel:null!=j.panel,editable:x===s.AppMode.Design&&!v}})(he);class me extends s.React.PureComponent{constructor(){super(...arguments),this.renderItemSetting=()=>{let e=null;if(this.props.layoutType===s.LayoutType.FixedLayout)e=u.FixedLayoutItemSetting;else if(this.props.layoutType===s.LayoutType.FlowLayout)e=u.FlowLayoutItemSetting;else if(this.props.layoutType===s.LayoutType.ColumnLayout)e=u.ColumnLayoutItemSetting;else if(this.props.layoutType===s.LayoutType.RowLayout)e=u.RowLayoutItemSetting;else{const{containerWidgetId:t,hasLayoutSetting:i}=this.props;i&&(e=n.WidgetSettingManager.getInstance().getItemSettingClass(t))}return e?Object(s.jsx)(s.ErrorBoundary,null,Object(s.jsx)(e,{layoutId:this.props.layoutId,layoutItem:this.props.layoutItem,isLockLayout:this.props.isLockLayout,supportAutoSize:this.props.supportAutoSize,style:this.props.style,onSettingChange:this.props.onSettingChanged,onStyleChange:this.props.onStyleChange,onPosChange:this.props.onPosChanged,formatMessage:this.props.formatMessage})):Object(s.jsx)(c.SettingSection,null,Object(s.jsx)("div",{className:"w-100 justify-content-center d-flex"},this.props.formatMessage("noStyle")))}}componentDidUpdate(){this.loadItemSettingClass()}componentDidMount(){this.loadItemSettingClass()}loadItemSettingClass(){const{containerWidgetId:e,hasLayoutSetting:t}=this.props;e&&t&&!n.WidgetSettingManager.getInstance().getItemSettingClass(e)&&n.WidgetSettingManager.getInstance().loadItemSettingClass(e)}getStyle(){return s.css`
      &.single-setting {
        border-top: 1px solid var(--light-800);
      }
    `}render(){const{isSingle:e=!1}=this.props;return Object(s.jsx)("div",{className:Object(s.classNames)("setting-container",{"single-setting":e}),css:this.getStyle()},this.renderItemSetting())}}var be,fe=s.ReactRedux.connect((e,t)=>{var i,o,n,a,l,r,c,p,d,g,h;const{layoutId:u,layoutItemId:b}=t,f=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig.layouts,j=null==f?void 0:f[u];let v=null,x=!0;if(!j)return null;const w=m.searchUtils.findLayoutItem(e.appStateInBuilder.appConfig,{layoutId:u,layoutItemId:b}),I=m.searchUtils.getWidgetIdThatUseTheLayoutId(e.appStateInBuilder.appConfig,u);let S=!1;if(I){S=null!==(a=null===(n=null===(o=e.appStateInBuilder.appConfig.widgets[I].manifest)||void 0===o?void 0:o.properties)||void 0===n?void 0:n.hasLayoutItemSettingPage)&&void 0!==a&&a}const y=null==w?void 0:w.type;if(y===s.LayoutItemType.Widget&&w.widgetId){const t=e.appStateInBuilder.appConfig.widgets[w.widgetId];v=t.style,x=null===(c=null===(r=null===(l=t.manifest)||void 0===l?void 0:l.properties)||void 0===r?void 0:r.supportAutoSize)||void 0===c||c}else y===s.LayoutItemType.Section&&(v=e.appStateInBuilder.appConfig.sections[w.sectionId].style,x=!1);return{containerWidgetId:I,hasLayoutSetting:S,style:v,supportAutoSize:x,layoutType:j.type,layoutItem:w,runtimeInfo:e.builder.widgetsSettingRuntimeInfo[I],isLockLayout:null!==(h=null===(g=null===(d=null===(p=e.appStateInBuilder)||void 0===p?void 0:p.appConfig)||void 0===d?void 0:d.forBuilderAttributes)||void 0===g?void 0:g.lockLayout)&&void 0!==h&&h}})(me);!function(e){e.MessageChoose="MESSAGECHOOSE",e.TargetChoose="TARGETCHOOSE",e.ActionChoose="ACTIONCHOOSE",e.ActionSetting="ACTIONSETTING"}(be||(be={}));const je=i(20),ve=i(13);class xe extends s.React.PureComponent{getStyle(e){var t,i,o;return s.css`
      .setting-header {
        padding: ${s.polished.rem(18)} ${s.polished.rem(16)} ${s.polished.rem(0)} ${s.polished.rem(16)}
      }

      .setting-title {
        font-size: ${s.polished.rem(16)};
        color: ${null===(o=null===(i=null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.dark)||void 0===o?void 0:o[600]}
      }
    `}render(){return Object(s.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},Object(s.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-between setting-header border-0",style:{height:"38px"}},this.props.Routes.length>1&&!this.props.hideBackArrow?Object(s.jsx)("div",{className:"h-100"},Object(s.jsx)("div",{className:"d-flex align-items-center h-100",style:{cursor:"pointer"},onClick:this.props.onBack},Object(s.jsx)("div",{className:"d-flex align-items-center"},Object(s.jsx)(a.Icon,{icon:je,autoFlip:!0,size:"14",className:"text-dark"})),Object(s.jsx)("div",{className:"pl-2 setting-title",style:{maxWidth:"190px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:this.props.title},this.props.title))):Object(s.jsx)("div",{className:"setting-title mt-1",style:{maxWidth:"190px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:this.props.title},this.props.title),Object(s.jsx)(a.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.props.onClose},Object(s.jsx)(a.Icon,{icon:ve,size:"16"}))),this.props.children)}}const we=s.themeUtils.withTheme(xe),Ie=i(26);class Se extends s.React.PureComponent{constructor(){super(...arguments),this.searchItems=e=>{},this.onSelectMessageType=e=>{const t=Object(n.getAppConfigAction)().appConfig,i={id:s.appConfigUtils.getUniqueId(t,"messageConfig"),widgetId:this.props.widgetId,messageType:e,actions:[]};this.props.onSelected(Object(s.Immutable)(i))},this.getPublishMessages=()=>{var e,t;const i=Object(n.getAppConfigAction)().appConfig.widgets[this.props.widgetId].manifest.publishMessages,o=[];if(i)for(let n=0;n<i.length;n++){let a=!1;if(this.props.messages)for(let s=0;s<this.props.messages.length;s++){const o=(null===(e=i[n])||void 0===e?void 0:e.messageType)?null===(t=i[n])||void 0===t?void 0:t.messageType:i[n];if(this.props.messages[s].messageType===o){a=!0;break}}if(!a){const e=i[n],t=(null==e?void 0:e.messageType)||e;o.push({messageType:t,messageLabel:Object(s.getMessageTypeLabel)(t,this.props.intl)})}}return o}}getStyle(e){return s.css`
      height: calc(100% - 3.125rem);
      overflow-y: auto;

      .choose-message-list {

        .searchIcon {
          cursor: pointer;
          position: absolute;
          right: 1.2rem;
          margin-top: 0.3rem;
          background-color: ${s.polished.rgba(e.colors.white,1)};
          color: ${e.colors.palette.dark[200]} !important;
        }

        .list{
          .list-item{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border: 1px solid transparent;
            cursor: pointer;
            background-color: ${e.colors.palette.light[500]};
            user-select: none;
            font-size: ${s.polished.rem(13)};
          }
          .list-item:hover{
            background-color: ${e.colors.palette.light[600]};
          }
          .list-item:active.list-item:hover{
            background-color: ${e.colors.white};
          }
        }
      }
    `}render(){const e=this.getPublishMessages();return Object(s.jsx)("div",{className:"w-100",css:this.getStyle(this.props.theme)},Object(s.jsx)("div",{className:"w-100 choose-message-list"},Object(s.jsx)(c.SettingSection,null,Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"w-100",style:{display:"none"}},Object(s.jsx)(a.TextInput,{className:"w-100",placeholder:this.props.formatMessage("chooseSearchTrigger"),onChange:this.searchItems,value:""}),Object(s.jsx)(a.Icon,{className:"p-0 searchIcon",width:16,height:16,icon:Ie})),Object(s.jsx)("div",{className:"w-100 list"},0===e.length&&Object(s.jsx)("div",{className:"d-flex mb-2 p-1 text-break"},this.props.formatMessage("noMessage")),e.length>0&&e.map((e,t)=>Object(s.jsx)("div",{className:"list-item mb-2 pt-1 pb-1 pl-2 pr-2",key:t,onClick:()=>this.onSelectMessageType(e.messageType),title:e.messageLabel},e.messageLabel)))))))}}const ye=s.themeUtils.withTheme(Object(s.injectIntl)(Se)),Oe=i(26);class Ce extends s.React.PureComponent{constructor(e){super(e),this.searchItems=e=>{},this.getActions=()=>{const e=[],t=[];let i=null;i=(this.props.target.id,this.props.target);const s=n.AppMessageManager.getInstance().getFilteredActions(this.props.message.messageType);for(let o=0;o<s.length;o++)t.includes(s[o].name)||s[o].widgetId!==i.id||(t.push(s[o].name),e.push(s[o]));return e},this.onSelectAction=e=>{let t,i=this.props.message,o=null;o=(this.props.target.id,this.props.target),t=o.id?Object(s.getAppStore)().getState().appStateInBuilder?Object(s.getAppStore)().getState().appStateInBuilder.appConfig.widgets[o.id].manifest.version:null:s.version;const n={actionId:e.id+"-"+(new Date).getTime().toString(),widgetId:o.id,messageWidgetId:this.props.widgetId,actionName:e.name,description:null,config:this.checkIsSupportActionSetting(e)?null:void 0,version:t};i=i.set("actions",i.actions.concat(n)),this.props.onSelected(i,n)},this.checkIsSupportActionSetting=e=>!!n.AppMessageManager.getInstance().getActionSettingComponentUri(e,this.props.message.messageType,this.props.message.widgetId)}getStyle(e){return s.css`
      height: calc(100% - 3.125rem);
      overflow-y: auto;

      .action-choose-list {

        .searchIcon {
          cursor: pointer;
          position: absolute;
          right: 1.2rem;
          margin-top: 0.3rem;
          background-color: ${s.polished.rgba(e.colors.white,1)};
        }

        .list{
          .list-item{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border: 1px solid transparent;
            cursor: pointer;
            background-color: ${e.colors.palette.light[500]};
            user-select: none;
            font-size: ${s.polished.rem(13)};
          }
          .list-item:hover{
            background-color: ${e.colors.palette.light[600]};
          }
          .list-item:active.list-item:hover{
            background-color: ${e.colors.white};
          }
        }
      }
    `}render(){const e=this.getActions();return Object(s.jsx)("div",{className:"w-100",css:this.getStyle(this.props.theme)},Object(s.jsx)("div",{className:"w-100 action-choose-list"},Object(s.jsx)(c.SettingSection,null,Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"w-100",style:{display:"none"}},Object(s.jsx)(a.TextInput,{className:"w-100",placeholder:this.props.formatMessage("chooseSearchAction"),onChange:this.searchItems,value:""}),Object(s.jsx)(a.Icon,{className:"p-0 searchIcon",width:16,height:16,icon:Oe})),Object(s.jsx)("div",{className:"w-100 list"},0===e.length&&Object(s.jsx)("div",{className:"d-flex mb-2 p-1 text-break"},this.props.formatMessage("noAction")),e.length>0&&e.map((e,t)=>Object(s.jsx)("div",{className:"d-flex list-item mb-2 pt-1 pb-1 pl-2 pr-2",key:t,onClick:()=>this.onSelectAction(e)},e.label)))))))}}const Ae=s.themeUtils.withTheme(Ce),Me=i(26),Te=i(65);class Ne extends s.React.PureComponent{constructor(e){super(e),this.searchItems=e=>{},this.getTargets=()=>{const e=[],t=[],i=[],s=Object(n.getAppConfigAction)().appConfig,o=n.AppMessageManager.getInstance().getFilteredActions(this.props.message.messageType);for(let n=0;n<o.length;n++)if(!i.includes(o[n].widgetId))if(i.push(o[n].widgetId),o[n].widgetId){const t=s.widgets[o[n].widgetId];if(t){if(t.id===this.props.message.widgetId)continue;e.push(t)}}else t.push({uri:o[n].id,label:"Framework"});return{widgetTargets:e,frameWorkTargets:t}},this.onSelectTarget=e=>{this.props.onSelected(e)}}getStyle(e){return s.css`
      height: calc(100% - 3.125rem);
      overflow-y: auto;

      .target-choose-list {

        .searchIcon {
          cursor: pointer;
          position: absolute;
          right: 1.2rem;
          margin-top: 0.3rem;
          background-color: ${s.polished.rgba(e.colors.white,1)};
        }

        .seperateline-mt {
          margin-top: ${s.polished.rem(5)};
        }

        .seperateline-mb {
          margin-bottom: ${s.polished.rem(1)};
        }

        .seperateline {
          border-top: 1px solid ${e.colors.palette.light[500]};
        }

        .widgets-title {
          font-weight: 600;
          font-size: ${s.polished.rem(14)};
          color: ${e.colors.palette.dark[300]};
        }

        .nodata {
          font-size: ${s.polished.rem(13)};
        }

        .list{
          .list-item{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border: 1px solid transparent;
            cursor: pointer;
            background-color: ${e.colors.palette.light[500]};
            user-select: none;
            font-size: ${s.polished.rem(13)};
          }
          .list-item:hover{
            background-color: ${e.colors.palette.light[600]};
          }
          .list-item:active.list-item:hover{
            background-color: ${e.colors.white};
          }
        }
      }
    `}render(){const e=this.getTargets(),t=e.frameWorkTargets,i=e.widgetTargets;return Object(s.jsx)("div",{className:"w-100",css:this.getStyle(this.props.theme)},Object(s.jsx)("div",{className:"w-100 target-choose-list"},Object(s.jsx)(c.SettingSection,null,Object(s.jsx)(c.SettingRow,null,Object(s.jsx)("div",{className:"w-100",style:{display:"none"}},Object(s.jsx)(a.TextInput,{className:"w-100",placeholder:this.props.formatMessage("chooseSearchTarget"),onChange:this.searchItems,value:""}),Object(s.jsx)(a.Icon,{className:"p-0 searchIcon",width:16,height:16,icon:Me})),Object(s.jsx)("div",{className:"w-100 list"},0===t.length&&0===i.length&&Object(s.jsx)("div",{className:"d-flex justify-content-center nodata text-break"},this.props.formatMessage("noTargetWidgets")),t.map((e,t)=>Object(s.jsx)("div",{className:"d-flex list-item pt-1 pb-1 pl-2 pr-2",key:t,onClick:()=>this.onSelectTarget(e)},Object(s.jsx)(a.Icon,{width:16,height:16,icon:Te}),Object(s.jsx)("div",{className:"ml-2"},this.props.formatMessage("action"+e.label)))),t.length>0&&0===i.length&&Object(s.jsx)("div",{className:"w-100"},Object(s.jsx)("div",{className:"w-100 seperateline-mt seperateline-mb",style:{position:"relative",height:"20px"}},Object(s.jsx)("div",{className:"seperateline w-100",style:{top:"10px",position:"absolute"}})),Object(s.jsx)("div",{className:"w-100 widgets-title"},this.props.formatMessage("targetWidgets")),Object(s.jsx)("div",{className:"d-flex mt-2 nodata text-break"},this.props.formatMessage("noTargetWidgets"))),i.length>0&&Object(s.jsx)("div",{className:"w-100"},t.length>0&&Object(s.jsx)("div",{className:"w-100 seperateline-mb",style:{position:"relative",height:"20px"}},Object(s.jsx)("div",{className:"seperateline w-100",style:{top:"10px",position:"absolute"}})),Object(s.jsx)("div",{className:"w-100 widgets-title"},this.props.formatMessage("targetWidgets")),i.map((e,t)=>{let i;const o=e.icon;return i=o&&o.svg?o:{svg:o},Object(s.jsx)("div",{className:"d-flex list-item mt-2 p-1 align-items-center",key:t,onClick:()=>this.onSelectTarget(e)},Object(s.jsx)(a.Icon,{width:16,height:16,icon:i.svg,color:i.properties&&i.properties.color}),Object(s.jsx)("div",{className:"ml-2"},e.label))})))))))}}const ke=s.themeUtils.withTheme(Ne);class De extends s.React.PureComponent{componentDidMount(){this._initInteractive()}_initInteractive(){if(this.ref){const e=this.ref;let t=null,i=null,s=null;this.dropZoneInteractable=Object(F.interact)(e).dropzone({accept:"."+this.props.dragItemName,overlap:"center",ondropmove:e=>{this.dragElement=e.relatedTarget,this.dropzoneElement=e.target;const t=this.dropzoneElement.getAttribute("data-item-index"),o=this.dragElement.getAttribute("data-item-index"),n=this.dropzoneElement.offsetTop+this.dropzoneElement.clientHeight/2;parseFloat(this.dragElement.getAttribute("move-relative-top"))+this.dragElement.clientHeight/2>n?(i=parseInt(o),s=parseInt(t)):(i=parseInt(o),s=parseInt(t)-1)},ondrop:e=>{this.props.onDragChanged&&this.props.onDragChanged(i,s)}}),this.interactable=Object(F.interact)(e).draggable({startAxis:"y",lockAxis:"y",inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{const{clientY0:t,target:i}=e,s=i.getBoundingClientRect(),o=i.clientHeight,n=t-s.top-o/2;i.style.webkitTransform="translate(0px, "+n+"px)",i.style.transform="translate(0px, "+n+"px)",i.setAttribute("start-y",n),i.setAttribute("start-relative-top",i.offsetTop)},onmove:e=>{const{clientY:i,clientY0:s,target:o}=e;let n=i-s+(parseFloat(o.getAttribute("start-y"))||0);t&&cancelAnimationFrame(t),n<0?-1*n>parseFloat(o.getAttribute("start-relative-top"))+.8*o.clientHeight&&(n=-1*(parseFloat(o.getAttribute("start-relative-top"))+.8*o.clientHeight)):n>o.parentElement.clientHeight-parseFloat(o.getAttribute("start-relative-top"))-.2*o.clientHeight&&(n=o.parentElement.clientHeight-parseFloat(o.getAttribute("start-relative-top"))-.2*o.clientHeight),o.setAttribute("move-relative-top",n+parseFloat(o.getAttribute("start-relative-top"))),t=requestAnimationFrame(()=>{o.style.webkitTransform="translate(0px, "+n+"px)",o.style.transform="translate(0px, "+n+"px)",t=null})},onend:e=>{const{target:i}=e;t&&cancelAnimationFrame(t),i.style.webkitTransform="translate(0px, 0px)",i.style.transform="translate(0px, 0px)"}})}}render(){const{className:e,style:t}=this.props,i=Object(s.classNames)(this.props.dragItemName,"drag-item",e);return s.React.createElement("div",{className:i,style:t,ref:e=>this.ref=e,"data-item-index":this.props.dragItemIndex,onMouseEnter:()=>{this.props.onMouseEnter(this.props.dragItemIndex)},onMouseLeave:()=>{this.props.onMouseLeave(this.props.dragItemIndex)}},this.props.children)}}const Re=i(66),ze=i(13),Pe=i(19),Le=i(25);function Be(e){let t=null;t=e.widgetId?Object(n.getAppConfigAction)().appConfig.widgets[e.widgetId]:{label:"Framework"};let i=e.actionName;if(t.manifest)if(t.manifest.i18nMessages[`_action_${e.actionName}_label`])i=t.manifest.i18nMessages[`_action_${e.actionName}_label`];else{const s=t.manifest.messageActions;if(s)for(let t=0;t<s.length;t++)if(s[t].name===e.actionName){i=s[t].label;break}}else if("Framework"===t.label){const t=n.AppMessageManager.getInstance().getAllActions();for(let s=0;s<t.length;s++)if(e.actionId.includes(t[s].id)){i=t[s].label;break}}return i}class Ee extends s.React.PureComponent{constructor(e){super(e),this.searchItems=e=>{},this.onEditAction=e=>{e.config&&this.props.onClickEditAction(this.props.message,e)},this.onRemoveAction=e=>{let t=this.props.message;const i=Object.assign([],t.actions),s=[];for(let t=0;t<i.length;t++)i[t].actionName==e.actionName&&s.push(i[t]);for(let s=0;s<i.length;s++)if(i[s].actionName===e.actionName&&i[s].widgetId===e.widgetId){const o=Object.assign([],i);o.splice(s,1),t=t.set("actions",o);const a=n.AppMessageManager.getInstance().getAction(e.widgetId,e.actionName);a&&a.onRemoveListen(t.messageType,t.widgetId);break}this.props.onMessageChanged(t)},this.onActionOrderChanged=(e,t)=>{if(e===t)return;let i=this.props.message;const s=[];if(e<t){for(let t=0;t<e;t++)s.push(i.actions[t]);for(let o=e+1;o<t+1;o++)s.push(i.actions[o]);s.push(i.actions[e]);for(let e=t+1;e<i.actions.length;e++)s.push(i.actions[e])}else{for(let e=0;e<t+1;e++)s.push(i.actions[e]);s.push(i.actions[e]);for(let o=t+1;o<e;o++)s.push(i.actions[o]);for(let t=e+1;t<i.actions.length;t++)s.push(i.actions[t])}i=i.set("actions",s),this.props.onMessageChanged(i)},this.getActionList=()=>Object(s.jsx)("div",{style:{position:"relative"}},this.props.message.actions.asMutable().map((e,t)=>{let i=null;return i=e.widgetId?Object(n.getAppConfigAction)().appConfig.widgets[e.widgetId]:{label:"Framework"},Object(s.jsx)(De,{dragItemIndex:t,dragItemName:this.props.message.messageType,style:{touchAction:"none",userSelect:"none"},key:t,onDragChanged:this.onActionOrderChanged,onMouseEnter:e=>{this.setState({itemSelected:!0,itemSelectedIndex:e})},onMouseLeave:e=>{this.setState({itemSelected:!1,itemSelectedIndex:void 0})}},Object(s.jsx)("div",{className:Object(s.classNames)("mb-2 mt-2 action-item",{"active-border":this.props.action&&this.props.action.actionId&&this.props.action.actionId===e.actionId}),css:this.getStyle()},Object(s.jsx)("div",{className:"d-flex w-100 justify-content-between align-items-center"},"Framework"===i.label&&Object(s.jsx)("div",{className:"widget-name text-truncate",title:this.props.formatMessage("action"+i.label)},this.props.formatMessage("action"+i.label)),"Framework"!==i.label&&Object(s.jsx)("div",{className:"widget-name text-truncate",title:i.label},i.label),this.state.itemSelected&&this.state.itemSelectedIndex===t&&Object(s.jsx)("div",{className:"d-flex"},Object(s.jsx)("div",{className:"drag-icon-con"},Object(s.jsx)(a.Icon,{className:"p-0 deleteIcon",width:11,height:11,icon:Le})),Object(s.jsx)("div",{className:"mr-2",onClick:()=>this.onEditAction(e),title:this.props.formatMessage("actionSettings")},(e.config||null===e.config)&&Object(s.jsx)(a.Icon,{className:"p-0 deleteIcon",width:12,height:12,icon:Pe}),void 0===e.config&&null),Object(s.jsx)("div",{onClick:()=>this.onRemoveAction(e),title:this.props.formatMessage("actionDelete")},Object(s.jsx)(a.Icon,{className:"p-0 deleteIcon",width:11,height:11,icon:Re})))),Object(s.jsx)("div",{className:"text-dark-600 pl-2 mt-2 d-flex align-items-center action-name"},Object(s.jsx)("div",{className:"w-100 text-truncate",title:Be(e)},Be(e)))))})),this.state={itemSelected:!1,itemSelectedIndex:void 0}}getStyle(){return s.css`
      & {
        position: relative
      }
      .drag-icon-con {
        position: absolute;
        top: ${s.polished.rem(23)};
        left: 0
      }
    `}render(){const e=Object(s.getMessageTypeLabel)(this.props.message.messageType,this.props.intl);return Object(s.jsx)("div",{className:"w-100"},Object(s.jsx)("div",{className:Object(s.classNames)("w-100 message-item message-item-container mb-3",this.props.isActive?"active-border":"")},Object(s.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-start mt-1"},Object(s.jsx)("h2",{className:"message-item-title",title:e},e),Object(s.jsx)("div",{onClick:()=>this.props.onMessageRemoved(this.props.message)},Object(s.jsx)(a.Icon,{className:"p-0 deleteIcon",width:14,height:14,icon:ze}))),this.props.message.actions&&this.props.message.actions.length>0&&this.getActionList(),Object(s.jsx)("div",{className:"mt-2 item-add-action text-truncate",onClick:()=>this.props.onClickAddAction(this.props.message)},"+ "+this.props.formatMessage("addAction"))))}}const We=Object(s.injectIntl)(Ee);class Ue extends s.React.PureComponent{constructor(e){super(e),this.getActionSettingClass=()=>{const e=this.getActionSettingClassUri();n.AppMessageManager.getInstance().loadActionSettingClass(this.props.action,e).then(e=>{this.setState({settingClass:e})})},this.onSettingChange=e=>{const t=e.actionId,i=e.config;this.state.cacheActionJson.config!==i&&t===this.state.cacheActionJson.actionId&&this.setState({cacheActionJson:this.state.cacheActionJson.set("config",i)},()=>{this.updateAction(!1)})},this.updateAction=e=>{let t=this.props.message;const i=Object.assign([],t.actions);let s=null;for(let e=0;e<i.length;e++)if(i[e].actionId===this.state.cacheActionJson.actionId&&i[e].widgetId===this.state.cacheActionJson.widgetId){i[e]=i[e].set("config",this.state.cacheActionJson.config),s=i[e];break}t=t.set("actions",i),this.props.onUpdateAction(t,s,e)},this.onDisableDoneBtn=e=>{this.setState({isDisableDoneBtn:e})},this.renderActionSetting=()=>{const e=this.state.settingClass;return e?s.React.createElement(s.ErrorBoundary,null,s.React.createElement(e,{actionId:this.state.cacheActionJson.actionId,widgetId:this.props.action.widgetId,messageWidgetId:this.props.widgetId,config:this.state.cacheActionJson.config?this.state.cacheActionJson.config:void 0,messageType:this.props.message.messageType,onSettingChange:this.onSettingChange,onDisableDoneBtn:this.onDisableDoneBtn})):s.React.createElement("div",null,this.props.formatMessage("actionSettingLoading"))},this.getActionSettingClassUri=()=>{const e=n.AppMessageManager.getInstance().getAllActions();let t=null,i=null;for(let i=0;i<e.length;i++)if(this.props.action.actionId.includes(e[i].id)){t=e[i];break}return t&&(i=n.AppMessageManager.getInstance().getActionSettingComponentUri(t,this.props.message.messageType,this.props.action.messageWidgetId)),i},this.state={settingClass:null,cacheActionJson:this.props.action,isDisableDoneBtn:!1}}componentDidMount(){this.getActionSettingClass()}componentDidUpdate(e){this.getActionSettingClass(),this.props.action!==e.action&&this.setState({cacheActionJson:this.props.action})}render(){const e=this.getActionSettingClassUri();return s.React.createElement("div",{className:"setting-container h-100",style:{overflowY:"auto"}},e?this.renderActionSetting():s.React.createElement("div",null,"  No widget"),s.React.createElement("div",{className:"w-100",style:{height:"50px"}}))}}class He extends s.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=s.React.createRef(),this.resetState=()=>{this.setState({currentTriggeredMessage:null,currentTriggeredTarget:null,currentTriggeredAction:null,panelRoutes:[]})},this.updateLocalState=(e,t)=>{const i=Object(n.getAppConfigAction)().appConfig;if(e.messageConfigs&&e.messageConfigs!==t.messageConfigs){let t=null,s=null,o=null;if(this.state.currentTriggeredMessage&&this.state.currentTriggeredMessage.messageType){const n=Object.keys(e.messageConfigs);for(let i=0;i<n.length;i++)if(e.messageConfigs[n[i]].messageType===this.state.currentTriggeredMessage.messageType&&e.messageConfigs[n[i]].widgetId===this.state.currentTriggeredMessage.widgetId){t=e.messageConfigs[n[i]];break}if(t&&this.state.currentTriggeredTarget)if(this.state.currentTriggeredTarget.id){const e=this.state.currentTriggeredTarget;if(this.state.panelRoutes&&this.state.panelRoutes.length>0&&this.state.panelRoutes[this.state.panelRoutes.length-1].pathType===be.ActionChoose)s=i.widgets[e.id];else for(let o=0;o<t.actions.length;o++)if(t.actions[o].widgetId===e.id){s=i.widgets[e.id];break}}else{const e=this.state.currentTriggeredTarget;if(this.state.panelRoutes&&this.state.panelRoutes.length>0&&this.state.panelRoutes[this.state.panelRoutes.length-1].pathType===be.ActionChoose)s=e;else for(let i=0;i<t.actions.length;i++)if(!t.actions[i].widgetId){s=e;break}}if(t&&this.state.currentTriggeredAction&&this.state.currentTriggeredAction.actionName)for(let e=0;e<t.actions.length;e++)if(t.actions[e].actionId===this.state.currentTriggeredAction.actionId&&t.actions[e].widgetId===this.state.currentTriggeredAction.widgetId&&t.actions[e].actionName===this.state.currentTriggeredAction.actionName){o=t.actions[e];break}}this.setState({currentTriggeredMessage:t,currentTriggeredTarget:s,currentTriggeredAction:o})}},this.getMessages=()=>{const e=this.props.messageConfigs,t=[],i=Object.keys(e);if(i.length>0)for(let s=0;s<i.length;s++)e[i[s]]&&e[i[s]].widgetId===this.props.widgetId&&t.push(e[i[s]]);return t},this.onShowMessageChooseList=()=>{const e=[{pathType:be.MessageChoose,message:null}];this.setState({panelRoutes:e})},this.onMessageRemoved=e=>{e.actions.forEach(t=>{const i=n.AppMessageManager.getInstance().getAction(t.widgetId,t.actionName);i&&i.onRemoveListen(e.messageType,e.widgetId)}),Object(n.getAppConfigAction)().removeMessage(e).exec()},this.onMessageChanged=e=>{this.setState({currentTriggeredMessage:e},()=>{Object(n.getAppConfigAction)().editMessage(e).exec()})},this.onShowTargetChooseList=e=>{const t=[{pathType:be.TargetChoose,message:e}];this.setState({currentTriggeredMessage:e,currentTriggeredAction:null,panelRoutes:t})},this.onShowActionSettingPage=(e,t)=>{const i=[{pathType:be.ActionSetting,message:e}];this.setState({currentTriggeredMessage:e,currentTriggeredAction:t,panelRoutes:i})},this.backForwardPanel=()=>{const e=Object.assign([],this.state.panelRoutes);if(e.splice(e.length-1,1),e[e.length-1].message){const t=e[e.length-1].message;this.setState({panelRoutes:e,currentTriggeredMessage:e[e.length-1].message},()=>{Object(n.getAppConfigAction)().editMessage(t).exec()})}else{const t=this.state.panelRoutes[this.state.panelRoutes.length-1].message;this.setState({panelRoutes:e,currentTriggeredMessage:null},()=>{Object(n.getAppConfigAction)().removeMessage(t).exec()})}},this.closePanel=()=>{this.setState({panelRoutes:[]})},this.onMessageChooseListSelected=e=>{const t=Object.assign([],this.state.panelRoutes);t.push({pathType:be.TargetChoose,message:e}),this.setState({currentTriggeredMessage:e,panelRoutes:t},()=>{Object(n.getAppConfigAction)().addMessage(e).exec()})},this.onTargetChooseListSelected=e=>{const t=Object.assign([],this.state.panelRoutes);t.push({pathType:be.ActionChoose,message:this.state.currentTriggeredMessage}),this.setState({currentTriggeredTarget:e,panelRoutes:t})},this.onActionChooseListSelected=(e,t)=>{if(null===t.config){const i=Object.assign([],this.state.panelRoutes);i.push({pathType:be.ActionSetting,message:e}),this.setState({currentTriggeredMessage:e,currentTriggeredAction:Object(s.Immutable)(t),panelRoutes:i},()=>{Object(n.getAppConfigAction)().editMessage(e).exec()})}else this.setState({currentTriggeredMessage:e,currentTriggeredAction:null,panelRoutes:[]},()=>{Object(n.getAppConfigAction)().editMessage(e).exec()})},this.onUpdateAction=(e,t,i)=>{i?this.setState({currentTriggeredMessage:e,currentTriggeredAction:t,panelRoutes:[]},()=>{Object(n.getAppConfigAction)().editMessage(e).exec()}):this.setState({currentTriggeredMessage:e,currentTriggeredAction:t},()=>{Object(n.getAppConfigAction)().editMessage(e).exec()})},this.modalStyle=s.css`
      position: absolute;
      top: 0;
      bottom: 0;
      width: 259px;
      height: 100%;
      padding-bottom: 1px;
      border-right: 1px solid ${this.props.theme.colors.white};
      border-bottom: 1px solid ${this.props.theme.colors.white};
    `,this.state={currentTriggeredMessage:null,currentTriggeredTarget:null,currentTriggeredAction:null,panelRoutes:[]}}componentDidUpdate(e){this.props.widgetId!==e.widgetId?this.resetState():this.updateLocalState(this.props,e)}render(){var e,t,o,n;const{formatMessage:l}=this.props,r=this.getMessages();return Object(s.jsx)("div",{className:"d-flex h-100 flex-column"},Object(s.jsx)("div",{ref:this.sidePopperTrigger},Object(s.jsx)(c.SettingSection,null,Object(s.jsx)(c.SettingRow,{flow:"wrap"},Object(s.jsx)("div",{className:"w-100 justify-content-center d-flex"},Object(s.jsx)(a.Button,{className:"w-100",type:"primary",onClick:this.onShowMessageChooseList},Object(s.jsx)("div",{className:"w-100 text-truncate"},l("addTrigger"))))),Object(s.jsx)(c.SettingRow,{flow:"wrap"},r.map((e,t)=>Object(s.jsx)(We,{key:t,message:e,onMessageRemoved:this.onMessageRemoved,isActive:e===this.state.currentTriggeredMessage&&this.state.panelRoutes.length>0,onMessageChanged:this.onMessageChanged,onClickAddAction:this.onShowTargetChooseList,onClickEditAction:this.onShowActionSettingPage,formatMessage:l,action:this.state.panelRoutes.length>0&&this.state.currentTriggeredAction}))),this.state.panelRoutes.length>0&&!this.props.pageId&&Object(s.jsx)("div",null,this.state.panelRoutes[this.state.panelRoutes.length-1].pathType===be.MessageChoose&&Object(s.jsx)(c.SidePopper,{isOpen:!0,position:"right",toggle:this.closePanel,trigger:null===(e=this.sidePopperTrigger)||void 0===e?void 0:e.current},Object(s.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.modalStyle},Object(s.jsx)(we,{formatMessage:l,Routes:this.state.panelRoutes,title:l("selectTrigger"),onBack:this.backForwardPanel,onClose:this.closePanel},Object(s.jsx)(ye,{widgetId:this.props.widgetId,onSelected:this.onMessageChooseListSelected,messages:r,formatMessage:l})))),this.state.panelRoutes[this.state.panelRoutes.length-1].pathType===be.TargetChoose&&this.state.currentTriggeredMessage&&Object(s.jsx)(c.SidePopper,{isOpen:!0,position:"right",toggle:this.closePanel,trigger:null===(t=this.sidePopperTrigger)||void 0===t?void 0:t.current},Object(s.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.modalStyle},Object(s.jsx)(we,{formatMessage:l,Routes:this.state.panelRoutes,title:l("selectTarget"),onBack:this.backForwardPanel,onClose:this.closePanel},Object(s.jsx)(ke,{onSelected:this.onTargetChooseListSelected,message:this.state.currentTriggeredMessage,formatMessage:l})))),this.state.panelRoutes[this.state.panelRoutes.length-1].pathType===be.ActionChoose&&this.state.currentTriggeredMessage&&this.state.currentTriggeredTarget&&Object(s.jsx)(c.SidePopper,{isOpen:!0,position:"right",toggle:this.closePanel,trigger:null===(o=this.sidePopperTrigger)||void 0===o?void 0:o.current},Object(s.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.modalStyle},Object(s.jsx)(we,{formatMessage:l,Routes:this.state.panelRoutes,title:l("selectAction"),onBack:this.backForwardPanel,onClose:this.closePanel},Object(s.jsx)(Ae,{widgetId:this.props.widgetId,onSelected:this.onActionChooseListSelected,message:this.state.currentTriggeredMessage,target:this.state.currentTriggeredTarget,formatMessage:l})))),this.state.panelRoutes[this.state.panelRoutes.length-1].pathType===be.ActionSetting&&this.state.currentTriggeredMessage&&this.state.currentTriggeredAction&&Object(s.jsx)(c.SidePopper,{isOpen:!0,position:"right",toggle:this.closePanel,trigger:null===(n=this.sidePopperTrigger)||void 0===n?void 0:n.current},Object(s.jsx)("div",{className:"bg-light-300 border-color-gray-400",css:this.modalStyle},Object(s.jsx)(we,{hideBackArrow:!0,formatMessage:l,Routes:this.state.panelRoutes,title:""+l("actionSet"),onBack:this.backForwardPanel,onClose:this.closePanel},Object(s.jsx)(Ue,{widgetId:this.props.widgetId,message:this.state.currentTriggeredMessage,action:this.state.currentTriggeredAction,onUpdateAction:this.onUpdateAction,formatMessage:l}))))))),0===r.length&&Object(s.jsx)("div",{className:"flex-grow-1 text-center no-trigger-tip position-relative"},Object(s.jsx)("div",{className:"position-absolute"},Object(s.jsx)(a.Icon,{size:48,icon:i(67)}),Object(s.jsx)("p",{className:"trigger-tip"},l("noTriggerTip",{ButtonString:l("addTrigger")})))))}}function Ve(e){const{enabled:t,isOpen:o,icon:n,label:l,onEnableToggled:r,onOpenToggled:c}=e;return Object(s.jsx)("div",{className:"d-flex align-items-center"},Object(s.jsx)(a.Checkbox,{checked:t,onChange:r}),Object(s.jsx)(a.Icon,{className:"ml-2",icon:n}),Object(s.jsx)("span",{className:"ml-2"},l),Object(s.jsx)(a.Button,{className:"ml-auto p-0",size:"sm",type:"tertiary",icon:!0,onClick:c,disabled:!t},Object(s.jsx)(a.Icon,{size:12,icon:i(17),rotate:o&&t?180:0})))}function Fe(e){const{widgetId:t,enabled:i,items:o,dataActions:l=Object(s.Immutable)({}),formatMessage:r,onEnableToggled:p}=e,[d,g]=s.React.useState(!0),h=o[0],u=s.React.useCallback(()=>{g(!d)},[d,g]),m=[];o.forEach(e=>{var t,i,s,o;(null===(o=null===(s=(null!==(i=null===(t=null==l?void 0:l[e.name])||void 0===t?void 0:t.actions)&&void 0!==i?i:{})[e.widgetId])||void 0===s?void 0:s.enabled)||void 0===o||o)&&m.push(e.widgetId)});const b=s.React.useCallback(e=>s.i18n.getIntl().formatMessage({id:"numSelected"},{number:e.length}),[]),f=s.React.useCallback(()=>o.map(e=>{var t,i,o;const r=null!==(o=(null!==(i=null===(t=null==l?void 0:l[e.name])||void 0===t?void 0:t.actions)&&void 0!==i?i:{})[e.widgetId])&&void 0!==o?o:Object(s.Immutable)({}),c=Object(n.getAppConfigAction)().appConfig.widgets[e.widgetId];return{value:e.widgetId,label:c.label,render:(t,i)=>{var o;return Object(s.jsx)("div",{className:"d-flex w-100 align-items-center"},Object(s.jsx)(a.Checkbox,{checked:null===(o=r.enabled)||void 0===o||o}),Object(s.jsx)(a.Icon,{icon:e.icon,className:"ml-2",size:16}),Object(s.jsx)("span",{className:"ml-2"},c.label))}}}),[o,l]),j=s.React.useCallback((e,i)=>{var o,a,r,c;const p=null===(c=null===(r=(null!==(a=null===(o=null==l?void 0:l[h.name])||void 0===o?void 0:o.actions)&&void 0!==a?a:Object(s.Immutable)({}))[i])||void 0===r?void 0:r.enabled)||void 0===c||c;Object(n.getAppConfigAction)().editWidgetProperty(t,"dataActions",l.setIn([h.name,"actions",i,"enabled"],!p)).exec()},[l,t,h.name]);return Object(s.jsx)(c.SettingSection,{title:Object(s.jsx)(Ve,{enabled:i,icon:h.icon,label:h.label,isOpen:d,onEnableToggled:p,onOpenToggled:u}),className:Object(s.classNames)({"pb-0":!d||!i}),css:s.css`
        border-bottom: ${d&&i?"1px solid var(--light-800)":"none !important"};
      `},Object(s.jsx)(a.Collapse,{isOpen:d&&i,className:"mt-0"},Object(s.jsx)(c.SettingRow,{flow:"wrap",label:r("selectWidgets"),className:"mt-2"},Object(s.jsx)(a.MultiSelect,{fluid:!0,items:Object(s.Immutable)(f()),onClickItem:j,values:Object(s.Immutable)(m),displayByValues:b})),e.children))}var $e=function(e,t,i,s){return new(i||(i=Promise))((function(o,n){function a(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}r((s=s.apply(e,t||[])).next())}))};class Ze extends s.React.PureComponent{constructor(e){super(e),this.state={settingClasses:{}}}componentDidMount(){const e=n.AppDataActionManager.getInstance().loadAllActionSettingClasses(),t=Object.keys(null!=e?e:{});if(t.length>0){const i=t.map(t=>$e(this,void 0,void 0,(function*(){return yield e[t]})));Promise.allSettled(i).then(e=>{const i={};e.forEach((e,s)=>{"fulfilled"===e.status?i[t[s]]=e.value:console.error(e.reason)}),this.setState({settingClasses:i})}).catch(e=>console.error(e))}}getAvailableActions(){var e,t,i;const o={},a=Object(n.getAppConfigAction)(),l=null===(t=null===(e=a.appConfig.widgets[this.props.widgetId].manifest)||void 0===e?void 0:e.properties)||void 0===t?void 0:t.excludeDataActions,r=s.DataActionManager.getInstance(),c=s.appConfigUtils.buildDataActionRelatedWidgetMap(a.appConfig),p=this.props.appMode===s.AppMode.Design,d=this.props.appMode===s.AppMode.Design;return Object.keys(null!==(i=a.appConfig.widgets)&&void 0!==i?i:{}).forEach(e=>{var t,i;if(e===this.props.widgetId)return;const n=a.appConfig.widgets[e];(null===(i=null===(t=n.manifest)||void 0===t?void 0:t.dataActions)||void 0===i?void 0:i.length)>0&&n.manifest.dataActions.forEach(t=>{var i,a;const g=`${null===(i=n.manifest)||void 0===i?void 0:i.name}.${t.name}`,h=s.appConfigUtils.isWidgetFromSameSource(c,this.props.widgetId,e,p,d);!r.isActionExcluded(g,l)&&h&&(o[t.name]||(o[t.name]=[]),o[t.name].push({name:t.name,icon:`${s.moduleLoader.resolveModuleFullPath("widgets/")}../${n.uri}dist/${t.icon}`,label:null!==(a=n.manifest.i18nMessages[`_action_${t.name}_label`])&&void 0!==a?a:t.label,widgetId:e,settingUri:`${n.uri}dist/${t.settingUri}`}))})}),o}updateActionStatus(e,t){var i;const{widgetId:o}=this.props,a=Object(n.getAppConfigAction)(),l=null!==(i=a.appConfig.widgets[o].dataActions)&&void 0!==i?i:Object(s.Immutable)({});a.editWidgetProperty(o,"dataActions",l.setIn([e,"enabled"],t)).exec()}createActionItemSetting(e){const t=this.state.settingClasses[e.settingUri];return t?Object(s.jsx)(c.SettingRow,null,Object(s.jsx)(t,{widgetId:this.props.widgetId,actionName:e.name,onSettingChange:t=>{this.updateActionItemSetting(e.name,t)}})):null}updateActionItemSetting(e,t){var i;const{widgetId:o}=this.props,a=Object(n.getAppConfigAction)(),l=null!==(i=a.appConfig.widgets[o].dataActions)&&void 0!==i?i:Object(s.Immutable)({});a.editWidgetProperty(o,"dataActions",l.setIn([e,"config"],t)).exec()}createActionItem(e,t,i){var o,n;const{dataActions:a}=this.props,l=null===(n=null===(o=null==a?void 0:a[e])||void 0===o?void 0:o.enabled)||void 0===n||n,r=t[0];return Object(s.jsx)(Fe,{key:i,widgetId:this.props.widgetId,enabled:l,items:t,dataActions:a,formatMessage:this.props.formatMessage,onEnableToggled:()=>this.updateActionStatus(e,!l)},l&&r.settingUri&&this.createActionItemSetting(r))}createExportNotes(e=!1){return Object(s.jsx)("div",{className:Object(s.classNames)("d-flex w-100",{"mt-3":e,"pl-5":e}),css:s.css`color: var(--dark-500); font-size: 13px;`},Object(s.jsx)(a.Icon,{icon:i(68),color:"var(--dark-50)"}),Object(s.jsx)("span",{className:"ml-2"},this.props.formatMessage("export")),Object(s.jsx)(a.Tooltip,{placement:"bottom",css:s.css`max-width: 300px; margin-left: auto;`,showArrow:!0,title:this.props.formatMessage("exportNotes")},Object(s.jsx)("div",{className:"ml-auto"},Object(s.jsx)(a.Icon,{className:"mr-1",size:12,color:"var(--dark-50)",icon:i(15)}))))}render(){const e=this.getAvailableActions(),t=Object.keys(e).sort();return 0===t.length?Object(s.jsx)("div",{className:"d-flex flex-column align-items-center flex-grow-1"},this.createExportNotes(),Object(s.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center flex-grow-1"},Object(s.jsx)(a.Icon,{size:42,color:"var(--dark-200)",icon:i(69)}),Object(s.jsx)("p",{className:"p-2",css:s.css`color: var(--dark-500); text-align: center;`},this.props.formatMessage("noDataAction")))):Object(s.jsx)(s.React.Fragment,null,Object(s.jsx)("span",{css:s.css`color: var(--dark-500); font-size: 13px; line-height: 1.1;`},this.props.formatMessage("chooseDataAction")),t.map((t,i)=>this.createActionItem(t,e[t],i)),this.createExportNotes(!0))}}const Ge=s.ReactRedux.connect((e,t)=>{var i,s,o,n;const a=null===(s=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.widgets[t.widgetId];return{dataActions:null==a?void 0:a.dataActions,sizeMode:null===(o=e.appStateInBuilder)||void 0===o?void 0:o.browserSizeMode,appMode:null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appRuntimeInfo.appMode}})(Ze),Je=i(15);class _e extends s.React.PureComponent{constructor(){super(...arguments),this.handleEnableDataActionChanged=e=>{const t=Object(n.getAppConfigAction)().appConfig.widgets[this.props.widgetId];Object(n.getAppConfigAction)().editWidget(t.set("enableDataAction",e.target.checked)).exec()}}getStyle(e){return s.css`
      .jimu-widget-setting--row {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .message-setting {

        .searchIcon {
          cursor: pointer;
          position: absolute;
          right: 1.2rem;
          margin-top: 0.3rem;
        }

        .listItem {
          cursor: pointer;
          padding: 5px 0px;
        }

        .listItem.active {
          background-color: ${e.colors.palette.primary[100]};
          border: 0;
        }

        .listItem:hover {
          background-color: ${s.polished.rgba(e.colors.palette.primary[100],.4)};
        }

        .active-border {
          border: 1px solid ${e.colors.palette.primary[700]} !important;
        }

        .message-item-container {
          background-color: ${e.colors.palette.light[500]};
          border: 1px solid ${e.colors.palette.light[500]};
        }

        .message-item {

          .widget-name {
            font-size: ${s.polished.rem(14)};
            font-weight: 400;
          }

          .action-name {
            font-size: ${s.polished.rem(13)};
            height: ${s.polished.rem(25)};
          }

          padding: 5px 12px 6px 12px;

          .action-item {
            padding: 5px 10px 10px 10px;
            border: 1px solid ${e.colors.palette.light[400]};
            background-color: ${e.colors.palette.light[400]};
          }

          .drag-item {
            &:hover {

              .action-item {
                border: 1px solid ${e.colors.palette.primary[700]};
              }

              .action-name {
                background-color: ${e.colors.palette.secondary[200]};
              }
            }
          }

          .message-item-title {
            font-size: ${s.polished.rem(14)};
            width: 190px;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
          }

          .deleteIcon-disable {
            opacity: .3;
          }

          .deleteIcon {
            cursor: pointer;
            opacity: .8;
          }

          .deleteIcon:hover {
            opacity: 1;
          }

          .item-add-action {
            cursor: pointer;
            color: ${e.colors.palette.primary[700]};

            &:hover {
              color: ${e.colors.palette.primary[800]};
            }
          }
        }

        .jimu-widget-setting--section {
          padding-left: 0;
          padding-right: 0;
        }
        .jimu-widget-setting--row {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .no-trigger-tip {
          &>div {
            top: 50%;
            transform: translateY(-50%);
            color: ${e.colors.palette.dark[200]};
          }
          p {
            color: ${e.colors.palette.dark[500]};
            font-size: ${s.polished.rem(14)};
            margin: ${s.polished.rem(16)} auto 0;
            line-height: ${s.polished.rem(19)};
            width: ${s.polished.rem(228)};
          }
        }
      }
    `}createMessageActionSetting(){const{pageId:e,widgetId:t,theme:i,messageConfigs:o}=this.props;return Object(s.jsx)(He,{pageId:e,widgetId:t,theme:i,messageConfigs:o,formatMessage:this.props.formatMessage})}createDataActionSetting(){const{enableDataAction:e,formatMessage:t}=this.props;return Object(s.jsx)(c.SettingSection,{className:"h-100 d-flex flex-column",title:Object(s.jsx)("div",{className:"w-100 d-flex justify-content-between align-items-center sub-header"},Object(s.jsx)("div",{className:"title d-flex",css:s.css`max-width: 80%; color: var(--dark-800)`},Object(s.jsx)("div",{className:"text-truncate",title:t("enableDataAction")},t("enableDataAction")),Object(s.jsx)(a.Tooltip,{placement:"left",css:s.css`max-width: 300px;`,showArrow:!0,title:t("dataActionTooltip")},Object(s.jsx)("div",{className:"ml-2"},Object(s.jsx)(a.Icon,{size:12,icon:Je})))),Object(s.jsx)(a.Switch,{checked:e,onChange:this.handleEnableDataActionChanged}))},e&&Object(s.jsx)(Ge,{widgetId:this.props.widgetId,formatMessage:this.props.formatMessage}))}render(){const{supportMessageAction:e,canConsumeDataAction:t,formatMessage:i}=this.props;return e&&!t?Object(s.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},Object(s.jsx)("div",{className:"jimu-widget message-setting px-3"},this.createMessageActionSetting())):!e&&t?Object(s.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},this.createDataActionSetting()):Object(s.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},Object(s.jsx)("div",{className:"jimu-widget message-setting"},Object(s.jsx)(a.Tabs,{type:"pills",fill:!0,className:"p-3 h-100",defaultValue:"message"},Object(s.jsx)(a.Tab,{id:"message",title:i("messageAction")},this.createMessageActionSetting()),Object(s.jsx)(a.Tab,{id:"data",title:i("dataAction")},this.createDataActionSetting()))))}}const Xe=s.ReactRedux.connect((e,t)=>{var i,s,o,n,a;const l=null===(s=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.widgets[t.widgetId];return{enableDataAction:null===(o=null==l?void 0:l.enableDataAction)||void 0===o||o,messageConfigs:null===(a=null===(n=e.appStateInBuilder)||void 0===n?void 0:n.appConfig)||void 0===a?void 0:a.messageConfigs}})(s.themeUtils.withTheme(_e));var Ke={pageSetting:"Page settings",dialogSetting:"Dialog settings",openWithWindow:"Open with Window",openWithWindowTip:"Only fixed windows are supported (except splash).",folderSetting:"Folder settings",linkSetting:"Link settings",noSelection:"No selection",customWidth:"Fixed width",fitToWindow:"Fit to window",fitToWidthOnly:"Full width",fitToContainer:"Fit to container",keepAspectRatio:"Keep aspect ratio",aspectRatio:"Aspect ratio",fixedHeight:"Fixed height",content:"Content",dynamicSettingStyle:"Style",action:"Action",donotSupportDataAction:"The widget does not support any data actions.",daynamicLayout:"Layout",displayMode:"Display mode",dynamicWidth:"Width",dynamicHeight:"Height",dynamicLoading:"Loading",heightMode:"Height mode",body:"Body",header:"Header",footer:"Footer",urlIsHere:"Type URL here.",sectionDelete:"Delete",noWidget:"No widget",maxWidth:"Max width",docked:"Docked",floatingScreen:"Floating",verticalSpacing:"Vertical spacing",triggerPosition:"Trigger position",upper:"Upper",lower:"Lower",dsDuplicateView:"Duplicate view",dsDuplicateScreen:"Duplicate screen",newView:"New view",noSettingOptions:"No setting options",contentWidth:"Content width",dsCustom:"Custom",dsAuto:"Auto",size:"Size",lockParent:"Kept within the parent container",margin:"Margin",noStyle:"This widget does not support style settings.",addTrigger:"Add a trigger",noTrigger:"The widget does not generate any triggers.",selectTrigger:"Select a trigger",selectTarget:"Select a target",selectAction:"Select an action",actionBack:"Back",actionSet:"Action settings",actionSettings:"Settings",actionDelete:"Delete",addAction:"Add action",targetWidgets:"Widgets",noMessage:"No message",noTargetWidgets:"No widget",messageAction:"Message action",dataAction:"Data action",noAction:"No action",chooseSearchTrigger:"Select or search a trigger",chooseSearchTarget:"Select or search a target",chooseSearchAction:"Select or search an action",actionDone:"Done",actionFramework:"Framework",actionSettingLoading:"Loading...",turnTo:"Switch to:",dsFill:"Fill",keepFixedOnScroll:"Stays at the top of the page when scrolling",titleBackground:"Background",titleOption:"Options",copyPage:"Copy",align:"Align",start:"Start",end:"End",placeholder:"Placeholder",mode:"Mode",fixedMode:"Fixed",anchoredMode:"Anchored",fixedModeTip:"Display in a fixed position.",anchoredModeTip:"Appears next to the linked widget.",splashDlgWarning:"Splash cannot be set to Anchored.",pageDlgWarning:"Window opened with pages cannot be set to Anchored.",keepLeft:"Keep left",keepRight:"Keep right",keepCenter:"Keep center",keepTop:"Keep top",keepBottom:"Keep bottom",closeOptions:"Close options",clickOutside:"Click outside to close Window",interaction:"Interaction",interactionStyle1:"Checkbox only",interactionStyle2:"Button in the same line",interactionStyle3:"Button in a different line",confirmation:"Confirmation",confirmationRequiredText:"Check to proceed",confirmationButtonTextHolder:"Required",closeIcon:"Close icon",closeIconPosition:"Position",closeIconPositionTL:"Top left",closeIconPositionTR:"Top right",preventDisplayAgain:'"Don\'t show this again" option',checkboxText:"Checkbox text",checkboxButtonText:"Button text",alwaysShow:"Always show this window",arrows:"Arrows",dots:"Dots",autoPlay:"Auto play",offset:"Offset",interval:"Interval (Second)",loop:"Loop",toggleViewList:"Toggle view list",spacing:"Spacing",scrollToSwitch:"Scroll to switch",dataActions:"Data actions",enableDataAction:"Enable data action",chooseDataAction:"Please choose the following data actions",selectWidgets:"Select widgets",dataActionTooltip:"Show data action button on the widget. The widget will not have any data actions, if no action is configured, or the data type does not support data action.",noDataAction:"To see data action options, please add a widget that provides data action onto the same page.",noTriggerTip:'Click the "{ButtonString}" button to add and configure actions.',exportNotes:"Note: Export is configured in the Data panel."},Ye=i(38),Qe=function(e,t,i,s){return new(i||(i=Promise))((function(o,n){function a(e){try{r(s.next(e))}catch(e){n(e)}}function l(e){try{r(s.throw(e))}catch(e){n(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,l)}r((s=s.apply(e,t||[])).next())}))};const{useState:qe,useEffect:et}=s.React,tt=i(27),it=i(28),st={svg:tt},ot={svg:it},nt=Object.assign({},Ke,a.defaultMessages,o,s.defaultMessages);const at=e=>{const[t,o]=qe("#"),{id:l,type:r,theme:c,intl:p,linkTitle:d}=e;return et(()=>{((e,t)=>Qe(void 0,void 0,void 0,(function*(){var i,o,a,l,r;const c=null===(o=null===(i=Object(s.getAppStore)().getState())||void 0===i?void 0:i.appStateInBuilder)||void 0===o?void 0:o.appConfig;let p;if("page"===t||"dialog"===t)return yield n.helpUtils.getBuildAppsHelpLink("add-a-"+t);if("screen"===t)return yield n.helpUtils.getBuildAppsHelpLink("add-screen-groups");if("section"===t)p="section";else if("placeholder"===t)p="placeholder";else if(p=null===(r=null===(l=null===(a=null==c?void 0:c.widgets)||void 0===a?void 0:a[e])||void 0===l?void 0:l.manifest)||void 0===r?void 0:r.name,!p)return yield Promise.resolve(null);return yield n.helpUtils.getWidgetHelpLink(p)})))(l,r).then(e=>{o(e)})},[l,r]),Object(s.jsx)(a.Link,{themeStyle:{icon:!0,type:"link"},to:t,target:"_blank",title:d,css:s.css`
        margin-right: ${s.polished.rem(-9)};
        padding: 0 !important;
        .jimu-icon {
          margin-right: 0;
          color: ${c.colors.palette.dark[400]};
        }
        :hover {
          .jimu-icon{
            color: ${c.colors.black};
          }
        }
      `},Object(s.jsx)(a.Icon,{icon:i(70),autoFlip:!s.i18n.isSameLanguage(null==p?void 0:p.locale,"he"),size:16}))},lt=e=>{var t;const{hideColorSelector:o,headTitle:n,icon:l,customIcon:r,id:c,type:p,needIconFlip:d,theme:g,intl:h,handleIconChange:u,handleTitleInputBlur:m,handleKeydown:b,focusEditTitle:f,headTitleInput:j}=e,[v,x]=qe("");let w;const I=[{svg:r}];w=(null===(t=l)||void 0===t?void 0:t.svg)?l:{svg:l},et(()=>{x(n)},[n]);return Object(s.jsx)("div",{className:"jimu-widget-setting--header d-flex align-items-center justify-content-between"},Object(s.jsx)("div",{className:"d-flex align-items-center"},Object(s.jsx)(Ye.IconPicker,{previewOptions:{autoFlip:d,color:!0},configurableOption:o?"none":"color",className:"flex-none",icon:w,customIcons:I,onChange:u,hideRemove:!0}),Object(s.jsx)("div",{className:"d-flex position-relative"},Object(s.jsx)("span",{className:"size-placeholder"},v||""),Object(s.jsx)("div",{className:"position-absolute d-flex header-title-input-con"},Object(s.jsx)(a.TextInput,{className:"header-title-input h5",ref:j,title:v,value:v||"",onChange:e=>x(e.target.value),onBlur:e=>m(e,c,p),onKeyDown:b}),Object(s.jsx)(a.Button,{type:"tertiary",size:"sm",className:"toollist-edit-icon",onClick:f},Object(s.jsx)(a.Icon,{icon:i(29),width:16,height:16}))))),Object(s.jsx)(at,{id:c,type:p,theme:g,intl:h,linkTitle:(e=>h.formatMessage({id:e,defaultMessage:nt[e]}))("help")}))};class rt extends s.React.PureComponent{constructor(e){super(e),this.spanText=s.React.createRef(),this.headTitleInput=s.React.createRef(),this.getCss=()=>{var e,t,i,o,n,a;const{theme:l}=this.props;return s.css`
      height: 100%;
      overflow: hidden;
      overflow-x: hidden;

      .jimu-widget-setting {
        overflow-x: hidden;
      }
      .widget-setting-tab{
        position: absolute;
        background-color: ${l.body.bg};
      }

      .widget-setting, .section-setting {
        margin-top: calc(16px - ${null!==(i=null===(t=null===(e=null==l?void 0:l.components)||void 0===e?void 0:e.navbar)||void 0===t?void 0:t.paddingY)&&void 0!==i?i:0});
        height: calc(100% - ${s.polished.rem(18)} + ${null!==(a=null===(n=null===(o=null==l?void 0:l.components)||void 0===o?void 0:o.navbar)||void 0===n?void 0:n.paddingY)&&void 0!==a?a:0});
      }

      .jimu-widget-setting--row {
        label {
          user-select: none;
        }
      }
      .jimu-widget-setting--section-header {
        user-select: none;
      }
      .tab-content {
        height: calc(100% - ${s.polished.rem(40)});
        overflow: auto;
        overflow-x: hidden;
      }
      .tab-pane{
        width: 100%;
      }

      .tab-title-item{
        width: 30%;
      }

      .edit-label-input {
        width: 50%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .title-span-hide {
        &.h5 {
          font-weight: ${l.typography.weights.extraBold};
          font-size: 1rem;
        }
      }

      .header-title-input {
        margin-left: ${s.polished.rem(4)};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background-color: transparent;
        &.h5 {
          input {
            font-weight: ${l.typography.weights.bold};
            font-size: ${s.polished.rem(16)};
          }
        }
        .input-wrapper {
          height: 100%;
          padding: 0;
          input {
            border: 1px solid transparent;
            height: 100%;
            min-width: ${s.polished.rem(10)};
            max-width: ${s.polished.rem(100)};
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: ${l.colors.palette.dark[600]};
            background-color: transparent;
          }
        }
        &:not(.has-focus) .input-wrapper {
          background-color: transparent;
          border-color: transparent;
        }
      }

      .header-title-input-con {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin-left: ${s.polished.rem(4)};
        svg {
          margin: 0;
        }
        button {
          color: ${l.colors.palette.dark[600]};
          padding-left: ${s.polished.rem(2)};
        }
      }
      .size-placeholder {
        height: ${s.polished.rem(26)};
        display: block;
        opacity: 0;
        padding-left: ${s.polished.rem(8)};
        padding-right: ${s.polished.rem(34)};
        font-size: ${s.polished.rem(16)};
        overflow: hidden;
        max-width: ${s.polished.rem(175)};
      }

      .setting-container {
        overflow-y: auto;
        overflow-x: auto;
        height: 100%;
      }

      .help-btn {
        color: ${l.colors.palette.light[800]};
      }
      .help-btn:hover {
        color: ${l.colors.black};
      }
    `},this.onLayoutItemSettingChanged=(e,t)=>{Object(n.getAppConfigAction)().editLayoutItemSetting(e,t).exec()},this.onLayoutItemStyleChanged=(e,t)=>{const i=Object(n.getAppConfigAction)(),{layoutId:o,layoutItemId:a}=e,l=i.appConfig.layouts[o].content[a];l.type===s.LayoutItemType.Widget?i.editWidgetProperty(l.widgetId,"style",t).exec():l.type===s.LayoutItemType.Section&&i.editSectionProperty(l.sectionId,"style",t).exec()},this.onLayoutPosChanged=(e,t)=>{Object(n.getAppConfigAction)().editLayoutItemBBox(e,t).exec()},this.getPageType=(e,t)=>{for(const i in t){const s=t[i];if(s.id===e)return s}return{}},this.formatMessage=(e,t)=>{const i=Object.assign({},Ke,a.defaultMessages,o,s.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.handleTitleInputBlur=(e,t,i)=>{this.editTitle(t,e.target.value,i)},this.editTitle=(e,t,i)=>{const s=Object(n.getAppConfigAction)();(t=null==t?void 0:t.trim())?"widget"===i||"block"===i?s.editWidgetProperty(e,"label",t).exec():"section"===i?s.editSectionProperty(e,"label",t).exec():"screen"===i?s.editScreenGroupProperty(e,"label",t).exec():"page"===i?s.editPageProperty(e,"label",t).exec():"dialog"===i&&s.editDialogProperty(e,"label",t).exec():"widget"===i?t=s.appConfig.widgets[e].label:"section"===i?t=s.appConfig.sections[e].label:"screen"===i?t=s.appConfig.screenGroups[e].label:"page"===i&&(t=s.appConfig.pages[e].label)},this.handleKeydown=e=>{13===e.keyCode&&this.headTitleInput.current&&this.headTitleInput.current.blur()},this.handleIconChange=e=>{const t=this.getDisplay(),{selection:i,currentPageId:s,currentDialogId:o}=this.props,a=Object(n.getAppConfigAction)(),l=a.appConfig;if(t.page)a.editPageProperty(s,"icon",e).exec();else if(t.dialog)a.editDialogProperty(o,"icon",e).exec();else if(t.widget){const t=m.searchUtils.findLayoutItem(l,i);t&&a.editWidgetProperty(t.widgetId,"icon",e).exec()}else if(t.section){const t=m.searchUtils.findLayoutItem(l,i);t&&a.editSectionProperty(t.sectionId,"icon",e).exec()}else if(t.screen){const t=m.searchUtils.findLayoutItem(l,i);t&&a.editScreenGroupProperty(t.screenGroupId,"icon",e).exec()}},this.focusEditTitle=e=>{this.headTitleInput.current&&(this.headTitleInput.current.select(),this.headTitleInput.current.focus())},this.getDisplay=()=>{var e;const{selection:t}=this.props,i=this.getAppConfig(),o={widget:!1,section:!1,screen:!1,layoutItem:!1,placeholder:!1,page:!1,link:!1,folder:!1,dialog:!1,noSelection:!1};if(t){const n=m.searchUtils.findLayoutItem(i,t);n?n.type===s.LayoutItemType.Widget?n.widgetId?o.widget=!0:(o.layoutItem=!0,o.placeholder=!0):n.type===s.LayoutItemType.Section&&!1!==(null===(e=t.additionalInfo)||void 0===e?void 0:e.commonSection)?o.section=!0:n.type===s.LayoutItemType.ScreenGroup?o.screen=!0:o.layoutItem=!0:o.noSelection=!0}else this.props.currentDialogId?o.dialog=!0:this.props.currentPageId?(o.page=!0,o.link=this.getPageType(this.props.currentPageId,i.pages).type===s.PageType.Link,o.folder=this.getPageType(this.props.currentPageId,i.pages).type===s.PageType.Folder):o.noSelection=!0;return o};const t={titleText:"",headTitleText:"",helpLink:""},{selection:i,appConfig:l,currentPageId:r}=e;if(i){const e=m.searchUtils.findLayoutItem(l,i);e&&(e.type===s.LayoutItemType.Widget?e.widgetId&&(t.headTitleText=l.widgets[e.widgetId].label):e.type===s.LayoutItemType.Section&&(t.headTitleText=l.sections[e.sectionId].label))}else r&&(t.headTitleText=l.pages[r].label);this.state=t}getAppConfig(){return Object(s.getAppStore)().getState().appStateInBuilder&&Object(s.getAppStore)().getState().appStateInBuilder.appConfig}getDefaultPageIcon(e){return n.utils.getDefaultTocPageIcon(e).toString()}getDefaultDialogIcon(){return n.utils.getDefaultTocDialogIcon().toString()}getDefaultWidgetIcon(e){return s.urlUtils.getAbsoluteRootUrl()+e.uri+"/icon.svg"}onTabChange(e,t,i){t(s.appActions.widgetStatePropChange(i,"settingPanelChange",e))}renderWidgetSettings(e,t,i,o,n){var l,c,p,d,g;let h;const{currentSelectionIcon:u,currentSelectionTitle:b,dispatch:f}=this.props,j=null==i?void 0:i.layouts[null==o?void 0:o.layoutId],v=m.searchUtils.findLayoutItem(i,o),x=i.widgets[v.widgetId],w=x.manifest,I=(null===(l=null==w?void 0:w.publishMessages)||void 0===l?void 0:l.length)>0,S=null!==(p=null===(c=null==w?void 0:w.properties)||void 0===c?void 0:c.canConsumeDataAction)&&void 0!==p&&p;return h=(null==w?void 0:w.properties.hasConfig)&&(null==w?void 0:w.properties.hasConfigInSettingPage)?Object(s.jsx)(a.Tabs,{type:"underline",key:"widget-setting",className:"widget-setting flex-grow-1 w-100",fill:!0,defaultValue:"content",onChange:e=>this.onTabChange(e,f,x.id)},Object(s.jsx)(a.Tab,{id:"content",title:this.formatMessage("content"),className:"tab-title-item"},Object(s.jsx)(r,{formatMessage:this.formatMessage,dispatch:this.props.dispatch,widgetId:v.widgetId,widgetsSettingRuntimeInfo:this.props.widgetsSettingRuntimeInfo})),Object(s.jsx)(a.Tab,{id:"dynamicSettingStyle",title:this.formatMessage("dynamicSettingStyle"),className:"tab-title-item"},Object(s.jsx)("div",{className:"setting-container"},Object(s.jsx)(fe,{layoutId:o.layoutId,layoutItemId:o.layoutItemId,formatMessage:this.formatMessage,onSettingChanged:this.onLayoutItemSettingChanged,onStyleChange:this.onLayoutItemStyleChanged,onPosChanged:this.onLayoutPosChanged}))),(I||S)&&Object(s.jsx)(a.Tab,{id:"action",title:this.formatMessage("action"),className:"tab-title-item"},Object(s.jsx)("div",{className:"setting-container"},Object(s.jsx)(Xe,{widgetId:v.widgetId,supportMessageAction:I,canConsumeDataAction:S,formatMessage:this.formatMessage,pageId:s.urlUtils.getAppIdPageIdFromUrl().pageId})))):Object(s.jsx)("div",{className:"h-100 pt-3"},Object(s.jsx)(fe,{layoutId:o.layoutId,layoutItemId:o.layoutItemId,formatMessage:this.formatMessage,isSingle:!0,onSettingChanged:this.onLayoutItemSettingChanged,onStyleChange:this.onLayoutItemStyleChanged,onPosChanged:this.onLayoutPosChanged})),h=Object(s.jsx)("div",{css:n&&s.css`z-index: -1`,className:"w-100 h-100 d-flex flex-column widget-setting-tab","data-is-parent":!!n||void 0},Object(s.jsx)(lt,{headTitle:b,icon:u,customIcon:this.getDefaultWidgetIcon(x),id:x.id,type:j.type===s.LayoutType.FlowLayout?"block":"widget",needIconFlip:null===(g=null===(d=null==x?void 0:x.manifest)||void 0===d?void 0:d.properties)||void 0===g?void 0:g.flipIcon,theme:e,intl:t,handleIconChange:this.handleIconChange,handleTitleInputBlur:this.handleTitleInputBlur,handleKeydown:this.handleKeydown,focusEditTitle:this.focusEditTitle,headTitleInput:this.headTitleInput}),Object(s.jsx)("div",{style:{flex:1,overflow:"auto"}},h)),h}render(){var e;const t=this.getAppConfig(),{selection:i,browserSizeMode:o,theme:l,intl:r,currentSelectionIcon:c,currentSelectionTitle:p}=this.props;if(!t)return Object(s.jsx)("div",{css:this.getCss(),className:"builder-dynamic-setting bg-light-300"},Object(s.jsx)(v,{dispatch:this.props.dispatch,formatMessage:this.formatMessage,theme:this.props.theme,pageId:"empty",browserSizeMode:this.props.browserSizeMode,appTheme:this.props.appTheme}));const d=this.getDisplay();let g;if(d.widget){const n=m.searchUtils.findLayoutItem(t,i);if(t.widgets[null==n?void 0:n.widgetId]){const a=n.widgetId,c=m.searchUtils.getParentWidgetIdOfContent(t,a,s.LayoutItemType.Widget,o),p=t.widgets[c];if(c&&(null===(e=null==p?void 0:p.manifest)||void 0===e?void 0:e.widgetType)!==s.WidgetType.Layout){const e=m.searchUtils.getLayoutInfosHoldcontent(t,s.LayoutItemType.Widget,c,o)[0];g=Object(s.jsx)(s.React.Fragment,null,e&&this.renderWidgetSettings(l,r,t,e,!0),this.renderWidgetSettings(l,r,t,i))}else g=Object(s.jsx)(s.React.Fragment,null,this.renderWidgetSettings(l,r,t,i))}else g=Object(s.jsx)("div",null,this.formatMessage("noSelection"))}if(d.layoutItem){const e=d.placeholder?this.formatMessage("placeholder"):this.formatMessage("daynamicLayout");g=Object(s.jsx)("div",{className:"w-100 h-100 d-flex flex-column"},Object(s.jsx)("h4",{className:"jimu-widget-setting--header d-flex align-items-center justify-content-between"},Object(s.jsx)("div",null,e),d.placeholder&&Object(s.jsx)(at,{type:"placeholder",theme:l,intl:r,linkTitle:this.formatMessage("help")})),Object(s.jsx)("div",{className:"flex-grow-1 setting-container pt-3"},Object(s.jsx)(fe,{layoutId:i.layoutId,layoutItemId:i.layoutItemId,formatMessage:this.formatMessage,isSingle:!0,onSettingChanged:this.onLayoutItemSettingChanged,onStyleChange:this.onLayoutItemStyleChanged,onPosChanged:this.onLayoutPosChanged})))}if(d.section){const e=m.searchUtils.findLayoutItem(t,i),o=t.sections[e.sectionId];g=Object(s.jsx)(a.Tabs,{type:"underline",className:"flex-grow-1 section-setting",fill:!0,defaultValue:"content"},Object(s.jsx)(a.Tab,{id:"content",key:"section-setting",title:this.formatMessage("content")},Object(s.jsx)(ee,{intl:this.props.intl,formatMessage:this.formatMessage,theme:this.props.theme,appTheme:this.props.appTheme,dispatch:this.props.dispatch,sectionId:o.id})),Object(s.jsx)(a.Tab,{id:"dynamicSettingStyle",title:this.formatMessage("dynamicSettingStyle")},Object(s.jsx)("div",{className:"h-100 setting-container"},Object(s.jsx)(fe,{layoutId:i.layoutId,layoutItemId:i.layoutItemId,formatMessage:this.formatMessage,onSettingChanged:this.onLayoutItemSettingChanged,onStyleChange:this.onLayoutItemStyleChanged,onPosChanged:this.onLayoutPosChanged})))),g=Object(s.jsx)("div",{className:"w-100 h-100 d-flex flex-column"},Object(s.jsx)(lt,{headTitle:p,icon:c,customIcon:n.utils.getDefaultSectionIcon().toString(),id:o.id,type:"section",theme:l,intl:r,handleIconChange:this.handleIconChange,handleTitleInputBlur:this.handleTitleInputBlur,handleKeydown:this.handleKeydown,focusEditTitle:this.focusEditTitle,headTitleInput:this.headTitleInput}),Object(s.jsx)("div",{className:"h-100 setting-container"},g))}if(d.screen){const e=m.searchUtils.findLayoutItem(t,i);g=Object(s.jsx)(ue,{intl:this.props.intl,formatMessage:this.formatMessage,theme:this.props.theme,dispatch:this.props.dispatch,screenGroupId:e.screenGroupId}),g=Object(s.jsx)("div",{className:"w-100 h-100 d-flex flex-column"},Object(s.jsx)(lt,{headTitle:p,icon:c,customIcon:n.utils.getDefaultSectionIcon().toString(),id:e.screenGroupId,type:"screen",theme:l,intl:r,handleIconChange:this.handleIconChange,handleTitleInputBlur:this.handleTitleInputBlur,handleKeydown:this.handleKeydown,focusEditTitle:this.focusEditTitle,headTitleInput:this.headTitleInput}),Object(s.jsx)("div",{className:"h-100 setting-container"},g))}if(d.page){g=Object(s.jsx)(v,{dispatch:this.props.dispatch,formatMessage:this.formatMessage,pageId:this.props.currentPageId,pageMode:this.props.pageMode,maxWidth:this.props.maxPageWidth,browserSizeMode:this.props.browserSizeMode,theme:this.props.theme,appTheme:this.props.appTheme}),d.link?g=Object(s.jsx)(W,{dispatch:this.props.dispatch,appConfig:t,formatMessage:this.formatMessage,pageId:this.props.currentPageId}):d.folder&&(g=Object(s.jsx)(V,{dispatch:this.props.dispatch,appConfig:t,formatMessage:this.formatMessage,pageId:this.props.currentPageId}));const{currentPageId:e}=this.props,i=t.pages[e];g=Object(s.jsx)("div",{className:"w-100 h-100 d-flex flex-column"},Object(s.jsx)(lt,{hideColorSelector:!0,headTitle:p,icon:c,customIcon:this.getDefaultPageIcon(i),id:i.id,type:"page",theme:l,intl:r,handleIconChange:this.handleIconChange,handleTitleInputBlur:this.handleTitleInputBlur,handleKeydown:this.handleKeydown,focusEditTitle:this.focusEditTitle,headTitleInput:this.headTitleInput}),Object(s.jsx)("div",{className:"h-100 setting-container"},g))}if(d.dialog){const{currentDialogId:e}=this.props;g=Object(s.jsx)(R,{dispatch:this.props.dispatch,formatMessage:this.formatMessage,dialogId:e,browserSizeMode:this.props.browserSizeMode,theme:this.props.theme,appTheme:this.props.appTheme});const i=t.dialogs[e];g=Object(s.jsx)("div",{className:"w-100 h-100 d-flex flex-column"},Object(s.jsx)(lt,{headTitle:p,icon:c,customIcon:this.getDefaultDialogIcon(),id:i.id,type:"dialog",theme:l,intl:r,handleIconChange:this.handleIconChange,handleTitleInputBlur:this.handleTitleInputBlur,handleKeydown:this.handleKeydown,focusEditTitle:this.focusEditTitle,headTitleInput:this.headTitleInput}),Object(s.jsx)("div",{className:"h-100 setting-container"},g))}return d.noSelection&&(g=Object(s.jsx)("div",{className:"h-100"},this.formatMessage("noSelection"))),Object(s.jsx)("div",{css:this.getCss(),className:"builder-dynamic-setting bg-light-300"},Object(s.jsx)("span",{ref:this.spanText,className:"title-span-hide px-1 border h5",style:{width:"auto",position:"absolute",opacity:0,whiteSpace:"nowrap",zIndex:-1}},this.state.headTitleText||""),g)}}rt.mapExtraStateProps=(e,t)=>{var i,o,a,l,r,c,p,d;const g=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo.currentPageId,h=null===(o=e.appStateInBuilder)||void 0===o?void 0:o.appRuntimeInfo.currentDialogId,u=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig;let b,f;g&&(b=null===(r=null===(l=null==u?void 0:u.pages)||void 0===l?void 0:l[g])||void 0===r?void 0:r.mode,f=null===(p=null===(c=null==u?void 0:u.pages)||void 0===c?void 0:c[g])||void 0===p?void 0:p.maxWidth);const j=null===(d=e.appStateInBuilder)||void 0===d?void 0:d.appRuntimeInfo.selection,{icon:v,title:x}=function(e,t,i,o){var a,l;let r,c;if(e){const t=m.searchUtils.findLayoutItem(o,e);if(t)if(t.type===s.LayoutItemType.Widget){if(t.widgetId){const i=o.widgets[t.widgetId],n=o.layouts[e.layoutId];c=i&&i.label,r=n.type!==s.LayoutType.FlowLayout||(null===(a=t.setting)||void 0===a?void 0:a.isFloating)?i&&i.icon:"string"!=typeof(null==i?void 0:i.icon)&&(null==i?void 0:i.icon)||st}}else if(t.type===s.LayoutItemType.Section){if(t.sectionId){const e=o.sections[t.sectionId];c=e&&e.label,r=e&&e.icon||n.utils.getDefaultSectionIcon().toString()}}else if(t.type===s.LayoutItemType.ScreenGroup&&t.screenGroupId){const e=o.screenGroups[t.screenGroupId];c=null==e?void 0:e.label,r=null!==(l=null==e?void 0:e.icon)&&void 0!==l?l:ot}}else if(o)if(t){const e=o.dialogs[t];e&&(c=e.label,r=e.icon||n.utils.getDefaultTocDialogIcon())}else if(i){const e=o.pages[i];e&&(c=e.label,r=e.icon||n.utils.getDefaultTocPageIcon(e))}return{icon:r,title:c}}(j,h,g,u);return{currentPageId:g,pageMode:b,maxPageWidth:f,widgetsSettingRuntimeInfo:e.builder.widgetsSettingRuntimeInfo,currentDialogId:h,selection:j,browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode,appTheme:e.appStateInBuilder&&e.appStateInBuilder.theme,currentSelectionIcon:v,currentSelectionTitle:x}}}]))}}}));
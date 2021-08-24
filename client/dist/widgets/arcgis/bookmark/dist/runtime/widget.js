System.register(["jimu-core","jimu-ui","jimu-arcgis","jimu-layouts/layout-runtime","jimu-core/react"],(function(e){var t,i,a,o,s;return{setters:[function(e){t=e},function(e){i=e},function(e){a=e},function(e){o=e},function(e){s=e}],execute:function(){e(function(e){var t={};function i(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=512)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},119:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 32"><path d="M10.942 1.099c2.56-.213 5.227.64 7.36 2.133 3.2 2.24 5.12 6.187 4.587 10.027-.32 2.24-1.28 4.373-2.347 6.4-2.027 3.733-4.693 7.04-7.467 10.24-.32.32-.533.64-.853.853-.427.427-1.173.32-1.493-.107-2.027-2.24-3.947-4.587-5.653-7.04-1.493-2.133-2.88-4.373-3.84-6.827-.533-1.28-.96-2.667-.96-4.053-.107-2.667.747-5.44 2.56-7.573 1.92-2.453 4.907-3.84 8.107-4.053zM9.556 3.232c-2.027.427-3.947 1.6-5.227 3.2a8.366 8.366 0 00-2.027 5.44c0 1.813.64 3.52 1.28 5.12a33.403 33.403 0 003.84 6.187 48.471 48.471 0 004.16 5.12c2.56-2.88 5.013-5.973 6.933-9.387.96-1.707 1.813-3.413 2.24-5.333s0-3.84-.853-5.547c-.96-1.813-2.56-3.307-4.373-4.16-1.92-.853-4.053-.96-5.973-.64zm1.493 2.347c1.6-.213 3.2.32 4.373 1.387 1.173.96 1.813 2.453 1.92 3.947s-.533 2.88-1.493 3.947c-1.067 1.173-2.56 1.813-4.16 1.813-1.493 0-3.093-.64-4.16-1.707-.96-.853-1.6-2.347-1.6-3.733 0-1.493.533-2.987 1.6-3.947.96-1.067 2.133-1.6 3.52-1.707zm-.213 2.133c-1.28.213-2.347 1.28-2.667 2.56-.32 1.173 0 2.347.747 3.2 1.173 1.28 3.2 1.6 4.693.64 1.387-.853 2.027-2.667 1.387-4.16-.533-1.707-2.453-2.667-4.16-2.24z"></path></svg>'},120:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M3.5 1h8a.5.5 0 110 1h-8a.5.5 0 010-1zM1 2.5a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 2a1 1 0 110 2 1 1 0 010-2zm10.5.5a.5.5 0 110 1h-8a.5.5 0 010-1h8zm0-4a.5.5 0 110 1h-8a.5.5 0 010-1h8z" fill="#000" fill-rule="nonzero"></path></g></svg>'},210:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-3.2 23.2V8.8l9.6 7.2-9.6 7.2z"></path></svg>'},211:function(e,t){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16.629C8 17.386 7.463 18 6.8 18H4.2c-.663 0-1.2-.614-1.2-1.371V3.37C3 2.614 3.537 2 4.2 2h2.6C7.463 2 8 2.614 8 3.371V16.63zM18 3.37C18 2.614 17.463 2 16.8 2h-2.6c-.663 0-1.2.614-1.2 1.371V16.63c0 .757.537 1.371 1.2 1.371h2.6c.663 0 1.2-.614 1.2-1.371V3.37z" fill="#FFF" fill-rule="nonzero"></path></svg>'},212:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB2ZXJzaW9uPSIxLjEiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjAgKDg4MTAzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8dGl0bGU+aWNvbi1pbWFnZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IkJhc2ljcy1TcGVjaWZpY2F0aW9uIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IlBsYWNlaG9sZGVycyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2Ny4wMDAwMDAsIC02NTcuMDAwMDAwKSIgZmlsbD0iI0M1QzVDNSI+DQogICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjcuMDAwMDAwLCA2NTcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3My43MTQyODYsODkgTDI1NiwxOTggTDAsMTk4IEw2NCwxMTYuMjUgTDEwOS43MTQyODYsMTcwLjc1IEwxNzMuNzE0Mjg2LDg5IFogTTk5LDU4IEMxMDcuODM2NTU2LDU4IDExNSw2NS4xNjM0NDQgMTE1LDc0IEMxMTUsODIuODM2NTU2IDEwNy44MzY1NTYsOTAgOTksOTAgQzkwLjE2MzQ0NCw5MCA4Myw4Mi44MzY1NTYgODMsNzQgQzgzLDY1LjE2MzQ0NCA5MC4xNjM0NDQsNTggOTksNTggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlLUNvcHkiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},22:function(e,t){e.exports=s},4:function(e,t){e.exports=a},512:function(e,t,i){"use strict";i.r(t),i.d(t,"Widget",(function(){return j}));var a=i(0),o=i(1),s=i(6),r={_widgetLabel:"Bookmark",_widgetDescription:"A widget identify specific geographic locations and save to refer later.",addBookmark:"Add bookmark",autoPlay:"Auto Play",layoutTips:"This is the customizable area",bookmarkList:"Bookmark list",graphicLayer:"Bookmark graphics layer"},n=i(22),l=i(4),d=i(7);class c extends a.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.2.0",description:"1.2.0",upgrader:e=>{let t=e;return t.bookmarks?(t.bookmarks.forEach((e,i)=>{Object.keys(e.layersConfig||{}).forEach(a=>{const o=e.layersConfig[a];t=t.setIn(["bookmarks",i,"layersConfig",a],{visibility:o})})}),t):t}}]}}const p=new c,m=i(79),u=i(119),g=i(210),h=i(211),b=i(63),v=i(64),k=i(65),x=i(61);class j extends a.React.PureComponent{constructor(e){super(e),this.Graphic=null,this.GraphicsLayer=null,this.Extent=null,this.Viewpoint=null,this.Basemap=null,this.autoOffCondition=e=>{var t,i;const{config:o,appMode:r,browserSizeMode:n}=this.props,{pageStyle:l,autoPlayAllow:d,autoInterval:c,autoLoopAllow:p}=o,m=n!==e.browserSizeMode,u=c!==(null===(t=e.config)||void 0===t?void 0:t.autoInterval)||p!==(null===(i=e.config)||void 0===i?void 0:i.autoLoopAllow);return r===a.AppMode.Design||l===s.d.Scroll||!d||u||m},this.getRuntimeUuid=()=>{const{id:e,mapWidgetId:t}=this.props;return`${a.utils.getLocalStorageAppKey()}-${e}-${t||"default"}-RtBmArray`},this.settingLayout=()=>{const{layoutId:e,layoutItemId:t,id:i,selectionIsSelf:o}=this.props,{isSetLayout:s}=this.state;e&&i&&t&&!s&&o&&(this.props.dispatch(a.appActions.widgetStatePropChange(i,"layoutInfo",{layoutId:e,layoutItemId:t})),this.setState({isSetLayout:!0}))},this.formatMessage=(e,t)=>{const i=Object.assign({},r,o.defaultMessages,a.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.isEditing=()=>{const{appMode:e,config:t,selectionIsSelf:i,selectionIsInSelf:o}=this.props;return!!window.jimuConfig.isInBuilder&&((i||o)&&window.jimuConfig.isInBuilder&&e!==a.AppMode.Run&&t.isTemplateConfirm)},this.handleRuntimeAdd=()=>{this.rtBookmarkId++;const{jimuMapView:e}=this.state;if(!e)return;const t=e.view,{appMode:i,id:o}=this.props;if(i===a.AppMode.Run){const i=t.map.layers.toArray(),s=JSON.parse(JSON.stringify(t.map)).operationalLayers,r=[];i.map(e=>{for(const t in s){const i=s[t];if(e.id===i.id){r.push(e);break}}});const n=this.getLayersConfig(r),l="RtBm-"+a.utils.getUUID(),d={id:l,name:`${this.formatMessage("_widgetLabel")}(${this.rtBookmarkId})`,title:`${this.formatMessage("_widgetLabel")}-${this.rtBookmarkId}`,type:t.type,extent:t.extent.toJSON(),viewpoint:t.viewpoint.toJSON(),showFlag:!0,runTimeFlag:!0,mapViewId:e.id,mapDataSourceId:e.dataSourceId,layersConfig:n},c=this.getRuntimeUuid(),p=JSON.parse(a.utils.readLocalStorage(c))||[];a.utils.setLocalStorage(c,JSON.stringify(p.concat(`${o}-${l}`))),a.utils.setLocalStorage(`${o}-${l}`,JSON.stringify(d)),this.setState({runtimeBmArray:p.concat(`${o}-${l}`)})}},this.getLayersConfig=e=>{const t=(e,i)=>(e.map(e=>{i[e.id]={layers:{}};const a=void 0===(null==e?void 0:e.visibility)&&!!(null==e?void 0:e.visible);i[e.id].visibility=a;const o=e.layers||e.sublayers||e.allSublayers;o&&o.length>0&&t(o,i[e.id].layers)}),i);return t(e,{})},this.showLayersConfig=(e,t,i=[],a=!1)=>{if(a)return;const o=(e,t)=>{e.map(e=>{var a,s,r;const n=!(i.findIndex(t=>t.id===e.id)>-1);e.visible=void 0===(null===(a=t[e.id])||void 0===a?void 0:a.visibility)?n:null===(s=t[e.id])||void 0===s?void 0:s.visibility;const l=e.layers||e.sublayers||e.allSublayers,d=null===(r=null==t?void 0:t[e.id])||void 0===r?void 0:r.layers;l&&l.length>0&&d&&Object.keys(d).length>0&&o(l.toArray(),d)})};o(e,t)},this.showMapOrgLayer=(e,t)=>{const i=(e,t)=>{e.map(e=>{for(const i in t){const a=t[i];if(e.visible=!1,e.id===a.id){e.visible=!0;break}}e.layers&&e.layers.length>0&&i(e.layers.toArray(),t)})};i(e,t)},this.onViewBookmark=e=>{var t,i;if(!e)return;const{jimuMapView:o,viewGroup:s}=this.state,{id:r,useMapWidgetIds:n}=this.props,l=(null===(i=null===(t=this.props)||void 0===t?void 0:t.stateProps)||void 0===i?void 0:i.activeBookmarkId)||0;e&&!e.runTimeFlag&&l!==e.id&&this.props.dispatch(a.appActions.widgetStatePropChange(r,"activeBookmarkId",e.id)),n&&0!==n.length&&Object(a.getAppStore)().dispatch(a.appActions.requestAutoControlMapWidget(n[0],r)),o&&(e&&o.dataSourceId!==e.mapDataSourceId?s&&s.switchMap().then(()=>{this.viewBookmark(e)}):this.viewBookmark(e))},this.viewBookmark=e=>{var t;const{appMode:i,config:o}=this.props,{jimuMapView:r}=this.state,{extent:n,viewpoint:l}=e;var d={duration:1e3};if(i===a.AppMode.Run&&r&&r.view){"3d"===r.view.type?r.view.goTo({target:this.Viewpoint.fromJSON(l)},d):r.view.goTo({extent:this.Extent.fromJSON(n)},d),e.baseMap&&(r.view.map.basemap=this.Basemap.fromJSON(e.baseMap));const i=r.view.map.layers.toArray(),a=null===(t=JSON.parse(JSON.stringify(r.view.map)))||void 0===t?void 0:t.operationalLayers,c=r.dataSourceId!==e.mapDataSourceId;e.mapOriginFlag?this.showMapOrgLayer(i,e.visibleLayers):this.showLayersConfig(i,e.layersConfig,a,c);const p=e.graphics&&e.graphics.length>0;if(this.graphicsLayerCreated[r.id]){const t=r.view.map.findLayerById(this.graphicsLayerId[r.id]);if(o.displayType===s.b.Selected)t.removeAll(),p&&e.graphics.map(e=>{t.graphics.push(this.Graphic.fromJSON(e))});else if(this.graphicsPainted[r.id][e.id]){if(p){const i=[];e.graphics.map(e=>{const a=t.graphics.findIndex(t=>t.attributes.id===e.attributes.id);a>-1&&i.push(t.graphics.getItemAt(a))}),t.removeMany(i),e.graphics.map(e=>{t.graphics.push(this.Graphic.fromJSON(e))})}}else p&&e.graphics.map(e=>{t.graphics.push(this.Graphic.fromJSON(e))}),this.graphicsPainted[r.id][e.id]=!0}else{const t=new this.GraphicsLayer({listMode:"hide",title:this.formatMessage("graphicLayer"),elevationInfo:{mode:"relative-to-scene"}});p&&e.graphics.map(e=>{t.graphics.push(this.Graphic.fromJSON(e))}),r.view.map.add(t),this.graphicsPainted[r.id]={},this.graphicsPainted[r.id][e.id]=!0,this.graphicsLayerId[r.id]=t.id,this.graphicsLayerCreated[r.id]=!0}}},this.getStyle=e=>{const{id:t,appMode:o,config:r}=this.props,n=[s.f.Custom1,s.f.Custom2];return a.css`
      ${"&.bookmark-widget-"+t} {
        overflow: ${window.jimuConfig.isInBuilder&&o!==a.AppMode.Run?"hidden":"auto"};
        height: 100%;
        width: 100%;
        .bookmark-title-height{
          height: 45px;
        }
        .bookmark-list-height {
          height: calc(100% - 45px);
          overflow-y: ${window.jimuConfig.isInBuilder&&o!==a.AppMode.Run?"hidden !important":"auto"};
        }
        .bookmark-title {
          flex-grow: 1;
          padding: 0 15px;
          line-height: 45px;
          font-size: ${a.polished.rem(16)};
        }
        .bookmark-btn-container {
          width: 32px;
          height: 32px;
        }
        .bookmark-btn {
          font-weight: bold;
          font-size: ${a.polished.rem(12)};
        }
        .bookmark-view-auto {
          overflow-y: ${window.jimuConfig.isInBuilder&&o!==a.AppMode.Run&&!n.includes(r.templateType)?"hidden":"auto"};
        }
        .gallery-card-add {
          cursor: pointer;
          min-width: 200px;
          height: 189px;
          display: grid;
          border: 1px solid ${e.colors.secondary};
          background: ${e.colors.white};
          margin: ${r.direction===s.a.Horizon?a.polished.rem(12):a.polished.rem(16)};
        }
        .card-add {
          cursor: pointer;
          height: 159px;
          display: inline-flex;
          border: 1px solid ${e.colors.palette.light[400]};
          background: ${e.colors.white};
          width: 150px;
          margin: 15px 10px;
          position: relative;
          .add-placeholder {
            height: 120px;
          }
        }
        .list-add {
          cursor: pointer;
          height: 37px;
          display: inline-flex;
          border: 1px solid ${e.colors.palette.light[400]};
          background: ${e.colors.white};
          width: calc(100% - 30px);
          margin: 0 15px 15px;
          position: relative;
        }
        .gallery-add-icon {
          position: relative;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          margin-top: -${a.polished.rem(10)};
          margin-left: -${a.polished.rem(10)};
        }
        .bookmark-container {
          ${r.templateType!==s.f.Card&&r.templateType!==s.f.List&&"height: 100%"};
          width: 100%;
          color: ${e.colors.black};
          .bookmark-runtimeSeparator {
            margin: 10px 15px 15px;
            border: 1px dashed ${e.colors.secondary};
          }
          .widget-card-content {
            padding: 8px 9px !important;
          }
          .bookmark-card-col {
            width: 170px;
            padding: 10px 10px 0;
            position: relative;
            .widget-card-image-inner {
              width: 148px;
              height: 120px;
            }
            .card-inner {
              transition: all 0.5s;
            }
          }
          .bookmark-list-col {
            padding: ${a.polished.rem(8)} 0;
            align-items: center !important;
            margin: 8px 15px 0;
          }
          .bookmark-pointer {
            cursor: pointer;
            &:hover {
              background: ${e.colors.palette.light[200]};
            }
          }
          .bookmark-only-pointer {
            cursor: pointer;
          }
          .bookmark-custom-pointer {
            cursor: pointer;
            border: 1px solid ${e.colors.light};
            ${r.direction===s.a.Vertical&&"position: absolute;"}
            ${r.direction===s.a.Vertical&&"width: calc(100% - 40px) !important;"}
            ${r.direction===s.a.Vertical&&`height: calc(100% - ${r.space}px) !important;`}
          }
          .layout-height{
            height: ${r.pageStyle===s.d.Paging?"calc(100% - 49px)":"100%"} !important;
          }
          .border-none {
            border: none !important;
          }
          .runtime-bookmarkCard {
            .runtimeBookmarkCard-upload,
            .runtimeBookmarkCard-operation {
              display: none;
            }
            &:hover {
              .runtimeBookmarkCard-operation {
                display: block;
                position: absolute;
                right: 10px;
                background: ${e.colors.secondary};
                opacity: 0.9;
              }
              .runtimeBookmarkCard-upload {
                display: block;
                position: absolute;
                right: 10px;
                bottom: 48px;
                background: ${e.colors.secondary};
                opacity: 0.9;
              }
            }
          }
          .runtime-bookmarkList {
            display: inline-block !important;
            width: calc(100% - 30px);
            padding: ${a.polished.rem(4)} 0;
            margin: 0 15px 6px;
            align-items: center !important;
            .runtimeBookmarkList-operation {
              margin-right: 15px;
              display: none;
              height: 28px;
            }
            &:hover {
              .runtimeBookmarkList-operation {
                display: block;
              }
            }
          }
          .runtime-title-con {
            padding: 4px 0 !important;
          }
          .runtime-title {
            width: auto;
            border: none;
            background-color: transparent;
            display: inline-block !important;
            height: 29px;
            &:focus {
              border: 1px solid ${e.colors.secondary};
            }
            &:hover {
              border: 1px solid ${e.colors.secondary};
            }
          }
          .suspension-drop-btn{
            border-radius: 12px;
            border: 0;
          }
          .suspension-drop-placeholder{
            width: 32px;
          }
          .suspension-nav-placeholder1{
            height: 32px;
            width: 60px;
          }
          .suspension-nav-placeholder2{
            height: 24px;
            width: 100px;
          }
          .suspension-noborder-btn{
            border: 0;
            padding-left: ${a.polished.rem(7)};
          }
          .suspension-tools-top {
            position: absolute;
            top: 5px;
            left: 5px;
            z-index: 1;
            .caret-icon {
              margin-left: ${a.polished.rem(2)};
            }
          }
          .suspension-top-number {
            position: absolute;
            top: 5px;
            right: 5px;
            background: ${e.colors.white};
            border-radius: 10px;
            opacity: 0.8;
            width: 40px;
            text-align: center;
            z-index: 1;
          }
          .suspension-tools-middle {
            display: flex;
            width: 100%;
            padding: 0 ${a.polished.rem(8)};
            position: absolute;
            top: 50%;
            margin-top: ${r.direction===s.a.Horizon?"-13px":"-26px"};
            z-index: 1;
            .middle-nav-group button {
              background: ${e.colors.white};
              opacity: 0.8;
              border-radius: 50%;
            }
          }
          .suspension-middle-play {
            position: absolute;
            right: 5px;
            bottom: 20px;
            z-index: 2;
          }
          .suspension-navbar {
            display: flex;
            width: 100%;
            padding: 0 ${a.polished.rem(8)};
            position: absolute;
            top: 50%;
            z-index: 1;
            .navbar-btn-pre{
              position: absolute;
              left: 5px;
              border-radius: 50%;
            }
            .navbar-btn-next{
              position: absolute;
              right: 5px;
              border-radius: 50%;
            }
          }
          .suspension-navbar-verticle {
            display: flex;
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            z-index: 1;
            margin-left: -13px;
            .navbar-btn-pre{
              position: absolute;
              top: 5px;
              border-radius: 50%;
            }
            .navbar-btn-next{
              position: absolute;
              bottom: 5px;
              border-radius: 50%;
            }
          }
          .suspension-tools-text {
            display: flex;
            width: 100%;
            padding: ${a.polished.rem(8)};
            position: absolute;
            border-top: 1px solid ${e.colors.secondary};
            bottom: 0;
            z-index: 1;
            .caret-icon {
              margin-left: ${a.polished.rem(2)};
            }
            .nav-btn-text {
              width: 100px;
            }
          }
          .suspension-tools-bottom {
            display: flex;
            width: 100%;
            padding: 0 ${a.polished.rem(8)};
            position: absolute;
            bottom: 5px;
            z-index: 1;
            .caret-icon {
              margin-left: ${a.polished.rem(3)};
            }
            .scroll-navigator {
              .btn {
                border-radius: ${e.borderRadiuses.circle};
              }
            }
            .nav-btn-bottom {
              width: ${r.autoPlayAllow?"100px":"60px"};
              border-radius: 16px;
              opacity: 0.8;
              background: ${e.colors.white};
            }
            .number-count {
              border-radius: 10px;
              opacity: 0.8;
              background: ${e.colors.white};
              width: 40px;
              text-align: center;
            }
          }
          .bookmark-slide {
            position: absolute;
            bottom: ${r.templateType===s.f.Slide3?"1px":"unset"};
            opacity: 0.8;
            background: ${e.colors.white};
            width: calc(100% - 2px);
            z-index: 1;
            padding: ${a.polished.rem(8)};
            .bookmark-slide-title {
              font-size: ${a.polished.rem(16)};
              font-weight: bold;
            }
            .bookmark-slide-description {
              font-size: ${a.polished.rem(13)};
              max-height: 80px;
              overflow-y: auto;
            }
          }
          .bookmark-slide-gallery {
            position: absolute;
            bottom: ${r.templateType===s.f.Slide3?0:"unset"};
            opacity: 0.8;
            background: ${e.colors.white};
            width: calc(100% - 2px);
            z-index: 1;
            padding: ${a.polished.rem(8)};
            .bookmark-slide-title {
              font-size: ${a.polished.rem(16)};
              font-weight: bold;
            }
            .bookmark-slide-description {
              max-height: 60px;
              overflow-y: auto;
              font-size: ${a.polished.rem(13)};
            }
          }
          .bookmark-text {
            background: ${e.colors.white};
            width: calc(100% - 2px);
            height: 60%;
            z-index: 1;
            padding: ${a.polished.rem(8)};
            .bookmark-text-title {
              font-size: ${a.polished.rem(16)};
              font-weight: bold;
            }
            .bookmark-text-description {
              height: calc(100% - 75px);
              overflow-y: auto;
              font-size: ${a.polished.rem(14)};
            }
          }
          .gallery-card {
            min-width: 200px;
            min-height: 180px;
            height: auto;
            position: relative;
            padding: ${r.direction===s.a.Horizon?"unset":a.polished.rem(16)};
            margin: ${r.direction===s.a.Horizon?a.polished.rem(12):"unset"};
            .gallery-card-inner {
              transition: all 0.5s;
              &:hover {
                transform: scale(1.05);
              }
            }
            .gallery-card-operation {
              display: none;
            }
            &:hover {
              .gallery-card-operation {
                display: block;
                position: absolute;
                top: ${r.direction===s.a.Horizon?0:a.polished.rem(20)};
                right: ${r.direction===s.a.Horizon?0:a.polished.rem(20)};
                background: ${e.colors.light};
                opacity: 0.9;
              }
            }
            .gallery-img {
              width: 198px;
              height: 150px;
              display: inline-flex;
            }
            .gallery-img-vertical {
              width: 100%;
              height: 200px;
            }
          }
          .gallery-slide-card {
            ${r.direction===s.a.Horizon&&`width: ${r.itemWidth}px !important`};
            ${r.direction===s.a.Horizon?`min-width: ${r.itemWidth}px !important`:`height: ${r.itemHeight}px !important`};
            height: calc(100% - ${a.polished.rem(32)});
            position: relative;
            margin: ${r.direction===s.a.Horizon?a.polished.rem(16)+" 0":"0 "+a.polished.rem(16)};
            padding-top: ${r.direction===s.a.Horizon?"unset":a.polished.rem(r.space)};
            ${r.direction===s.a.Horizon&&"margin-left: "+a.polished.rem(r.space)};
            &:first-of-type {
              margin-top: ${r.direction===s.a.Horizon?a.polished.rem(16):a.polished.rem(10)};
              padding-top: ${r.direction===s.a.Horizon?"unset":a.polished.rem(10)};
            }
            &:last-of-type {
              ${r.direction===s.a.Horizon?"padding-right: "+a.polished.rem(16):"margin-bottom: "+a.polished.rem(20)};
            }
            .gallery-slide-inner {
              transition: all 0.5s;
              &:hover {
                transform: scale(1.05);
                .bookmark-slide-gallery {
                  width: 100%;
                }
              }
            }
          }
          .gallery-slide-lastItem {
            padding-right: 16px;
            margin-bottom: 16px;
          }
          .nav-bar {
            height: 48px;
            width: 280px;
            min-width: 280px;
            border: 1px solid ${e.colors.secondary};
            background: ${e.colors.light};
            padding: 0 ${a.polished.rem(8)};
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -24px;
            margin-left: -140px;
            .scroll-navigator {
              .btn {
                border-radius: ${e.borderRadiuses.circle};
              }
            }
            .navbtn {
              width: 100px;
            }
          }
          .example-tips {
            margin-top: -10px;
            top: 50%;
            position: relative;
            text-align: center;
          }
        }
        .bookmark-container::-webkit-scrollbar {
          display: none;
        }
        .gallery-container {
          display: inline-flex !important;
          overflow-x: ${window.jimuConfig.isInBuilder&&o!==a.AppMode.Run&&!n.includes(r.templateType)?"hidden":"auto"};
        }
        .gallery-container-ver {
          overflow-y: ${window.jimuConfig.isInBuilder&&o!==a.AppMode.Run&&!n.includes(r.templateType)?"hidden":"auto"};
        }
        .horizon-line {
          margin: 10px 15px;
          border-bottom: 1px solid ${e.colors.secondary};
        }
        .vertical-line {
          margin: 10px 15px;
          border-right: 1px solid ${e.colors.secondary};
        }
        .vertical-border {
          padding-right: ${a.polished.rem(16)};
        }
        .default-img {
          width: 100%;
          height: 100%;
          background: ${e.colors.palette.light[200]} url(${i(212)}) center center no-repeat;
          background-size: 50% 50%;
        }
        .edit-mask {
          height: calc(100% - 49px);
          z-index: 2;
        }
      }
    `},this.onActiveViewChange=e=>{const{appMode:t,config:i}=this.props;if(this.setState({jimuMapView:e}),e&&t===a.AppMode.Run&&i.initBookmark&&!this.alreadyActiveLoading){const t=this.getMapBookmarks(e)||[],a=i.displayFromWeb?i.bookmarks.concat(t):i.bookmarks;a.length>0&&(this.alreadyActiveLoading=!0,e.view.when(()=>{this.setState({bookmarkOnViewId:a[0].id}),this.onViewBookmark(a[0])}))}},this.handleViewGroupCreate=e=>{this.setState({viewGroup:e})},this.typedImgExist=e=>{var t,i;return e.imgSourceType===s.c.Snapshot?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url},this.renderSlideViewTop=e=>{var t,i;const r=e.imgSourceType===s.c.Snapshot,n=r?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url;return Object(a.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1",onClick:()=>this.onViewBookmark(e),key:e.id||"webmap-"+e.name},Object(a.jsx)("div",{className:"bookmark-slide"},Object(a.jsx)("div",{className:"bookmark-slide-title"},e.name),Object(a.jsx)("div",{className:"bookmark-slide-description"},e.description)),n?Object(a.jsx)(o.ImageWithParam,{imageParam:r?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):Object(a.jsx)("div",{className:"default-img"}))},this.renderSlideViewText=e=>{var t,i;const r=e.imgSourceType===s.c.Snapshot,n=r?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url;return Object(a.jsx)("div",{className:"w-100 h-100 bookmark-only-pointer surface-1",onClick:()=>this.onViewBookmark(e),key:e.id||"webmap-"+e.name},Object(a.jsx)("div",{className:"w-100",style:{height:"40%"}},n?Object(a.jsx)(o.ImageWithParam,{imageParam:r?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):Object(a.jsx)("div",{className:"default-img"})),Object(a.jsx)("div",{className:"bookmark-text"},Object(a.jsx)("div",{className:"bookmark-text-title"},e.name),Object(a.jsx)("div",{className:"bookmark-text-description"},e.description)))},this.renderSlideViewBottom=e=>{var t,i;const r=e.imgSourceType===s.c.Snapshot,n=r?null===(t=e.snapParam)||void 0===t?void 0:t.url:null===(i=e.imgParam)||void 0===i?void 0:i.url;return Object(a.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1",onClick:()=>this.onViewBookmark(e),key:e.id||"webmap-"+e.name},n?Object(a.jsx)(o.ImageWithParam,{imageParam:r?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):Object(a.jsx)("div",{className:"default-img"}),Object(a.jsx)("div",{className:"bookmark-slide"},Object(a.jsx)("div",{className:"bookmark-slide-title"},e.name),Object(a.jsx)("div",{className:"bookmark-slide-description"},e.description)))},this.renderCustomContents=e=>{const{LayoutEntry:t}=this.state,{layouts:i}=this.props;if(e.layoutName)return Object(a.jsx)("div",{className:"w-100 h-100 bookmark-only-pointer surface-1",onClick:()=>this.onViewBookmark(e),key:e.id},Object(a.jsx)(t,{isRepeat:!0,layouts:i[e.layoutName],isInWidget:!0,className:"layout-height"}))},this.renderCustomExample=()=>{const{LayoutEntry:e}=this.state,{layouts:t}=this.props;if(t[s.e.Regular])return Object(a.jsx)("div",{className:"w-100 h-100 bookmark-only-pointer surface-1"},Object(a.jsx)(e,{isRepeat:!0,layouts:t[s.e.Regular],isInWidget:!0,className:"layout-height"}))},this.handleArrowChange=e=>{const{config:t}=this.props,{jimuMapView:i}=this.state,a=this.getMapBookmarks(i)||[],o=t.displayFromWeb?t.bookmarks.concat(a):t.bookmarks,s=o.length;if(0===s)return;const{bookmarkOnViewId:r}=this.state;let n=o.findIndex(e=>e.id===r)>-1?o.findIndex(e=>e.id===r):0;n!==s-1||e?0===n&&e?n=s-1:e&&n>0?n--:e||n++:n=0,this.setState({bookmarkOnViewId:o[n].id}),this.onViewBookmark(o[n])},this.handleOnViewChange=e=>{var t;const{appMode:i,config:o}=this.props,s=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value,{jimuMapView:r}=this.state,n=this.getMapBookmarks(r)||[],l=o.displayFromWeb?o.bookmarks.concat(n):o.bookmarks,d=l.findIndex(e=>e.id===s)>-1?l.findIndex(e=>e.id===s):0;this.setState({bookmarkOnViewId:s}),i===a.AppMode.Run&&this.onViewBookmark(l[d])},this.getBookmarksOptions=e=>{const t=[];return e.map(e=>{t.push(Object(a.jsx)("option",{key:e.id,value:e.id},e.name))}),t},this.handleAutoPlay=()=>{const{config:e,useMapWidgetIds:t,id:i}=this.props,{bookmarkOnViewId:o,autoPlayStart:s,playTimer:r,jimuMapView:n}=this.state,l=this.getMapBookmarks(n)||[],d=e.displayFromWeb?e.bookmarks.concat(l):e.bookmarks;if(0===d.length)return;if(s)return r&&clearInterval(r),void this.setState({autoPlayStart:!1,playTimer:void 0});t&&0!==t.length&&Object(a.getAppStore)().dispatch(a.appActions.requestAutoControlMapWidget(t[0],i));const{autoInterval:c,autoLoopAllow:p}=e;let m=d.findIndex(e=>e.id===o);-1!==m&&m!==d.length-1||(m=0),this.setState({bookmarkOnViewId:d[m].id}),this.onViewBookmark(d[m]);const u=setInterval(()=>{if(m++,p)m>=d.length&&(m=0);else if(m>=d.length)return clearInterval(u),r&&clearInterval(r),void this.setState({autoPlayStart:!1,playTimer:void 0});this.setState({bookmarkOnViewId:d[m].id}),this.onViewBookmark(d[m])},1e3*c+1e3);this.setState({autoPlayStart:!0,playTimer:u})},this.renderBottomTools=e=>{const{config:t}=this.props,{jimuMapView:r}=this.state,l=this.getMapBookmarks(r)||[],d=t.displayFromWeb?t.bookmarks.concat(l):t.bookmarks,c=d.length,{bookmarkOnViewId:p,autoPlayStart:m}=this.state;let u=1;u=e?0:d.findIndex(e=>e.id===p)>-1?d.findIndex(e=>e.id===p)+1:1;const b=Object(a.jsx)(o.Icon,{icon:i(120),size:14,style:{marginRight:3}});return(e=>{let i;switch(e){case s.f.Slide1:i=Object(a.jsx)("div",{className:"suspension-tools-bottom align-items-center justify-content-around"},d.length>1?Object(a.jsx)(o.Select,{size:"sm",value:p,onChange:this.handleOnViewChange,style:{width:32},buttonProps:{arrow:b,className:"suspension-drop-btn",type:"default"},title:this.formatMessage("bookmarkList")},this.getBookmarksOptions(d)):Object(a.jsx)("div",{className:"suspension-drop-placeholder"}),d.length>1?Object(a.jsx)(o.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"nav-btn-bottom",previousTitle:this.formatMessage("previous"),nextTitle:this.formatMessage("next")},Object(a.jsx)("div",{className:"bookmark-btn-container"},t.autoPlayAllow&&Object(a.jsx)(o.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:this.formatMessage("autoPlay"),"data-testid":"triggerAuto"},Object(a.jsx)(o.Icon,{icon:m?h:g,className:"mr-1",size:16})))):Object(a.jsx)("div",{className:"suspension-nav-placeholder1"}),Object(a.jsx)("span",{className:"number-count"},u,"/",c));break;case s.f.Slide2:case s.f.Custom1:case s.f.Custom2:i=d.length>1?Object(a.jsx)("div",{className:"suspension-tools-text align-items-center justify-content-around"},Object(a.jsx)(o.Select,{size:"sm",value:p,onChange:this.handleOnViewChange,style:{width:32},buttonProps:{arrow:b,className:"suspension-noborder-btn",type:"default"},title:this.formatMessage("bookmarkList")},this.getBookmarksOptions(d)),Object(a.jsx)(o.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"nav-btn-text",previousTitle:this.formatMessage("previous"),nextTitle:this.formatMessage("next")},Object(a.jsx)("span",null,u,"/",c)),Object(a.jsx)("div",{className:"bookmark-btn-container"},t.autoPlayAllow&&Object(a.jsx)(o.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:this.formatMessage("autoPlay")},Object(a.jsx)(o.Icon,{icon:m?h:g,className:"mr-1",size:18})))):Object(a.jsx)("div",{className:"align-items-center"});break;case s.f.Slide3:i=Object(a.jsx)(n.Fragment,null,Object(a.jsx)("div",{className:"suspension-tools-top align-items-center justify-content-around"},d.length>1?Object(a.jsx)(o.Select,{size:"sm",value:p,onChange:this.handleOnViewChange,style:{width:32},className:"top-drop",buttonProps:{arrow:b,className:"suspension-drop-btn",type:"default"},title:this.formatMessage("bookmarkList")},this.getBookmarksOptions(d)):Object(a.jsx)("div",{className:"suspension-drop-placeholder"})),Object(a.jsx)("span",{className:"suspension-top-number"},u,"/",c),Object(a.jsx)("div",{className:"suspension-tools-middle"},d.length>1&&Object(a.jsx)(o.NavButtonGroup,{type:"tertiary",vertical:!1,onChange:this.handleArrowChange,className:"middle-nav-group",previousTitle:this.formatMessage("previous"),nextTitle:this.formatMessage("next")})),t.autoPlayAllow&&Object(a.jsx)("div",{className:"suspension-middle-play"},Object(a.jsx)(o.Button,{icon:!0,className:"bookmark-btn",type:"link",onClick:this.handleAutoPlay,title:this.formatMessage("autoPlay")},Object(a.jsx)(o.Icon,{icon:m?h:g,className:"mr-1",size:30}))))}return i})(t.templateType)},this.renderSlideScroll=e=>{const t=e.map((e,t)=>{var i,r;const n=e.imgSourceType===s.c.Snapshot,l=n?null===(i=e.snapParam)||void 0===i?void 0:i.url:null===(r=e.imgParam)||void 0===r?void 0:r.url;return Object(a.jsx)("div",{className:"gallery-slide-card",key:t},Object(a.jsx)("div",{className:"w-100 h-100 bookmark-pointer gallery-slide-inner surface-1",onClick:()=>this.onViewBookmark(e)},Object(a.jsx)("div",{className:"bookmark-slide-gallery"},Object(a.jsx)("div",{className:"bookmark-slide-title"},e.name),Object(a.jsx)("div",{className:"bookmark-slide-description"},e.description)),l?Object(a.jsx)(o.ImageWithParam,{imageParam:n?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):Object(a.jsx)("div",{className:"default-img"})))}),i=Object(a.jsx)("div",{className:"gallery-slide-lastItem",key:"last"});return t.asMutable({deep:!0}).concat(i)},this.renderCustomScroll=e=>{const{LayoutEntry:t}=this.state,{layouts:i}=this.props,o=e.map((e,o)=>Object(a.jsx)("div",{className:"gallery-slide-card",key:o},Object(a.jsx)("div",{className:"w-100 h-100 bookmark-custom-pointer surface-1",onClick:()=>this.onViewBookmark(e)},Object(a.jsx)(t,{isRepeat:!0,layouts:i[e.layoutName],isInWidget:!0,className:"layout-height"})))),s=Object(a.jsx)("div",{className:"gallery-slide-lastItem",key:"last"});return o.asMutable({deep:!0}).concat(s)},this.scrollContainer=e=>{this.containerRef.current.scrollBy(e)},this.handleScroll=(e="next")=>{var t;const i=Object(a.getAppStore)().getState(),o=null===(t=null==i?void 0:i.appContext)||void 0===t?void 0:t.isRTL,{config:r}=this.props,{itemHeight:n=280,itemWidth:l=210,space:d=0}=r,c=r.direction===s.a.Horizon;if(this.containerRef.current&&"next"===e){const e=c?{top:0,left:o?-(l+d):l+d,behavior:"smooth"}:{top:n,left:0,behavior:"smooth"};this.scrollContainer(e)}else if(this.containerRef.current&&"previous"===e){const e=c?{top:0,left:o?l+d:-(l+d),behavior:"smooth"}:{top:-n,left:0,behavior:"smooth"};this.scrollContainer(e)}},this.renderNavbar=e=>{const{config:t}=this.props;return Object(a.jsx)("div",{key:"navBar",className:(t.direction===s.a.Horizon?"suspension-navbar":"suspension-navbar-verticle")+" align-items-center justify-content-between"},Object(a.jsx)(o.Button,{title:this.formatMessage("previous"),type:"primary",size:"sm",icon:!0,onClick:()=>this.handleScroll("previous"),className:"navbar-btn-pre"},Object(a.jsx)(o.Icon,{autoFlip:!0,icon:e?k:v,size:12})),Object(a.jsx)(o.Button,{title:this.formatMessage("next"),type:"primary",size:"sm",icon:!0,onClick:()=>this.handleScroll("next"),className:"navbar-btn-next"},Object(a.jsx)(o.Icon,{autoFlip:!0,icon:e?x:b,size:12})))},this.getMapBookmarks=e=>{var t,i;if(e&&(null==e?void 0:e.dataSourceId)){const a=e.view;if(!a)return;const s=null===(t=e.view)||void 0===t?void 0:t.map;let r=[];return"3d"===a.type?r=(null===(i=s.presentation)||void 0===i?void 0:i.slides)?JSON.parse(JSON.stringify(s.presentation.slides)):[]:"2d"===a.type&&(r=(null==s?void 0:s.bookmarks)?JSON.parse(JSON.stringify(s.bookmarks)):[]),r.map((t,i)=>{var a,s;return t.id="maporigin-"+i,t.runTimeFlag=!0,t.mapOriginFlag=!0,t.mapDataSourceId=e.dataSourceId,(null===(a=t.thumbnail)||void 0===a?void 0:a.url)?t.imgParam={url:t.thumbnail.url}:t.imgParam={},(null===(s=t.title)||void 0===s?void 0:s.text)&&(t.name=t.title.text),t.imagePosition=o.ImageFillMode.Fill,t})}},this.renderBookmarkList=e=>{const{appMode:t,config:r}=this.props,{transitionInfo:l}=r,{bookmarkOnViewId:d,autoPlayStart:c,jimuMapView:p}=this.state,b=this.getMapBookmarks(p)||[];r.displayFromWeb&&(e=e.concat(b));const v=e.findIndex(e=>e.id===d)>-1?e.findIndex(e=>e.id===d):0,k=0===v?1:Math.max(0,v-1),x=r.direction===s.a.Horizon,j=[s.f.Slide1,s.f.Slide2,s.f.Slide3,s.f.Custom1,s.f.Custom2],y=r.templateType===s.f.Gallery||j.includes(r.templateType)&&r.pageStyle===s.d.Scroll;return Object(a.jsx)("div",{className:"bookmark-container "+(y?x?"gallery-container":"gallery-container-ver":""),ref:this.containerRef},(p=>{var b,j,y,f,w,O,S,N;let I;switch(p){case s.f.Card:I=e.map((e,i)=>{var r,l;const d=e.imgSourceType===s.c.Snapshot,c=d?null===(r=e.snapParam)||void 0===r?void 0:r.url:null===(l=e.imgParam)||void 0===l?void 0:l.url;return Object(a.jsx)(n.Fragment,{key:i},Object(a.jsx)("div",{className:"d-inline-flex bookmark-card-col"},Object(a.jsx)(o.Card,{onClick:()=>this.onViewBookmark(e),className:(t===a.AppMode.Run?"bookmark-pointer":"")+" card-inner surface-1"},Object(a.jsx)("div",{className:"widget-card-image"},Object(a.jsx)("div",{className:"widget-card-image-inner"},c?Object(a.jsx)(o.ImageWithParam,{imageParam:d?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):Object(a.jsx)("div",{className:"default-img"}))),Object(a.jsx)(o.CardBody,{className:"widget-card-content text-truncate"},Object(a.jsx)("span",{className:"text-capitalize",title:e.name},e.name)))))});break;case s.f.List:I=e.map((e,i)=>Object(a.jsx)("div",{key:i,onClick:()=>this.onViewBookmark(e),className:(t===a.AppMode.Run?"bookmark-pointer":"")+" d-flex bookmark-list-col surface-1"},Object(a.jsx)(o.Icon,{icon:u,className:"ml-3",size:14}),Object(a.jsx)("div",{className:"ml-2"},e.name)));break;case s.f.Slide1:const p=e.map(e=>this.renderSlideViewTop(e));return Object(a.jsx)(n.Fragment,null,r.pageStyle===s.d.Paging?Object(a.jsx)(a.TransitionContainer,{previousIndex:k,currentIndex:v,transitionType:null===(b=null==l?void 0:l.transition)||void 0===b?void 0:b.type,direction:null===(j=null==l?void 0:l.transition)||void 0===j?void 0:j.direction,playId:null==l?void 0:l.previewId},p):this.renderSlideScroll(e),r.pageStyle===s.d.Scroll&&this.renderNavbar(r.direction===s.a.Horizon),r.pageStyle===s.d.Paging&&this.renderBottomTools());case s.f.Slide2:const C=e.map(e=>this.renderSlideViewText(e));return Object(a.jsx)(n.Fragment,null,r.pageStyle===s.d.Paging?Object(a.jsx)(a.TransitionContainer,{previousIndex:k,currentIndex:v,transitionType:null===(y=null==l?void 0:l.transition)||void 0===y?void 0:y.type,direction:null===(f=null==l?void 0:l.transition)||void 0===f?void 0:f.direction,playId:null==l?void 0:l.previewId},C):this.renderSlideScroll(e),r.pageStyle===s.d.Scroll&&this.renderNavbar(r.direction===s.a.Horizon),r.pageStyle===s.d.Paging&&this.renderBottomTools());case s.f.Slide3:const M=e.map(e=>this.renderSlideViewBottom(e));return Object(a.jsx)(n.Fragment,null,r.pageStyle===s.d.Paging?Object(a.jsx)(a.TransitionContainer,{previousIndex:k,currentIndex:v,transitionType:null===(w=null==l?void 0:l.transition)||void 0===w?void 0:w.type,direction:null===(O=null==l?void 0:l.transition)||void 0===O?void 0:O.direction,playId:null==l?void 0:l.previewId},M):this.renderSlideScroll(e),r.pageStyle===s.d.Scroll&&this.renderNavbar(r.direction===s.a.Horizon),r.pageStyle===s.d.Paging&&this.renderBottomTools());case s.f.Gallery:const A=this.getRuntimeUuid(),B=JSON.parse(a.utils.readLocalStorage(A))||[],L=e.map((e,i)=>{var r,n;const l=e.imgSourceType===s.c.Snapshot,d=l?null===(r=e.snapParam)||void 0===r?void 0:r.url:null===(n=e.imgParam)||void 0===n?void 0:n.url;return Object(a.jsx)("div",{className:"gallery-card",key:i},Object(a.jsx)(o.Card,{onClick:()=>this.onViewBookmark(e),className:(t===a.AppMode.Run?"bookmark-pointer":"")+" gallery-card-inner surface-1"},Object(a.jsx)("div",{className:"widget-card-image bg-light-300 "+(x?"gallery-img":"gallery-img-vertical")},d?Object(a.jsx)(o.ImageWithParam,{imageParam:l?e.snapParam:e.imgParam,altText:e.name,useFadein:!0,imageFillMode:e.imagePosition}):Object(a.jsx)("div",{className:"default-img"})),Object(a.jsx)(o.CardBody,{className:"widget-card-content text-truncate"},Object(a.jsx)("span",{className:"text-capitalize",title:e.name},e.name))))}),P=B.map((e,s)=>{const r=JSON.parse(a.utils.readLocalStorage(e)),n=a.React.createRef();return Object(a.jsx)("div",{className:"gallery-card",key:"RuntimeGallery-"+s},Object(a.jsx)(o.Card,{onClick:()=>this.onViewBookmark(r),className:(t===a.AppMode.Run?"bookmark-pointer":"")+" gallery-card-inner surface-1"},Object(a.jsx)("div",{className:"widget-card-image bg-light-300 "+(x?"gallery-img":"gallery-img-vertical")},Object(a.jsx)("div",{className:"default-img"})),Object(a.jsx)(o.CardBody,{className:"widget-card-content text-truncate runtime-title-con"},Object(a.jsx)(o.TextInput,{className:"runtime-title w-100",ref:n,size:"sm",title:r.name,value:r.name||"",onClick:e=>e.stopPropagation(),onChange:t=>this.onRuntimeBookmarkNameChange(e,t.target.value),onKeyDown:e=>this.handleKeydown(e,n)}))),Object(a.jsx)("span",{className:"gallery-card-operation float-right"},Object(a.jsx)(o.Button,{title:this.formatMessage("deleteOption"),onClick:()=>this.handleRuntimeDelete(e),type:"tertiary",icon:!0},Object(a.jsx)(o.Icon,{icon:i(80),size:12}))))}),z=r.runtimeAddAllow?Object(a.jsx)(n.Fragment,{key:"galleryAdd"},Object(a.jsx)("div",{className:"gallery-card-add",onClick:this.handleRuntimeAdd,title:this.formatMessage("addBookmark")},Object(a.jsx)("div",{className:"gallery-add-icon"},Object(a.jsx)(o.Icon,{icon:m,className:"mr-1",size:16}))),Object(a.jsx)("div",{className:"vertical-border"})):Object(a.jsx)("div",{className:"vertical-border",key:"last"}),T=L.asMutable({deep:!0}).concat(P),$=this.renderNavbar(r.direction===s.a.Horizon);T.push(z),T.push($),I=T;break;case s.f.Navigator:const V=r.bookmarks.length,R=r.bookmarks.findIndex(e=>e.id===d)>-1?r.bookmarks.findIndex(e=>e.id===d)+1:1;return Object(a.jsx)("div",{className:"nav-bar d-flex align-items-center justify-content-around"},Object(a.jsx)(o.Select,{size:"sm",value:d,onChange:this.handleOnViewChange,style:{width:32}},this.getBookmarksOptions(e)),Object(a.jsx)(o.Button,{icon:!0,className:"bookmark-btn",type:"tertiary",onClick:this.handleRuntimeAdd},Object(a.jsx)(o.Icon,{icon:m,className:"mr-1",size:16})),Object(a.jsx)(o.NavButtonGroup,{type:"tertiary",circle:!0,vertical:!1,onChange:this.handleArrowChange,className:"navbtn"},Object(a.jsx)("span",null,R,"/",V)),Object(a.jsx)(o.Button,{icon:!0,className:"bookmark-btn",type:"tertiary",onClick:this.handleAutoPlay,disabled:!r.autoPlayAllow},Object(a.jsx)(o.Icon,{icon:c?h:g,className:"mr-1",size:16})));case s.f.Custom1:case s.f.Custom2:const D=this.isEditing(),F=e.map(e=>this.renderCustomContents(e));return Object(a.jsx)(n.Fragment,null,r.pageStyle===s.d.Paging?Object(a.jsx)(a.TransitionContainer,{previousIndex:k,currentIndex:v,transitionType:null===(S=null==l?void 0:l.transition)||void 0===S?void 0:S.type,direction:null===(N=null==l?void 0:l.transition)||void 0===N?void 0:N.direction,playId:null==l?void 0:l.previewId},F):this.renderCustomScroll(e),r.pageStyle===s.d.Scroll&&this.renderNavbar(r.direction===s.a.Horizon),r.pageStyle===s.d.Paging&&this.renderBottomTools(),!D&&r.pageStyle===s.d.Paging&&t===a.AppMode.Design&&Object(a.jsx)("div",{className:"edit-mask position-absolute w-100"}))}return I})(r.templateType))},this.renderExampleSlideScroll=e=>Object(a.jsx)("div",{className:"gallery-slide-card"},Object(a.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1"},Object(a.jsx)("div",{className:"bookmark-slide-gallery"},Object(a.jsx)("div",{className:"bookmark-slide-title"},e.title),Object(a.jsx)("div",{className:"bookmark-slide-description"},e.description)),Object(a.jsx)("div",{className:"default-img"}))),this.renderBookmarkExample=e=>{const{appMode:t,config:i}=this.props,r=i.direction===s.a.Horizon,l=i.templateType===s.f.Gallery;return Object(a.jsx)("div",{className:"bookmark-container "+(l?r?"gallery-container":"gallery-container-ver":""),ref:this.containerRef},(l=>{let d;switch(l){case s.f.Card:d=new Array(3).fill(1).map((t,i)=>Object(a.jsx)("div",{className:"d-inline-flex bookmark-card-col",key:i},Object(a.jsx)(o.Card,{className:"surface-1"},Object(a.jsx)("div",{className:"widget-card-image bg-light-300"},Object(a.jsx)("div",{className:"widget-card-image-inner"},Object(a.jsx)("div",{className:"default-img"}))),Object(a.jsx)(o.CardBody,{className:"widget-card-content text-truncate"},Object(a.jsx)("span",{className:"text-capitalize",title:e.name},e.name)))));break;case s.f.List:d=new Array(3).fill(1).map((t,i)=>Object(a.jsx)("div",{className:"d-flex bookmark-list-col surface-1",key:i},Object(a.jsx)(o.Icon,{icon:u,className:"ml-3",size:14}),Object(a.jsx)("div",{className:"ml-2"},e.name)));break;case s.f.Slide1:d=Object(a.jsx)(n.Fragment,null,i.pageStyle===s.d.Paging?Object(a.jsx)(a.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:i.transition,direction:i.transitionDirection},Object(a.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1"},Object(a.jsx)("div",{className:"bookmark-slide"},Object(a.jsx)("div",{className:"bookmark-slide-title"},e.title),Object(a.jsx)("div",{className:"bookmark-slide-description"},e.description)),Object(a.jsx)("div",{className:"default-img"}))):this.renderExampleSlideScroll(e),i.pageStyle===s.d.Scroll&&this.renderNavbar(i.direction===s.a.Horizon),i.pageStyle===s.d.Paging&&this.renderBottomTools(!0));break;case s.f.Slide2:d=Object(a.jsx)(n.Fragment,null,i.pageStyle===s.d.Paging?Object(a.jsx)(a.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:i.transition,direction:i.transitionDirection},Object(a.jsx)("div",{className:"w-100 h-100 bookmark-only-pointer surface-1"},Object(a.jsx)("div",{className:"w-100",style:{height:"40%"}},Object(a.jsx)("div",{className:"default-img"})),Object(a.jsx)("div",{className:"bookmark-text"},Object(a.jsx)("div",{className:"bookmark-text-title"},e.title),Object(a.jsx)("div",{className:"bookmark-text-description"},e.description)))):this.renderExampleSlideScroll(e),i.pageStyle===s.d.Scroll&&this.renderNavbar(i.direction===s.a.Horizon),i.pageStyle===s.d.Paging&&this.renderBottomTools(!0));break;case s.f.Slide3:d=Object(a.jsx)(n.Fragment,null,i.pageStyle===s.d.Paging?Object(a.jsx)(a.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:i.transition,direction:i.transitionDirection},Object(a.jsx)("div",{className:"w-100 h-100 bookmark-pointer surface-1"},Object(a.jsx)("div",{className:"default-img"}),Object(a.jsx)("div",{className:"bookmark-slide"},Object(a.jsx)("div",{className:"bookmark-slide-title"},e.title),Object(a.jsx)("div",{className:"bookmark-slide-description"},e.description)))):this.renderExampleSlideScroll(e),i.pageStyle===s.d.Scroll&&this.renderNavbar(i.direction===s.a.Horizon),i.pageStyle===s.d.Paging&&this.renderBottomTools(!0));break;case s.f.Gallery:d=new Array(3).fill(1).map((i,s)=>Object(a.jsx)("div",{className:"gallery-card",key:s},Object(a.jsx)(o.Card,{className:(t===a.AppMode.Run?"bookmark-pointer":"")+" surface-1"},Object(a.jsx)("div",{className:"widget-card-image bg-light-300 "+(r?"gallery-img":"gallery-img-vertical")},Object(a.jsx)("div",{className:"default-img"})),Object(a.jsx)(o.CardBody,{className:"widget-card-content text-truncate"},Object(a.jsx)("span",{className:"text-capitalize",title:e.name},e.name)))));break;case s.f.Custom1:case s.f.Custom2:const l=this.isEditing(),c=this.renderCustomExample();d=Object(a.jsx)(n.Fragment,null,i.pageStyle===s.d.Paging?Object(a.jsx)(a.TransitionContainer,{previousIndex:1,currentIndex:0,transitionType:i.transition,direction:i.transitionDirection},c):Object(a.jsx)("div",{className:"gallery-slide-card"},c),i.pageStyle===s.d.Scroll&&this.renderNavbar(i.direction===s.a.Horizon),i.pageStyle===s.d.Paging&&this.renderBottomTools(!0),!l&&i.pageStyle===s.d.Paging&&t===a.AppMode.Design&&Object(a.jsx)("div",{className:"edit-mask position-absolute w-100 h-100"}))}return d})(i.templateType))},this.onRuntimeBookmarkNameChange=(e,t)=>{const i=JSON.parse(a.utils.readLocalStorage(e));i.name=t,a.utils.setLocalStorage(e,JSON.stringify(i))},this.handleKeydown=(e,t)=>{13===e.keyCode&&t.current.blur()},this.handleRuntimeDelete=e=>{const t=this.getRuntimeUuid(),i=JSON.parse(a.utils.readLocalStorage(t))||[],o=i.findIndex(t=>t===e);o>-1&&i.splice(o,1),a.utils.setLocalStorage(t,JSON.stringify(i)),a.utils.removeFromLocalStorage(e),this.setState({runtimeBmArray:i})},this.renderRuntimeBookmarkList=()=>{const{appMode:e,config:t}=this.props,r=this.getRuntimeUuid(),l=JSON.parse(a.utils.readLocalStorage(r))||[];return Object(a.jsx)("div",{className:"bookmark-container"},(l&&l.length>0&&t.templateType!==s.f.Gallery||t.runtimeAddAllow)&&Object(a.jsx)("div",{className:"bookmark-runtimeSeparator"}),(()=>{let r;switch(t.templateType){case s.f.Card:r=l.map(t=>{const s=JSON.parse(a.utils.readLocalStorage(t)),r=a.React.createRef();return Object(a.jsx)(n.Fragment,{key:t},Object(a.jsx)("div",{className:"d-inline-flex bookmark-card-col runtime-bookmarkCard"},Object(a.jsx)(o.Card,{onClick:()=>this.onViewBookmark(s),className:(e===a.AppMode.Run?"bookmark-pointer":"")+" surface-1"},Object(a.jsx)("div",{className:"widget-card-image bg-light-300"},Object(a.jsx)("div",{className:"widget-card-image-inner"},Object(a.jsx)("div",{className:"default-img"}))),Object(a.jsx)(o.CardBody,{className:"widget-card-content runtime-title-con"},Object(a.jsx)(o.TextInput,{className:"runtime-title w-100",ref:r,size:"sm",title:s.name,value:s.name||"",onClick:e=>e.stopPropagation(),onChange:e=>this.onRuntimeBookmarkNameChange(t,e.target.value),onKeyDown:e=>this.handleKeydown(e,r)}))),Object(a.jsx)("span",{className:"runtimeBookmarkCard-operation float-right"},Object(a.jsx)(o.Button,{title:this.formatMessage("deleteOption"),onClick:()=>this.handleRuntimeDelete(t),type:"tertiary",icon:!0},Object(a.jsx)(o.Icon,{icon:i(80),size:12})))))});const d=Object(a.jsx)(n.Fragment,{key:"card-add"},Object(a.jsx)("div",{className:"card-add",onClick:this.handleRuntimeAdd,title:this.formatMessage("addBookmark")},Object(a.jsx)("div",{className:"add-placeholder"}),Object(a.jsx)("div",{className:"gallery-add-icon"},Object(a.jsx)(o.Icon,{icon:m,className:"mr-1",size:16}))),Object(a.jsx)("div",{className:"vertical-border"}));t.runtimeAddAllow&&r.push(d);break;case s.f.List:r=l.map(t=>{const s=JSON.parse(a.utils.readLocalStorage(t)),r=a.React.createRef();return Object(a.jsx)("div",{key:t,onClick:()=>this.onViewBookmark(s),className:(e===a.AppMode.Run?"bookmark-pointer":"")+" d-flex runtime-bookmarkList surface-1"},Object(a.jsx)(o.Icon,{icon:u,className:"ml-3",size:14}),Object(a.jsx)(o.TextInput,{className:"runtime-title",ref:r,size:"sm",title:s.name,value:s.name||"",onChange:e=>this.onRuntimeBookmarkNameChange(t,e.target.value),onKeyDown:e=>this.handleKeydown(e,r)}),Object(a.jsx)("span",{className:"runtimeBookmarkList-operation float-right"},Object(a.jsx)(o.Button,{title:this.formatMessage("deleteOption"),onClick:()=>this.handleRuntimeDelete(t),type:"tertiary",icon:!0},Object(a.jsx)(o.Icon,{icon:i(80),size:12}))))});const c=Object(a.jsx)(n.Fragment,{key:"list-add"},Object(a.jsx)("div",{className:"list-add",onClick:this.handleRuntimeAdd,title:this.formatMessage("addBookmark")},Object(a.jsx)("div",{className:"gallery-add-icon"},Object(a.jsx)(o.Icon,{icon:m,className:"mr-1",size:16}))),Object(a.jsx)("div",{className:"vertical-border"}));t.runtimeAddAllow&&r.push(c)}return r})())};const t=this.getRuntimeUuid(),l=JSON.parse(a.utils.readLocalStorage(t))||[],c={jimuMapView:void 0,widgetRect:void 0,apiLoaded:!1,viewGroup:void 0,bookmarkOnViewId:1,autoPlayStart:!1,LayoutEntry:null,runtimeBmArray:l,playTimer:void 0,isSetLayout:!1};window.jimuConfig.isInBuilder?c.LayoutEntry=this.props.builderSupportModules.LayoutEntry:c.LayoutEntry=d.LayoutEntry;let p=0;if(l.length>0){const e=l[l.length-1],{title:t}=JSON.parse(a.utils.readLocalStorage(e)),i=t.lastIndexOf("-");p=parseInt(t.substring(i+1))}this.state=c,this.graphicsLayerCreated={},this.graphicsPainted={},this.graphicsLayerId={},this.runtimeReference=void 0,this.containerRef=a.React.createRef(),this.rtBookmarkId=p,this.showInView=!1,this.alreadyActiveLoading=!1}static getDerivedStateFromProps(e,t){if(!e||0===Object.keys(e).length||!t||0===Object.keys(t).length)return null;const{autoPlayStart:i,playTimer:a}=t;return e.autoplayActiveId!==e.id?(i&&a&&clearInterval(a),{autoPlayStart:!1,playTimer:void 0}):null}componentDidMount(){this.state.apiLoaded||Object(l.loadArcGISJSAPIModules)(["esri/Graphic","esri/layers/GraphicsLayer","esri/geometry/Extent","esri/Viewpoint","esri/Basemap"]).then(e=>{[this.Graphic,this.GraphicsLayer,this.Extent,this.Viewpoint,this.Basemap]=e,this.setState({apiLoaded:!0})})}componentDidUpdate(e){var t,i,o,s,r,n;const{config:l,appMode:d,id:c,autoplayActiveId:p}=this.props,{autoPlayStart:m,playTimer:u,jimuMapView:g}=this.state,h=(null===(i=null===(t=this.props)||void 0===t?void 0:t.stateProps)||void 0===i?void 0:i.activeBookmarkId)||0;if(p&&g&&c!==p){const e=this.graphicsLayerId[g.id];if(!e)return;const t=g.view.map.findLayerById(e);t&&t.removeAll(),this.graphicsPainted[g.id]={}}if(e.appMode===a.AppMode.Design&&d===a.AppMode.Run&&g&&l.initBookmark){const e=this.getMapBookmarks(g)||[],t=l.displayFromWeb?l.bookmarks.concat(e):l.bookmarks;t.length>0&&this.showInView&&g.view.when(()=>{this.setState({bookmarkOnViewId:t[0].id}),this.onViewBookmark(t[0])})}if(this.autoOffCondition(e)&&m)return u&&clearInterval(u),void this.setState({autoPlayStart:!1,playTimer:void 0});if(((null===(s=null===(o=this.props)||void 0===o?void 0:o.stateProps)||void 0===s?void 0:s.settingChangeBookmark)||!1)&&h){const e=l.bookmarks.findIndex(e=>e.id===h)>-1?l.bookmarks.findIndex(e=>e.id===h):0;this.setState({bookmarkOnViewId:h}),this.props.dispatch(a.appActions.widgetStatePropChange(c,"settingChangeBookmark",!1)),d===a.AppMode.Run&&this.onViewBookmark(l.bookmarks[e])}if((null===(n=null===(r=this.props)||void 0===r?void 0:r.stateProps)||void 0===n?void 0:n.lastFlag)||!1){this.props.dispatch(a.appActions.widgetStatePropChange(c,"lastFlag",!1));const e=g.view.map.findLayerById(this.graphicsLayerId[g.id]);e&&e.removeAll()}this.settingLayout()}componentWillUnmount(){const{jimuMapView:e}=this.state;if(!Object(a.getAppStore)().getState().appConfig.widgets[this.props.id]&&e){const t=e.view.map.findLayerById(this.graphicsLayerId[e.id]);t&&t.removeAll();const i=this.getRuntimeUuid();(JSON.parse(a.utils.readLocalStorage(i))||[]).map(e=>{a.utils.removeFromLocalStorage(e)}),a.utils.removeFromLocalStorage(i)}}render(){const{config:e,id:t,useMapWidgetIds:i,theme:o}=this.props,{jimuMapView:r,apiLoaded:c}=this.state,{runtimeAddAllow:p}=e,m=Object(a.classNames)("jimu-widget","widget-bookmark","bookmark-widget-"+t),u=this.getMapBookmarks(r)||[],g=e.displayFromWeb?e.bookmarks.concat(u).length:e.bookmarks.length,h=this.getRuntimeUuid(),b=(JSON.parse(a.utils.readLocalStorage(h))||[]).length,v={id:99999,name:this.formatMessage("_widgetLabel"),title:this.formatMessage("_widgetLabel"),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",type:"2d",mapViewId:"widget_egeditor-dataSource_eg",mapDataSourceId:"dataSource_eg"},k=[s.f.Slide1,s.f.Slide2,s.f.Slide3,s.f.Gallery,s.f.Custom1,s.f.Custom2];return Object(a.jsx)(d.ViewVisibilityContext.Consumer,null,({isInView:t,isInCurrentView:r})=>{let u=!0;return u=!t||r,u||(this.alreadyActiveLoading=!1),Object(a.jsx)(n.Fragment,null,u&&Object(a.jsx)(d.ViewportVisibilityContext.Consumer,null,t=>(t||(this.alreadyActiveLoading=!1),this.showInView=t,Object(a.jsx)("div",{className:m,css:this.getStyle(o)},t&&c&&Object(a.jsx)(n.Fragment,null,Object(a.jsx)(l.JimuMapViewComponent,{useMapWidgetId:null==i?void 0:i[0],onActiveViewChange:this.onActiveViewChange,onViewGroupCreate:this.handleViewGroupCreate}),p||0!==b||0!==g?Object(a.jsx)(n.Fragment,null,Object(a.jsx)("div",{className:"h-100 d-flex flex-wrap bookmark-view-auto"},(g>0||e.templateType===s.f.Gallery)&&this.renderBookmarkList(e.bookmarks),(b>0||p)&&!k.includes(e.templateType)&&this.renderRuntimeBookmarkList())):Object(a.jsx)(n.Fragment,null,Object(a.jsx)("div",{className:"h-100 d-flex flex-wrap bookmark-view-auto"},this.renderBookmarkExample(v))))))))})}}j.mapExtraStateProps=(e,t)=>{var i;const o=e&&e.appConfig,{layouts:s,layoutId:r,layoutItemId:n,builderSupportModules:l,id:d,useMapWidgetIds:c}=t,p=e&&e.appRuntimeInfo&&e.appRuntimeInfo.selection,m=p&&l&&l.widgetModules&&l.widgetModules.selectionInBookmark(p,d,o,!1),u=e&&e.mapWidgetsInfo,g=c&&0!==c.length?c[0]:void 0,h=(null==e?void 0:e.browserSizeMode)||a.BrowserSizeMode.Large;return{appMode:e&&e.appRuntimeInfo&&e.appRuntimeInfo.appMode,appConfig:e&&e.appConfig,layouts:s,selectionIsSelf:p&&p.layoutId===r&&p.layoutItemId===n,selectionIsInSelf:m,autoplayActiveId:g?null===(i=u[g])||void 0===i?void 0:i.autoControlWidgetId:void 0,mapWidgetId:g,browserSizeMode:h}},j.versionManager=p;t.default=j},6:function(e,t,i){"use strict";var a,o,s,r,n,l;i.d(t,"a",(function(){return a})),i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return s})),i.d(t,"f",(function(){return r})),i.d(t,"e",(function(){return n})),i.d(t,"c",(function(){return l})),function(e){e.Horizon="HORIZON",e.Vertical="VERTICAL"}(a||(a={})),function(e){e.Scroll="SCROLL",e.Paging="PAGING"}(o||(o={})),function(e){e.All="ALL",e.Selected="SELECTED"}(s||(s={})),function(e){e.Card="CARD",e.List="LIST",e.Slide1="SLIDE1",e.Slide2="SLIDE2",e.Slide3="SLIDE3",e.Gallery="GALLERY",e.Navigator="NAVIGATOR",e.Custom1="CUSTOM1",e.Custom2="CUSTOM2"}(r||(r={})),function(e){e.Default="DEFAULT",e.Regular="REGULAR",e.Hover="HOVER"}(n||(n={})),function(e){e.Snapshot="SNAPSHOT",e.Custom="CUSTOM"}(l||(l={}))},61:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M9.521 5.47L3.981.162a.592.592 0 00-.813 0 .534.534 0 000 .779L8.448 6l-5.28 5.06a.534.534 0 000 .779.592.592 0 00.813 0l5.54-5.31a.726.726 0 000-1.058z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},63:function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M.146 3.146a.5.5 0 01.708 0L6 8.5l5.146-5.354a.5.5 0 01.708.708l-5.5 5.707a.5.5 0 01-.708 0l-5.5-5.707a.5.5 0 010-.708z" fill="#000"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>'},64:function(e,t){e.exports='<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M.146 9.56a.5.5 0 00.708 0L6 4.208l5.146 5.354a.5.5 0 00.708-.708l-5.5-5.707a.5.5 0 00-.708 0l-5.5 5.707a.5.5 0 000 .708z" fill="#000"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>'},65:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M2.479 5.47L8.019.162a.592.592 0 01.813 0 .534.534 0 010 .779L3.552 6l5.28 5.06a.534.534 0 010 .779.592.592 0 01-.813 0l-5.54-5.31a.726.726 0 010-1.058z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},7:function(e,t){e.exports=o},79:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 110 1.5h-6.5v6.5a.75.75 0 11-1.5 0v-6.5H.75a.75.75 0 110-1.5h6.5V.75A.75.75 0 018 0z" fill="#000" fill-rule="evenodd"></path></svg>'},80:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M2.561 7.876l1.138 20.023C3.699 30.164 5.83 32 8.459 32h15.724c2.629 0 4.76-1.836 4.76-4.101l1.095-20.023H2.562zm28.806-1.42c.005-.844.008-.901.008-.957 0-2.202-1.483-3.411-3.472-3.411l-5.537.005C22.366.937 21.082 0 19.768 0h-6.893c-1.314 0-2.64.937-2.64 2.093l-5.543-.005c-2.197 0-3.472 1.473-3.472 3.411 0 .057.003.113.008.957h30.139zm-10.306 6.682c0-.638.588-1.156 1.314-1.156s1.314.517 1.314 1.156v13.24c0 .638-.588 1.156-1.314 1.156s-1.314-.517-1.314-1.156v-13.24zm-6.077 0c0-.638.589-1.156 1.315-1.156s1.314.517 1.314 1.156v13.24c0 .638-.588 1.156-1.314 1.156s-1.315-.517-1.315-1.156v-13.24zm-6.074 0c0-.638.588-1.156 1.315-1.156s1.314.517 1.314 1.156v13.24c0 .638-.589 1.156-1.314 1.156s-1.315-.517-1.315-1.156v-13.24z"></path></svg>'}}))}}}));
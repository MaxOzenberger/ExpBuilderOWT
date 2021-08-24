System.register(["jimu-core","jimu-ui","jimu-arcgis"],(function(t){var e,a,r;return{setters:[function(t){e=t},function(t){a=t},function(t){r=t}],execute:function(){t(function(t){var e={};function a(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(r,o,function(e){return t[e]}.bind(null,o));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=493)}({0:function(t,a){t.exports=e},1:function(t,e){t.exports=a},246:function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 0a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h16zm0 1H2a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V2a1 1 0 00-1-1zM6 14v3l-2-1.5L6 14zm8 0l2 1.5-2 1.5v-3zm2.5-4a.5.5 0 110 1h-8a.5.5 0 110-1h8zm-11 0a.5.5 0 110 1h-2a.5.5 0 110-1h2zm8-3a.5.5 0 110 1h-5a.5.5 0 110-1h5zm-8 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm11-3a.5.5 0 110 1h-8a.5.5 0 110-1h8zm-11 0a.5.5 0 110 1h-2a.5.5 0 110-1h2z" fill="#000" fill-rule="nonzero"></path></svg>'},4:function(t,e){t.exports=r},493:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return D}));var r=a(0),o=a(1),s=a(58);function i(t,e,a,o){let i;const n=a.backgroundColor?a.backgroundColor:t.surfaces[1].bg;let u;let d,c,l="",h="",p="",f="",g="",S="";"custom"===e?(i=a.textColor?a.textColor:t.colors.black,u=a.fontSize,u&&0!==u.distance&&a.fontSizeType!==s.a.auto&&(d=u.unit,c=u.distance,l=c+d,h=Math.round(1.428*c)+d,p=Math.round(1.142*c)+d,f=c,g=Math.round(.857*c)+d,S=Math.round(.857*c)+d)):"syncWithTheme"===e?(c="",i=t.colors.black):(c="",i="");let v="10px",m="auto";return o&&(v="auto",m="10px"),r.css`
    overflow: auto;
    .widget-featureInfo{
      width: 100%;
      height: 100%;
      background-color: ${n};
      color: ${i};
      font-size: ${l};
      .warning-icon{
        position: absolute;
        bottom: 10px;
        right: ${v};
        left: ${m};
      }
      .header-section{
        display: flex;
        justify-content: space-between;
        height: 40px;
        border-bottom: 1px solid #a8a8a8;
        background-color: ${n};
      }
      .data-action-placeholder{
        width: 41px;
      }
      .data-action-dropdown-content{
        width: 41px;
        padding: 9px 7px 0 7px;
      }
      .nav-section{
        flex-grow: 2;
        height: 40px;
        background-color: transparent;
        .nav-btn{
          color: ${t.colors.palette.primary[500]};
        }
        .nav-btn: hover{
          color: ${t.colors.palette.primary[600]};
        }
        .nav-btn:focus{
          box-shadow: none;
        }
      }
      .feature-info-component{
        background-color: ${"transparent"};
        padding: 0;
        .esri-feature__size-container{
          background-color: ${n};
          color: ${i};
        }
        .esri-widget * {
          font-size: ${l};
          color: ${i};
        }
        .esri-widget {
          background-color: transparent !important;
        }
        .esri-feature__title{
          padding: 10px 15px 0 15px;
          margin: auto;
        }
        .esri-feature__content-element{
        }
        .esri-widget__table tr td, .esri-widget__table tr th {
          font-size: ${S};
        }
        .esri-feature__main-container{
        }
        .esri-feature__media-previous:focus{
          outline: none;
        }
        .esri-feature__media-next:focus{
          outline: none;
        }
        .esri-feature__title {
          font-size: ${l};
        }
        .esri-feature h1 {
          font-size: ${h};
        }
        .esri-feature h2 {
          font-size: ${p};
        }
        .esri-feature h3,
        .esri-feature h4,
        .esri-feature h5,
        .esri-feature h6 {
          font-size: ${f};
        }
        .esri-feature p {
          font-size: ${l};
        }

        .esri-feature figcaption {
          font-size: ${S};
        }

        .esri-feature__media-item-title {
          font-size: ${p};
        }
        .esri-feature__media-item-caption {
          font-size: ${g};
        }
        .esri-feature__last-edited-info {
          font-size: ${S};
        }

      }
    }
  `}var n,u="Feature Info",d="No data found.",c="{index} of {count}",l="{layer} feature info selection",h=a(4);!function(t){t.Pending="Pending",t.Fulfilled="Fulfilled",t.Rejected="Rejected"}(n||(n={}));class p extends r.React.PureComponent{constructor(t){super(t),this.state={loadStatus:n.Pending}}componentDidMount(){this.createFeature()}componentDidUpdate(){if(this.feature){const t={popupTemplate:{content:""}};this.feature.graphic=this.props.graphic||t,this.feature.visibleElements=this.props.visibleElements}}destoryFeature(){this.feature&&!this.feature.destroyed&&this.feature.destroy()}createFeature(){let t;return t=this.Feature?Promise.resolve():Object(h.loadArcGISJSAPIModules)(["esri/widgets/Feature"]).then(t=>{[this.Feature]=t}),t.then(()=>{var t,e;const a=document&&document.createElement("div");a.className="jimu-widget",this.refs.featureContainer.appendChild(a);const r=this.props.dataSource.getRootDataSource();this.destoryFeature(),this.feature=new this.Feature({container:a,defaultPopupTemplateEnabled:!0,spatialReference:(null===(e=null===(t=this.props.dataSource)||void 0===t?void 0:t.layer)||void 0===e?void 0:e.spatialReference)||null,map:(null==r?void 0:r.map)||null})}).then(()=>{this.setState({loadStatus:n.Fulfilled})})}render(){return r.React.createElement("div",{className:"feature-info-component"},r.React.createElement("div",{ref:"featureContainer"}))}}var f=function(t,e,a,r){return new(a||(a=Promise))((function(o,s){function i(t){try{u(r.next(t))}catch(t){s(t)}}function n(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(i,n)}u((r=r.apply(t,e||[])).next())}))};class g extends r.React.PureComponent{constructor(t){super(t),this.onDataSourceCreated=t=>{this.dataSource=t,this.previousIndex=this.props.index,this.isFirstLoad=!0,this.setState({dataSourceId:this.dataSource.id})},this.onCreateDataSourceFailed=t=>{},this.onDataSourceInfoChange=t=>{var e;if(!t)return;t.status===r.DataSourceStatus.NotReady&&this.props.onDataSourceStatusChanged(r.DataSourceStatus.NotReady,null===(e=this.dataSource)||void 0===e?void 0:e.getLabel()),this.setState({dataSourceStatus:t.status,dataSourceWidgetQueries:t.widgetQueries,dataSourceVersion:t.version});const a=t.selectedIds&&t.selectedIds[0];a?(this.previousSelectedId=a,this.getDataIndexByObjectId(a).then(t=>{t>-1&&t<this.dataBuffer.count&&this.props.onSelectedRecordIdChanged(t,this.dataSource.id)})):this.previousSelectedId&&(this.previousSelectedId=null,this.props.onUnselectedRecordIdChanged(this.dataSource.id))},this.state={dataSourceId:null,dataSourceStatus:r.DataSourceStatus.Loaded,dataSourceVersion:void 0,dataSourceWidgetQueries:void 0},this.previousIndex=0,this.previousData={id:null,count:null,index:null,graphic:null,record:null,dataSourceVersion:void 0,dataSourceId:null},this.dataBuffer={count:null,dataMap:{},pagingNum:30},this.isFirstLoad=!1,this.previousSelectedId=null}componentDidMount(){}componentDidUpdate(){return f(this,void 0,void 0,(function*(){if(this.props.useDataSource&&this.state.dataSourceId===this.props.useDataSource.dataSourceId&&this.state.dataSourceStatus===r.DataSourceStatus.Loaded){let t;this.props.index===this.previousIndex?(this.clearData(),t=this.props.index):(this.previousIndex=this.props.index,t=this.props.index);let e=this.getData(t);if(!e)return yield this.dataSource.queryCount({}).then(a=>{const r=a.count;t>=r&&(t=0),this.queryGraphics(this.dataSource,null,t,this.dataBuffer.pagingNum,r).then(t=>{0===t.graphics.length?e=null:(this.addData(t,this.dataSource.id),e=this.getData(t.index)),this.onDataChanged(this.dataSource,e),this.isFirstLoad=!1})});this.onDataChanged(this.dataSource,e)}}))}onDataChanged(t,e){var a,o,s,i,n,u;e?(null===(a=this.previousData)||void 0===a?void 0:a.dataSourceId)!==(null==e?void 0:e.dataSourceId)||(null===(o=this.previousData)||void 0===o?void 0:o.id)!==(null==e?void 0:e.id)||(null===(s=this.previousData)||void 0===s?void 0:s.count)!==(null==e?void 0:e.count)||(null===(i=this.previousData)||void 0===i?void 0:i.index)!==(null==e?void 0:e.index)||(null===(n=this.previousData)||void 0===n?void 0:n.dataSourceVersion)!==(null==e?void 0:e.dataSourceVersion)?this.props.onDataChanged(this.dataSource,e,this.isFirstLoad):this.props.onDataSourceStatusChanged(r.DataSourceStatus.Loaded,null===(u=this.dataSource)||void 0===u?void 0:u.getLabel()):this.props.onDataChanged(this.dataSource,e),this.previousData=e}addData(t,e){t.records.forEach((a,r)=>{const o=t.start+r;this.dataBuffer.dataMap[o]={id:a.getId(),count:this.dataBuffer.count,index:o,graphic:t.graphics[r],record:a,dataSourceId:e,dataSourceVersion:this.state.dataSourceVersion}})}initData(t){this.dataBuffer.count=t}getData(t){return this.dataBuffer.dataMap[t]}getDataIndexByObjectId(t){return f(this,void 0,void 0,(function*(){let e=-1;if(Object.entries(this.dataBuffer.dataMap).some(a=>{var r;return t===(null===(r=a[1])||void 0===r?void 0:r.id)&&(e=Number(a[0]),!0)}),e<0&&this.dataSource){const a=this.dataSource.getIdField();return this.dataSource.queryCount({where:`${a}<=${t}`}).then(t=>(e=t.count-1,e))}return Promise.resolve(e)}))}clearData(){this.dataBuffer.count=null,this.dataBuffer.dataMap={}}isEmptyData(){return null===this.dataBuffer.count}getLayerObject(t){return t.layer?t.layer.load().then(()=>f(this,void 0,void 0,(function*(){return yield Promise.resolve(t.layer)}))):t.createJSAPILayerByDataSource().then(t=>t.load().then(()=>f(this,void 0,void 0,(function*(){return yield Promise.resolve(t)}))))}queryGraphics(t,e,a,o,s){var i;return f(this,void 0,void 0,(function*(){let e,n,u=a;return this.props.onDataSourceStatusChanged(r.DataSourceStatus.Loading,null===(i=this.dataSource)||void 0===i?void 0:i.getLabel()),this.getLayerObject(t).then(e=>f(this,void 0,void 0,(function*(){if(n=e,this.isEmptyData()&&this.initData(s),this.isFirstLoad){const e=t.getSelectedRecordIds()[0];if(void 0!==e)return yield this.getDataIndexByObjectId(e).then(t=>{u=-1===t?0:t})}}))).then(()=>{e=Math.floor(u/this.dataBuffer.pagingNum)*this.dataBuffer.pagingNum;const a={outFields:["*"],returnGeometry:!0,page:Math.floor(e/o)+1,pageSize:o};return t.query(a)}).then(a=>{const r=a.records;let s;return s=t.layer?r.map(t=>t.feature):r.map(t=>(t.feature.sourceLayer=n.associatedLayer||n,t.feature)),{index:u,start:e,num:o,graphics:s,records:r}}).catch(t=>(console.warn(t),{graphics:[],records:[]}))}))}getOrderBy(t,e){const a=[];let o;return e&&e.orderBy&&e.orderBy.length>0&&(e.orderBy.forEach(t=>{t.jimuFieldName&&a.push(`${t.jimuFieldName} ${t.order}`)}),o=t.type===r.DataSourceTypes.FeatureLayer?a.join(","):a),o}getQueryParamsFromDataSource(t){return t.getRealQueryParams({},"query")}loadGraphics(t,e){return f(this,void 0,void 0,(function*(){return this.props.onDataSourceStatusChanged(r.DataSourceStatus.Loading),yield Object(h.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer","esri/tasks/support/Query"]).then(a=>{const[r,o]=a,s=new o;let i=t.layer;const n=e&&e.where.sql;let u;return s.where=n||"1=1",s.returnGeometry=!1,s.outFields=["*"],u=0===this.props.maxGraphics?null:this.props.maxGraphics,s.num=this.props.limitGraphics?u:null,!i&&t.url&&(i=new r({url:t.url})),i?i.queryFeatures(s).then(t=>t.features):[]}).catch(t=>(console.warn(t),[]))}))}render(){return r.React.createElement(r.DataSourceComponent,{useDataSource:this.props.useDataSource,query:{},widgetId:this.props.widgetId,onDataSourceCreated:this.onDataSourceCreated,onDataSourceInfoChange:this.onDataSourceInfoChange,onCreateDataSourceFailed:this.onCreateDataSourceFailed})}}class S extends r.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.1.0",description:"added [styleType] and [fontSizeType]",upgrader:t=>{let e=t;return e=e.set("styleType","usePopupDefined"),e.getIn(["style","fontSize","distance"])||e.getIn(["style","textColor"])?e=e.setIn(["style","fontSizeType"],"custom"):(e=e.setIn(["style","fontSizeType"],"auto"),e=e.setIn(["style","fontSize","distance"],14)),e}}]}}const v=new S,m=a(246);class D extends r.React.PureComponent{constructor(t){super(t),this.onPreGraphicBtnClick=()=>{let t=this.state.currentDataIndex;t>0&&(this.setState({currentDataIndex:--t}),this.lockSelection=!1)},this.onNextGraphictBtnClick=()=>{let t=this.state.currentDataIndex;t<this.currentData.count-1&&(this.setState({currentDataIndex:++t}),this.lockSelection=!1)},this.onSelectedRecordIdChanged=(t,e)=>{t>-1&&this.dataSource.id===e&&this.setState({currentDataIndex:t})},this.onUnselectedRecordIdChanged=t=>{this.dataSource.id===t&&r.MessageManager.getInstance().publishMessage(new r.DataRecordsSelectionChangeMessage(this.props.id,[]))},this.onDataSourceStatusChanged=(t,e)=>{this.setState({loadDataStatus:t,dataSourceLabel:e})},this.onDataChanged=(t,e,a)=>{this.dataSource=t,this.previousData=this.currentData,this.currentData=e,this.setState({currentDataId:this.currentData?this.currentData.id:null,currentDataIndex:this.currentData?this.currentData.index:0,loadDataStatus:r.DataSourceStatus.Loaded}),this.lockSelection||(this.selectGraphic(),this.lockSelection=!0)},this.onCurrentFeatureClick=()=>{this.selectGraphic()},this.previousData=null,this.currentData=null,this.lockSelection=!0,this.warningIcon=`<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M0.5 0.5H25.5V25.5H0.5V0.5Z" fill=${this.props.theme.colors.palette.warning[100]}\n                    stroke="${this.props.theme.colors.palette.warning[300]}"/>\n                  <path d="M12.0995 10.87C12.0462 10.3373 12.4646 9.875 13 9.875C13.5354 9.875 13.9538 10.3373 13.9005 10.87L13.5497 14.3775C13.5215 14.6599 13.2838 14.875 13 14.875C12.7162\n                    14.875 12.4785 14.6599 12.4502 14.3775L12.0995 10.87Z" fill="${this.props.theme.colors.palette.warning[700]}"/>\n                  <path d="M13 17.875C13.5523 17.875 14 17.4273 14 16.875C14 16.3227 13.5523 15.875 13 15.875C12.4477 15.875 12 16.3227 12 16.875C12 17.4273 12.4477 17.875 13 17.875Z"\n                    fill="${this.props.theme.colors.palette.warning[700]}"/>\n                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66666 19.875C5.91174 19.875 5.42905 19.0705 5.78431 18.4044L12.1176 6.52941C12.4941 5.82353 13.5059 5.82353 13.8824\n                    6.52941L20.2157 18.4044C20.5709 19.0705 20.0883 19.875 19.3333 19.875H6.66666ZM6.66666 18.875L13 7L19.3333 18.875H6.66666Z" fill="${this.props.theme.colors.palette.warning[700]}"/>\n                  </svg>`,this.state={currentDataId:null,currentDataIndex:0,loadDataStatus:r.DataSourceStatus.Loading,dataSourceWidgetId:null,dataSourceLabel:""}}componentDidMount(){}componentDidUpdate(){const t=this.props.useDataSources&&this.props.useDataSources[0];t?this.setState({dataSourceWidgetId:r.appConfigUtils.getWidgetIdByOutputDataSource(t)}):(this.setState({currentDataId:null,currentDataIndex:0}),this.currentData=null)}handleAction(t){}selectGraphic(){var t;const e=null===(t=this.currentData)||void 0===t?void 0:t.record;if(e&&this.dataSource){r.MessageManager.getInstance().publishMessage(new r.DataRecordsSelectionChangeMessage(this.props.id,[e]));const t=this.dataSource.getSelectedRecordIds(),a=e.getId();t.includes(a)||this.dataSource.queryById(a).then(t=>{this.dataSource.selectRecordsByIds([a],[t])})}}getStyleConfig(){return this.props.config.style?this.props.config.style:{textColor:"",fontSizeType:s.a.auto,fontSize:null,backgroundColor:""}}render(){var t,e,a,s;const n=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],h=this.props.useDataSources&&this.props.useDataSources[0];let f=null;f=Object(r.jsx)(g,{useDataSource:h,widgetId:this.props.id,index:this.state.currentDataIndex,limitGraphics:this.props.config.limitGraphics,maxGraphics:this.props.config.maxGraphics,onSelectedRecordIdChanged:this.onSelectedRecordIdChanged,onUnselectedRecordIdChanged:this.onUnselectedRecordIdChanged,onDataSourceStatusChanged:this.onDataSourceStatusChanged,onDataChanged:this.onDataChanged});let S=null;if(this.props.config.useMapWidget?n:h){let a=null;this.state.loadDataStatus===r.DataSourceStatus.Loading&&(a=Object(r.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-secondary-loading"}));let s=null,i=null;const n=this.props.intl.formatMessage({id:"featureInfoDataActionLabel",defaultMessage:l},{layer:(null===(e=null===(t=this.dataSource)||void 0===t?void 0:t.layerDefinition)||void 0===e?void 0:e.name)||""}),h=void 0===this.props.enableDataAction||this.props.enableDataAction;this.currentData&&this.currentData.count>0&&h&&(s=Object(r.jsx)("div",{className:"data-action-placeholder"}),i=Object(r.jsx)("div",{className:"data-action-dropdown-content"},Object(r.jsx)(o.DataActionDropDown,{dataName:n,widgetId:this.props.id,dataSource:this.dataSource,records:[this.currentData.record],type:"tertiary"})));let g=null;if(this.currentData&&this.currentData.count>1){const t=this.props.intl.formatMessage({id:"featureNumbers",defaultMessage:c},{index:this.currentData.index+1,count:this.currentData.count});g=Object(r.jsx)("div",{className:"nav-section d-flex justify-content-center align-items-center"},Object(r.jsx)(o.Button,{className:"nav-btn",type:"tertiary",size:"sm",onClick:this.onPreGraphicBtnClick}," ","<"," "),Object(r.jsx)("span",null," ",t," "),Object(r.jsx)(o.Button,{className:"nav-btn",type:"tertiary",size:"sm",onClick:this.onNextGraphictBtnClick}," ",">"," "))}let v=null;this.currentData&&(1===this.currentData.count?h:this.currentData.count>1)&&this.state.loadDataStatus!==r.DataSourceStatus.NotReady&&(v=Object(r.jsx)("div",{className:"header-section"},s,g,i));const D={title:this.props.config.title,content:{fields:this.props.config.fields,text:this.props.config.fields,media:this.props.config.media,attachments:this.props.config.attachments},lastEditedInfo:this.props.config.lastEditInfo};let y;if(this.state.loadDataStatus===r.DataSourceStatus.NotReady){const t=this.props.intl.formatMessage({id:"outputDataIsNotGenerated",defaultMessage:"warning"},{outputDsLabel:this.state.dataSourceLabel,sourceWidgetName:this.props.dataSourceWidgetLabel});y=Object(r.jsx)("div",{className:"widget-featureInfo"},Object(r.jsx)(o.WidgetPlaceholder,{icon:m,message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:u}),widgetId:this.props.id}),Object(r.jsx)(o.Icon,{className:"warning-icon",icon:this.warningIcon,size:26,title:t,options:{currentColor:!1}}))}else y=this.currentData&&this.dataSource?Object(r.jsx)("div",{style:{cursor:"pointer"},onClick:this.onCurrentFeatureClick},Object(r.jsx)(p,{graphic:this.currentData.graphic,visibleElements:D,dataSource:this.dataSource})):Object(r.jsx)("div",{className:"no-data-message p-4 font-weight-bold",dangerouslySetInnerHTML:{__html:this.props.config.noDataMessage||this.props.intl.formatMessage({id:"noDeataMessageDefaultText",defaultMessage:d})}});S=Object(r.jsx)("div",{className:"widget-featureInfo"},a,v,y,Object(r.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),Object(r.jsx)("div",{style:{position:"absolute",display:"none"}},f))}else S=Object(r.jsx)("div",{className:"widget-featureInfo"},Object(r.jsx)(o.WidgetPlaceholder,{icon:m,message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:u}),widgetId:this.props.id})),this.currentData=null;return Object(r.jsx)("div",{css:i(this.props.theme,this.props.config.styleType,this.getStyleConfig(),null===(s=null===(a=Object(r.getAppStore)().getState())||void 0===a?void 0:a.appContext)||void 0===s?void 0:s.isRTL),className:"jimu-widget"},S)}}D.versionManager=v,D.mapExtraStateProps=(t,e)=>{var a,o;const s=e.useDataSources&&e.useDataSources[0],i=r.appConfigUtils.getWidgetIdByOutputDataSource(s);return{dataSourceWidgetLabel:null===(o=null===(a=t.appConfig)||void 0===a?void 0:a.widgets[i])||void 0===o?void 0:o.label}}},58:function(t,e,a){"use strict";var r,o;a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return o})),function(t){t.syncWithTheme="syncWithTheme",t.usePopupDefined="usePopupDefined",t.custom="custom"}(r||(r={})),function(t){t.auto="auto",t.custom="custom"}(o||(o={}))}}))}}}));
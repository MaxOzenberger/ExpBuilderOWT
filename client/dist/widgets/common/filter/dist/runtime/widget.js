System.register(["jimu-core","jimu-ui","jimu-ui/basic/sql-expression-runtime"],(function(e){var t,s,i;return{setters:[function(e){t=e},function(e){s=e},function(e){i=e}],execute:function(){e(function(e){var t={};function s(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=494)}({0:function(e,s){e.exports=t},1:function(e,t){e.exports=s},334:function(e,t){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.342 0h14.817c.74 0 1.341.611 1.341 1.365 0 .278-.083.549-.239.777l-5.4 6.1a1.38 1.38 0 00-.234.665l-.74 9.236a1.36 1.36 0 01-.928 1.188l-1.846.603a1.337 1.337 0 01-1.687-.882 1.387 1.387 0 01-.063-.347l-.5-9.775a1.381 1.381 0 00-.236-.707l-5.388-6.08a1.38 1.38 0 01.339-1.9C1.802.085 2.068 0 2.342 0zM7.73 7.446c.283.417.447.906.473 1.413l.5 9.776 1.846-.603.741-9.236c.039-.478.2-.938.468-1.332l5.4-6.099H2.343L7.73 7.446z" fill="#FFF" fill-rule="nonzero"></path></svg>'},39:function(e,t,s){"use strict";var i,r;s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return r})),function(e){e.Block="BLOCK",e.Inline="INLINE",e.Popper="POPPER"}(i||(i={})),function(e){e.Toggle="TOGGLE",e.Button="BUTTON"}(r||(r={}))},40:function(e,t){e.exports=i},494:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return x}));var i=s(0),r=s(39),o=s(1),a=s(40);function l(e){const t=Object(i.getAppStore)().getState().appContext.isRTL;return i.css`
    overflow: auto;

    .filter-item {
      padding-bottom: 0.5rem;

      &.filter-item-popper{
        margin: 0.5rem;
        min-width: ${"300px"};
        max-width: ${"350px"};
      }

      .filter-item-inline {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;

        .filter-item-arrow{
          transform: rotate(${t?90:270}deg);
        }
        .filter-item-icon{
          margin-right: 0.5rem;

          &.no-arrow{
            margin-left: 0.5rem;
          }
        }
        .filter-item-name{
          font-size: ${i.polished.rem(13)};
          color: ${e.colors.black};
          word-break: break-word;
          &.no-icons{
            margin-left: 0.5rem;
          }
          &.toggle-name{
            white-space: nowrap;
            margin-right: 0.5rem;
          }
        }

        /* sql-expression-styles - start */
        .sql-expression-inline{
          align-items: center;

          &.sql-expression-wrap{
            display: block !important;

            .sql-expression-builder{
              overflow-x: hidden;
              .sql-expression-container{
                flex-wrap: wrap;
                align-content: flex-start;

                .sql-expression-set{
                  flex-wrap: wrap;
                }
              }
            }

          }

          .sql-expression-builder{
            overflow-x: auto;
            .sql-expression-container{
              display: flex;
              .sql-expression-single{
                margin-right: 0.5rem;
                &:last-of-type{
                  margin-right: 0;
                }
                /* .clause-inline{
                  min-width: ${"200px"};
                }
                .clause-block{
                  .sql-expression-input{
                    min-width: ${"200px"};
                  }
                }
                .sql-expression-displaylabel{
                  min-width: ${"200px"};
                } */
              }
              .sql-expression-set{
                display: flex;
              }
            }
          }

        }
        /* sql-expression-styles - end */

      }
    }

    .filter-item:last-child{
      padding-bottom: 0 !important;
    }

    &.filter-items-inline{
      display: flex;
      .sql-expression-builder .sql-expression-container .sql-expression-single .sql-expression-input .pill-btn-container{
        flex-wrap: nowrap;
        .pill-btn{
          overflow: visible;
        }
      }

      &.filter-items-wrap{
        flex-wrap: wrap;
        align-content: flex-start;

        .sql-expression-builder .sql-expression-container .sql-expression-single .sql-expression-input .pill-btn-container{
          flex-wrap: wrap;
        }
      }
      .filter-item{
        /* padding: 0; */
        &.filter-item-popper{
          min-width: 300px;
          padding-bottom: 0.5rem;
          .filter-item-inline {
            padding-bottom: 0.5rem;
            padding-top: 0.5rem;
          }
        }
        .filter-item-inline{
          padding: 0;
          /* height: 100%; */
          overflow-y: auto;
          background-color: unset !important;
          border: none !important;

          .filter-expanded-container{
            width: ${"300px"};
            padding-top: 0.5rem;
          }

          /* .filter-item-clause-pill{
            margin: 10px 5px;
            white-space: nowrap;
          } */

          /* .filter-popper-container{ */
            .filter-item-pill{
              margin: 10px 4px;
              white-space: nowrap;

              .sql-expression-single{
                margin: 0;
              }

              &.filter-item-toggle-pill{
                /* &:hover{
                  background-color: ${e.colors.palette.light[100]};
                } */
                display: flex;
                flex-direction: row;
                height: 32px;
                align-items: center;
                padding: 0 0.5rem;
              }
            /* } */
            /* .pill-display-label{
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            } */
          }

          /*input editor width*/
          .sql-expression-builder{
            .sql-expression-container{
              .sql-expression-single{
                .clause-inline{
                  .sql-expression-label{
                    margin-right: 0.5rem;
                    width: auto;
                    overflow: visible;
                  }
                  .sql-expression-input{
                    width: auto;
                  }

                }
                /* .clause-block{ */
                  .sql-expression-input{
                    min-width: ${"200px"};
                    .double-number-picker{
                      min-width: ${"300px"};
                    }
                    .double-datetime-picker{
                      min-width: ${"350px"};
                    }
                  }
                /* } */
                .sql-expression-displaylabel{
                  white-space: nowrap;
                  padding-right: 0.5rem;
                  font-size: 13px;
                }
              }
            }
          }

        }
      }
    }

    &.filter-items-popup{
      min-width: ${"300px"};
      max-width: ${"350px"};
    }

    .apply-cancel-group{
      white-space: nowrap;
      overflow: visible;
    }
  `}const n=s(95),p=[{name:"preventOverflow",options:{altAxis:!0}}];class c extends i.React.PureComponent{constructor(e){super(e),this.getOutPutWidgetLabel=()=>{var e;return null===(e=Object(i.getAppStore)().getState().appConfig.widgets[i.appConfigUtils.getWidgetIdByOutputDataSource(this.props.useDataSource)])||void 0===e?void 0:e.label},this.getAppliedState=()=>{let e=this.props.config.autoApplyWhenWidgetOpen;return this.props.omitInternalStyle&&1===this.endUserClausesNum&&1===this.clausesNumConfigured&&(e=!0),e},this.oncollapsedChange=()=>{this.setState({collapsed:!this.state.collapsed})},this.onApplyChange=e=>{this.setState({sqlChanged:!1}),this.props.onChange(this.props.id,this.props.selectedDs,this.state.sqlExprObj,e)},this.onToggleChange=e=>{this.setState({applied:e}),this.onApplyChange(e)},this.onPillClick=(e,t)=>{if(e)this.onTogglePopper();else{const e=t.className.indexOf("active")<0;this.onToggleChange(!!e)}},this.onSqlExpressionChange=e=>{var t;this.setState({sqlExprObj:e,sqlChanged:!(this.props.triggerType!==r.b.Button||this.props.omitInternalStyle||(null===(t=this.props.config.sqlExprObj)||void 0===t?void 0:t.sql)===(null==e?void 0:e.sql))}),(this.props.triggerType===r.b.Toggle||this.props.omitInternalStyle)&&this.props.onChange(this.props.id,this.props.selectedDs,e,this.state.applied)},this.onTogglePopper=()=>{this.setState({isOpen:!this.state.isOpen})},this.getFilterItem=(e,t=!1)=>{const{icon:s,name:a}=this.props.config;return Object(i.jsx)("div",{className:"h-100"},Object(i.jsx)("div",{className:Object(i.classNames)("d-flex justify-content-between w-100 pr-2 align-items-center",t?"flex-row-reverse":"")},!t&&e&&Object(i.jsx)(o.Button,{size:"sm",icon:!0,type:"tertiary",onClick:this.oncollapsedChange},Object(i.jsx)(o.Icon,{className:this.state.collapsed?"filter-item-arrow":"",icon:n,size:8})),!t&&s&&Object(i.jsx)("div",{className:Object(i.classNames)("filter-item-icon",e?"":"no-arrow")},Object(i.jsx)(o.Icon,{icon:s.svg,size:s.properties.size})),!t&&Object(i.jsx)("div",{className:Object(i.classNames)("filter-item-name flex-grow-1",e||s?"":"no-icons")},a),this.props.triggerType===r.b.Toggle&&Object(i.jsx)("div",{className:"ml-1 d-flex align-items-center"},this.getToggle())),this.state.sqlExprObj&&Object(i.jsx)("div",{style:{display:this.state.collapsed?"none":"block"},className:Object(i.classNames)("w-100 pl-5 pr-5",this.props.arrangeType===r.a.Inline&&1===this.props.filterNum&&this.props.omitInternalStyle?"sql-expression-inline":"",this.props.arrangeType===r.a.Inline&&1===this.props.filterNum&&this.props.wrap?"sql-expression-wrap":"")},this.getSqlExpression()),this.props.triggerType===r.b.Button&&Object(i.jsx)("div",{className:"d-flex justify-content-end pl-4 pr-4 pt-2 pb-2"},this.getApplyButtons()))},this.isDataSourceError=()=>null===this.props.selectedDs,this.isOutputFromWidget=()=>{var e;return null===(e=this.props.selectedDs)||void 0===e?void 0:e.getDataSourceJson().isOutputFromWidget},this.isOutputDataSourceValid=()=>this.isOutputFromWidget()&&!this.props.isNotReadyFromWidget,this.isOutputDataSourceInvalid=()=>this.isOutputFromWidget()&&this.props.isNotReadyFromWidget,this.isDataSourceValid=()=>this.props.selectedDs&&(this.isOutputFromWidget()&&!this.props.isNotReadyFromWidget||!this.isOutputDataSourceInvalid()),this.isDataSourceLoadingOrInvalid=()=>!this.isDataSourceValid(),this.getErrorIcon=()=>{if(this.isDataSourceError()){const e=this.props.intl.formatMessage({id:"dataSourceCreateError",defaultMessage:i.defaultMessages.dataSourceCreateError});return Object(i.jsx)(o.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:e})}if(this.isOutputDataSourceInvalid()){const e=this.props.intl.formatMessage({id:"outputDataIsNotGenerated",defaultMessage:o.defaultMessages.outputDataIsNotGenerated},{outputDsLabel:this.props.selectedDs.getLabel(),sourceWidgetName:this.state.outputWidgetLabel});return Object(i.jsx)(o.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"warning",text:e})}return null},this.getToggle=()=>Object(i.jsx)(i.React.Fragment,null,this.getErrorIcon(),Object(i.jsx)(o.Switch,{checked:this.state.applied,disabled:this.isDataSourceLoadingOrInvalid(),onChange:e=>this.onToggleChange(e.target.checked)})),this.getApplyButtons=()=>Object(i.jsx)("div",{className:"w-100 d-flex justify-content-end apply-cancel-group"},this.getErrorIcon(),Object(i.jsx)(o.Button,{type:"primary",className:"filter-apply-button wrap",disabled:this.isDataSourceLoadingOrInvalid()||!(!this.state.applied||this.state.sqlChanged),onClick:()=>this.onApplyChange(!0)},this.props.intl.formatMessage({id:"apply",defaultMessage:i.defaultMessages.apply})),Object(i.jsx)(o.Button,{type:"default",className:"filter-cancel-button ml-2",disabled:this.isDataSourceLoadingOrInvalid()||!this.state.applied,onClick:()=>this.onApplyChange(!1)},this.props.intl.formatMessage({id:"clear",defaultMessage:o.defaultMessages.clear}))),this.getTriggerNodeForClauses=(e=this.props.triggerType)=>{let t=null;switch(e){case r.b.Toggle:t=this.getToggle();break;case r.b.Button:t=this.getApplyButtons()}return t},this.getSqlExpression=()=>this.isDataSourceValid()?Object(i.jsx)(a.SqlExpressionRuntime,{widgetId:this.props.widgetId,dataSource:this.props.selectedDs,expression:this.state.sqlExprObj,onChange:this.onSqlExpressionChange}):null,this.getTirggerNodeForWrapClauses=e=>e===this.props.triggerType&&this.isSingleFilterAndMultipleClauses()&&this.props.wrap&&Object(i.jsx)("div",{className:"d-flex flex-row-reverse"},this.getTriggerNodeForClauses(e)),this.getTriggerNodeForNoWrapClause=()=>this.isSingleFilterAndMultipleClauses()&&!this.props.wrap&&Object(i.jsx)("div",{className:"ml-3 mr-3"},this.getTriggerNodeForClauses()),this.endUserClausesNum=Object(a.getShownClauseNumberByExpression)(this.props.config.sqlExprObj),this.clausesNumConfigured=Object(a.getTotalClauseNumberByExpression)(this.props.config.sqlExprObj),this.state={isOpen:!1,applied:this.getAppliedState(),collapsed:this.props.config.collapseFilterExprs,sqlExprObj:this.props.config.sqlExprObj,sqlChanged:!1,outputWidgetLabel:this.getOutPutWidgetLabel()}}componentDidUpdate(e){this.endUserClausesNum=Object(a.getShownClauseNumberByExpression)(this.props.config.sqlExprObj),this.clausesNumConfigured=Object(a.getTotalClauseNumberByExpression)(this.props.config.sqlExprObj),e.config!==this.props.config||e.selectedDs!==this.props.selectedDs?this.setState({applied:this.getAppliedState(),collapsed:this.props.config.collapseFilterExprs,sqlExprObj:this.props.selectedDs?this.props.config.sqlExprObj:null,outputWidgetLabel:this.props.useDataSource.dataSourceId===e.useDataSource.dataSourceId?this.state.outputWidgetLabel:this.getOutPutWidgetLabel()}):e.logicalOperator===this.props.logicalOperator&&e.omitInternalStyle===this.props.omitInternalStyle||this.setState({applied:this.getAppliedState()})}componentWillUnmount(){this.state.applied&&this.props.onChange(this.props.id,this.props.selectedDs,null,!0)}isSingleFilterAndMultipleClauses(){return 1===this.props.filterNum&&this.clausesNumConfigured>1&&this.endUserClausesNum>=1}isSingleFilterAndSingleShownClause(){return 1===this.props.filterNum&&1===this.clausesNumConfigured&&1===this.endUserClausesNum}isMultipleFiltersAndSingleShownClause(){return this.props.filterNum>1&&1===this.clausesNumConfigured&&1===this.endUserClausesNum}render(){const{name:e,icon:t}=this.props.config;return Object(i.jsx)("div",{className:"filter-item"},Object(i.jsx)(o.Card,{className:"filter-item-inline"},this.props.arrangeType===r.a.Block?Object(i.jsx)("div",{className:"w-100"},this.props.omitInternalStyle&&(this.isSingleFilterAndSingleShownClause()||this.isMultipleFiltersAndSingleShownClause())?Object(i.jsx)("div",{className:"w-100 pl-5 pr-5"},this.getSqlExpression()):Object(i.jsx)("div",{className:"filter-expanded-container"},this.getFilterItem(this.endUserClausesNum>=1))):Object(i.jsx)(i.React.Fragment,null,this.isSingleFilterAndSingleShownClause()?Object(i.jsx)("div",{className:"sql-expression-inline d-flex"},this.getSqlExpression(),!this.props.omitInternalStyle&&Object(i.jsx)("div",{className:"ml-3 mr-3"},this.getTriggerNodeForClauses())):Object(i.jsx)(i.React.Fragment,null,this.isSingleFilterAndMultipleClauses()||this.isMultipleFiltersAndSingleShownClause()&&this.props.omitInternalStyle?Object(i.jsx)("div",{className:Object(i.classNames)("sql-expression-inline d-flex",{"sql-expression-wrap":this.props.wrap,"filter-item-pill":this.isMultipleFiltersAndSingleShownClause()})},this.getTirggerNodeForWrapClauses(r.b.Toggle),this.getSqlExpression(),this.getTirggerNodeForWrapClauses(r.b.Button),this.getTriggerNodeForNoWrapClause()):Object(i.jsx)("div",{className:"filter-popper-container"},this.props.triggerType===r.b.Toggle&&0===this.endUserClausesNum?Object(i.jsx)(o.Card,{className:"filter-item-pill filter-item-toggle-pill"},t&&Object(i.jsx)(o.Icon,{icon:t.svg,size:t.properties.size,className:"mr-1"}),Object(i.jsx)("div",{className:"filter-item-name toggle-name"},e),this.getToggle()):Object(i.jsx)("div",{className:"filter-item-pill h-100 nowrap"},Object(i.jsx)(o.Button,{className:Object(i.classNames)("",{"frame-active":this.state.applied}),title:e,ref:e=>this.pillButton=e,type:"default",onClick:e=>this.onPillClick(this.endUserClausesNum>=1,this.pillButton)},t&&Object(i.jsx)(o.Icon,{icon:t.svg,size:t.properties.size}),e)),this.endUserClausesNum>=1&&Object(i.jsx)(o.Popper,{open:this.state.isOpen,toggle:this.onTogglePopper,modifiers:p,showArrow:!0,reference:this.pillButton},Object(i.jsx)("div",{css:l(this.props.theme)},Object(i.jsx)("div",{className:"filter-item filter-item-popper overflow-auto",style:{maxHeight:"calc(100vh - 20px)"}},Object(i.jsx)(o.Card,{className:"filter-item-inline"},this.getFilterItem(this.endUserClausesNum>=1,this.props.arrangeType!==r.a.Popper))))))))))}}var u=function(e,t,s,i){return new(s||(s=Promise))((function(r,o){function a(e){try{n(i.next(e))}catch(e){o(e)}}function l(e){try{n(i.throw(e))}catch(e){o(e)}}function n(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,l)}n((i=i.apply(e,t||[])).next())}))};class d extends i.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.1.0",description:"",upgrader:e=>u(this,void 0,void 0,(function*(){return yield function(e){return u(this,void 0,void 0,(function*(){const t=[],s=i.DataSourceManager.getInstance();return e&&e.map(e=>{e.sqlExprObj&&t.push(s.createDataSourceByUseDataSource(Object.assign({},e.dataSource,{mainDataSourceId:e.dataSource.dataSourceId})))}),Promise.all(t)}))}(e.filterItems).then(t=>{let s=e;s=s.set("arrangeType",r.a.Block),s=s.set("triggerType",r.b.Toggle),s=s.set("wrap",!1),s=s.set("omitInternalStyle",!1);const i=t.map((e,t)=>{const i=s.filterItems[t];return Object.assign({},i,{sqlExprObj:i.sqlExprObj?Object(a.updateSQLExpressionByVersion)(i.sqlExprObj,"1.1.0",e):null,icon:i.icon.setIn(["properties","color"],null),useDataSource:Object.assign({},i.dataSource,{mainDataSourceId:i.dataSource.dataSourceId})})});return s=s.set("filterItems",i),s})}))}]}}const h=new d;var g="Filter";class m extends i.React.PureComponent{constructor(e){super(e),this.onDataSourceCreated=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,e)},this.onDataSourceInfoChange=e=>{this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId,null==e?void 0:e.status)},this.onCreateDataSourceFailed=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null)}}componentWillUnmount(){this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null),this.props.onIsDataSourceNotReady(this.props.useDataSource.dataSourceId,i.DataSourceStatus.NotReady)}render(){const{useDataSource:e}=this.props;return Object(i.jsx)(i.DataSourceComponent,{useDataSource:e,onDataSourceCreated:e=>{this.onDataSourceCreated(e)},onCreateDataSourceFailed:e=>{this.onCreateDataSourceFailed(e)},onDataSourceInfoChange:this.onDataSourceInfoChange})}}const f=s(334),S=[Object(o.getCustomFlipModifier)({fallbackPlacements:["top","left","right"],useClosestVerticalPlacement:!0}),o.maxSizeModifier,o.applyMaxSizeModifier];class x extends i.React.PureComponent{constructor(e){super(e),this.setSqlToAllDs=()=>{Object.keys(this.state.dataSources).map(e=>{const t=this.state.dataSources[e];if(t){const e=this.getQuerySqlFromDs(t);this.setSqlToDs(t,e)}})},this.onFilterItemChange=(e,t,s,r)=>{if(this.__unmount)return;if(!this.state.filterItems[e]&&r)return void this.setSqlToDs(t,"");const o=this.state.filterItems.asMutable({deep:!0}),a=!(!r&&!o[e].autoApplyWhenWidgetOpen),l=Object.assign({},o[e],{sqlExprObj:s,autoApplyWhenWidgetOpen:r});o.splice(e,1,l);const n=Object(i.Immutable)(o);if(this.setState({filterItems:n}),a){const e=this.getQuerySqlFromDs(t,n);this.setSqlToDs(t,e)}},this.setSqlToDs=(e,t)=>{var s,i;null===(i=null===(s=e)||void 0===s?void 0:s.updateQueryParams)||void 0===i||i.call(s,{where:t},this.props.id)},this.getQuerySqlFromDs=(e,t=this.props.config.filterItems)=>{const s=[];t.map(t=>{if(t.useDataSource.dataSourceId===(null==e?void 0:e.id)&&(t.autoApplyWhenWidgetOpen||this.props.config.omitInternalStyle&&1===Object(a.getShownClauseNumberByExpression)(t.sqlExprObj))){const r=i.dataSourceUtils.getArcGISSQL(t.sqlExprObj,e).sql;r&&s.push(r)}});let r="";return s.length&&(r=1===s.length?s[0]:"("+s.join(") "+this.props.config.logicalOperator+" (")+")"),r},this.getDataSourceById=e=>{const t=this.props.useDataSources.asMutable({deep:!0}).filter(t=>t.dataSourceId===e);return Object(i.Immutable)(t[0])},this.isDataSourceRemoved=e=>{var t;return 0===(null===(t=this.props.useDataSources)||void 0===t?void 0:t.filter(t=>e===t.dataSourceId).length)},this.getFilterItems=(e,t=r.a.Block,s=!1,o=!1)=>Object(i.jsx)("div",{className:Object(i.classNames)("w-100 h-100",t&&e.arrangeType===r.a.Inline?"filter-items-inline":"",s?"filter-items-wrap":"",o?"filter-items-popup":""),css:l(this.props.theme)},this.state.filterItems.map((r,o)=>{const a=this.isDataSourceRemoved(r.useDataSource.dataSourceId)?null:this.state.dataSources[r.useDataSource.dataSourceId],l=this.state.outputDataSourceIsNotReady[r.useDataSource.dataSourceId];return Object(i.jsx)(c,{key:o,id:o,widgetId:this.props.id,intl:this.props.intl,selectedDs:a,useDataSource:r.useDataSource,isNotReadyFromWidget:l,logicalOperator:e.logicalOperator,config:r,arrangeType:t,triggerType:e.triggerType,wrap:s,omitInternalStyle:e.omitInternalStyle,filterNum:this.state.filterItems.length,onChange:this.onFilterItemChange,itemBgColor:this.props.theme.colors.palette.light[300],theme:this.props.theme})})),this.onShowPopper=()=>{this.setState({isOpen:!this.state.isOpen,popperVersion:this.state.isOpen?this.state.popperVersion:this.state.popperVersion+1})},this.onTogglePopper=()=>{this.setState({isOpen:!1})},this.checkIfAnyFiltersApplied=()=>{var e;const{omitInternalStyle:t}=this.props.config;return((null===(e=this.state)||void 0===e?void 0:e.filterItems)||this.props.config.filterItems).some(e=>t&&1===Object(a.getTotalClauseNumberByExpression)(e.sqlExprObj)&&1===Object(a.getShownClauseNumberByExpression)(e.sqlExprObj)?""!==(this.state.dataSources[e.useDataSource.dataSourceId]?i.dataSourceUtils.getArcGISSQL(e.sqlExprObj,this.state.dataSources[e.useDataSource.dataSourceId]).sql:e.sqlExprObj.sql):e.autoApplyWhenWidgetOpen)},this.onIsDataSourceNotReady=(e,t)=>{this.setState(s=>{var r;if(!(null===(r=s.dataSources[e])||void 0===r?void 0:r.getDataSourceJson().isOutputFromWidget))return;const o=Object.assign({},s.outputDataSourceIsNotReady);return o[e]=t===i.DataSourceStatus.NotReady,{outputDataSourceIsNotReady:o}})},this.onCreateDataSourceCreatedOrFailed=(e,t)=>{this.setState(s=>{const i=Object.assign({},s.dataSources);return i[e]=t,{dataSources:i}})},this.applyAutoFiltersAtStart=()=>{var e;if(this._autoApplyInit){Object.keys(this.state.dataSources).map(()=>!0).length===(null===(e=this.props.useDataSources)||void 0===e?void 0:e.length)&&(this._autoApplyInit=!1,setTimeout(()=>{this.setSqlToAllDs()},0))}},this.__unmount=!1,this.index=0,this._autoApplyInit=!0,this.state={popperVersion:1,isOpen:!1,filterItems:this.props.config.filterItems,dataSources:{},outputDataSourceIsNotReady:{}}}componentWillUnmount(){this.__unmount=!0,Object.keys(this.state.dataSources).map(e=>{var t;null===(t=this.state.dataSources[e])||void 0===t||t.updateQueryParams(null,this.props.id)})}componentDidUpdate(e,t){this.__unmount||(this._autoApplyInit=!1,e.config!==this.props.config?(this.setState({filterItems:this.props.config.filterItems}),this.setSqlToAllDs()):this.state.dataSources!==t.dataSources&&(this._autoApplyInit=!0,this.applyAutoFiltersAtStart()))}render(){var e;const{config:t,icon:s,label:a}=this.props;return 0===this.state.filterItems.length?Object(i.jsx)(o.WidgetPlaceholder,{icon:f,widgetId:this.props.id,message:this.props.intl.formatMessage({id:"_widgetLabel",defaultMessage:g})}):Object(i.jsx)("div",{className:"jimu-widget widget-filter overflow-auto"},null===(e=this.props.useDataSources)||void 0===e?void 0:e.map((e,t)=>Object(i.jsx)(m,{key:t,useDataSource:e,onIsDataSourceNotReady:this.onIsDataSourceNotReady,onCreateDataSourceCreatedOrFailed:this.onCreateDataSourceCreatedOrFailed})),t.arrangeType===r.a.Popper?Object(i.jsx)("div",{className:"filter-widget-popper"},Object(i.jsx)(o.Badge,{dot:!0,className:"m-1",hideBadge:!this.checkIfAnyFiltersApplied(),color:"primary"},Object(i.jsx)(o.Button,{icon:!0,size:"sm",className:"filter-widget-pill h-100",ref:e=>this.widgetIconRef=e,title:a,type:"tertiary",onClick:this.onShowPopper},Object(i.jsx)(o.Icon,{icon:"string"==typeof s?s:s.svg,size:16,color:"string"==typeof s?"":s.properties.color}))),this.state.popperVersion>1&&Object(i.jsx)(o.Popper,{open:this.state.isOpen,version:this.state.popperVersion,keepMount:!0,toggle:this.onTogglePopper,showArrow:!0,modifiers:S,reference:this.widgetIconRef},Object(i.jsx)("div",{className:"p-2"},this.getFilterItems(t,r.a.Block,!1,!0)))):Object(i.jsx)("div",{className:"w-100 h-100"},this.getFilterItems(t,t.arrangeType,t.wrap)))}}x.versionManager=h},95:function(e,t){e.exports='<svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"><path d="M4.128 4.587L.751.834A.5.5 0 011.123 0h6.754a.5.5 0 01.372.834L4.872 4.587a.5.5 0 01-.744 0z" fill="#000" fill-rule="evenodd"></path></svg>'}}))}}}));
System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-for-builder/service"],(function(e){var t,i,s,o,a,r;return{setters:[function(e){t=e},function(e){i=e},function(e){s=e},function(e){o=e},function(e){a=e},function(e){r=e}],execute:function(){e(function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=104)}({0:function(e,i){e.exports=t},1:function(e,t){e.exports=i},104:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return U}));var s,o,a=i(0),r=i(1),l=i(2),n=i(8);!function(e){e.Experience="Web Experience",e.Template="Web Experience Template"}(s||(s={})),function(e){e.Published="Published",e.Draft="Draft",e.Changed="Changed",e.Publishing="Publishing"}(o||(o={}));var p={createNew:"Create new",newExperience:"New experience",undo:"Undo",redo:"Redo",save:"Save",saving:"Saving",saved:"Saved",download:"Download",saveError:"Saving error",saveSuccess:"Saved successfully!",publishing:"Publishing",published:"Published",publishError:"Publishing error",publishSuccess:"Published successfully!",publishTo:"Publish to",publishOptions:"Publish options",copySuccess:"Copied successfully!",changeShareSettings:"Change share settings",viewPublishedItem:"View published item",copyPublishedItemLink:"Copy published item link",headerLeave:"Leave",headerLeaveSite:"Leave site?",headerLeaveDescription:"Changes you made may not be saved.",editPageForLargeScreen:"Edit your page for large screen devices",editPageForMediumScreen:"Edit your page for medium screen devices",editPageForSmallScreen:"Edit your page for small screen devices",appMode:"Live view",generateTemplate:"Generate template",moreOptionsForTool:"More",moreTools:"More tools",access:"Access",generateTemplateSuccess:"Generated template successfully!",generateTemplateError:"Generating error",headerLockLayout:"Lock layout",enableLayoutEditing:"Turn on layout lock to disable layout editing",disableLayoutEditing:"Turn off layout lock to enable layout editing",layoutIsEnabled:"Layout editing is enabled.",layoutIsDisabled:"Layout editing is disabled.",appTypeTemplate:"Experience Template",appTypeExperience:"Experience",publishedTitle:"This item can be viewed by users you've shared with.",publishedUnsaveTitle:"There are unpublished changes since last publishing.",itemStatusDraft:"Draft",draftStatusTitle:"This item is not published. It can only be viewed by you.",headerHome:"Home",renameExperience:"Rename experience",renameTemplate:"Rename template",turnOnLiveView:"Turn on live view",turnOffLiveView:"Turn off live view",changeScreenSize:"Change screen size",createNewExperience:"Create new experience",gotIt:"Got it",templateRemind:"You are now working on an experience template.",unpublishedChanges:"Unpublished changes"};class d extends a.React.PureComponent{constructor(e){super(e)}getStyle(e){return a.css`
      .item-inner {
        width: 16px;
        height: 16px;
        position: relative;
      }

      .item-loader-container {
        width: 100%;
        height: 100%;
      }

      .la-ball-fall,
        .la-ball-fall>div {
          position:relative;
          -webkit-box-sizing:border-box;
          -moz-box-sizing:border-box;
          box-sizing:border-box
        }
      
      .la-ball-fall {
        display:block;
        font-size:0;
        color:${e.colors.black}
      }
      
      .la-ball-fall>div {
        display:inline-block;
        float:none;
        background-color:currentColor;
        border:0 solid currentColor
      } 
      
      .la-ball-fall {
        width:54px;
        height:18px
      }
      
      .la-ball-fall>div{
        width:10px;
        height:10px;
        margin:4px;
        border-radius:100%;
        opacity:0;
        -webkit-animation:ball-fall 1s ease-in-out infinite;
        -moz-animation:ball-fall 1s ease-in-out infinite;
        -o-animation:ball-fall 1s ease-in-out infinite;
        animation:ball-fall 1s ease-in-out infinite
      }
      
      .la-ball-fall>div:nth-of-type(1){
        -webkit-animation-delay:-200ms;
        -moz-animation-delay:-200ms;
        -o-animation-delay:-200ms;
        animation-delay:-200ms
      }
      
      .la-ball-fall>div:nth-of-type(2){
        -webkit-animation-delay:-100ms;
        -moz-animation-delay:-100ms;
        -o-animation-delay:-100ms;
        animation-delay:-100ms
      }
      
      .la-ball-fall>div:nth-of-type(3){
        -webkit-animation-delay:0ms;
        -moz-animation-delay:0ms;
        -o-animation-delay:0ms;
        animation-delay:0ms
      }
      
      .la-ball-fall.la-2x{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      
      .la-ball-fall.la-2x>div{
        width:25%;
        height:25%;
        margin:3%;
      }
      
      @-webkit-keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}
      }
      
      @-moz-keyframes ball-fall{
        0%{opacity:0;-moz-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-moz-transform:translateY(145%);transform:translateY(145%)}
      }
      
      @-o-keyframes ball-fall{
        0%{opacity:0;-o-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-o-transform:translateY(145%);transform:translateY(145%)}
      }
      
      @keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);
        -moz-transform:translateY(-145%);
        -o-transform:translateY(-145%);
        transform:translateY(-145%)}10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;
        -webkit-transform:translateY(145%);
        -moz-transform:translateY(145%);
        -o-transform:translateY(145%);
        transform:translateY(145%)}
      }
    `}render(){return Object(a.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},Object(a.jsx)("div",{className:"item-inner"},Object(a.jsx)("div",{className:"item-loader-container"},Object(a.jsx)("div",{className:"la-ball-fall la-2x"},Object(a.jsx)("div",null),Object(a.jsx)("div",null),Object(a.jsx)("div",null)))))}}const h=d;var c,u=i(3),m=i(5),g=function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function r(e){try{n(s.next(e))}catch(e){a(e)}}function l(e){try{n(s.throw(e))}catch(e){a(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}n((s=s.apply(e,t||[])).next())}))};!function(e){e.NewApp="NewApp",e.SaveAsTemplate="SaveAsTemplate",e.Publish="Publish"}(c||(c={}));const b=i(72),v=i(73),f=i(74),w=i(75),x=i(76),S=Object.assign({},p,r.defaultMessages,a.defaultMessages);class y extends a.React.PureComponent{constructor(e){super(e),this.fontSizeBase=14,this.panelWidth=210/this.fontSizeBase+"rem",this.save="save",this.saved="saved",this.saving="saving",this.saveError="saveError",this.saveSuccess="saveSuccess",this.publish="publish",this.published="published",this.publishing="publishing",this.publishError="publishError",this.publishSuccess="publishSuccess",this.translationMap={},this.checkIsSaved=()=>this.state.saveState===this.saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1,this.onUndo=()=>{this.props.stateHistory.past.length<=1||Object(a.getAppStore)().dispatch(l.appStateHistoryActions.InBuilderAppConfigUndo())},this.onRedo=()=>{this.props.stateHistory.future.length<=0||Object(a.getAppStore)().dispatch(l.appStateHistoryActions.InBuilderAppConfigRedo())},this._getTimeOffset=e=>{const t=e.getTimezoneOffset();return(t<0?1:-1)*(t<0?Math.abs(t)/60:t/60)*60*60*1e3},this.onSaveClick=e=>g(this,void 0,void 0,(function*(){var t;this.setState({saveState:this.saving});const i=new Date,s=i.getTime()-this._getTimeOffset(i);return yield n.appServices.saveApp(null===(t=this.props)||void 0===t?void 0:t.appItem,this.props.appConfig.set("timestamp",s)).then(t=>g(this,void 0,void 0,(function*(){return this.setState({saveState:this.saved,savedAppConfig:Object(a.Immutable)(this.props.appConfig)}),this.updateTypeKeywordsRequest(),!e&&this.toastNote(this.translationMap[this.saveSuccess]),yield Promise.resolve()})),t=>g(this,void 0,void 0,(function*(){return console.error(t),this.setState({saveState:this.saveError}),!e&&this.toastNote(this.translationMap[this.saveError]),yield Promise.reject(t)})))})),this.updateTypeKeywordsRequest=()=>{const e=this.props.appItem;e.title=this.props.titleText;const t=this.getTypeKeywords();e.typeKeywords=t.typeKeywords,n.appServices.updateAppInfo(e).then(()=>{this.props.changePublishStatus(t.status)},e=>{console.error(e)})},this.getTypeKeywords=()=>{let e=!1,t=o.Draft;const{publishStatus:i}=this.props;let s=this.props.appItem.typeKeywords||[];if(s=s.map(s=>(s.includes("status:")&&(e=!0),s.includes("status:")&&i!=o.Draft?(t=o.Changed,"status: "+o.Changed):s)),!e){const e="status: "+o.Draft;t=o.Draft,s.push(e)}return{typeKeywords:s,status:t}},this.onPublishClick=()=>{this.props.publishStatus!=o.Publishing&&(this.state.saveState===this.saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1?this.tryToPublishApp():(this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=c.Publish))},this.tryToPublishApp=()=>g(this,void 0,void 0,(function*(){(yield u.proxySettingUtils.needToConfigProxy())?this.setState({isProxySettingPopupOpen:!0}):this.publishApp()})),this.onAppProxiesFinish=()=>g(this,void 0,void 0,(function*(){return yield this.onSaveClick().then(()=>this.publishApp())})),this.onAppProxiesCancel=()=>{this.setState({isProxySettingPopupOpen:!1})},this.onToggleProxySettingPopup=()=>{this.setState({isProxySettingPopupOpen:!this.state.isProxySettingPopupOpen})},this.publishApp=()=>{this.props.changePublishStatus(o.Publishing);const{appItem:e}=this.props;n.appServices.publishApp(e).then(()=>{this.setState({isPublished:!0}),this.props.changePublishStatus(o.Published),this.toastNote(this.translationMap[this.publishSuccess])},e=>{console.error(e),this.toastNote(this.translationMap[this.publishError]),this.props.changePublishStatus(o.Changed)})},this.onToggleToolTipUndo=()=>{this.setState({toolTipUndoOpen:!this.state.toolTipUndoOpen,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipRedo=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!this.state.toolTipRedoOpen,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipSave=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!this.state.toolTipSaveOpen,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPreview=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!this.state.toolTipPreviewOpen,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublish=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!this.state.toolTipPublishOpen,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublishOptions=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!this.state.toolTipPublishOptionsOpen})},this.togglePublishOptionList=()=>{this.setState({publishOptionsListOpen:!this.state.publishOptionsListOpen,toolTipPublishOptionsOpen:!1})},this.toggleMoreToolList=()=>{this.setState({moreToolListOpen:!this.state.moreToolListOpen})},this.copyPublishUrlToClipBoard=()=>{const e=location.origin+window.jimuConfig.mountPath+(window.jimuConfig.useStructuralUrl?`experience/${this.props.queryObject.id}/`:"experience/?id="+this.props.queryObject.id),t=document.createElement("input");t.value=e,t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.toastNote(this.copySuccess),this.setState({publishOptionsListOpen:!1})},this.isInOnLine=()=>a.portalUrlUtils.isAGOLDomain(this.props.portalUrl),this.toastNote=e=>{this.setState({isToastNote:!0,noteText:e},()=>{setTimeout(()=>{this.setState({isToastNote:!1,noteText:""})},2e3)})},this.saveForkeyBoard=()=>(this.state.saveState===this.saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1||this.state.saveState===this.saving||this.onSaveClick(),!1),this.isMac=()=>/macintosh|mac os x/i.test(navigator.userAgent),this.newApp=()=>{if(!this.checkIsSaved())return this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=c.NewApp,!1;this.toNewApp()},this.toNewApp=()=>{const{locale:e}=this.props,t=e?{redirect:"back",locale:e}:{redirect:"back"},i=e?{page:"template",redirect:"back",locale:e}:{page:"template",redirect:"back"};this.props.itemType==s.Experience?(a.jimuHistory.changePage("template"),window.jimuConfig.useStructuralUrl?a.jimuHistory.replaceQueryObject(t,!0):a.jimuHistory.replaceQueryObject(i,!0)):this.createNewAppByTemplate(this.props.appItem)},this.createNewAppByTemplate=e=>{n.appServices.createAppByItemTemplate(e).then(e=>{e&&(a.jimuHistory.replaceQueryObject({id:e},!0),this.props.changePublishStatus(o.Draft))},()=>{})},this.isConfirmsaveAsTemplate=()=>{if(!this.checkIsSaved())return this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=c.SaveAsTemplate,!1;this.saveAsTemplate()},this.saveAsTemplate=()=>{var e;this.toggleLoading(!0),n.appServices.createTemplateByApp(null===(e=this.props)||void 0===e?void 0:e.appItem).then(e=>{this.toggleLoading(!1),e&&(this.toastNote(this.generateTemplateSuccess),a.jimuHistory.replaceQueryObject({id:e},!0),this.props.changePublishStatus(o.Draft))},()=>{this.toastNote(this.generateTemplateError),this.toggleLoading(!1)})},this.toggleLoading=e=>{Object(a.getAppStore)().dispatch(a.appActions.setIsBusy(e,a.LoadingType.Primary))},this.deleteApp=(e,t)=>{n.appServices.deleteApp(e).then(()=>{t&&(a.jimuHistory.replaceQueryObject({id:t},!0),this.props.changePublishStatus(o.Draft))})},this.handleToggleForLeaveAlertPopup=e=>{if(this.setState({isShowLeaveAlertPopup:!this.state.isShowLeaveAlertPopup}),e)switch(this.clickEventType){case c.NewApp:this.toNewApp();break;case c.SaveAsTemplate:this.saveAsTemplate();break;case c.Publish:this.tryToPublishApp()}},this.previewToggle=()=>{this.setState({isShowPreviewAlertPop:!this.state.isShowPreviewAlertPop})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:S[e]}):e,this.getAlertPopTitle=()=>{switch(this.clickEventType){case c.NewApp:case c.SaveAsTemplate:return this.nls("headerLeaveSite");case c.Publish:return""+this.nls("publish")}},this.getAlertPopOkLabel=()=>{switch(this.clickEventType){case c.NewApp:case c.SaveAsTemplate:return this.nls("headerLeave");default:return""}},this.previewAlertPopStyle=()=>{var e,t,i,s,o,r;const l=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors;return a.css`
      .preview-alert-pop-content {
        font-size: 1rem;
        position: relative;
      }
      .modal-footer {
        padding: 0;
      }
      .modal-content {
        border: 1px solid ${null===(i=null==l?void 0:l.palette)||void 0===i?void 0:i.secondary[500]};
      }
      .perview-pop-button-con {
        right:0;
        bottom: -20px;
        text-align: right;
        margin-top: ${a.polished.rem(32)};
      }
      .preview-alert-pop-btn {
        min-width: ${a.polished.rem(80)};
        border: none;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.375rem;
        border-radius: 2px;
        background: transparent;
      }
      .btn-primary {
        color: ${null==l?void 0:l.black};
        background: ${null===(s=null==l?void 0:l.palette)||void 0===s?void 0:s.primary[500]};
      }
      .btn-cancle {
        color: ${null===(o=null==l?void 0:l.palette)||void 0===o?void 0:o.dark[600]};
        border-color: ${null===(r=null==l?void 0:l.palette)||void 0===r?void 0:r.secondary[800]};
        margin-left: ${a.polished.rem(10)};
        border-width: 1px;
        border-style: solid;
      }
    `},this.getTostStyle=()=>{var e,t,i,s,o,r,l,n,p,d,h;return a.css`
      & {
        height:  ${a.polished.rem(40)};
        top: ${a.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(s=null===(i=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===i?void 0:i.palette)||void 0===s?void 0:s.secondary[300]};
        line-height: ${a.polished.rem(40)};
        color: ${null===(n=null===(l=null===(r=null===(o=this.props)||void 0===o?void 0:o.theme)||void 0===r?void 0:r.colors)||void 0===l?void 0:l.palette)||void 0===n?void 0:n.dark[800]};
        font-weight: 300;
        padding: 0 ${a.polished.rem(16)};
        box-shadow: 0 0 ${a.polished.rem(10)} ${a.polished.rem(2)} ${a.polished.rgba(null===(h=null===(d=null===(p=this.props)||void 0===p?void 0:p.theme)||void 0===d?void 0:d.colors)||void 0===h?void 0:h.white,.2)};
      }
    `},this.getPublishText=()=>{const{publishStatus:e}=this.props;switch(e){case o.Published:return this.nls("published");case o.Publishing:return this.nls("publishing");case o.Changed:case o.Draft:return this.nls("publish")}},this.renderMore=()=>{var e,t;const i=window.jimuConfig.isDevEdition,{itemType:l,publishStatus:n,stateHistory:d,theme:c,queryObject:u}=this.props,{saveState:m}=this.state,g=l===s.Template,S=a.SessionManager.getInstance().getMainSession(),y=null==S?void 0:S.token,j=m===this.saved||(null===(e=null==d?void 0:d.past)||void 0===e?void 0:e.length)<=1&&(null===(t=null==d?void 0:d.future)||void 0===t?void 0:t.length)<1,O=a.urlUtils.getAppUrl({appId:u.id,isTemplate:g,isArcGisOnlineTemplate:!1,isPortalRequest:!1,isDraft:!0});return Object(a.jsx)("div",{className:"tool_more_con"},Object(a.jsx)(r.Dropdown,{size:"sm",toggle:this.togglePublishOptionList,isOpen:this.state.publishOptionsListOpen,className:"h-100"},Object(a.jsx)(r.DropdownToggle,{size:"sm",type:"tertiary",className:Object(a.classNames)("h-100 p-0 m-0 d-flex flex-column align-items-center toollist-item h-100","justify-content-center toollist-item-click h-100 border-0"),title:this.moreOptionsForTool},Object(a.jsx)(r.Icon,{icon:x,className:"toollist-dropdown-icon",width:16,height:16})),Object(a.jsx)(r.DropdownMenu,{css:this.getDropdownStyle(c)},Object(a.jsx)(r.DropdownItem,{onClick:this.onUndo,className:"dropdown-more-undo",disabled:d.past.length<=1,toggle:!1},Object(a.jsx)("div",{title:this.undo},Object(a.jsx)(r.Icon,{icon:b,className:"toollist-dropdown-icon",width:16,height:16,autoFlip:!0}),this.undo)),Object(a.jsx)(r.DropdownItem,{onClick:this.onRedo,className:"dropdown-more-redo",disabled:this.props.stateHistory.future.length<1,toggle:!1},Object(a.jsx)("div",{title:this.redo},Object(a.jsx)(r.Icon,{icon:v,className:"toollist-dropdown-icon",width:16,height:16,autoFlip:!0}),this.redo)),Object(a.jsx)(r.DropdownItem,{onClick:j?void 0:()=>{this.onSaveClick()},className:"dropdown-more-save",disabled:j,toggle:!1},Object(a.jsx)("div",{title:this.translationMap[m]},m!==this.saving&&Object(a.jsx)(r.Icon,{icon:f,className:"toollist-dropdown-icon",width:16,height:16}),m===this.saving&&Object(a.jsx)("div",{style:{width:"16px",marginRight:"8px",display:"inline-block"}},Object(a.jsx)(h,{theme:c})),this.translationMap[m])),Object(a.jsx)(r.DropdownItem,{onClick:j?void 0:this.previewToggle,className:"dropdown-more-preview"},j&&Object(a.jsx)("a",{className:"dropdown-more-preview-a w-100",href:O,rel:"noreferrer",target:"_blank",title:this.preview},Object(a.jsx)(r.Icon,{icon:w,className:"toollist-dropdown-icon",width:16,height:16}),this.preview),!j&&Object(a.jsx)("div",{id:"tooltip_preview",title:this.preview},Object(a.jsx)(r.Icon,{icon:w,className:"toollist-dropdown-icon",width:16,height:16}),this.preview)),!i&&Object(a.jsx)(r.DropdownItem,{onClick:()=>{window.open(`${this.props.portalUrl}/home/item.html?id=${this.props.currentAppId}`)}},this.changeShareSettings),Object(a.jsx)(r.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{window.open(a.urlUtils.getAppUrl({appId:this.props.queryObject.id,isTemplate:g}),"_blank"),this.setState({publishOptionsListOpen:!1})}},this.viewPublishedItem),i&&n!=o.Draft&&Object(a.jsx)(r.DropdownItem,{href:`/download/${this.props.currentAppId}?locale=${this.props.intl.locale}&token=${y}`,target:"_blank"},this.props.intl.formatMessage({id:"download",defaultMessage:p.download})),Object(a.jsx)(r.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{this.copyPublishUrlToClipBoard()}},this.copyPublishedItemLink),n!=o.Draft&&Object(a.jsx)("div",{className:"w-100 pl-2 pr-2 center-line"}),n!=o.Draft&&g&&Object(a.jsx)(r.DropdownItem,{onClick:()=>{this.newApp()}},this.createNewExperience),!g&&Object(a.jsx)(r.DropdownItem,{onClick:()=>{this.newApp()}},this.createNew),l==s.Experience&&Object(a.jsx)(r.DropdownItem,{onClick:()=>{this.isConfirmsaveAsTemplate()}},this.generateTemplate))))},this.translationMap[this.save]=this.props.intl.formatMessage({id:"save",defaultMessage:p.save}),this.translationMap[this.saved]=this.props.intl.formatMessage({id:"saved",defaultMessage:p.saved}),this.translationMap[this.saving]=this.props.intl.formatMessage({id:"saving",defaultMessage:p.saving}),this.translationMap[this.saveError]=this.props.intl.formatMessage({id:"saveError",defaultMessage:p.saveError}),this.translationMap[this.saveSuccess]=this.props.intl.formatMessage({id:"saveSuccess",defaultMessage:p.saveSuccess}),this.translationMap[this.publish]=this.nls("publish"),this.translationMap[this.published]=this.props.intl.formatMessage({id:"published",defaultMessage:p.published}),this.translationMap[this.publishing]=this.props.intl.formatMessage({id:"publishing",defaultMessage:p.publishing}),this.translationMap[this.publishError]=this.props.intl.formatMessage({id:"publishError",defaultMessage:p.publishError}),this.translationMap[this.publishSuccess]=this.props.intl.formatMessage({id:"publishSuccess",defaultMessage:p.publishSuccess}),this.undo=this.props.intl.formatMessage({id:"undo",defaultMessage:p.undo}),this.redo=this.props.intl.formatMessage({id:"redo",defaultMessage:p.redo}),this.preview=this.props.intl.formatMessage({id:"preview",defaultMessage:r.defaultMessages.preview}),this.publishTo=this.props.intl.formatMessage({id:"publishTo",defaultMessage:p.publishTo}),this.publishOptions=this.props.intl.formatMessage({id:"publishOptions",defaultMessage:p.publishOptions}),this.copySuccess=this.props.intl.formatMessage({id:"copySuccess",defaultMessage:p.copySuccess}),this.changeShareSettings=this.props.intl.formatMessage({id:"changeShareSettings",defaultMessage:p.changeShareSettings}),this.viewPublishedItem=this.props.intl.formatMessage({id:"viewPublishedItem",defaultMessage:p.viewPublishedItem}),this.copyPublishedItemLink=this.props.intl.formatMessage({id:"copyPublishedItemLink",defaultMessage:p.copyPublishedItemLink}),this.createNew=this.props.intl.formatMessage({id:"createNew",defaultMessage:p.createNew}),this.createNewExperience=this.props.intl.formatMessage({id:"createNewExperience",defaultMessage:p.createNewExperience}),this.generateTemplate=this.props.intl.formatMessage({id:"generateTemplate",defaultMessage:p.generateTemplate}),this.moreOptionsForTool=this.props.intl.formatMessage({id:"moreOptionsForTool",defaultMessage:p.moreOptionsForTool}),this.moreTools=this.props.intl.formatMessage({id:"moreTools",defaultMessage:p.moreTools}),this.access=this.props.intl.formatMessage({id:"access",defaultMessage:p.access}),this.generateTemplateSuccess=this.props.intl.formatMessage({id:"generateTemplateSuccess",defaultMessage:p.generateTemplateSuccess}),this.generateTemplateError=this.props.intl.formatMessage({id:"generateTemplateError",defaultMessage:p.generateTemplateError}),this.clickEventType=c.NewApp,this.state={saveState:this.save,savedAppConfig:null,toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1,publishOptionsListOpen:!1,moreToolListOpen:!1,isPublished:!1,noteText:"",isToastNote:!1,isShowLeaveAlertPopup:!1,isShowPreviewAlertPop:!1,isProxySettingPopupOpen:!1}}getStyle(e){var t;return a.css`
      button:disabled:hover,button:disabled, .tool_more_con:disabled:hover, .tool_more_con:disabled{
        color:${e.colors.palette.light[800]};
      }
      button, .tool_more_con button{
        color:${e.colors.palette.dark[400]}
      }
      .tool_more_con button:hover {
        color: ${e.colors.black};
      }
      button:disabled:hover {
        border:none;
      }
      .toollist {
        .toollist-length-screen {
          width: ${a.polished.rem(0)};
          overflow: hidden;
        }

        @media only screen and (max-width: 1025px) {
          .toollist-length-screen {
            width: ${a.polished.rem(0)};
          }
        }
        @media only screen and (min-width: 1025px) {
          .toollist-length-screen {
            width: ${a.polished.rem(46)};
          }
        }
        @media only screen and (min-width: 1071px) {
          .toollist-length-screen {
            width: ${a.polished.rem(92)};
          }
        }
        @media only screen and (min-width: 1117px) {
          .toollist-length-screen {
            width: ${a.polished.rem(138)};
          }
        }
        @media only screen and (min-width: 1163px) {
          .toollist-length-screen {
            width: ${a.polished.rem(184)};
          }
        }

        .tool_more_content {
          width: ${a.polished.rem(46)};
          .toollist-dropdown-icon{
            margin: 0
          }
        }
        .toollist-item {
          padding: 0;
          border: 0;
          background-color: inherit;
        }
        .toollist-item-icon {
          margin-left: ${a.polished.rem(15)};
          margin-right: ${a.polished.rem(15)};
        }
        .toollist-item-click:focus {
          outline: none;
          box-shadow: none !important;
        }
        .toollist-publish {
          border-radius: 2px;
          min-width: 4.25rem;
          height: ${a.polished.rem(26)};
          color: ${e.colors.black};
          background: ${e.colors.palette.light[800]};
          font-size: ${a.polished.rem(13)};
          padding-top: 0;
          padding-bottom: 0;
          border:none;
          &:hover {
            background: ${e.colors.primary};
            border:none;
          }
          &.btn.disabled {
            background-color: ${e.colors.palette.light[800]};
            color: ${e.colors.palette.dark[400]};
            border:none;
          }
        }
        .toollist-publish:focus {
          outline: none;
          box-shadow: none !important;
        }

        .btn {
          &.disabled,
          &:disabled {
            background-color: transparent;
          }
        }
        .btn:not(:disabled):not(.disabled):active,
        .btn:not(:disabled):not(.disabled).active,
        .show > .btn.dropdown-toggle {
          color: ${(null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.black)||"black"};
        }
      }

      button:not(:disabled):not(.disabled):active, button:not(:disabled):not(.disabled).active, button[aria-expanded="true"]{
        border:none;
      }
    `}getDropdownStyle(e){return a.css`
      & {
        background: ${e.colors.palette.light[500]};
        border: 1px solid ${e.colors.palette.light[300]};;
        box-shadow: 0 0 10px 2px ${a.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        min-width:${a.polished.rem(220)};
        padding-top: ${a.polished.rem(8)};
        padding-bottom: 0;
      }
      .dropdown-menu--inner {
        .toollist-dropdown-icon {
          margin-right: ${a.polished.rem(8)};
          margin-bottom: ${a.polished.rem(2)};
        }
        &>button, &>a {
          padding-left: ${a.polished.rem(16)};
          margin-bottom: ${a.polished.rem(8)};
        }
        .center-line {
          border-top: 1px solid ${this.props.theme.colors.palette.light[800]};
          margin-bottom: ${a.polished.rem(14)};
          margin-top: ${a.polished.rem(14)};
        }
        button, a {
          box-sizing:border-box;
        }
        .dropdown-more-preview-a {
          color: inherit;
          text-decoration: none;
        }

        @media only screen and (min-width: 1162px) {
          .dropdown-more-preview {
            display: none;
          }
        }
        @media only screen and (max-width: 1162px) {
          .dropdown-more-preview {
            display: flex;
          }
        }
        @media only screen and (min-width: 1116px) {
          .dropdown-more-save {
            display: none;
          }
        }
        @media only screen and (max-width: 1116px) {
          .dropdown-more-save {
            display: flex;
          }
        }
        @media only screen and (min-width: 1070px) {
          .dropdown-more-redo {
            display: none;
          }
        }
        @media only screen and (max-width: 1070px) {
          .dropdown-more-redo {
            display: flex;
          }
        }
        @media only screen and (min-width: 1024px) {
          .dropdown-more-undo {
            display: none;
          }
        }
        @media only screen and (max-width: 1024px) {
          .dropdown-more-undo {
            display: flex;
          }
        }
      }
    `}componentDidMount(){window.onbeforeunload=()=>{if(!this.checkIsSaved())return!1}}componentWillUnmount(){window.onbeforeunload=null}componentDidUpdate(e){if(this.props.onSaveStatusChanged&&this.props.onSaveStatusChanged(this.checkIsSaved()),this.props.currentAppId!==e.currentAppId){const{publishStatus:e}=this.props;e==o.Draft?this.setState({isPublished:!1}):this.setState({isPublished:!0}),Object(a.getAppStore)().dispatch(l.appStateHistoryActions.InBuilderAppConfigClear())}this.props!==e&&this.props.appConfig&&(this.state.savedAppConfig?this.props.appConfig!==this.state.savedAppConfig?this.setState({saveState:this.save}):this.setState({saveState:this.saved}):this.state.saveState===this.saveError&&this.setState({saveState:this.save}))}render(){var e,t,i,l;const n=window.jimuConfig.isDevEdition,{itemType:p,publishStatus:d}=this.props,c=n?"":`${this.publishTo} ${this.isInOnLine()?"ArcGIS Online":"Portal for ArcGIS"}`,g=this.state.saveState===this.saved||(null===(t=null===(e=this.props.stateHistory)||void 0===e?void 0:e.past)||void 0===t?void 0:t.length)<=1&&(null===(l=null===(i=this.props.stateHistory)||void 0===i?void 0:i.future)||void 0===l?void 0:l.length)<1,x=p===s.Template,S=this.props.appConfig&&m.dataComponentsUtils.getWhetherDataSourceIsInited(this.props.dataSources,this.props.dataSourcesInfo),y=a.urlUtils.getAppUrl({appId:this.props.queryObject.id,isTemplate:x,isArcGisOnlineTemplate:!1,isPortalRequest:!1,isDraft:!0});return Object(a.jsx)("div",{className:"float-right d-flex flex-row align-items-center h-100",css:this.getStyle(this.props.theme)},this.isMac()&&Object(a.jsx)(a.Keyboard,{bindings:{"command+keys":()=>{this.saveForkeyBoard()}}}),!this.isMac()&&Object(a.jsx)(a.Keyboard,{bindings:{"ctrl+keys":()=>{this.saveForkeyBoard()}}}),Object(a.jsx)("div",{className:"h-100 toollist d-flex flex-row align-items-center justify-content-end"},Object(a.jsx)("div",{className:"toollist-length-screen h-100 d-flex flex-wrap align-items-center justify-content-starth-100 d-flex flex-wrap align-items-center justify-content-start"},Object(a.jsx)("div",{id:"tooltip_undo",className:"h-100"},Object(a.jsx)(r.Button,{className:Object(a.classNames)("d-flex flex-column align-items-center toollist-item h-100","justify-content-center",{"toollist-item-click":!(this.props.stateHistory.past.length<=1)}),type:"tertiary",title:this.undo,disabled:this.props.stateHistory.past.length<=1,onClick:this.onUndo},Object(a.jsx)(r.Icon,{icon:b,className:"toollist-item-icon",width:16,height:16,autoFlip:!0}))),Object(a.jsx)("div",{id:"tooltip_redo",className:"h-100"},Object(a.jsx)(r.Button,{className:Object(a.classNames)("d-flex flex-column align-items-center toollist-item h-100","justify-content-center",{"toollist-item-click":!(this.props.stateHistory.future.length<1)}),type:"tertiary",title:this.redo,disabled:this.props.stateHistory.future.length<1,onClick:this.onRedo},Object(a.jsx)(r.Icon,{icon:v,className:"toollist-item-icon",width:16,height:16,autoFlip:!0}))),Object(a.jsx)("div",{id:"tooltip_save",className:"h-100"},Object(a.jsx)(r.Button,{className:Object(a.classNames)("d-flex flex-column align-items-center toollist-item h-100","justify-content-center",{"toollist-item-click":!g}),type:"tertiary",title:this.translationMap[this.state.saveState],disabled:g,onClick:()=>{this.onSaveClick()}},this.state.saveState!==this.saving&&Object(a.jsx)(r.Icon,{icon:f,className:"toollist-item-icon",width:16,height:16}),this.state.saveState===this.saving&&Object(a.jsx)("div",{style:{width:"16px",height:"16px"},className:"toollist-item-icon"},Object(a.jsx)(h,{theme:this.props.theme})))),g&&Object(a.jsx)("a",{className:"m-0 p-0 toollist-item-click btn h-100 border-0",href:y,rel:"noreferrer",target:"_blank"},Object(a.jsx)(r.Button,{className:Object(a.classNames)("d-flex flex-column align-items-center toollist-item h-100","justify-content-center toollist-item-click h-100 border-0"),title:this.preview,type:"tertiary"},Object(a.jsx)(r.Icon,{icon:w,className:"toollist-item-icon",width:16,height:16}))),!g&&Object(a.jsx)("div",{id:"tooltip_preview",className:"h-100"},Object(a.jsx)(r.Button,{className:Object(a.classNames)("d-flex flex-column align-items-center toollist-item h-100","justify-content-center toollist-item-click h-100 border-0"),title:this.preview,type:"tertiary",onClick:this.previewToggle},Object(a.jsx)(r.Icon,{icon:w,className:"toollist-item-icon",width:16,height:16})))),Object(a.jsx)("div",{className:"tool_more_content"},this.renderMore()),Object(a.jsx)(r.Button,{className:"ml-2 toollist-publish d-flex justify-content-center align-items-center",onClick:this.onPublishClick,disabled:d===o.Published||d===o.Publishing||!S,title:c},Object(a.jsx)("span",null,this.getPublishText()))),Object(a.jsx)(r.Toast,{css:this.getTostStyle(),open:this.state.isToastNote,type:r.ToastType.Info,text:this.state.noteText}),Object(a.jsx)(r.AlertPopup,{isOpen:this.state.isShowLeaveAlertPopup,okLabel:this.getAlertPopOkLabel(),title:this.getAlertPopTitle(),toggle:this.handleToggleForLeaveAlertPopup},Object(a.jsx)("div",{style:{fontSize:"1rem"}},this.nls("headerLeaveDescription"))),Object(a.jsx)(r.AlertPopup,{className:"preview-alert-pop",css:this.previewAlertPopStyle(),isOpen:this.state.isShowPreviewAlertPop,hideOK:!0,hideCancel:!0,title:this.nls("preview"),toggle:this.previewToggle},Object(a.jsx)("div",{className:"preview-alert-pop-content"},this.nls("headerLeaveDescription"),Object(a.jsx)("div",{className:"perview-pop-button-con"},Object(a.jsx)("a",{className:"m-0 p-0 toollist-item-click btn h-100 border-0",onClick:this.previewToggle,href:y,rel:"noreferrer",target:"_blank"},Object(a.jsx)("button",{className:"preview-alert-pop-btn btn-primary"},this.nls("commonModalOk"))),Object(a.jsx)("button",{onClick:this.previewToggle,className:"preview-alert-pop-btn btn-cancle"},this.nls("commonModalCancel"))))),Object(a.jsx)(u.ProxySettingPopup,{isOpen:this.state.isProxySettingPopupOpen,onToggle:this.onToggleProxySettingPopup,onCancel:this.onAppProxiesCancel,onFinish:this.onAppProxiesFinish}))}}const j=a.themeUtils.withTheme(y);var O=a.ReactRedux.connect(e=>({stateHistory:e.appStateHistory,queryObject:e.queryObject,appConfig:e.appStateInBuilder&&e.appStateInBuilder.appConfig,currentAppId:e.builder&&e.builder.currentAppId,portalUrl:e.portalUrl,dataSources:e.appStateInBuilder&&e.appStateInBuilder.appConfig&&e.appStateInBuilder.appConfig.dataSources,dataSourcesInfo:e.appStateInBuilder&&e.appStateInBuilder.dataSourcesInfo}))(j);class T extends a.React.PureComponent{constructor(e){super(e),this.onAppModeChange=()=>{this.props&&(this.getAppDocument(),this.props.appMode===a.AppMode.Run?(this.appFrameDoc&&this.appFrameDoc.body.classList.add("design-mode"),l.builderAppSync.publishAppModeChangeToApp(a.AppMode.Design)):(this.appFrameDoc&&this.appFrameDoc.body.classList.remove("design-mode"),l.builderAppSync.publishAppModeChangeToApp(a.AppMode.Run)))},this.onLockLayoutChange=()=>{const e=Object(l.getAppConfigAction)();this.getAppDocument(),this.appFrameDoc&&(this.props.lockLayout?this.appFrameDoc.body.classList.remove("lock-layout"):this.appFrameDoc.body.classList.add("lock-layout")),e.setLockLayout(!this.props.lockLayout).exec()},this.nls=e=>this.props.intl.formatMessage({id:e,defaultMessage:p[e]}),this.appMode=this.props.intl.formatMessage({id:"appMode",defaultMessage:p.appMode}),this.lockLayout=this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:p.headerLockLayout})}getStyle(e){return a.css`
      .lock-layout-label {
        font-weight: 500;
        color: ${e.colors.palette.dark[600]};
        margin-right: ${a.polished.rem(10)};
      }

      .live-view-container {
        cursor: pointer;
        background-color: ${e.colors.primary};
        border-radius: 2px !important;
        color: ${e.colors.black};
        padding-right: ${a.polished.rem(8)};
        padding-left: ${a.polished.rem(8)};
        height: ${a.polished.rem(26)};
        border:1px solid ${e.colors.primary};
      }

      .edit-view-container {
        cursor: pointer;
        border:1px solid ${e.colors.palette.light[800]};
        border-radius: 2px !important;
        color: ${e.colors.palette.dark[600]};
        padding-right: ${a.polished.rem(8)};
        padding-left: ${a.polished.rem(8)};
        height: ${a.polished.rem(26)};

        &:hover {
          color: ${e.colors.black};

          .edit-view-icon {
            border: 1px solid ${e.colors.black};
          }
        }
      }

      .live-view-icon {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: ${e.colors.black};
      }

      .edit-view-icon {
        width: 7px;
        height: 7px;
        border: 1px solid ${e.colors.palette.dark[800]};
        border-radius: 50%;
      }
    `}getAppDocument(){const e=document.querySelector(`iframe[name="${a.APP_FRAME_NAME_IN_BUILDER}"]`);this.appFrameDoc=e.contentDocument||e.contentWindow.document}render(){const{appMode:e,lockLayout:t}=this.props,i=e===a.AppMode.Run;return Object(a.jsx)("div",{className:"d-flex align-items-center",css:this.getStyle(this.props.theme),title:t?this.props.intl.formatMessage({id:"disableLayoutEditing",defaultMessage:p.disableLayoutEditing}):this.props.intl.formatMessage({id:"enableLayoutEditing",defaultMessage:p.enableLayoutEditing})},!i&&Object(a.jsx)("div",{className:"d-flex align-items-center",onClick:this.onLockLayoutChange,style:{cursor:"pointer"}},Object(a.jsx)("div",{className:"lock-layout-label"},this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:p.headerLockLayout})),Object(a.jsx)(r.Switch,{checked:t})),Object(a.jsx)("div",{className:"liveview-gap"}),Object(a.jsx)("div",{className:Object(a.classNames)("d-flex align-items-center",{"live-view-container":i,"edit-view-container":!i}),onClick:this.onAppModeChange,title:i?this.nls("turnOffLiveView"):this.nls("turnOnLiveView"),style:{whiteSpace:"nowrap"}},Object(a.jsx)("div",{className:Object(a.classNames)("mr-2",{"live-view-icon":i,"edit-view-icon":!i})}),Object(a.jsx)("div",{className:"d-flex align-items-center border-left-0 app-toolbar-mode"},Object(a.jsx)("span",null,this.appMode))))}}const M=a.themeUtils.withTheme(T);var A=a.ReactRedux.connect(e=>{var t,i,s,o,a;return{appMode:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.appMode,lockLayout:null!==(a=null===(o=null===(s=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==a&&a}})(M);const k=i(77),P=i(78),C=i(79);class I extends a.React.PureComponent{constructor(e){super(e),this.editPageForLargeScreen=this.props.intl.formatMessage({id:"editPageForLargeScreen",defaultMessage:p.editPageForLargeScreen}),this.editPageForMediumScreen=this.props.intl.formatMessage({id:"editPageForMediumScreen",defaultMessage:p.editPageForMediumScreen}),this.editPageForSmallScreen=this.props.intl.formatMessage({id:"editPageForSmallScreen",defaultMessage:p.editPageForSmallScreen})}getStyle(e){var t,i,s;return a.css`
      .device-switch-group {
        margin-right: ${a.polished.rem(10)};
      }

      .device-switch {
        width: ${a.polished.rem(26)};
        height: ${a.polished.rem(26)};
        border-radius: 2px !important;
        border: 0;
        margin-left: 1px;
        margin-right: 1px;

        &:focus {
          outline: none;
          box-shadow: none !important;
        }
      }

      .device-switch-gap {
        margin-right: ${a.polished.rem(5)};
      }

      .device-switch-gap button {
        border: none;
      }
      .device-switch-container button {
        color: ${null===(i=null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.dark[400]};
      }
      .device-switch-container button:hover {
        color: ${null===(s=null==e?void 0:e.colors)||void 0===s?void 0:s.black};
      }

      .device-active {
        background-color: ${e.colors.primary} !important;
        color: ${e.colors.black} !important;
      }

      .no-animation {
        transition: none;
        -webkit-transition: none;
      }
    `}onBrowserSizeModeChange(e){l.builderAppSync.publishChangeBrowserSizeModeToApp(e),e!==this.props.browserSizeMode&&l.builderAppSync.publishChangeSelectionToApp(null),this.setState({isDeviceChooseShow:!1})}render(){return Object(a.jsx)("div",{css:this.getStyle(this.props.theme)},Object(a.jsx)(r.ButtonGroup,{title:"Shift+Alt+X",className:"h-100 d-flex align-items-center device-switch-group"},Object(a.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container no-animation device-switch-gap"},Object(a.jsx)(r.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(a.BrowserSizeMode.Large)},className:Object(a.classNames)("device-switch d-flex align-items-center p-0",{"device-active":!this.props.browserSizeMode||this.props.browserSizeMode===a.BrowserSizeMode.Large,"device-disactive":this.props.browserSizeMode&&this.props.browserSizeMode!==a.BrowserSizeMode.Large}),title:this.editPageForLargeScreen},Object(a.jsx)(r.Icon,{icon:k}))),Object(a.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container device-switch-gap"},Object(a.jsx)(r.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(a.BrowserSizeMode.Medium)},className:Object(a.classNames)("device-switch d-flex align-items-center p-0 no-animation",{"device-active":this.props.browserSizeMode===a.BrowserSizeMode.Medium,"device-disactive":!(this.props.browserSizeMode===a.BrowserSizeMode.Medium)}),title:this.editPageForMediumScreen},Object(a.jsx)(r.Icon,{icon:C}))),Object(a.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container"},Object(a.jsx)(r.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(a.BrowserSizeMode.Small)},className:Object(a.classNames)("device-switch d-flex align-items-center p-0 no-animation",{"device-active":this.props.browserSizeMode===a.BrowserSizeMode.Small,"device-disactive":!(this.props.browserSizeMode===a.BrowserSizeMode.Small)}),title:this.editPageForSmallScreen},Object(a.jsx)(r.Icon,{icon:P})))))}}const z=a.themeUtils.withTheme(I);var N=a.ReactRedux.connect(e=>({browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode}))(z);const $=i(80);class L extends a.React.PureComponent{constructor(e){super(e),this.onToggleResolutionChoose=()=>{this.setState({isResolutionChooseShow:!this.state.isResolutionChooseShow})},this.setViewportSize=e=>{Object(l.getAppConfigAction)().setViewportSize(this.props.browserSizeMode,e).exec(),this.setState({isResolutionChooseShow:!1})},this.state={isResolutionChooseShow:!1}}getStyle(e){return a.css`
      .switch-resolution-toggle {
        width: ${a.polished.rem(110)};
        font-weight: 500;
        color: ${this.props.theme.colors.palette.dark[600]};
        .switch-label {
          width: ${a.polished.rem(80)};
          display: inline-block;
        }
      }
      .dropdown-toggle-content svg {
        margin-right: 0;
        margin-top: ${a.polished.rem(-8)};
        vertical-align: center;
      }
      .no-user-select {
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select :none;
        user-select: none;
      }
    `}getDropdownStyle(e){return a.css`
      & {
        background: ${e.colors.palette.light[500]};
        border: 1px solid ${e.colors.palette.light[300]};;
        box-shadow: 0 0 10px 2px ${a.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        padding-top: ${a.polished.rem(8)};
        padding-bottom: ${a.polished.rem(8)};
      }
    `}render(){const{browserSizeMode:e,viewportSize:t,pageMode:i,appMode:s}=this.props,o=i===a.PageMode.FitWindow?"":this.props.nls("auto"),l=t?`${t.width} × ${i!==a.PageMode.FitWindow&&s===a.AppMode.Design?o:t.height}`:"";let n=a.CONSTANTS.SCREEN_RESOLUTIONS[e]||[];if(i!==a.PageMode.FitWindow){const e={},t=[];n.forEach(i=>{null==e[i.width]&&(t.push(i),e[i.width]=i)}),n=t}return Object(a.jsx)("div",{css:this.getStyle(this.props.theme)},Object(a.jsx)(r.Dropdown,{size:"sm",toggle:this.onToggleResolutionChoose,isOpen:this.state.isResolutionChooseShow,className:"resolution-choose"},Object(a.jsx)(r.DropdownToggle,{size:"sm",type:"tertiary",className:"switch-resolution-toggle",title:this.props.nls("changeScreenSize")},Object(a.jsx)("span",{className:"text-truncate switch-label"},l),Object(a.jsx)(r.Icon,{className:"dropdown-icon",icon:$,width:10,height:10})),Object(a.jsx)(r.DropdownMenu,{css:this.getDropdownStyle(this.props.theme)},n.map((e,t)=>Object(a.jsx)(r.DropdownItem,{key:t,className:"no-user-select",onClick:()=>{this.setViewportSize(e)}},`${e.width} × ${i!==a.PageMode.FitWindow&&s===a.AppMode.Design?o:e.height}`)))))}}const D=a.themeUtils.withTheme(L);var B=a.ReactRedux.connect(e=>{var t,i,s,o,r,l;const n=e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode;let p;e.appStateInBuilder&&(p=a.utils.findViewportSize(e.appStateInBuilder.appConfig,n));const d=e.appStateInBuilder&&e.appStateInBuilder.appRuntimeInfo.currentPageId;let h;return d&&(h=null===(o=null===(s=null===(i=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.pages)||void 0===s?void 0:s[d])||void 0===o?void 0:o.mode),{viewportSize:p,pageMode:h,appMode:null===(l=null===(r=e.appStateInBuilder)||void 0===r?void 0:r.appRuntimeInfo)||void 0===l?void 0:l.appMode,browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode}})(D);const R=i(81),E=i(29);class U extends a.React.PureComponent{constructor(e){super(e),this.titleTextInput=a.React.createRef(),this.spanTextInput=a.React.createRef(),this.originTitleMaxWidth=300,this.currentToolContainerWidth=0,this.currentPublishStateContainerWidth=0,this.getHelpUrl=()=>{var e;null===(e=null===l.helpUtils||void 0===l.helpUtils?void 0:l.helpUtils.getHomeHelpLink())||void 0===e||e.then(e=>{e&&this.setState({helpUrl:e})})},this.focusEditTitle=(e=!1)=>{e&&this.titleTextInput.current.select(),this.titleTextInput.current.focus()},this.editTitle=()=>{let e=this.titleTextInput.current.value;const{appItem:t}=this.state;if(e=e.replace(/(^\s*)|(\s*$)/g,""),0==e.length||/^[ ]*$/.test(e)||e==t.title)return e=t.title,this.setState({titleText:e}),!1;n.appServices.updateAppInfo({id:this.props.queryObject.id,title:e,owner:t.owner}).then(()=>{this.props.dispatch(l.builderActions.refreshAppListAction(!0)),l.builderAppSync.publishAppInfoChangeToApp({name:e}),t.title=e,this.setState({appItem:t})},e=>{console.error(e)})},this.refreshTitle=e=>{const t=this.state.itemType;a.portalUtils.getAppInfo(e).then(e=>{const i=e.type==s.Experience?s.Experience:s.Template,o=i==s.Template&&t!==i;this.getPublishStatusAndKewWorkd(e),this.setState({titleText:e.title,itemType:i,itemId:e.id,appItem:this.initAppInfo(e),isShowTemplateRemind:o})},e=>{console.error(e)})},this.initAppInfo=e=>(e.isLocalApp=window.jimuConfig.isDevEdition,e.portalUrl=this.props.portalUrl,e),this.getPublishStatusAndKewWorkd=e=>{const t=e.typeKeywords||[];let{publishStatus:i}=this.state;t.forEach(e=>{if(e.includes("status:")){switch(e.split(": ")[1]){case o.Published:i=o.Published;break;case o.Changed:i=o.Changed;break;case o.Draft:i=o.Draft}}}),this.setState({publishStatus:i})},this.getPublishString=()=>{const{publishStatus:e}=this.state;switch(e){case o.Draft:return this.nls("itemStatusDraft");case o.Published:return this.nls("published");case o.Changed:return this.nls("unpublishedChanges")}},this.changePublishStatus=e=>{this.setState({publishStatus:e})},this.titleTextChange=e=>{let t=e.target.value;t.length>250&&(t=t.slice(0,250)),this.setState({titleText:t})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:p[e]}):e,this.handleKeydown=e=>{13===e.keyCode&&this.titleTextInput.current.blur()},this.onToolContainerResize=e=>{this.currentToolContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.onHeaderContainerResize=()=>{this.checkAndResizeTileMaxWidth()},this.onPublishStateContainerResized=e=>{this.currentPublishStateContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.checkAndResizeTileMaxWidth=()=>{if(!this.currentToolContainerWidth||!this.currentPublishStateContainerWidth)return;const e=window.innerWidth-this.currentToolContainerWidth-52-this.currentPublishStateContainerWidth;e>=this.originTitleMaxWidth?this.setState({titleMaxWidth:this.originTitleMaxWidth}):e<=40?this.setState({titleMaxWidth:40}):this.setState({titleMaxWidth:e})},this.getItemPublishStatusTitle=()=>{const{publishStatus:e}=this.state;let t="";switch(e){case o.Draft:t=this.nls("draftStatusTitle");break;case o.Published:t=this.nls("publishedTitle");break;case o.Changed:t=this.nls("publishedUnsaveTitle")}return t},this.getTemplatePopperStyle=()=>{const{theme:e}=this.props;return a.css`
      &{
        background: ${e.colors.palette.light[600]};
        color: ${e.colors.black};
        border: 1px solid ${e.colors.palette.light[300]};
        box-sizing: border-box;
        padding: ${a.polished.rem(10)} ${a.polished.rem(12)};
        border-radius: 2px;
        box-shadow: 0 0 10px 2px ${a.polished.rgba(e.colors.white,.2)};
      }
      .template-remind-porper {
        div{
          white-space: nowrap;
          text-align: center;
          font-size: ${a.polished.rem(13)};
          line-height: ${a.polished.rem(13)};
          margin-bottom: ${a.polished.rem(14)};
        }
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::before{
        border-right-color: ${e.colors.palette.light[300]};
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::after {
        border-right-color: ${e.colors.palette.light[600]};
      }
    `},this.closeTemplateRemind=()=>{this.setState({isShowTemplateRemind:!1})},this.onSaveStatusChanged=e=>{this.setState({isAppSaved:e})},this.state={titleText:"",accountPopoverOpen:!1,itemType:s.Experience,itemId:"",titleMaxWidth:this.originTitleMaxWidth,publishStatus:o.Draft,isShowTemplateRemind:!1,isAppSaved:!0,showTitle:!0,helpUrl:"#"}}getStyle(){const e=this.props.theme,{colors:t}=e;return a.css`
      .widget-builder-header {
        background-color: ${t.palette.light[500]};
        border: 1px solid ${t.palette.light[800]};
        padding-left: ${a.polished.rem(12)};
        overflow: auto;

        .header-logo {
          a {
            margin-right:${a.polished.rem(6)};
          }
          .header-logo-item {
            height: ${a.polished.rem(32)};
            width: ${a.polished.rem(32)};
            background: url('./assets/exb-logo.png') no-repeat center;
            background-size: 100%;
            &:hover {
              background: url(${i(82)}) no-repeat center;
              background-size: 100%;
            }
          }
          input {
            padding-left:${a.polished.rem(5)};
            padding-right:${a.polished.rem(5)};
            text-align: left;
          }
        }

        .toollist-edit-icon {
          & {
            padding: 0;
            color: ${t.palette.dark[600]};
            margin-left: ${a.polished.rem(3)};
          }
          svg{
            margin: 0;
          }
        }

        .app-type {
          background: ${t.palette.secondary[400]};
          color: ${t.palette.info[700]};
          border-radius: 2px;
          font-size: ${a.polished.rem(10)};
          white-space: nowrap;
          width: ${a.polished.rem(24)};
          padding: ${a.polished.rem(2)} 0;
          text-align: center;
        }
        .publish-state {
          max-width: ${a.polished.rem(152)};
          height: ${a.polished.rem(18)};
        }
        .publish-state div {
          background: ${t.palette.success[800]};
          border-radius: 2px;
          font-size: ${a.polished.rem(10)};
          line-height: ${a.polished.rem(18)};
          position: relative;
          white-space: nowrap;
          padding: 0 ${a.polished.rem(6)};
          text-align: center;
          margin-left: ${a.polished.rem(9)};
          color: ${t.palette.success[100]};
          max-width: ${a.polished.rem(150)};
          font-weight: bold;
        }
        .publish-state .Draft{
          color: ${t.palette.warning[100]};
          background: ${t.palette.warning[800]};
        }
        .publish-state .Changed{
          color: ${t.palette.danger[100]};
          background: ${t.palette.danger[800]};
        }
        .header-title-maxwidth-screen {
        }

        .header-title {
          top: 0;
          bottom: 0;
          border: 1px solid ${t.palette.light[500]};
          input {
            background-color: transparent;
            border: 1px solid transparent;
            &:focus {
              background-color: ${e.colors.white};
            }
          }

          &:hover input{
            border: 1px solid ${t.palette.secondary[600]};
          }
        }

        .app-title-content {
          width: calc(100% - 30px);
          min-width: ${a.polished.rem(40)};
        }
        .header-title-input, .title-text-placeholder {
          border: none;
          text-align: center;
          min-width: ${a.polished.rem(40)};
          max-width: ${a.polished.rem(277)};
          cursor: text;
          color: ${t.palette.dark[800]};
          overflow:hidden;
          text-overflow:ellipsis;
          font-size: ${a.polished.rem(16)};
          box-sizing: border-box;
          height: ${a.polished.rem(28)};
        }
        .header-title-input {
          left: 0;
          top: 0;
          width: 100%;
        }
        .title-text-placeholder {
          display: block;
          opacity: 0;
          padding-left:${a.polished.rem(5)};
          padding-right:${a.polished.rem(7)};
          word-spacing: ${a.polished.rem(6)};
        }

        .header-account {
          float: left;
          color: ${e.colors.black};
          padding-left: ${a.polished.rem(20)};

          div {
            background-color: initial;
          }

          &:hover {
            // background-color: ${e.colors.white};
          }
        }

        .header-login {
          cursor: pointer;
          fill: ${e.colors.black};
        }

        .header-login-username {
          color: ${e.colors.black};
          margin-left: 5px;
          font-size: 14px;
        }

        .toollist-seperateline {
          margin-left: ${a.polished.rem(16)};
          height: 30px;
          border: 1px solid ${e.colors.palette.light[800]};
        }

        .liveview-gap {
          margin-right: ${a.polished.rem(20)};
        }

        .dropdown-toggle-content {
          margin-top: ${a.polished.rem(4)};
        }
      }

      .account-dropdown-toggle:focus {
        outline: none;
        box-shadow: none !important;
      }`}componentDidMount(){this.props.queryObject.id&&this.refreshTitle(this.props.queryObject.id),this.getHelpUrl()}getSnapshotBeforeUpdate(e,t){return!(!this.props.queryObject.id||e.queryObject.id===this.props.queryObject.id)}componentDidUpdate(e,t,i){const{currentPageId:s}=this.props;if(i&&(this.setState({titleText:""}),this.refreshTitle(this.props.queryObject.id)),e.currentPageId!==s){let e=!0;"template"===s&&(e=!1),this.setState({showTitle:e})}}getQuery(e){return a.queryString.parse(window.location.search)[e]||""}render(){const e=this.getQuery("locale")?"?locale="+this.getQuery("locale"):"",{itemType:t,publishStatus:i,titleText:o,titleMaxWidth:l,isShowTemplateRemind:n,showTitle:p}=this.state;return Object(a.jsx)("div",{css:this.getStyle(),className:"h-100"},Object(a.jsx)("div",{className:"widget-builder-header d-flex justify-content-between h-100 pr-0 border-left-0 border-right-0 border-top-0",style:{overflowX:"hidden"}},Object(a.jsx)("div",{className:"d-flex"},Object(a.jsx)("div",{className:"header-logo d-flex align-items-center"},Object(a.jsx)("a",{href:""+(window.jimuConfig.mountPath+e),title:this.nls("headerHome")},Object(a.jsx)("div",{className:"header-logo-item d-block"})),p&&Object(a.jsx)("div",{className:"header-title d-flex align-items-center header-title-maxwidth-screen",style:{maxWidth:l}},Object(a.jsx)("div",{className:"position-relative app-title-content flex-grow-1"},Object(a.jsx)("span",{className:"title-text-placeholder"},o),Object(a.jsx)("input",{ref:this.titleTextInput,className:"header-title-input  font-weight-normal position-absolute flex-grow-1",title:o,value:o,onBlur:this.editTitle,onChange:this.titleTextChange,onKeyDown:e=>{this.handleKeydown(e)}})),Object(a.jsx)(r.Button,{type:"tertiary",size:"sm",className:"toollist-edit-icon",onClick:()=>{this.focusEditTitle(!0)},title:t==s.Template?this.nls("renameTemplate"):this.nls("renameExperience")},Object(a.jsx)(r.Icon,{icon:E,width:16,height:16})))),Object(a.jsx)("div",{className:"d-flex align-items-center"},Object(a.jsx)("div",{ref:e=>this.reference=e},t==s.Template&&Object(a.jsx)("div",{title:this.nls("appTypeTemplate"),className:"app-type  position-relative"},Object(a.jsx)(r.Icon,{icon:R,className:"toollist-item-icon",width:16,height:14}),Object(a.jsx)(r.Popper,{reference:this.reference,open:n,showArrow:!0,toggle:this.closeTemplateRemind,placement:"right-end",offset:[-8,0],css:this.getTemplatePopperStyle()},Object(a.jsx)("div",{className:"template-remind-porper"},Object(a.jsx)("div",null,this.nls("templateRemind")),Object(a.jsx)(r.Button,{type:"primary",className:"float-right",size:"sm",onClick:this.closeTemplateRemind},this.nls("gotIt")),Object(a.jsx)("span",{className:"position-absolute"}))))),Object(a.jsx)("div",{className:"publish-state position-relative",title:this.getItemPublishStatusTitle()},Object(a.jsx)("div",{className:Object(a.classNames)("text-truncate",i)},this.getPublishString())),Object(a.jsx)(a.ReactResizeDetector,{handleWidth:!0,onResize:this.onPublishStateContainerResized}))),Object(a.jsx)("div",{className:"d-flex align-items-center justify-content-end"},Object(a.jsx)(A,{intl:this.props.intl}),Object(a.jsx)("div",{className:"liveview-gap"}),Object(a.jsx)(N,{intl:this.props.intl}),Object(a.jsx)(B,{nls:this.nls}),Object(a.jsx)("div",{className:"toollist-seperateline border-bottom-0 border-top-0 border-left-0 mt-1 mb-1 ml-1 mr-1"}),Object(a.jsx)(O,{theme:this.props.theme,itemId:this.state.itemId,itemType:this.state.itemType,intl:this.props.intl,appItem:this.state.appItem,publishStatus:this.state.publishStatus,changePublishStatus:this.changePublishStatus,titleText:o,locale:this.getQuery("locale")||"",onSaveStatusChanged:this.onSaveStatusChanged}),Object(a.jsx)("div",{className:"float-right d-flex h-100 justify-content-end"},this.props.user&&Object(a.jsx)(r.UserProfile,{user:this.props.user,portalUrl:this.props.portalUrl,isAppSaved:this.state.isAppSaved,helpUrl:this.state.helpUrl})),Object(a.jsx)(a.ReactResizeDetector,{handleWidth:!0,onResize:this.onToolContainerResize}))),Object(a.jsx)(a.ReactResizeDetector,{handleWidth:!0,onResize:this.onHeaderContainerResize}))}}U.mapExtraStateProps=e=>({currentPageId:e.appRuntimeInfo&&e.appRuntimeInfo.currentPageId,queryObject:e.queryObject})},2:function(e,t){e.exports=s},29:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.212 9.936L2 12.27l2.333-.212L13.27 3.12 11.149 1 2.212 9.936zm-.707-.707L10.441.293a1 1 0 011.415 0l2.12 2.121a1 1 0 010 1.414l-8.935 8.937a1 1 0 01-.617.289l-2.333.212a1 1 0 01-1.087-1.087l.212-2.333a1 1 0 01.289-.617zm7.434-6.497l2.829 2.829-.707.707-2.829-2.829.707-.707zM.5 15h15a.5.5 0 010 1H.5a.5.5 0 010-1z" fill="#000" fill-rule="nonzero"></path></svg>'},3:function(e,t){e.exports=o},5:function(e,t){e.exports=a},72:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.481 0a1 1 0 01.994.883L7.48 1l.001 2.033c5.574.471 8.405 3.625 8.493 9.461l.025.505v.732a20.66 20.66 0 01-.025.852l-.039.575c-.102.6-.495.865-.936.84-.35-.02-.61-.344-.695-.684l-.118-.456-.124-.444c-.14-.478-.263-.821-.37-1.029-1.484-2.862-3.82-4.212-6.212-4.37v1.576a1 1 0 01-1.559.83l-.1-.077-5.48-4.796a1 1 0 01-.09-1.416l.09-.089L5.821.247A1 1 0 016.483 0z" fill="#000" fill-rule="evenodd"></path></svg>'},73:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.519 0a1 1 0 00-.994.883L8.52 1l-.001 2.033C2.944 3.504.113 6.658.025 12.494L0 12.999v.732l.007.399c.004.142.01.293.018.453l.039.575c.102.6.495.865.936.84.35-.02.61-.344.695-.684l.118-.456.124-.444c.14-.478.263-.821.37-1.029 1.484-2.862 3.82-4.212 6.212-4.37v1.576a1 1 0 001.559.83l.1-.077 5.48-4.796a1 1 0 00.09-1.416l-.09-.089-5.48-4.796A1 1 0 009.517 0z" fill="#000" fill-rule="evenodd"></path></svg>'},74:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 0a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V14a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h9.586zM8 8a3 3 0 100 6 3 3 0 000-6zm2-6H3a1 1 0 00-1 1v2a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1z" fill="#000" fill-rule="evenodd"></path></svg>'},75:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 110 16A8 8 0 018 0zM6.1 4.788a.6.6 0 00-.1.333v5.758a.6.6 0 00.933.5l4.318-2.88a.6.6 0 000-.998L6.933 4.62a.6.6 0 00-.832.167z" fill="#000" fill-rule="evenodd"></path></svg>'},76:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M6 14a2 2 0 114 0 2 2 0 01-4 0zm0-6a2 2 0 114 0 2 2 0 01-4 0zm0-6a2 2 0 114 0 2 2 0 01-4 0z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'},77:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M2 1h12a2 2 0 012 2v7a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2zm.5 1.5a1 1 0 00-1 1v6a1 1 0 001 1h11a1 1 0 001-1v-6a1 1 0 00-1-1h-11zM10 12l.649 1.947A.8.8 0 019.89 15H6.11a.8.8 0 01-.759-1.053L6 12h4zm5-3v2H1V9h14z" fill="#000" fill-rule="nonzero"></path><path d="M0 0h16v16H0z"></path></g></svg>'},78:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10.2 1c.994 0 1.8.784 1.8 1.75v10.5c0 .966-.806 1.75-1.8 1.75H4.8c-.994 0-1.8-.784-1.8-1.75V2.75C3 1.784 3.806 1 4.8 1h5.4zM7.5 13a.5.5 0 100 1 .5.5 0 000-1zm3-10h-6v9h6V3z" fill="#000" fill-rule="nonzero"></path><path d="M0 0h16v16H0z"></path></g></svg>'},79:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M13 0a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V1a1 1 0 011-1h10zM8 14a.5.5 0 100 1 .5.5 0 000-1zm4.5-12.5h-9L3.499 13H12.5V1.5z" fill="#000" fill-rule="nonzero"></path><path d="M0 0h16v16H0z"></path></g></svg>'},8:function(e,t){e.exports=r},80:function(e,t){e.exports='<svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"><path d="M4.128 4.587L.751.834A.5.5 0 011.123 0h6.754a.5.5 0 01.372.834L4.872 4.587a.5.5 0 01-.744 0z" fill="#000" fill-rule="evenodd"></path></svg>'},81:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 1a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h12zM5 2H2a1 1 0 00-.993.883L1 3v10a1 1 0 00.883.993L2 14h3V2zm1 5v7h8a1 1 0 00.993-.883L15 13V7H6zm0-1h9V3a1 1 0 00-.883-.993L14 2H6v4z" fill="#000" fill-rule="nonzero"></path></svg>'},82:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARYSURBVHgB7ZvLahNRGMf/J6mirWJcKFhQp4IKLdiK6KaCEURQF1bwumr6BK1P0OkTmDxB01XxAsaNghU7BV2ICHVRF4oaFRUMaERbxaY5nm9iFk3SJOcyl9T+YLqYziSc//muJ+cwBMHktIVIIYEIGwZHXtxxsBQdw5XjWfgMg5/cnIqLv6Ni0PHaD7A02OIELpxy4BPeCzA+HcPmpUFwPrDywKuYFdaRxPkTE/AY7wSggbcXRkpmzmNQgmVR5CnwtoxX7mFeADJzzofFRw/AKMI9PIgT5gS49WDAHXjzZq4GEwGTCTEMuYeeAEbMXBXhHhHYWIzO6FiFmgBk5kWcFQNP+D/wChjLC6vLqLqHnAAN01jQ8AzYUkomjTYWoGzmjA2KL7DQEvxzjybiRH0Brk/Zwfi3KYQQDarM2gLQrG8q3A6vqatQu8qM1Hy2Y8leXYMnuAjY0fHKu9UCuIGOChmz9MU2Y3B3J8JGtQCcgp15SID0kW68PX0UZzu3IyxUC8B4HzzE6tiATP8BjB/ugdW+EUFTwwLgqQBlEtYOvD3Tj2t9+wMVog2ajOzbhdHuPYita0N2/he67j6We3/vTveSJTv/G/bca0y8+wwdItAgvm0rrvXucwfvN+RK6SM92t+tJYDVEbwP94rgqoOWAKsB32zXyX1F3HkGHQ7GNrlB0yS+CUBBiy4dZnLfjAvw37vAmgBocQJNg2Eg09+rVU2uChegSnI6fkip2/QtCySsTtEAdTf1LKVLivgylCrDblEaf5J6T8sCtgRQAtcjnZUbPKElADVCYSG/WMDY3BvIoiwAmbTVvgFhIfnyPbIL8oWWkgDUBI327EFYoDZ87IX87BNKAlD/H6bZt+fUBk9IC0CzT6s5YSHzMae1KCItQLOpzC+Sr95DB6k8RrNPq0AqyLTDz/M/4BdSAlCwIX+zFQKgiXbYC6RdgKJt191HSkVHGFHKAjSTQ09f4OrsS7Q6WpUgVV+tztqCCAwSW78uFD93yWC0naPVGfq5S5eDU08w61MqDKUL+Nlmr8UAaPDtzyJaHS0B7nzKuVdQ0BqA7NJZJdrONvD4OY4p9AddYg2P1hRks0a5n/guahD5QOnuGluGkWijMgszOVrD++yu6A6LpbVmhdCacY7ZyluBB8Hkqw84LmbVl96iWEhV3gpFFij3FtRkOV/0fHpFOGxcOZWtvF29UfLGw2NAYcT8fv8AKbI0Lp8YqvWvlbfKTt6zEI2WNkYzZqE1yaPIbVw+mVrpgcabpUkIROPCWUZbSAhHDC2D+R8TGDqXr/eg3Hb5yfsJRN2NlHGEE0c4u42LJ2eafUHtwETZPcASCJ48eDGNYjFVK8g1Qu/ITLDuQSdFklj4mWpk5vUwd2jKP/dwZM28HuaPzZXSaMKwe5TMnInAZmjgZbw7OGkmjRox83r4c3aY3EMuTjjgoni51MpHZ2vR2D0ck/7dDP4KUGa5e8S8NvN6/AXWppIKbqQ9gQAAAABJRU5ErkJggg=="}}))}}}));
System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-for-builder/service","jimu-for-builder/templates"],(function(e){var t,s,i,a,l;return{setters:[function(e){t=e},function(e){s=e},function(e){i=e},function(e){a=e},function(e){l=e}],execute:function(){e(function(e){var t={};function s(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=106)}({0:function(e,s){e.exports=t},1:function(e,t){e.exports=s},106:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return w}));var i,a,l,o=s(0);!function(e){e.Default="Default",e.My="My",e.Favorites="Favorites",e.MyGroup="MyGroup",e.ArcGisOnline="ArcGisOnline",e.LivingAtlas="LivingAtlas",e.MyOrganization="MyOrganization"}(i||(i={})),function(e){e.MyPortalTemplate="MyPortalTemplate",e.MyTemplate="MyTemplate",e.ExbAdmin="ExbAdmin",e.ArcGISOnline="ArcGISOnline",e.Favorites="Favorites",e.LivingAtlas="LivingAtlas",e.MyGroup="MyGroup",e.MyOrganization="MyOrganization"}(a||(a={})),function(e){e.Published="Published",e.Draft="Draft",e.Changed="Changed"}(l||(l={}));var n=s(2),r=s(8),c=s(1),A={_widgetLabel:"Create a new experience",untitledExperience:"Untitled experience",telplateListTitle:"Templates",searchPlaceholder:"Search",create:"Create",chooseTemplateDefault:"Default",my:"My templates",shared:"Shared templates",choseTemplate:"Select a template to start",templateSummary:"This is the summary of the item.",publicTemplate:"Public",noTemplatesAvailable:"No templates available. ",myFavorites:"My favorites",createError:"There was a problem when create new application.",noResource:"Resource does not exist or is inaccessible",warningPopUpTitle:"Warning",templateMultiPages:"Multi-pages",viewTemplateDetail:"View details"};const p=s(41),h=["scenic","exhibition","indicator"];class d extends o.React.PureComponent{constructor(e){super(e),this.onCreateClick=()=>{const{name:e,isExperiencesTemplate:t}=this.props.info;if(t)return this.props.crateAppByTemplate(this.props.info),!1;this.props.onCreateClick(e)},this.clickThumbnailToCreate=()=>{const{name:e}=this.props.info;this.checkThumbnailIsAdd()&&this.props.onCreateClick(e)},this.checkIsMultiPagesTemplate=e=>{const{accessType:t}=this.props;return!(!(null==h?void 0:h.includes(e))||t!=i.Default)},this.checkThumbnailIsAdd=()=>{const{name:e,isExperiencesTemplate:t}=this.props.info;return!(t||"default"!=e&&"default2"!=e)},this.nls=e=>{const t=Object.assign({},A,c.defaultMessages);return this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:t[e]}):e},this.getStyle=()=>{var e,t,s,i;const{theme:a}=this.props,l=a?a.colors.palette.dark[300]:"",n=a?a.colors.palette.dark[800]:"",r=a?a.colors.white:"";return o.css`
      width: ${o.polished.rem(240)};
      height: ${o.polished.rem(260)};
      margin: 0 ${o.polished.rem(14)}  30px  ${o.polished.rem(14)};
      display: flex;
      flex-direction: column;
      .image-container {
        position: relative;
        height: ${o.polished.rem(160)};
        width: ${o.polished.rem(240)};
        > img {
          width: 100%;
          max-width: 100%;
          max-height: 100%;
        }
        flex-shrink: 0;
        flex-grow: 0;

        .flip-image{
          transform: scaleX(-1);
        }
        .description {
          position: absolute;
          padding: ${o.polished.rem(16)};
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: ${r};
          opacity: 0.8;
          color: ${n};
          font-size: 13px;
          .content {
            overflow: hidden;
            width: 100%;
            height: 100%;
            overflow-y:auto;
          }
        }
        .description-cursor {
          cursor: pointer;
        }
        .multi-pages {
          height: ${o.polished.rem(26)};
          line-height: ${o.polished.rem(26)};
          color: ${null===(e=null==a?void 0:a.colors)||void 0===e?void 0:e.black};
          font-size: ${o.polished.rem(13)};
          padding: 0 ${o.polished.rem(14)};
          bottom: 0;
          right: 0;
          background: ${null===(i=null===(s=null===(t=null==a?void 0:a.colors)||void 0===t?void 0:t.palette)||void 0===s?void 0:s.primary)||void 0===i?void 0:i[100]};
        }
      }
      .action-button {
        max-width:${o.polished.rem(154)};
        color:${a.colors.black};
        display: block;
      }
      .info{
        padding: ${o.polished.rem(16)};
        flex-shrink: 1;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          ${Object.assign({},o.polished.ellipsis())}
          font-size: ${o.polished.rem(16)};
          color:${a.colors.palette.dark[800]};
        }
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-btn:first-of-type {
          margin-left: -4px;
        }
      }
      &.disabled {
        > img {
          opacity: 0.6;
        }
        .jimu-icon {
          color: ${l};
          cursor: default;
        }
        .info{
          .title {
            color: ${a.colors.palette.dark[600]};
          }
        }
      }
    `},this.getPublishStatus=e=>{let t;return(e.typeKeywords||[]).forEach(e=>{if(null==e?void 0:e.includes("status:")){switch(e.split(": ")[1]){case l.Published:case l.Changed:t=l.Published;break;case l.Draft:t=l.Draft}}}),t},this.showDesc=()=>{this.setState({showDesc:!0})},this.hideDesc=()=>{this.setState({showDesc:!1})},this.initPreviewUrl=()=>{const{isExperiencesTemplate:e,id:t,name:s,isPortalRequest:i,isArcGisOnlineRequest:a}=this.props.info;let l="";l=e||a||i?o.urlUtils.getAppUrl({appId:t,isTemplate:!0,isArcGisOnlineTemplate:a,isPortalRequest:i}):o.urlUtils.getAppUrl({appId:t,isTemplate:!0,isArcGisOnlineTemplate:a,isPortalRequest:!1,isDraft:!1,defaultTemplateName:s}),this.setState({previewUrl:l})},this.isRTL=Object(o.getAppStore)().getState().appContext.isRTL,this.state={showDesc:!1,previewUrl:"",thumbnail:""}}componentDidMount(){this.initPreviewUrl()}componentDidUpdate(){this.initPreviewUrl()}render(){const{disabled:e,style:t}=this.props,{title:s,image:i,snippet:a,name:n}=this.props.info,{showDesc:r,previewUrl:A}=this.state,{capabilities:h,info:d}=this.props,g=this.getPublishStatus(d);return Object(o.jsx)("div",{css:this.getStyle(),className:Object(o.classNames)("template bg-secondary",{disabled:e}),style:t},Object(o.jsx)("div",{className:"image-container position-relative",onMouseEnter:this.showDesc,onMouseLeave:this.hideDesc},Object(o.jsx)(c.Image,{src:i.src,alt:s,className:this.isRTL?"flip-image":""}),this.checkIsMultiPagesTemplate(n)&&Object(o.jsx)("div",{className:"multi-pages position-absolute"},this.nls("templateMultiPages")),r&&Object(o.jsx)("div",{className:Object(o.classNames)("description",{"description-cursor":this.checkThumbnailIsAdd()}),onClick:this.clickThumbnailToCreate},Object(o.jsx)("div",{className:"content"},Object(o.jsx)("div",null,a||this.nls("templateSummary"))))),Object(o.jsx)("div",{className:"info"},Object(o.jsx)("div",{className:"title",title:s},s),Object(o.jsx)("div",{className:"buttons"},h.canCreateExperience&&g!=l.Draft&&Object(o.jsx)(c.Button,{disabled:e,size:"sm",className:"action-button text-truncate",type:"primary",onClick:this.onCreateClick,title:this.nls("create")},this.nls("create")," "),h.canViewExperience&&Object(o.jsx)(c.Button,{size:"sm",icon:!0,type:"tertiary",title:this.nls("preview"),href:A,target:"_blank"},Object(o.jsx)(c.Icon,{size:"16",icon:p})," "))))}}d.defaultProps={disabled:!1};class g extends o.React.PureComponent{constructor(e){super(e),this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:A[e]}):e,this.getStyle=()=>{var e;const{theme:t}=this.props,s=null===(e=null==t?void 0:t.colors)||void 0===e?void 0:e.palette;return o.css`
      & {
        width: 100%;
        top: 25%;
        left: 0;
      }
      .empty-message {
        text-align: center;
        font-size: ${o.polished.rem(22)};
        line-height: ${o.polished.rem(22)};
        color: ${null==s?void 0:s.dark[600]};
        margin-top: ${o.polished.rem(30)};
      }
      .icon-con img{
        display: block;
        text-align: center;
        width: 26.7%;
        margin: 0 auto;
        opacity: 0.6;
      }
      @media (min-width: 1600px) {
        .icon-con img{
          width: 20%;
        }
      }
    `}}render(){return Object(o.jsx)("div",{css:this.getStyle(),className:"choose-template-empty-con position-absolute","data-testid":"empty"},Object(o.jsx)("div",{className:"icon-con"},Object(o.jsx)(c.Image,{src:s(42),"data-testid":"empty-icon"})),Object(o.jsx)("p",{className:"empty-message"},this.nls("noTemplatesAvailable")))}}var m=s(11);const u=s(12),f=s(13),v=s(43);class w extends o.React.PureComponent{constructor(e){super(e),this.getDefaultTemplate=()=>{const e=Object(m.getAppTemplates)().map(e=>({isExperiencesTemplate:!1,name:e.name,title:e.label,image:{src:e.icon},description:e.description,snippet:e.description}));this.setState({defaultTemplate:e,templates:e})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:Object.assign(Object.assign(Object.assign({},A),c.defaultMessages),o.defaultMessages)[e]}):e,this.createAppByDefaultTemplate=e=>{this.setState({loading:!0});const t=this.nls("untitledExperience"),s=this.getQueryString("folderId");r.appServices.createAppByDefaultTemplate(t,e,s).then(e=>{this.setState({loading:!1});let t=this.getQueryString("locale");t=t?"&locale="+t:"",this.props.dispatch(n.builderActions.refreshAppListAction(!0)),o.jimuHistory.browserHistory.push(`${window.jimuConfig.mountPath}builder/?id=${e.id}${t}`)},e=>{this.setState({loading:!1}),console.error(e)}).catch(e=>{this.setState({loading:!1,isShowAlertPopup:!0,alertPopupMessage:this.nls("createError")})})},this.searchLivingAtlasGroups=()=>{const e=Object(o.getAppStore)().getState().portalSelf,t=null==e?void 0:e.livingAtlasGroupQuery;if(!t)return!1;const s={num:1,start:0,sortField:"title",sortOrder:"asc",q:t};r.appServices.searchGroups(s).then(e=>{const t=null==e?void 0:e.results.map(e=>null==e?void 0:e.id),s=t.length>0?t.join(" OR "):null;this.setState({esriLivingAtlasGroupId:s})})},this.checkIsShowLivingAtlas=()=>{const e=Object(o.getAppStore)().getState().portalSelf;this.setState({isShowLivingAtlas:!!(null==e?void 0:e.livingAtlasGroupQuery)})},this.onCreateClick=e=>{this.selectTemplate(e),this.createAppByDefaultTemplate(e)},this.selectTemplate=e=>{this.props.dispatch(n.builderActions.selectTemplate(e))},this._matchearchText=e=>{const{searchTextForRequest:t}=this.state;return!t||!e||e.toLowerCase().indexOf(t.toLowerCase())>-1},this.crateAppByTemplate=e=>{this.setState({loading:!0});let t=this.getQueryString("locale");t=t?"&locale="+t:"";const s=this.getQueryString("folderId");r.appServices.createAppByItemTemplate(e,s).then(e=>{if(e){const s=window.jimuConfig.mountPath+"builder/?id="+e+t;window.location.href=s}this.setState({loading:!1})},e=>{const t=e&&(null==e?void 0:e.indexOf("Resource does not exist"))>-1?this.nls("noResource"):this.nls("createError");this.setState({loading:!1,isShowAlertPopup:!0,alertPopupMessage:t})})},this.checkIsOwner=e=>{const t=Object(o.getAppStore)().getState().user;return!(!t||!e||t.username!==e)},this.filterTemplateChange=e=>{const{defaultTemplate:t}=this.state;e!=this.state.accessType&&(e==i.Default?this.setState({templates:t,accessType:e,isMyLocalTemplateLoadAll:!1},()=>{this.filterDefaultTemplate()}):this.setState({templates:[],accessType:e,isMyLocalTemplateLoadAll:!1},()=>{this.refreshTemplate()}))},this.refreshTemplate=()=>{this.setState({templates:[],exbAdminTemplates:[],otherTemplate:[]},()=>{this.refreshAction()})},this.refreshAction=(e=!1)=>{const{accessType:t,esriLivingAtlasGroupId:s,isMyLocalTemplateLoadAll:l}=this.state,o=window.jimuConfig.isDevEdition&&l;let n=a.MyTemplate;if(t==i.ArcGisOnline){const t=this.getRequestOption(e,a.ExbAdmin);this.searchTemplate(t,e,a.ExbAdmin)}switch(t){case i.My:n=o?a.MyPortalTemplate:a.MyTemplate;break;case i.ArcGisOnline:n=a.ArcGISOnline;break;case i.MyGroup:n=a.MyGroup;break;case i.MyOrganization:n=a.MyOrganization;break;case i.Favorites:n=a.Favorites;break;case i.LivingAtlas:n=a.LivingAtlas}if(t===i.LivingAtlas&&!s)return!1;const r=this.getRequestOption(e,n);this.searchTemplate(r,e,n)},this.getSearchType=e=>{const t=e==a.LivingAtlas||e==a.MyPortalTemplate,s=e==a.ExbAdmin||e==a.ArcGISOnline;let i;return i=t?r.SearchType.Portal:s?r.SearchType.AGOL:r.SearchType.Other,i},this.getAppPortalUrl=e=>{},this.setTemplateData=(e,t,s)=>{s==a.MyPortalTemplate?this.setMyPortalTemplateData(e,t):this.setTemplateListData(e,t,s)},this.searchMyPortalTemplate=(e,t=!1)=>{this.isSearchMyPortalTemplate(e,t)&&this.setState({isMyLocalTemplateLoadAll:t,myPortaltemplates:[]},()=>{this.refreshAction()})},this.isSearchMyPortalTemplate=(e,t)=>{const{accessType:s,myTemplatesInDevEdtion:l}=this.state;let o=!0;return s===i.My&&e!=a.MyPortalTemplate||(o=!1),l.length>=this.pageNumber&&(o=!1),t||(o=!1),o},this.initTemplateInfo=(e,t)=>{const{portalUrl:s}=this.props,i=t==a.LivingAtlas||t==a.MyPortalTemplate,l=t==a.ExbAdmin||t==a.ArcGISOnline,n=window.jimuConfig.isDevEdition&&t==a.MyTemplate,r=o.portalUrlUtils.isAGOLDomain(s),c=l&&!r?"https://maps.arcgis.com":s;return e.map(e=>Object.assign(Object.assign({},e),{isExperiencesTemplate:!0,image:{src:this.thumbnail(e.thumbnail,e.id,l,i)},isArcGisOnlineRequest:l,isPortalRequest:i,portalUrl:c,isLocalApp:n}))},this.setTemplateListData=(e,t,s)=>{let{otherTemplate:i,exbAdminTemplates:l,templates:o}=this.state;i=t?i:[],l=t?l:[],o=t?o:[],t?(i=i.concat(e),l=l.concat(e)):(i=e,l=e);switch(s==a.MyTemplate&&window.jimuConfig.isDevEdition&&this.setState({myTemplatesInDevEdtion:e}),s){case a.ExbAdmin:this.setState({exbAdminTemplates:l});break;default:this.setState({otherTemplate:i,templates:o.concat(e)})}},this.setMyPortalTemplateData=(e,t=!1)=>{let{myPortaltemplates:s}=this.state;const{templates:i}=this.state;s=t?s:[],s=t?s.concat(e):e,this.setState({myPortaltemplates:s,templates:i.concat(e)})},this.checkMyLocalTemplateIsLoadAll=(e,t,s=a.MyPortalTemplate)=>{const{accessType:l}=this.state;return l===i.My&&(s==a.MyPortalTemplate||l==i.My&&e>t)},this.getRequestOption=(e=!1,t)=>{if(this.state.accessType==i.Default)return null;const s={start:1,q:'type: "Web Experience Template"',sortField:"modified",sortOrder:"desc",num:30};if(o.SessionManager.getInstance().getMainSession()){s.q=this.getRequestOptionParamsQ(t);const i=this.getPageStartAndNum(e,t);s.num=i.num,s.start=i.start}return window.jimuConfig.isDevEdition&&t==a.MyTemplate&&(s.portalUrl=this.props.portalUrl),s},this.getRequestOptionParamsQ=(e=a.ArcGISOnline)=>{var t;const{esriLivingAtlasGroupId:s}=this.state,i=o.SessionManager.getInstance().getMainSession(),l=Object(o.getAppStore)().getState().user,n=(null==l?void 0:l.favGroupId)||"",r='type: "Web Experience Template"',{searchTextForRequest:c}=this.state,A=c?`AND (${this.state.searchTextForRequest})`:"";if(!i)return`${r} ${A}`;const p=null===(t=null==l?void 0:l.groups)||void 0===t?void 0:t.map(e=>e.id),h=(null==i?void 0:i.username)||"",d=(null==p?void 0:p.length)>0?p.join(" OR "):"",g=s?`group:(${s})`:"";switch(e){case a.ExbAdmin:return`${r} AND owner:ExB_team ${A}`;case a.MyTemplate:case a.MyPortalTemplate:return`${r} orgid:${null==l?void 0:l.orgId} AND owner:${h} ${A}`;case a.MyGroup:return`group: (${d}) (access:shared OR access:public OR access:org) ${r} ${A}`;case a.MyOrganization:return`orgid:${null==l?void 0:l.orgId} ${r}  ${A}`;case a.Favorites:return`group: "${n}" ${r} ${A}`;case a.ArcGISOnline:return`${r} AND NOT owner:ExB_team ${A}`;case a.LivingAtlas:return`${r} ${g} ${A}`}},this.getPageStartAndNum=(e,t)=>{const{otherTemplate:s,exbAdminTemplates:i,myPortaltemplates:l}=this.state,o={num:this.getPageNumber(e,t),start:1};if(!e)return o;switch(t){case a.ExbAdmin:o.start=i.length+1;break;case a.MyPortalTemplate:o.start=l.length+1;break;default:o.start=s.length+1}return o},this.getPageNumber=(e,t)=>{const{myTemplatesInDevEdtion:s}=this.state,i=this.contentNode.clientWidth,l=this.contentNode.clientHeight;let o=Math.ceil(l/260)*Math.ceil(i/238)||30;return t!=a.MyPortalTemplate||e||(o=o-s.length||0),this.pageNumber=o,o},this.thumbnail=(e,t,a=!1,l=!1)=>{const{accessType:n}=this.state,r=n==i.My,c=o.portalUrlUtils.isAGOLDomain(this.props.portalUrl),A=window.jimuConfig.isDevEdition&&r&&!l,p=a?o.urlUtils.getArcgisOnlineUrl():this.props.portalUrl,h=o.SessionManager.getInstance().getSessionByUrl(p),d=a&&!c?"":"?token="+(null==h?void 0:h.token);let g;if(e){const s=window.location.origin+"/apps/"+t+"/"+g,i=p+"/sharing/rest/content/items/"+t+"/info/"+e+d;g=A?s:i}else g=s(44);return g},this.getMyTemplateThumbnail=(e,t)=>{let s;const i=o.SessionManager.getInstance().getSessionByUrl(this.props.portalUrl),a=i&&i.token?"?token="+i.token:"";return s=window.jimuConfig.isDevEdition?window.location.origin+"/apps/"+t+"/"+e:this.props.portalUrl+"/sharing/rest/content/items/"+t+"/info/"+e+a,s},this.getStyle=()=>{var e,t;const{theme:s}=this.props,i=s?s.colors.palette.light[800]:"";return o.css`
      height: 100%;
      .header-bar {
        width: 100%;
        height: ${o.polished.rem(60)};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${o.polished.rem(30)};
        font-size: 20px;
        border-bottom: 1px solid ${i};
        color:${s.colors.palette.dark[600]};
        font-weight:500;
        background:${s.colors.palette.light[400]};
        &>div {
          color: ${s.colors.palette.dark[600]};
        }
        &>div:hover {
          color: ${s.colors.black};
        }
        .jimu-icon {
          cursor: pointer;
        }
      }
      .loading-con {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: ${o.polished.rgba(s.colors.white,.2)};
      }
      .homescreen {
        width:810px;
        margin: 0 auto;
      }
      .top-padding{
        padding-right: ${o.polished.rem(32)};
        padding-left: ${o.polished.rem(16)};
      }
      .header {
        width: 100%;
        padding-bottom: ${o.polished.rem(20)};
        padding-top: ${o.polished.rem(24)};
        align-items: flex-end;
        .filterbar-input {
          width:${o.polished.rem(160)};
          margin-right:${o.polished.rem(20)};
        }
      }
      .search-con {
        &{
          padding-top: ${o.polished.rem(30)};
        }
        &>span {
          font-size: ${o.polished.rem(20)};
          line-height: ${o.polished.rem(20)};
          color: ${null===(t=null===(e=null==s?void 0:s.colors)||void 0===e?void 0:e.palette)||void 0===t?void 0:t.dark[600]};
        }
        .banner {
          position: relative;
          .jimu-icon {
            color: ${s.colors.palette.dark[600]};
            cursor: pointer;
          }
          .searchbox {
            padding-left:${o.polished.rem(28)};
            font-size:${o.polished.rem(14)};
            height: ${o.polished.rem(32)};
            width:${o.polished.rem(228)};
            cursor: text;
            box-sizing: border-box;
            padding-right: ${o.polished.rem(20)};
            input {
              flex: 1;
            }
          }
          .searchbox::-ms-clear{
            display: none;
          }
          .icon-close-con {
            color: ${s.colors.palette.dark[600]};
          }
        }
      }

      .section {
        display: flex;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: auto;
        align-content: flex-start;
        height: calc(100% - 165px);
        min-width: 822px;
        .bottom_space {
          width: 100%;
          height: ${o.polished.rem(80)};
        }
      }
      .template-con {
        flex-wrap:wrap;
        align-content: flex-start;
      }
      .template-title {
        font-size: ${o.polished.rem(14)};
        color:${s.colors.palette.dark[400]};
        .tap-link a.active {
          font-weight:500;
        }
        .header-nav-bar-con {
          padding:0;
          .navbar-nav {
            border: none;
          }
          .nav-item {
            flex: auto;
          }
        }
        a {
          padding-left:0;
          padding-right:0;
          width:auto;
        }
        .nav-item a.nav-link {
          width: auto;
          white-space: nowrap;
          color: inherit;
        }
        .nav-item a.nav-link:hover {
          color: ${s.colors.black};
        }
        .tap-margin-r {
          margin-right:${o.polished.rem(20)};
        }
      }
      @media only screen and (min-width: 1280px) {
        .homescreen {
          width:1090px;
        }
        .top-padding{
          padding-right: ${o.polished.rem(32)};
          padding-left: ${o.polished.rem(16)};
        }
        .search-con .banner .searchbox {
          width:${o.polished.rem(400)};
        }
        .template-title  .tap-margin-r {
          margin-right:${o.polished.rem(30)};
        }
      }
      @media only screen and (min-width: 1400px) {
        .top-padding{
          padding-right: ${o.polished.rem(37)};
          padding-left: ${o.polished.rem(16)};
        }
        .homescreen {
            width:1360px;
        }
        .template-title  .tap-margin-r {
          margin-right:${o.polished.rem(40)};
        }
      }
      @media only screen and (min-width: 1680px) {
        .homescreen {
            width:1630px;
        }
      }

    `},this.close=()=>{"back"==this.getQueryString("redirect")?o.jimuHistory.browserHistory.back():window.location.href=window.jimuConfig.mountPath},this.isTemplateDisabled=e=>!1,this.onSearch=e=>{const{accessType:t}=this.state,s=t==i.Default,a=0==e.length||e.length>2?e:this.state.searchTextForRequest;this.setState({searchText:e,searchTextForRequest:a,isMyLocalTemplateLoadAll:!1},()=>{if(e.length>0&&e.length<3)return!1;clearTimeout(this.onSearchTextInputed),this.onSearchTextInputed=setTimeout(()=>{s?this.filterDefaultTemplate():this.refreshAction()},500)})},this.handleKeydown=e=>{const t=e.target.value,{accessType:s}=this.state,a=s==i.Default;13===e.keyCode&&t&&this.setState({searchTextForRequest:t},()=>{clearTimeout(this.onSearchTextInputed),a?this.filterDefaultTemplate():this.refreshAction()})},this.clearSearchText=()=>{const{accessType:e,searchTextForRequest:t}=this.state,s=e==i.Default;this.setState({searchText:"",searchTextForRequest:""},()=>{t&&(clearTimeout(this.onSearchTextInputed),s?this.filterDefaultTemplate():this.refreshAction())})},this.filterDefaultTemplate=()=>{const{defaultTemplate:e}=this.state,t=e.filter(e=>this._matchearchText(e.title));this.setState({templates:t})},this.checkUserPrivilege=()=>{const{CheckTarget:e}=o.privilegeUtils;o.privilegeUtils.checkExbAccess(e.AppList).then(e=>{(null==e?void 0:e.capabilities)&&this.setState({capabilities:e.capabilities})})},this.toggleAlertPopup=()=>{this.setState({isShowAlertPopup:!this.state.isShowAlertPopup,alertPopupMessage:""})},this.state={loading:!1,isShowAlertPopup:!1,alertPopupMessage:"",searchText:"",searchTextForRequest:"",accessType:i.Default,defaultTemplate:[],templates:[],exbAdminTemplates:[],otherTemplate:[],livingAtlasTemplate:[],myPortaltemplates:[],myTemplatesInDevEdtion:[],capabilities:{canCreateExperience:!1,canDeleteExperience:!1,canShareExperience:!1,canUpdateExperience:!1,canViewExperience:!1},esriLivingAtlasGroupId:null,isMyLocalTemplateLoadAll:!1,isShowLivingAtlas:!1}}componentDidMount(){this.getDefaultTemplate(),this.checkUserPrivilege(),this.contentNode&&this.contentNode.addEventListener("scroll",this.onScrollHandle.bind(this))}componentDidUpdate(){var e;const{isShowLivingAtlas:t}=this.state;t!==!!(null===(e=Object(o.getAppStore)().getState().portalSelf)||void 0===e?void 0:e.livingAtlasGroupQuery)&&(this.searchLivingAtlasGroups(),this.checkIsShowLivingAtlas())}onScrollHandle(e){const t=e.target.clientHeight,s=e.target.scrollHeight,i=t+e.target.scrollTop+1>s;!this.state.loading&&i&&this.refreshAction(!0)}getQueryString(e){return o.queryString.parse(window.location.search)[e]||""}searchTemplate(e,t=!1,s=a.ArcGISOnline){if(!e)return;let i=null;this.setState({loading:!0});const l=this.getSearchType(s);i=r.appServices.searchApp(e,l),i.then(e=>{const a=e.results;if(!i)return void this.setState({loading:!1});const l=this.initTemplateInfo(a,s);if(this.setTemplateData(l,t,s),this.setState({loading:!1}),window.jimuConfig.isDevEdition){const t=this.checkMyLocalTemplateIsLoadAll(e.nextStart,e.total,s);this.searchMyPortalTemplate(s,t)}},()=>{this.setState({loading:!1})})}render(){const{templates:e,searchText:t,capabilities:s,isShowAlertPopup:a,alertPopupMessage:l,exbAdminTemplates:n,accessType:r,isShowLivingAtlas:A}=this.state,{theme:p,intl:h}=this.props,m=r==i.ArcGisOnline?n.concat(e):e;return Object(o.jsx)("div",{css:this.getStyle(),className:"widget-choose-template bg-light-300","data-testid":"widget-choose-template"},Object(o.jsx)("div",{className:"header-bar"},this.nls("template"),Object(o.jsx)("div",{"data-testid":"close-button",onClick:this.close},Object(o.jsx)(c.Icon,{size:20,icon:v}))),Object(o.jsx)("div",{className:"homescreen"},Object(o.jsx)("div",{className:"d-flex search-con top-padding align-items-center"},Object(o.jsx)("span",{className:"flex-grow-1"},this.nls("choseTemplate")),Object(o.jsx)("div",{className:"d-flex"},Object(o.jsx)("div",{className:"banner d-flex position-relative"},Object(o.jsx)(c.TextInput,{prefix:Object(o.jsx)(c.Icon,{size:16,icon:u,className:"search-icon position-relative"}),className:"searchbox",placeholder:this.nls("searchPlaceholder"),value:t,suffix:Object(o.jsx)("div",{className:Object(o.classNames)("icon-close-con",{"d-none":!t}),onClick:this.clearSearchText},Object(o.jsx)(c.Icon,{size:12,icon:f})),onKeyDown:e=>{this.handleKeydown(e)},onChange:e=>{this.onSearch(e.target.value)}})))),Object(o.jsx)("div",{className:"header d-flex top-padding"},Object(o.jsx)("div",{className:"template-title flex-grow-1"},Object(o.jsx)(c.Navbar,{className:"header-nav-bar-con",border:!1,color:"false",light:!0},Object(o.jsx)(c.Nav,{underline:!0,navbar:!0,justified:!0,fill:!0,"data-testid":"template-menu"},Object(o.jsx)(c.NavItem,{className:"tap-link tap-margin-r",title:this.nls("chooseTemplateDefault"),onClick:()=>{this.filterTemplateChange(i.Default)}},Object(o.jsx)(c.NavLink,{active:r==i.Default},this.nls("chooseTemplateDefault"))),Object(o.jsx)(c.NavItem,{className:"tap-link tap-margin-r",title:this.nls("my"),onClick:()=>{this.filterTemplateChange(i.My)}},Object(o.jsx)(c.NavLink,{active:r==i.My},this.nls("my"))),!window.jimuConfig.isDevEdition&&Object(o.jsx)(c.NavItem,{className:"tap-link tap-margin-r",title:this.nls("myFavorites"),onClick:()=>{this.filterTemplateChange(i.Favorites)}},Object(o.jsx)(c.NavLink,{active:r==i.Favorites},this.nls("myFavorites"))),!window.jimuConfig.isDevEdition&&Object(o.jsx)(c.NavItem,{className:"tap-link tap-margin-r",title:this.nls("myGroup"),onClick:()=>{this.filterTemplateChange(i.MyGroup)}},Object(o.jsx)(c.NavLink,{active:r==i.MyGroup},this.nls("myGroup"))),!window.jimuConfig.isDevEdition&&Object(o.jsx)(c.NavItem,{className:"tap-link tap-margin-r",title:this.nls("myOrganization"),onClick:()=>{this.filterTemplateChange(i.MyOrganization)}},Object(o.jsx)(c.NavLink,{active:r==i.MyOrganization},this.nls("myOrganization"))),Object(o.jsx)(c.NavItem,{className:"tap-link tap-margin-r",title:"ArcGIS Online",onClick:()=>{this.filterTemplateChange(i.ArcGisOnline)}},Object(o.jsx)(c.NavLink,{active:r==i.ArcGisOnline},"ArcGIS Online")),A&&Object(o.jsx)(c.NavItem,{className:"tap-link tap-margin-r",title:this.nls("livingAtlas"),onClick:()=>{this.filterTemplateChange(i.LivingAtlas)}},Object(o.jsx)(c.NavLink,{active:r==i.LivingAtlas},this.nls("livingAtlas")))))))),Object(o.jsx)("div",{className:"section position-relative",ref:e=>this.contentNode=e},Object(o.jsx)("div",{className:"d-flex template-con homescreen",ref:e=>{this.appListContainer=e}},m.length>0&&m.map((e,t)=>Object(o.jsx)(d,{key:t,theme:p,info:e,intl:h,accessType:this.state.accessType,disabled:this.isTemplateDisabled(e),onCreateClick:this.onCreateClick,capabilities:s,crateAppByTemplate:this.crateAppByTemplate})),0==m.length&&!this.state.loading&&Object(o.jsx)(g,{theme:p,intl:h})),Object(o.jsx)("div",{className:"bottom_space"})),this.state.loading&&Object(o.jsx)("div",{className:"loading-con"},Object(o.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%"},className:"jimu-primary-loading"})),Object(o.jsx)(c.AlertPopup,{isOpen:a,title:this.nls("warningPopUpTitle"),hideCancel:!0,toggle:this.toggleAlertPopup},Object(o.jsx)("div",{style:{fontSize:"1rem"}},l)))}}w.scrollTop=0},11:function(e,t){e.exports=l},12:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 13a7 7 0 115.621-2.828l-.222.284 3.405 3.404a.668.668 0 01-.944.944L11.456 12.4A6.974 6.974 0 017 14z" fill="#000" fill-rule="evenodd"></path></svg>'},13:function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'},2:function(e,t){e.exports=i},41:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 0a2 2 0 012 2v8.5a.5.5 0 01-1 0V2a1 1 0 00-1-1H2a1 1 0 00-1 1v12a1 1 0 001 1h8.5a.5.5 0 010 1H2a2 2 0 01-2-2V2a2 2 0 012-2h12zm-1.074 12.196l2.923 2.922a.517.517 0 01-.73.73l-2.923-2.922a.517.517 0 01.73-.73zM8 3a5 5 0 110 10A5 5 0 018 3zm0 1a4 4 0 100 8 4 4 0 000-8z" fill="#000" fill-rule="nonzero"></path></svg>'},42:function(e,t){e.exports="data:image/png;base64,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"},43:function(e,t){e.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.462 12l10.235 10.235a1.034 1.034 0 11-1.462 1.462L12 13.462 1.765 23.697a1.034 1.034 0 11-1.462-1.462L10.538 12 .303 1.765A1.034 1.034 0 111.765.303L12 10.538 22.235.303a1.034 1.034 0 111.462 1.462L13.462 12z" fill="#000" fill-rule="nonzero"></path></svg>'},44:function(e,t){e.exports="data:image/png;base64,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"},8:function(e,t){e.exports=a}}))}}}));
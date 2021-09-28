System.register(["jimu-core","jimu-for-builder"],(function(e){var t,s;return{setters:[function(e){t=e},function(e){s=e}],execute:function(){e(function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=33)}({0:function(e,s){e.exports=t},3:function(e,t){e.exports=s},33:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return u}));var n=s(0);function i(e,t,s){return n.css`
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
    }

    #landing-page{
      width: 100%;
      height: 100%;
      position: relative;

      display: flex;
      align-items: center;
    }
    #create-app{
      position: absolute;
      display: block;
      width: 235px;
      height: 55px;
      left: calc(50% - 117px);
      top: 438px;
      cursor: pointer;
    }

    .exb-main-bg {
      background-image: url(${t+"./dist/runtime/assets/landing-page.jpg"});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .exb-main-content {
      margin-top: 14vh;
      width: 100%;
    }

    .text-center {
      text-align: center;
    }

    .intro-transition {
      animation: fadeinAndUp .8s ease;
    }

    .intro-transition2 {
      animation: fadeinAndUp 1s ease;
    }

    @keyframes fadeinAndUp {
      0% {
        transform: translate(0, 40px);
        opacity: 0;
      }
      100% {
        transform: translate(0, 0);
        opacity: 1;
      }
    }

    .exb-logo {
      height: 90px;
      width: 90px;
    }

    .banner-title {
      color: #F4F7FF;
      font-size: 65px;
      letter-spacing: 1.35px;
      text-align: center;
      margin-top: 16px;
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .banner-title h1 {
      margin: 8px;
      font-size: 65px;
    }

    .exb-line-break {
      margin: 0 auto;
      margin-bottom: 28px;
      margin-top: 15px;
      width: 60px;
      border-top: 3px solid rgba(255, 255, 255, .7);
    }

    .exb-heading-description {
      color: #F4F7FF;
      font-size: 18px;
      line-height: 1.5rem;
      padding: 0 29%;
      margin-bottom: 35px;
    }

    .exb-learn-more-link {
      color: #F4F7FF;
      text-align: center;
      cursor: pointer;
      text-decoration: none;
      font-size: 15px;
    }

    .exb-learn-more-link:hover {
      text-decoration: underline
    }

    .exb-sign-btn {
      padding: 20px 72px;
      font-size: 17px;
      border-radius: 0;
      background: #007F94;
      color: #F4F7FF;
      transition: all .3s linear;
      text-decoration: none;
      cursor: pointer;
    }

    .exb-sign-btn:hover {
      background: #00AABB;
    }

    .exb-header-barrier {
      height: 56px;
      animation: fadein 1s ease;
    }

    .exb-header-wrap {
      height: 100%;
      background: #fff;
      box-shadow: 0 1px 0 0 #e0e0e0;
      position: relative;
      z-index: 101;
    }

    .exb-header {
      width: 1440px;
      max-width: 96vw;
      margin: 0 auto;
      height: 100%;
    }

    .exb-header * {
      box-sizing: border-box;
    }

    .exb-header-menus-list {
      list-style-type: none;
      margin-top: 0;
      margin-bottom: 0;
      padding-right: 0;
      padding-left: 0;
      display: flex;
      width: 390px;
    }

    .exb-header-menus-item {
      margin: 0;
      flex-grow: 1;
      position: relative;
    }

    .exb-header-menus-link {
      text-align: left;
      padding: 18px 24px;
      width: 100%;
      display: flex;
      cursor: pointer;
      white-space: nowrap;
      color: #595959 !important;
      font-size: 16px;
      line-height: 20px;
      text-decoration: none;
    }

    .exb-header-menus-link:hover {
      box-shadow: inset 0 -3px 0 0 rgba(0,121,193,.5);
      color: #000;
      fill: currentColor
    }

    .exb-footer {
      position: absolute;
      width: 100%;
      height: 56px;
      background: #ffffff;
      text-align: center;
      color: #045E6C;
      bottom: 0;
      animation: fadein 1s ease;
      line-height: 1.5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .exb-footer-span {
      color: #045E6C;
      font-size: 13px;
    }

    .exb-footer-text {
      color: #045E6C;
      font-size: 13px;
      text-decoration: none;
    }

    .exb-footer-text:hover {
      text-decoration: underline;
    }

    @keyframes fadein {
      0% {
        opacity: 0;
      }
      20% {
        opacity: .30;
      }
      100% {
        opacity: 1;
      }
    }

    .exb-header-menus-submenu {
      width: 420px;
      left: 0;
      padding: 15px 35px 35px;
      box-shadow: inset 0 0 0 1px #e0e0e0;
      top: 100%;
      position: absolute;
      transition: opacity .25s ease-in-out;
      background-color: #f8f8f8;
      display: none;
    }

    .exb-header-menus-sublist {
      list-style-type: none;
      margin-top: 0;
      margin-bottom: 0;
      padding-right: 0;
      padding-left: 0;
      font-size: 0.9375rem;
      line-height: 1.5;
    }

    .exb-header-menus-subitem {
      margin: 0;
    }

    .exb-header-menus-sublink{
      padding-right: 30px;
      background-image: linear-gradient(90deg,#0079c1 50%,#e0e0e0 0);
      background-position: 100% 100%;
      background-repeat: no-repeat;
      background-size: 200% 1px;
      color: #595959;
      cursor: pointer;
      display: block;
      font-size: 15px;
      line-height: 20px;
      position: relative;
      transition: background-position .25s;
      padding-top: 15px;
      padding-bottom: 15px;
      text-decoration: none;
    }

    .exb-header-menus-sublink:hover{
      background-position-x: 0;
      color: #000;
      text-decoration: none;
    }

    .exb-header-menus-sublink:after{
      right: 20px;
      opacity: 0;
      position: absolute;
      width: 16px;
      height: 16px;
      transition: opacity .25s,transform .25s;
      content: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='%230079c1'%3E%3Cpath d='M3 6.982h9.452L9.948 4.48l.707-.707L14.384 7.5l-3.729 3.729-.707-.707 2.54-2.54H3z'/%3E%3C/svg%3E");
      top: calc(50% - 16px / 2)
    }

    .exb-header-menus-sublink:hover:after{
      opacity: 1;
      transform: translateX(10px) ${s?"scaleX(-1)":null};
    }

    .exb-header-canvas {
      background-color: rgba(0,0,0,.5);
      opacity: 0;
      transition: opacity .25s ease-in-out;
      border-style: none;
      content: "";
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0;
      position: fixed;
      width: 100%;
      height: 100%;
      -webkit-tap-highlight-color: transparent;
      transition: opacity .25s ease-in-out,visibility 0ms .25s;
      z-index: -1;
      top: 56px;
    }

    .icon-horizontal-revert {
      -moz-transform:scaleX(-1);
      -webkit-transform:scaleX(-1);
      -o-transform:scaleX(-1);
      transform:scaleX(-1);
    }
  `}var a="Overview",r="Help",o="Create web apps and pages visually with drag-and-drop. Choose the tools you need to interact with your 2D and 3D data. Build interactive, mobile adaptive experiences for your audiences.",l="Learn more about ArcGIS Experience Builder",c="Sign in",d="Trust Center",b="Legal",p="Contact Esri",x=s(3);class u extends n.React.PureComponent{constructor(e){super(e),this.getImageUrl=e=>this.props.context.folderUrl+"./dist/runtime/"+e,this.controlSubMenuList=e=>{e?(document.getElementById("exb-submenu").style.display="block",document.getElementById("exb-header-canvas").style.opacity="1",document.getElementById("exb-header-canvas").style.zIndex="1"):(document.getElementById("exb-submenu").style.display="none",document.getElementById("exb-header-canvas").style.opacity="0",setTimeout(()=>{document.getElementById("exb-header-canvas").style.zIndex="-1"},200))},this.toSignIn=()=>{n.SessionManager.getInstance().signIn("/",!1)},this.showExbContent=()=>{this.setState({isPageLoaded:!0})},this.initPage=()=>{const e=new Image;e.src=this.getImageUrl("assets/landing-page.jpg"),e.onload=()=>{this.showExbContent()},e.onerror=()=>{this.showExbContent()}},this.onClickMenuLink=e=>{e.preventDefault(),e.stopPropagation(),"none"===document.getElementById("exb-submenu").style.display||""===document.getElementById("exb-submenu").style.display?this.controlSubMenuList(!0):this.controlSubMenuList(!1)},this.onClickSubMenu=e=>{e.stopPropagation()},this.state={isPageLoaded:!1,helpLinkUrl:null}}componentDidMount(){this.initPage(),x.helpUtils.getHomeHelpLink().then(e=>{this.setState({helpLinkUrl:e})})}render(){const e=Object(n.getAppStore)().getState().appContext.isRTL;return Object(n.jsx)("div",{className:"widget-landing w-100 h-100",css:i(this.props.theme,this.props.context.folderUrl,e),onClick:()=>{this.controlSubMenuList(!1)}},Object(n.jsx)("div",{id:"landing-page"},Object(n.jsx)("div",{className:"w-100 h-100",style:{overflow:"auto",position:"relative"}},Object(n.jsx)("div",{className:"exb-header-barrier"},Object(n.jsx)("div",{className:"exb-header-wrap"},Object(n.jsx)("div",{className:"exb-header"},Object(n.jsx)("div",{className:"exb-header-menus-menu"},Object(n.jsx)("ul",{className:"exb-header-menus-list"},Object(n.jsx)("li",{className:"exb-header-menus-item"},Object(n.jsx)("div",{className:"exb-header-menus-link d-flex",id:"exb-header-menus-link-desktop",onClick:e=>{this.onClickMenuLink(e)}},Object(n.jsx)("span",null,"ArcGIS Experience Builder"),Object(n.jsx)("img",{style:{display:"block",marginLeft:"5px",marginTop:"-2px",width:"20px",height:"20px"},src:this.getImageUrl("assets/down.png")})),Object(n.jsx)("div",{className:"exb-header-menus-submenu",id:"exb-submenu",onClick:e=>{this.onClickSubMenu(e)}},Object(n.jsx)("ul",{className:"exb-header-menus-sublist"},Object(n.jsx)("li",{className:"exb-header-menus-subitem"},Object(n.jsx)("a",{className:"exb-header-menus-sublink",href:"https://www.esri.com/software/arcgis/arcgisonline"},"ArcGIS Online")),Object(n.jsx)("li",{className:"exb-header-menus-subitem"},Object(n.jsx)("a",{className:"exb-header-menus-sublink",href:"https://www.esri.com/arcgis/products/arcgis-pro/Overview"},"ArcGIS Pro")),Object(n.jsx)("li",{className:"exb-header-menus-subitem"},Object(n.jsx)("a",{className:"exb-header-menus-sublink",href:"https://www.esri.com/arcgis/products/arcgis-enterprise/Overview"},"ArcGIS Enterprise")),Object(n.jsx)("li",{className:"exb-header-menus-subitem"},Object(n.jsx)("a",{className:"exb-header-menus-sublink",href:"https://developers.arcgis.com/en/"},"ArcGIS for Developers")),Object(n.jsx)("li",{className:"exb-header-menus-subitem"},Object(n.jsx)("a",{className:"exb-header-menus-sublink",href:"http://links.esri.com/arcgis-solutions/"},"ArcGIS Solutions")),Object(n.jsx)("li",{className:"exb-header-menus-subitem"},Object(n.jsx)("a",{className:"exb-header-menus-sublink",href:"http://marketplace.arcgis.com/"},"ArcGIS Marketplace"))))),Object(n.jsx)("li",{className:"exb-header-menus-item"},Object(n.jsx)("a",{className:"exb-header-menus-link",href:"https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview",target:"_blank"},Object(n.jsx)("span",null,this.props.intl.formatMessage({id:"landingOverView",defaultMessage:a})))),Object(n.jsx)("li",{className:"exb-header-menus-item"},Object(n.jsx)("a",{className:"exb-header-menus-link",href:this.state.helpLinkUrl,target:"_blank"},Object(n.jsx)("span",null,this.props.intl.formatMessage({id:"landingHelp",defaultMessage:r}))))))))),Object(n.jsx)("div",{className:"exb-main-bg",style:{position:"absolute",width:"100%",height:"calc(100% - 56px)",minHeight:"800px"}},Object(n.jsx)("button",{className:"exb-header-canvas",id:"exb-header-canvas"}),Object(n.jsx)("div",{className:"exb-main-content text-center"},Object(n.jsx)("div",{className:"intro-transition",style:{display:this.state.isPageLoaded?"block":"none"}},Object(n.jsx)("img",{className:"exb-logo",src:this.getImageUrl("assets/exb-logo.png")})),Object(n.jsx)("div",{className:"intro-transition2",style:{display:this.state.isPageLoaded?"block":"none"}},e&&Object(n.jsx)("div",{className:"banner-title"},Object(n.jsx)("h1",null,"Builder"),Object(n.jsx)("h1",null,"Experience"),Object(n.jsx)("h1",{style:{position:"relative"}},"ArcGIS")),!e&&Object(n.jsx)("div",{className:"banner-title"},Object(n.jsx)("h1",null,"ArcGIS"),Object(n.jsx)("h1",null,"Experience"),Object(n.jsx)("h1",{style:{position:"relative"}},"Builder")),Object(n.jsx)("hr",{className:"exb-line-break"}),Object(n.jsx)("p",{className:"exb-heading-description text-break"},this.props.intl.formatMessage({id:"landingProductDiscribe",defaultMessage:o})),Object(n.jsx)("a",{className:"exb-learn-more-link",href:"https://www.esri.com/en-us/arcgis/products/arcgis-experience-builder/overview"},this.props.intl.formatMessage({id:"landingLearnMore",defaultMessage:l})),e&&Object(n.jsx)("img",{className:"ml-2 mb-1 icon-horizontal-revert",src:this.getImageUrl("assets/arrow.svg")}),!e&&Object(n.jsx)("img",{className:"ml-2 mb-1",src:this.getImageUrl("assets/arrow.svg")}),Object(n.jsx)("div",{style:{marginTop:"68px"}},Object(n.jsx)("a",{className:"exb-sign-btn",onClick:this.toSignIn},this.props.intl.formatMessage({id:"landingSignIn",defaultMessage:c}))))),Object(n.jsx)("div",{style:{position:"absolute",width:"100%",height:"56px",backgroundColor:"#ffffff",bottom:"0"}},Object(n.jsx)("div",{className:"exb-footer"},Object(n.jsx)("span",null,Object(n.jsx)("a",{href:"https://trust.arcgis.com",className:"exb-footer-text",target:"_blank"},this.props.intl.formatMessage({id:"landingTrustCenter",defaultMessage:d})),Object(n.jsx)("span",{className:"exb-footer-span"},"  |  "),Object(n.jsx)("a",{href:"https://www.esri.com/en-us/legal/overview",className:"exb-footer-text",target:"_blank"},this.props.intl.formatMessage({id:"landingLegal",defaultMessage:b})),Object(n.jsx)("span",{className:"exb-footer-text"},"  |  "),Object(n.jsx)("a",{href:"http://www.esri.com/about-esri/contact",className:"exb-footer-text",target:"_blank"},this.props.intl.formatMessage({id:"landingContact",defaultMessage:p})))))))))}}}}))}}}));
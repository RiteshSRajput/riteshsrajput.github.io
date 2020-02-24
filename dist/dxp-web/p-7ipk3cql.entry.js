import{r as s,c as e,d as t,h as a,g as i}from"./p-8188e849.js";import{B as n}from"./p-16d6f0ca.js";import{m as d}from"./p-d4a6e2b8.js";const r=class{constructor(t){s(this,t),this.expandCollapseIconPosition="footer",this.collapsed=e(this,"collapsed",7),this.expanded=e(this,"expanded",7)}menuChangeHandler(){this.base.createNestedMarkup(this.menuContainer,"dxp-sidebar-menu-group",this.menuItems)}componentWillLoad(){this.base=new n(this,t),this.base.i18Init(t,"SidebarMenu",d),this.expandOnHover&&(this.showExpanded=!1)}async componentDidLoad(){this.menuChangeHandler(),this.showExpanded?await this.expand():await this.collapse()}async handleKeyEvents(s){const e=s.key||s.keyCode;(s.target?s.composedPath()[0]:s.target).classList.contains("collapse-icon")&&(32!==e&&13!==e||await this.collapseExpandSidebar()),this.preventDefaultAction(s,[32,37,38,39,40])}routingHandler(s){this.base.routingEventListener(s)}async collapse(){const s=this.base.shadowRootQuerySelector(this.element,"nav",!1);s.classList.add("sidebar-collapsed"),s.classList.remove("sidebar-expanded"),this.setAndCollapse(!0),this.collapsed.emit({action:"collapsed"})}async collapseExpandSidebar(){const s=this.base.shadowRootQuerySelector(this.element,"nav",!1);s&&s.classList.contains("sidebar-expanded")?(s.classList.add("sidebar-collapsed"),s.classList.remove("sidebar-expanded"),this.setAndCollapse(!0),this.collapsed.emit({action:"collapsed"})):(s.classList.add("sidebar-expanded"),s.classList.remove("sidebar-collapsed"),this.setAndCollapse(!1),this.expanded.emit({action:"expanded"}))}async expand(){const s=this.base.shadowRootQuerySelector(this.element,"nav",!1);s.classList.add("sidebar-expanded"),s.classList.remove("sidebar-collapsed"),this.setAndCollapse(!1),this.expanded.emit({action:"expanded"})}getAllMenuGroupElements(){const s=this.base.shadowRootQuerySelector(this.element,"dxp-sidebar-menu-group",!0);return s&&s.length>0?s:this.element.querySelectorAll("dxp-sidebar-menu-group")}preventDefaultAction(s,e){e.indexOf(s.key||s.keyCode)>-1&&s.preventDefault()}setAndCollapse(s){const e=this.getAllMenuGroupElements();for(const t of Object.keys(e))e[t].viewPopup=s,this.showExpanded=s,e[t].collapse()}render(){t.log.debug(this.element.tagName,"render()","in dxp-sidebar-menu render() : DEVELOPMENT");const s=[a("link",{rel:"stylesheet",href:""}),[this.theme&&a("link",{rel:"stylesheet",href:""})],[this.theme&&a("link",{rel:"stylesheet",href:`${t.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-sidebar-menu.min.css`})]];return a("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},s,a("nav",{class:`${"footer"===this.expandCollapseIconPosition?"column-reverse":""}`,role:"navigation"},!this.expandOnHover&&this.showExpandCollapseIcon&&a("div",{class:"expand-collapse-icon"},a("a",{class:"collapse-nav"},a("span",{tabindex:"0",class:"collapse-icon tooltip-on-hover",onClick:async()=>{await this.collapseExpandSidebar()}},a("span",{class:"tooltip"},a("span",{class:"caret-icon"}),a("div",{class:"sub-menu-wrapper"},a("span",{class:"dxp-flex icon-heading"},t.i18n.t(this.showExpanded?"SidebarMenu:expandTxt":"SidebarMenu:collapseTxt"))))))),a("div",{class:"menu-wrapper"},a("header",{class:"header-order-one"},a("slot",{name:"header"})),a("div",{class:"sidebar",onMouseEnter:()=>this.expandOnHover&&this.expand(),onMouseLeave:()=>this.expandOnHover&&this.collapse()},a("div",{class:"nav nav-sidebar",ref:s=>this.menuContainer=s},a("slot",null))))))}get element(){return i(this)}static get watchers(){return{menuItems:["menuChangeHandler"]}}static get style(){return"div.dxp.dxp-sidebar-menu{height:100%;position:-webkit-sticky;position:sticky;z-index:99}div.dxp.dxp-sidebar-menu .column-reverse{display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse}div.dxp.dxp-sidebar-menu nav{position:-webkit-sticky;position:sticky;display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column}div.dxp.dxp-sidebar-menu nav .menu-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}div.dxp.dxp-sidebar-menu nav .header-order-one{-ms-flex-order:1;order:1}div.dxp.dxp-sidebar-menu nav .default-header-order{-ms-flex-order:0;order:0}div.dxp.dxp-sidebar-menu nav .tooltip{display:none;left:100%;position:absolute;display:inline-block;padding-left:1rem;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;opacity:0}div.dxp.dxp-sidebar-menu nav .tooltip .caret-icon{position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);padding-left:.7rem}div.dxp.dxp-sidebar-menu nav .tooltip .sub-menu-wrapper{padding:.3rem .5rem;display:inline-block;min-width:4rem}div.dxp.dxp-sidebar-menu nav .tooltip .sub-menu-wrapper .icon-heading{-ms-flex-pack:center;justify-content:center}div.dxp.dxp-sidebar-menu header{padding:.7rem}div.dxp.dxp-sidebar-menu .tooltip-on-hover{position:relative}div.dxp.dxp-sidebar-menu .tooltip-on-hover:hover .tooltip{display:-ms-flexbox;display:flex;opacity:1}div.dxp.dxp-sidebar-menu .sidebar{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}div.dxp.dxp-sidebar-menu .nav-sidebar{-ms-flex:1 1 auto;flex:1 1 auto;list-style-type:none;margin:0;padding:0}div.dxp.dxp-sidebar-menu .sidebar-collapsed{min-width:4rem;display:-ms-inline-flexbox;display:inline-flex;-webkit-transition:.24s;transition:.24s}div.dxp.dxp-sidebar-menu .sidebar-expanded{min-width:16.25rem;display:-ms-inline-flexbox;display:inline-flex;-webkit-transition:.24s;transition:.24s;width:260px}div.dxp.dxp-sidebar-menu .collapse-nav{display:-ms-flexbox;display:flex;padding:.32rem 1rem;-ms-flex-direction:row-reverse;flex-direction:row-reverse}div.dxp.dxp-sidebar-menu .collapse-icon{display:inline-block;width:1.5rem;height:1.5rem;border-radius:.18rem}"}};export{r as dxp_sidebar_menu};
import{r as s,c as t,d as i,h as e,g as a}from"./p-8188e849.js";import{B as h}from"./p-16d6f0ca.js";const n=class{constructor(i){s(this,i),this.appMenuItemsList=[],this.hasActionItems=!1,this.hasAppMenu=!1,this.hasSearchBox=!1,this.appMenuItemClick=t(this,"appMenuItemClick",7)}componentWillLoad(){this.base=new h(this,i)}componentDidLoad(){this.activateLink()}handleKeyUp(s){const t=s.target?s.target.activeElement.parentElement:s.target,i=s.which||s.keyCode,e=t.nextElementSibling,a=t.previousElementSibling;37===i?null!==a&&a.children[0].focus():39===i&&null!==e&&e.children[0].focus()}routingHandler(s){this.base.routingEventListener(s)}activateLink(s){if(!this.hasAppMenu)return!1;const t=Array.from(this.element.querySelectorAll(".action-menu-item"));if(s)this.isMenuItemActive=parseInt(s.getAttribute("link-id")),t.forEach(s=>s.classList.remove("active"));else if(this.appMenuItemsList&&this.appMenuItemsList.length>0)return this.appMenuItemsList.filter((s,t)=>s.active?this.isMenuItemActive=t:s.active);this.isMenuItemActive>=0&&t[this.isMenuItemActive].classList.add("active")}selectedLink(s){this.isAppMenuVisible=!1,this.activateLink(s.currentTarget),this.appMenuItemClick.emit({element:s.currentTarget}),i.log.info(this.element.tagName,"selectedLink()","Clicked app menu item: ",s.currentTarget.href.toLowerCase().trim())}showResponsiveAppMenu(){this.isAppMenuVisible=!this.isAppMenuVisible}render(){i.log.debug(this.element.tagName,"render()","in dxp-page-header render() : DEVELOPMENT");const s=[e("link",{rel:"stylesheet",href:""}),[this.theme&&e("link",{rel:"stylesheet",href:""})],[this.theme&&e("link",{rel:"stylesheet",href:`${i.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-page-header.min.css`})]];return e("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},s,e("div",{class:"dxp-row page-header-details"},e("div",{class:`page-title ${this.hasActionItems&&this.hasSearchBox?"dxp-col-8":"dxp-col-9"}`},e("h1",{class:"dxp-text-truncate",title:this.pageTitle,innerHTML:this.pageTitle})),this.hasSearchBox||this.hasActionItems?e("div",{class:`action-panel ${this.hasActionItems&&this.hasSearchBox?"dxp-col-4":"dxp-col-3"}`},this.hasSearchBox&&e("div",{role:"application",class:"dxp-inline-block search-box"},e("slot",{name:"searchBox"})),this.hasActionItems&&e("div",{role:"application",class:"dxp-inline-block action-items"},e("slot",{name:"actionItems"}))):""),this.hasAppMenu?e("div",{class:"dxp-row app-menu"},e("div",{class:"dxp-col-12"},this.appMenuItemsList&&this.appMenuItemsList.map((s,t)=>t===this.isMenuItemActive&&e("button",{class:"active-item dxp-hidden-md-up","aria-expanded":"false","aria-label":s.text,onClick:()=>this.showResponsiveAppMenu()},e("span",{innerHTML:s.text}),e("i",{class:"icon-sprite arrow-down-xs-o"}))),e("ul",{class:`${this.isAppMenuVisible?"dxp-block":""}`},this.appMenuItemsList&&this.appMenuItemsList.map((s,t)=>e("li",{class:t===this.isMenuItemActive?"dxp-hidden-sm-down":""},e("a",{"link-id":t,href:s.href,target:s.openInNewTab?"_blank":"_self",class:`action-menu-item ${t===this.isMenuItemActive?"active":""}`,onClick:s=>this.selectedLink(s),title:s.text,innerHTML:s.text})))),e("slot",null))):"")}get element(){return a(this)}static get style(){return"div.dxp.dxp-page-header .page-header-details{height:4rem}div.dxp.dxp-page-header .page-header-details .page-title h1{vertical-align:middle;margin:0;padding-top:1.188rem}div.dxp.dxp-page-header .page-header-details .action-panel{text-align:left}\@media (min-width:768px){div.dxp.dxp-page-header .page-header-details .action-panel{text-align:right}}div.dxp.dxp-page-header .page-header-details .action-panel .action-items{float:right}\@media (min-width:768px){div.dxp.dxp-page-header .page-header-details .action-panel .action-items{float:none}}\@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){div.dxp.dxp-page-header .page-header-details{height:4rem}div.dxp.dxp-page-header .page-header-details .page-title h1{padding-top:1.438rem}}div.dxp.dxp-page-header .app-menu .active-item{cursor:pointer;background:transparent;border:none;margin:.625rem 0;border-radius:0;position:relative}div.dxp.dxp-page-header .app-menu .active-item i{vertical-align:middle;margin-left:.5rem}div.dxp.dxp-page-header .app-menu ul{margin:0;display:none;margin-bottom:15px}div.dxp.dxp-page-header .app-menu ul li{display:block;padding:.3125rem 0}div.dxp.dxp-page-header .app-menu ul li a{border-bottom:1px solid transparent}\@media (min-width:768px){div.dxp.dxp-page-header .app-menu ul{display:block;margin:0}div.dxp.dxp-page-header .app-menu ul li{padding:0;display:inline-block}div.dxp.dxp-page-header .app-menu ul li+li{margin-left:2rem}div.dxp.dxp-page-header .app-menu ul li a{display:inline-block;padding:.4375rem 0 .375rem;border-bottom:3px solid transparent}}div.dxp.dxp-page-header[dir=rtl] .action-panel{text-align:right}\@media (min-width:768px){div.dxp.dxp-page-header[dir=rtl] .action-panel{text-align:left}}div.dxp.dxp-page-header[dir=rtl] .action-panel .action-items{float:left}\@media (min-width:768px){div.dxp.dxp-page-header[dir=rtl] .action-panel .action-items{float:none}}div.dxp.dxp-page-header[dir=rtl] .app-menu .active-item i{margin-left:0;margin-right:.5rem}\@media (min-width:768px){div.dxp.dxp-page-header[dir=rtl] .app-menu ul li+li{margin-left:0;margin-right:2rem}}"}};export{n as dxp_page_header};
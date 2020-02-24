import{r as t,d as e,h as i,g as s}from"./p-8188e849.js";import{B as l}from"./p-16d6f0ca.js";import{m as r}from"./p-f94dfad3.js";const c=class{constructor(e){t(this,e),this.childElementCount=0,this.apiEndpoint="",this.closeWindow="",this.filterItemsJson=[],this.filterJson=[],this.heading="",this.isHeaderRequired=!0,this.isSubCategory=""}async componentWillLoad(){this.base=new l(this,e),this.base.i18Init(e,"FacetedFilter",r),this.filterItemsJson=this.apiEndpoint?await e.api(this.apiEndpoint):this.filterJson,this.createFilterItemsObject()}componentDidLoad(){this.heading&&(this.base.shadowRootQuerySelector(this.element,".dxp-text-eyebrow").innerHTML=`${this.heading}&lrm;`);const t=this.base.shadowRootQuerySelector(this.element,"dxp-faceted-filter-item",!0)&&this.base.shadowRootQuerySelector(this.element,"dxp-faceted-filter-item",!0).length,e=this.base.shadowRootQuerySelector(this.element,"dxp-faceted-filter-item",!!t);this.base.shadowRootQuerySelector(e[e.length-1],".filter-label").classList.add("filter-bottom"),e&&e.length>0&&(this.childElementCount=e.length)}expandCollapse(t){const e=this.getElementsByClass(".filter-label"),i=Array.prototype.slice.call(e);let s,l,r;const c=t.keyCode;if(l=t.target?t.target.activeElement:t.target,[32,38,40].indexOf(t.keyCode)>-1&&t.preventDefault(),9===c&&l.classList.remove("no-outline"),s=this.getElementsByClass(".filter-content"),r=this.getElementsByClass(".filter-label"),l.classList.contains("expand-all")&&(32===c||13===c))for(let a=0;a<r.length;a++)r[a].classList.add("active"),s[a].classList.remove("dxp-none"),s[a].style.maxHeight=`${s[a].scrollHeight}${s[a].offsetHeight}px`;if(l.classList.contains("collapse-all")&&(32===c||13===c))for(let a=0;a<i.length;a++)i[a].classList.remove("active"),s[a]&&(s[a].removeAttribute("style"),r[a].classList.remove("active"),s[a].classList.add("dxp-none"))}routingHandler(t){this.base.routingEventListener(t)}createCategoryMarkup(t,e){let i="";return Object.keys(t).forEach(s=>{"type"===s?this.filterType=t[s]:e?i+=this.createNestedFilter(s,t[s],this.filterType).outerHTML:"checkbox"===this.filterType?i+=this.populateCheckboxFilter(t[s]):"select"===this.filterType&&(i+=this.populateSelectFilter(t[s]).outerHTML)}),i}createFilterItemsObject(){this.filterItems=[];let t="";this.filterItemsJson.map(e=>{Object.keys(e).forEach(i=>{if(t="",e.hasOwnProperty("type")?"type"!==i&&(t=this.createCategoryMarkup(e,!1)):t=this.createSubCategoryMarkup(e),"type"!==i){const e={title:i.toUpperCase(),description:t,isSubCategory:"false"};this.filterItems.push(e)}})})}createNestedFilter(t,e,i){let s;return(s=document.createElement("dxp-faceted-filter-item")).setAttribute("item-title",t),s.setAttribute("is-sub-category","true"),"checkbox"===i?s.setAttribute("item-description",this.populateCheckboxFilter(e)):"select"===i&&s.setAttribute("item-description",this.populateSelectFilter(e).outerHTML),s}createSubCategoryMarkup(t){let e="";return Object.keys(t).forEach(i=>{t[i].map(t=>{e+=this.createCategoryMarkup(t,!0)})}),e}getElementsByClass(t){const e=new Array,i=this.base.shadowRootQuerySelector(this.element,"slot");if(i)i.assignedNodes().filter(i=>{if("#text"!==i.nodeName){const s=i.QuerySelector(this.element,t);e.push(s)}});else{const i=this.base.shadowRootQuerySelector(this.element,"dxp-faceted-filter-item");if(i&&i.length>0)for(const s of i)e.push(s.QuerySelector(this.element,t))}return e}populateCheckboxFilter(t){let e="";return t&&t.length>0&&t.map(t=>{let i;(i=document.createElement("dxp-checkbox")).setAttribute("name",t),i.setAttribute("value",t),e+=i.outerHTML,e+="<br>"}),e}populateSelectFilter(t){let e;return e=document.createElement("select"),t.map(t=>{const i=document.createElement("option");i.setAttribute("value",t);const s=document.createTextNode(t);i.appendChild(s),e.appendChild(i)}),e}render(){e.log.debug("in dxp-faceted-filter render() : DEVELOPMENT");const t=[i("link",{rel:"stylesheet",href:""}),[this.theme&&i("link",{rel:"stylesheet",href:""})],[this.theme&&i("link",{rel:"stylesheet",href:`${e.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-faceted-filter.min.css`})]];return i("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},i("div",{class:"dxp-faceted-filter-container"},t,i("div",{class:"toggle"},i("div",{class:"dxp-row"},this.isHeaderRequired&&i("div",{class:"dxp-col-12 dxp-faceted-filter-header"},i("p",null,i("span",{class:"dxp-text-eyebrow dxp-col-sm-6 dxp-col-12 dxp-filter-align"}),i("a",{href:"javaScript:void(0)"},i("span",{class:"dxp-col-sm-6 dxp-col-12 dxp-text-right text-margin filter-clear dxp-closewindow-align"},this.closeWindow,i("span",{class:"dxp-icon dxp-icon-x-small dxp-icon-close dxp-close-text"})))))),this.filterItems?this.filterItems.map(t=>i("dxp-faceted-filter-item",{"item-title":t.title,"item-subtitle":t.subtitle,"item-description":t.description,"show-expanded":t.showExpanded,"is-sub-category":t.isSubCategory})):i("div",{ref:t=>this.filterItemContainer=t},i("slot",null)))))}get element(){return s(this)}static get style(){return"div.dxp.dxp-faceted-filter .dxp-faceted-filter-item{display:block;width:100%}div.dxp.dxp-faceted-filter .dxp-faceted-filter-container{width:19%}div.dxp.dxp-faceted-filter .dxp-faceted-filter-header{position:relative;top:10px}div.dxp.dxp-faceted-filter .text-margin{margin-top:5px}div.dxp.dxp-faceted-filter .dxp-close-filter{padding-bottom:5px}div.dxp.dxp-faceted-filter .dxp-close-text{padding-left:10px}div.dxp.dxp-faceted-filter .dxp-filter-align{padding-left:0;font-size:1.05rem}div.dxp.dxp-faceted-filter .toggle .title-wrapper{padding-bottom:1.5rem;margin-bottom:2rem;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}div.dxp.dxp-faceted-filter .toggle .title-wrapper>span{padding:0}div.dxp.dxp-faceted-filter .toggle .title-wrapper>span:last-child{text-align:right}div.dxp.dxp-faceted-filter .toggle .title-wrapper>span:only-child{text-align:left}div.dxp.dxp-faceted-filter .toggle .expand-all{cursor:pointer}div.dxp.dxp-faceted-filter .toggle .collapse-all{cursor:pointer;margin-left:.5625rem}div.dxp.dxp-faceted-filter .pipe-separator:after{content:\"|\";padding-left:.75rem}\@media (max-width:1024px){div.dxp.dxp-faceted-filter .dxp-faceted-filter-container{width:25%}}\@media (max-width:575px){div.dxp.dxp-faceted-filter .dxp-faceted-filter-container{width:100%}div.dxp.dxp-faceted-filter .dxp-filter-align{position:relative;top:22px}div.dxp.dxp-faceted-filter .dxp-closewindow-align{position:relative;bottom:15px}div.dxp.dxp-faceted-filter .toggle .title-wrapper{border:none;margin-bottom:1rem}div.dxp.dxp-faceted-filter .toggle .title-wrapper>span:first-child{padding-bottom:2rem}}div.dxp.dxp-faceted-filter[dir=rtl] .toggle .title-wrapper>span:last-child{text-align:left}div.dxp.dxp-faceted-filter[dir=rtl] .toggle .title-wrapper>span:only-child{text-align:right}"}};export{c as dxp_faceted_filter};
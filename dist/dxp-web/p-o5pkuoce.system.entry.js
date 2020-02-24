var __awaiter=this&&this.__awaiter||function(e,t,r,i){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function s(e){try{l(i.next(e))}catch(t){a(t)}}function o(e){try{l(i["throw"](e))}catch(t){a(t)}}function l(e){e.done?r(e.value):n(e.value).then(s,o)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,n,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,n&&(a=s[0]&2?n["return"]:s[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;if(n=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;n=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1];a=s;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(s);break}if(a[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];n=0}finally{i=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js","./p-96104440.system.js"],(function(e){"use strict";var t,r,i,n,a,s;return{setters:[function(e){t=e.r;r=e.d;i=e.h;n=e.g},function(e){a=e.B},function(e){s=e.m}],execute:function(){var o="dxp-breadcrumb";var l="dxp-breadcrumb-item";var u="dxp-hidden-md-down";var c=e("dxp_breadcrumb",function(){function e(e){t(this,e);this.hideCurrentPage=false;this.navStartLevel=0;this.rootSitePath="";this.showHiddenNavItems=false}e.prototype.breadcrumbItemsChange=function(){this.dataLookup=this.breadcrumbItemsData;this.currentRouteUrl=this.getUrl();this.buildBreadcrumbItems()};e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:this.base=new a(this,r);this.base.i18Init(r,"Breadcrumb",s);if(document.querySelector(o)){this.childCount=document.querySelector(o).children.length}if(!this.breadcrumbItemsData)return[3,1];this.dataLookup=this.breadcrumbItemsData;this.currentRouteUrl=this.getUrl();this.buildBreadcrumbItems();return[3,3];case 1:if(!this.apiUrl)return[3,3];e=this;return[4,this.getData()];case 2:e.dataLookup=t.sent();this.dataLookup=this.dataLookup.pagesData;this.currentRouteUrl=this.getUrl();this.buildBreadcrumbItems();t.label=3;case 3:return[2]}}))}))};e.prototype.componentDidLoad=function(){this.hideItemsOnMobile();if(!this.breadcrumbItems){var e=this.element.querySelectorAll(l);for(var t=0,r=Object.keys(e);t<r.length;t++){var i=r[t];var n=e[i].querySelector("li");n.style.zIndex=e.length-(Number(i)+1)}e[e.length-1]?e[e.length-1].querySelector("li").classList.add("current-page"):e[e.length-1].querySelector("li").classList.add("current-page")}var a=this.base.shadowRootQuerySelector(this.element,l);if(a){this.base.shadowRootQuerySelector(a,"li").style.paddingLeft="0px"}};e.prototype.handleResizeEvent=function(){var e=window.innerWidth;if(e>767){var t=this.element.querySelector(l).querySelector("li");t.classList.remove(u);var r=this.element.querySelectorAll(".dxp-hidden-md-down");for(var i=0,n=r;i<n.length;i++){var a=n[i];a.classList.remove(u)}var s=this.element.querySelectorAll(l);for(var o=0,c=s;o<c.length;o++){var a=c[o];a.classList.remove(u)}}else if(e<767){this.hideItemsOnMobile()}};e.prototype.onpopstate=function(){if(this.applicationName){this.currentRouteUrl=this.getUrl();this.buildBreadcrumbItems()}};e.prototype.routingHandler=function(e){this.base.routingEventListener(e)};e.prototype.refreshBreadcrumbItems=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.currentRouteUrl=this.getUrl();this.buildBreadcrumbItems();return[2]}))}))};e.prototype.buildBreadcrumbItems=function(){var e=this;this.breadcrumbItems=[];var t=this.getRouteArray();var r=this.dataLookup;var i;t.forEach((function(t,n){if(r&&r.length>0){i=n!==0?i+"/"+t:t;r=e.searchAndAddItem(t.toLowerCase(),i,r,n)}}))};e.prototype.getData=function(){try{return r.api(this.apiUrl)}catch(e){r.log.error(this.element.tagName,"getData()","fetch failed for",e)}};e.prototype.getRouteArray=function(){var e=[];if(this.currentRouteUrl){var t=this.currentRouteUrl.indexOf("#");e=t!==-1?this.currentRouteUrl.substr(t+2).split("/"):this.currentRouteUrl.substr(1).split("/")}return e};e.prototype.getUrl=function(){var e;if(location.hash.length>0){e=location.hash}else{if(location.pathname.indexOf(".")!==-1){e=location.pathname.split(".")[0]}else{e=location.pathname}}return e.replace(this.rootSitePath,"")};e.prototype.hideItemsOnMobile=function(){var e=window.innerWidth;if(e<767){var t=this.element.querySelectorAll(l);var r=this.element.querySelectorAll(l);var i=this.element.querySelector(l).querySelector("li");i.classList.add(u);for(var n=0;n<t.length-2;n++){t[n].classList.add(u)}if(r){for(var n=0;n<r.length-2;n++){r[n].querySelector(".dxp-breadcrumb-item").classList.add(u)}}}};e.prototype.searchAndAddItem=function(e,t,r,i){var n=this;var a=[];var s=e.indexOf("?")>=0?e.substring(0,e.indexOf("?")):e;r.find((function(e){if(e.linkId.toLowerCase()===s){var r={link:e.link,linkId:e.linkId,routePath:t,title:e.title,showNavItem:n.showHiddenNavItems?true:!JSON.parse(e.hideInNav)};if(i>=n.navStartLevel){n.breadcrumbItems.push(r)}if(e.child){a=e.child}return a}}));return a};e.prototype.render=function(){var e=this;r.log.debug(this.element.tagName,"render()","in dxp-breadcrumb render() : "+"DEVELOPMENT");var t=[i("link",{rel:"stylesheet",href:r.config.get("DXP_STYLE_BASE_URL")+"/dxp.min.css"}),[this.theme&&i("link",{rel:"stylesheet",href:r.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/"+this.theme+".min.css"})],[this.theme&&i("link",{rel:"stylesheet",href:r.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-breadcrumb.min.css"})]];return i("div",{class:this.base.componentClass()+" breadcrumb-nav",dir:this.dir,"data-theme":this.theme},t,i("nav",{"aria-label":r.i18n.t("Breadcrumb:label")},i("ul",{class:"dxp-breadcrumb-list sc-dxp-breadcrumb"},this.breadcrumbItems&&i("dxp-breadcrumb-item",{"index-val":this.breadcrumbItems.length,link:location.origin,"accessibility-text":"Home","link-title":"Home"}),this.breadcrumbItems?this.breadcrumbItems.map((function(t,r){if(t.showNavItem){return i("dxp-breadcrumb-item",{"index-val":e.breadcrumbItems.length-(r+1),"is-current-page":r===e.breadcrumbItems.length-1?true:false,link:t.link,"accessibility-text":t.title,"link-title":t.title,"hide-current-page":e.hideCurrentPage})}})):[this.childCount&&i("dxp-breadcrumb-item",{link:"#","accessibility-text":""+r.i18n.t("Breadcrumb:Home"),"link-title":""+r.i18n.t("Breadcrumb:Home")}),i("slot",null)])))};Object.defineProperty(e.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{breadcrumbItemsData:["breadcrumbItemsChange"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"div.dxp.dxp-breadcrumb{padding:30px 0 32px 0}div.dxp.dxp-breadcrumb.breadcrumb-nav .dxp-breadcrumb-list{display:-ms-flexbox;display:flex;margin:0;-ms-flex-align:center;align-items:center}div.dxp.dxp-breadcrumb.breadcrumb-nav dxp-breadcrumb-item:last-child li:hover{background:none}\@media (-ms-high-contrast:none){div.dxp.dxp-breadcrumb .dxp-breadcrumb-item.sc-dxp-breadcrumb a,div.dxp.dxp-breadcrumb .dxp-breadcrumb-item span,div.dxp.dxp-breadcrumb ::-ms-backdrop{padding-top:18px}}\@media screen and (max-width:767px){div.dxp.dxp-breadcrumb .dxp-breadcrumb-item div li{padding-left:10px}div.dxp.dxp-breadcrumb .dxp-breadcrumb-item div li a{position:relative}div.dxp.dxp-breadcrumb .dxp-breadcrumb-item div li a:after,div.dxp.dxp-breadcrumb .dxp-breadcrumb-item div li a:before{content:\"\";display:block;position:relative;width:10px;height:1px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:-3px}div.dxp.dxp-breadcrumb .dxp-breadcrumb-item div li a:after{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:3px}div.dxp.dxp-breadcrumb .dxp-breadcrumb-item div li a span{display:none}div.dxp.dxp-breadcrumb .dxp-breadcrumb-item.sc-dxp-breadcrumb a,div.dxp.dxp-breadcrumb .dxp-breadcrumb-item span,div.dxp.dxp-breadcrumb ::-ms-backdrop{padding-top:6px}}"},enumerable:true,configurable:true});return e}())}}}));
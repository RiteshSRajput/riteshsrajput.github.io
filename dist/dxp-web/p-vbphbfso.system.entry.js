var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function a(e){try{o(i.next(e))}catch(t){s(t)}}function l(e){try{o(i["throw"](e))}catch(t){s(t)}}function o(e){e.done?n(e.value):r(e.value).then(a,l)}o((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(e){return function(t){return o([e,t])}}function o(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(s=a[0]&2?r["return"]:a[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,a[1])).done)return s;if(r=0,s)a=[a[0]&2,s.value];switch(a[0]){case 0:case 1:s=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){n.label=a[1];break}if(a[0]===6&&n.label<s[1]){n.label=s[1];s=a;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(a);break}if(s[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(l){a=[6,l];r=0}finally{i=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js","./p-6ecd43c5.system.js"],(function(e){"use strict";var t,n,i,r,s,a,l;return{setters:[function(e){t=e.r;n=e.d;i=e.h;r=e.g},function(e){s=e.B},function(e){a=e.m;l=e.C}],execute:function(){var o="dxp-nav-group";var c='[aria-expanded="true"]';var u=".dxp-block";var m="dxp-nav-item";var v="dxp-nav-sub-item";var p="active-link";var f="max-height-none";var h="aria-expanded";var d=".nav-level-one-link";var y=e("dxp_navigation",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i,r;return __generator(this,(function(o){switch(o.label){case 0:this.base=new s(this,n);this.base.i18Init(n,"Navigation",a);e=this.element?this.element:this.element;t="";n.util.appendLinkElement(e,t);t="";n.util.appendLinkElement(e,t);t=n.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-navigation.min.css";n.util.appendLinkElement(e,t);this.utility=new l;if(!this.apiUrl)return[3,4];o.label=1;case 1:o.trys.push([1,3,,4]);i=this;return[4,n.api(this.apiUrl)];case 2:i.navData=o.sent();return[3,4];case 3:r=o.sent();n.log.error(this.element.tagName,"componentWillLoad()","fetch failed for "+this.apiUrl,r);return[3,4];case 4:return[2]}}))}))};e.prototype.componentDidLoad=function(){var e=this.element.querySelectorAll(o).length?this.element.querySelectorAll(o):this.element.querySelectorAll(o);this.utility.preventExtraMenuItems(e,5);this.defaultActions()};e.prototype.componentDidUpdate=function(){this.defaultActions()};e.prototype.handleClickEvent=function(e){this.base.routingEventListener(e);var t=e.target?e.composedPath()[0]:e.target;var n=this.element.querySelectorAll(".down").length?this.element.querySelectorAll(".down"):this.element.querySelectorAll(".down");var i=t?t.closest(".in"):undefined;var r=t?t.nextElementSibling:undefined;this.menuItemsHandler(t,r,n,i)};e.prototype.handleDocumentClick=function(e){var t=e.target.closest("dxp-navigation");var n=this.element.querySelector(c)||this.element.querySelector(c);var i=this.element.querySelector(u)||this.element.querySelector(u);this.collapseExpandedNav(t,n,i)};e.prototype.handleKeydownEvents=function(e){var t=[32,37,38,39,40];var n=e.keyCode;var i=e.target?e.target.activeElement:e.target;var r=this.element.querySelector(u);var s;var a;var l;var o;var c;var p;var f;var h;var d;var y;if(i){s=i.classList.contains("nav-level-one-link");a=i.parentElement.querySelector(".mega-menu-container");l=i.classList.contains("mega-menu-link");o=i.parentElement.querySelector(".mega-sub-menu");c=i.classList.contains("mega-sub-menu-link");p=i.closest(m)?i.closest(m).nextElementSibling:false;f=i.closest(m)?i.closest(m).previousElementSibling:false;h=i.closest(v)?i.closest(v).nextElementSibling:false;d=i.closest(v)?i.closest(v).previousElementSibling:false}this.preventDefaultAction(e,t);this.hideNavItem(i,s,r,n);if(a){y=a.classList.contains("dxp-block")}this.showHideMenuWithKeys(i,n,a,y);this.selectNestedMenuItem(a,n,y);this.navigateInExpandedMenu(l,n,o,p);this.navigateSubItems(c,h,n,d);this.selectParentNavItem(i,d,c,n);this.selectPrevNavItem(l,f,n);this.selectNextNavItem(c,h,p,n)};e.prototype.handleUpkeyEvents=function(e){var t=e.target?e.target.activeElement:e.target;var n=e.keyCode;var i=e.target?this.element.querySelector(u):this.element.querySelector(u);var r=e.target?this.element.querySelector(c):this.element.querySelector(c);var s=e.target?this.element.querySelector(u):this.element.querySelector(u);var a;if(t){a=t.classList.contains("nav-level-one-link")}this.hideMenuItemsOnKeyPress(t,n,a,i,s,r)};e.prototype.onWindowResize=function(){var e=document.querySelector(".nav-overlay");var t=window.innerWidth;if(e){t>=992?e.style.display="none":e.style.display="block"}};e.prototype.collapseAllMenus=function(e){for(var t=0,n=Object.keys(e);t<n.length;t++){var i=n[t];clearTimeout(this.clearSetTimeout);e[i].classList.remove("down");e[i].previousElementSibling.classList.remove(p);e[i].nextElementSibling.classList.remove("in");e[i].nextElementSibling.classList.remove(f)}};e.prototype.collapseExpandedNav=function(e,t,n){if(!e&&n){t.setAttribute(h,"false");n.classList.remove("dxp-block")}};e.prototype.defaultActions=function(){var e=this.element.querySelectorAll(d).length?this.element.querySelectorAll(d):this.element.querySelectorAll(d);this.utility.setPosNSize(e)};e.prototype.focusElement=function(e){e.focus()};e.prototype.hideMenuItemsOnKeyPress=function(e,t,n,i,r,s){if(n&&i&&t===9){e.setAttribute(h,"false");i.classList.remove("dxp-block")}if(r&&t===27){this.focusElement(s);s.setAttribute(h,"false");r.classList.remove("dxp-block")}};e.prototype.hideNav=function(e,t,n){var i=document.querySelector(".nav-overlay");e.classList.remove("nav-height");e.classList.remove("overflow-y-auto");t.classList.remove("nav-close");t.classList.add("hamburger-btn");this.collapseAllMenus(n);if(i){setTimeout((function(){i.remove()}),200)}};e.prototype.hideNavItem=function(e,t,n,i){if(t&&n&&i===9){e.setAttribute(h,"false");n.classList.remove("dxp-block")}};e.prototype.hideSubMenu=function(e){clearTimeout(this.clearSetTimeout);e.previousElementSibling.classList.remove(p);e.classList.remove("down");e.nextElementSibling.classList.remove("in");e.nextElementSibling.classList.remove(f)};e.prototype.menuItemsHandler=function(e,t,n,i){var r=i?i.querySelector(".down"):undefined;if(e&&e.classList.contains("caret")){if(!e.classList.contains("down")){if(n&&!i){this.collapseAllMenus(n)}if(i&&r){this.hideSubMenu(r)}e.previousElementSibling.classList.add(p);e.classList.add("down");t.classList.add("in");this.clearSetTimeout=setTimeout((function(){t.classList.add(f)}),600)}else if(i&&r){this.hideSubMenu(r)}else{this.collapseAllMenus(n)}}};e.prototype.navigateInExpandedMenu=function(e,t,n,i){if(e&&(t===39||t===40)){if(n){var r=n.querySelectorAll("a");this.focusElement(r[1])}if(!n&&i){i.querySelector(".mega-menu-content a").focus()}}};e.prototype.navigateSubItems=function(e,t,n,i){if(e&&t&&(n===39||n===40)){t.querySelector("a").focus()}if(e&&i&&(n===37||n===38)){i.querySelector("a").focus()}};e.prototype.preventDefaultAction=function(e,t){if(t.indexOf(e.keyCode)>-1){e.preventDefault()}};e.prototype.selectNestedMenuItem=function(e,t,n){if(e&&(t===39||t===40)&&n){var i=e.querySelector(".mega-menu-content");var r=i.querySelector("a");this.focusElement(r)}};e.prototype.selectNextNavItem=function(e,t,n,i){if(e&&!t&&n&&(i===39||i===40)){n.querySelector(".mega-menu-content a").focus()}};e.prototype.selectParentNavItem=function(e,t,n,i){if(n&&!t&&(i===37||i===38)){var r=e.closest(".mega-menu-content").querySelector(".mega-menu-link");this.focusElement(r)}};e.prototype.selectPrevNavItem=function(e,t,n){if(e&&t&&(n===37||n===38)){var i=t.querySelectorAll(".mega-sub-menu-link");if(i.length){this.focusElement(i[i.length-1])}else{this.focusElement(t.querySelector(".mega-menu-link"))}}};e.prototype.showHideMenuWithKeys=function(e,t,n,i){if((t===32||t===39||t===40)&&n){if(t!==39&&t!==40&&i){e.setAttribute(h,"false");n.classList.remove("dxp-block")}else{e.setAttribute(h,"true");n.classList.add("dxp-block")}}};e.prototype.render=function(){n.log.debug("in dxp-navigation render() : "+"DEVELOPMENT");return i("nav",{dir:this.dir,"data-theme":this.theme,class:this.base.componentClass()+" nav-primary",role:"navigation"},i("ul",{class:"nav",role:"menu"},this.navData&&this.navData.navigationData?this.navData.navigationData.map((function(e){return i("dxp-nav-group",{"link-title":e["linkTitle"],"navigation-title":e["navigationTitle"],"menu-route-link":e["menuRouteLink"],"accessibility-text":e["accessibilityText"],child:e["child"]})})):i("slot",null)))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".dxp.dxp-navigation{width:100%;display:block;background:none;-ms-flex-align:center;align-items:center}.dxp.dxp-navigation.pos-relative{position:relative}.dxp.dxp-navigation.nav-primary{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-order:1;order:1;margin-right:0;padding:0;width:100%;right:0}.dxp.dxp-navigation a{font-size:14px;letter-spacing:1.57px;line-height:24px;text-decoration:none}.dxp.dxp-navigation a:hover{text-decoration:none}.dxp.dxp-navigation .nav{padding:20px 28px 0 38px;width:100%;height:100%}\@media (min-width:992px){.dxp.dxp-navigation.nav-primary{width:100%;-ms-flex-direction:row;flex-direction:row;margin:0;right:auto;padding:0;-ms-flex-order:0;order:0;height:100%}.dxp.dxp-navigation a{font-size:16px;letter-spacing:0}.dxp.dxp-navigation .nav{background:transparent;margin:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:auto}}\@media (max-width:991px){.dxp.dxp-navigation.nav-primary{overflow-y:hidden;max-height:0;-webkit-transition:max-height .35s ease;transition:max-height .35s ease}.dxp.dxp-navigation.nav-height{max-height:100vh;-webkit-transition:max-height .6s ease;transition:max-height .6s ease}.dxp.dxp-navigation.overflow-y-auto{overflow-y:auto}.dxp.dxp-navigation .nav{margin-top:0;padding-bottom:40px}}.dxp.dxp-navigation[dir=rtl].nav-primary{text-align:right;-ms-flex-align:start;align-items:flex-start}\@media (min-width:992px){.dxp.dxp-navigation[dir=rtl].nav-primary{margin-left:auto}.dxp.dxp-navigation[dir=rtl] .nav{padding:0}}"},enumerable:true,configurable:true});return e}())}}}));
System.register([],(function(e){"use strict";return{execute:function(){var t="aria-expanded";var r=".dxp-icon-close";var s=function(){function e(){}e.prototype.openOverlay=function(e,s){var a=e.parentNode.parentElement.parentElement;var n=e.querySelector(".sub-nav-child-container");var i=a.querySelector(".overlay")?a.querySelector(".overlay"):e.parentElement.parentElement.querySelector(".overlay");var o=a.querySelector(".overlay-container")?a.querySelector(".overlay-bg-img"):e.parentElement.parentElement.querySelector(".overlay-bg-img");var l=a.querySelector(".overlay")?a.querySelector(r):e.parentElement.parentElement.querySelector(r);if(e.classList.contains("in")){e.classList.remove("in");e.querySelector(".nav-item").removeAttribute(t);if(i){i.classList.remove("expanded");l.classList.add("dxp-none")}n.classList.remove("expanded");n.classList.remove("show")}else{var c=a.querySelector(".in");if(c){var u=c.querySelector(".nav-item");u.removeAttribute(t);u.nextElementSibling.classList.remove("expanded");u.nextElementSibling.classList.remove("show");c.classList.remove("in")}e.classList.add("in");e.querySelector(".nav-item").setAttribute(t,"true");if(i){if(s){i.classList.remove("overlay-bg-color");o.style.backgroundImage="url("+s+")"}else{o.style.backgroundImage="none";i.classList.add("overlay-bg-color")}i.classList.add("expanded");l.classList.remove("dxp-none")}n.classList.add("show");n.classList.add("expanded")}};e.prototype.closeOverlay=function(e,s){var a=this.getElement(e,".sub-nav-child-container");var n=this.getElement(s,".overlay");e.classList.remove("in");e.querySelector(".nav-item").removeAttribute(t);e.querySelector(".nav-item").focus();a.classList.remove("expanded");a.classList.remove("show");n.classList.remove("expanded");var i=s?s.querySelector(r):s.querySelector(r);i.classList.add("dxp-none")};e.prototype.getElement=function(e,t){return e.querySelector(t)?e.querySelector(t):e.querySelector(t)};e.prototype.setPosNSize=function(e){for(var t=0,r=Object.keys(e);t<r.length;t++){var s=r[t];if(e[s]!==null){if(e[s].classList.contains("nav-item-li")){e[s].querySelector(".nav-item").setAttribute("aria-posinset",1+Number(s));e[s].querySelector(".nav-item").setAttribute("aria-setsize",e.length);var a=e[s].querySelectorAll(".sub-nav-item");var n=e[s].querySelectorAll(".menu-description");for(var i=0,o=Object.keys(a);i<o.length;i++){var l=o[i];if(n[l]){n[l].setAttribute("id","menu-description-"+(1+Number(s))+"-"+(1+Number(l)))}a[l].setAttribute("aria-describedby","menu-description-"+(1+Number(s))+"-"+(1+Number(l)));a[l].setAttribute("aria-posinset",1+Number(l));a[l].setAttribute("aria-setsize",a.length)}}}}};return e}();e("C",s)}}}));
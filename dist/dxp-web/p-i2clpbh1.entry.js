import{r as t,d as s,h as i,g as e}from"./p-8188e849.js";import{B as a}from"./p-16d6f0ca.js";const n={en:{slide:"of slide",prev:"previous slide",next:"next slide"},"en-US":{slide:"of slide",prev:"previous slide",next:"next slide"}},r="translate3d(0px, 0px, 0px) scale(",o=class{constructor(s){t(this,s),this.carouselState={activeSlide:void 0,activeSlideIndex:void 0,slides:void 0,intervalObj:void 0,navigationReady:!1},this.focusOnDots=!1,this.focusOnNext=!1,this.focusOnPrev=!1,this.pauseDuration=5e3}componentWillLoad(){this.base=new a(this,s),this.base.i18Init(s,"BannerCarousel",n)}componentDidLoad(){this.insertAnimationStyles(),this.activateSlide(0),this.setIndicatorsPosition(),this.maxSlides=this.carouselState.slides&&this.carouselState.slides.length;const t=this.carouselState.activeSlide;this.element&&this.element.querySelector(".carousel-container")&&t&&void 0!==t.querySelector("dxp-banner-small-image")&&this.element.querySelector(".carousel-container").classList.add("card")}keydownEvents(t){13!==t.keyCode&&32!==t.keyCode||(this.focusOnNext?(this.changeSlide("NEXT"),this.setFocus(),this.focusOnDots=!1):this.focusOnPrev&&(this.changeSlide("PREV"),this.setFocus(),this.focusOnDots=!1),this.focusOnDots&&(this.activateSlide(this.indicatorIndex),this.setFocus()),clearInterval(this.carouselState.intervalObj))}onCarouselFocus(){this.autoPlayPause()}onMouseout(){this.autoPlay&&this.startSlideShow()}onMouseover(){this.autoPlayPause()}windowResize(){this.carouselState.activeSlide&&this.setIndicatorsPosition()}activateSlide(t){this.carouselState.slides=this.getCarouselItems(),this.carouselState.activeSlide=this.carouselState.slides[t],this.carouselState.activeSlideIndex=t,this.carouselState.slides.forEach(s=>{s.style.position="relative",s.style.width="100%",s.style.display="inline-block",s.style.verticalAlign="top",s.style.transition="all 0.8s cubic-bezier(0.4, 1.3, 0.65, 1)",this.carouselState.activeSlide.setAttribute("aria-hidden","false"),this.carouselState.slides[t].style.transition="2s",s.setAttribute("id",`index${t}`),s.setAttribute("aria-hidden","true")}),this.carouselState=Object.assign({},this.carouselState),this.animateSlide(t,"NEXT")}animateSlide(t,s){let i=1;if(this.carouselState&&this.carouselState.slides[0]){for(0===t&&(this.carouselState.slides[0].style.marginLeft=0);i<=t;)"NEXT"===s&&(this.carouselState.slides[0].style.marginLeft=`${-100*i}%`),i++;for(;i>t;)"PREV"===s&&(this.carouselState.slides[0].style.marginLeft=`${-100*(i-1)}%`),i--}}applyCalculationsToElements(t,s,i){i=(i=i||i).querySelector("img");const e=setInterval(()=>{if(i&&!0===i.complete){const i=t?t.querySelector("dxp-image").parentElement:t&&t.querySelector("dxp-image").parentElement,a=i&&i.getBoundingClientRect().height,n=t&&t.querySelector(".indicators-placeholder"),r=s&&n.getBoundingClientRect().left-s.querySelector(".carousel-container").getBoundingClientRect().left,o=s&&s.querySelector(".indicators"),h=window.innerWidth>767.9?a-51:a-42,l=s&&s.querySelector(".nav-controls");this.applyLeftValue(o,r),this.applyTopValue(h,o,l,a),this.carouselState=Object.assign(Object.assign({},this.carouselState),{navigationReady:!0}),this.autoPlay&&this.startSlideShow(),clearInterval(e)}},200)}applyDefaultCenter(t){this.carouselState=Object.assign(Object.assign({},this.carouselState),{navigationReady:!0});const s=t&&t.querySelector(".nav-controls");s&&!this.badgeAlignment&&(s.style.top="50%"),this.autoPlay&&this.startSlideShow()}applyLeftValue(t,s){t&&(window.innerWidth<992||!this.badgeAlignment&&window.innerWidth>991.9)&&(t.style.left="",t.classList.add("center")),t&&this.badgeAlignment&&window.innerWidth>991.9&&(t.classList.remove("center"),t.style.left=`${s}px`)}applyTopValue(t,s,i,e){s&&(s.style.top=`${t}px`),i&&(i.style.top=`${e/2-54}px`)}autoPlayPause(){this.autoPlay&&this.pauseAutoplay()}blurNextPrev(t){"NEXT"===t?this.focusOnNext=!1:this.focusOnPrev=!1}calculateIndicatorPosition(){const t=this.element,s=this.carouselState.activeSlide,i=s&&s.querySelector("dxp-banner-benefits-hero")||s&&s.querySelector("dxp-banner-small-image")||s&&s.querySelector("dxp-banner-image-overlay")||s&&s.querySelector("dxp-banner-regular"),e=i&&i?i.querySelector("dxp-image"):i&&i.querySelector("dxp-image");e?this.applyCalculationsToElements(i,t,e):this.applyDefaultCenter(t)}changeSlide(t){let s=this.carouselState.activeSlideIndex;s="NEXT"===t?s+1<this.carouselState.slides.length?s+1:0:s-1<0?this.carouselState.slides.length-1:s-1,clearInterval(this.setWidth),this.endProgressBar(),this.activateSlide(s),this.animateSlide(s,t)}endProgressBar(){let t=100;this.setWidth=setInterval(()=>{const s=this.base&&this.base.shadowRootQuerySelector(this.element,".carousel-current-progress"),i=s&&s.style;i&&(--t<0?clearInterval(this.setWidth):(i.transformOrigin="100% 50%",i.transform=`${r+t/100}, 1)`))},5)}fillProgressBar(){let t=100,s=0;this.setWidth=setInterval(()=>{const i=this.base&&this.base.shadowRootQuerySelector(this.element,".carousel-current-progress"),e=i&&i.style;e&&(s<100?(s++,e.transformOrigin="0 50%",e.transform=`${r+s/100}, 1)`):--t<0?clearInterval(this.setWidth):(e.transformOrigin="100% 50%",e.transform=`${r+t/100}, 1)`))},this.pauseDuration/200)}focusNextPrev(t){"NEXT"===t?(this.focusOnNext=!0,this.focusOnPrev=!1):(this.focusOnPrev=!0,this.focusOnNext=!1)}getArrayFromNodeList(t){return[].slice.call(t)}getCarouselItems(){let t=this.getArrayFromNodeList(this.element.querySelectorAll("dxp-banner"));return t.length>0?t:this.getArrayFromNodeList(this.element.childNodes).filter(t=>t.tagName&&"dxp-banner"===t.tagName.toLowerCase())}insertAnimationStyles(){const t=document.createElement("style");t.setAttribute("type","text/css"),t.appendChild(document.createTextNode("\n    .fade {\n      -webkit-animation-name: fade;\n      -webkit-animation-duration: 1.5s;\n      animation-name: fade;\n      animation-duration: 1.5s;\n    }\n    @-webkit-keyframes fade {\n      from {opacity: .4}\n      to {opacity: 1}\n    }\n    @keyframes fade {\n      from {opacity: .4}\n      to {opacity: 1}\n    }\n    ")),this.element.appendChild(t)}pauseAutoplay(){this.carouselState.intervalObj&&(clearInterval(this.carouselState.intervalObj),this.carouselState.intervalObj=void 0)}renderIndicators(){return i("div",{class:`indicators ${this.badgeAlignment?"":"center"} ${this.carouselState.navigationReady?"":"dxp-none"}`,role:"application"},this.carouselState.slides&&this.carouselState.slides.map((t,e)=>i("span",{class:`dot ${e===this.carouselState.activeSlideIndex?"active":""}`,"aria-describedby":`index${e}`,"aria-controls":`index${e}`,tabindex:"0",role:"button",onClick:()=>this.activateSlide(e),onFocus:()=>this.showSlide(e),"aria-label":`${e+1} ${s.i18n.t("BannerCarousel:slide")} ${this.carouselState.slides.length}`})))}renderProgressBar(){return i("div",{class:`bar-container ${this.indicatorToLeft?"set-to-left":""} ${this.isBenefitsHero?"benefits-indicator":""}`},i("div",{class:"carousel-progress-values"},i("span",{class:"current-value"},`${String(this.carouselState.activeSlideIndex+1).padStart(2,"0")} /`),i("span",{class:"max-value"},` ${String(this.slides?this.slides.length:this.maxSlides).padStart(2,"0")}`)),"dxp-theme-b2b"!==this.theme&&i("div",{class:"carousel-progress-bar"},i("div",{class:"carousel-current-progress"})),i("div",{class:"arrow-container"},i("div",{class:`prev-arrow ${0===this.carouselState.activeSlideIndex?"disable-prev-arrow":""}`,onFocus:()=>this.focusNextPrev("PREV"),onClick:()=>this.changeSlide("PREV"),tabindex:"0"}),i("div",{class:"next-arrow",onFocus:()=>this.focusNextPrev("NEXT"),onClick:()=>this.changeSlide("NEXT"),tabindex:"0"})))}renderThumbnails(){return i("div",{class:"thumbnails",role:"application"},this.carouselState.slides&&this.carouselState.slides.map((t,e)=>i("img",{class:`thumbnail ${e===this.carouselState.activeSlideIndex?"active":""}`,"aria-describedby":`index${e}`,tabindex:"0",onClick:()=>this.activateSlide(e),onFocus:()=>this.showSlide(e),alt:t.alt,src:t.src,"aria-label":`${e+1} ${s.i18n.t("BannerCarousel:slide")} ${this.carouselState.slides.length}`})))}setFocus(){this.base&&this.setFocusElement(this.base.shadowRootQuerySelector(this.element,".carousel-container"))}setFocusElement(t){t.focus()}setIndicatorsPosition(){if(this.carouselState.activeSlide&&this.carouselState.activeSlide.classList.contains("hydrated"))this.calculateIndicatorPosition();else{const t=setInterval(()=>{this.carouselState.activeSlide&&this.carouselState.activeSlide.classList.contains("hydrated")&&(this.calculateIndicatorPosition(),clearInterval(t))},500)}}showSlide(t){this.indicatorIndex=t,this.focusOnDots=!0}startSlideShow(){if(this.carouselState.navigationReady){this.pauseAutoplay();let t=this.carouselState.activeSlideIndex?this.carouselState.activeSlideIndex:0;this.carouselState.intervalObj=setInterval(()=>{this.showProgressbar&&(clearInterval(this.setWidth),this.fillProgressBar()),this.activateSlide(t),t=t+1<this.carouselState.slides.length?t+1:0},this.pauseDuration)}}render(){s.log.debug(this.element.tagName,"render()","in dxp-banner-carousel render() : DEVELOPMENT");const t=[i("link",{rel:"stylesheet",href:""}),[this.theme&&i("link",{rel:"stylesheet",href:""})],[this.theme&&i("link",{rel:"stylesheet",href:`${s.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-banner-carousel.min.css`})],i("style",null,this.indicatorColor&&`\n          .dxp.${this.theme}.dxp-banner-carousel .bar-container{color: ${this.indicatorColor}}\n          .dxp.${this.theme}.dxp-banner-carousel .carousel-current-progress{background-color: ${this.indicatorColor}}\n        `)];return i("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},t,i("div",{class:"carousel-container",tabindex:"0",onFocus:()=>this.onMouseover()},this.slides?this.slides.map(t=>i("dxp-banner",{"banner-type":t.bannerType,"banner-size":t.bannerSize,"data-theme":t.dataTheme,"eyebrow-title":t.eyebrowTitle,"title-text":t.titleText,"title-heading":t.titleHeading,"sub-title":t.subTitle,"enable-overlay":t.enableOverlay,"overlay-position":t.overlayPosition,"image-enable-overlay":t.imageEnableOverlay,src:t.src,"src-lg":t.srcLg,"src-md":t.srcMd,"image-title":t.imageTitle,alt:t.alt,href:t.href,"open-in-new-tab":t.openInNewTab,"focal-point":t.focalPoint,"focal-point-lg":t.focalPointLg,"focal-point-md":t.focalPointMd,"position-of-image":t.positionOfImage,responsive:t.responsive,cta:t.cta})):i("slot",null),this.showArrows?i("div",{class:`nav-controls ${this.carouselState.navigationReady?"":"dxp-none"}`},i("span",{class:"prev",onFocus:()=>this.focusNextPrev("PREV"),onBlur:()=>this.blurNextPrev("PREV"),onClick:()=>this.changeSlide("PREV"),"aria-controls":"carousel","aria-label":s.i18n.t("BannerCarousel:prev")}),i("span",{class:"next",onFocus:()=>this.focusNextPrev("NEXT"),onBlur:()=>this.blurNextPrev("NEXT"),onClick:()=>this.changeSlide("NEXT"),"aria-controls":"carousel","aria-label":s.i18n.t("BannerCarousel:next")})):""),this.showThumbnails&&!this.showProgressbar?this.renderThumbnails():this.showProgressbar?this.renderProgressBar():this.renderIndicators())}get element(){return e(this)}static get style(){return"div.dxp.dxp-banner-carousel{position:relative}div.dxp.dxp-banner-carousel .carousel-container{position:relative;overflow:hidden;white-space:nowrap}div.dxp.dxp-banner-carousel .carousel-container.card{-webkit-box-shadow:0 2px 10px 0 rgba(20,20,19,.2);box-shadow:0 2px 10px 0 rgba(20,20,19,.2);border-radius:4px}div.dxp.dxp-banner-carousel .fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}\@-webkit-keyframes fade{0%{opacity:.4}to{opacity:1}}\@keyframes fade{0%{opacity:.4}to{opacity:1}}div.dxp.dxp-banner-carousel .dot{cursor:pointer;height:10px;z-index:10;width:10px;margin-right:8px;border-radius:50%;display:inline-block;-webkit-transition:background-color .6s ease;transition:background-color .6s ease}div.dxp.dxp-banner-carousel .nav-controls{position:absolute;z-index:10;right:0;left:0}div.dxp.dxp-banner-carousel .next,div.dxp.dxp-banner-carousel .prev{position:absolute;cursor:pointer;width:48px;height:108px;-webkit-transition:.6s ease;transition:.6s ease;border-radius:0 8px 8px 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.dxp.dxp-banner-carousel .next{right:0;border-radius:8px 0 0 8px}div.dxp.dxp-banner-carousel .indicators{position:absolute;text-align:center;line-height:1}div.dxp.dxp-banner-carousel .indicators.center{width:100%}div.dxp.dxp-banner-carousel .bar-container{display:-ms-flexbox;display:flex;position:absolute;width:50%;right:0;bottom:0;padding:0 2.5rem 2.5rem;line-height:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}div.dxp.dxp-banner-carousel .bar-container.set-to-left{right:auto;left:0}div.dxp.dxp-banner-carousel .bar-container .carousel-progress-bar{display:none}div.dxp.dxp-banner-carousel .bar-container.benefits-indicator{padding-left:128px;padding-right:0;-ms-flex-pack:start;justify-content:flex-start}div.dxp.dxp-banner-carousel .bar-container.benefits-indicator .carousel-progress-bar{display:block;margin-top:0;margin-left:2.75rem}\@media (max-width:768px){div.dxp.dxp-banner-carousel .bar-container.benefits-indicator .carousel-progress-bar{margin-left:1.5rem}}div.dxp.dxp-banner-carousel .bar-container.benefits-indicator .arrow-container{margin-left:1.875rem}div.dxp.dxp-banner-carousel .bar-container.benefits-indicator .next-arrow,div.dxp.dxp-banner-carousel .bar-container.benefits-indicator .next-arrow:after,div.dxp.dxp-banner-carousel .bar-container.benefits-indicator .prev-arrow,div.dxp.dxp-banner-carousel .bar-container.benefits-indicator .prev-arrow:after{width:26px}\@media (min-width:992px){div.dxp.dxp-banner-carousel .bar-container.benefits-indicator .prev-arrow{margin-right:2rem}}\@media (max-width:991px){div.dxp.dxp-banner-carousel .bar-container.benefits-indicator{padding-left:36px;padding-right:36px}}\@media (max-width:767px){div.dxp.dxp-banner-carousel .bar-container.benefits-indicator{padding-left:16px;padding-right:16px}}\@media (max-width:991px){div.dxp.dxp-banner-carousel .bar-container{width:100%}}div.dxp.dxp-banner-carousel .arrow-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:24px;margin:0}div.dxp.dxp-banner-carousel .carousel-progress-bar{position:relative;margin-top:10px;width:39.5%;height:2px}div.dxp.dxp-banner-carousel .carousel-progress-values{color:inherit;margin:0;min-width:60px}div.dxp.dxp-banner-carousel .carousel-current-progress{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:0 50%;transform-origin:0 50%}div.dxp.dxp-banner-carousel .next-arrow:before{right:0;border-width:1px 1px 0 0;-webkit-transform:translate(-2px,-50%) rotate(45deg);transform:translate(-2px,-50%) rotate(45deg)}div.dxp.dxp-banner-carousel .next-arrow:after{right:0;-webkit-transform:translate(-1px,-50%);transform:translate(-1px,-50%)}div.dxp.dxp-banner-carousel .prev-arrow{margin-right:16px}div.dxp.dxp-banner-carousel .prev-arrow:before{left:0;border-width:0 0 1px 1px;-webkit-transform:translate(2px,-50%) rotate(45deg);transform:translate(2px,-50%) rotate(45deg)}div.dxp.dxp-banner-carousel .prev-arrow:after{left:0;-webkit-transform:translate(1px,-50%);transform:translate(1px,-50%)}div.dxp.dxp-banner-carousel .next-arrow,div.dxp.dxp-banner-carousel .prev-arrow{display:inline-block;padding:0;background:none;height:24px;width:20px;position:relative;cursor:pointer}div.dxp.dxp-banner-carousel .next-arrow:before,div.dxp.dxp-banner-carousel .prev-arrow:before{content:\"\";display:block;height:9px;width:9px;position:absolute;top:50%;border-color:inherit;border-style:solid}div.dxp.dxp-banner-carousel .next-arrow:after,div.dxp.dxp-banner-carousel .prev-arrow:after{content:\"\";display:block;height:0;border-top:1px solid;width:19px;position:absolute;top:50%}div.dxp.dxp-banner-carousel .disable-prev-arrow{pointer-events:none;opacity:.6}div.dxp.dxp-banner-carousel .thumbnails{text-align:center}div.dxp.dxp-banner-carousel .thumbnails .thumbnail{overflow:hidden;cursor:pointer;display:inline-block;width:90px;height:40px;margin:7px 3px}div.dxp.dxp-banner-carousel[dir=rtl] .next{left:0;right:auto}div.dxp.dxp-banner-carousel[dir=rtl] .arrow-container{-ms-flex-direction:row-reverse;flex-direction:row-reverse}div.dxp.dxp-banner-carousel[dir=rtl] .arrow-container .next-arrow,div.dxp.dxp-banner-carousel[dir=rtl] .arrow-container .prev-arrow{background:none}div.dxp.dxp-banner-carousel[dir=rtl] .benefits-indicator{padding-left:0;padding-right:128px}div.dxp.dxp-banner-carousel[dir=rtl] .benefits-indicator .carousel-progress-bar{margin-left:0;margin-right:2.75rem}div.dxp.dxp-banner-carousel[dir=rtl] .benefits-indicator .arrow-container{margin-left:0;margin-right:1.875rem}\@media (max-width:991px){div.dxp.dxp-banner-carousel[dir=rtl] .benefits-indicator{padding-right:36px}}\@media (max-width:767px){div.dxp.dxp-banner-carousel[dir=rtl] .benefits-indicator{padding-right:16px}}"}};export{o as dxp_banner_carousel};
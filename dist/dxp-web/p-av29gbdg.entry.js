import{r as t,d as s,h as e,g as i}from"./p-8188e849.js";import{B as r}from"./p-16d6f0ca.js";const l=class{constructor(s){t(this,s),this.orientation="horizontal"}ctaChangeHandler(){this.base.createNestedMarkup(this.ctaContainer,"dxp-cta",this.ctaList)}componentWillLoad(){this.base=new r(this,s)}componentDidLoad(){this.ctaChangeHandler();const t=this.element.querySelectorAll("dxp-cta");for(const s of t)s.classList.add("sc-dxp-cta-list")}handleCTAResize(){window.innerWidth<767&&(this.orientation="vertical")}routingHandler(t){this.base.routingEventListener(t)}getClassName(){switch(this.titleStyle){case"dxp-title-xl":return"dxp-title-1";case"dxp-title-lg":return"dxp-title-2";case"dxp-title-md":return"dxp-title-3";case"dxp-title-sm":return"dxp-title-4";default:return"dxp-title-1"}}render(){s.log.debug(this.element.tagName,"render()","in dxp-cta-list render() : DEVELOPMENT");const t=[e("link",{rel:"stylesheet",href:""}),[this.theme&&e("link",{rel:"stylesheet",href:""})],[this.theme&&e("link",{rel:"stylesheet",href:`${s.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-cta.min.css`})]];return e("div",{class:`${this.base.componentClass()} sc-dxp-cta-list`,dir:this.dir,"data-theme":this.theme},t,this.titleText&&e("p",{class:this.getClassName(),innerHTML:this.titleText}),e("div",{class:`${this.orientation.toLowerCase()} sc-dxp-cta-list`,ref:t=>this.ctaContainer=t},e("slot",null)))}get element(){return i(this)}static get watchers(){return{ctaList:["ctaChangeHandler"]}}static get style(){return"div.dxp.dxp-cta-list{background:transparent}div.dxp.dxp-cta-list ::slotted(dxp-cta),div.dxp.dxp-cta-list dxp-cta{-webkit-appearance:none!important}div.dxp.dxp-cta-list .dxp-cta.dxp-btn-block,div.dxp.dxp-cta-list ::slotted(dxp-cta.dxp-btn-block),div.dxp.dxp-cta-list dxp-cta.dxp-btn-block{display:block;width:100%}div.dxp.dxp-cta-list .vertical{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}div.dxp.dxp-cta-list .vertical ::slotted(dxp-cta),div.dxp.dxp-cta-list .vertical dxp-cta{display:inline-block}div.dxp.dxp-cta-list .vertical ::slotted(dxp-cta:not(:last-child)),div.dxp.dxp-cta-list .vertical dxp-cta:not(:last-child){margin-bottom:24px}div.dxp.dxp-cta-list .horizontal ::slotted(dxp-cta),div.dxp.dxp-cta-list .horizontal dxp-cta{margin:0 0 24px 0;display:inline-block}div.dxp.dxp-cta-list .horizontal ::slotted(dxp-cta:not(:last-child)),div.dxp.dxp-cta-list .horizontal dxp-cta:not(:last-child){margin:0 24px 24px 0}div.dxp.dxp-cta-list p{margin-bottom:40px}div.dxp.dxp-cta-list[dir=rtl] .horizontal ::slotted(dxp-cta),div.dxp.dxp-cta-list[dir=rtl] .horizontal dxp-cta{margin:0 0 24px 24px}"}};export{l as dxp_cta_list};
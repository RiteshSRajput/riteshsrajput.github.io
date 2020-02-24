import { r as registerInstance, d as dxp, h, g as getElement } from './core-cdc608e2.js';
import { B as BaseComponent } from './base-component.esm-d926764b.js';
import { m as messages } from './messages-78210655.js';

const DxpCountryItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'CountrySelector', messages);
    }
    /**
     * click listener for routing events on anchor tag
     */
    routingHandler(event) {
        this.base.routingEventListener(event);
    }
    /** Render the country-selector */
    render() {
        dxp.log.debug(this.element.tagName, 'render()', `in dxp-country render() : ${"DEVELOPMENT"}`);
        const styles = [
            h("link", { rel: "stylesheet", href: `` }),
            [this.theme && h("link", { rel: "stylesheet", href: `` })],
            [this.theme && h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-site-list.min.css` })]
        ];
        return (h("div", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme }, styles, h("p", { tabindex: "0", class: "country-name dxp-font-size-lg dxp-bold", "aria-label": dxp.i18n.t('CountrySelector:accessibilitySelectedcountry', { selectedcountry: this.name }) }, this.name, " "), h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return "div.dxp.dxp-country-item{width:100%}div.dxp.dxp-country-item:after{content:\"\";display:block;clear:both;width:100%}div.dxp.dxp-country-item .country-name{margin-bottom:0;border:1px solid transparent}div.dxp.dxp-country-item dxp-in-language{display:block;float:left}div.dxp.dxp-country-item dxp-in-language a{border:1px solid transparent}div.dxp.dxp-country-item dxp-in-language+dxp-in-language span{margin-left:1rem;padding-left:1rem;position:relative}div.dxp.dxp-country-item dxp-in-language+dxp-in-language span:after{content:\"\";display:block;position:absolute;left:0;top:.1875rem;width:.1rem;height:1.125rem}div.dxp.dxp-country-item[dir=rtl] dxp-language{float:right}div.dxp.dxp-country-item[dir=rtl] dxp-language+dxp-language span{margin-left:0;padding-left:0;margin-right:1.5rem;padding-right:1.5rem}div.dxp.dxp-country-item[dir=rtl] dxp-language+dxp-language span:after{left:auto;right:0}"; }
};

const DxpInLanguage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'CountrySelector', messages);
        this.countryName = this.element && this.element.parentElement ? this.element.parentElement.querySelector('.country-name').textContent : '';
    }
    /**
     * click listener for routing events on anchor tag
     */
    routingHandler(event) {
        this.base.routingEventListener(event);
    }
    /** Render the country-selector */
    render() {
        dxp.log.debug(this.element.tagName, 'render()', `in dxp-country render() : ${"DEVELOPMENT"}`);
        const styles = [
            h("link", { rel: "stylesheet", href: `` }),
            [this.theme && h("link", { rel: "stylesheet", href: `` })],
            [this.theme && h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-site-list.min.css` })]
        ];
        return (h("span", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme }, styles, h("a", { href: this.link, "aria-label": dxp.i18n.t('CountrySelector:accessibilitySelectedcountrylang', { selectedcountry: this.countryName, selectedlanguage: this.name }) }, this.name)));
    }
    get element() { return getElement(this); }
    static get style() { return ""; }
};

const ACCORDION_ITEM = 'dxp-accordion-item';
const DxpRegion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** expand region item by default */
        this.isOpen = false;
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'CountrySelector', messages);
    }
    /** actions to be performed after component loading */
    componentDidLoad() {
        if (this.isOpen) {
            const accItem = this.element.querySelector(ACCORDION_ITEM) ?
                this.element.querySelector(ACCORDION_ITEM).querySelector('.acc-item')
                :
                    this.element.querySelector(ACCORDION_ITEM).querySelector('.acc-item');
            if (accItem) {
                accItem.click();
            }
        }
        const dxpInLanguage = this.element.querySelectorAll('dxp-in-language');
        for (const i of Object.keys(dxpInLanguage)) {
            dxpInLanguage[i].classList.add('country-lang-selector');
        }
        const descriptionBlock = this.element.querySelector('.description');
        if (descriptionBlock) {
            descriptionBlock.innerHTML = this.description;
        }
    }
    /**
     * click listener for routing events on anchor tag
     */
    routingHandler(event) {
        this.base.routingEventListener(event);
    }
    /** Render the region-selector */
    render() {
        dxp.log.debug(this.element.tagName, 'render()', `in dxp-region render() : ${"DEVELOPMENT"}`);
        const styles = [
            h("link", { rel: "stylesheet", href: `` }),
            [this.theme && h("link", { rel: "stylesheet", href: `` })],
            [this.theme && h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-site-list.min.css` })]
        ];
        return (h("div", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme }, styles, h("dxp-accordion-item", { "item-title": this.name }, h("slot", { name: "top" }), this.description && (h("div", { class: "description", slot: "top" })))));
    }
    get element() { return getElement(this); }
    static get style() { return "div.dxp.dxp-region dxp-country-item{display:block;width:100%;margin-top:1.75rem}div.dxp.dxp-region dxp-country-item:first-child{margin-top:0}div.dxp.dxp-region dxp-country-item:last-of-type{margin-bottom:3.3125rem}div.dxp.dxp-region .description{padding:1.625rem 1.5rem 1.75rem;margin:0 0 .34rem;clear:both}div.dxp.dxp-region .description a{text-decoration:underline;border:1px solid transparent}\@media (min-width:768px){div.dxp.dxp-region dxp-country-item{width:50%;float:left;margin-top:0}div.dxp.dxp-region dxp-country-item:nth-of-type(2)~dxp-country-item{margin-top:1.375rem}div.dxp.dxp-region dxp-country-item:after{content:\"\";display:block;clear:both}}\@media (min-width:992px){div.dxp.dxp-region dxp-country-item{width:25%;margin-top:0}div.dxp.dxp-region dxp-country-item:nth-of-type(2)~dxp-country-item{margin-top:0}div.dxp.dxp-region dxp-country-item:nth-of-type(4)~dxp-country-item{margin-top:1.375rem}}\@media (min-width:768px){div.dxp.dxp-region[dir=rtl] dxp-country-item{float:right}}"; }
};

export { DxpCountryItem as dxp_country_item, DxpInLanguage as dxp_in_language, DxpRegion as dxp_region };

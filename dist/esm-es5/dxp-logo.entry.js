import { r as registerInstance, c as createEvent, d as dxp, h, g as getElement } from './core-cdc608e2.js';
import { B as BaseComponent } from './base-component.esm-d926764b.js';
var SEPARATOR_CLASS = '.separator';
var Logo = /** @class */ (function () {
    function Logo(hostRef) {
        registerInstance(this, hostRef);
        this.analyticsDataEmitter = createEvent(this, "dxp_comp", 7);
    }
    /** actions to be performed prior to component loading */
    Logo.prototype.componentWillLoad = function () {
        this.base = new BaseComponent(this, dxp);
    };
    /** actions to be performed after component loading */
    Logo.prototype.componentDidLoad = function () {
        if (this.element.querySelector('dxp-logo')) {
            if (this.element.querySelector('dxp-logo').querySelector('img') || this.element.querySelector('dxp-logo').querySelector('img')) {
                this.element.querySelector('dxp-logo').querySelector(SEPARATOR_CLASS) ?
                    this.element.querySelector('dxp-logo').querySelector(SEPARATOR_CLASS).classList.remove('dxp-none') :
                    this.element.querySelector(SEPARATOR_CLASS).classList.remove('dxp-none');
            }
        }
        if (!this.element.getAttribute('src') || !this.element.getAttribute('schema-type')) {
            return;
        }
        // creates the schema tag for SEO
        this.schemaScript();
    };
    /**
     * click listener for routing events on anchor tag
     */
    Logo.prototype.routingHandler = function (event) {
        this.base.routingEventListener(event);
    };
    /** appending domain url to relative path */
    Logo.prototype.appendingDomain = function (url) {
        var domainURL;
        var arr;
        var result;
        domainURL = window.location.href;
        arr = domainURL.split('/');
        result = arr[0] + "//" + arr[2];
        return result + url;
    };
    /** Emit the analytics data after clicking on dxp-logo component */
    Logo.prototype.emitAnalyticsData = function () {
        var obj = { 'di_comp_name': this.element.tagName, 'di_comp_title': this.logoTitle ? this.logoTitle : this.alt, 'di_comp_cta': this.href ? this.href : '' };
        this.analyticsDataEmitter.emit(obj);
        dxp.log.info(this.element.tagName, 'emitAnalyticsData()', obj);
    };
    /** SEO script of Schema  */
    Logo.prototype.schemaScript = function () {
        var hrefLink;
        var imgLink;
        if (this.src && window.screen.width > 767.9) {
            imgLink = dxp.util.checkValidUrl(this.src) ? this.src : this.appendingDomain(this.src);
        }
        else if (this.srcSm && window.screen.width < 767.9) {
            imgLink = dxp.util.checkValidUrl(this.srcSm) ? this.srcSm : this.appendingDomain(this.srcSm);
        }
        hrefLink = this.href ? dxp.util.checkValidUrl(this.href) ? this.href : this.appendingDomain(this.href) : window.location.href;
        var schema = JSON.stringify({ '@context': 'https://schema.org', '@type': this.schemaType, 'url': hrefLink, 'logo': imgLink });
        /** created script tag to be appended on the body tag for SEO schema */
        this.base.createSeoSchema(dxp, this.element, schema);
    };
    /** Render the logo */
    Logo.prototype.render = function () {
        var _this = this;
        dxp.log.debug(this.element.tagName, 'render()', "in dxp-logo render() : " + "DEVELOPMENT");
        var imgs = [
            this.src && h("img", { src: this.src, alt: this.alt, title: this.logoTitle, class: "dxp-hidden-sm-down" }),
            (this.srcSm || this.src) && h("img", { src: this.srcSm || this.src, alt: this.alt, title: this.logoTitle, class: "dxp-hidden-md-up" })
        ];
        var styles = (h("span", null, h("link", { rel: "stylesheet", href: "" }), this.theme && (h("link", { rel: "stylesheet", href: "" })), this.dtmUrl && (h("script", { src: this.dtmUrl }))));
        if (this.href && this.src) {
            return (h("div", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme }, styles, h("span", { class: "separator dxp-none" }, "|"), h("a", { class: "logo-img", onClick: function () { return _this.emitAnalyticsData(); }, href: this.href, target: this.target ? '_blank' : '_self', "aria-label": this.ariaLabel }, this.src && imgs), this.src && h("slot", null)));
        }
        if (this.src) {
            return (h("div", { class: this.base.componentClass(), dir: this.dir, onClick: function () { return _this.emitAnalyticsData(); } }, h("span", { class: "separator dxp-none" }, "|"), h("p", null, styles, this.src && imgs), this.src && h("slot", null)));
        }
    };
    Object.defineProperty(Logo.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logo, "style", {
        get: function () { return "div.dxp.dxp-logo{overflow:hidden;display:-ms-flexbox;display:flex}div.dxp.dxp-logo a,div.dxp.dxp-logo p{display:-ms-flexbox;display:flex;height:40px}div.dxp.dxp-logo p{margin-bottom:0}div.dxp.dxp-logo img{max-height:40px;width:auto;height:100%}div.dxp.dxp-logo .separator{font-size:34px;font-weight:100;line-height:32px;width:32px;height:40px;text-align:center}\@media (max-width:991px){div.dxp.dxp-logo img{max-height:30px}div.dxp.dxp-logo .separator{font-size:25px;line-height:25px;height:30px}}"; },
        enumerable: true,
        configurable: true
    });
    return Logo;
}());
export { Logo as dxp_logo };

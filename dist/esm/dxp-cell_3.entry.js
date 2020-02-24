import { r as registerInstance, d as dxp, h, g as getElement } from './core-cdc608e2.js';
import { B as BaseComponent } from './base-component.esm-d926764b.js';
import { m as messages } from './messages-e2c54d44.js';

const Cell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'Table', messages);
    }
    /**
     * click listener for routing events on anchor tag
     */
    routingHandler(event) {
        this.base.routingEventListener(event);
    }
    /** Render the table */
    render() {
        dxp.log.debug(this.element.tagName, 'render()', `in dxp-cell render() : ${"DEVELOPMENT"}`);
        return (h("div", { class: `${this.base.componentClass()} table-cell`, dir: this.dir, "data-theme": this.theme, role: "cell" }, this.content ? h("span", { tabindex: "0", class: "cell-content", innerHTML: this.content }) : h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return "div.dxp.dxp-cell{background:none;min-width:10rem}div.dxp.dxp-cell .cell-content{text-align:left;height:1.625rem;font-size:1.125rem;line-height:1.625rem;word-break:break-word}"; }
};

const Head = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'Table', messages);
    }
    /**
     * click listener for routing events on anchor tag
     */
    routingHandler(event) {
        this.base.routingEventListener(event);
    }
    /** Render the table */
    render() {
        dxp.log.debug(this.element.tagName, 'render()', `in dxp-head render() : ${"DEVELOPMENT"}`);
        return (h("div", { class: `${this.base.componentClass()} dxp-tbl-head`, dir: this.dir, "data-theme": this.theme }, this.content ? h("span", { role: "columnheader", tabindex: "0", class: "head-content", innerHTML: this.content }) : h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return "div.dxp.dxp-head{border-bottom:none}div.dxp.dxp-head:host{display:-ms-flexbox;display:flex}div.dxp.dxp-head .head-content{height:24px;font-size:14px;font-weight:700;letter-spacing:1.8px;line-height:24px;word-break:break-word}"; }
};

const TableRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'Table', messages);
    }
    /**
     * click listener for routing events on anchor tag
     */
    routingHandler(event) {
        this.base.routingEventListener(event);
    }
    /** Render the table */
    render() {
        dxp.log.debug(this.element.tagName, 'render()', `in dxp-table render() : ${"DEVELOPMENT"}`);
        const styles = [
            h("link", { rel: "stylesheet", href: `` }),
            [this.theme && h("link", { rel: "stylesheet", href: `` })],
            [this.theme && h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-table.min.css` })]
        ];
        return (h("div", { class: `${this.base.componentClass()} tbl-row`, dir: this.dir, "data-theme": this.theme, role: "row" }, styles, h("slot", null)));
    }
    get element() { return getElement(this); }
    static get style() { return "div.dxp.dxp-tbl-row{background:none}div.dxp.dxp-tbl-row.tbl-row,div.dxp.dxp-tbl-row.tbl-row>dxp-cell{display:-ms-flexbox;display:flex;width:100%}div.dxp.dxp-tbl-row.tbl-row>dxp-cell{-ms-flex:1 100%;flex:1 100%;padding:1.125rem 1.5rem 1rem 1.5rem}div.dxp.dxp-tbl-row.tbl-row>dxp-cell:first-of-type{padding-left:2rem}div.dxp.dxp-tbl-row.tbl-row>dxp-cell .dxp-cell{padding-left:0}div.dxp.dxp-tbl-row.tbl-row>dxp-cell .dxp-head{padding:0}div.dxp.dxp-tbl-row.tbl-row>dxp-head{display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 100%;flex:1 100%;padding:1.4375rem 1.5rem 1.625rem 1.5rem}div.dxp.dxp-tbl-row.tbl-row>dxp-head:first-of-type{padding-left:2rem}div.dxp.dxp-tbl-row.tbl-row>dxp-head .dxp-cell{padding-left:0}div.dxp.dxp-tbl-row.tbl-row>dxp-head .dxp-head{padding:0}\@media (max-width:767px){div.dxp.dxp-tbl-row.tbl-row>dxp-cell:first-of-type,div.dxp.dxp-tbl-row.tbl-row>dxp-head:first-of-type{padding-left:1.5rem}}"; }
};

export { Cell as dxp_cell, Head as dxp_head, TableRow as dxp_tbl_row };

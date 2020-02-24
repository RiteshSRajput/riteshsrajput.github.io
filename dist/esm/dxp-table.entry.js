import { r as registerInstance, d as dxp, h, g as getElement } from './core-cdc608e2.js';
import { B as BaseComponent } from './base-component.esm-d926764b.js';
import { m as messages } from './messages-e2c54d44.js';

const TABLE_ROW = 'dxp-tbl-row';
const Table = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** responsible for heading data which needs to be visible in table head */
        this.heading = [];
        /** responsible for number of rows and data which needs to be visible in table rows head */
        this.rows = [];
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'Table', messages);
        if (this.data) {
            this.heading = this.data.heading ? this.data.heading : [];
            this.rows = this.data.rows ? this.data.rows : [];
        }
        const shadow = this.element ? this.element : this.element;
        let href = ``;
        dxp.util.appendLinkElement(shadow, href);
        href = ``;
        dxp.util.appendLinkElement(shadow, href);
        href = `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-table.min.css`;
        dxp.util.appendLinkElement(shadow, href);
    }
    /** lifeCycle hook */
    componentDidLoad() {
        const rows = this.element.querySelectorAll(TABLE_ROW).length ? this.element.querySelectorAll(TABLE_ROW) : this.element.querySelectorAll(TABLE_ROW);
        let i;
        if (rows.length) {
            for (i of Object.keys(rows)) {
                if (i % 2 === 0) {
                    rows[i].querySelector('.dxp-tbl-row').classList.add('even');
                }
            }
        }
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
        return (h("div", { class: "dxp table-container", role: "application" }, h("div", { class: `${this.base.componentClass()} table`, dir: this.dir, "data-theme": this.theme, role: "table", "aria-label": this.accessibilityText }, this.heading.length ? h("dxp-tbl-row", null, " ", (this.heading.map((item) => {
            return (h("dxp-head", { content: item.content }));
        })), " ") : h("slot", null), this.rows.length ?
            (this.rows.map((item) => {
                return (h("dxp-tbl-row", null, item.values.map((value) => {
                    return (h("dxp-cell", { content: value.content }));
                })));
            }))
            : h("slot", null))));
    }
    get element() { return getElement(this); }
    static get style() { return "div.dxp.dxp-table.table{display:table;width:100%}div.dxp.dxp-table ::slotted(dxp-tbl-row){display:-ms-flexbox;display:flex;width:100%}div.dxp.dxp-table dxp-tbl-row:nth-child(2n){display:block}.dxp.table-container{max-width:100%;overflow:auto}"; }
};

export { Table as dxp_table };

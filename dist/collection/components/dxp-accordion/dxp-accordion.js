import { BaseComponent } from '@mc-dxp/dxp-ui-base-component';
import dxp from '@mc-dxp/dxp-ui-core';
import { h } from "@stencil/core";
import messages from './messages';
const ACCORDION_CONTENT_CLASS = '.acc-content';
const ACCORDION_ITEM = 'dxp-accordion-item';
const ACCORDION_LABEL_CLASS = '.acc-label';
const ACC_ITEM_SELECT = 'acc-item-select';
/** dxp-accordion */
export class Accordion {
    constructor() {
        /** holds the child element count */
        this.childElementCount = 0;
        /** sets the accordion heading */
        this.heading = '';
        /** sets whether header is required */
        this.isHeaderRequired = true;
    }
    /** Listener that looks for accordion items object to be assigned/changed externally */
    accordionChangeHandler() {
        this.base.createNestedMarkup(this.accItemContainer, 'dxp-accordion', this.items);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'Accordion', messages);
        if (this.items && typeof this.items === 'string') {
            this.items = JSON.parse(this.items);
        }
    }
    /** life cycle hook called after render method when any state variable changes it's state or after force call of render */
    componentDidLoad() {
        if (this.items) {
            const expandAll = this.element.querySelectorAll('.expand-all');
            const collapseAll = this.element.querySelectorAll('.collapse-all');
            this.expandAndCollapse(this.element, expandAll, collapseAll);
        }
        const shadowEle = this.element.querySelectorAll(ACCORDION_ITEM) && this.element.querySelectorAll(ACCORDION_ITEM).length;
        const childElement = shadowEle ? this.element.querySelectorAll(ACCORDION_ITEM) : this.element.querySelectorAll(ACCORDION_ITEM);
        // to get the last child of accordion and add class to it
        const lastChild = childElement[childElement.length - 1];
        if (lastChild && lastChild) {
            lastChild.querySelector(ACCORDION_LABEL_CLASS).classList.add('acc-bottom');
        }
        if (childElement && childElement.length > 0) {
            this.childElementCount = childElement.length;
        }
    }
    /** action to be performed when state variable gets updates */
    componentDidUpdate() {
        const expandAll = this.element.querySelectorAll('.expand-all');
        const collapseAll = this.element.querySelectorAll('.collapse-all');
        this.expandAndCollapse(this.element, expandAll, collapseAll);
    }
    /** action to be perform on keyup event */
    expandCollapse(e) {
        const accLabelArray = this.getElementsByClass(ACCORDION_LABEL_CLASS);
        const accLabel = Array.prototype.slice.call(accLabelArray);
        let accContent;
        let activeElement;
        let currentAccLabel;
        const defaultPrevent = [32, 38, 40];
        const keyCode = e.keyCode;
        activeElement = e.target ? e.target.activeElement : e.target;
        /** This prevents the page scrolling when space bar or arrows keys use to navigate the menu items */
        if (defaultPrevent.indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
        if (keyCode === 9) {
            activeElement.classList.remove('dxp-no-outline');
        }
        accContent = this.getElementsByClass(ACCORDION_CONTENT_CLASS);
        currentAccLabel = this.getElementsByClass(ACCORDION_LABEL_CLASS);
        // expand all child elements
        if (activeElement.classList.contains('expand-all') && (keyCode === 32 || keyCode === 13)) {
            for (let i = 0; i < currentAccLabel.length; i++) {
                currentAccLabel[i].classList.add('active');
                currentAccLabel[i].parentElement.classList.add(ACC_ITEM_SELECT);
                accContent[i].classList.remove('dxp-none');
                accContent[i].style.maxHeight = `${accContent[i].scrollHeight + accContent[i].offsetHeight}px`;
            }
        }
        if (activeElement.classList.contains('collapse-all') && (keyCode === 32 || keyCode === 13)) {
            this.collapseAll(accLabel, currentAccLabel, accContent);
        }
    }
    /**
     * click listener for routing events on anchor tag
     */
    routingHandler(event) {
        this.base.routingEventListener(event);
    }
    /** collapse all on keyup */
    collapseAll(accLabel, currentAccLabel, accContent) {
        for (let i = 0; i < accLabel.length; i++) {
            accLabel[i].classList.remove('active');
            if (accContent[i]) {
                accContent[i].removeAttribute('style');
                currentAccLabel[i].parentElement.classList.remove(ACC_ITEM_SELECT);
                currentAccLabel[i].classList.remove('active');
                accContent[i].classList.add('dxp-none');
            }
        }
    }
    /** This function is responsible for attaching click listener and adding/removing relevant class */
    expandAndCollapse(element, expandAll, collapseAll) {
        let accContent;
        let accLabels;
        if (element && element.querySelectorAll('.toggle')) {
            // Get all expandAll buttons
            for (let i = 0; i < expandAll.length; i++) {
                expandAll[i].addEventListener('click', () => {
                    accContent = this.getElementsByClass(ACCORDION_CONTENT_CLASS);
                    accLabels = this.getElementsByClass(ACCORDION_LABEL_CLASS);
                    for (let j = 0; j < accContent.length; j += 1) {
                        accLabels[j].parentElement.classList.add(ACC_ITEM_SELECT);
                        accLabels[j].classList.add('active');
                        accContent[j].classList.remove('dxp-none');
                        accContent[j].style.maxHeight = `${accContent[j].scrollHeight + accContent[j].offsetHeight}px`;
                    }
                });
                collapseAll[i].addEventListener('click', () => {
                    accContent = this.getElementsByClass(ACCORDION_CONTENT_CLASS);
                    accLabels = this.getElementsByClass(ACCORDION_LABEL_CLASS);
                    for (let j = 0; j < accContent.length; j += 1) {
                        accLabels[j].parentElement.classList.remove(ACC_ITEM_SELECT);
                        accLabels[j].classList.remove('active');
                        accContent[j].removeAttribute('style');
                        accContent[j].classList.remove('acc-top');
                        accContent[j].classList.add('dxp-none');
                    }
                });
            }
        }
    }
    /** private method checks for slot or items array and accordingly fetch the accordion-item element by class name */
    getElementsByClass(cssClassName) {
        const elements = new Array();
        const slot = this.element.querySelector('slot');
        if (slot) {
            slot.assignedNodes().filter(node => {
                if (node.nodeName !== '#text') {
                    const accordionItemElm = node.querySelector(cssClassName);
                    elements.push(accordionItemElm);
                }
            });
        }
        else {
            const accordionItems = this.element.querySelectorAll(ACCORDION_ITEM);
            for (const item of accordionItems) {
                elements.push(item.querySelector(cssClassName));
            }
        }
        return elements;
    }
    /** Render the accordion */
    render() {
        dxp.log.debug(this.element.tagName, 'render()', `in dxp-accordion render() : ${process.env.MODE}`);
        const styles = [
            h("link", { rel: "stylesheet", href: `` }),
            [h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-accordion.min.css` })],
            [this.theme && h("link", { rel: "stylesheet", href: `` })]
        ];
        return (h("div", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme },
            styles,
            h("div", { class: "toggle" },
                h("div", { class: "dxp-row" }, this.isHeaderRequired &&
                    h("div", { class: "dxp-col-12" },
                        h("p", { class: "title-wrapper" },
                            h("span", { class: "dxp-text-eyebrow dxp-col-sm-6 dxp-col-12" }, this.heading),
                            ((this.childElementCount > 1) || (this.items && this.items.length > 1)) ?
                                h("span", { class: "dxp-col-sm-6 dxp-col-12" },
                                    h("span", { tabindex: "0", class: "expand-all dxp-no-outline", role: "button" }, dxp.i18n.t('Accordion:expandAll')),
                                    h("span", { class: "pipe-separator" }),
                                    h("span", { tabindex: "0", class: "collapse-all dxp-no-outline", role: "button" }, dxp.i18n.t('Accordion:collapseAll'))) : ''))),
                this.items ? this.items.map((item) => {
                    return (h("dxp-accordion-item", { "item-title": item.title, "item-subtitle": item.subtitle, "item-description": item.description, "show-expanded": item.showExpanded }));
                }) :
                    h("div", { ref: el => this.accItemContainer = el },
                        h("slot", null)))));
    }
    static get is() { return "dxp-accordion"; }
    static get originalStyleUrls() { return {
        "$": ["dxp-accordion.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dxp-accordion.css"]
    }; }
    static get properties() { return {
        "heading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "sets the accordion heading"
            },
            "attribute": "heading",
            "reflect": false,
            "defaultValue": "''"
        },
        "isHeaderRequired": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "sets whether header is required"
            },
            "attribute": "is-header-required",
            "reflect": false,
            "defaultValue": "true"
        },
        "items": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "sets the accordion items to be display"
            },
            "attribute": "items",
            "reflect": false
        }
    }; }
    static get states() { return {
        "childElementCount": {},
        "dir": {},
        "locale": {},
        "theme": {}
    }; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "items",
            "methodName": "accordionChangeHandler"
        }]; }
    static get listeners() { return [{
            "name": "keyup",
            "method": "expandCollapse",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "routingHandler",
            "target": undefined,
            "capture": true,
            "passive": false
        }]; }
}

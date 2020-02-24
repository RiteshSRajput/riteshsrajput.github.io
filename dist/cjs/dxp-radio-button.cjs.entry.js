'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core$1 = require('./core-ad292530.js');
const baseComponent_esm = require('./base-component.esm-1dd4e54c.js');

const RadioButton = class {
    constructor(hostRef) {
        core$1.registerInstance(this, hostRef);
        /** radiobutton alignment  */
        this.alignment = 'horizontal';
        this.radioSelected = core$1.createEvent(this, "radioSelected", 7);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new baseComponent_esm.BaseComponent(this, core$1.dxp);
    }
    /** lifecycle hook */
    componentDidLoad() {
        this.element.querySelector('label').innerHTML = this.radioKey;
    }
    /**
     * click listener for routing events on anchor tag
     */
    routingHandler(event) {
        this.base.routingEventListener(event);
    }
    /** emits event on state change of radio button */
    handleChange(event) {
        this.radioSelected.emit({ 'name': event.target.getAttribute('name'), 'value': event.target.getAttribute('value'), 'isChecked': event.target.checked });
    }
    /** Render the radio-button */
    render() {
        const styles = [
            core$1.h("link", { rel: "stylesheet", href: `` }),
            [this.theme && core$1.h("link", { rel: "stylesheet", href: `` })],
            [this.theme && core$1.h("link", { rel: "stylesheet", href: `${core$1.dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-radio-button.min.css` })]
        ];
        return (core$1.h("div", { class: `${this.base.componentClass()} ${this.alignment}`, dir: this.dir, "data-theme": this.theme }, styles, core$1.h("input", { onChange: ev => this.handleChange(ev), id: this.radioKey, type: "radio", key: this.radioKey, name: this.name, value: this.radioValue, checked: this.checked, disabled: this.isDisabled }), core$1.h("label", { htmlFor: this.radioKey }, this.radioKey)));
    }
    get element() { return core$1.getElement(this); }
    static get style() { return "div.dxp.dxp-radio-button{margin:10px 10px 0}div.dxp.dxp-radio-button.horizontal{display:-ms-inline-flexbox;display:inline-flex}div.dxp.dxp-radio-button.vertical{display:grid}div.dxp.dxp-radio-button input[type=radio]{position:absolute;opacity:0;width:0}div.dxp.dxp-radio-button input[type=radio]+label{padding-left:26px;position:relative;margin:0}div.dxp.dxp-radio-button input[type=radio]+label:before{content:\"\";width:18px;height:18px;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}div.dxp.dxp-radio-button input[type=radio][disabled]{pointer-events:none}div.dxp.dxp-radio-button input[type=radio][disabled]+label{cursor:not-allowed}div.dxp.dxp-radio-button[dir=rtl] input[type=radio]+label{padding-left:0;padding-right:26px}div.dxp.dxp-radio-button[dir=rtl] input[type=radio]+label:before{left:auto;right:0}"; }
};

exports.dxp_radio_button = RadioButton;

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, d as dxp, h, g as getElement } from './core-cdc608e2.js';
import { B as BaseComponent } from './base-component.esm-d926764b.js';
var messages = {
    'en': {
        close: 'click this icon to close overlay'
    },
    'en-US': {
        close: 'click this icon to close overlay'
    }
};
var Overlay = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    /** actions to be performed prior to component loading */
    class_1.prototype.componentWillLoad = function () {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'Overlay', messages);
    };
    /**
     * click listener for routing events on anchor tag
     */
    class_1.prototype.routingHandler = function (event) {
        this.base.routingEventListener(event);
    };
    /** to switch the state of overlay */
    class_1.prototype.toggleState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var shadowRoot, target;
            return __generator(this, function (_a) {
                shadowRoot = this.element ? this.element : this.element;
                target = shadowRoot.querySelector('.dxp-overlay');
                state ? target.classList.add('show') : target.classList.remove('show');
                return [2 /*return*/];
            });
        });
    };
    /** Render the overlay */
    class_1.prototype.render = function () {
        var _this = this;
        dxp.log.debug(this.element.tagName, 'render()', "in dxp-overlay render() : " + "DEVELOPMENT");
        var styles = [
            h("link", { rel: "stylesheet", href: "" }),
            [this.theme && h("link", { rel: "stylesheet", href: "" })],
            [this.theme && h("link", { rel: "stylesheet", href: dxp.config.get('DXP_STYLE_BASE_URL') + "/themes/" + this.theme + "/dxp-overlay.min.css" })]
        ];
        return (h("div", null, this.demo ? h("button", { class: "dxp-btn dxp-btn-primary demo-button", onClick: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toggleState(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); } }, "Show Overlay") : '', h("div", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme }, styles, h("div", { class: "content-section" }, h("slot", null)), h("span", { class: "dxp-icon dxp-icon-close", onClick: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toggleState(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); }); }, "aria-label": dxp.i18n.t('Overlay:close') }))));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "div.dxp.dxp-overlay{position:absolute;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:2;cursor:pointer}div.dxp.dxp-overlay.show{display:block}div.dxp.dxp-overlay .content-section{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute}div.dxp.dxp-overlay .dxp-icon-close{position:absolute}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { Overlay as dxp_overlay };

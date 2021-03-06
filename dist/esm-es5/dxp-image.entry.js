import { r as registerInstance, c as createEvent, d as dxp, h, g as getElement } from './core-cdc608e2.js';
import { B as BaseComponent } from './base-component.esm-d926764b.js';
var Image = /** @class */ (function () {
    function Image(hostRef) {
        registerInstance(this, hostRef);
        /** position of the caption on image */
        this.captionPosition = 'bottom-left';
        /** Text to be shown on overlay */
        this.imageTitle = '';
        this.analyticsDataEmitter = createEvent(this, "dxp_comp", 7);
    }
    /** watch change in image path and update the data-src accordingly for lazyloading */
    Image.prototype.imagePathChangeHandler = function () {
        this.imgSrc = this.src;
    };
    /** actions to be performed prior to component loading */
    Image.prototype.componentWillLoad = function () {
        this.base = new BaseComponent(this, dxp);
        this.loadResource();
        this.calculateFocalPoint();
    };
    /** updating rendered state with the componentDidLoad() */
    Image.prototype.componentDidLoad = function () {
        this.imageContainer = this.element ? this.element.querySelector('.image-container') : this.element.querySelector('.image-container');
        this.anchorElm = this.element ? this.element.querySelector('.image-container a') : this.element.querySelector('.image-container a');
        this.imgParentElm = this.anchorElm ? this.anchorElm : this.imageContainer;
        this.componentParentElm = this.element.parentElement;
        this.img = this.element ? this.element.querySelector('img') : this.element.querySelector('img');
        this.lazyLoadImage();
        // Apply focal point values on image as per X and Y coordinates
        this.applyFocalPoints();
    };
    /** component will update  */
    Image.prototype.componentWillUpdate = function () {
        if (this.responsive) {
            this.img.removeAttribute('style');
            this.imgParentElm.removeAttribute('style');
            return;
        }
    };
    /** component did update  */
    Image.prototype.componentDidUpdate = function () {
        this.lazyLoadImage();
    };
    /**
     * click listener for routing events on anchor tag
     */
    Image.prototype.routingHandler = function (event) {
        this.base.routingEventListener(event);
    };
    /** window resize */
    Image.prototype.windowResizes = function () {
        var _this = this;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(function () {
            _this.loadResource();
        }, 300);
    };
    /** Apply focal point values on image as per X and Y coordinates */
    Image.prototype.applyFocalPoints = function () {
        var dir = this.dir.toLowerCase();
        if (this.focalPoints && this.xPos !== undefined && this.yPos !== undefined && !this.responsive) {
            this.img.style.left = dir !== 'rtl' ? this.xPos + "%" : "-" + this.xPos + "%";
            // in case parent height is auto, focal point works only horizontally
            if (window.getComputedStyle(this.componentParentElm).height === 'auto') {
                this.img.style.transform = dir !== 'rtl' ? "translate(-" + this.xPos + "%, " + 0 + ")" : "translate(" + this.xPos + "%, " + 0 + "%)";
            }
            else {
                this.img.style.transform = dir !== 'rtl' ? "translate(-" + this.xPos + "%, -" + this.yPos + "%)" : "translate(" + this.xPos + "%, -" + this.yPos + "%)";
                this.img.style.top = this.yPos + "%";
            }
        }
    };
    /** calculate device specific focal point */
    Image.prototype.calculateDeviceFocalPoint = function (fpMd, fpLg, fpXl) {
        fpMd ? this.focalPoints = fpMd : fpLg ? this.focalPoints = fpLg : fpXl ? this.focalPoints = fpXl : this.focalPoints = '';
    };
    /** calculate focal point */
    Image.prototype.calculateFocalPoint = function () {
        // Separate out focal point value and store in respective variables
        if (this.focalPoints !== undefined) {
            try {
                this.focalPoints = typeof this.focalPoints === 'string' && this.focalPoints.length !== 0 ? JSON.parse(this.focalPoints) : this.focalPoints;
                if (this.focalPoints.length === 2 && this.focalPoints[0] <= 10 && this.focalPoints[1] <= 10) {
                    this.xPos = this.dir !== 'rtl' ? this.focalPoints[0] * 10 : (10 - this.focalPoints[0]) * 10;
                    this.yPos = this.focalPoints[1] * 10;
                }
                else {
                    this.focalPoints = undefined;
                }
            }
            catch (err) {
                this.focalPoints = undefined;
                dxp.log.error(this.element.tagName, 'calculateFocalPoint()', 'Error message: ', err);
                return false;
            }
        }
    };
    /** emit analytics data */
    Image.prototype.emitAnalyticsData = function () {
        var analyticsInfoObj = {
            'di_comp_name': this.element.tagName,
            'di_comp_title': this.imageTitle,
            'di_comp_src': this.imgSrc
        };
        this.analyticsDataEmitter.emit(analyticsInfoObj);
        dxp.log.info(this.element.tagName, 'emitAnalytics()', analyticsInfoObj);
    };
    /** lazy load fallback condition for IE and Edge browser */
    Image.prototype.fallBack = function () {
        var lazyloadImage = this.base.shadowRootQuerySelector(this.element, 'img', false);
        setTimeout(function () {
            var scrollTop = window.pageYOffset;
            if (lazyloadImage['offsetTop'] < (window.innerHeight + scrollTop)) {
                lazyloadImage['src'] = lazyloadImage['dataset'].src;
                lazyloadImage.classList.remove('lazy');
            }
        }, 20);
    };
    /** apply lazy loading for browser chrome, safari and firefox. Not supported on IE/Edge as it does not support event */
    Image.prototype.lazyLoadImage = function () {
        var lazyloadImage;
        if (window['IntersectionObserver']) {
            lazyloadImage = this.base.shadowRootQuerySelector(this.element, 'img', false);
            var imageObserver_1 = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var image = entry.target;
                        image.src = image.dataset.src;
                        image.classList.remove('lazy');
                        imageObserver_1.unobserve(image);
                    }
                });
            });
            if (lazyloadImage) {
                imageObserver_1.observe(lazyloadImage);
            }
        }
        else {
            this.fallBack();
        }
    };
    /** Load dynamic resources */
    Image.prototype.loadResource = function () {
        var _this = this;
        if (this.base.getDeviceWidthType() === 'xl' || this.base.getDeviceWidthType() === 'lg') {
            this.src ? this.imgSrc = this.src : this.imgSrc = '';
            this.calculateDeviceFocalPoint('', '', this.focalPoint);
        }
        else if (this.base.getDeviceWidthType() === 'md') {
            this.srcLg ? this.imgSrc = this.srcLg : this.src ? this.imgSrc = this.src : this.imgSrc = '';
            this.calculateDeviceFocalPoint('', this.focalPointLg, this.focalPoint);
        }
        else {
            this.srcMd ? this.imgSrc = this.srcMd : this.srcLg ? this.imgSrc = this.srcLg : this.src ? this.imgSrc = this.src : this.imgSrc = '';
            this.calculateDeviceFocalPoint(this.focalPointMd, this.focalPointLg, this.focalPoint);
        }
        this.calculateFocalPoint();
        setTimeout(function () {
            if (_this.focalPoints && !_this.responsive) {
                _this.applyFocalPoints();
            }
        }, 300);
    };
    /** render captions on image */
    Image.prototype.renderCaptions = function () {
        return ((this.captionTitle || this.captionEyebrow || this.captionSubtitle) && h("div", { class: this.captionPosition }, this.captionEyebrow && h("p", { class: "dxp-title-eyebrow dxp-font-size-lg" }, this.captionEyebrow), this.captionTitle && h("h3", { class: "dxp-title-1" }, this.captionTitle), h("p", { class: this.captionSubtitle ? 'description dxp-hidden-xs-only' : 'description' }, this.captionSubtitle)));
    };
    /** Render the image */
    Image.prototype.render = function () {
        var _this = this;
        return (this.imgSrc && this.imgSrc.length ?
            h("div", { class: this.base.componentClass(), dir: this.dir }, h("link", { rel: "stylesheet", href: "" }), this.theme && [
                h("link", { rel: "stylesheet", href: "" }),
                h("link", { rel: "stylesheet", href: dxp.config.get('DXP_STYLE_BASE_URL') + "/themes/" + this.theme + "/dxp-image.min.css" })
            ], this.dtmUrl && (h("script", { src: this.dtmUrl })), h("div", { class: "image-container" }, this.href ?
                h("a", { href: this.href, "aria-label": this.ariaLabel, target: this.openInNewTab ? '_blank' : '_self', onClick: function () { return _this.emitAnalyticsData(); } }, h("img", { class: this.focalPoints && !this.responsive ? 'focal-point-img' : this.responsive ? 'dxp-img-fluid' : undefined, alt: this.alt, title: this.imageTitle, "data-src": this.imgSrc }), this.enableOverlay && h("div", { class: "overlay" }, h("p", null, this.imageTitle, h("slot", { name: "overlay" })))) :
                [
                    h("img", { class: this.focalPoints && !this.responsive ? 'focal-point-img' : this.responsive ? 'dxp-img-fluid' : undefined, alt: this.alt, title: this.imageTitle, "data-src": this.imgSrc }),
                    this.enableOverlay && h("div", { class: "overlay" }, h("p", null, this.imageTitle, h("slot", { name: "overlay" })))
                ], this.renderCaptions())) : undefined);
    };
    Object.defineProperty(Image.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image, "watchers", {
        get: function () {
            return {
                "src": ["imagePathChangeHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image, "style", {
        get: function () { return "div.dxp.dxp-image .image-container{position:relative;overflow:hidden;width:100%}div.dxp.dxp-image .focal-point-img{width:auto;max-height:100%;position:relative}div.dxp.dxp-image .image-container a{display:block;position:relative}div.dxp.dxp-image .image-container .overlay{position:absolute;top:0;bottom:0;left:0;right:0;display:none;font-size:30px;text-align:center}div.dxp.dxp-image .image-container .overlay p{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}div.dxp.dxp-image .image-container:hover .overlay{display:block;cursor:pointer}div.dxp.dxp-image .bottom-left{position:absolute;bottom:32px;left:24px}div.dxp.dxp-image .top-left{position:absolute;top:32px;left:24px}div.dxp.dxp-image .top-right{position:absolute;top:32px;right:24px}div.dxp.dxp-image .bottom-right{position:absolute;bottom:32px;right:24px}div.dxp.dxp-image .centered{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\@media (min-width:992px){div.dxp.dxp-image .full-width-lg{min-width:100%;min-height:100%}div.dxp.dxp-image .focal-point-img{max-height:none}}\@media (max-width:991px){div.dxp.dxp-image .focal-point-img{min-height:100%}div.dxp.dxp-image .full-width-md-down{min-width:100%;max-height:none}}"; },
        enumerable: true,
        configurable: true
    });
    return Image;
}());
export { Image as dxp_image };

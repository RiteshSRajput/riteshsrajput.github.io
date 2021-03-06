import { r as registerInstance, c as createEvent, d as dxp, h, g as getElement } from './core-cdc608e2.js';
import { B as BaseComponent } from './base-component.esm-d926764b.js';
import { m as messages$1 } from './messages-2df5adb6.js';

const COMMENTS_ITEM_EDIT = 'CommentsItem:edit';
const COMMENTS_ITEM_DELETE = 'CommentsItem:delete';
const CommentsItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** textarea placeholder */
        this.textareaPlaceholder = '';
        /** prop holds get user id from */
        this.userDataContainer = 'COOKIE';
        this.analyticsDataEmitter = createEvent(this, "dxp_comp", 7);
        this.clickActionMenu = createEvent(this, "clickActionMenu", 7);
        this.clickEditComment = createEvent(this, "clickEditComment", 7);
        this.clickReplyComment = createEvent(this, "clickReplyComment", 7);
        this.commentUpdated = createEvent(this, "commentUpdated", 7);
    }
    /** Listener that looks for commentObj to be assigned/changed externally */
    commentChangeHandler(updatedObj) {
        this.comments = typeof (updatedObj) === 'string' ? JSON.parse(updatedObj) : updatedObj;
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'CommentsItem', messages$1);
        this.comments = typeof (this.commentObj) === 'string' ? JSON.parse(this.commentObj) : this.commentObj;
        this.config();
    }
    /** actions to be performed after to component load */
    componentDidLoad() {
        if (this.updateSection) {
            this.updateSection.classList.add('dxp-none');
        }
    }
    /** click listener on click primary button of modal */
    async primaryActionHandler() {
        this.commentUpdated.emit({ 'action': 'delete', 'commentId': this.comments.id, 'isReplied': this.isReply, 'replyOf': this.comments.replyOf });
        await this.element.querySelector('dxp-modal').closeModal();
    }
    /** click listener for cta button */
    async submitHandler(e) {
        const textAreaInput = this.updateSection.querySelector('textarea');
        if (e.target.getAttribute('btn-id') === 'replyLink' && !this.isReplyLinkActive) {
            this.clickReplyComment.emit({ commentId: this.comments.id });
            this.textareaPlaceholder = dxp.i18n.t('CommentsItem:replyplaceholder');
            textAreaInput.value = '';
        }
    }
    /** Action cancel link click */
    actionCancelComment(e) {
        e.preventDefault();
        this.emitAnalyticsData({
            'di_comp_name': e.path[0].tagName,
            'di_comp_title': e.target.getAttribute('title'),
            'di_comp_cta': e.target.getAttribute('btn-id')
        });
    }
    /** Action delete link click */
    actionDeleteComment(e) {
        e.preventDefault();
        this.element.querySelector('dxp-modal').openModal();
        this.emitAnalyticsData({
            'di_comp_name': e.path[0].tagName,
            'di_comp_title': e.target.getAttribute('title'),
            'di_comp_cta': e.target.getAttribute('btn-id')
        });
    }
    /** Action edit link click */
    actionEditComment(e) {
        e.preventDefault();
        const textAreaInput = this.updateSection.querySelector('textarea');
        this.clickEditComment.emit({ commentId: this.comments.id });
        textAreaInput.value = this.seperatedReplyText;
        this.emitAnalyticsData({
            'di_comp_name': e.path[0].tagName,
            'di_comp_title': e.target.getAttribute('title'),
            'di_comp_cta': e.target.getAttribute('btn-id')
        });
    }
    /** Action send link click */
    actionSendComment(e) {
        e.preventDefault();
        const textAreaInput = this.updateSection.querySelector('textarea');
        if (textAreaInput.value.trim()) {
            if (this.updateSection.classList.contains('reply-section')) {
                const commentTextPrependUserId = `${this.comments.createdBy}_~${textAreaInput.value}`;
                const replyToId = this.isReply ? this.comments.replyOf : this.comments.id;
                this.commentUpdated.emit({ 'action': 'reply', 'commentId': replyToId, 'isReplied': this.isReply, 'updatedText': commentTextPrependUserId });
            }
            else {
                this.commentUpdated.emit({
                    'action': 'edit', 'commentId': this.comments.id, 'isReplied': this.isReply,
                    'replyOf': this.comments.replyOf, 'updatedText': textAreaInput.value
                });
            }
        }
        else {
            e.stopPropagation();
        }
        this.emitAnalyticsData({
            'di_comp_name': e.path[0].tagName,
            'di_comp_title': e.target.getAttribute('title'),
            'di_comp_cta': e.target.getAttribute('btn-id')
        });
    }
    /** Reply to comment */
    commentReply() {
        return (h("div", { class: "reply-textarea", ref: el => this.updateSection = el }, h("div", { class: "reply-to-user-id" }, (this.isReply || (!this.isReply && this.isOpenedForReply)) ? dxp.i18n.t('CommentsItem:replyingToText') : '', h("b", null, (this.isOpenedForReply) ?
            (this.comments.createdBy) :
            (this.seperatedUserId))), h("div", { class: "textarea-wrapper dxp-flex" }, h("textarea", { rows: 1, placeholder: this.textareaPlaceholder, class: "comment-edit", maxlength: this.maxCharacters, onClick: () => this.setMode() }, this.seperatedReplyText), h("a", { class: "cancel-btn dxp-inline-block", "btn-id": "cancelLink", title: dxp.i18n.t('CommentsItem:cancelReply'), href: "javascript : void(0)", role: "link", "aria-label": dxp.i18n.t('CommentsItem:cancelReply'), onClick: e => this.actionCancelComment(e) })), h("a", { class: "send-btn dxp-inline-block", "btn-id": "updateLink", title: dxp.i18n.t('CommentsItem:sendReply'), href: "javascript : void(0)", role: "link", "aria-label": dxp.i18n.t('CommentsItem:sendReply'), onClick: e => this.actionSendComment(e) })));
    }
    /** Function decide from where to get user detail */
    config() {
        if (this.userDataContainer && this.userDataContainer === 'COOKIE' && this.getCookie(this.useridKey)) {
            this.currentUserId = this.getCookie(this.useridKey);
            return true;
        }
        if (this.userDataContainer && this.userDataContainer === 'SESSION' && (sessionStorage.getItem(this.useridKey))) {
            this.currentUserId = sessionStorage.getItem(this.useridKey);
            return true;
        }
        if (this.userDataContainer && this.userDataContainer === 'OTHER') {
            this.currentUserId = 'Other';
            return true;
        }
        this.currentUserId = 'Anonymous';
        return true;
    }
    /** emit analytics data */
    emitAnalyticsData(analyticsObj) {
        this.analyticsDataEmitter.emit(analyticsObj);
        dxp.log.info(this.element.tagName, 'emitAnalyticsData()', analyticsObj);
    }
    /** Get user detail form cookie */
    getCookie(name) {
        const v = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
        return v ? v[2] : undefined;
    }
    /** Set updated section to Add/Edit mode */
    setMode() {
        if (this.comments) {
            if (this.isOpenedForReply) {
                // Set reply to add mode
                this.clickReplyComment.emit({ commentId: this.comments.id });
            }
            else {
                // Set comment/reply to edit mode
                this.clickEditComment.emit({ commentId: this.comments.id });
            }
        }
    }
    /** Functionality to display replies */
    showSeparatedComment(repliedString) {
        if (this.isReply && repliedString.indexOf('_~') !== -1) {
            this.seperatedUserId = repliedString.split(/_~(.+)/)[0];
            this.seperatedReplyText = repliedString.split(/_~(.+)/)[1];
        }
        else {
            this.seperatedReplyText = repliedString;
        }
        return (h("div", { class: "added-comment" }, this.seperatedUserId && this.seperatedUserId.length && h("span", { class: "seperated-user-id" }, this.seperatedUserId), this.seperatedReplyText));
    }
    /** Hide/show editDelete section */
    toggleClick(e) {
        if (this.comments && !this.isActionMenuActive) {
            this.clickActionMenu.emit({ commentId: this.comments.id });
        }
        e.preventDefault();
    }
    /** Render the comments */
    render() {
        const styles = [
            h("link", { rel: "stylesheet", href: `` }),
            [this.theme && h("link", { rel: "stylesheet", href: `` })],
            [this.theme && h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-comments.min.css` })]
        ];
        return (h("div", null, (this.comments ?
            h("div", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme }, styles, h("div", { class: "comment-section", "data-comment-id": this.comments.id }, h("div", { class: "comment-header-block" }, h("div", { class: "profile-block" }, h("div", { class: `profile-icon ${(this.currentUserId === this.comments.createdBy) ? 'logged-in' : ''} ` })), h("div", { class: "detail-block" }, h("div", { class: "comment-user" }, this.comments.createdBy), h("div", { class: "comment-time" }, this.comments.commentConvertedTime)), (this.currentUserId === this.comments.createdBy)
                ? (h("div", { class: "action-menu" }, h("a", { href: "javascript : void(0)", class: "action-dots", onClick: e => this.toggleClick(e), "aria-label": dxp.i18n.t('CommentsItem:actionMenu') }), h("div", { class: "action-list-wrapper", ref: el => this.editDeleteSection = el }, h("div", { class: "action-list" }, h("div", { class: "action-arrow" }), h("span", { class: "action-link" }, h("a", { "btn-id": "editLink", href: "javascript : void(0)", role: "link", "aria-label": dxp.i18n.t(COMMENTS_ITEM_EDIT), title: dxp.i18n.t(COMMENTS_ITEM_EDIT), onClick: e => this.actionEditComment(e) }, h("i", { class: "btn-icon edit-icon" }), dxp.i18n.t(COMMENTS_ITEM_EDIT))), h("span", { class: "action-link" }, h("a", { "btn-id": "deleteLink", href: "javascript : void(0)", role: "link", "aria-label": dxp.i18n.t(COMMENTS_ITEM_DELETE), title: dxp.i18n.t(COMMENTS_ITEM_DELETE), onClick: e => this.actionDeleteComment(e) }, h("i", { class: "btn-icon delete-icon" }), dxp.i18n.t(COMMENTS_ITEM_DELETE))))))) : ''), (!this.isOpenedForEditReply) ? this.showSeparatedComment(this.comments.text) : '', (!this.isOpenedForEditReply) &&
                h("div", { class: "options-wrapper" }, h("div", { class: "dxp-inline-block" }, h("dxp-cta", { type: "link", "btn-id": "replyLink", tabindex: "0", text: dxp.i18n.t('CommentsItem:reply') })), h("div", { class: "arrange-right dxp-inline-block" })), this.commentReply(), h("div", { class: "dxp-clear-fix" }), h("dxp-modal", { "modal-title": dxp.i18n.t('CommentsItem:deleteModalTitle'), "modal-description": dxp.i18n.t('CommentsItem:deleteModalDescription'), "is-cancel-button-require": "true", "footer-type": "one-button", "primary-button-text": dxp.i18n.t('CommentsItem:deleteModalPrimaryBtnTxt') })))
            : '')));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "commentObj": ["commentChangeHandler"]
    }; }
    static get style() { return "div.dxp.dxp-comments-item .comment-section{clear:both;margin-bottom:1.75rem}div.dxp.dxp-comments-item .comment-section .added-comment{margin:1rem 0;padding:1rem;border-radius:.25rem;clear:both;word-break:break-word}div.dxp.dxp-comments-item .comment-section .added-comment .seperated-user-id{border-radius:3px;padding:.3rem .5rem;font-weight:600;margin-right:.5rem}div.dxp.dxp-comments-item .comment-section .comment-header-block{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .comment-header-block .profile-block{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block{-ms-flex:1;flex:1;margin:0 .75rem}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-time,div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-user{word-break:break-all}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-time{display:inline-block;direction:ltr}div.dxp.dxp-comments-item .comment-section .options-wrapper{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .options-wrapper .count{margin:0 .75rem}div.dxp.dxp-comments-item .comment-section .options-wrapper .arrange-right{margin-left:auto}div.dxp.dxp-comments-item .comment-section .action-menu{position:relative}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper{z-index:5;position:absolute;visibility:hidden;opacity:0;right:-.5rem;top:100%;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;padding-top:.5rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list{border-radius:.25rem;padding:.5rem 0;z-index:5;width:11rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link{display:block;padding:.45rem 1.25rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a:hover{text-decoration:underline}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a .btn-icon{display:inline-block;width:1rem;margin-right:.75rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-arrow{height:0;width:0;border-left:.5rem solid transparent;border-right:.5rem solid transparent;position:absolute;top:0;right:.5rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper.is-visible{visibility:visible;opacity:1}div.dxp.dxp-comments-item .comment-section .reply-textarea{margin-bottom:1.75rem;margin-top:1rem;position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}div.dxp.dxp-comments-item .comment-section .reply-textarea .textarea-wrapper{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}div.dxp.dxp-comments-item .comment-section .reply-textarea textarea.comment-edit{padding:1rem 3rem 1rem 1rem;-ms-flex:1;flex:1}div.dxp.dxp-comments-item .comment-section .reply-textarea .send-btn{width:3rem;height:3rem;border-radius:50%;cursor:pointer;overflow:hidden;padding:.3rem}div.dxp.dxp-comments-item .comment-section .reply-textarea .cancel-btn{position:absolute;right:.75rem;top:.75rem;cursor:pointer;overflow:hidden;padding:.25rem;width:2rem;height:2rem;border-radius:50%}div.dxp.dxp-comments-item .comment-section .reply-textarea .reply-to-user-id{margin-bottom:.3rem;-ms-flex:0 0 100%;flex:0 0 100%}div.dxp.dxp-comments-item[dir=rtl] .comment-section .added-comment .seperated-user-id{margin-right:0;margin-left:.5rem;display:inline-block}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper{right:unset;left:-.5rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper .action-list .action-link a .btn-icon{margin-right:0;margin-left:.75rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper .action-list .action-arrow{right:unset;left:.5rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section textarea.comment-edit{padding:1rem 1rem 1rem 3rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .cancel-btn{right:unset;left:4rem}"; }
};

const messages = {
    'en': {
        closeModal: 'Close modal',
        demoButton: 'Show Modal',
        demoButtonAccessibilityText: 'Opens a modal',
        cancel: 'Cancel'
    }
};

const NESTED_LOGO = 'NESTED:dxp-logo';
const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** String set width, top and right for sidebar modal */
        this.styleString = {
            'width': '',
            'top': '',
            'right': ''
        };
        /** button position */
        this.buttonPosition = 'left';
        /** close modal on Esc keypress */
        this.closeOnEscKey = true;
        /** close modal on click outside of modal */
        this.closeOnOutsideClick = true;
        /** configurable property for cancel button */
        this.isCancelButtonRequire = false;
        /** configurable property for close button */
        this.isCloseButtonRequired = true;
        /** configure sidebar position */
        this.sidebarPosition = 'right';
        this.analyticsDataEmitter = createEvent(this, "dxp_comp", 7);
        this.modalClose = createEvent(this, "modalClose", 7);
        this.modalOpen = createEvent(this, "modalOpen", 7);
        this.modalPrimaryButtonAction = createEvent(this, "modalPrimaryButtonAction", 7);
        this.modalSecondaryButtonAction = createEvent(this, "modalSecondaryButtonAction", 7);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.base.i18Init(dxp, 'Modal', messages);
        if (this.width) {
            this.styleString['width'] = `${this.width}px`;
        }
        if (this.top) {
            this.styleString['top'] = `${this.top}px`;
        }
        if (this.right) {
            this.styleString['right'] = `${this.right}px`;
        }
    }
    /** actions to be performed prior to component loading */
    componentDidLoad() {
        if (this.modalTitle) {
            if (this.element.querySelector('dxp-logo')) {
                this.element.querySelector('dxp-logo').remove();
            }
        }
    }
    /** handle click event */
    async onHandleClickEvent(event) {
        const target = event.target ? event.composedPath()[0] : event.target;
        if (target.classList.contains('dxp-comp-modal') && this.isCloseButtonRequired && this.closeOnOutsideClick) {
            await this.closeModal();
        }
        this.base.routingEventListener(event);
    }
    /** handle keydown event */
    async onKeyDownHandler(event) {
        const target = event.target ? event.composedPath()[0] : event.target;
        // handle esc keypress
        if (event.keyCode === 27 && this.isCloseButtonRequired && this.closeOnEscKey) {
            await this.closeModal();
        }
        else {
            const cancelButton = this.element ? this.element.querySelector('.cancel-button') : this.element.querySelector('.cancel-button');
            const closeModalIcon = this.element ? this.element.querySelector('.btn-close') : this.element.querySelector('.btn-close');
            if (target.classList.contains('secondary-button') && !cancelButton) {
                this.focusTimer(closeModalIcon);
            }
            if (event.keyCode === 9) {
                this.handleFocusEvents(closeModalIcon, event, target);
            }
        }
    }
    /** Method to close modal */
    async closeModal() {
        this.emitAnalyticsData(dxp.i18n.t('Modal:cancel'));
        const shadowRoot = this.element ? this.element : this.element;
        const demoButton = shadowRoot.querySelector('#demoButton');
        shadowRoot.querySelector('.dxp-modal').classList.remove('show');
        shadowRoot.querySelector('.dxp-comp-modal').classList.remove('visible');
        document.querySelector('body').style.overflow = 'auto';
        if (demoButton) {
            setTimeout(() => {
                this.focusElement(demoButton);
            });
        }
        this.modalClose.emit();
    }
    /** Method to open modal */
    async openModal() {
        this.emitAnalyticsData(dxp.i18n.t('Modal:demoButton'));
        const shadowRoot = this.element ? this.element : this.element;
        shadowRoot.querySelector('.dxp-modal').classList.add('show');
        shadowRoot.querySelector('.dxp-comp-modal').classList.add('visible');
        document.querySelector('body').style.overflow = 'hidden';
        this.modalOpen.emit();
    }
    /** emit analytics data */
    emitAnalyticsData(buttonText) {
        const analyticsObj = {
            'di_comp_name': this.element.tagName,
            'di_comp_title': this.modalTitle && this.modalTitle.length !== 0 ? this.modalTitle : '',
            'di_comp_cta': buttonText
        };
        this.analyticsDataEmitter.emit(analyticsObj);
        dxp.log.info(this.element.tagName, 'emitAnalyticsData()', analyticsObj);
    }
    /** method to focus input element  */
    focusElement(elem) {
        if (elem) {
            elem.focus();
        }
    }
    /** method to focus input element  */
    focusTimer(ele) {
        setTimeout(() => {
            this.focusElement(ele);
        });
    }
    /** handle modal close for accessibility */
    handleCloseEvents(closeModalIcon, event, target) {
        const footerContainerLastChild = this.element ? this.element.querySelector('.footer-button').lastChild
            : this.element.querySelector('.footer-button').lastChild;
        if (target.classList.contains('cancel-button') && !event.shiftKey) {
            this.focusTimer(closeModalIcon);
        }
        if (target.classList.contains('btn-close')) {
            const logoContainer = this.element ? this.element.querySelector('.modal-title') : this.element.querySelector('.modal-title');
            this.focusTimer(logoContainer);
        }
        if (event.shiftKey && target.classList.contains('dxp-icon-close')) {
            this.focusElement(footerContainerLastChild);
        }
    }
    /** handle focus events on buttons for accessibility */
    handleFocusEvents(closeModalIcon, event, target) {
        const secondaryButton = this.element ? this.element.querySelector('.secondary-button') : this.element.querySelector('.secondary-button');
        this.handleCloseEvents(closeModalIcon, event, target);
        if (target.classList.contains('primary-button') && !secondaryButton && !event.shiftKey) {
            this.focusTimer(closeModalIcon);
        }
        if (target.classList.contains('demo-button')) {
            const logoContainer = this.element ? this.element.querySelector('.logo-container') : this.element.querySelector('.logo-container');
            this.focusTimer(logoContainer);
        }
        if (event.shiftKey && (target.classList.contains('logo-img') || target.classList.contains('modal-title-text'))) {
            this.focusTimer(closeModalIcon);
        }
    }
    /** Method to close modal through (space and enter) keys */
    async handleKeyDownCloseModal(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            await this.closeModal();
        }
    }
    /** Function to be called on primary button action */
    primaryActionHandler() {
        this.emitAnalyticsData(this.primaryButtonText);
        if (this.linkUrlFooterPrimary) {
            if (this.linkUrlFooterPrimary !== '' && this.openInNewTabFooterPrimary) {
                window.open(this.linkUrlFooterPrimary, '_blank');
            }
            else {
                location.href = this.linkUrlFooterPrimary;
            }
        }
        this.modalPrimaryButtonAction.emit();
    }
    /** render buttons for modal */
    renderButtons() {
        const oneButton = h("button", { class: "dxp-btn dxp-btn-primary dxp-btn-lg primary-button", id: "primaryButton", onClick: () => { this.primaryActionHandler(); }, title: this.linkTitleFooterPrimary, "aria-label": this.accessibilityTextFooterPrimary }, this.primaryButtonText);
        const twoButtons = [oneButton,
            h("button", { class: "dxp-btn dxp-btn-primary dxp-btn-lg secondary-button", id: "secondaryButton", onClick: () => { this.secondaryActionHandler(); }, title: this.linkTitleFooterSecondary, "aria-label": this.accessibilityTextFooterSecondary }, this.secondaryButtonText)];
        return (h("div", { class: `sc-dxp-modal dxp-modal-footer align-${this.buttonPosition}` }, h("div", { class: "sc-dxp-modal footer-button" }, this.footerType === 'two-button' ?
            twoButtons
            : this.footerType === 'one-button' ?
                oneButton : '', this.isCancelButtonRequire &&
            h("button", { class: "dxp-btn dxp-btn-primary dxp-btn-lg cancel-button", id: "cancelButton", title: this.linkTitleFooterSecondary, "aria-label": this.accessibilityTextFooterSecondary, onClick: () => this.closeModal() }, dxp.i18n.t('Modal:cancel')))));
    }
    /** render buttons for modal */
    renderModalBody() {
        const logo = () => {
            if (!this.headerLogo[NESTED_LOGO]) {
                return h("dxp-logo", { src: this.headerLogo['src'], "src-sm": this.headerLogo['srcSm'], href: this.headerLogo['href'], alt: this.headerLogo['alt'], target: this.headerLogo['target'] });
            }
            return h("dxp-logo", { src: this.headerLogo['src'], "src-sm": this.headerLogo['srcSm'], href: this.headerLogo['href'], alt: this.headerLogo['alt'], target: this.headerLogo['target'] }, h("dxp-logo", { src: this.headerLogo[NESTED_LOGO].src, "src-sm": this.headerLogo[NESTED_LOGO].srcSm, href: this.headerLogo[NESTED_LOGO].href, alt: this.headerLogo[NESTED_LOGO].alt, target: this.headerLogo[NESTED_LOGO].target }));
        };
        return (h("div", { class: "sc-dxp-modal dxp-modal-body" }, h("div", { class: "modal-title", tabindex: "-1" }, this.modalTitle ? h("h3", { class: "modal-title-text", tabindex: "0" }, this.modalTitle) : this.headerLogo ? logo() : h("slot", { name: "logo" }), this.modalSubtitle && h("p", { class: "sub-title" }, this.modalSubtitle, "\u200E")), this.modalDescription &&
            h("div", { class: "modal-description" }, h("div", { innerHTML: `${this.modalDescription}&lrm;` })), h("slot", null)));
    }
    /** Function to be called on secondary button action */
    secondaryActionHandler() {
        this.emitAnalyticsData(this.secondaryButtonText);
        if (this.linkUrlFooterSecondary) {
            if (this.linkUrlFooterSecondary !== '' && this.openInNewTabFooterSecondary) {
                window.open(this.linkUrlFooterSecondary, '_blank');
            }
            else {
                location.href = this.linkUrlFooterSecondary;
            }
        }
        this.modalSecondaryButtonAction.emit();
    }
    /** Render the modal */
    render() {
        dxp.log.debug(this.element.tagName, 'render()', `in dxp-modal render() : ${"DEVELOPMENT"}`);
        const styles = (h("span", null, h("link", { rel: "stylesheet", href: `` }), this.theme && h("link", { rel: "stylesheet", href: `` }), this.theme && h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-modal.min.css` }), this.theme && h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-cta.min.css` }), this.dtmUrl && (h("script", { src: this.dtmUrl }))));
        return (h("div", null, this.demo ? h("button", { class: "demo-button", "aria-describedby": "demoButtonAccessibility", id: "demoButton", onClick: () => this.openModal() }, dxp.i18n.t('Modal:demoButton')) : '', this.demo ? h("p", { id: "demoButtonAccessibility", class: "dxp-sr-only" }, dxp.i18n.t('Modal:demoButtonAccessibilityText')) : '', h("div", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme }, styles, h("div", { class: `sc-dxp-modal dxp-comp-modal main-section dxp-col-12 ${this.isSidebar ? 'dxp-sidebar-container' : ''}` }, h("div", { class: `sc-dxp-modal dxp-modal-dialog dxp-col-xl-8 dxp-col-lg-8 dxp-col-md-10 ${this.isSidebar ? `dxp-sidebar-wrapper ${this.sidebarPosition}` : ''}`, "aria-modal": "true", role: "application", tabindex: "-1", style: this.styleString }, this.isCloseButtonRequired ?
            h("span", { tabindex: "-1", class: "sc-dxp-modal btn-close dxp-icon dxp-icon-close", role: "button", "aria-label": dxp.i18n.t('Modal:closeModal'), onClick: () => this.closeModal(), onKeyDown: e => this.handleKeyDownCloseModal(e) })
            : '', this.renderModalBody(), this.footerType !== 'no-button' || this.isCancelButtonRequire ?
            this.renderButtons()
            : '')))));
    }
    get element() { return getElement(this); }
    static get style() { return "div.dxp.dxp-modal.show{display:block}\@media (min-width:576px){div.dxp.dxp-modal.show{position:unset}}div.dxp.dxp-modal .dxp-comp-modal{display:none;opacity:0;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in;height:100vh}div.dxp.dxp-modal .dxp-comp-modal.visible{opacity:1;display:block;z-index:999}div.dxp.dxp-modal .dxp-comp-modal .modal-description p{margin-bottom:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body{position:relative}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title{margin-bottom:1.125rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title-text{direction:ltr;display:inline-block;margin:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title p{margin:.375rem 0 0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:2.5rem 2rem 1.5rem;overflow-y:scroll}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-header{padding:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer{display:block;padding:0;margin-top:2.25rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-center{text-align:center}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-right{text-align:right}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-left{text-align:left}div.dxp.dxp-modal .dxp-comp-modal .footer-button{display:block}div.dxp.dxp-modal .dxp-comp-modal .footer-button button{outline:none;width:100%}div.dxp.dxp-modal .dxp-comp-modal .btn-close{position:absolute;right:1rem;top:1rem;width:2.125rem;height:2.125rem;text-align:center;cursor:pointer}div.dxp.dxp-modal .dxp-comp-modal .btn-close:focus{border:1px solid}div.dxp.dxp-modal .dxp-comp-modal.dxp-sidebar-container{background:transparent}\@media (min-width:576px){div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:3rem 2.5rem 2rem;margin:0 auto}div.dxp.dxp-modal .dxp-comp-modal .footer-button{display:inline-block}div.dxp.dxp-modal .dxp-comp-modal .footer-button button{width:auto}div.dxp.dxp-modal .dxp-comp-modal .footer-button button+button{margin-left:1rem}}\@media (min-width:768px){div.dxp.dxp-modal .dxp-comp-modal{position:fixed;top:0;left:0;width:100%}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:999;height:auto;overflow-y:auto;max-height:100vh;border-radius:4px;padding:3.5rem 3rem 2.5rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper{-webkit-transform:none;transform:none;margin:0;top:0;height:100vh;overflow-y:auto;width:400px;max-width:100vw;border-radius:0;padding:4.25rem 2.625rem 2.5rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper.right{right:0;left:auto}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper.left{right:auto;left:0}}\@media (min-width:992px){div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:4rem 3.5rem 3rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper{padding:5rem 3.125rem 3rem}}div.dxp.dxp-modal .modal-open-prevent-scrolling{overflow:hidden}div.dxp.dxp-modal .logo-container{margin-bottom:.9375rem}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .btn-close{right:auto;left:1rem}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .dxp-modal-footer.align-right{text-align:left}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .dxp-modal-footer.align-left{text-align:right}\@media (min-width:576px){div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .footer-button button+button{margin-left:0;margin-right:1rem}}"; }
};

export { CommentsItem as dxp_comments_item, Modal as dxp_modal };

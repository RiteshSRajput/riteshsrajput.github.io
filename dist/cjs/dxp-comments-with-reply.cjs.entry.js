'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core$1 = require('./core-ad292530.js');
const baseComponent_esm = require('./base-component.esm-1dd4e54c.js');
const messages = require('./messages-d765fb8a.js');

const CommentsWithReply = class {
    constructor(hostRef) {
        core$1.registerInstance(this, hostRef);
        /** count for show more */
        this.stepCount = 1;
        /** prop holds get user id from */
        this.userDataContainer = 'COOKIE';
    }
    /** Listener that looks for commentObj to be assigned/changed externally */
    commentChangeHandler(updatedObj) {
        this.comments = typeof (updatedObj) === 'string' ? JSON.parse(updatedObj) : updatedObj;
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new baseComponent_esm.BaseComponent(this, core$1.dxp);
        this.base.i18Init(core$1.dxp, 'CommentsWithReply', messages.messages);
        this.comments = typeof (this.commentObj) === 'string' ? JSON.parse(this.commentObj) : this.commentObj;
        this.showReplySection = false;
    }
    /** click listener for cta button */
    submitHandler(e) {
        if (e.target.getAttribute('btn-id') === 'load-more-replies') {
            this.stepCount++;
        }
    }
    /** click listener after clicking cta from particular comment or reply */
    async updateCommentObj(event) {
        if (event.detail.action === 'reply') {
            this.showReplySection = true;
        }
    }
    /** Functionality to display replies */
    renderList(list) {
        this.lastIndex = (this.repliesLimit * this.stepCount);
        return list.slice(0, this.lastIndex).map(reply => core$1.h("dxp-comments-item", { "is-reply": "true", "max-characters": this.maxCharacters, "user-data-container": this.userDataContainer, "userid-key": this.useridKey, "comment-obj": JSON.stringify(reply) }));
    }
    /** Render the comments */
    render() {
        core$1.dxp.log.debug(this.element.tagName, 'render()', `in dxp-comments-with-reply render() : ${"DEVELOPMENT"}`);
        return (core$1.h("div", { class: this.base.componentClass(), dir: this.dir, "data-theme": this.theme }, core$1.h("dxp-comments-item", { "is-reply": "false", "max-characters": this.maxCharacters, "user-data-container": this.userDataContainer, "userid-key": this.useridKey, "comment-obj": JSON.stringify(this.comments) }), (this.comments && this.comments.replies.length) ?
            (core$1.h("div", { class: "option-wrapper" }, core$1.h("a", { href: "javascript : void(0)", "btn-id": "show-all-replies", class: this.showReplySection ? 'hide-link' : 'show-link', onClick: e => {
                    e.preventDefault();
                    this.showReplySection = !this.showReplySection;
                } }, this.showReplySection ?
                core$1.dxp.i18n.t('CommentsWithReply:hideTxt', { repliesCount: this.comments.replies.length })
                :
                    core$1.dxp.i18n.t('CommentsWithReply:showTxt', { repliesCount: this.comments.replies.length }), core$1.h("i", { class: "caret-icon" })))) : '', (this.showReplySection) ?
            (core$1.h("div", { class: "reply-section is-visible" }, this.renderList(this.comments.replies), (this.lastIndex < this.comments.replies.length) &&
                (core$1.h("dxp-cta", { type: "button", "button-type": "secondary", "btn-id": "load-more-replies", text: core$1.dxp.i18n.t('CommentsWithReply:loadmoreReplies'), onClick: e => this.submitHandler(e) })))) : '', core$1.h("div", { class: "dxp-clear-fix" })));
    }
    get element() { return core$1.getElement(this); }
    static get watchers() { return {
        "commentObj": ["commentChangeHandler"]
    }; }
    static get style() { return "div.dxp.dxp-comments-with-reply{margin:.5rem 0 1.75rem}div.dxp.dxp-comments-with-reply .reply-section{margin-left:4rem;display:none;-webkit-transition:all .5s ease-in;transition:all .5s ease-in}div.dxp.dxp-comments-with-reply .reply-section.is-visible{display:block}\@media (max-width:576px){div.dxp.dxp-comments-with-reply .reply-section{margin-left:2rem}}div.dxp.dxp-comments-with-reply .option-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse}div.dxp.dxp-comments-with-reply .option-wrapper a{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-with-reply .option-wrapper a:hover{text-decoration:underline}div.dxp.dxp-comments-with-reply .option-wrapper a .caret-icon{width:1rem;display:inline-block;margin-left:.75rem;-webkit-transition:-webkit-transform .2s linear;transition:-webkit-transform .2s linear;transition:transform .2s linear;transition:transform .2s linear,-webkit-transform .2s linear}div.dxp.dxp-comments-with-reply .option-wrapper a.hide-link .caret-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}div.dxp.dxp-comments-with-reply .action-link{display:block;padding:.25rem 1.25rem;-webkit-transition:color,background-color .15s ease-in;transition:color,background-color .15s ease-in}div.dxp.dxp-comments-with-reply[dir=rtl] .reply-section{margin-left:0;margin-right:4rem}\@media (max-width:576px){div.dxp.dxp-comments-with-reply[dir=rtl] .reply-section{margin-left:0;margin-right:2rem}}div.dxp.dxp-comments-with-reply[dir=rtl] .option-wrapper a .caret-icon{margin-right:.75rem;margin-left:0}"; }
};

exports.dxp_comments_with_reply = CommentsWithReply;

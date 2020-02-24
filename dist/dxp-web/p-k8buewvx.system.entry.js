var __awaiter=this&&this.__awaiter||function(t,e,i,o){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function r(t){try{l(o.next(t))}catch(e){s(e)}}function a(t){try{l(o["throw"](t))}catch(e){s(e)}}function l(t){t.done?i(t.value):n(t.value).then(r,a)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},o,n,s,r;return r={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(e){return l([t,e])}}function l(r){if(o)throw new TypeError("Generator is already executing.");while(i)try{if(o=1,n&&(s=r[0]&2?n["return"]:r[0]?n["throw"]||((s=n["return"])&&s.call(n),0):n.next)&&!(s=s.call(n,r[1])).done)return s;if(n=0,s)r=[r[0]&2,s.value];switch(r[0]){case 0:case 1:s=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;n=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!s||r[1]>s[0]&&r[1]<s[3])){i.label=r[1];break}if(r[0]===6&&i.label<s[1]){i.label=s[1];s=r;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(r);break}if(s[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(a){r=[6,a];n=0}finally{o=s=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js","./p-da23bd6d.system.js"],(function(t){"use strict";var e,i,o,n,s,r,a;return{setters:[function(t){e=t.r;i=t.c;o=t.d;n=t.h;s=t.g},function(t){r=t.B},function(t){a=t.m}],execute:function(){var l="CommentsItem:edit";var c="CommentsItem:delete";var d=t("dxp_comments_item",function(){function t(t){e(this,t);this.textareaPlaceholder="";this.userDataContainer="COOKIE";this.analyticsDataEmitter=i(this,"dxp_comp",7);this.clickActionMenu=i(this,"clickActionMenu",7);this.clickEditComment=i(this,"clickEditComment",7);this.clickReplyComment=i(this,"clickReplyComment",7);this.commentUpdated=i(this,"commentUpdated",7)}t.prototype.commentChangeHandler=function(t){this.comments=typeof t==="string"?JSON.parse(t):t};t.prototype.componentWillLoad=function(){this.base=new r(this,o);this.base.i18Init(o,"CommentsItem",a);this.comments=typeof this.commentObj==="string"?JSON.parse(this.commentObj):this.commentObj;this.config()};t.prototype.componentDidLoad=function(){if(this.updateSection){this.updateSection.classList.add("dxp-none")}};t.prototype.primaryActionHandler=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.commentUpdated.emit({action:"delete",commentId:this.comments.id,isReplied:this.isReply,replyOf:this.comments.replyOf});return[4,this.element.querySelector("dxp-modal").closeModal()];case 1:t.sent();return[2]}}))}))};t.prototype.submitHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){e=this.updateSection.querySelector("textarea");if(t.target.getAttribute("btn-id")==="replyLink"&&!this.isReplyLinkActive){this.clickReplyComment.emit({commentId:this.comments.id});this.textareaPlaceholder=o.i18n.t("CommentsItem:replyplaceholder");e.value=""}return[2]}))}))};t.prototype.actionCancelComment=function(t){t.preventDefault();this.emitAnalyticsData({di_comp_name:t.path[0].tagName,di_comp_title:t.target.getAttribute("title"),di_comp_cta:t.target.getAttribute("btn-id")})};t.prototype.actionDeleteComment=function(t){t.preventDefault();this.element.querySelector("dxp-modal").openModal();this.emitAnalyticsData({di_comp_name:t.path[0].tagName,di_comp_title:t.target.getAttribute("title"),di_comp_cta:t.target.getAttribute("btn-id")})};t.prototype.actionEditComment=function(t){t.preventDefault();var e=this.updateSection.querySelector("textarea");this.clickEditComment.emit({commentId:this.comments.id});e.value=this.seperatedReplyText;this.emitAnalyticsData({di_comp_name:t.path[0].tagName,di_comp_title:t.target.getAttribute("title"),di_comp_cta:t.target.getAttribute("btn-id")})};t.prototype.actionSendComment=function(t){t.preventDefault();var e=this.updateSection.querySelector("textarea");if(e.value.trim()){if(this.updateSection.classList.contains("reply-section")){var i=this.comments.createdBy+"_~"+e.value;var o=this.isReply?this.comments.replyOf:this.comments.id;this.commentUpdated.emit({action:"reply",commentId:o,isReplied:this.isReply,updatedText:i})}else{this.commentUpdated.emit({action:"edit",commentId:this.comments.id,isReplied:this.isReply,replyOf:this.comments.replyOf,updatedText:e.value})}}else{t.stopPropagation()}this.emitAnalyticsData({di_comp_name:t.path[0].tagName,di_comp_title:t.target.getAttribute("title"),di_comp_cta:t.target.getAttribute("btn-id")})};t.prototype.commentReply=function(){var t=this;return n("div",{class:"reply-textarea",ref:function(e){return t.updateSection=e}},n("div",{class:"reply-to-user-id"},this.isReply||!this.isReply&&this.isOpenedForReply?o.i18n.t("CommentsItem:replyingToText"):"",n("b",null,this.isOpenedForReply?this.comments.createdBy:this.seperatedUserId)),n("div",{class:"textarea-wrapper dxp-flex"},n("textarea",{rows:1,placeholder:this.textareaPlaceholder,class:"comment-edit",maxlength:this.maxCharacters,onClick:function(){return t.setMode()}},this.seperatedReplyText),n("a",{class:"cancel-btn dxp-inline-block","btn-id":"cancelLink",title:o.i18n.t("CommentsItem:cancelReply"),href:"javascript : void(0)",role:"link","aria-label":o.i18n.t("CommentsItem:cancelReply"),onClick:function(e){return t.actionCancelComment(e)}})),n("a",{class:"send-btn dxp-inline-block","btn-id":"updateLink",title:o.i18n.t("CommentsItem:sendReply"),href:"javascript : void(0)",role:"link","aria-label":o.i18n.t("CommentsItem:sendReply"),onClick:function(e){return t.actionSendComment(e)}}))};t.prototype.config=function(){if(this.userDataContainer&&this.userDataContainer==="COOKIE"&&this.getCookie(this.useridKey)){this.currentUserId=this.getCookie(this.useridKey);return true}if(this.userDataContainer&&this.userDataContainer==="SESSION"&&sessionStorage.getItem(this.useridKey)){this.currentUserId=sessionStorage.getItem(this.useridKey);return true}if(this.userDataContainer&&this.userDataContainer==="OTHER"){this.currentUserId="Other";return true}this.currentUserId="Anonymous";return true};t.prototype.emitAnalyticsData=function(t){this.analyticsDataEmitter.emit(t);o.log.info(this.element.tagName,"emitAnalyticsData()",t)};t.prototype.getCookie=function(t){var e=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return e?e[2]:undefined};t.prototype.setMode=function(){if(this.comments){if(this.isOpenedForReply){this.clickReplyComment.emit({commentId:this.comments.id})}else{this.clickEditComment.emit({commentId:this.comments.id})}}};t.prototype.showSeparatedComment=function(t){if(this.isReply&&t.indexOf("_~")!==-1){this.seperatedUserId=t.split(/_~(.+)/)[0];this.seperatedReplyText=t.split(/_~(.+)/)[1]}else{this.seperatedReplyText=t}return n("div",{class:"added-comment"},this.seperatedUserId&&this.seperatedUserId.length&&n("span",{class:"seperated-user-id"},this.seperatedUserId),this.seperatedReplyText)};t.prototype.toggleClick=function(t){if(this.comments&&!this.isActionMenuActive){this.clickActionMenu.emit({commentId:this.comments.id})}t.preventDefault()};t.prototype.render=function(){var t=this;var e=[n("link",{rel:"stylesheet",href:""}),[this.theme&&n("link",{rel:"stylesheet",href:""})],[this.theme&&n("link",{rel:"stylesheet",href:o.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-comments.min.css"})]];return n("div",null,this.comments?n("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},e,n("div",{class:"comment-section","data-comment-id":this.comments.id},n("div",{class:"comment-header-block"},n("div",{class:"profile-block"},n("div",{class:"profile-icon "+(this.currentUserId===this.comments.createdBy?"logged-in":"")+" "})),n("div",{class:"detail-block"},n("div",{class:"comment-user"},this.comments.createdBy),n("div",{class:"comment-time"},this.comments.commentConvertedTime)),this.currentUserId===this.comments.createdBy?n("div",{class:"action-menu"},n("a",{href:"javascript : void(0)",class:"action-dots",onClick:function(e){return t.toggleClick(e)},"aria-label":o.i18n.t("CommentsItem:actionMenu")}),n("div",{class:"action-list-wrapper",ref:function(e){return t.editDeleteSection=e}},n("div",{class:"action-list"},n("div",{class:"action-arrow"}),n("span",{class:"action-link"},n("a",{"btn-id":"editLink",href:"javascript : void(0)",role:"link","aria-label":o.i18n.t(l),title:o.i18n.t(l),onClick:function(e){return t.actionEditComment(e)}},n("i",{class:"btn-icon edit-icon"}),o.i18n.t(l))),n("span",{class:"action-link"},n("a",{"btn-id":"deleteLink",href:"javascript : void(0)",role:"link","aria-label":o.i18n.t(c),title:o.i18n.t(c),onClick:function(e){return t.actionDeleteComment(e)}},n("i",{class:"btn-icon delete-icon"}),o.i18n.t(c)))))):""),!this.isOpenedForEditReply?this.showSeparatedComment(this.comments.text):"",!this.isOpenedForEditReply&&n("div",{class:"options-wrapper"},n("div",{class:"dxp-inline-block"},n("dxp-cta",{type:"link","btn-id":"replyLink",tabindex:"0",text:o.i18n.t("CommentsItem:reply")})),n("div",{class:"arrange-right dxp-inline-block"})),this.commentReply(),n("div",{class:"dxp-clear-fix"}),n("dxp-modal",{"modal-title":o.i18n.t("CommentsItem:deleteModalTitle"),"modal-description":o.i18n.t("CommentsItem:deleteModalDescription"),"is-cancel-button-require":"true","footer-type":"one-button","primary-button-text":o.i18n.t("CommentsItem:deleteModalPrimaryBtnTxt")}))):"")};Object.defineProperty(t.prototype,"element",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{commentObj:["commentChangeHandler"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"div.dxp.dxp-comments-item .comment-section{clear:both;margin-bottom:1.75rem}div.dxp.dxp-comments-item .comment-section .added-comment{margin:1rem 0;padding:1rem;border-radius:.25rem;clear:both;word-break:break-word}div.dxp.dxp-comments-item .comment-section .added-comment .seperated-user-id{border-radius:3px;padding:.3rem .5rem;font-weight:600;margin-right:.5rem}div.dxp.dxp-comments-item .comment-section .comment-header-block{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .comment-header-block .profile-block{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block{-ms-flex:1;flex:1;margin:0 .75rem}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-time,div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-user{word-break:break-all}div.dxp.dxp-comments-item .comment-section .comment-header-block .detail-block .comment-time{display:inline-block;direction:ltr}div.dxp.dxp-comments-item .comment-section .options-wrapper{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .options-wrapper .count{margin:0 .75rem}div.dxp.dxp-comments-item .comment-section .options-wrapper .arrange-right{margin-left:auto}div.dxp.dxp-comments-item .comment-section .action-menu{position:relative}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper{z-index:5;position:absolute;visibility:hidden;opacity:0;right:-.5rem;top:100%;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;padding-top:.5rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list{border-radius:.25rem;padding:.5rem 0;z-index:5;width:11rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link{display:block;padding:.45rem 1.25rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a{display:-ms-flexbox;display:flex}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a:hover{text-decoration:underline}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-link a .btn-icon{display:inline-block;width:1rem;margin-right:.75rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper .action-list .action-arrow{height:0;width:0;border-left:.5rem solid transparent;border-right:.5rem solid transparent;position:absolute;top:0;right:.5rem}div.dxp.dxp-comments-item .comment-section .action-menu .action-list-wrapper.is-visible{visibility:visible;opacity:1}div.dxp.dxp-comments-item .comment-section .reply-textarea{margin-bottom:1.75rem;margin-top:1rem;position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}div.dxp.dxp-comments-item .comment-section .reply-textarea .textarea-wrapper{-ms-flex:1 1 auto;flex:1 1 auto;position:relative}div.dxp.dxp-comments-item .comment-section .reply-textarea textarea.comment-edit{padding:1rem 3rem 1rem 1rem;-ms-flex:1;flex:1}div.dxp.dxp-comments-item .comment-section .reply-textarea .send-btn{width:3rem;height:3rem;border-radius:50%;cursor:pointer;overflow:hidden;padding:.3rem}div.dxp.dxp-comments-item .comment-section .reply-textarea .cancel-btn{position:absolute;right:.75rem;top:.75rem;cursor:pointer;overflow:hidden;padding:.25rem;width:2rem;height:2rem;border-radius:50%}div.dxp.dxp-comments-item .comment-section .reply-textarea .reply-to-user-id{margin-bottom:.3rem;-ms-flex:0 0 100%;flex:0 0 100%}div.dxp.dxp-comments-item[dir=rtl] .comment-section .added-comment .seperated-user-id{margin-right:0;margin-left:.5rem;display:inline-block}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper{right:unset;left:-.5rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper .action-list .action-link a .btn-icon{margin-right:0;margin-left:.75rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .action-menu .action-list-wrapper .action-list .action-arrow{right:unset;left:.5rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section textarea.comment-edit{padding:1rem 1rem 1rem 3rem}div.dxp.dxp-comments-item[dir=rtl] .comment-section .cancel-btn{right:unset;left:4rem}"},enumerable:true,configurable:true});return t}());var m={en:{closeModal:"Close modal",demoButton:"Show Modal",demoButtonAccessibilityText:"Opens a modal",cancel:"Cancel"}};var h="NESTED:dxp-logo";var u=t("dxp_modal",function(){function t(t){e(this,t);this.styleString={width:"",top:"",right:""};this.buttonPosition="left";this.closeOnEscKey=true;this.closeOnOutsideClick=true;this.isCancelButtonRequire=false;this.isCloseButtonRequired=true;this.sidebarPosition="right";this.analyticsDataEmitter=i(this,"dxp_comp",7);this.modalClose=i(this,"modalClose",7);this.modalOpen=i(this,"modalOpen",7);this.modalPrimaryButtonAction=i(this,"modalPrimaryButtonAction",7);this.modalSecondaryButtonAction=i(this,"modalSecondaryButtonAction",7)}t.prototype.componentWillLoad=function(){this.base=new r(this,o);this.base.i18Init(o,"Modal",m);if(this.width){this.styleString["width"]=this.width+"px"}if(this.top){this.styleString["top"]=this.top+"px"}if(this.right){this.styleString["right"]=this.right+"px"}};t.prototype.componentDidLoad=function(){if(this.modalTitle){if(this.element.querySelector("dxp-logo")){this.element.querySelector("dxp-logo").remove()}}};t.prototype.onHandleClickEvent=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(i){switch(i.label){case 0:e=t.target?t.composedPath()[0]:t.target;if(!(e.classList.contains("dxp-comp-modal")&&this.isCloseButtonRequired&&this.closeOnOutsideClick))return[3,2];return[4,this.closeModal()];case 1:i.sent();i.label=2;case 2:this.base.routingEventListener(t);return[2]}}))}))};t.prototype.onKeyDownHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i,o;return __generator(this,(function(n){switch(n.label){case 0:e=t.target?t.composedPath()[0]:t.target;if(!(t.keyCode===27&&this.isCloseButtonRequired&&this.closeOnEscKey))return[3,2];return[4,this.closeModal()];case 1:n.sent();return[3,3];case 2:i=this.element?this.element.querySelector(".cancel-button"):this.element.querySelector(".cancel-button");o=this.element?this.element.querySelector(".btn-close"):this.element.querySelector(".btn-close");if(e.classList.contains("secondary-button")&&!i){this.focusTimer(o)}if(t.keyCode===9){this.handleFocusEvents(o,t,e)}n.label=3;case 3:return[2]}}))}))};t.prototype.closeModal=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;var i=this;return __generator(this,(function(n){this.emitAnalyticsData(o.i18n.t("Modal:cancel"));t=this.element?this.element:this.element;e=t.querySelector("#demoButton");t.querySelector(".dxp-modal").classList.remove("show");t.querySelector(".dxp-comp-modal").classList.remove("visible");document.querySelector("body").style.overflow="auto";if(e){setTimeout((function(){i.focusElement(e)}))}this.modalClose.emit();return[2]}))}))};t.prototype.openModal=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){this.emitAnalyticsData(o.i18n.t("Modal:demoButton"));t=this.element?this.element:this.element;t.querySelector(".dxp-modal").classList.add("show");t.querySelector(".dxp-comp-modal").classList.add("visible");document.querySelector("body").style.overflow="hidden";this.modalOpen.emit();return[2]}))}))};t.prototype.emitAnalyticsData=function(t){var e={di_comp_name:this.element.tagName,di_comp_title:this.modalTitle&&this.modalTitle.length!==0?this.modalTitle:"",di_comp_cta:t};this.analyticsDataEmitter.emit(e);o.log.info(this.element.tagName,"emitAnalyticsData()",e)};t.prototype.focusElement=function(t){if(t){t.focus()}};t.prototype.focusTimer=function(t){var e=this;setTimeout((function(){e.focusElement(t)}))};t.prototype.handleCloseEvents=function(t,e,i){var o=this.element?this.element.querySelector(".footer-button").lastChild:this.element.querySelector(".footer-button").lastChild;if(i.classList.contains("cancel-button")&&!e.shiftKey){this.focusTimer(t)}if(i.classList.contains("btn-close")){var n=this.element?this.element.querySelector(".modal-title"):this.element.querySelector(".modal-title");this.focusTimer(n)}if(e.shiftKey&&i.classList.contains("dxp-icon-close")){this.focusElement(o)}};t.prototype.handleFocusEvents=function(t,e,i){var o=this.element?this.element.querySelector(".secondary-button"):this.element.querySelector(".secondary-button");this.handleCloseEvents(t,e,i);if(i.classList.contains("primary-button")&&!o&&!e.shiftKey){this.focusTimer(t)}if(i.classList.contains("demo-button")){var n=this.element?this.element.querySelector(".logo-container"):this.element.querySelector(".logo-container");this.focusTimer(n)}if(e.shiftKey&&(i.classList.contains("logo-img")||i.classList.contains("modal-title-text"))){this.focusTimer(t)}};t.prototype.handleKeyDownCloseModal=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:if(!(t.keyCode===13||t.keyCode===32))return[3,2];return[4,this.closeModal()];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};t.prototype.primaryActionHandler=function(){this.emitAnalyticsData(this.primaryButtonText);if(this.linkUrlFooterPrimary){if(this.linkUrlFooterPrimary!==""&&this.openInNewTabFooterPrimary){window.open(this.linkUrlFooterPrimary,"_blank")}else{location.href=this.linkUrlFooterPrimary}}this.modalPrimaryButtonAction.emit()};t.prototype.renderButtons=function(){var t=this;var e=n("button",{class:"dxp-btn dxp-btn-primary dxp-btn-lg primary-button",id:"primaryButton",onClick:function(){t.primaryActionHandler()},title:this.linkTitleFooterPrimary,"aria-label":this.accessibilityTextFooterPrimary},this.primaryButtonText);var i=[e,n("button",{class:"dxp-btn dxp-btn-primary dxp-btn-lg secondary-button",id:"secondaryButton",onClick:function(){t.secondaryActionHandler()},title:this.linkTitleFooterSecondary,"aria-label":this.accessibilityTextFooterSecondary},this.secondaryButtonText)];return n("div",{class:"sc-dxp-modal dxp-modal-footer align-"+this.buttonPosition},n("div",{class:"sc-dxp-modal footer-button"},this.footerType==="two-button"?i:this.footerType==="one-button"?e:"",this.isCancelButtonRequire&&n("button",{class:"dxp-btn dxp-btn-primary dxp-btn-lg cancel-button",id:"cancelButton",title:this.linkTitleFooterSecondary,"aria-label":this.accessibilityTextFooterSecondary,onClick:function(){return t.closeModal()}},o.i18n.t("Modal:cancel"))))};t.prototype.renderModalBody=function(){var t=this;var e=function(){if(!t.headerLogo[h]){return n("dxp-logo",{src:t.headerLogo["src"],"src-sm":t.headerLogo["srcSm"],href:t.headerLogo["href"],alt:t.headerLogo["alt"],target:t.headerLogo["target"]})}return n("dxp-logo",{src:t.headerLogo["src"],"src-sm":t.headerLogo["srcSm"],href:t.headerLogo["href"],alt:t.headerLogo["alt"],target:t.headerLogo["target"]},n("dxp-logo",{src:t.headerLogo[h].src,"src-sm":t.headerLogo[h].srcSm,href:t.headerLogo[h].href,alt:t.headerLogo[h].alt,target:t.headerLogo[h].target}))};return n("div",{class:"sc-dxp-modal dxp-modal-body"},n("div",{class:"modal-title",tabindex:"-1"},this.modalTitle?n("h3",{class:"modal-title-text",tabindex:"0"},this.modalTitle):this.headerLogo?e():n("slot",{name:"logo"}),this.modalSubtitle&&n("p",{class:"sub-title"},this.modalSubtitle,"‎")),this.modalDescription&&n("div",{class:"modal-description"},n("div",{innerHTML:this.modalDescription+"&lrm;"})),n("slot",null))};t.prototype.secondaryActionHandler=function(){this.emitAnalyticsData(this.secondaryButtonText);if(this.linkUrlFooterSecondary){if(this.linkUrlFooterSecondary!==""&&this.openInNewTabFooterSecondary){window.open(this.linkUrlFooterSecondary,"_blank")}else{location.href=this.linkUrlFooterSecondary}}this.modalSecondaryButtonAction.emit()};t.prototype.render=function(){var t=this;o.log.debug(this.element.tagName,"render()","in dxp-modal render() : "+"DEVELOPMENT");var e=n("span",null,n("link",{rel:"stylesheet",href:""}),this.theme&&n("link",{rel:"stylesheet",href:""}),this.theme&&n("link",{rel:"stylesheet",href:o.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-modal.min.css"}),this.theme&&n("link",{rel:"stylesheet",href:o.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-cta.min.css"}),this.dtmUrl&&n("script",{src:this.dtmUrl}));return n("div",null,this.demo?n("button",{class:"demo-button","aria-describedby":"demoButtonAccessibility",id:"demoButton",onClick:function(){return t.openModal()}},o.i18n.t("Modal:demoButton")):"",this.demo?n("p",{id:"demoButtonAccessibility",class:"dxp-sr-only"},o.i18n.t("Modal:demoButtonAccessibilityText")):"",n("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},e,n("div",{class:"sc-dxp-modal dxp-comp-modal main-section dxp-col-12 "+(this.isSidebar?"dxp-sidebar-container":"")},n("div",{class:"sc-dxp-modal dxp-modal-dialog dxp-col-xl-8 dxp-col-lg-8 dxp-col-md-10 "+(this.isSidebar?"dxp-sidebar-wrapper "+this.sidebarPosition:""),"aria-modal":"true",role:"application",tabindex:"-1",style:this.styleString},this.isCloseButtonRequired?n("span",{tabindex:"-1",class:"sc-dxp-modal btn-close dxp-icon dxp-icon-close",role:"button","aria-label":o.i18n.t("Modal:closeModal"),onClick:function(){return t.closeModal()},onKeyDown:function(e){return t.handleKeyDownCloseModal(e)}}):"",this.renderModalBody(),this.footerType!=="no-button"||this.isCancelButtonRequire?this.renderButtons():""))))};Object.defineProperty(t.prototype,"element",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"div.dxp.dxp-modal.show{display:block}\@media (min-width:576px){div.dxp.dxp-modal.show{position:unset}}div.dxp.dxp-modal .dxp-comp-modal{display:none;opacity:0;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in;height:100vh}div.dxp.dxp-modal .dxp-comp-modal.visible{opacity:1;display:block;z-index:999}div.dxp.dxp-modal .dxp-comp-modal .modal-description p{margin-bottom:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body{position:relative}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title{margin-bottom:1.125rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title-text{direction:ltr;display:inline-block;margin:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-body .modal-title p{margin:.375rem 0 0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:2.5rem 2rem 1.5rem;overflow-y:scroll}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-header{padding:0}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer{display:block;padding:0;margin-top:2.25rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-center{text-align:center}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-right{text-align:right}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-footer.align-left{text-align:left}div.dxp.dxp-modal .dxp-comp-modal .footer-button{display:block}div.dxp.dxp-modal .dxp-comp-modal .footer-button button{outline:none;width:100%}div.dxp.dxp-modal .dxp-comp-modal .btn-close{position:absolute;right:1rem;top:1rem;width:2.125rem;height:2.125rem;text-align:center;cursor:pointer}div.dxp.dxp-modal .dxp-comp-modal .btn-close:focus{border:1px solid}div.dxp.dxp-modal .dxp-comp-modal.dxp-sidebar-container{background:transparent}\@media (min-width:576px){div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:3rem 2.5rem 2rem;margin:0 auto}div.dxp.dxp-modal .dxp-comp-modal .footer-button{display:inline-block}div.dxp.dxp-modal .dxp-comp-modal .footer-button button{width:auto}div.dxp.dxp-modal .dxp-comp-modal .footer-button button+button{margin-left:1rem}}\@media (min-width:768px){div.dxp.dxp-modal .dxp-comp-modal{position:fixed;top:0;left:0;width:100%}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:999;height:auto;overflow-y:auto;max-height:100vh;border-radius:4px;padding:3.5rem 3rem 2.5rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper{-webkit-transform:none;transform:none;margin:0;top:0;height:100vh;overflow-y:auto;width:400px;max-width:100vw;border-radius:0;padding:4.25rem 2.625rem 2.5rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper.right{right:0;left:auto}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper.left{right:auto;left:0}}\@media (min-width:992px){div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog{padding:4rem 3.5rem 3rem}div.dxp.dxp-modal .dxp-comp-modal .dxp-modal-dialog.dxp-sidebar-wrapper{padding:5rem 3.125rem 3rem}}div.dxp.dxp-modal .modal-open-prevent-scrolling{overflow:hidden}div.dxp.dxp-modal .logo-container{margin-bottom:.9375rem}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .btn-close{right:auto;left:1rem}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .dxp-modal-footer.align-right{text-align:left}div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .dxp-modal-footer.align-left{text-align:right}\@media (min-width:576px){div.dxp.dxp-modal[dir=rtl] .dxp-comp-modal .footer-button button+button{margin-left:0;margin-right:1rem}}"},enumerable:true,configurable:true});return t}())}}}));
var __awaiter=this&&this.__awaiter||function(e,t,r,i){function s(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,n){function a(e){try{l(i.next(e))}catch(t){n(t)}}function o(e){try{l(i["throw"](e))}catch(t){n(t)}}function l(e){e.done?r(e.value):s(e.value).then(a,o)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,s,n,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(e){return function(t){return l([e,t])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,s&&(n=a[0]&2?s["return"]:a[0]?s["throw"]||((n=s["return"])&&n.call(s),0):s.next)&&!(n=n.call(s,a[1])).done)return n;if(s=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;s=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){r.label=a[1];break}if(a[0]===6&&r.label<n[1]){r.label=n[1];n=a;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(a);break}if(n[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(o){a=[6,o];s=0}finally{i=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js"],(function(e){"use strict";var t,r,i,s,n,a;return{setters:[function(e){t=e.r;r=e.c;i=e.d;s=e.h;n=e.g},function(e){a=e.B}],execute:function(){var o={en:{requiredField:"Required field"},es:{requiredField:"Campo requerido"}};var l="dxp-error";var p="dxp-none";var m="checkbox-error";var c=".input-container";var d="dxp-disabled";var u=e("dxp_form",function(){function e(e){t(this,e);this.isSubmitApi=false;this.buttonPosition="left";this.buttonType="primary";this.formSubmitted=r(this,"formSubmitted",7)}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.base=new a(this,i);this.base.i18Init(i,"Form",o);if(!this.formId)return[3,2];return[4,this.getService(i.config.get("FORM_AS_SERVICE_URL"))];case 1:e.sent();return[3,5];case 2:if(!this.apiUrl)return[3,4];return[4,this.getService(this.apiUrl)];case 3:e.sent();return[3,5];case 4:if(this.formJson){if(typeof this.formJson==="string"){this.formJson=JSON.parse(this.formJson)}this.formSchema=this.formJson["FormSchema"]&&this.formJson["FormSchema"].fields;this.formEvents=this.formJson["FormSchema"]&&this.formJson["FormSchema"].event}e.label=5;case 5:return[2]}}))}))};e.prototype.routingHandler=function(e){this.base.routingEventListener(e)};e.prototype.fieldValidations=function(e){var t=this.element.querySelector("#"+e["name"]);t.classList.add("dxp-field-error");var r=t.closest(c);if(r){if(r.previousElementSibling){r.previousElementSibling.classList.add(l)}if(r.nextElementSibling){r.nextElementSibling.classList.remove(p)}if(t.nextElementSibling){t.nextElementSibling.classList.remove(p)}}if(t.getAttribute("type")==="checkbox"){t.nextElementSibling.classList.add(m)}};e.prototype.formSubmit=function(e){var t=this;var r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};if(this.formEvents){this.formEvents.forEach((function(e){if(e.eventType==="onSubmit"){t.isSubmitApi=true;e.eventServiceInfo.forEach((function(e){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,i.api(e.serviceUrl,r)];case 1:t.sent();return[2]}}))}))}))}}))}if(!this.isSubmitApi){i.log.debug(this.element.tagName,"formSubmit()","event emit for SPA");this.formSubmitted.emit({formData:e})}};e.prototype.formValidations=function(e){for(var t=0,r=e.elements;t<r.length;t++){var i=r[t];if(i["name"]){if(!i["validity"].valid){this.fieldValidations(i)}}}};e.prototype.formValidityCheck=function(e){var t={};for(var r=0,i=e.elements;r<i.length;r++){var s=i[r];if(s["name"]){t[s["name"]]=s["value"]}}if(t){this.formSubmit(t)}};e.prototype.getData=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,s;return __generator(this,(function(n){switch(n.label){case 0:n.trys.push([0,4,,5]);if(!this.formId)return[3,2];t={};t["formId"]=this.formId;r={method:"GET",headers:t};return[4,i.api(e,r)];case 1:return[2,n.sent()];case 2:return[4,i.api(e)];case 3:return[2,n.sent()];case 4:s=n.sent();i.log.error(this.element.tagName,"getData()","fetch failed for",s);return[3,5];case 5:return[2]}}))}))};e.prototype.getErrorMessage=function(e){return s("div",{class:p+" "+l},e.templateOptions.validationMessage)};e.prototype.getService=function(e){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:t=this;return[4,this.getData(e)];case 1:t.formJson=r.sent();this.formSchema=this.formJson&&this.formJson["FormSchema"]&&this.formJson["FormSchema"].fields;this.formEvents=this.formJson["FormSchema"]&&this.formJson["FormSchema"].event;return[2]}}))}))};e.prototype.handleChange=function(e){if(e.target.value){e.target.classList.remove("dxp-field-error");var t=e.target.closest(c);if(t){if(t.previousElementSibling){t.previousElementSibling.classList.remove(l)}if(t.nextElementSibling){t.nextElementSibling.classList.add(p)}if(e.target.nextElementSibling&&e.target.nextElementSibling.classList){e.target.nextElementSibling.classList.add(p)}}if(e.target.getAttribute("type")==="checkbox"){e.target.nextElementSibling.classList.remove(m)}}};e.prototype.preventSubmit=function(e){e.preventDefault();return false};e.prototype.renderChechbox=function(e){var t=this;return s("div",{class:"form-checkbox form-checkbox-group "+(e.className?e.className:"")},s("link",{rel:"stylesheet",href:"https://asset.mastercard.com/dxp-styles/latest/css"+"/themes/"+this.theme+"/dxp-checkbox.min.css"}),s("p",{class:"caption","aria-required":e.templateOptions.required?"true":"","aria-invalid":"false"},e.templateOptions.label),e.templateOptions.options&&e.templateOptions.options.map((function(r){return s("div",{class:t.theme+" dxp-checkbox-group checkbox-item "+e.templateOptions.alignment},s("input",{type:"checkbox",id:e.key,name:e.key,required:r.required,onChange:function(e){return t.handleChange(e)},class:"checkbox dxp-field",value:r.value,checked:r.checked,disabled:r.disabled}),s("label",{htmlFor:e.key,class:r.disabled?d:""},r.required?s("span",{class:"dxp-required"},"* "):"",r.name,"‎"))})))};e.prototype.renderFormFields=function(e){if(e.type==="input"&&e.templateOptions.type!=="textarea"){return this.renderInput(e)}if(e.type==="input"&&e.templateOptions.type==="textarea"){return this.renderTextarea(e)}if(e.type==="radio"){return this.renderRadio(e)}if(e.type==="checkbox"){return this.renderChechbox(e)}if(e.type==="select"){return this.renderSelect(e)}return undefined};e.prototype.renderInput=function(e){var t=this;return s("div",{class:"form-input dxp-mb-2 "+(e.className?e.className:"")},s("link",{rel:"stylesheet",href:"https://asset.mastercard.com/dxp-styles/latest/css"+"/themes/"+this.theme+"/dxp-input.min.css"}),s("label",{class:"dxp-inputbox-label "+(e.templateOptions.disabled?d:""),htmlFor:e.templateOptions.label},e.templateOptions.label,e.templateOptions.required&&s("span",{class:"dxp-required"},"* ")),s("div",{class:"input-container"},s("input",{class:"",type:e.templateOptions.type,id:e.key,name:e.key,required:e.templateOptions.required,placeholder:e.templateOptions.placeholder,value:e.dafaultValue,minlength:e.templateOptions.minLength,maxlength:e.templateOptions.maxLength,onInput:function(e){return t.handleChange(e)},readonly:e.templateOptions.readonly,disabled:e.templateOptions.disabled,autofocus:e.templateOptions.autoFocus,min:e.templateOptions.min,max:e.templateOptions.max,step:e.templateOptions.step,pattern:e.templateOptions.pattern}),s("span",{class:p+" input-icon icon-sprite error-circle-red"})),this.getErrorMessage(e))};e.prototype.renderRadio=function(e){var t=this;return s("div",{class:"form-radio dxp-mb-2 "+(e.className?e.className:"")},s("link",{rel:"stylesheet",href:"https://asset.mastercard.com/dxp-styles/latest/css"+"/themes/"+this.theme+"/dxp-radio-button.min.css"}),s("label",{class:"dxp dxp-radio-group-label",htmlFor:e.templateOptions.label},e.templateOptions.required?s("span",{class:"dxp-required"}," ",s("span",{"aria-hidden":"true"},"*")):"",e.templateOptions.label),s("div",{class:"dxp-radio-group-items"},e.templateOptions.options&&e.templateOptions.options.map((function(r){return s("div",{class:t.theme+" form-radio-btn dxp-radio-button "+e.templateOptions.alignment},s("input",{class:"dxp-field",onChange:function(e){return t.handleChange(e)},id:r.code,type:"radio",key:r.code,name:e.key,value:r.code,checked:r.checked,required:e.templateOptions.required,disabled:e.templateOptions.disabled}),s("label",{htmlFor:r.code},r.name))}))),this.getErrorMessage(e))};e.prototype.renderSelect=function(e){var t=this;return s("div",{class:"form-select dxp-mb-2 "+(e.className?e.className:"")},s("label",{class:"dxp-inputbox-label "+(e.templateOptions.disabled?d:""),htmlFor:e.templateOptions.label},e.templateOptions.label,e.templateOptions.required&&s("span",{class:"dxp-required"},"* ")),s("div",{class:"input-container"},s("select",{class:"dxp-field",onInput:function(e){return t.handleChange(e)},id:e.key,name:e.key,required:e.templateOptions.required},e.templateOptions.options&&e.templateOptions.options.map((function(e){return s("option",{value:e.code,selected:e.selected,disabled:e.disabled}," ",e.name)})))),this.getErrorMessage(e))};e.prototype.renderTextarea=function(e){var t=this;return s("div",{class:"form-textarea dxp-mb-2 "+(e.className?e.className:"")},s("link",{rel:"stylesheet",href:"https://asset.mastercard.com/dxp-styles/latest/css"+"/themes/"+this.theme+"/dxp-textarea.min.css"}),s("label",{htmlFor:e.templateOptions.label,id:"textarea",class:"dxp-inputbox-label "+(e.templateOptions.disabled?d:"")},e.templateOptions.label,e.templateOptions.required&&s("span",{class:"dxp-required"},"* ")),s("div",{class:"input-container"},s("textarea",{id:e.key,name:e.key,"aria-labelledby":"textarea",class:(e.templateOptions.nonResizable?"no-resizable":"")+" textarea form-control dxp-field","aria-invalid":"false","aria-multiline":"true",required:e.templateOptions.required,placeholder:e.templateOptions.placeholder,value:e.defaultValue,onInput:function(e){return t.handleChange(e)},rows:e.templateOptions.rows,cols:e.templateOptions.cols,maxlength:e.templateOptions.maxLength,minlength:e.templateOptions.minLength,"aria-errormessage":"error",disabled:e.templateOptions.disabled,style:{width:e.templateOptions.width+"px"}})),this.getErrorMessage(e))};e.prototype.submitHandler=function(){var e=this.element.querySelector("form");var t=e.checkValidity();if(t){this.formValidityCheck(e)}else{this.formValidations(e)}};e.prototype.render=function(){var e=this;i.log.debug(this.element.tagName,"render()","in dxp-form render() : "+"DEVELOPMENT");if(!this.apiUrl&&!this.formJson){i.log.debug(this.element.tagName,"render()","component not rendered : check API URL or formJson data");return undefined}var t=[s("link",{rel:"stylesheet",href:"https://asset.mastercard.com/dxp-styles/latest/css"+"/dxp.min.css"}),s("link",{rel:"stylesheet",href:"https://asset.mastercard.com/dxp-styles/latest/css"+"/themes/"+this.theme+"/dxp-cta.min.css"}),s("link",{rel:"stylesheet",href:"https://asset.mastercard.com/dxp-styles/latest/css"+"/themes/"+this.theme+"/dxp-form.min.css"}),[this.theme&&s("link",{rel:"stylesheet",href:"https://asset.mastercard.com/dxp-styles/latest/css"+"/themes/"+this.theme+"/"+this.theme+".min.css"})]];return s("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},t,this.formJson&&this.formJson["formTitle"]&&s("h2",null,this.formJson["formTitle"]),this.formJson&&this.formJson["formSubTitle"]&&s("p",{class:"dxp-lead"},this.formJson["formSubTitle"]),s("form",{id:"form",onSubmit:function(t){e.preventSubmit(t)}},this.formSchema&&this.formSchema.map((function(t){return e.renderFormFields(t)})),s("p",{class:"dxp-font-size-sm dxp-mt-6"},"(*"+i.i18n.t("TagInput:requiredField")+")"),this.formJson&&this.formJson["confirmationMsg"]&&s("p",{class:"dxp-font-size-sm  dxp-mt-6",innerHTML:this.formJson["confirmationMsg"]}),s("div",{class:"dxp-btn-form align-"+this.buttonPosition},s("button",{class:" dxp-btn dxp-btn-"+this.buttonType,type:"submit",value:this.buttonText,onClick:function(){return e.submitHandler()}},this.buttonText))))};Object.defineProperty(e.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"div.dxp.dxp-form .form-input .input-container{position:relative;width:100%}div.dxp.dxp-form .form-input .input-icon{position:absolute;right:.5rem;top:.75rem}div.dxp.dxp-form .form-textarea textarea{padding:.675rem .875rem;resize:auto}div.dxp.dxp-form .form-textarea textarea.no-resizable{resize:none}div.dxp.dxp-form .form-textarea label{display:block}div.dxp.dxp-form .form-radio{margin:16px 0}div.dxp.dxp-form .form-radio .dxp-error,div.dxp.dxp-form .form-radio .dxp-radio-group-label{display:block;margin:0 0 0 10px}div.dxp.dxp-form .form-radio .form-radio-btn{margin:10px 10px 0}div.dxp.dxp-form .form-radio .form-radio-btn.horizontal{display:-ms-inline-flexbox;display:inline-flex}div.dxp.dxp-form .form-radio .form-radio-btn.vertical{display:grid}div.dxp.dxp-form .form-radio .form-radio-btn input[type=radio]{position:absolute;opacity:0;width:0}div.dxp.dxp-form .form-radio .form-radio-btn input[type=radio]+label{padding-left:26px;position:relative;margin:0}div.dxp.dxp-form .form-radio .form-radio-btn input[type=radio]+label:before{content:\"\";width:18px;height:18px;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}div.dxp.dxp-form .form-radio .form-radio-btn input[type=radio][disabled]{pointer-events:none}div.dxp.dxp-form .form-radio .form-radio-btn input[type=radio][disabled]+label{cursor:not-allowed}div.dxp.dxp-form .form-checkbox-group input[type=checkbox]{opacity:0;position:absolute}div.dxp.dxp-form .form-checkbox-group .caption{margin-bottom:10px}div.dxp.dxp-form .form-checkbox-group .checkbox-item{position:relative}div.dxp.dxp-form .form-checkbox-group.horizontal .checkbox-item{display:inline-block;margin-right:10px}div.dxp.dxp-form .form-checkbox-group.vertical{display:block}div.dxp.dxp-form .form-checkbox-group.vertical .checkbox-item+.dxp-error{padding-left:26px;margin:0}div.dxp.dxp-form .form-checkbox .checkbox-item{position:relative}div.dxp.dxp-form .form-checkbox .checkbox-item input[type=checkbox]{opacity:0;position:absolute}div.dxp.dxp-form .form-checkbox .checkbox-item input[type=checkbox]+label{padding-left:25px;position:relative}div.dxp.dxp-form .form-checkbox .checkbox-item input[type=checkbox]+label:before{content:\"\";display:inline-block;width:1rem;height:1rem;top:0;position:absolute;left:0;cursor:pointer}div.dxp.dxp-form .form-checkbox .checkbox-item.horizontal{display:inline-block;margin-right:10px}div.dxp.dxp-form .form-checkbox .checkbox-item.vertical input[type=checkbox]+label .dxp-required{display:table-cell}div.dxp.dxp-form .form-checkbox .checkbox-item.vertical .dxp-error{padding-left:2.5rem}div.dxp.dxp-form .dxp-btn-form.align-center{text-align:center}div.dxp.dxp-form .dxp-btn-form.align-right{text-align:right}div.dxp.dxp-form .dxp-btn-form.align-left{text-align:left}"},enumerable:true,configurable:true});return e}())}}}));
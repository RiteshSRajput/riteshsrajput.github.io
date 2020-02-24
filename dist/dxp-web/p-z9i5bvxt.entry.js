import{r as t,c as s,d as i,h as e,g as h}from"./p-8188e849.js";import{B as r}from"./p-16d6f0ca.js";var a;!function(t){t[t.LinkSelector=0]="LinkSelector",t[t.DefaultSelector=1]="DefaultSelector",t[t.OptionWithDetailsSelector=2]="OptionWithDetailsSelector",t[t.SearchableSelector=3]="SearchableSelector"}(a||(a={}));const n={en:{hello:"Hello World!"},"en-US":{hello:"Hello World! en-US"},es:{hello:"Hola Mundo!"},"es-ES":{hello:"Hola Mundo! es-ES"}};let l;const o=new XMLHttpRequest,c=l={request:o,fetchRequest:(t,s)=>new Promise((i,e)=>{o.onreadystatechange=()=>{4===o.readyState&&(o.status>=200&&o.status<300?i(o):e({status:o.status,statusText:o.statusText}))},o.onerror=()=>{e({status:o.status,statusText:o.statusText})},o.open(s.method,t,!0),s.headers&&Object.keys(s.headers).forEach(t=>{o.setRequestHeader(t,s.headers[t])}),o.send(s.body)})},d=class{constructor(i){t(this,i),this.iconsUrls=[],this.menuType=a.LinkSelector,this.hasMoreItems=!0,this.isLoading=!1,this.isValid=!0,this.listIndex=-1,this.offset=0,this.responseData=[],this.searchTerm="",this.additionalValue="",this.items=[],this.selectorId="",this.value="",this.apiCallCompleted=s(this,"apiCallCompleted",7),this.clearValue=s(this,"clearValue",7),this.searchEmitter=s(this,"searchEmitter",7),this.selectedItemChanged=s(this,"selectedItemChanged",7),this.toggleEmitter=s(this,"toggleEmitter",7)}componentWillLoad(){this.base=new r(this,i),this.base.i18Init(i,"SelectorMenu",n),this.menuType=this.setEnumFromString(this.type),this.iconSprite="dxp-theme-b2b"===this.theme?"b2b-sprite":"icons-sprite"}componentDidLoad(){this.inputSearchBox=this.base.shadowRootQuerySelector(this.element,".input-search")}componentDidUpdate(){this.isLoading&&this.element.querySelector(".spinner-wrapper")&&this.renderProgressbarSpinner()}detectingClickOutside(t){this.toggle=!!(t.target&&t.target&&t.composedPath()[0])&&!(!t.composedPath()[0].classList.contains("dxp-text-truncate")&&!t.composedPath()[0].classList.contains("selector-button"))&&this.toggle}handleKeyboardA11y(t){const s=t.target?t.target.activeElement:t.target;if(s===this.inputSearchBox&&(this.listItemElements=s.closest("div").nextElementSibling.querySelectorAll(".list-item")),this.listItemElements||this.toggle){switch(t.key){case"Enter":this.listItemElements[this.listIndex].click();break;case"ArrowDown":case"Down":if(this.listIndex>=this.listItemElements.length-1||!this.toggle)break;this.listIndex++,this.listItemElements[this.listIndex].focus();break;case"ArrowUp":case"Up":if(this.listIndex<=0||!this.toggle){this.inputSearchBox&&(this.inputSearchBox.focus(),this.listIndex=-1);break}this.listIndex--,this.listItemElements[this.listIndex].focus();break;default:return}this.activeListEl=this.listItemElements[this.listIndex],t.preventDefault()}}handleKeyUp(t){const s=t.keyCode,i=t.target?t.target.activeElement:t.target;i&&"list-item"===i.class&&(13!==s&&32!==s||(this.toggle=!1,this.toggleEmitter.emit({visible:this.toggle})))}routingHandler(t){this.base.routingEventListener(t)}async hideSpinner(){this.isLoading=!1}async showSpinner(){this.isLoading=!0}async updateValidationState(t){this.isValid=t}clearSearchBox(){this.inputSearchBox&&(this.searchTerm=this.inputSearchBox.value=this.value="",this.inputSearchBox.focus(),this.isValid=!0,this.closeDropdown(),this.optionSelected=!1,this.activeListEl=void 0,this.clearValue.emit())}clearSelectorMenu(t){this.value="",this.toggle=!1,this.optionSelected=!1,t.stopImmediatePropagation(),t.preventDefault(),this.clearValue.emit()}closeDropdown(){this.toggle=!1}async getData(t,s,e,h){const r={method:"GET",headers:this.apiHeaders?JSON.parse(this.apiHeaders):{"Content-Type":"application/json"}};this.additionalParams=this.setAdditionalParams(e,h);try{c.request&&c.request.abort();const e=c.fetchRequest(t+encodeURI(s)+this.additionalParams,r).then(t=>(i.log.debug(this.element.tagName,"getData()","xhr request success"),this.apiCallCompleted.emit(t),this.searchEmitter.emit(s),JSON.parse(t.response))).catch(t=>{this.apiCallCompleted.emit(t),this.searchEmitter.emit(s),i.log.debug(this.element.tagName,"getData()",`xhr request cancelled/failed : ${JSON.stringify(t)}`)});return this.responseData=e,this.responseData}catch(a){i.log.error(this.element.tagName,"getData()","fetch failed",a)}}async handleChange(t){this.searchTerm=t.trim(),this.searchTerm.length>=this.minSearchCharLength?(this.isLoading=!0,this.toggleComponent(!0),await this.getData(this.apiUrl,this.searchTerm).then(t=>{this.items=[],this.handleSuccess(t)})):(this.closeDropdown(),this.isValid=!0,this.isLoading=!1)}handleSuccess(t){const s=this.transformData?this.transformData(t):t;if(s.length<1)return this.isValid=!1,this.isLoading=!1,void this.closeDropdown();this.items=this.items.concat(...s),this.isLoading=!1,this.isValid=!0,this.pageCount=this.enableLazyLoading?t[this.totalPagesKeyName]:0,this.hasMoreItems=this.pageCount>this.offset+1}async onListboxScroll(t){if(!this.enableLazyLoading)return;const s=t.target,i=s.scrollHeight-s.offsetHeight;this.hasMoreItems&&!this.isLoading&&s.scrollTop===i&&(this.offset++,this.isLoading=!0,await this.getData(this.apiUrl,this.searchTerm,this.offset,this.limit).then(t=>{s.scrollTop=i-s.clientHeight,this.handleSuccess(t)}))}onSearch(t){this.toggle&&"focus"===t.type||(this.listIndex=-1,this.offset=0,this.handleChange(t.target.value).then(()=>i.log.info(this.element.tagName,"onTextInput()","in handleChange")).catch(t=>i.log.error(this.element.tagName,"onTextInput()",`in handleChange :${t}`)))}renderDefaultSelector(){return e("div",{class:"selector-button-wrapper"},e("button",{tabindex:`${this.disabled?-1:0}`,id:this.selectorId,title:this.value,disabled:this.disabled,class:`default-selector selector-button dxp-text-truncate ${this.disabled?"disabled":""} ${this.isValid?"":"has-error"}\n        ${this.value?"more-padding":"has-placeholder"}`,onClick:()=>this.toggleComponent()},this.value?this.value:this.placeholder,e("span",{class:`select-caret ${this.toggle?"rotate-icon":""} ${this.disabled?"disabled":""}`},e("i",{class:`${this.iconSprite} caret-down-sm-b`}))),e("button",{role:"button",tabindex:`${this.disabled?-1:0}`,class:`clear-search-btn ${this.value?"":"dxp-none"} ${this.disabled?"disabled":""}`,onClick:t=>this.clearSelectorMenu(t),"aria-label":"Clear selected value"},e("i",{class:"dxp-icon dxp-icon-close"})))}renderItem(t){return t.status?e("div",{class:"has-icon"},this.renderListItem(t),this.renderListItemIcon(t.status)):this.renderListItem(t)}renderLabel(){return e("label",{class:`dxp-input-label ${this.disabled?"dxp-disabled":""} ${this.isValid||this.isOptional?"":"dxp-error"}`},this.label," ",this.isOptional?e("span",{class:"dxp-optional"}," (optional)"):"")}renderLinkSelector(){return e("button",{role:"button",tabindex:`${this.disabled?-1:0}`,id:this.selectorId,class:`btn-link selector-button ff-medium dxp-text-truncate ${this.disabled?"disabled":""}`,onClick:()=>this.toggleComponent()},this.value?this.value:this.placeholder,e("span",{class:`select-caret ${this.toggle?"rotate-icon":""} ${this.disabled?"disabled":""}`},e("i",{class:`${this.iconSprite} arrow-down-xs-o`})))}renderListItem(t){let s;return t&&this.dataSourceKeyName&&(s="string"==typeof t[this.dataSourceKeyName]?t[this.dataSourceKeyName]:this.setArrayValues(t[this.dataSourceKeyName])),s}renderListItemIcon(t){if(void 0!==t)return e("span",{class:"icon-wrapper"},e("i",{class:`${this.iconSprite} ${t}`}))}renderOptionWithDetailsSelector(){return e("button",{role:"button",id:this.selectorId,tabindex:`${this.disabled?-1:0}`,class:`option-with-details-button selector-button ${this.disabled?"disabled":""}`,onClick:()=>this.toggleComponent()},e("p",{class:"option-with-details-name dxp-text-truncate",title:this.value},this.value,this.toggle?"":e("i",{class:`${this.iconSprite} arrow-down-xs-lo`})),e("p",{class:`option-with-details-location dxp-text-truncate ${this.toggle?"p-r-24":""}`,title:this.additionalValue},this.additionalValue),this.toggle?e("span",{class:"close-selector-menu"},e("i",{class:"dxp-icon dxp-icon-close"})):"")}renderProgressbarSpinner(){const t=this.element.querySelector(".list-wrapper"),s=t.scrollTop,i=this.element.querySelector(".spinner-wrapper");return i&&t&&(i.style.top=`${s}px`),e("div",{class:"spinner-wrapper"},e("dxp-progressspinner",{"stroke-width":"1",fill:"rgba(255,255,255,0)","animation-duration":"2","stroke-color":"#25836D"}))}renderSearchableSelector(){return this.validationMessage=""===this.validationMessage?"There are no records that match your result. Please try again.":this.validationMessage,e("div",{class:"selector-button-wrapper search-container","aria-haspopup":"listbox","aria-owns":this.selectorId,"aria-expanded":this.toggle},e("input",{type:"text",class:`input-search dxp-text-truncate\n          ${this.isValid?"":"has-error"} ${this.searchTerm.length>0||this.optionSelected?"more-padding":""}`,"aria-autocomplete":"list","aria-controls":this.selectorId,"aria-invalid":!this.isValid,"aria-label":this.accessibilityText,"aria-required":this.isOptional?"true":"false",autofocus:this.autofocus,disabled:this.disabled,id:this.selectorId,maxlength:this.maxSearchCharLength,placeholder:this.placeholder,tabindex:`${this.disabled?-1:0}`,value:this.value?this.value:this.searchTerm,onFocus:t=>this.onSearch(t),onInput:t=>this.onSearch(t)}),e("span",{class:`select-caret ${this.toggle?"rotate-icon":""} ${this.disabled?"disabled":""}`},e("i",{class:`${this.iconSprite} caret-down-sm-b`})),e("button",{tabindex:`${this.disabled?-1:0}`,role:"button",class:`clear-search-btn ${this.disabled?"disabled":""} ${this.searchTerm.length>0||this.value.length>0?"":"dxp-none"}`,onClick:()=>this.clearSearchBox(),"aria-label":"Clear searchbox"},e("i",{class:"dxp-icon dxp-icon-close"})),this.isValid?"":e("div",{class:"dxp-error",id:"errMsg","aria-label":this.validationMessage},this.validationMessage))}renderSelectorType(){switch(this.menuType){case a.DefaultSelector:return this.renderDefaultSelector();case a.LinkSelector:return this.renderLinkSelector();case a.OptionWithDetailsSelector:return this.renderOptionWithDetailsSelector();case a.SearchableSelector:return this.renderSearchableSelector()}}selectItem(t){this.toggle=!1,this.toggleEmitter.emit({visible:this.toggle}),this.value=Array.isArray(t[this.dataSourceKeyName])?t[this.dataSourceKeyName][0]:t[this.dataSourceKeyName],this.additionalValue=Array.isArray(t[this.dataSourceKeyName])&&t[this.dataSourceKeyName][1]?t[this.dataSourceKeyName][1]:this.additionalValue,this.selectedItemChanged.emit({optionSelected:t}),this.optionSelected=!0,this.isValid=!0,this.listItemElements=[],this.inputSearchBox&&(this.inputSearchBox.value=Array.isArray(t[this.dataSourceKeyName])?t[this.dataSourceKeyName][0]:t[this.dataSourceKeyName]),this.searchTerm=""}setAdditionalParams(t,s){return this.additionalParams="",this.enableLazyLoading&&t&&s?`&${this.offsetKeyName}=${t}&${this.limitKeyName}=${s}`:""}setArrayValues(t){return t.reduce((s,i,h)=>(s.push(e("p",this.menuType===a.LinkSelector&&1===t.length?{innerHTML:i}:0===h?{class:"ff-medium",innerHTML:i}:{innerHTML:i})),s),[])}setEnumFromString(t){const s=a[t];return void 0===s?a.LinkSelector:s}toggleComponent(t){this.disabled||(this.toggle=t||!this.toggle,this.toggleEmitter.emit({visible:this.toggle}),this.listItemElements=Array.from(this.element.querySelectorAll(".list-item")),this.listIndex=-1)}render(){i.log.debug(this.element.tagName,"render()","in dxp-selector-menu render() : DEVELOPMENT");const t=[e("link",{rel:"stylesheet",href:""}),[this.theme&&e("link",{rel:"stylesheet",href:""})],[this.theme&&e("link",{rel:"stylesheet",href:`${i.config.get("DXP_STYLE_BASE_URL")}/themes/${this.theme}/dxp-selector-menu.min.css`})]];return e("div",{class:this.base.componentClass(),dir:this.dir,"data-theme":this.theme},t,this.label?this.renderLabel():"",e("div",{class:"selector-menu-wrapper"},this.renderSelectorType(),e("div",{class:`item-container ${this.toggle?"dxp-block":"dxp-none"}`},e("slot",{name:"item-container-slot"}),e("ul",{"aria-label":"Selector dropdown",class:`list-wrapper ${this.isLoading?"no-scroll":""}`,style:{width:this.width?`${this.width}rem`:"100%"},role:"listbox","aria-labelledby":this.selectorId,onScroll:t=>this.onListboxScroll(t)},this.isLoading?this.renderProgressbarSpinner():"",e("slot",{name:"list-wrapper-slot"}),!this.disabled&&this.items&&this.items.length?this.items.map((t,s)=>e("li",{tabindex:"-1",class:"list-item","data-index":s,id:`listItem-${s}`,role:"option",onClick:()=>this.selectItem(t)},this.renderItem(t))):""))))}get element(){return h(this)}static get style(){return"div.dxp.dxp-selector-menu{line-height:unset}div.dxp.dxp-selector-menu .btn-link{border:none;display:inline-block;padding:.125rem 1.5rem .125rem 0;cursor:pointer;vertical-align:middle;border-radius:.375rem;position:relative;overflow:hidden}div.dxp.dxp-selector-menu .btn-link:focus,div.dxp.dxp-selector-menu .btn-link:hover{outline:none;text-decoration:underline}div.dxp.dxp-selector-menu .btn-link.disabled{cursor:not-allowed;text-decoration:none;opacity:.5}div.dxp.dxp-selector-menu .btn-link.disabled:focus{-webkit-box-shadow:none;box-shadow:none}div.dxp.dxp-selector-menu .btn-link .select-caret{position:absolute;top:.25rem;right:0;width:1rem;height:1rem}div.dxp.dxp-selector-menu .btn-link .select-caret.rotate-icon{-webkit-transform:scaleY(-1);transform:scaleY(-1)}div.dxp.dxp-selector-menu .option-with-details-button{text-align:left;cursor:pointer;height:4rem;width:100%;display:inline-block;outline:none;padding:.9375rem 1.5rem;border:none;border-radius:0}div.dxp.dxp-selector-menu .option-with-details-button .option-with-details-name{margin-bottom:0;display:inline-block;padding-right:1.5rem;position:relative}div.dxp.dxp-selector-menu .option-with-details-button .option-with-details-name i{height:1rem;width:1rem;display:inline-block;position:absolute;right:0;top:0}div.dxp.dxp-selector-menu .option-with-details-button .option-with-details-location{margin-bottom:0;display:block}div.dxp.dxp-selector-menu .option-with-details-button .option-with-details-location.p-r-24{padding-right:1.5rem}div.dxp.dxp-selector-menu .option-with-details-button .close-selector-menu{position:absolute;right:1.25rem;top:1.25rem;width:1.5rem;height:1.5rem;text-align:center}div.dxp.dxp-selector-menu .option-with-details-button.disabled{cursor:not-allowed;opacity:.7}div.dxp.dxp-selector-menu .selector-button-wrapper{position:relative}div.dxp.dxp-selector-menu .selector-button-wrapper .default-selector,div.dxp.dxp-selector-menu .selector-button-wrapper input[type=text]{display:block;width:100%;height:2.5rem;padding:.5rem 1rem;background-image:none;background-clip:padding-box;border-radius:.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid transparent;padding-right:1.625rem}div.dxp.dxp-selector-menu .selector-button-wrapper .default-selector::-ms-clear,div.dxp.dxp-selector-menu .selector-button-wrapper .default-selector::-ms-reveal,div.dxp.dxp-selector-menu .selector-button-wrapper input[type=text]::-ms-clear,div.dxp.dxp-selector-menu .selector-button-wrapper input[type=text]::-ms-reveal{display:none;width:0;height:0}div.dxp.dxp-selector-menu .selector-button-wrapper .default-selector:focus,div.dxp.dxp-selector-menu .selector-button-wrapper input[type=text]:focus{outline:none}div.dxp.dxp-selector-menu .selector-button-wrapper .default-selector.more-padding,div.dxp.dxp-selector-menu .selector-button-wrapper input[type=text].more-padding{padding-right:3.125rem}div.dxp.dxp-selector-menu .selector-button-wrapper .default-selector.disabled,div.dxp.dxp-selector-menu .selector-button-wrapper .default-selector:disabled,div.dxp.dxp-selector-menu .selector-button-wrapper input[type=text].disabled,div.dxp.dxp-selector-menu .selector-button-wrapper input[type=text]:disabled{cursor:not-allowed}div.dxp.dxp-selector-menu .selector-button-wrapper .default-selector{cursor:pointer;text-align:left;position:relative;overflow:hidden}div.dxp.dxp-selector-menu .selector-button-wrapper .clear-search-btn{z-index:9;top:.75rem;right:1.875rem;position:absolute;width:1rem;height:1rem;display:inline-block;text-align:center;border:none;background:transparent;border-radius:0;cursor:pointer}div.dxp.dxp-selector-menu .selector-button-wrapper .clear-search-btn .dxp-icon-close{vertical-align:middle}div.dxp.dxp-selector-menu .selector-button-wrapper .clear-search-btn.disabled{pointer-events:none}div.dxp.dxp-selector-menu .selector-button-wrapper .select-caret{position:absolute;top:.75rem;right:.375rem;width:1rem;height:1rem}div.dxp.dxp-selector-menu .selector-button-wrapper .select-caret.rotate-icon{-webkit-transform:scaleY(-1);transform:scaleY(-1)}div.dxp.dxp-selector-menu .selector-button-wrapper .select-caret.disabled{opacity:.5}div.dxp.dxp-selector-menu .selector-menu-wrapper{position:relative;width:100%}div.dxp.dxp-selector-menu .list-wrapper{list-style:none;position:absolute;left:0;z-index:10;border-radius:.25rem;padding:0;width:100%;max-height:29rem;overflow:hidden;overflow-y:auto}div.dxp.dxp-selector-menu .list-wrapper li{padding:.5625rem 1rem;outline:none;position:relative;cursor:pointer}div.dxp.dxp-selector-menu .list-wrapper li p{margin:0;word-break:break-word}\@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){div.dxp.dxp-selector-menu .list-wrapper li p{word-break:break-all}}div.dxp.dxp-selector-menu .list-wrapper li .icon-wrapper{position:absolute;top:.75rem;right:1rem}div.dxp.dxp-selector-menu .list-wrapper li .has-icon{padding-right:2rem}div.dxp.dxp-selector-menu .list-wrapper.no-scroll{overflow:hidden}div.dxp.dxp-selector-menu .spinner-wrapper{position:absolute;left:0;top:0;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:9}div.dxp.dxp-selector-menu[dir=rtl] .btn-link{padding:.125rem 0 .125rem 1.5rem}div.dxp.dxp-selector-menu[dir=rtl] .btn-link .select-caret{right:auto;left:.25rem}div.dxp.dxp-selector-menu[dir=rtl] .option-with-details-button{text-align:right}div.dxp.dxp-selector-menu[dir=rtl] .option-with-details-button .option-with-details-name{padding-left:1.5rem;padding-right:0}div.dxp.dxp-selector-menu[dir=rtl] .option-with-details-button .option-with-details-name i{left:0;right:auto}div.dxp.dxp-selector-menu[dir=rtl] .option-with-details-button .option-with-details-location.p-r-24{padding-left:1.5rem;padding-right:0}div.dxp.dxp-selector-menu[dir=rtl] .option-with-details-button .close-selector-menu{right:auto;left:1.25rem}div.dxp.dxp-selector-menu[dir=rtl] .selector-button-wrapper .default-selector,div.dxp.dxp-selector-menu[dir=rtl] .selector-button-wrapper input[type=text]{text-align:right;padding-right:1rem;padding-left:1.625rem}div.dxp.dxp-selector-menu[dir=rtl] .selector-button-wrapper .default-selector.more-padding,div.dxp.dxp-selector-menu[dir=rtl] .selector-button-wrapper input[type=text].more-padding{padding-right:.75rem;padding-left:3.125rem}div.dxp.dxp-selector-menu[dir=rtl] .selector-button-wrapper .clear-search-btn{right:auto;left:1.875rem}div.dxp.dxp-selector-menu[dir=rtl] .selector-button-wrapper .select-caret{right:auto;left:.375rem}div.dxp.dxp-selector-menu[dir=rtl] .list-wrapper{left:auto;right:0}div.dxp.dxp-selector-menu[dir=rtl] .list-wrapper li .icon-wrapper{right:auto;left:1rem}div.dxp.dxp-selector-menu[dir=rtl] .list-wrapper li .has-icon{padding-right:0;padding-left:2rem}"}};export{d as dxp_selector_menu};
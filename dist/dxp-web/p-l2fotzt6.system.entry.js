System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js"],(function(e){"use strict";var t,i,n,r,o,s;return{setters:[function(e){t=e.r;i=e.c;n=e.d;r=e.h;o=e.g},function(e){s=e.B}],execute:function(){var a=e("dxp_radio_button",function(){function e(e){t(this,e);this.alignment="horizontal";this.radioSelected=i(this,"radioSelected",7)}e.prototype.componentWillLoad=function(){this.base=new s(this,n)};e.prototype.componentDidLoad=function(){this.element.querySelector("label").innerHTML=this.radioKey};e.prototype.routingHandler=function(e){this.base.routingEventListener(e)};e.prototype.handleChange=function(e){this.radioSelected.emit({name:e.target.getAttribute("name"),value:e.target.getAttribute("value"),isChecked:e.target.checked})};e.prototype.render=function(){var e=this;var t=[r("link",{rel:"stylesheet",href:""}),[this.theme&&r("link",{rel:"stylesheet",href:""})],[this.theme&&r("link",{rel:"stylesheet",href:n.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-radio-button.min.css"})]];return r("div",{class:this.base.componentClass()+" "+this.alignment,dir:this.dir,"data-theme":this.theme},t,r("input",{onChange:function(t){return e.handleChange(t)},id:this.radioKey,type:"radio",key:this.radioKey,name:this.name,value:this.radioValue,checked:this.checked,disabled:this.isDisabled}),r("label",{htmlFor:this.radioKey},this.radioKey))};Object.defineProperty(e.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"div.dxp.dxp-radio-button{margin:10px 10px 0}div.dxp.dxp-radio-button.horizontal{display:-ms-inline-flexbox;display:inline-flex}div.dxp.dxp-radio-button.vertical{display:grid}div.dxp.dxp-radio-button input[type=radio]{position:absolute;opacity:0;width:0}div.dxp.dxp-radio-button input[type=radio]+label{padding-left:26px;position:relative;margin:0}div.dxp.dxp-radio-button input[type=radio]+label:before{content:\"\";width:18px;height:18px;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}div.dxp.dxp-radio-button input[type=radio][disabled]{pointer-events:none}div.dxp.dxp-radio-button input[type=radio][disabled]+label{cursor:not-allowed}div.dxp.dxp-radio-button[dir=rtl] input[type=radio]+label{padding-left:0;padding-right:26px}div.dxp.dxp-radio-button[dir=rtl] input[type=radio]+label:before{left:auto;right:0}"},enumerable:true,configurable:true});return e}())}}}));
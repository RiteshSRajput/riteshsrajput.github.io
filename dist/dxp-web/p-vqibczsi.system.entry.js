var __awaiter=this&&this.__awaiter||function(t,e,i,r){function a(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function s(t){try{l(r.next(t))}catch(e){n(e)}}function o(t){try{l(r["throw"](t))}catch(e){n(e)}}function l(t){t.done?i(t.value):a(t.value).then(s,o)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,a,n,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return l([t,e])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,a&&(n=s[0]&2?a["return"]:s[0]?a["throw"]||((n=a["return"])&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;if(a=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;a=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(s[0]===6&&i.label<n[1]){i.label=n[1];n=s;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(s);break}if(n[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(o){s=[6,o];a=0}finally{r=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;for(var r=Array(t),a=0,e=0;e<i;e++)for(var n=arguments[e],s=0,o=n.length;s<o;s++,a++)r[a]=n[s];return r};System.register(["./p-f4cc861d.system.js","./p-4b0c1219.system.js","./p-5028b7e4.system.js"],(function(t){"use strict";var e,i,r,a,n,s;return{setters:[function(t){e=t.r;i=t.d;r=t.h;a=t.g},function(t){n=t.B},function(t){s=t.m}],execute:function(){var o="is-visible";var l=t("dxp_data_grid",function(){function t(t){e(this,t);this.defaultColumnWidth="200px";this.selectAllColumnWidth="50px";this.isDataUpdated=false;this.isLoaded=false;this.pinnedColumns=[];this.showPaginationSection=true;this.visibleHeaders=[];this.visibleStackHeaders=[];this.enableExport=true;this.enablePagination=true;this.enableSearch=true;this.headers=[];this.maxColumnPins=2;this.rowsperpage=10;this.selectionType="grid";this.stackHeaders=[];this.stickyHeader=true}t.prototype.dataChangeHandler=function(t,e){if(t!==e){this.isDataUpdated=true}};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.base=new n(this,i);this.base.i18Init(i,"DataGrid",s);return[4,this.updateDataGrid()];case 1:t.sent();this.isDataUpdated=false;return[2]}}))}))};t.prototype.componentDidLoad=function(){if(this.data&&!this.isLoaded){this.setDataGrid()}};t.prototype.componentWillUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.addStyles();if(!this.isDataUpdated)return[3,2];return[4,this.updateDataGrid()];case 1:t.sent();this.gridRows.innerHTML="";this.gridHeaders.innerHTML="";this.isLoaded=false;this.setDataGrid();this.isDataUpdated=false;t.label=2;case 2:return[2]}}))}))};t.prototype.clickFilterHandler=function(t){this.isFilterVisible=t.detail==="OTHER"};t.prototype.clickHandler=function(){this.toggleFilterDialog();if(this.exportSection&&this.exportSection.classList.contains(o)){this.exportSection.classList.remove(o);var t=this.element.querySelector(".action-export");t.classList.remove("hide-link");t.setAttribute("aria-expanded","false")}};t.prototype.clickToggleFilter=function(t){this.filterKey=t.detail};t.prototype.dataGridEventHandler=function(t){var e=this;var i=t.detail;var r=this.gridRows.querySelectorAll('dxp-checkbox[dxpgrid="select"]');if(i.actionName==="ActionForDxpSelectAll"){this.dataArray=this.dataArray.map((function(t,r){return Object.assign(Object.assign({},t),{dxpSelectedRow:r>=e.dataSliceStartIndex&&r<e.dataSliceEndIndex?i.details.isChecked:t.dxpSelectedRow})}));r.forEach((function(t){t["setChecked"](i.details.isChecked)}))}if(i.actionName==="ActionForDxpSelect"){this.dataArray=this.dataArray.map((function(t){return t.dxpRowId===i.row.dxpRowId?Object.assign(Object.assign({},t),{dxpSelectedRow:i.details.isChecked}):t}))}this.setSelectAll()};t.prototype.filterDataGrid=function(t){if(t.detail.filterAction==="filtering"){this.cellOptions.filterOptions[t.detail.cellKey]={filterAction:"filtering",filterCondition:t.detail.filterCondition,filterValue:t.detail.filterValue};if(typeof t.detail.cellKey==="function"){this.cellOptions.filterOptions[t.detail.cellKey].cellKeyFunction=t.detail.cellKey}}else if(t.detail.filterAction==="remove-filter"&&this.cellOptions.filterOptions&&this.cellOptions.filterOptions[t.detail.cellKey]){delete this.cellOptions.filterOptions[t.detail.cellKey]}this.updateDataArrayOnFilter();this.setIndexToSliceArray(this.dataArray,0,this.rowsperpage);this.gridRows.innerHTML="";this.gridHeaders.innerHTML="";this.isLoaded=false;this.setDataGrid()};t.prototype.handleKeyEvents=function(t){var e=t.key||t.keyCode;if(e===" "||e===32||(e==="Enter"||e===13)){this.clickHandler()}t.stopPropagation()};t.prototype.nextpage=function(t){this.setIndexToSliceArray(this.dataArray,t.detail.firstRowIndex,t.detail.lastRowIndex);this.gridRows.innerHTML="";this.gridHeaders.innerHTML="";this.isLoaded=false;this.setDataGrid()};t.prototype.pinColumn=function(t){if(t.detail.status){this.cellOptions.pinnedColumns[t.detail.cellKey]=0;if(Object.keys(this.cellOptions.pinnedColumns).length>=this.maxColumnPins){this.cellOptions.maxPinsReached=true}}else{delete this.cellOptions.pinnedColumns[t.detail.cellKey];this.cellOptions.maxPinsReached=false}if(!this.enablePagination){this.setIndexToSliceArray(this.dataArray,0,this.rowsperpage)}this.gridRows.innerHTML="";this.gridHeaders.innerHTML="";this.isLoaded=false;this.setDataGrid()};t.prototype.routingHandler=function(t){this.base.routingEventListener(t)};t.prototype.sortDataGrid=function(t){this.cellOptions.sortOptions={};this.dataArray=JSON.stringify(this.cellOptions.filterOptions)==="{}"?__spreadArrays(this.defaultDataArray):__spreadArrays(this.filteredDataArray);this.dataArray=this.searchString===""?__spreadArrays(this.dataArray):this.applySearchToArray(__spreadArrays(this.dataArray));if(t.detail.sortAction!=="remove-sort"){this.cellOptions.sortOptions[t.detail.cellKey]=t.detail.sortAction;if(typeof t.detail.cellKey==="function"){this.cellOptions.sortOptions.cellKeyFunction=t.detail.cellKey}this.dataArray=this.applySortingToArray(__spreadArrays(this.dataArray))}this.setIndexToSliceArray(this.dataArray,0,this.rowsperpage);this.gridRows.innerHTML="";this.gridHeaders.innerHTML="";this.isLoaded=false;this.setDataGrid()};t.prototype.submitHandler=function(t){t.preventDefault();if(t.target.getAttribute("btn-id")==="exportcsv"){var e=this.jsonToCSV();i.util.downloadFile(e,"csv")}if(t.target.getAttribute("btn-id")==="exportpdf"){var r=this.jsonToPDF();i.util.downloadFile(r,"pdf")}if(t.target.getAttribute("btn-id")==="printpreview"){var a=this.jsonToPrint();i.print({printable:a.body,properties:a.head,type:"json"})}};t.prototype.addStyles=function(){var t=this.element?this.element:this.element;var e={"data-id":"data-grid"};if(t.querySelectorAll('link[data-id="data-grid"]').length<=3){var r="";i.util.appendLinkElement(t,r,e);r="";i.util.appendLinkElement(t,r,e);r=i.config.get("DXP_STYLE_BASE_URL")+"/themes/"+this.theme+"/dxp-data-grid.min.css";i.util.appendLinkElement(t,r,e)}};t.prototype.appendNestedMarkup=function(t,e,i){var r=this;var a=document.createDocumentFragment();var n=[];if(i&&e&&t){i.forEach((function(t){var i=document.createElement(e);var s=r.base.formatDataObjectKeys(t);Object.assign(i,s);a.appendChild(i);n.push(i)}));t.appendChild(a)}return n};t.prototype.applyFiltersToArray=function(t){var e=this;Object.keys(this.cellOptions.filterOptions).forEach((function(i){t=e.cellOptions.filterOptions[i].hasOwnProperty("cellKeyFunction")?e.cellOptions.filterOptions[i].filterCondition==="isEqualTo"?t.filter((function(t){return e.cellOptions.filterOptions[i].cellKeyFunction(t).toLowerCase()===e.cellOptions.filterOptions[i].filterValue.toLowerCase()})):t.filter((function(t){return e.cellOptions.filterOptions[i].cellKeyFunction(t).toLowerCase()!==e.cellOptions.filterOptions[i].filterValue.toLowerCase()})):e.cellOptions.filterOptions[i].filterCondition==="isEqualTo"?t.filter((function(t){return t[i].toString().toLowerCase()===e.cellOptions.filterOptions[i].filterValue.toLowerCase()})):t.filter((function(t){return t[i].toString().toLowerCase()!==e.cellOptions.filterOptions[i].filterValue.toLowerCase()}))}));return t};t.prototype.applySearchToArray=function(t){var e=this;t=t.filter((function(t){var i=false;e.visibleHeaders.forEach((function(r){var a=r["column_type"];if(!a||a==="text"||a==="number"){var n=r["column_key"];var s=typeof n==="function"?n(t):t[n];if(s.toString().toLowerCase().includes(e.searchString.toLowerCase())){i=true}}}));if(i){return t}}));return t};t.prototype.applySortingToArray=function(t){var e=this.cellOptions.sortOptions;if(e.hasOwnProperty("cellKeyFunction")){t.sort((function(t,i){if(e.cellKeyFunction(t)>e.cellKeyFunction(i)){return 1}if(e.cellKeyFunction(t)<e.cellKeyFunction(i)){return-1}return 0}))}else{t.sort((function(t,i){if(t[Object.keys(e)[0]]>i[Object.keys(e)[0]]){return 1}if(t[Object.keys(e)[0]]<i[Object.keys(e)[0]]){return-1}return 0}))}return e[Object.keys(e)[0]]==="descending"?t.reverse():t};t.prototype.createRow=function(t){if(t.isHeader||t.isStackHeader){this.appendNestedMarkup(this.gridHeaders,"dxp-data-grid-row",[t])}else{this.appendNestedMarkup(this.gridRows,"dxp-data-grid-row",[t])}};t.prototype.createRowsContent=function(){var t=this;this.dataArray.slice(this.rowStartIndex,this.rowEndIndex).forEach((function(e){var i=t.visibleHeaders.map((function(t){var i="";var r=t.column_key;var a=t["column_type"];var n=t["column_width"];var s="";if(!a||a==="text"||a==="number"){var o=t["column_key"];i=typeof o==="function"?o(e):e[o]}else{s=t["column_data"]}return{cellType:a?a:"text",cellKey:r,content:i,data:{celldata:s,row:e,header:t},width:n}}));var r={cellType:"checkbox",pinned:0,width:t.selectAllColumnWidth,data:{celldata:{value:"select",name:""},row:e,header:{column_action:"ActionForDxpSelect",column_key:"dxpSelectedRow"}}};var a={data:{rowStructure:t.enableRowSelection?__spreadArrays([r],i):i,row:e,headers:t.visibleHeaders,pinnedColumns:t.cellOptions.pinnedColumns}};t.createRow(a)}))};t.prototype.getFormatedRows=function(t){var e=this;return this.dataArray.filter((function(t,i){return t.dxpSelectedRow&&(i>=e.dataSliceStartIndex&&i<e.dataSliceEndIndex)})).map((function(e){return t.map((function(t){var i=t["column_key"];return typeof i==="function"?i(e):e[i]}))}))};t.prototype.handlerDataGridScroll=function(t){if(t.target.scrollHeight-t.target.scrollTop+7<t.target.offsetHeight){if(!this.enablePagination){this.rowStartIndex=this.rowEndIndex;this.rowEndIndex=this.rowStartIndex+this.rowsperpage;this.setDataGrid()}}};t.prototype.jsonToCSV=function(){var t=this.headers.filter((function(t){return!t.column_type||t.column_type==="text"}));var e=t.map((function(t){return t.column_name}));var i=this.getFormatedRows(t);var r=__spreadArrays([e],i);return r.map((function(t){return t.join(",")})).join("\r\n").toString()};t.prototype.jsonToPDF=function(){var t=this.headers.filter((function(t){return!t.column_type||t.column_type==="text"}));var e=t.map((function(t){return t.column_name}));var i=this.getFormatedRows(t);return{head:e,body:i}};t.prototype.jsonToPrint=function(){var t=this;var e=this.headers.filter((function(t){return!t.column_type||t.column_type==="text"}));var i=e.map((function(t){return{field:typeof t.column_key==="function"?t.column_name.toLowerCase().replace(" ","_"):t.column_key,displayName:t.column_name}}));var r=this.dataArray.filter((function(e,i){return e.dxpSelectedRow&&(i>=t.dataSliceStartIndex&&i<t.dataSliceEndIndex)})).map((function(t){var i={};e.map((function(e){var r=e.column_key;var a=typeof e.column_key==="function"?e.column_name.toLowerCase().replace(" ","_"):e.column_key;i[a]=typeof r==="function"?r(t):t[r]?t[r]:""}));return i}));var a={head:i,body:r};return a};t.prototype.onSearchText=function(t){this.searchString=t.target.value&&t.target.value.trim()?t.target.value.trim():"";this.updateDataArrayOnFilter();this.setIndexToSliceArray(this.dataArray,0,this.rowsperpage);this.gridRows.innerHTML="";this.gridHeaders.innerHTML="";this.isLoaded=false;this.setDataGrid()};t.prototype.setDataGrid=function(){var t=this;if((!this.headers||this.headers.length===0)&&this.dataArray){this.setHeaders()}this.setStackHeader();var e=this.dataArray.slice(this.dataSliceStartIndex,this.dataSliceEndIndex).every((function(t){return t.dxpSelectedRow}));var i={cellType:"checkbox",pinned:0,width:this.selectAllColumnWidth,data:{celldata:{value:"selectall",name:"",selected:e},header:{column_action:"ActionForDxpSelectAll"}}};var r={width:this.selectAllColumnWidth,pinned:0,data:{celldata:{value:"selectall",name:"",selected:e},header:{column_action:"ActionForDxpSelectAll"}}};var a=this.visibleHeaders.map((function(e){return{cellType:"text",content:e.column_name,cellKey:e.column_key,enableFilter:t.enableFilter,cellOptions:t.cellOptions,width:e.column_width}}));var n=this.visibleStackHeaders.map((function(t){return{cellType:"text",content:t.column_name,width:t.column_width,pinned:t.pinned}}));var s={isHeader:true,data:{rowStructure:this.enableRowSelection?__spreadArrays([i],a):a,pinnedColumns:this.cellOptions.pinnedColumns}};var o={isStackHeader:true,data:{rowStructure:this.enableRowSelection?__spreadArrays([r],n):n},stackHeaderColor:this.enableStackheaderBgcolor};if(this.enablePagination||!this.isLoaded){if(this.stackHeaders&&this.stackHeaders.length!==0&&this.dataArray){this.createRow(o)}if(this.enablePagination){this.showPaginationSection=this.dataArray.length>this.rowsperpage}this.createRow(s)}this.createRowsContent();this.isLoaded=true};t.prototype.setHeaders=function(){var t=this.dataArray.reduce((function(t,e){t=t||[];Object.keys(e).forEach((function(e){if(!t.includes(e)){t.push(e)}}));return t}),[]);this.headers=t.map((function(t){return{column_name:t,column_key:t}}))};t.prototype.setIndexToSliceArray=function(t,e,i){this.rowStartIndex=e;this.rowEndIndex=i;this.dataSliceStartIndex=this.selectionType==="page"?this.rowStartIndex:0;this.dataSliceEndIndex=this.selectionType==="page"?this.rowEndIndex:t.length};t.prototype.setSelectAll=function(){var t=__spreadArrays(this.gridHeaders.querySelectorAll('dxp-checkbox[dxpgrid="selectall"]'),this.gridRows.querySelectorAll('dxp-checkbox[dxpgrid="selectall"]'));var e=this.dataArray.slice(this.dataSliceStartIndex,this.dataSliceEndIndex).every((function(t){return t.dxpSelectedRow}));if(t&&t.length>0){t[0]["setChecked"](e)}};t.prototype.setStackHeader=function(){var t=this;var e=[];var r=[];var a=[];var n=0;var s=this.enableRowSelection?parseInt(this.selectAllColumnWidth.replace("px",""),10):0;var o=0;var l={pinned:s,column_name:i.i18n.t("DataGrid:pinnedColumnsText"),column_width:"0px"};var c={column_width:"0px"};this.headers.map((function(i){if(Object.keys(t.cellOptions.pinnedColumns).indexOf(i.column_key)>-1){t.cellOptions.pinnedColumns[i.column_key]=s;i.column_width=i.column_width||t.defaultColumnWidth;e.push(i);n=n+parseInt(i.column_width.replace("px",""),10);s=s+parseInt(i.column_width.replace("px",""),10)}else if(!i.stack_key||!i.stack_key.length||!t.stackHeaders||t.stackHeaders.length===0){a.push(i);i.column_width=i.column_width||t.defaultColumnWidth;o=o+parseInt(i.column_width.replace("px",""),10)}}));if(this.stackHeaders&&this.stackHeaders.length!==0&&this.dataArray){this.showStackHeaders(r,l,n,c,o)}this.visibleHeaders=__spreadArrays(e,r,a)};t.prototype.showStackHeaders=function(t,e,i,r,a){var n=this;this.stackHeaders.map((function(s){s.column_width=0;n.headers.map((function(e){var i=e.stack_key;var r=s.column_id;if(i&&i.findIndex((function(t){return t.value===r}))>=0&&Object.keys(n.cellOptions.pinnedColumns).indexOf(e.column_key)===-1){t.push(e);e.column_width=e.column_width||n.defaultColumnWidth;s.column_width=s.column_width+parseInt(e.column_width.replace("px",""),10)}}));e.column_width=i+"px";r.column_width=a+"px";s.column_width=s.column_width+"px"}));if(i>0){this.stackHeaders.unshift(e)}this.stackHeaders.push(r);this.visibleStackHeaders=this.stackHeaders.filter((function(t){return parseInt(t.column_width.replace("px",""),10)>0}))};t.prototype.toggleClick=function(t){this.toggleFilterDialog();t.preventDefault();this.exportSection.classList.toggle(o);var e=this.element.querySelector(".action-export");e.classList.toggle("hide-link");e.setAttribute("aria-expanded",e.classList.contains("hide-link")?"true":"false");t.stopPropagation()};t.prototype.toggleFilterDialog=function(){var t=this;if(!this.isFilterVisible){var e=this.gridHeaders.querySelectorAll("dxp-data-grid-filter");e.forEach((function(e){if(e["cellKey"]!==t.filterKey){e.closest("dxp-data-grid-cell")["showFilters"]=false;e.parentNode.parentNode["classList"].remove("is-selected")}else{e.closest("dxp-data-grid-cell")["showFilters"]=true;e.parentNode.parentNode["classList"].add("is-selected")}}));this.filterKey=""}else{this.isFilterVisible=false}};t.prototype.toggleKey=function(t){var e=t.key||t.keyCode;if(e===" "||e===32||(e==="Enter"||e===13)){this.toggleClick(t)}};t.prototype.updateDataArrayOnFilter=function(){var t=this.searchString===""?__spreadArrays(this.defaultDataArray):this.applySearchToArray(__spreadArrays(this.defaultDataArray));this.filteredDataArray=this.applyFiltersToArray(__spreadArrays(t));this.dataArray=JSON.stringify(this.cellOptions.sortOptions)==="{}"?__spreadArrays(this.filteredDataArray):this.applySortingToArray(__spreadArrays(this.filteredDataArray));this.filteredDataArray=__spreadArrays(this.dataArray)};t.prototype.updateDataGrid=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,a;var n=this;return __generator(this,(function(s){switch(s.label){case 0:this.searchString="";this.cellOptions={sortOptions:{},pinnedColumns:{},maxPinsReached:false,filterOptions:{}};if(!this.apiUrl)return[3,4];s.label=1;case 1:s.trys.push([1,3,,4]);t=this;return[4,i.api(this.apiUrl)];case 2:t.data=s.sent();this.data=JSON.stringify(this.data);return[3,4];case 3:e=s.sent();i.log.error("fetch failed for "+this.apiUrl,e);return[3,4];case 4:if(!this.headerUrl)return[3,8];s.label=5;case 5:s.trys.push([5,7,,8]);r=this;return[4,i.api(this.headerUrl)];case 6:r.headers=s.sent();return[3,8];case 7:a=s.sent();i.log.error("fetch failed for "+this.headerUrl,a);return[3,8];case 8:if(this.data){this.defaultDataArray=typeof this.data==="string"?JSON.parse(this.data).map((function(t,e){return Object.assign({dxpRowId:e,dxpSelectedRow:!n.enableRowSelection},t)})):this.data.map((function(t,e){return Object.assign({dxpRowId:e,dxpSelectedRow:!n.enableRowSelection},t)}));this.setIndexToSliceArray(this.defaultDataArray,0,this.rowsperpage);this.dataArray=__spreadArrays(this.defaultDataArray)}return[2]}}))}))};t.prototype.render=function(){var t=this;i.log.debug(this.element.tagName,"render()","in dxp-data-grid render() : "+"DEVELOPMENT");return r("div",{class:this.base.componentClass()+" data-grid",dir:this.dir,"data-theme":this.theme,style:{width:this.width}},r("div",{class:"dxp-flex grid-options"},this.enableExport?r("div",{class:"dxp-flex align-center"},r("div",{class:"action-menu dxp-flex"},r("a",{href:"javascript : void(0)",role:"link",class:"action-export",onClick:function(e){return t.toggleClick(e)},onKeyPress:function(e){return t.toggleKey(e)},"aria-expanded":"false","aria-label":i.i18n.t("DataGrid:export")},r("span",null,i.i18n.t("DataGrid:export")),r("i",{class:"dxp-icon dxp-icon-caret-down"})),r("div",{class:"action-list-wrapper",ref:function(e){return t.exportSection=e}},r("div",{class:"action-list"},r("div",{class:"action-arrow"}),r("span",{class:"action-link"},r("dxp-cta",{type:"link","link-type":"dxp-btn-custom-link",href:"javascript : void(0)","btn-id":"exportcsv",text:i.i18n.t("DataGrid:exportCSV"),onClick:function(e){return t.submitHandler(e)}})),r("span",{class:"action-link"},r("dxp-cta",{type:"link","link-type":"dxp-btn-custom-link",href:"javascript : void(0)","btn-id":"exportpdf",text:i.i18n.t("DataGrid:exportPDF"),onClick:function(e){return t.submitHandler(e)}}))))),r("div",{class:"dxp-inline-block printer-icon"},r("dxp-cta",{type:"link","link-type":"dxp-btn-custom-link",href:"javascript : void(0)","btn-id":"printpreview","aria-label":i.i18n.t("DataGrid:printPreview"),"icon-align":"left",src:"https://fusion.mastercard.int/stash/projects/DXP/repos/dxp-demo-assets/raw/images/icons/printer.svg",text:i.i18n.t("DataGrid:printPreview"),onClick:function(e){return t.submitHandler(e)}}))):"",this.enableSearch?r("div",{class:"search-block"},r("div",{class:"search-wrapper"},r("input",{type:"text",name:"searchbox",value:this.searchString,class:"dxp-form-control search-input",placeholder:i.i18n.t("DataGrid:searchText"),onKeyUp:function(e){t.onSearchText(e)}}),r("span",{class:"dxp-icon dxp-icon-small dxp-icon-search search-icon"}),r("span",{tabindex:"0",role:"button","aria-label":i.i18n.t("DataGrid:clearSearchText"),class:"dxp-icon dxp-icon-small dxp-icon-close "+(this.searchString.length?" dxp-flex":" dxp-none"),onClick:function(e){return t.onSearchText(e)},onKeyPress:function(e){return t.onSearchText(e)}}))):""),r("div",{class:"table-wrapper",style:{height:this.height},onScroll:function(e){return t.handlerDataGridScroll(e)}},r("div",{class:"data-grid dxp-data-grid-table"},r("div",{class:"header-wrapper "+(this.stickyHeader?"sticky-top":""),ref:function(e){return t.gridHeaders=e}},r("slot",null)),r("div",{ref:function(e){return t.gridRows=e}},r("slot",null))),this.dataArray&&!this.dataArray.length?r("div",{class:"no-result-found"},i.i18n.t("DataGrid:noResultFoundText")):""),this.enablePagination&&this.dataArray&&this.dataArray.length?r("dxp-grid-pagination",{"total-rows-per-page":this.rowsperpage,"total-rows":this.dataArray.length,width:this.width,"show-pagination-section":this.showPaginationSection}):"")};Object.defineProperty(t.prototype,"element",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{data:["dataChangeHandler"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"div.dxp.dxp-data-grid{margin-bottom:20px;display:block}div.dxp.dxp-data-grid ::slotted(dxp-data-grid-row){display:-ms-inline-flexbox;display:inline-flex}div.dxp.dxp-data-grid ::slotted(dxp-data-grid-row:nth-child(odd)) dxp-data-grid-row:nth-child(odd){display:block}div.dxp.dxp-data-grid ::slotted(dxp-data-grid-row:nth-child(odd)) ::slotted(dxp-data-grid-row:first-child){background-color:none}div.dxp.dxp-data-grid .grid-options{padding:.5rem .75rem 1rem;-ms-flex-wrap:wrap;flex-wrap:wrap}div.dxp.dxp-data-grid .grid-options .cta-block{padding-bottom:.5rem;min-width:40%}div.dxp.dxp-data-grid .grid-options .search-block{-ms-flex:1;flex:1}div.dxp.dxp-data-grid .grid-options .search-block .search-wrapper{position:relative;max-width:30rem;min-width:20rem;width:100%;float:right}div.dxp.dxp-data-grid .grid-options .search-block .search-wrapper .search-input{padding:.5rem 2.5rem .5rem 2.5rem;border-radius:2rem}div.dxp.dxp-data-grid .grid-options .search-block .search-wrapper .dxp-icon-close,div.dxp.dxp-data-grid .grid-options .search-block .search-wrapper .dxp-icon-search{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}div.dxp.dxp-data-grid .grid-options .search-block .search-wrapper .dxp-icon-search{left:1rem}div.dxp.dxp-data-grid .grid-options .search-block .search-wrapper .dxp-icon-close{cursor:pointer;right:1rem}div.dxp.dxp-data-grid .grid-options .printer-icon{padding-left:1rem}div.dxp.dxp-data-grid .grid-options .action-menu{position:relative}div.dxp.dxp-data-grid .grid-options .action-menu .action-list-wrapper{z-index:5;position:absolute;visibility:hidden;opacity:0;left:-.5rem;top:100%;-webkit-transition:all .2s ease-in;transition:all .2s ease-in;padding-top:.5rem}div.dxp.dxp-data-grid .grid-options .action-menu .action-list-wrapper .action-list{border-radius:.25rem;padding:.5rem 0;z-index:5;width:8.5rem}div.dxp.dxp-data-grid .grid-options .action-menu .action-list-wrapper .action-list .action-link{display:block;padding:.45rem 1.25rem}div.dxp.dxp-data-grid .grid-options .action-menu .action-list-wrapper .action-list .action-link a{display:-ms-flexbox;display:flex}div.dxp.dxp-data-grid .grid-options .action-menu .action-list-wrapper .action-list .action-link a:hover{text-decoration:underline}div.dxp.dxp-data-grid .grid-options .action-menu .action-list-wrapper .action-list .action-link a .btn-icon{display:inline-block;width:1rem;margin-right:.75rem}div.dxp.dxp-data-grid .grid-options .action-menu .action-list-wrapper .action-list .action-arrow{height:0;width:0;border-left:.5rem solid transparent;border-right:.5rem solid transparent;position:absolute;top:0;left:.5rem}div.dxp.dxp-data-grid .grid-options .action-menu .action-list-wrapper.is-visible{visibility:visible;opacity:1}div.dxp.dxp-data-grid .grid-options .action-menu a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}div.dxp.dxp-data-grid .grid-options .action-menu a:hover span{text-decoration:underline}div.dxp.dxp-data-grid .grid-options .action-menu a i{margin-left:.75rem;-webkit-transition:-webkit-transform .2s linear;transition:-webkit-transform .2s linear;transition:transform .2s linear;transition:transform .2s linear,-webkit-transform .2s linear}div.dxp.dxp-data-grid .grid-options .action-menu a.hide-link i{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}div.dxp.dxp-data-grid .grid-options .align-center{-ms-flex-align:center;align-items:center}.table-wrapper{overflow:auto;position:relative;display:inline-block;max-width:100%;min-height:40rem}.table-wrapper .header-wrapper{z-index:4}.table-wrapper .header-wrapper.sticky-top{position:-webkit-sticky;position:sticky;top:0}.table-wrapper .no-result-found{padding:2rem;text-align:center}.dxp-data-grid-table{overflow:scroll;display:table}"},enumerable:true,configurable:true});return t}())}}}));
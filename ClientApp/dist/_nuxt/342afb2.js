(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1882:function(t,e,r){var content=r(1896);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("0d39e88e",content,!0,{sourceMap:!1})},1888:function(t,e,r){var content=r(1901);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("4fd76f73",content,!0,{sourceMap:!1})},1890:function(t,e,r){"use strict";r(203),r(43);var n={props:{storeKey:{}},components:{DxDateBox:r(1065).DxDateBox},data:function(){return{isVisibleBeforeValueInput:!1,fromValue:localStorage.hasOwnProperty("quick-filter-from-value-".concat(this.storeKey))?localStorage.getItem("quick-filter-from-value-".concat(this.storeKey)):null,beforeValue:localStorage.hasOwnProperty("quick-filter-before-value-".concat(this.storeKey))?localStorage.getItem("quick-filter-before-value-".concat(this.storeKey)):null}},methods:{fromValueChanged:function(t){null===t?localStorage.setItem("quick-filter-from-value-".concat(this.storeKey),""):localStorage.setItem("quick-filter-from-value-".concat(this.storeKey),t),this.$emit("valueChanged",this.filter)},beforeValueChanged:function(t){null===t?localStorage.setItem("quick-filter-before-value-".concat(this.storeKey),""):localStorage.setItem("quick-filter-before-value-".concat(this.storeKey),t),this.$emit("valueChanged",this.filter)},showEndInput:function(){this.isVisibleBeforeValueInput=!0},hideEndInput:function(){this.isVisibleBeforeValueInput=!1}},computed:{filter:function(){var t=this.fromValue?["created",">=",this.fromValue]:null,e=this.beforeValue?["created","<=",this.beforeValue]:null;return this.fromValue&&this.beforeValue?[t,"and",e]:this.fromValue?t:this.beforeValue?e:null}},watch:{fromValue:{handler:function(t){this.fromValueChanged(t)}},beforeValue:{handler:function(t){this.beforeValueChanged(t)}},filter:{handler:function(t,e){this.$emit("valueChanged",this.filter)},immediate:!0}}},o=r(7),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex align-center"},[r("DxDateBox",{attrs:{showClearButton:!0,placeholder:t.$t("shared.begining"),useMaskBehavior:!0,allowClearing:!0,openOnFieldClick:!0,type:"datetime",id:"fromValue",max:(new Date).getTime(),dateSerializationFormat:"yyyy-MM-ddTHH:mm:ss","styling-mode":"outlined"},model:{value:t.fromValue,callback:function(e){t.fromValue=e},expression:"fromValue"}}),t._v(" "),r("DxDateBox",{attrs:{showClearButton:!0,placeholder:t.$t("shared.end"),useMaskBehavior:!0,openOnFieldClick:!0,allowClearing:!0,type:"datetime",name:"fromValue",min:t.fromValue,max:(new Date).getTime(),dateSerializationFormat:"yyyy-MM-ddTHH:mm:ss","styling-mode":"outlined"},model:{value:t.beforeValue,callback:function(e){t.beforeValue=e},expression:"beforeValue"}})],1)}),[],!1,null,null,null).exports,c=r(457),d={components:{DxDropDownButton:r.n(c).a,RangeFilter:l},props:{dataSource:{},defaultValue:{default:0},storeKey:{}},data:function(){return{disabledQuickFilter:!1,rangeFilter:null,value:localStorage.hasOwnProperty("quick-filter-".concat(this.storeKey))?+localStorage.getItem("quick-filter-".concat(this.storeKey)):this.defaultValue}},methods:{rangeFilterChanged:function(t){if(this.rangeFilter=t,t){this.disabledQuickFilter=!0;var e=this.dataSource.find((function(t){return"All"===t.value}));this.value=e.id,localStorage.setItem("quick-filter-".concat(this.storeKey),this.value)}else this.disabledQuickFilter=!1},itemClick:function(t){this.value=t.itemData.id,localStorage.setItem("quick-filter-".concat(this.storeKey),this.value)},valueChanged:function(t,e){this.$emit("valueChanged",this.value,this.rangeFilter)}},watch:{rangeFilter:{handler:function(t,e){this.valueChanged(t)},immediate:!0},value:{handler:function(t,e){this.valueChanged(t)},immediate:!0}}},f=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex"},[r("RangeFilter",{attrs:{storeKey:t.storeKey},on:{valueChanged:t.rangeFilterChanged}}),t._v(" "),r("DxDropDownButton",{attrs:{disabled:t.disabledQuickFilter,useSelectMode:!0,"styling-mode":"text","display-expr":"text",width:"150","key-expr":"id",selectedItemKey:t.value,items:t.dataSource},on:{"item-click":t.itemClick}})],1)}),[],!1,null,null,null);e.a=f.exports},1893:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHRpdGxlPkhpZ2hpbXBvcnRhbmNlPC90aXRsZT48cG9seWdvbiBwb2ludHM9IjggMTEgNyAxMSA2IDAgOSAwIDggMTEiIGZpbGw9IiNkNjU2MzMiLz48Y2lyY2xlIGN4PSI3LjUiIGN5PSIxNC41IiByPSIxLjUiIGZpbGw9IiNkNjU2MzMiLz48L3N2Zz4="},1895:function(t,e,r){"use strict";r(1882)},1896:function(t,e,r){var n=r(25)(!1);n.push([t.i,"\n.icon--type {\r\n  display: flex;\r\n  margin: 0 auto;\r\n  width: 25px;\n}\r\n",""]),t.exports=n},1897:function(t,e,r){"use strict";var n=r(1893),o=r.n(n),l=r(571),c={props:["state"],computed:{path:function(){return this.state===l.a.High&&o.a}}},d=(r(1895),r(7)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.path?r("img",{staticClass:"icon--type",attrs:{src:t.path}}):t._e()])}),[],!1,null,null,null);e.a=component.exports},1900:function(t,e,r){"use strict";r(1888)},1901:function(t,e,r){var n=r(25)(!1);n.push([t.i,"\n.icon--type {\r\n  display: flex;\r\n  margin: 0 auto;\r\n  width: 25px;\n}\r\n",""]),t.exports=n},1903:function(t,e,r){"use strict";var n=r(96),o=(r(336),r(1897)),l=r(382),c={props:["taskTypeGuid"],computed:{icon:function(){var t=new l.a(this).getById(this.taskTypeGuid).icon;return t}}},d=(r(1900),r(7)),f=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"icon--type",attrs:{src:t.icon}})}),[],!1,null,null,null).exports,h=r(49),m=r(103),x=r(113),y=r.n(x),v=r(61),D=r.n(v),k=r(4),w=r(67),C=(r(124),r(1890)),S=r(570),I=(r(48),r(40),r(43),r(50),r(51),r(104),r(78),r(64),r(132),r(117),r(112),r(14)),O=r(32),_=r(33),F=r(125);function j(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return V(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var P=function(){function t(e,r){Object(O.a)(this,t),this.elements=Object(F.a)(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(I.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({Constant:S.a,translateName:"task.quickFilter",context:e},r))}return Object(_.a)(t,[{key:"filtering",value:function(t){var e={};for(var element in this.elements){var r,n=j(t);try{for(n.s();!(r=n.n()).done;){+element===r.value&&(e[element]=this.elements[element])}}catch(t){n.e(t)}finally{n.f()}}return e}},{key:"getAll",value:function(){return this.elements}},{key:"getById",value:function(t){return this.elements[t]}}]),t}(),T={components:{QuickFilter:C.a},props:["taskQuery"],data:function(){return{defaultFilter:S.a.InProcess,"QuiсkFilterGuid":S.a}},computed:{"QuiсkFilterItems":function(){return Object.values(new P(this).getAll()).map((function(t){return t.hint=t.text,t}))}},methods:{valueChanged:function(t,filter){this.$emit("valueChanged",t,filter)}}},G=Object(d.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("QuickFilter",{attrs:{defaultValue:t.defaultFilter,dataSource:t.QuiсkFilterItems,storeKey:"task-"+t.taskQuery},on:{valueChanged:t.valueChanged}})],1)}),[],!1,null,null,null).exports,B=r(284);e.a={components:{DxCheckBox:h.DxCheckBox,DxButton:y.a,Header:m.a,DxSearchPanel:w.DxSearchPanel,DxDataGrid:w.DxDataGrid,DxColumn:w.DxColumn,DxEditing:w.DxEditing,DxHeaderFilter:w.DxHeaderFilter,DxScrolling:w.DxScrolling,DxExport:w.DxExport,DxSelection:w.DxSelection,DxLookup:w.DxLookup,DxGrouping:w.DxGrouping,DxGroupPanel:w.DxGroupPanel,DxColumnChooser:w.DxColumnChooser,DxColumnFixing:w.DxColumnFixing,DxFilterRow:w.DxFilterRow,DxStateStoring:w.DxStateStoring,taskIcon:f,taskImportaceComponent:o.a,toolbarItemQuickFilter:G},data:function(){return{statusDataSource:Object(n.a)(Object.values(Object(B.b)(this)))}},methods:{setStore:function(t,filter){this.store=new D.a({store:this.$dxStore({key:"id",loadUrl:"".concat(k.a.task.Task).concat(this.taskQuery,"/").concat(t)}),filter:filter,sort:[{selector:"created",desc:!0}]})},onToolbarPreparing:function(header){header.toolbarOptions.items.unshift({widget:"button",location:"after",options:{icon:"refresh",onClick:this.reload}})},reload:function(){this.store.reload()},toDetail:function(t){var data=t.data;this.$router.push("/task/detail/".concat(data.taskType,"/").concat(data.id))},onRowPrepared:function(t){null!=t.data&&(this.showCompletedTask(t.data,t.rowElement.style),this.showDraftTask(t.data,t.rowElement.style))},showCompletedTask:function(data,style){data.status==B.a.Completed&&(style.textDecoration="line-through")},showDraftTask:function(data,style){data.status==B.a.Draft&&(style.fontStyle="italic")}}}},1973:function(t,e,r){var content=r(2103);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("698ee0dc",content,!0,{sourceMap:!1})},2102:function(t,e,r){"use strict";r(1973)},2103:function(t,e,r){var n=r(25)(!1);n.push([t.i,"\n#gridContainer .dx-data-row {\r\n  -webkit-user-select: none;\n}\n#gridContainer .dx-data-row:hover {\r\n  color: forestgreen;\n}\r\n",""]),t.exports=n},2273:function(t,e,r){"use strict";r.r(e);var n=r(579),o={mixins:[r(1903).a],data:function(){return{taskQuery:n.a.All,store:null}}},l=(r(2102),r(7)),c={components:{DefaultTaskGrid:Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Header",{attrs:{isbackButton:!0,headerTitle:t.$t("translations.headers.tasks")}},[n("toolbar-item-quick-filter",{attrs:{slot:"toolbar",taskQuery:t.taskQuery},on:{valueChanged:t.setStore},slot:"toolbar"})],1),t._v(" "),n("div",{staticClass:"grid"},[n("DxDataGrid",{attrs:{id:"gridContainer","show-borders":!0,"data-source":t.store,"remote-operations":!0,"allow-column-reordering":!0,"allow-column-resizing":!0,"column-auto-width":!1,"show-column-lines":!1,"load-panel":{enabled:!0,indicatorSrc:r(221)},onRowDblClick:t.toDetail,"on-row-prepared":t.onRowPrepared,"focused-row-enabled":!1},on:{"toolbar-preparing":function(e){return t.onToolbarPreparing(e)}},scopedSlots:t._u([{key:"isImportant",fn:function(t){return[n("task-importace-component",{attrs:{state:t.data.value}})]}},{key:"typeIcon",fn:function(t){return[n("task-icon",{attrs:{taskTypeGuid:t.data.value}})]}}])},[n("DxGroupPanel",{attrs:{visible:!0}}),t._v(" "),n("DxGrouping",{attrs:{"auto-expand-all":!1}}),t._v(" "),n("DxColumnChooser",{attrs:{enabled:!0}}),t._v(" "),n("DxColumnFixing",{attrs:{enabled:!0}}),t._v(" "),n("DxFilterRow",{attrs:{visible:!0}}),t._v(" "),n("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":t.$t("task.taskQuery.all")}}),t._v(" "),n("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"task"+t.taskQuery}}),t._v(" "),n("DxEditing",{attrs:{"allow-updating":!1,"allow-deleting":!1,"allow-adding":!1,useIcons:!0,mode:"form"}}),t._v(" "),n("DxSearchPanel",{attrs:{position:"after",visible:!0}}),t._v(" "),n("DxScrolling",{attrs:{mode:"virtual"}}),t._v(" "),n("DxColumn",{attrs:{caption:"","allow-filtering":!1,"allow-sorting":!1,allowResizing:!1,allowReordering:!1,allowHiding:!1,allowHeaderFiltering:!1,allowGrouping:!1,allowFixing:!1,allowExporting:!1,alignment:"center",allowSearch:!1,width:60,cellTemplate:"typeIcon",visible:!0,"data-field":"taskType"}}),t._v(" "),n("DxColumn",{attrs:{caption:"","allow-filtering":!1,"allow-sorting":!1,allowResizing:!1,allowReordering:!1,allowHiding:!1,allowHeaderFiltering:!1,allowGrouping:!1,allowFixing:!1,allowExporting:!1,alignment:"center",allowSearch:!1,width:40,cellTemplate:"isImportant",visible:!0,"data-field":"importance"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"subject",caption:t.$t("task.fields.subjectTask")}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"maxDeadline",caption:t.$t("task.fields.deadLine"),"data-type":"date",format:"dd.MM.yyyy HH:mm"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"created",caption:t.$t("task.fields.createdDate"),"sort-order":"desc",dataType:"date",format:"dd.MM.yyyy HH:mm"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"author",caption:t.$t("task.fields.author"),"data-type":"string"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"status",caption:t.$t("translations.fields.status")}},[n("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.statusDataSource,"value-expr":"id","display-expr":"text"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports}},d=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("Default-task-grid")}),[],!1,null,null,null);e.default=d.exports}}]);
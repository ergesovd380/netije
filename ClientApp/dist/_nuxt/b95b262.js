(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{2280:function(t,e,r){"use strict";r.r(e);r(203),r(64),r(68);var o=r(27),n=r(5),l=(r(30),r(4)),d=r(49),c=r(20),m=r.n(c),D={components:{DxSimpleItem:c.DxSimpleItem,DxButtonItem:c.DxButtonItem,DxLabel:c.DxLabel,DxRequiredRule:c.DxRequiredRule,DxForm:m.a,DxButton:d.DxButton},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat(l.a.docFlow.DocumentRegister.Value,"/CurrentNumber?documentRegisterId=").concat(t.documentRegisterId));case 2:r=e.sent,t.currentNumberData.value=r.data;case 4:case"end":return e.stop()}}),e)})))()},props:["documentRegisterId"],data:function(){return{currentNumberData:{id:this.documentRegisterId,value:null},saveButtonOptions:{height:40,text:this.$t("buttons.save"),useSubmitBehavior:!0,type:"normal"},numberBoxOptions:{placeholder:this.$t("translations.fields.currentNumberRequired"),min:1}}},methods:{handleSubmit:function(t){var e=this;this.$awn.asyncBlock(this.$axios.put("".concat(l.a.docFlow.DocumentRegister.Value,"/CurrentNumber/").concat(this.documentRegisterId),this.currentNumberData),(function(t){e.$emit("hidePopup"),e.$awn.success()}),(function(t){return e.$awn.alert()})),t.preventDefault()}}},x=r(7),h=Object(x.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:t.handleSubmit}},[r("DxForm",{attrs:{"form-data":t.currentNumberData,"read-only":!1,"show-colon-after-label":!0,"show-validation-summary":!0}},[r("DxSimpleItem",{attrs:{"data-field":"value","editor-options":t.numberBoxOptions,"editor-type":"dxNumberBox"}},[r("DxLabel",{attrs:{location:"top",visible:!1}}),t._v(" "),r("DxRequiredRule",{attrs:{message:t.$t("translations.fields.currentNumberRequired")}})],1),t._v(" "),r("DxButtonItem",{attrs:{"button-options":t.saveButtonOptions,"horizontal-alignment":"right"}})],1)],1)}),[],!1,null,null,null).exports,w=(r(61),r(103)),f=r(338),v=r(67),R={components:{Header:w.a,DxSearchPanel:v.DxSearchPanel,DxDataGrid:v.DxDataGrid,DxColumn:v.DxColumn,DxEditing:v.DxEditing,DxHeaderFilter:v.DxHeaderFilter,DxScrolling:v.DxScrolling,DxLookup:v.DxLookup,DxGrouping:v.DxGrouping,DxGroupPanel:v.DxGroupPanel,DxExport:v.DxExport,DxSelection:v.DxSelection,DxColumnChooser:v.DxColumnChooser,DxColumnFixing:v.DxColumnFixing,DxFilterRow:v.DxFilterRow,DxStateStoring:v.DxStateStoring,DxPopup:f.DxPopup,DxButton:v.DxButton,CurrentNumberPopup:h},data:function(){return{entityType:o.a.DocumentRegister,dataSource:this.$dxStore({key:"id",loadUrl:l.a.docFlow.DocumentRegister.All,removeUrl:l.a.docFlow.DocumentRegister.Value}),documentFlowDataSource:this.$store.getters["docflow/docflow"](this),registerTypeDataSource:this.$store.getters["docflow/registerType"](this),statusDataSource:this.$store.getters["status/status"](this),currentNuberPopupOpen:!1,selectedDocumentRegisterId:null,registrationGroupDataSource:{store:this.$dxStore({key:"id",loadUrl:l.a.docFlow.RegistrationGroup}),paginate:!0}}},methods:{select:function(t){this.$router.push("/docflow/document-register/".concat(t.data.id))},canUpdate:function(t){return this.canOperateWithDocumentRegister(t.row.data,"allowUpdating")},allowDeleting:function(t){return this.canOperateWithDocumentRegister(t.row.data,"allowDeleting")},canOperateWithDocumentRegister:function(t,e){var r,o=this.$store.getters["permissions/employeeId"];return!!this.$store.getters["permissions/IsAdmin"]||!!this.$store.getters["permissions/".concat(e)](this.entityType)&&((null===(r=t.registrationGroup)||void 0===r?void 0:r.responsibleEmployeeId)==o||!t.registrationGroupId)},showCurrentNumberPopup:function(t){this.selectedDocumentRegisterId=t.row.key,this.currentNuberPopupOpen=!0},hideCurrentNumberPopup:function(){this.currentNuberPopupOpen=!1},showDocumentRegisterEditForm:function(t){this.$router.push("/docflow/document-register/".concat(t.row.data.id))},onToolbarPreparing:function(t){var e=this,r=t.toolbarOptions.items.find((function(t){return"addRowButton"==t.name}));r&&(r.options.onClick=function(){e.$router.push("/docflow/document-register/create")})}}},S=Object(x.a)(R,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("DxPopup",{attrs:{visible:t.currentNuberPopupOpen,"drag-enabled":!1,"close-on-outside-click":!0,"show-title":!0,width:400,height:200,title:t.$t("translations.fields.currentNumber")},on:{"update:visible":function(e){t.currentNuberPopupOpen=e}}},[o("div",[t.currentNuberPopupOpen?o("current-number-popup",{attrs:{documentRegisterId:t.selectedDocumentRegisterId},on:{hidePopup:t.hideCurrentNumberPopup}}):t._e()],1)]),t._v(" "),o("Header",{attrs:{headerTitle:t.$t("menu.documentRegister")}}),t._v(" "),o("DxDataGrid",{attrs:{id:"gridContainer","show-borders":!0,"data-source":t.dataSource,"remote-operations":!1,errorRowEnabled:!1,"allow-column-reordering":!0,"allow-column-resizing":!0,"column-auto-width":!0,"load-panel":{enabled:!0,indicatorSrc:r(221)},onRowDblClick:t.select},on:{"toolbar-preparing":function(e){return t.onToolbarPreparing(e)}}},[o("DxGroupPanel",{attrs:{visible:!0}}),t._v(" "),o("DxGrouping",{attrs:{"auto-expand-all":!1}}),t._v(" "),o("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":t.$t("docFlow.fields.documentRegister")}}),t._v(" "),o("DxFilterRow",{attrs:{visible:!0}}),t._v(" "),o("DxHeaderFilter",{attrs:{visible:!0}}),t._v(" "),o("DxColumnChooser",{attrs:{enabled:!0}}),t._v(" "),o("DxColumnFixing",{attrs:{enabled:!0}}),t._v(" "),o("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"DocumentRegister"}}),t._v(" "),o("DxEditing",{attrs:{"allow-deleting":t.allowDeleting,"allow-adding":t.$store.getters["permissions/allowCreating"](t.entityType),useIcons:!0,mode:"form"}}),t._v(" "),o("DxSearchPanel",{attrs:{position:"after",visible:!0}}),t._v(" "),o("DxScrolling",{attrs:{mode:"virtual"}}),t._v(" "),o("DxColumn",{attrs:{"data-field":"name",caption:t.$t("shared.name"),"data-type":"string"}}),t._v(" "),o("DxColumn",{attrs:{"data-field":"index",caption:t.$t("translations.fields.index")}}),t._v(" "),o("DxColumn",{attrs:{"data-field":"documentFlow",caption:t.$t("docFlow.fields.documentFlow"),"data-type":"string"}},[o("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.documentFlowDataSource,"value-expr":"id","display-expr":"name"}})],1),t._v(" "),o("DxColumn",{attrs:{"data-field":"registerType",caption:t.$t("translations.fields.registerType")}},[o("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.registerTypeDataSource,"value-expr":"id","display-expr":"name"}})],1),t._v(" "),o("DxColumn",{attrs:{"data-field":"registrationGroupId",caption:t.$t("translations.fields.registrationGroupId")}},[o("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.registrationGroupDataSource,"value-expr":"id","display-expr":"name"}})],1),t._v(" "),o("DxColumn",{attrs:{"data-field":"status",caption:t.$t("translations.fields.status")}},[o("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.statusDataSource,"value-expr":"id","display-expr":"status"}})],1),t._v(" "),o("DxColumn",{attrs:{type:"buttons"}},[o("DxButton",{attrs:{icon:"more",text:t.$t("shared.more"),onClick:t.showDocumentRegisterEditForm}}),t._v(" "),o("DxButton",{attrs:{icon:"orderedlist",text:t.$t("translations.fields.currentNumber"),visible:t.canUpdate,onClick:t.showCurrentNumberPopup}}),t._v(" "),o("DxButton",{attrs:{icon:"trash",name:"delete"}})],1)],1)],1)}),[],!1,null,null,null);e.default=S.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{2339:function(t,e,o){"use strict";o.r(e);o(48),o(40),o(43),o(50),o(51);var n=o(14),r=o(5),d=(o(30),o(163)),l=(o(204),o(68)),c=o(27),m=(o(256),o(1066),o(103)),x=(o(61),o(20)),f=o.n(x),D=o(4);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var y={components:{Header:m.a,DxGroupItem:x.DxGroupItem,DxSimpleItem:x.DxSimpleItem,DxLabel:x.DxLabel,DxRequiredRule:x.DxRequiredRule,DxCompareRule:x.DxCompareRule,DxPatternRule:x.DxPatternRule,DxRangeRule:x.DxRangeRule,DxForm:f.a,Toolbar:d.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.app,n=t.params,e.next=3,o.$axios.get(D.a.docFlow.DocumentKind+"/"+n.id);case 3:return r=e.sent,e.abrupt("return",{documentKind:r.data});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{entityType:c.a.DocumentKind,codePattern:this.$store.getters["globalProperties/whitespacePattern"]}},methods:{handleSubmit:function(){var t=this;if(this.$refs.form.instance.validate().isValid){var object=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.documentKind);this.$awn.asyncBlock(this.$axios.put("".concat(D.a.docFlow.DocumentKind,"/").concat(object.id),object),(function(e){return t.$awn.success()}),(function(e){return t.$awn.alert()}))}}},computed:{hasDependencies:function(){return this.documentKind.hasDependencies},statusOptions:function(){return{valueExpr:"id",displayExpr:"status",dataSource:this.$store.getters["status/status"](this)}},numberingTypeOptions:function(){return{dataSource:this.$store.getters["docflow/numberingType"](this),valueExpr:"id",displayExpr:"name",disabled:this.hasDependencies}},documentFlowOptions:function(){var t=this;return{dataSource:this.$store.getters["docflow/docflow"](this),valueExpr:"id",displayExpr:"name",disabled:this.hasDependencies,onValueChanged:function(e){t.documentKind.documentTypeGuid=null}}},tagboxOptions:function(){return{dataSource:{store:this.$dxStore({key:"id",loadUrl:D.a.docFlow.DocumentSendAction}),filter:["status","=",l.b.Active]},valueExpr:"id",displayExpr:"name"}},docTypeOptions:function(){return{dataSource:{store:this.$dxStore({key:"id",loadUrl:D.a.docFlow.DocumentType}),filter:[["status","=",l.b.Active],"and",["documentFlow","=",this.documentKind.documentFlow]]},valueExpr:"id",displayExpr:"name",disabled:this.hasDependencies}}}},v=y,w=o(7),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",[o("Header",{attrs:{isNew:!1,isbackButton:!0,headerTitle:t.documentKind.name}}),t._v(" "),o("toolbar",{attrs:{canSave:t.$store.getters["permissions/allowUpdating"](this.entityType)},on:{saveChanges:t.handleSubmit}}),t._v(" "),o("DxForm",{ref:"form",attrs:{"col-count":1,"form-data":t.documentKind,"read-only":!t.$store.getters["permissions/allowUpdating"](t.entityType),"show-colon-after-label":!0},on:{"update:formData":function(e){t.documentKind=e},"update:form-data":function(e){t.documentKind=e}}},[o("DxGroupItem",{attrs:{"col-count":1}},[o("DxSimpleItem",{attrs:{"data-field":"code","data-type":"string"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("shared.code")}}),t._v(" "),o("DxRequiredRule",{attrs:{message:t.$t("shared.codeRequired")}}),t._v(" "),o("DxPatternRule",{attrs:{"ignore-empty-value":!1,pattern:t.codePattern,message:t.$t("validation.valueMustNotContainsSpaces")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"data-field":"name"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("shared.name")}}),t._v(" "),o("DxRequiredRule",{attrs:{message:t.$t("shared.nameRequired")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"data-field":"shortName"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("shared.shortName")}}),t._v(" "),o("DxRequiredRule",{attrs:{message:t.$t("shared.shortNameRequired")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"data-field":"documentFlow","editor-options":t.documentFlowOptions,"editor-type":"dxSelectBox"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("docFlow.fields.documentFlow")}}),t._v(" "),o("DxRequiredRule",{attrs:{message:t.$t("docFlow.validation.documentFlowRequired")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{disable:!0,"data-field":"numberingType","editor-options":t.numberingTypeOptions,"editor-type":"dxSelectBox"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("translations.fields.numberingType")}}),t._v(" "),o("DxRequiredRule",{attrs:{message:t.$t("translations.fields.numberingTypeRequired")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"data-field":"documentTypeId","editor-options":t.docTypeOptions,"editor-type":"dxSelectBox"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("menu.documentType")}}),t._v(" "),o("DxRequiredRule",{attrs:{message:t.$t("translations.fields.documentTypeGuidRequired")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"editor-options":t.tagboxOptions,"editor-type":"dxTagBox","data-field":"availableActions"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("translations.fields.availableActions")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"data-field":"status","editor-options":t.statusOptions,"editor-type":"dxSelectBox"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("translations.fields.status")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"data-field":"generateDocumentName","editor-type":"dxCheckBox"}},[o("DxLabel",{attrs:{location:"top",alignment:"left",text:t.$t("translations.fields.generateDocumentName")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"data-field":"isDefault","editor-type":"dxCheckBox"}},[o("DxLabel",{attrs:{location:"top",alignment:"left",text:t.$t("docFlow.fields.isDefault")}})],1),t._v(" "),o("DxSimpleItem",{attrs:{"data-field":"note","col-span":2,"editor-type":"dxTextArea"}},[o("DxLabel",{attrs:{location:"top",text:t.$t("translations.fields.note")}})],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
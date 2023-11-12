(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{2322:function(e,t,r){"use strict";r.r(t);r(48),r(40),r(50),r(51);var o=r(14),n=(r(43),r(163)),l=r(68),d=r(458),m=r(4),c=r(103),x=r(576),f=r(20),D=r.n(f),R=r(67);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var w={components:{Header:c.a,DxGroupItem:f.DxGroupItem,DxSimpleItem:f.DxSimpleItem,DxLabel:f.DxLabel,DxRequiredRule:f.DxRequiredRule,DxCompareRule:f.DxCompareRule,DxPatternRule:f.DxPatternRule,DxRangeRule:f.DxRangeRule,DxForm:D.a,DxSearchPanel:R.DxSearchPanel,DxDataGrid:R.DxDataGrid,DxColumn:R.DxColumn,DxEditing:R.DxEditing,DxLookup:R.DxLookup,Toolbar:n.a},data:function(){return{documentRegister:{name:null,status:0,index:null,hasDocuments:!1,registrationGroupId:null,hasRegistrationSettings:!1,numberOfDigitsInNumber:null,documentFlow:null,numberingPeriod:null,numberingSection:null,registerType:null,numberFormatItems:[{number:1,element:1}]},elements:this.$store.getters["docflow/numberFormatItems"](this),codePattern:this.$store.getters["globalProperties/whitespacePattern"]}},computed:{isRegistrible:function(){return this.documentRegister.registerType==d.a.Registration},documentFlowOptions:function(){return{valueExpr:"id",displayExpr:"name",dataSource:this.$store.getters["docflow/docflow"](this)}},registrationGroupOptions:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},(new x.a).withUrl(m.a.docFlow.ResponsibleForGroupOnMe).filter(["status","=",l.b.Active]).acceptCustomValues((function(e){e.customItem=null})).withoutDeferRendering().focusStateDisabled().clearValueExpr().build(this))},numberingSectionOptions:function(){return{valueExpr:"id",displayExpr:"name",dataSource:this.$store.getters["docflow/numberingSection"](this)}},numberingPeriodOptions:function(){return{valueExpr:"id",displayExpr:"name",dataSource:this.$store.getters["docflow/numberingPeriod"](this)}},registerTypeOptions:function(){var e=this;return{valueExpr:"id",displayExpr:"name",dataSource:this.$store.getters["docflow/registerType"](this),onValueChanged:function(t){e.documentRegister.registrationGroupId=null}}},statusOptions:function(){return{valueExpr:"id",displayExpr:"status",dataSource:this.$store.getters["status/status"](this)}},numberOfDigitsInNumber:function(){return{max:9,min:0}}},methods:{handleSubmit:function(){var e=this;this.$refs.form.instance.validate().isValid&&this.$awn.asyncBlock(this.$axios.post(m.a.docFlow.DocumentRegister.Value,this.documentRegister),(function(t){e.$router.go(-1),e.$awn.success()}),(function(t){return e.$awn.alert()}))}}},h=w,S=r(7),component=Object(S.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header",{attrs:{isNew:!0,isbackButton:!0,headerTitle:e.$t("translations.headers.addDocumentRegister")}}),e._v(" "),r("toolbar",{attrs:{canSave:!0},on:{saveChanges:e.handleSubmit}}),e._v(" "),r("DxForm",{ref:"form",attrs:{"form-data":e.documentRegister,"show-colon-after-label":!0,"show-validation-summary":!1},on:{"update:formData":function(t){e.documentRegister=t},"update:form-data":function(t){e.documentRegister=t}},scopedSlots:e._u([{key:"number-format-items-template",fn:function(){return[r("div",[r("DxDataGrid",{attrs:{"show-borders":!0,"data-source":e.documentRegister.numberFormatItems,errorRowEnabled:!1,"allow-column-reordering":!0,"allow-column-resizing":!0,"column-auto-width":!0}},[r("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,"allow-adding":!0,useIcons:!0,mode:"raw"}}),e._v(" "),r("DxColumn",{attrs:{"data-field":"number",caption:e.$t("translations.fields.number")}},[r("DxRequiredRule",{attrs:{message:e.$t("translations.fields.numberRequired")}})],1),e._v(" "),r("DxColumn",{attrs:{"data-field":"element",caption:e.$t("docFlow.fields.element")}},[r("DxRequiredRule",{attrs:{message:e.$t("docFlow.validation.elementRequired")}}),e._v(" "),r("DxLookup",{attrs:{"data-source":e.elements,allowClearing:!0,valueExpr:"id",displayExpr:"name"}})],1),e._v(" "),r("DxColumn",{attrs:{"data-field":"separator",caption:e.$t("docFlow.fields.separator")}},[r("DxPatternRule",{attrs:{"ignore-empty-value":!1,pattern:e.codePattern,message:e.$t("validation.valueMustNotContainsSpaces")}})],1)],1)],1)]},proxy:!0}])},[e._v(" "),r("DxGroupItem",[r("DxSimpleItem",{attrs:{"data-field":"name"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("shared.name")}}),e._v(" "),r("DxRequiredRule",{attrs:{message:e.$t("shared.nameRequired")}})],1),e._v(" "),r("DxSimpleItem",{attrs:{"data-field":"index"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("translations.fields.index")}}),e._v(" "),r("DxRequiredRule",{attrs:{message:e.$t("translations.fields.indexRequired")}}),e._v(" "),r("DxPatternRule",{attrs:{"ignore-empty-value":!1,pattern:e.codePattern,message:e.$t("validation.valueMustNotContainsSpaces")}})],1),e._v(" "),r("DxSimpleItem",{attrs:{"editor-type":"dxNumberBox","editor-options":e.numberOfDigitsInNumber,"data-field":"numberOfDigitsInNumber"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("docFlow.fields.numberOfDigitsInNumber")}}),e._v(" "),r("DxRequiredRule",{attrs:{message:e.$t("docFlow.validation.numberOfDigitsInNumberRequired")}})],1),e._v(" "),r("DxSimpleItem",{attrs:{"data-field":"documentFlow","editor-options":e.documentFlowOptions,"editor-type":"dxSelectBox"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("docFlow.fields.documentFlow")}}),e._v(" "),r("DxRequiredRule",{attrs:{message:e.$t("docFlow.validation.documentFlowRequired")}})],1),e._v(" "),r("DxSimpleItem",{attrs:{"data-field":"registerType","editor-options":e.registerTypeOptions,"editor-type":"dxSelectBox"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("translations.fields.registerType")}}),e._v(" "),r("DxRequiredRule",{attrs:{message:e.$t("translations.fields.registerTypeRequired")}})],1),e._v(" "),r("DxSimpleItem",{attrs:{visible:e.isRegistrible,"data-field":"registrationGroup","editor-options":e.registrationGroupOptions,"editor-type":"dxSelectBox"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("translations.fields.registrationGroupId")}}),e._v(" "),r("DxRequiredRule",{attrs:{message:e.$t("translations.fields.registrationGroupIdRequired")}})],1),e._v(" "),r("DxSimpleItem",{attrs:{"editor-type":"dxSelectBox","editor-options":e.numberingSectionOptions,"data-field":"numberingSection"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("translations.fields.numberingSection")}}),e._v(" "),r("DxRequiredRule",{attrs:{message:e.$t("translations.fields.numberingSectionRequired")}})],1),e._v(" "),r("DxSimpleItem",{attrs:{"data-field":"numberingPeriod","editor-options":e.numberingPeriodOptions,"editor-type":"dxSelectBox"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("docFlow.fields.numberingPeriod")}}),e._v(" "),r("DxRequiredRule",{attrs:{numberingPeriodOptions:"",message:e.$t("docFlow.validation.numberingPeriodRequired")}})],1),e._v(" "),r("DxSimpleItem",{attrs:{"data-field":"status","editor-options":e.statusOptions,"editor-type":"dxSelectBox"}},[r("DxLabel",{attrs:{location:"top",text:e.$t("translations.fields.status")}})],1)],1),e._v(" "),r("DxSimpleItem",{attrs:{template:"number-format-items-template"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
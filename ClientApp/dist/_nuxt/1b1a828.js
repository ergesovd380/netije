(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1909:function(t,e,n){"use strict";var r=n(458),o=n(256),d={Registration:0,Numeration:1};e.a={Values:d,GetAll:function(t){return[{id:d.Registration,name:t.$t("registrationSettings.settingType.registration")},{id:d.Numeration,name:t.$t("registrationSettings.settingType.numeration")}]},mapToRegisterType:function(t){switch(t){case d.Registration:return r.a.Registration;case d.Numeration:return r.a.Numbering;default:throw"Unsupported mapping from SettingType -> RegisterType"}},mapToNumberingType:function(t){switch(t){case d.Registration:return o.a.Registrable;case d.Numeration:return o.a.Numerable;default:throw"Unsupported mapping from SettingType -> NumberingType"}}}},2342:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(124),n(30),n(1909)),d=n(163),l=(n(204),n(68)),c=(n(1066),n(103)),m=n(20),x=n.n(m),S=n(4),f={components:{Header:c.a,DxGroupItem:m.DxGroupItem,DxSimpleItem:m.DxSimpleItem,DxLabel:m.DxLabel,DxForm:x.a,Toolbar:d.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.params,e.next=3,n.$axios.get(S.a.docFlow.RegistrationSetting+"/"+r.id);case 3:return o=e.sent,e.abrupt("return",{registrationSetting:o.data});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{statusDataSource:this.$store.getters["status/status"](this)}},methods:{handleSubmit:function(){this.$refs.form.instance.validate().isValid&&this.$awn.asyncBlock(this.$axios.put("".concat(S.a.docFlow.RegistrationSetting,"/").concat(this.registrationSetting.id),this.registrationSetting))},resetRelatedEntities:function(){this.registrationSetting.documentKinds=[],this.registrationSetting.documentRegisterId=null}},computed:{settingTypeOptions:function(){var t=this;return{valueExpr:"id",displayExpr:"name",dataSource:o.a.GetAll(this),onValueChanged:function(e){t.resetRelatedEntities()}}},statusOptions:function(){return{valueExpr:"id",displayExpr:"status",dataSource:this.$store.getters["status/status"](this)}},documentFlowOptions:function(){var t=this;return{dataSource:this.$store.getters["docflow/docflow"](this),valueExpr:"id",displayExpr:"name",onValueChanged:function(e){t.resetRelatedEntities()}}},documentKindOptions:function(){var t=o.a.mapToNumberingType(this.registrationSetting.settingType);return{readOnly:null==this.registrationSetting.documentFlow,dataSource:{store:this.$dxStore({key:"id",loadUrl:S.a.docFlow.DocumentKind}),filter:[["status","=",l.b.Active],"and",["documentFlow","=",this.registrationSetting.documentFlow],["numberingType","=",t]]},valueExpr:"id",displayExpr:"name"}},businessUnitsOptions:function(){var t=this;return{dataSource:{store:this.$dxStore({key:"id",loadUrl:S.a.company.BusinessUnit}),filter:["status","=",l.b.Active]},valueExpr:"id",displayExpr:"name",onValueChanged:function(e){t.registrationSetting.departments=[]}}},departmentsOptions:function(){var t=[];this.registrationSetting.businessUnits.map((function(e){t.push(["businessUnitId","=",e]),t.push("or")}));var filter=[["status","=",l.b.Active],"and"];return filter.push(t),{readOnly:0==this.registrationSetting.businessUnits.length,dataSource:{store:this.$dxStore({key:"id",loadUrl:S.a.company.Department}),filter:filter},valueExpr:"id",displayExpr:"name"}},documentRegisterOptions:function(){var t=o.a.mapToRegisterType(this.registrationSetting.settingType);return{readOnly:null==this.registrationSetting.documentFlow,dataSource:{store:this.$dxStore({key:"id",loadUrl:S.a.docFlow.DocumentRegister.СustomizableDocumentRegisters}),filter:[["status","=",l.b.Active],"and",["documentFlow","=",this.registrationSetting.documentFlow],"and",["registerType","=",t]]},valueExpr:"id",displayExpr:"name"}}}},h=n(7),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("Header",{attrs:{isNew:!1,isbackButton:!0,headerTitle:t.registrationSetting.name}}),t._v(" "),n("toolbar",{attrs:{canSave:!0},on:{saveChanges:t.handleSubmit}}),t._v(" "),n("DxForm",{ref:"form",attrs:{"col-count":1,"form-data":t.registrationSetting,"read-only":!1,"show-colon-after-label":!0},on:{"update:formData":function(e){t.registrationSetting=e},"update:form-data":function(e){t.registrationSetting=e}}},[n("DxGroupItem",{attrs:{"col-count":2}},[n("DxSimpleItem",{attrs:{"col-span":2,isRequired:!0,"data-field":"name","data-type":"string"}},[n("DxLabel",{attrs:{location:"top",text:t.$t("registrationSettings.fields.name")}})],1),t._v(" "),n("DxSimpleItem",{attrs:{"data-field":"settingType","editor-options":t.settingTypeOptions,"editor-type":"dxSelectBox"}},[n("DxLabel",{attrs:{location:"top",text:t.$t("registrationSettings.fields.settingType")}})],1),t._v(" "),n("DxSimpleItem",{attrs:{"data-field":"status","editor-options":t.statusOptions,"editor-type":"dxSelectBox"}},[n("DxLabel",{attrs:{location:"top",text:t.$t("shared.status")}})],1),t._v(" "),n("DxSimpleItem",{attrs:{"col-span":2,isRequired:!0,"data-field":"documentFlow","editor-options":t.documentFlowOptions,"editor-type":"dxSelectBox"}},[n("DxLabel",{attrs:{location:"top",text:t.$t("shared.documentFlow")}})],1)],1),t._v(" "),n("DxGroupItem",{attrs:{caption:t.$t("registrationSettings.groups.criterias")}},[n("DxSimpleItem",{attrs:{isRequired:!0,"col-span":2,"editor-options":t.documentKindOptions,"editor-type":"dxTagBox","data-field":"documentKinds"}},[n("DxLabel",{attrs:{location:"top",text:t.$t("registrationSettings.fields.documentKinds")}})],1),t._v(" "),n("DxSimpleItem",{attrs:{"col-span":2,"editor-options":t.businessUnitsOptions,"editor-type":"dxTagBox","data-field":"businessUnits"}},[n("DxLabel",{attrs:{location:"top",text:t.$t("registrationSettings.fields.businessUnits")}})],1),t._v(" "),n("DxSimpleItem",{attrs:{"col-span":2,"editor-options":t.departmentsOptions,"editor-type":"dxTagBox","data-field":"departments"}},[n("DxLabel",{attrs:{location:"top",text:t.$t("registrationSettings.fields.departments")}})],1)],1),t._v(" "),n("DxGroupItem",{attrs:{caption:t.$t("registrationSettings.groups.documentRegister")}},[n("DxSimpleItem",{attrs:{isRequired:!0,"data-field":"documentRegisterId","editor-options":t.documentRegisterOptions,"editor-type":"dxSelectBox"}},[n("DxLabel",{attrs:{location:"top",text:t.$t("registrationSettings.fields.documentRegister")}})],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
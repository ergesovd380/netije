(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{2325:function(t,e,o){"use strict";o.r(e);var n=o(67),r=o(27),l=(o(68),o(4)),d={components:{Header:o(103).a,DxSearchPanel:n.DxSearchPanel,DxDataGrid:n.DxDataGrid,DxColumn:n.DxColumn,DxEditing:n.DxEditing,DxHeaderFilter:n.DxHeaderFilter,DxScrolling:n.DxScrolling,DxLookup:n.DxLookup,DxGrouping:n.DxGrouping,DxGroupPanel:n.DxGroupPanel,DxRequiredRule:n.DxRequiredRule,DxExport:n.DxExport,DxColumnChooser:n.DxColumnChooser,DxColumnFixing:n.DxColumnFixing,DxFilterRow:n.DxFilterRow,DxStateStoring:n.DxStateStoring,DxEmailRule:n.DxEmailRule},data:function(){return{entityType:r.a.Contact,dataSource:this.$dxStore({key:"id",loadUrl:l.a.contragents.Contact,removeUrl:l.a.contragents.Contact}),personIdDataSource:this.$dxStore({key:"id",loadUrl:l.a.contragents.CounterPart}),companiesDataSource:{store:this.$dxStore({key:"id",loadUrl:l.a.contragents.CounterPart}),filter:["type","<>","Person"],paginate:!0},editButtons:[{hint:"card",icon:"card",onClick:this.cardClick},{name:"delete"}]}},computed:{statusDataSource:function(){return this.$store.getters["status/status"](this)},allowAdding:function(){return this.$store.getters["permissions/allowCreating"](this.entityType)},allowDeleting:function(){return this.$store.getters["permissions/allowDeleting"](this.entityType)},allowUpdating:function(){return this.$store.getters["permissions/allowUpdating"](this.entityType)}},methods:{onToolbarPreparing:function(t){var e=this;t.toolbarOptions.items.unshift({widget:"button",location:"after",options:{icon:"plus",visible:this.allowAdding,onClick:function(){e.$router.push("/parties/organizations/contacts/create")}}})},cardClick:function(t){this.editContact(t.row.data.id)},rowDblClick:function(t){this.editContact(t.data.id)},editContact:function(t){this.$router.push("/parties/organizations/contacts/".concat(t))}}},c=o(7),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Header",{attrs:{headerTitle:t.$t("menu.contacts")}}),t._v(" "),n("DxDataGrid",{attrs:{id:"gridContainer","show-borders":!0,errorRowEnabled:!1,"data-source":t.dataSource,"remote-operations":!0,"allow-column-reordering":!0,"allow-column-resizing":!0,"column-auto-width":!0,"load-panel":{enabled:!0,indicatorSrc:o(221)}},on:{"toolbar-preparing":t.onToolbarPreparing,rowDblClick:t.rowDblClick}},[n("DxGroupPanel",{attrs:{visible:!0}}),t._v(" "),n("DxGrouping",{attrs:{"auto-expand-all":!1}}),t._v(" "),n("DxHeaderFilter",{attrs:{visible:!0}}),t._v(" "),n("DxColumnChooser",{attrs:{enabled:!0}}),t._v(" "),n("DxColumnFixing",{attrs:{enabled:!0}}),t._v(" "),n("DxFilterRow",{attrs:{visible:!0}}),t._v(" "),n("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":t.$t("menu.contacts")}}),t._v(" "),n("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"Contact"}}),t._v(" "),n("DxEditing",{attrs:{useIcons:!0,"allow-updating":t.allowUpdating,"allow-deleting":t.allowDeleting,"allow-adding":!1}}),t._v(" "),n("DxSearchPanel",{attrs:{position:"after",visible:!0}}),t._v(" "),n("DxScrolling",{attrs:{mode:"virtual"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"name",caption:t.$t("parties.fields.contactName"),"data-type":"string"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"companyId",caption:t.$t("menu.company")}},[n("DxLookup",{attrs:{"data-source":t.companiesDataSource,"value-expr":"id","display-expr":"name"}})],1),t._v(" "),n("DxColumn",{attrs:{"data-field":"department",caption:t.$t("translations.fields.department"),visible:!1}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"jobTitle",caption:t.$t("translations.fields.jobTitleId"),visible:!1}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"phone",caption:t.$t("translations.fields.phones")}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"fax",caption:t.$t("parties.fields.fax")}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"email",caption:t.$t("translations.fields.email")}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"homepage",caption:t.$t("translations.fields.homepage"),visible:!1}}),t._v(" "),n("DxColumn",{attrs:{caption:t.$t("counterPart.Person"),"data-field":"personId"}},[n("DxLookup",{attrs:{"data-source":t.personIdDataSource,"value-expr":"id","display-expr":"name"}})],1),t._v(" "),n("DxColumn",{attrs:{"data-field":"status",caption:t.$t("translations.fields.status")}},[n("DxLookup",{attrs:{"data-source":t.statusDataSource,"value-expr":"id","display-expr":"status"}})],1),t._v(" "),n("DxColumn",{attrs:{"data-field":"note",caption:t.$t("translations.fields.note"),visible:!1}}),t._v(" "),n("DxColumn",{attrs:{width:110,buttons:t.editButtons,type:"buttons"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
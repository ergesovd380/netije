(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{2328:function(t,e,o){"use strict";o.r(e);var r=o(68),n=o(27),l=o(4),d=o(103),c=o(67),x={components:{Header:d.a,DxSearchPanel:c.DxSearchPanel,DxDataGrid:c.DxDataGrid,DxColumn:c.DxColumn,DxEditing:c.DxEditing,DxHeaderFilter:c.DxHeaderFilter,DxScrolling:c.DxScrolling,DxLookup:c.DxLookup,DxGrouping:c.DxGrouping,DxGroupPanel:c.DxGroupPanel,DxRequiredRule:c.DxRequiredRule,DxAsyncRule:c.DxAsyncRule,DxExport:c.DxExport,DxColumnChooser:c.DxColumnChooser,DxColumnFixing:c.DxColumnFixing,DxFilterRow:c.DxFilterRow,DxStateStoring:c.DxStateStoring,DxStringLengthRule:c.DxStringLengthRule},data:function(){return{dataSource:this.$dxStore({key:"id",loadUrl:l.a.sharedDirectory.Locality,insertUrl:l.a.sharedDirectory.Locality,updateUrl:l.a.sharedDirectory.Locality,removeUrl:l.a.sharedDirectory.Locality}),entityType:n.a.Locality,statusDataSource:this.$store.getters["status/status"](this)}},methods:{edit:function(t){this.$refs.gridContainer.instance.editRow(t.rowIndex)},onInitNewRow:function(t){t.data.status=this.statusDataSource[r.b.Active].id},onRowUpdating:function(t){t.newData=Object.assign(t.oldData,t.newData)},getActiveRegionsDataStore:function(t){return{store:this.$dxStore({key:"id",loadUrl:l.a.sharedDirectory.Region}),paginate:!0,filter:t.data?["status","=",r.b.Active,"or","id","=",t.data.regionId]:void 0}},validateLocalityName:function(t){return this.$customValidator.isLocalityNotExists({id:t.data.id,name:t.value})}}},D=o(7),component=Object(D.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("Header",{attrs:{headerTitle:t.$t("menu.locality")}}),t._v(" "),r("DxDataGrid",{ref:"gridContainer",attrs:{id:"gridContainer","show-borders":!0,errorRowEnabled:!1,"data-source":t.dataSource,"remote-operations":!1,"allow-column-reordering":!1,"allow-column-resizing":!0,"column-auto-width":!0,"load-panel":{enabled:!0,indicatorSrc:o(221)},onRowDblClick:t.edit},on:{"row-updating":t.onRowUpdating,"init-new-row":t.onInitNewRow}},[r("DxGroupPanel",{attrs:{visible:!0}}),t._v(" "),r("DxGrouping",{attrs:{"auto-expand-all":!1}}),t._v(" "),r("DxColumnChooser",{attrs:{enabled:!0}}),t._v(" "),r("DxColumnFixing",{attrs:{enabled:!0}}),t._v(" "),r("DxFilterRow",{attrs:{visible:!0}}),t._v(" "),r("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":t.$t("translations.fields.localityId")}}),t._v(" "),r("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"Locality"}}),t._v(" "),r("DxEditing",{attrs:{"allow-updating":t.$store.getters["permissions/allowUpdating"](t.entityType),"allow-deleting":t.$store.getters["permissions/allowDeleting"](t.entityType),"allow-adding":t.$store.getters["permissions/allowCreating"](t.entityType),mode:"form",useIcons:!0}}),t._v(" "),r("DxSearchPanel",{attrs:{position:"after",visible:!0}}),t._v(" "),r("DxScrolling",{attrs:{mode:"virtual"}}),t._v(" "),r("DxColumn",{attrs:{"data-field":"name",caption:t.$t("translations.fields.localityId")}},[r("DxRequiredRule",{attrs:{message:t.$t("translations.fields.localityIdRequired")}}),t._v(" "),r("DxStringLengthRule",{attrs:{max:60,message:t.$t("shared.nameShouldNotBeMoreThan")}}),t._v(" "),r("DxAsyncRule",{attrs:{reevaluate:!1,message:t.$t("translations.fields.localityAlreadyExists"),"validation-callback":t.validateLocalityName}})],1),t._v(" "),r("DxColumn",{attrs:{"data-field":"regionId",caption:t.$t("translations.fields.regionId")}},[r("DxRequiredRule",{attrs:{message:t.$t("translations.fields.regionIdRequired")}}),t._v(" "),r("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.getActiveRegionsDataStore,"value-expr":"id","display-expr":"name"}})],1),t._v(" "),r("DxColumn",{attrs:{"data-field":"status",caption:t.$t("translations.fields.status")}},[r("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.statusDataSource,"value-expr":"id","display-expr":"status"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{2329:function(t,e,r){"use strict";r.r(e);var o=r(27),n=r(68),l=r(4),d=r(103),D=r(67),x={components:{Header:d.a,DxSearchPanel:D.DxSearchPanel,DxDataGrid:D.DxDataGrid,DxColumn:D.DxColumn,DxEditing:D.DxEditing,DxHeaderFilter:D.DxHeaderFilter,DxScrolling:D.DxScrolling,DxLookup:D.DxLookup,DxGrouping:D.DxGrouping,DxGroupPanel:D.DxGroupPanel,DxRequiredRule:D.DxRequiredRule,DxAsyncRule:D.DxAsyncRule,DxExport:D.DxExport,DxColumnChooser:D.DxColumnChooser,DxColumnFixing:D.DxColumnFixing,DxFilterRow:D.DxFilterRow,DxStateStoring:D.DxStateStoring,DxStringLengthRule:D.DxStringLengthRule},data:function(){return{dataSource:this.$dxStore({key:"id",loadUrl:l.a.sharedDirectory.Region,insertUrl:l.a.sharedDirectory.Region,updateUrl:l.a.sharedDirectory.Region,removeUrl:l.a.sharedDirectory.Region}),entityType:o.a.Region,statusDataSource:this.$store.getters["status/status"](this)}},methods:{edit:function(t){this.$refs.gridContainer.instance.editRow(t.rowIndex)},onInitNewRow:function(t){t.data.status=this.statusDataSource[n.b.Active].id},onRowUpdating:function(t){t.newData=Object.assign(t.oldData,t.newData)},getActiveCountriesDataSource:function(t){return{store:this.$dxStore({key:"id",loadUrl:l.a.sharedDirectory.Country}),paginate:!0,filter:t.data?["status","=",n.b.Active,"or","id","=",t.data.countryId]:void 0}},validateRegionName:function(t){return this.$customValidator.isRegionNotExists({id:t.data.id,name:t.value})}}},c=r(7),component=Object(c.a)(x,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("Header",{attrs:{headerTitle:t.$t("menu.region")}}),t._v(" "),o("DxDataGrid",{ref:"gridContainer",attrs:{id:"gridContainer","show-borders":!0,errorRowEnabled:!1,"data-source":t.dataSource,"remote-operations":!1,"allow-column-reordering":!1,"allow-column-resizing":!0,"column-auto-width":!0,"load-panel":{enabled:!0,indicatorSrc:r(221)},onRowDblClick:t.edit},on:{"row-updating":t.onRowUpdating,"init-new-row":t.onInitNewRow}},[o("DxGroupPanel",{attrs:{visible:!0}}),t._v(" "),o("DxGrouping",{attrs:{"auto-expand-all":!1}}),t._v(" "),o("DxHeaderFilter",{attrs:{visible:!0}}),t._v(" "),o("DxColumnChooser",{attrs:{enabled:!0}}),t._v(" "),o("DxColumnFixing",{attrs:{enabled:!0}}),t._v(" "),o("DxFilterRow",{attrs:{visible:!0}}),t._v(" "),o("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":t.$t("translations.fields.regionId")}}),t._v(" "),o("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"Region"}}),t._v(" "),o("DxEditing",{attrs:{"allow-updating":t.$store.getters["permissions/allowUpdating"](t.entityType),"allow-deleting":t.$store.getters["permissions/allowDeleting"](t.entityType),"allow-adding":t.$store.getters["permissions/allowCreating"](t.entityType),mode:"form",useIcons:!0}}),t._v(" "),o("DxSearchPanel",{attrs:{position:"after",visible:!0}}),t._v(" "),o("DxScrolling",{attrs:{mode:"virtual"}}),t._v(" "),o("DxColumn",{attrs:{"data-field":"name",caption:t.$t("translations.fields.regionId")}},[o("DxRequiredRule",{attrs:{message:t.$t("translations.fields.regionIdRequired")}}),t._v(" "),o("DxStringLengthRule",{attrs:{max:60,message:t.$t("shared.nameShouldNotBeMoreThan")}}),t._v(" "),o("DxAsyncRule",{attrs:{reevaluate:!1,message:t.$t("translations.fields.regionAlreadyExists"),"validation-callback":t.validateRegionName}})],1),t._v(" "),o("DxColumn",{attrs:{"data-field":"countryId",caption:t.$t("sharedDirectory.fields.countryId")}},[o("DxRequiredRule",{attrs:{message:t.$t("sharedDirectory.validation.countryIdRequired")}}),t._v(" "),o("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.getActiveCountriesDataSource,"value-expr":"id","display-expr":"name"}})],1),t._v(" "),o("DxColumn",{attrs:{"data-field":"status",caption:t.$t("translations.fields.status")}},[o("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.statusDataSource,"value-expr":"id","display-expr":"status"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
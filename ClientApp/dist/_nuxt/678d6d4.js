(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{2310:function(e,t,o){"use strict";o.r(t);var r=o(68),n=o(27),l=o(4),d=o(103),x=o(67),D={components:{Header:d.a,DxSearchPanel:x.DxSearchPanel,DxDataGrid:x.DxDataGrid,DxColumn:x.DxColumn,DxEditing:x.DxEditing,DxHeaderFilter:x.DxHeaderFilter,DxScrolling:x.DxScrolling,DxLookup:x.DxLookup,DxGrouping:x.DxGrouping,DxGroupPanel:x.DxGroupPanel,DxRequiredRule:x.DxRequiredRule,DxExport:x.DxExport,DxColumnChooser:x.DxColumnChooser,DxColumnFixing:x.DxColumnFixing,DxFilterRow:x.DxFilterRow,DxStateStoring:x.DxStateStoring},data:function(){return{dataSource:this.$dxStore({key:"id",loadUrl:l.a.docFlow.FilesType,insertUrl:l.a.docFlow.FilesType,updateUrl:l.a.docFlow.FilesType,removeUrl:l.a.docFlow.FilesType}),entityType:n.a.FilesType,statusDataSource:this.$store.getters["status/status"](this)}},methods:{edit:function(e){this.$refs.gridContainer.instance.editRow(e.rowIndex)},onInitNewRow:function(e){e.data.status=this.statusDataSource[r.b.Active].id},onRowUpdating:function(e){e.newData=Object.assign(e.oldData,e.newData)}}},c=o(7),component=Object(c.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("Header",{attrs:{headerTitle:e.$t("menu.filesType")}}),e._v(" "),r("DxDataGrid",{ref:"gridContainer",attrs:{id:"gridContainer","show-borders":!0,"data-source":e.dataSource,"remote-operations":!1,errorRowEnabled:!1,"allow-column-reordering":!1,"allow-column-resizing":!0,"column-auto-width":!0,"load-panel":{enabled:!0,indicatorSrc:o(221)},onRowDblClick:e.edit},on:{"row-updating":e.onRowUpdating,"init-new-row":e.onInitNewRow}},[r("DxGroupPanel",{attrs:{visible:!0}}),e._v(" "),r("DxGrouping",{attrs:{"auto-expand-all":!1}}),e._v(" "),r("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":e.$t("translations.fields.fileTypes")}}),e._v(" "),r("DxFilterRow",{attrs:{visible:!0}}),e._v(" "),r("DxHeaderFilter",{attrs:{visible:!0}}),e._v(" "),r("DxColumnChooser",{attrs:{enabled:!0}}),e._v(" "),r("DxColumnFixing",{attrs:{enabled:!0}}),e._v(" "),r("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"FileTypes"}}),e._v(" "),r("DxEditing",{attrs:{"allow-updating":e.$store.getters["permissions/allowUpdating"](e.entityType),"allow-deleting":e.$store.getters["permissions/allowDeleting"](e.entityType),"allow-adding":e.$store.getters["permissions/allowCreating"](e.entityType),useIcons:!0,mode:"form"}}),e._v(" "),r("DxSearchPanel",{attrs:{position:"after",visible:!0}}),e._v(" "),r("DxScrolling",{attrs:{mode:"virtual"}}),e._v(" "),r("DxColumn",{attrs:{"data-field":"name",caption:e.$t("shared.name"),"data-type":"string"}},[r("DxRequiredRule",{attrs:{message:e.$t("shared.nameRequired")}})],1),e._v(" "),r("DxColumn",{attrs:{"data-field":"status",caption:e.$t("translations.fields.status")}},[r("DxLookup",{attrs:{"allow-clearing":!0,"data-source":e.statusDataSource,"value-expr":"id","display-expr":"status"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
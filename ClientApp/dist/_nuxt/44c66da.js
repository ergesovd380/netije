(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1892:function(e,t,n){"use strict";var r=n(49),o=(n(4),{components:{DxTextArea:r.DxTextArea},props:{value:{type:String,default:function(){return""}},onValueChanged:{type:Function,default:function(){return function(){}}}},data:function(){return{currentValue:this.value}},methods:{}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("DxTextArea",{attrs:{value:e.currentValue,height:90,"on-value-changed":function(t){return e.onValueChanged(t.value)}},on:{"update:value":function(t){e.currentValue=t}}})],1)}),[],!1,null,null,null);t.a=component.exports},2275:function(e,t,n){"use strict";n.r(t);var r=n(68),o=n(4),l=(n(64),n(569)),d=n(339),m=n.n(d),x=n(27),c=n(430),D=n(592),w=n(67),v=n(121),f={components:{DxSelectBox:m.a,DxTabPanel:c.DxTabPanel,DxItem:c.DxItem,DxDataGrid:w.DxDataGrid,DxColumn:w.DxColumn,DxEditing:w.DxEditing,DxHeaderFilter:w.DxHeaderFilter,DxScrolling:w.DxScrolling,DxLookup:w.DxLookup,permissions:D.a,recipientSelectBox:l.a},props:{data:{type:Object,default:function(){return{}}}},data:function(){var e=this.data.data,t=e.id,n=e.immutable;return{entityType:x.a.Department,roleId:t,immutable:n,store:this.$dxStore({key:"memberId",insertUrl:o.a.admin.RoleMembers,loadUrl:o.a.admin.RoleMembers+t,removeUrl:o.a.admin.RoleMembers+t}),statusDataSource:this.$store.getters["status/status"],recipientStore:this.$dxStore({key:"id",loadUrl:o.a.recipient.list}),tabPanelOptions:{focusStateEnabled:!1,animationEnabled:!0,swipeEnabled:!1,loop:"true"}}},methods:{canDelete:function(e){var t,n;return!(this.immutable||null!==(t=e.row.data.member)&&void 0!==t&&t.isSystem&&(null===(n=e.row.data.member)||void 0===n?void 0:n.recipientType)===v.a.SystemUser)},onValueChanged:function(e,t){t.setValue(e),t.component.updateDimensions()},rowInserting:function(e){e.data.member&&(e.data.memberId=e.data.member.name,delete e.data.member)},onInitNewRow:function(e){e.data.roleId=this.roleId},allowDeleting:function(e){return!(!this.$store.getters["permissions/allowUpdating"](this.entityType)||e.row.data.isReadonly)}}},h=n(7),S=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DxTabPanel",{attrs:{"tab-panel-options":e.tabPanelOptions},scopedSlots:e._u([{key:"members-list",fn:function(){return[n("DxDataGrid",{attrs:{id:"gridContainer",errorRowEnabled:!1,"show-borders":!0,"data-source":e.store,"remote-operations":!1},on:{"init-new-row":e.onInitNewRow,"row-inserting":e.rowInserting},scopedSlots:e._u([{key:"recipientSelectBox",fn:function(t){var r=t.data;return[n("recipient-select-box",{attrs:{valueExpr:"id",displayExpr:"name",value:r.value},on:{valueChanged:function(t){return e.onValueChanged(t,r)}}})]}}])},[n("DxHeaderFilter",{attrs:{visible:!0}}),e._v(" "),n("DxEditing",{attrs:{"allow-updating":!1,"allow-deleting":e.canDelete,"allow-adding":!e.immutable,useIcons:!0,mode:"row"}}),e._v(" "),n("DxScrolling",{attrs:{mode:"virtual"}}),e._v(" "),n("DxColumn",{attrs:{allowFiltering:!1,allowSorting:!1,allowResizing:!1,allowReordering:!1,allowHiding:!1,allowHeaderFiltering:!1,allowGrouping:!1,allowFixing:!1,allowExporting:!1,"allow-sorting":!1,editCellTemplate:"recipientSelectBox","data-field":"member.name","data-type":"string",caption:e.$t("shared.name")}}),e._v(" "),e._v(" "),n("DxColumn",{attrs:{allowEditing:!1,allowFiltering:!1,allowSorting:!1,allowResizing:!1,allowReordering:!1,allowHiding:!1,allowHeaderFiltering:!1,allowGrouping:!1,allowFixing:!1,allowExporting:!1,"allow-sorting":!1,"data-field":"member.description","data-type":"string",caption:e.$t("shared.description")}})],1)]},proxy:!0}])},[n("DxItem",{attrs:{title:e.$t("translations.fields.members"),template:"members-list"}})],1)}),[],!1,null,null,null).exports,C=n(1892),R=n(103),_={components:{MemberList:S,DxMasterDetail:w.DxMasterDetail,textArea:C.a,Header:R.a,DxSearchPanel:w.DxSearchPanel,DxDataGrid:w.DxDataGrid,DxColumn:w.DxColumn,DxEditing:w.DxEditing,DxHeaderFilter:w.DxHeaderFilter,DxRequiredRule:w.DxRequiredRule,DxScrolling:w.DxScrolling,DxLookup:w.DxLookup,DxGrouping:w.DxGrouping,DxGroupPanel:w.DxGroupPanel,DxExport:w.DxExport,DxColumnChooser:w.DxColumnChooser,DxColumnFixing:w.DxColumnFixing,DxFilterRow:w.DxFilterRow,DxStateStoring:w.DxStateStoring,DxButton:w.DxButton},data:function(){return{dataSource:this.$dxStore({key:"id",loadUrl:o.a.admin.Roles,insertUrl:o.a.admin.Roles,updateUrl:o.a.admin.Roles,removeUrl:o.a.admin.Roles}),statusDataSource:this.$store.getters["status/status"](this)}},methods:{onInitNewRow:function(e){e.data.status=this.statusDataSource[r.b.Active].id},isCustom:function(e){return!e.row.data.isSystem},onRowUpdating:function(e){e.newData=Object.assign(e.oldData,e.newData)},onValueChanged:function(e,t){t.setValue(e),t.component.updateDimensions()}}},y=Object(h.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("Header",{attrs:{isNew:!1,isbackButton:!0,headerTitle:e.$t("menu.roles")}}),e._v(" "),r("DxDataGrid",{attrs:{id:"gridContainer",errorRowEnabled:!1,"show-borders":!0,"data-source":e.dataSource,"remote-operations":!1,"allow-column-reordering":!1,"allow-column-resizing":!0,"column-auto-width":!0,"load-panel":{enabled:!0,indicatorSrc:n(221)}},on:{"init-new-row":e.onInitNewRow,"row-updating":e.onRowUpdating},scopedSlots:e._u([{key:"master-detail",fn:function(data){return[r("member-list",{attrs:{data:data.data}})]}},{key:"textAreaEditor",fn:function(t){return[r("textArea",{attrs:{value:t.data.value,"on-value-changed":function(n){return e.onValueChanged(n,t.data)}}})]}}])},[r("DxGroupPanel",{attrs:{visible:!0}}),e._v(" "),r("DxGrouping",{attrs:{"auto-expand-all":!1}}),e._v(" "),r("DxHeaderFilter",{attrs:{visible:!0}}),e._v(" "),r("DxColumnChooser",{attrs:{enabled:!0}}),e._v(" "),r("DxColumnFixing",{attrs:{enabled:!0}}),e._v(" "),r("DxFilterRow",{attrs:{visible:!0}}),e._v(" "),r("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":e.$t("menu.roles")}}),e._v(" "),r("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"roles"}}),e._v(" "),r("DxEditing",{attrs:{"allow-updating":e.isCustom,"allow-deleting":e.isCustom,"allow-adding":!0,useIcons:!0,mode:"form"}}),e._v(" "),r("DxSearchPanel",{attrs:{position:"after",visible:!0}}),e._v(" "),r("DxScrolling",{attrs:{mode:"virtual"}}),e._v(" "),r("DxColumn",{attrs:{"data-field":"name",caption:e.$t("shared.name"),"data-type":"string"}},[r("DxRequiredRule",{attrs:{message:e.$t("shared.nameRequired")}})],1),e._v(" "),r("DxColumn",{attrs:{"data-field":"status",caption:e.$t("translations.fields.status")}},[r("DxLookup",{attrs:{"allow-clearing":!0,"data-source":e.statusDataSource,"value-expr":"id","display-expr":"status"}})],1),e._v(" "),r("DxColumn",{attrs:{"data-field":"description",caption:e.$t("translations.fields.note"),visible:!1,"edit-cell-template":"textAreaEditor"}}),e._v(" "),r("DxMasterDetail",{attrs:{enabled:!0,template:"master-detail"}})],1)],1)}),[],!1,null,null,null);t.default=y.exports}}]);
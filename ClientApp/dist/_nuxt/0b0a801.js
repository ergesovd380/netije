(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{2276:function(t,e,o){"use strict";o.r(e);o(373),o(68);var n=o(61),r=o.n(n),l=o(4),c=o(283),d=o(103),x=o(67),D={components:{Header:d.a,DxSearchPanel:x.DxSearchPanel,DxDataGrid:x.DxDataGrid,DxColumn:x.DxColumn,DxHeaderFilter:x.DxHeaderFilter,DxScrolling:x.DxScrolling,DxLookup:x.DxLookup,DxGrouping:x.DxGrouping,DxGroupPanel:x.DxGroupPanel,DxExport:x.DxExport,DxSelection:x.DxSelection,DxColumnChooser:x.DxColumnChooser,DxColumnFixing:x.DxColumnFixing,DxFilterRow:x.DxFilterRow,DxStateStoring:x.DxStateStoring,DxButton:x.DxButton,DxEditing:x.DxEditing},props:["isCard"],data:function(){return{dataSource:new r.a({store:this.$dxStore({key:"id",loadUrl:l.a.boxes.Boxes,removeUrl:l.a.boxes.Boxes})}),statusDataSource:this.$store.getters["status/status"](this),responsibleStore:this.$dxStore({key:"id",loadUrl:l.a.company.Employee})}},methods:{uploadKey:function(t){this.$awn.asyncBlock(this.$axios.get("".concat(l.a.boxes.PublickKey).concat(t.row.key),{responseType:"blob"}),(function(t){var data=t.data,e=new Blob([data],{type:"data:".concat(data.type)},(function(t){console.error(t.data)}));Object(c.saveAs)(e,'"public.txt')}))},onToolbarPreparing:function(t){var e=this;t.toolbarOptions.items.unshift({widget:"button",location:"after",options:{icon:"refresh",onClick:function(){e.dataSource.reload()}}}),t.toolbarOptions.items.unshift({widget:"button",location:"after",options:{icon:"plus",onClick:function(){e.$emit("create")}}})},selected:function(t){this.$emit("selected",t.data)}}},h=o(7),m={components:{MyExchangeIntegration:Object(h.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Header",{attrs:{showTitle:!t.isCard,headerTitle:t.$t("exchange.headers.myExchangeIntegrations"),isbackButton:!t.isCard,isNew:!1}}),t._v(" "),n("DxDataGrid",{attrs:{id:"gridContainer","show-borders":!0,errorRowEnabled:!1,"data-source":t.dataSource,"remote-operations":!1,"allow-column-reordering":!0,"allow-column-resizing":!0,"column-auto-width":!0,selection:{mode:"single"},"hover-state-enabled":!0,onRowDblClick:t.selected,"load-panel":{enabled:!0,indicatorSrc:o(221)}},on:{"toolbar-preparing":function(e){return t.onToolbarPreparing(e)}}},[n("DxEditing",{attrs:{"allow-updating":!1,"allow-deleting":!0,"allow-adding":!1,useIcons:!0,mode:"row"}}),t._v(" "),n("DxGroupPanel",{attrs:{visible:!0}}),t._v(" "),n("DxGrouping",{attrs:{"auto-expand-all":!1}}),t._v(" "),n("DxHeaderFilter",{attrs:{visible:!0}}),t._v(" "),n("DxColumnChooser",{attrs:{enabled:!0}}),t._v(" "),n("DxColumnFixing",{attrs:{enabled:!0}}),t._v(" "),n("DxFilterRow",{attrs:{visible:!0}}),t._v(" "),n("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":t.$t("exchange.headers.myExchangeIntegration")}}),t._v(" "),n("DxStateStoring",{attrs:{enabled:!1,type:"localStorage","storage-key":"myExchangeIntegration"}}),t._v(" "),n("DxSearchPanel",{attrs:{position:"after",visible:!0}}),t._v(" "),n("DxScrolling",{attrs:{mode:"virtual"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"name",caption:t.$t("exchange.fields.name"),"data-type":"string"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"responsibleId",caption:t.$t("exchange.fields.responsible"),visible:!0}},[n("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.responsibleStore,"value-expr":"id","display-expr":"name"}})],1),t._v(" "),n("DxColumn",{attrs:{"data-field":"status",caption:t.$t("exchange.fields.status")}},[n("DxLookup",{attrs:{"allow-clearing":!0,"data-source":t.statusDataSource,"value-expr":"id","display-expr":"status"}})],1),t._v(" "),n("DxColumn",{attrs:{type:"buttons"}},[n("DxButton",{attrs:{icon:"key",onClick:t.uploadKey,text:t.$t("buttons.uploadKey")}}),t._v(" "),n("DxButton",{attrs:{name:"delete"}})],1),t._v(" "),n("DxColumn",{attrs:{"data-field":"note",caption:t.$t("exchange.fields.note"),visible:!1}})],1)],1)}),[],!1,null,null,null).exports},methods:{createBox:function(){this.$router.push("integration-exchange/create")},toDetail:function(t){var e=t.id;this.$router.push("integration-exchange/"+e)}}},v=Object(h.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("My-exchange-integration",{attrs:{isCard:!1},on:{create:t.createBox,selected:t.toDetail}})],1)}),[],!1,null,null,null);e.default=v.exports}}]);
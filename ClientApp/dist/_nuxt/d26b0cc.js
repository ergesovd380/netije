(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1981:function(e,t,o){var content=o(2121);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(38).default)("194be734",content,!0,{sourceMap:!1})},2120:function(e,t,o){"use strict";o(1981)},2121:function(e,t,o){var n=o(25)(!1);n.push([e.i,"*{outline:none}.scrool-auto{width:100%;height:100%;overflow:auto}.d-flex{display:flex}.justify-flex-end{justify-content:flex-end}.list__content div{padding-right:5px}.f-size-30{margin:5px;font-size:20px}.js-space-between{align-items:center}.thread-text-status{text-align:right;margin-left:auto;padding:0 5px;font-size:14px}.thread-text-status .task__item{white-space:nowrap}.thread-text-status i{font-size:16px}.mY-1{margin:10px 0}.ml-1{margin-left:1.2em}.current-comment{background:#ecfff46b}.item--status{justify-content:flex-end}.item--status .icon--status{margin:0 5px;display:flex;width:20px;height:100%}.custom-icon{margin:0 5px;display:flex;width:20px;height:100%}.message-body{margin-left:30px}.comment__item{box-sizing:border-box;white-space:normal;border:1px solid #ddd;border-left:2px solid #009a40;padding:5px;border-radius:2px;border-top-left-radius:4px;border-bottom-left-radius:4px}.expired{color:red}.text--bold{font-weight:500}.text-italic{font-style:italic}.link:hover{text-decoration:underline;color:#f90}.container--grid{display:grid;grid-template-columns:1fr 1fr}.container--grid .item{justify-self:flex-start;width:100%}.quide-page{padding:20px 0 20px}.quide-page .quide-page__header{padding:0;margin:0 50px;padding-bottom:20px}.quide-page .quide-page__header .header-title{font-size:26px !important;color:#777}.quide-page .quide-page__header h2{font-weight:450;padding:0;margin:0 !important}.quide-page .title{color:#777}.quide-page .description{color:#aaa;font-size:0.9em}.message{box-sizing:border-box;padding:8px 0;font-size:15px;align-items:center}.message .message__label{display:block;padding-right:8px}.message .message__icon{display:block;font-size:18px;padding-right:8px}.cursive{font-style:italic}.content{line-height:1.5}.content h2{font-size:30px;margin-top:20px;margin-bottom:20px}.content-block{margin-left:40px;margin-right:40px;margin-top:20px}.screen-x-small .content-block{margin-left:20px;margin-right:20px}.responsive-paddings{padding:20px}.screen-large .responsive-paddings{padding:40px}.dx-card.wide-card{border-radius:0;margin-left:0;margin-right:0;border-right:0;border-left:0}.with-footer>.dx-scrollable-wrapper>.dx-scrollable-container>.dx-scrollable-content{height:100%}.with-footer>.dx-scrollable-wrapper>.dx-scrollable-container>.dx-scrollable-content>.dx-scrollview-content{display:flex;flex-direction:column;min-height:100%}#gridContainer{max-height:85vh}.f-direction-column{height:200px;justify-content:space-between;flex-direction:column}.dx-row.dx-data-row.dx-column-lines{-webkit-user-select:none}.dx-row.dx-data-row.dx-column-lines:hover{cursor:pointer;color:forestgreen}\n",""]),e.exports=n},2285:function(e,t,o){"use strict";o.r(t);o(203),o(64),o(68);var n=o(27),r=(o(61),o(103)),l=o(4),d=o(67),c=(o(20),{components:{Header:r.a,DxSearchPanel:d.DxSearchPanel,DxDataGrid:d.DxDataGrid,DxColumn:d.DxColumn,DxEditing:d.DxEditing,DxHeaderFilter:d.DxHeaderFilter,DxScrolling:d.DxScrolling,DxExport:d.DxExport,DxColumnChooser:d.DxColumnChooser,DxColumnFixing:d.DxColumnFixing,DxGrouping:d.DxGrouping,DxGroupPanel:d.DxGroupPanel,DxFilterRow:d.DxFilterRow,DxStateStoring:d.DxStateStoring,DxButton:d.DxButton,DxLookup:d.DxLookup},props:["isCard"],data:function(){return{dataSource:this.$dxStore({key:"id",loadUrl:l.a.company.Employee,insertUrl:l.a.company.Employee,updateUrl:l.a.company.Employee,removeUrl:l.a.company.Employee}),entityType:n.a.Employee,statusDataSource:this.$store.getters["status/status"](this),departmentsDataSource:this.$dxStore({key:"id",loadUrl:l.a.company.Department}),businessUnitIdDataSource:this.$dxStore({key:"id",loadUrl:l.a.company.BusinessUnit}),jobTitleDataSource:this.$dxStore({key:"id",loadUrl:l.a.company.JobTitle}),editButtons:[{hint:"card",icon:"card",onClick:this.editEmployee}]}},methods:{selectEmployee:function(e){this.$router.push("/company/staff/employees/".concat(e.data.id))},editEmployee:function(e){this.$router.push("/company/staff/employees/".concat(e.row.data.id))},onToolbarPreparing:function(e){var t=this,o=e.toolbarOptions.items.find((function(e){return"addRowButton"==e.name}));o&&(o.options.onClick=function(){t.$router.push("/company/staff/employees/create")})}}}),x=(o(2120),o(7)),m={components:{employeeList:Object(x.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("Header",{attrs:{isbackButton:!e.isCard,headerTitle:e.$t("menu.employee")}}),e._v(" "),n("DxDataGrid",{attrs:{id:"gridContainer","show-borders":!0,errorRowEnabled:!1,"data-source":e.dataSource,"remote-operations":!0,"allow-column-reordering":!0,"allow-column-resizing":!0,"column-auto-width":!0,"load-panel":{enabled:!0,indicatorSrc:o(221)},onRowDblClick:e.selectEmployee},on:{"toolbar-preparing":function(t){return e.onToolbarPreparing(t)}}},[n("DxHeaderFilter",{attrs:{visible:!0}}),e._v(" "),n("DxGroupPanel",{attrs:{visible:!0}}),e._v(" "),n("DxGrouping",{attrs:{"auto-expand-all":!1}}),e._v(" "),n("DxColumnChooser",{attrs:{enabled:!0}}),e._v(" "),n("DxColumnFixing",{attrs:{enabled:!0}}),e._v(" "),n("DxFilterRow",{attrs:{visible:!0}}),e._v(" "),n("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":e.$t("menu.employee")}}),e._v(" "),n("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"Employee"}}),e._v(" "),n("DxSearchPanel",{attrs:{position:"after",visible:!0}}),e._v(" "),n("DxScrolling",{attrs:{mode:"virtual"}}),e._v(" "),n("DxEditing",{attrs:{"allow-updating":e.$store.getters["permissions/allowUpdating"](e.entityType),"allow-adding":e.$store.getters["permissions/allowCreating"](e.entityType),useIcons:!0,mode:"inline"}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"id",caption:e.$t("shared.id"),"data-type":"string"}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"name",caption:e.$t("shared.name"),"data-type":"string"}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"userName",caption:e.$t("translations.fields.userName"),"data-type":"string"}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"jobTitleId",caption:e.$t("translations.fields.jobTitleId")}},[n("DxLookup",{attrs:{"data-source":e.jobTitleDataSource,"value-expr":"id","display-expr":"name"}})],1),e._v(" "),n("DxColumn",{attrs:{visible:!1,"data-field":"email",caption:e.$t("translations.fields.email")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"businessUnitId",caption:e.$t("translations.fields.businessUnitId")}},[n("DxLookup",{attrs:{"data-source":e.businessUnitIdDataSource,"value-expr":"id","display-expr":"name"}})],1),e._v(" "),n("DxColumn",{attrs:{"data-field":"departmentId",caption:e.$t("translations.fields.departmentId")}},[n("DxLookup",{attrs:{"data-source":e.departmentsDataSource,"value-expr":"id","display-expr":"name"}})],1),e._v(" "),n("DxColumn",{attrs:{"data-field":"phone",caption:e.$t("translations.fields.phones")}}),e._v(" "),n("DxColumn",{attrs:{width:110,buttons:e.editButtons,type:"buttons"}})],1)],1)}),[],!1,null,null,null).exports}},f=Object(x.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("employee-list",{attrs:{isCard:!1}})}),[],!1,null,null,null);t.default=f.exports}}]);
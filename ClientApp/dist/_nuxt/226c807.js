(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1975:function(e,t,n){var content=n(2108);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(38).default)("638dc320",content,!0,{sourceMap:!1})},2106:function(e,t,n){e.exports=n.p+"img/turn-off.16ab872.svg"},2107:function(e,t,n){"use strict";n(1975)},2108:function(e,t,n){var r=n(25)(!1);r.push([e.i,"*{outline:none}.scrool-auto{width:100%;height:100%;overflow:auto}.d-flex{display:flex}.justify-flex-end{justify-content:flex-end}.list__content div{padding-right:5px}.f-size-30{margin:5px;font-size:20px}.js-space-between{align-items:center}.thread-text-status{text-align:right;margin-left:auto;padding:0 5px;font-size:14px}.thread-text-status .task__item{white-space:nowrap}.thread-text-status i{font-size:16px}.mY-1{margin:10px 0}.ml-1{margin-left:1.2em}.current-comment{background:#ecfff46b}.item--status{justify-content:flex-end}.item--status .icon--status{margin:0 5px;display:flex;width:20px;height:100%}.custom-icon{margin:0 5px;display:flex;width:20px;height:100%}.message-body{margin-left:30px}.comment__item{box-sizing:border-box;white-space:normal;border:1px solid #ddd;border-left:2px solid #009a40;padding:5px;border-radius:2px;border-top-left-radius:4px;border-bottom-left-radius:4px}.expired{color:red}.text--bold{font-weight:500}.text-italic{font-style:italic}.link:hover{text-decoration:underline;color:#f90}.container--grid{display:grid;grid-template-columns:1fr 1fr}.container--grid .item{justify-self:flex-start;width:100%}.quide-page{padding:20px 0 20px}.quide-page .quide-page__header{padding:0;margin:0 50px;padding-bottom:20px}.quide-page .quide-page__header .header-title{font-size:26px !important;color:#777}.quide-page .quide-page__header h2{font-weight:450;padding:0;margin:0 !important}.quide-page .title{color:#777}.quide-page .description{color:#aaa;font-size:0.9em}.message{box-sizing:border-box;padding:8px 0;font-size:15px;align-items:center}.message .message__label{display:block;padding-right:8px}.message .message__icon{display:block;font-size:18px;padding-right:8px}.cursive{font-style:italic}.content{line-height:1.5}.content h2{font-size:30px;margin-top:20px;margin-bottom:20px}.content-block{margin-left:40px;margin-right:40px;margin-top:20px}.screen-x-small .content-block{margin-left:20px;margin-right:20px}.responsive-paddings{padding:20px}.screen-large .responsive-paddings{padding:40px}.dx-card.wide-card{border-radius:0;margin-left:0;margin-right:0;border-right:0;border-left:0}.with-footer>.dx-scrollable-wrapper>.dx-scrollable-container>.dx-scrollable-content{height:100%}.with-footer>.dx-scrollable-wrapper>.dx-scrollable-container>.dx-scrollable-content>.dx-scrollview-content{display:flex;flex-direction:column;min-height:100%}#gridContainer{max-height:85vh}.f-direction-column{height:200px;justify-content:space-between;flex-direction:column}img.dx-icon{cursor:pointer;height:15px;width:15px}\n",""]),e.exports=r},2274:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(30),n(61)),l=n.n(o),dialog=n(137),d=n(2106),x=n.n(d),c=n(4),m=n(103),f=n(67),h={components:{Header:m.a,DxSearchPanel:f.DxSearchPanel,DxDataGrid:f.DxDataGrid,DxColumn:f.DxColumn,DxEditing:f.DxEditing,DxHeaderFilter:f.DxHeaderFilter,DxScrolling:f.DxScrolling,DxGrouping:f.DxGrouping,DxGroupPanel:f.DxGroupPanel,DxExport:f.DxExport,DxSelection:f.DxSelection,DxColumnChooser:f.DxColumnChooser,DxColumnFixing:f.DxColumnFixing,DxFilterRow:f.DxFilterRow,DxStateStoring:f.DxStateStoring,DxButton:f.DxButton,DxSummary:f.DxSummary,DxTotalItem:f.DxTotalItem},data:function(){return{turnOfIcon:x.a,onlineUsersStore:new l.a({store:this.$dxStore({key:"userId",loadUrl:c.a.activeUser.GetActiveUsers})})}},methods:{onToolbarPreparing:function(e){var t=this;e.toolbarOptions.items.unshift({widget:"button",location:"after",options:{icon:"refresh",onClick:function(){t.onlineUsersStore.reload()}}})},diactivateUser:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(dialog.confirm)(t.$t("onlineUsers.confirm.sureTurnOffUser"),t.$t("shared.areYouSure"));case 2:if(n.sent){n.next=5;break}return n.abrupt("return");case 5:t.$awn.asyncBlock(t.$axios.post(c.a.activeUser.EndSession,{userId:e.row.key}),(function(){t.onlineUsersStore.reload()}));case 6:case"end":return n.stop()}}),n)})))()}}},D=(n(2107),n(7)),v={components:{onlineUsersList:Object(D.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{headerTitle:e.$t("onlineUsers.headers.onlineUsers"),showTitle:!0,isbackButton:!0}}),e._v(" "),n("DxDataGrid",{attrs:{id:"gridContainer",errorRowEnabled:!1,"show-borders":!0,"data-source":e.onlineUsersStore,"remote-operations":!1},on:{"toolbar-preparing":function(t){return e.onToolbarPreparing(t)}}},[n("DxHeaderFilter",{attrs:{visible:!0}}),e._v(" "),n("DxGroupPanel",{attrs:{visible:!0}}),e._v(" "),n("DxGrouping",{attrs:{"auto-expand-all":!1}}),e._v(" "),n("DxExport",{attrs:{enabled:!0,"allow-export-selected-data":!0,"file-name":e.$t("onlineUsers.fileName")}}),e._v(" "),n("DxFilterRow",{attrs:{visible:!0}}),e._v(" "),n("DxHeaderFilter",{attrs:{visible:!0}}),e._v(" "),n("DxColumnChooser",{attrs:{enabled:!0}}),e._v(" "),n("DxColumnFixing",{attrs:{enabled:!0}}),e._v(" "),n("DxStateStoring",{attrs:{enabled:!0,type:"localStorage","storage-key":"onlineUsers"}}),e._v(" "),n("DxSearchPanel",{attrs:{position:"after",visible:!0}}),e._v(" "),n("DxEditing",{attrs:{"allow-updating":!1,"allow-deleting":!1,"allow-adding":!1,useIcons:!0,mode:"row"}}),e._v(" "),n("DxScrolling",{attrs:{mode:"virtual"}}),e._v(" "),n("DxColumn",{attrs:{type:"buttons"}},[n("DxButton",{attrs:{icon:e.turnOfIcon,hint:e.$t("buttons.diactivate"),onClick:e.diactivateUser}})],1),e._v(" "),n("DxColumn",{attrs:{"data-field":"name","data-type":"string",caption:e.$t("onlineUsers.fields.name")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"name","data-type":"string",caption:e.$t("onlineUsers.fields.description")}}),e._v(" "),n("DxSummary",[n("DxTotalItem",{attrs:{column:"name","summary-type":"count"}})],1)],1)],1)}),[],!1,null,null,null).exports}},w=Object(D.a)(v,(function(){var e=this.$createElement;return(this._self._c||e)("online-users-list")}),[],!1,null,null,null);t.default=w.exports}}]);
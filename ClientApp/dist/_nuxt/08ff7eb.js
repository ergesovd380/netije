(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{2333:function(e,n,t){"use strict";t.r(n);var r=t(5),c=(t(30),t(4)),o={asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$axios,r=e.params,n.next=3,t.get("".concat(c.a.company.Employee,"/").concat(+r.id));case 3:return o=n.sent,data=o.data,n.abrupt("return",{currentEmployee:data});case 6:case"end":return n.stop()}}),n)})))()},data:function(){return{currentEmployee:null}},components:{employeeCard:t(1032).a}},l=t(7),component=Object(l.a)(o,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("employee-card",{attrs:{data:e.currentEmployee}})}),[],!1,null,null,null);n.default=component.exports}}]);
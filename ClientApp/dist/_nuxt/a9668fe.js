(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{2334:function(t,n,r){"use strict";r.r(n);var e=r(5),c=(r(30),r(4)),o={components:{contactCard:r(588).a},data:function(){return{currentContact:null}},asyncData:function(t){return Object(e.a)(regeneratorRuntime.mark((function n(){var r,e,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.$axios,e=t.params,n.next=3,r.get("".concat(c.a.contragents.Contact,"/").concat(+e.id));case 3:return o=n.sent,data=o.data,n.abrupt("return",{currentContact:data});case 6:case"end":return n.stop()}}),n)})))()},methods:{gotTo:function(){this.$router.push("/parties/organizations/contacts")}}},d=r(7),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("contactCard",{attrs:{data:t.currentContact,isCard:!1},on:{valueChanged:t.gotTo}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);
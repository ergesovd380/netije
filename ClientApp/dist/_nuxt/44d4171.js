(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{2346:function(e,t,n){"use strict";n.r(t);var o={components:{documentGrid:n(2264).default},data:function(){return{documentQuery:+this.$route.params.type,year:+this.$route.query.year}},methods:{showDocumentDetails:function(e){var t=e.id,n=e.documentTypeGuid;this.$router.push("/document-module/detail/".concat(n,"/").concat(t))}}},c=n(7),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("documentGrid",{attrs:{documentQuery:e.documentQuery,documentYear:e.year},on:{selectedDocument:e.showDocumentDetails}})}),[],!1,null,null,null);t.default=component.exports}}]);
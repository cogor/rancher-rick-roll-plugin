(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{2385:function(e,r,t){"use strict";var n=t(3),c=t(58),o=t(2),l=(t(25),t(9));r.a=function(e,r,t){var d=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return function(){var f=Object(o.a)(regeneratorRuntime.mark((function o(f){var m,v,h,k,x,j;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(v=f.redirect,h=f.store,k=(null===(m=h.getters.currentCluster)||void 0===m?void 0:m.id)||"local",!h.getters["type-map/isProductActive"](e)){o.next=9;break}if(!t){o.next=7;break}if("object"!==Object(c.a)(t)){o.next=6;break}return o.abrupt("return",v(t));case 6:return o.abrupt("return",v({name:"c-cluster-product-resource",params:{cluster:k,product:e,resource:t}}));case 7:o.next=21;break;case 9:if(!d){o.next=20;break}return o.next=12,h.dispatch("catalog/load");case 12:if(!(x=h.getters["catalog/chart"]({chartName:r}))){o.next=17;break}return o.abrupt("return",v({name:"c-cluster-apps-charts-chart",params:{cluster:k},query:(j={},Object(n.a)(j,l.z,x.repoType),Object(n.a)(j,l.y,x.repoName),Object(n.a)(j,l.d,x.chartName),Object(n.a)(j,l.G,x.versions[0].version),j)}));case 17:h.dispatch("loadingError","Chart not found for ".concat(e));case 18:o.next=21;break;case 20:return o.abrupt("return",v({name:"c-cluster-explorer",params:{cluster:k}}));case 21:case"end":return o.stop()}}),o)})));return function(e){return f.apply(this,arguments)}}()}},2895:function(e,r,t){"use strict";t.r(r);var n=t(2385),c=t(574),o=t(0),l={middleware:[Object(n.a)(c.NAME,c.CHART_NAME,o.d.BACKUP)]},d=t(1),component=Object(d.a)(l,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",[e._v("This is backup/restore.")])}),[],!1,null,null,null);r.default=component.exports}}]);
//# sourceMappingURL=a58c22a08433dff91c8e.js.map
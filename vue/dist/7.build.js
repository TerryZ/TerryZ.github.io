webpackJsonp([7],{106:function(t,n,e){"use strict";n.a={data:function(){this.$store.state,this.$route.params.prj;return{changeLogs:[]}},methods:{loadChangeLog:function(){var t=this.$store.state,n=this.$route.params.prj;this.changeLogs=n?t.changeLog[n][t.language]:[]}},watch:{"$store.state.language":function(){this.loadChangeLog()}},mounted:function(){var t=this.$route.params.prj;!this.$store.state.currentProject&&t&&this.$store.commit("changeProject",t),this.loadChangeLog()}}},124:function(t,n,e){var o=e(125);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(3)("70bde46d",o,!0,{})},125:function(t,n,e){n=t.exports=e(2)(!1),n.push([t.i,".content[data-v-40891897]{background-color:#fff;width:800px;padding-bottom:30px}.content .header[data-v-40891897]{margin:100px 0 60px}.content .jumbotron[data-v-40891897]{background-color:#fff;padding-left:0;margin-bottom:10px}.content .jumbotron h1[data-v-40891897]{font-size:50px;font-weight:lighter}.content h3[data-v-40891897]{color:#fff;background-color:#41b883;border-radius:3px;padding:3px 5px;display:inline-block}.content h3 small[data-v-40891897]{color:green}.content .desc[data-v-40891897]{font-size:15px;color:#666;margin:0 50px 20px}.content p[data-v-40891897]{margin:0 0 5px 60px;font-size:16px;display:list-item;list-style:disc}",""])},126:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content container"},[e("h1",{staticClass:"text-center header"},[e("i18n",{attrs:{path:"common.changeLog"}})],1),t._v(" "),t._l(t.changeLogs,function(n){return e("section",[e("h3",[t._v("v"+t._s(n.version)+" "),e("small",[t._v(t._s(n.time))])]),t._v(" "),t._l(n.changes,function(n){return e("p",{domProps:{innerHTML:t._s(n)}})})],2)})],2)},a=[],r={render:o,staticRenderFns:a};n.a=r},90:function(t,n,e){"use strict";function o(t){e(124)}Object.defineProperty(n,"__esModule",{value:!0});var a=e(106),r=e(126),s=e(1),i=o,c=s(a.a,r.a,!1,i,"data-v-40891897",null);n.default=c.exports}});
//# sourceMappingURL=7.build.js.map
webpackJsonp([6],{47:function(e,t,a){"use strict";function n(e){a(79)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(58),o=a(81),v=a(1),i=n,_=v(r.a,o.a,!1,i,"data-v-3ce039ce",null);t.default=_.exports},58:function(e,t,a){"use strict";t.a={data:function(){for(var e=[],t=0;t<108;t++)e.push(t+1);return{page:{totalRow:21,language:"en",align:"center"},pagePhoto:{totalRow:e.length,language:"en",align:"center"},noInfo:{totalRow:100,align:"left",language:"en",info:!1},noLengthMenu:{totalRow:100,align:"left",language:"en",pageSizeMenu:!1},mini:{totalRow:100,align:"left",info:!1,language:"en",pageSizeMenu:!1},pageMsg:[],arr:e,pageArr:[]}},methods:{pageChange:function(e){this.pageMsg.push(e)},pagePhotoChange:function(e){this.pageArr.splice(0,this.pageArr.length);var t=0,a=0;t=e.pageSize*(e.pageNumber-1),(a=t+e.pageSize)>this.arr.length&&(a=this.arr.length);for(var n=t;n<a;n++)this.pageArr.push(this.arr[n])}},mounted:function(){SyntaxHighlighter.highlight()}}},79:function(e,t,a){var n=a(80);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(3)("67f9d3a8",n,!0,{})},80:function(e,t,a){t=e.exports=a(2)(!1),t.push([e.i,"div.photo-wall div.brick[data-v-3ce039ce]{border:1px solid #ddd;border-radius:2px;background-color:#f4f4f4;text-align:center;line-height:100%;float:left;margin:0 10px 10px 0;width:180px;height:130px;font-size:60px;color:#bbb;padding-top:35px}",""])},81:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h2",{staticClass:"page-header"},[e._v("Install")]),e._v(" "),e._m(0),e._v(" "),a("pre",{staticClass:"brush:bash"},[e._v("            npm i v-page --save\n        ")]),e._v(" "),e._m(1),e._v(" "),a("pre",{staticClass:"brush:js"},[e._v("            import Vue from 'vue'\n            import vPage from 'v-page';\n            Vue.use(vPage);\n        ")]),e._v(" "),a("h2",{staticClass:"page-header"},[e._v("Deploy on your component")]),e._v(" "),a("p",[e._v("template code")]),e._v(" "),a("script",{staticClass:"brush:js",attrs:{type:"syntaxhighlighter"}},[e._v("\n        <![CDATA[\n            <template>\n              \x3c!-- v-bind 'setting' data to config page bar --\x3e\n              \x3c!-- bind event 'page-change' to receive page info change --\x3e\n              <v-page :setting=\"pageSet\" @page-change=\"pageChange\"></v-page>\n            </template>\n        ]]>\n        ")]),e._v(" "),a("p",[e._v("script code")]),e._v(" "),a("pre",{staticClass:"brush:js"},[e._v("export default {\n    data(){\n        return {\n            pageSet: {\n                totalRow: 0,//required option\n                language: 'en',//default: 'cn'\n                pageSizeMenu: [20,100]//default: [10, 20, 50, 100]\n            }\n        }\n    },\n    methods:{\n        //receive page info change callback\n        pageChange(pInfo){\n            let that = this;\n            console.log(pInfo);//{pageNumber: 1, pageSize: 10}\n            //for example, do some http request, get new data and update totalRow property\n            axios({\n            ...\n            }).then(function(resp){\n                that.totalRow = resp.totalRow;\n            });\n        }\n    }\n};\n        ")]),e._v(" "),a("h2",{staticClass:"page-header"},[e._v("Example")]),e._v(" "),a("v-page",{attrs:{setting:e.page},on:{"page-change":e.pageChange}}),e._v(" "),a("div",{staticClass:"row text-center"},[a("h3",[e._v("page change logs")]),e._v(" "),e._l(e.pageMsg,function(t){return a("div",[e._v(e._s(t))])})],2),e._v(" "),e._m(2),e._v(" "),a("div",{staticClass:"photo-wall"},e._l(e.pageArr,function(t){return a("div",{staticClass:"brick",domProps:{innerHTML:e._s(t)}})})),e._v(" "),a("v-page",{attrs:{setting:e.pagePhoto},on:{"page-change":e.pagePhotoChange}}),a("br"),e._v(" "),a("h3",[e._v("no page length menu")]),a("br"),e._v(" "),a("v-page",{attrs:{setting:e.noLengthMenu}}),a("br"),e._v(" "),a("h3",[e._v("no page info bar")]),a("br"),e._v(" "),a("v-page",{attrs:{setting:e.noInfo}}),a("br"),e._v(" "),a("h3",[e._v("mimi mode, no info bar, no page length")]),a("br"),e._v(" "),a("v-page",{attrs:{setting:e.mini}}),a("br"),e._v(" "),a("h2",{staticClass:"page-header"},[e._v("Options")]),e._v(" "),e._m(3),e._v(" "),a("h2",{staticClass:"page-header"},[e._v("Events")]),e._v(" "),e._m(4)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("use "),a("strong",[e._v("npm")]),e._v(" to install plugin")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Include plugin in your "),a("code",[e._v("main.js")]),e._v(" file")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[e._v("Gallery demo "),a("small",[a("a",{attrs:{href:"https://codepen.io/terry05/pen/yjZYLR",target:"_blank"}},[e._v("view on CodePen")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[e._v("name")]),e._v(" "),a("th",[e._v("type")]),e._v(" "),a("th",[e._v("description")]),e._v(" "),a("th",[e._v("required")]),e._v(" "),a("th",[e._v("default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("totalRow")]),e._v(" "),a("td",[e._v("number")]),e._v(" "),a("td",[e._v("the total number of records in query"),a("br"),e._v("in parent component, you need update totalRow number when it's change")]),e._v(" "),a("td",[e._v("true")]),e._v(" "),a("td",[e._v("0")])]),e._v(" "),a("tr",[a("td",[e._v("info")]),e._v(" "),a("td",[e._v("boolean")]),e._v(" "),a("td",[e._v("set to show page info bar or no")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("true")])]),e._v(" "),a("tr",[a("td",[e._v("language")]),e._v(" "),a("td",[e._v("string")]),e._v(" "),a("td",[e._v("\n                        the page bar language\n                        "),a("ul",[a("li",[a("code",[e._v("'cn'")])]),e._v(" "),a("li",[a("code",[e._v("'en'")])]),e._v(" "),a("li",[a("code",[e._v("'jp'")])])])]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("'cn'")])]),e._v(" "),a("tr",[a("td",[e._v("pageSizeMenu")]),e._v(" "),a("td",[e._v("Array|boolean")]),e._v(" "),a("td",[e._v("page length menu list, set "),a("code",[e._v("false")]),e._v(" to close page length menu")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("[10, 20, 50, 100]")])]),e._v(" "),a("tr",[a("td",[e._v("align")]),e._v(" "),a("td",[e._v("string")]),e._v(" "),a("td",[e._v("\n                        the page bar alignment direction\n                        "),a("ul",[a("li",[a("code",[e._v("'left'")])]),e._v(" "),a("li",[a("code",[e._v("'center'")])]),e._v(" "),a("li",[a("code",[e._v("'right'")])])])]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("'right'")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"table table-bordered table-striped"},[a("thead",[a("tr",[a("th",[e._v("name")]),e._v(" "),a("th",[e._v("description")]),e._v(" "),a("th",[e._v("optionalPayload")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("page-change")]),e._v(" "),a("td",[e._v("when page change or page length change, plugin will emit an event to the parent")]),e._v(" "),a("td",[a("ul",[a("li",[a("code",[e._v("pageNumber")]),a("br"),e._v("current page number")]),e._v(" "),a("li",[a("code",[e._v("pageSize")]),a("br"),e._v("the total number of records in one page")])])])])])])}],o={render:n,staticRenderFns:r};t.a=o}});
//# sourceMappingURL=6.build.js.map
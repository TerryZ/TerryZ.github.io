(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67eb9843"],{"0428":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{},[a("i18n",{attrs:{path:"common.install"}})],1),a("hr",{staticClass:"my-2"}),a("p",[a("i18n",{attrs:{path:"common.guide.useNpm"}})],1),a("pre",{staticClass:"brush:js;"},[t._v("        npm i v-page --save\n    ")]),a("p",[a("i18n",{attrs:{path:"common.guide.include"}})],1),a("pre",{staticClass:"brush:js;"},[t._v("        //plugin install for global deploy\n        import Vue from 'vue'\n        import page from 'v-page';\n        Vue.use(page, { global config options... });\n\n        //use v-page in local component\n        import { vPage } from 'v-page';\n        export default {\n            components: {\n                'v-page': vPage\n            }\n        }\n    ")]),a("div",{staticClass:"card p-4 text-monospace"},[a("p",[a("i18n",{attrs:{path:"common.globalConfig"}})],1),t._m(0)]),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.deploy"}})],1),a("hr",{staticClass:"my-2"}),a("script",{staticClass:"brush:html",attrs:{type:"syntaxhighlighter"}},[t._v('\n    <![CDATA[\n        <template>\n            <v-page :total-row="totalRow" @page-change="pageChange"></v-page>\n        </template>\n\n        &lt;script&gt;\n        export default {\n            data(){\n                return {\n                    totalRow: 100//required option\n                }\n            },\n            methods:{\n                //receive page info change callback\n                pageChange(pInfo){\n                    console.log(pInfo);//{pageNumber: 1, pageSize: 10}\n                    //for example, do some http request, get new data and update totalRow property\n                    axios({\n                    ...\n                    }).then(resp => {\n                        this.totalRow = resp.totalRow;\n                    });\n                }\n            }\n        };\n        &lt;/script&gt;\n    ]]>\n    ')]),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.example"}})],1),a("hr",{staticClass:"my-2"}),a("v-page",{staticClass:"mt-4",attrs:{"total-row":21,align:"center"},on:{"page-change":t.pageChange}}),a("div",{staticClass:"text-center mt-2 text-monospace"},[a("h3",[a("i18n",{attrs:{path:"page.demo.pageChangeLogs"}})],1),t._l(t.pageMsg,function(e){return a("div",[t._v(t._s(e))])})],2),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-page :total-row="21" align="center" @page-change="pageChange"></v-page>\n        ]]>\n        ')])]),a("br"),a("h4",[a("i18n",{attrs:{path:"page.demo.gallery"}}),a("small",{staticClass:"ml-3"},[a("a",{attrs:{href:"https://codepen.io/terry05/pen/yjZYLR",target:"_blank"}},[a("i18n",{attrs:{path:"common.codePen"}})],1)])],1),a("div",{staticClass:"photo-wall"},t._l(t.pageArr,function(e){return a("div",{staticClass:"brick",domProps:{innerHTML:t._s(e)}})}),0),a("v-page",{attrs:{"total-row":t.arr.length,align:"left"},on:{"page-change":t.pagePhotoChange}}),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <div class="photo-wall">\n            <div v-for="num in pageArr" v-html="num" class="brick"></div>\n        </div>\n        <v-page :total-row="arr.length" align="left" @page-change="pagePhotoChange"></v-page>\n\n        //script\n        &lt;script&gt;\n        data(){\n            return {\n                arr: Array(108).fill(0).map((val, index) => index + 1),\n                pageArr: []\n            };\n        },\n        methods: {\n            pagePhotoChange(pInfo){\n                let start=0, end=0;\n                start = pInfo.pageSize * (pInfo.pageNumber-1);\n                end = start + pInfo.pageSize;\n                if(end > this.arr.length) end = this.arr.length;\n\n                this.pageArr.splice(0, this.pageArr.length);\n                for (let i = start; i < end; i++) {\n                    this.pageArr.push(this.arr[i]);\n                }\n            }\n        }\n        &lt;/script&gt;\n        ]]>\n        ')])]),a("br"),a("h4",[a("i18n",{attrs:{path:"page.demo.complete"}})],1),a("br"),a("v-page",{ref:"page",attrs:{align:"left","total-row":100},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}}),a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-md-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.target,expression:"target"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.target},on:{input:function(e){e.target.composing||(t.target=e.target.value)}}})]),a("button",{staticClass:"btn btn-secondary mr-3",attrs:{type:"button"},on:{click:t.go}},[t._v("forward")]),a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.current=t.current+1}}},[t._v("page + 1 (v-model)")])]),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-page align="left" :total-row="100" v-model="current" ref="page"></v-page>\n\n        <button class="btn btn-secondary" type="button" @click="go">forward</button>\n        <button class="btn btn-outline-secondary"\n                type="button" @click="current = current + 1">page + 1</button>\n\n        //script\n        data(){\n            return {\n                current: 3\n            }\n        },\n        methods: {\n            go(){\n                //use api to change current page\n                this.$refs.page.goPage(3);\n            }\n        }\n        ]]>\n        ')])]),a("br"),a("h4",[a("i18n",{attrs:{path:"page.demo.noLength"}})],1),a("br"),a("v-page",{attrs:{"total-row":100,align:"left","page-size-menu":!1}}),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-page :total-row="100" align="left" :page-size-menu="false"></v-page>\n        ]]>\n        ')])]),a("br"),a("h4",[a("i18n",{attrs:{path:"page.demo.noPageInfo"}})],1),a("br"),a("v-page",{attrs:{"total-row":100,align:"left","page-size-menu":!1,info:!1}}),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-page :total-row="100" align="left" :page-size-menu="false" :info="false"></v-page>\n        ]]>\n        ')])]),a("br"),a("h4",[a("i18n",{attrs:{path:"page.demo.noFirstLast"}})],1),a("br"),a("v-page",{attrs:{"page-size-menu":!1,info:!1,"total-row":100,first:!1,last:!1,align:"left"}}),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-page :page-size-menu="false"\n                :info="false"\n                :total-row="100"\n                :first="false"\n                :last="false"\n                align="left"></v-page>\n        ]]>\n        ')])]),a("br"),a("h4",[a("i18n",{attrs:{path:"page.demo.noPageNumber"}})],1),a("br"),a("v-page",{attrs:{"page-size-menu":!1,info:!1,"total-row":100,first:!1,last:!1,"page-number":!1,align:"left"}}),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-page :page-size-menu="false"\n                :info="false"\n                :total-row="100"\n                :first="false"\n                :last="false"\n                :page-number="false"\n                align="left"></v-page>\n        ]]>\n        ')])]),a("br"),a("h4",[a("i18n",{attrs:{path:"page.demo.noBorder"}})],1),a("br"),a("v-page",{attrs:{"total-row":100,align:"left",border:!1}}),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-page :total-row="100"  align="left" :border="false" ></v-page>\n        ]]>\n        ')])]),a("br"),a("h4",[a("i18n",{attrs:{path:"page.option.disabled"}})],1),a("br"),a("v-page",{attrs:{"total-row":100,align:"left",disabled:t.disabled}}),a("div",{staticClass:"btn-group mt-2",attrs:{role:"group","aria-label":"..."}},[a("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button",disabled:!t.disabled},on:{click:function(e){t.disabled=!1}}},[t._v("Enabled")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button",disabled:t.disabled},on:{click:function(e){t.disabled=!0}}},[t._v("Disabled")])]),a("showcode",[a("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-page :total-row="100" align="left" :disabled="disabled" ></v-page>\n\n        <div class="btn-group">\n            <button :disabled="!disabled" @click="disabled=false">Enabled</button>\n            <button :disabled="disabled" @click="disabled=true">Disabled</button>\n        </div>\n        ]]>\n        ')])]),a("br"),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.options"}})],1),a("table",{staticClass:"table table-striped option-table"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.name"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.type"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.required"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.default"}})],1)])]),a("tbody",[a("tr",[a("td",[t._v("v-model")]),a("td",[t._v("number")]),a("td",[a("i18n",{attrs:{path:"page.option.vModel"}})],1),a("td",[t._v("true")]),a("td",[t._v("0")])]),a("tr",[a("td",[t._v("total-row")]),a("td",[t._v("number")]),a("td",[a("i18n",{attrs:{path:"page.option.totalRow"}})],1),a("td",[t._v("true")]),a("td",[t._v("0")])]),a("tr",[a("td",[t._v("info")]),a("td",[t._v("boolean")]),a("td",[a("i18n",{attrs:{path:"page.option.info"}})],1),a("td",[t._v("false")]),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("language")]),a("td",[t._v("string")]),a("td",[a("i18n",{attrs:{path:"page.option.language"}}),t._m(1)],1),a("td",[t._v("false")]),a("td",[t._v("'cn'")])]),a("tr",[a("td",[t._v("page-size-menu")]),a("td",[t._v("array|boolean")]),a("td",[a("i18n",{attrs:{path:"page.option.pageSizeMenu"}})],1),a("td",[t._v("false")]),a("td",[t._v("[10, 20, 50, 100]")])]),a("tr",[a("td",[t._v("align")]),a("td",[t._v("string")]),a("td",[a("i18n",{attrs:{path:"page.option.align"}}),t._m(2)],1),a("td",[t._v("false")]),a("td",[t._v("'right'")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("boolean")]),a("td",[a("i18n",{attrs:{path:"page.option.disabled"}})],1),a("td",[t._v("false")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("border")]),a("td",[t._v("boolean")]),a("td",[a("i18n",{attrs:{path:"page.option.border"}})],1),a("td",[t._v("false")]),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("page-number")]),a("td",[t._v("boolean")]),a("td",[a("i18n",{attrs:{path:"page.option.pageNumber"}})],1),a("td",[t._v("false")]),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("first")]),a("td",[t._v("boolean")]),a("td",[a("i18n",{attrs:{path:"page.option.first"}})],1),a("td",[t._v("false")]),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("last")]),a("td",[t._v("boolean")]),a("td",[a("i18n",{attrs:{path:"page.option.last"}})],1),a("td",[t._v("false")]),a("td",[t._v("true")])])])]),a("h2",{staticClass:"page-header"},[a("i18n",{attrs:{path:"common.events"}})],1),a("table",{staticClass:"table table-striped"},[a("thead",[a("tr",[a("th",[a("i18n",{attrs:{path:"common.tbTitle.param"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),a("th",[a("i18n",{attrs:{path:"common.tbTitle.args"}})],1)])]),a("tbody",[a("tr",[a("td",[t._v("page-change")]),a("td",[a("i18n",{attrs:{path:"page.event.pChange"}})],1),a("td",[a("ul",[a("li",[a("code",[t._v("pageNumber")]),a("br"),a("i18n",{attrs:{path:"page.event.pageNumber"}})],1),a("li",[a("code",[t._v("pageSize")]),a("br"),a("i18n",{attrs:{path:"page.event.pageSize"}})],1)])])])])]),a("h2",{staticClass:"page-header"},[t._v("API")]),a("hr",{staticClass:"my-2"}),a("p",{},[a("i18n",{attrs:{path:"selectmenu.api.desc"}})],1),t._m(3),a("div",{staticClass:"api-row"},[a("h4",[t._v("goPage"),a("small",[a("i18n",{attrs:{path:"page.api.goPage"}})],1)]),a("p",[t._v("\n            (page: number): void\n        ")])]),a("div",{staticClass:"api-row"},[a("h4",[t._v("reload"),a("small",[a("i18n",{attrs:{path:"page.api.reload"}})],1)]),a("p",[t._v("\n            (): void\n        ")])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("info")]),a("li",[t._v("pageSizeMenu")]),a("li",[t._v("language")]),a("li",[t._v("align")]),a("li",[t._v("border")]),a("li",[t._v("pageNumber")]),a("li",[t._v("first")]),a("li",[t._v("last")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("'cn'")])]),a("li",[a("code",[t._v("'en'")])]),a("li",[a("code",[t._v("'jp'")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("code",[t._v("'left'")])]),a("li",[a("code",[t._v("'center'")])]),a("li",[a("code",[t._v("'right'")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card px-3 mb-4"},[a("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n            <v-page :total-row="100" ref="page" ></page>\n\n            //call api\n            this.$refs.page.goPage(3);\n        ]]>\n        ')])])}],s=(a("b06f"),{data:function(){return{arr:Array.apply(null,{length:108}).map(function(t,e){return e+1}),pageArr:[],pageMsg:[],disabled:!1,target:1,current:3}},methods:{pageChange:function(t){this.pageMsg.push(t)},pagePhotoChange:function(t){this.pageArr=[];var e=0,a=0;e=t.pageSize*(t.pageNumber-1),a=e+t.pageSize-1,this.pageArr=this.arr.filter(function(t,n){return n>=e&&n<=a})},go:function(){this.$refs.page.goPage(Number(this.target))}},mounted:function(){SyntaxHighlighter.highlight()}}),i=s,o=(a("d4d5"),a("2877")),l=Object(o["a"])(i,n,r,!1,null,"bfeb460c",null);e["default"]=l.exports},"2ce6":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"3b80":function(t,e,a){var n=a("2d2c"),r=a("2b11"),s=a("201d"),i=a("2ce6"),o="["+i+"]",l="​",p=RegExp("^"+o+o+"*"),g=RegExp(o+o+"*$"),c=function(t,e,a){var r={},o=s(function(){return!!i[t]()||l[t]()!=l}),p=r[t]=o?e(d):i[t];a&&(r[a]=p),n(n.P+n.F*o,"String",r)},d=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(p,"")),2&e&&(t=t.replace(g,"")),t};t.exports=c},"62af":function(t,e,a){var n=a("7cbd"),r=a("2ba0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},"78de":function(t,e,a){var n=a("48ed"),r=a("b915"),s=a("54a3"),i=a("1f51"),o=a("3301"),l=a("8003"),p=Object.getOwnPropertyDescriptor;e.f=a("3a0f")?p:function(t,e){if(t=s(t),e=i(e,!0),l)try{return p(t,e)}catch(a){}if(o(t,e))return r(!n.f.call(t,e),t[e])}},"8f3c":function(t,e,a){},b06f:function(t,e,a){"use strict";var n=a("4839"),r=a("3301"),s=a("9b6d"),i=a("d62f"),o=a("1f51"),l=a("201d"),p=a("62af").f,g=a("78de").f,c=a("694f").f,d=a("3b80").trim,h="Number",u=n[h],f=u,v=u.prototype,b=s(a("04ac")(v))==h,m="trim"in String.prototype,_=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():d(e,3);var a,n,r,s=e.charCodeAt(0);if(43===s||45===s){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var i,l=e.slice(2),p=0,g=l.length;p<g;p++)if(i=l.charCodeAt(p),i<48||i>r)return NaN;return parseInt(l,n)}}return+e};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof u&&(b?l(function(){v.valueOf.call(a)}):s(a)!=h)?i(new f(_(e)),a,u):_(e)};for(var y,C=a("3a0f")?p(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)r(f,y=C[w])&&!r(u,y)&&c(u,y,g(f,y));u.prototype=v,v.constructor=u,a("7f00")(n,h,u)}},d4d5:function(t,e,a){"use strict";var n=a("8f3c"),r=a.n(n);r.a},d62f:function(t,e,a){var n=a("b429"),r=a("d772").set;t.exports=function(t,e,a){var s,i=e.constructor;return i!==a&&"function"==typeof i&&(s=i.prototype)!==a.prototype&&n(s)&&r&&r(t,s),t}},d772:function(t,e,a){var n=a("b429"),r=a("4d65"),s=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("0709")(Function.call,a("78de").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:s}}}]);
//# sourceMappingURL=chunk-67eb9843.216bd8e7.js.map
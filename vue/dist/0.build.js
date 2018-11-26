webpackJsonp([0],{113:function(t,a,e){"use strict";function i(t){e(173)}Object.defineProperty(a,"__esModule",{value:!0});var l=e(133),r=e(185),n=e(1),s=i,o=n(l.a,r.a,!1,s,"data-v-6d31e096",null);a.default=o.exports},133:function(t,a,e){"use strict";a.a={data:function(){return{list:[{url:e(175),title:"image1"},{url:e(176),title:"image2"},{url:e(177),title:"image3"},{url:e(178),title:"image4"},{url:e(179),title:"image5"},{url:e(180),title:"image6"},{url:e(181),title:"image7"},{url:e(182),title:"image8"},{url:e(183),title:"image9"},{url:e(184),title:"image10"}]}},methods:{resultFormat:function(t){if(t)return t.name+" ("+t.desc+")"}},mounted:function(){SyntaxHighlighter.highlight()}}},173:function(t,a,e){var i=e(174);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(3)("002657d6",i,!0,{})},174:function(t,a,e){a=t.exports=e(2)(!1),a.push([t.i,".image-box a[data-v-6d31e096]{clear:both;display:inline-block;margin:0 10px 10px 0;position:relative;text-align:center}.image-box a .bgbox[data-v-6d31e096]{background-color:#232323;height:150px;display:table-cell;vertical-align:middle;padding:4px;border-radius:2px}.image-box a .bgbox img[data-v-6d31e096]{width:200px;display:block}.image-box a .img-title[data-v-6d31e096]{bottom:5px;display:block;text-align:center;color:#999;padding-top:5px}.image-box a:hover .img-title[data-v-6d31e096]{color:#232323}",""])},175:function(t,a,e){t.exports=e.p+"1.jpg?466a50f946f342a6214cd5408f05c18b"},176:function(t,a,e){t.exports=e.p+"2.jpg?3879d5b91e6275ae114defbd1b81467d"},177:function(t,a,e){t.exports=e.p+"3.jpg?35a4a25367853dd96c07340324883d7d"},178:function(t,a,e){t.exports=e.p+"4.jpg?cab09230fdf3ec95fab64cc96a7894a5"},179:function(t,a,e){t.exports=e.p+"5.jpg?e6864a3426f32c6c1505b9614b73d0b3"},180:function(t,a,e){t.exports=e.p+"6.jpg?701ce3fafb715d899a7db593268d659a"},181:function(t,a,e){t.exports=e.p+"7.jpg?3243a61ac5caab1f739f0e03289f6058"},182:function(t,a,e){t.exports=e.p+"8.jpg?57043e41e9f685c94c31c87a053bcd8e"},183:function(t,a,e){t.exports=e.p+"9.jpg?74a89bf78582f034c63619af5c3d42e0"},184:function(t,a,e){t.exports=e.p+"10.jpg?1f42953221df65937e39aaf66de3f761"},185:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.install"}})],1),t._v(" "),e("p",[e("i18n",{attrs:{path:"common.guide.useNpm"}})],1),t._v(" "),e("pre",{staticClass:"brush:bash"},[t._v("        npm i v-gallery --save\n    ")]),t._v(" "),e("p",[e("i18n",{attrs:{path:"common.guide.include"}})],1),t._v(" "),e("pre",{staticClass:"brush:js"},[t._v("        import Vue from 'vue'\n        import vGallery from 'v-gallery';\n        Vue.use(vGallery);\n    ")]),t._v(" "),e("br"),e("br"),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.deploy"}})],1),t._v(" "),e("script",{staticClass:"brush:html",attrs:{type:"syntaxhighlighter"}},[t._v("\n    <![CDATA[\n        <template>\n            \x3c!-- default gallery mode --\x3e\n            <v-gallery :images=\"list\"  >\n            </v-gallery>\n        </template>\n\n        < script >\n            export default {\n                data(){\n                    return {\n                        list: [\n                            {title:'Image1',url:'http://xxx.com/1.jpg'},\n                            {title:'Image2',url:'http://xxx.com/2.jpg'},\n                            {...}\n                        ]\n                    }\n                }\n            };\n        < /script >\n    ]]>\n    ")]),t._v(" "),e("br"),e("br"),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.example"}})],1),t._v(" "),e("h5",[e("i18n",{attrs:{path:"gallery.demo.carousel"}})],1),t._v(" "),e("p",[e("v-gallery",{attrs:{type:"carousel",images:t.list}})],1),t._v(" "),e("showcode",[e("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-gallery type="carousel" :images="list" ></v-gallery>\n        ]]>\n        ')])]),t._v(" "),e("br"),e("br"),e("br"),e("br"),t._v(" "),e("h5",[e("i18n",{attrs:{path:"gallery.demo.galleryLight"}})],1),t._v(" "),e("p",[e("v-gallery",{attrs:{images:t.list,caption:!0}})],1),t._v(" "),e("showcode",[e("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-gallery :images="list":caption="true" ></v-gallery>\n        ]]>\n        ')])]),t._v(" "),e("br"),e("br"),e("br"),e("br"),t._v(" "),e("h5",[e("i18n",{attrs:{path:"gallery.demo.galleryDark"}})],1),t._v(" "),e("p",[e("v-gallery",{attrs:{images:t.list,dark:!0,caption:!0}})],1),t._v(" "),e("showcode",[e("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-gallery :images="list" :dark="true" :caption="true" ></v-gallery>\n        ]]>\n        ')])]),t._v(" "),e("br"),e("br"),e("br"),e("br"),t._v(" "),e("h5",[e("i18n",{attrs:{path:"gallery.demo.galleryCustom"}})],1),t._v(" "),e("v-gallery",{staticClass:"image-box",attrs:{images:t.list}},t._l(t.list,function(a){return e("a",{attrs:{href:"javascript:void(0);","data-image":a.url,title:a.title}},[e("div",{staticClass:"bgbox"},[e("img",{attrs:{src:a.url}})]),t._v(" "),e("div",{staticClass:"img-title",domProps:{innerHTML:t._s(a.title)}})])})),t._v(" "),e("showcode",[e("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <template>\n            <v-gallery :images="list" class="image-box">\n                <a href="javascript:void(0);"\n                   :data-image="img.url"\n                   :title="img.title"\n                   v-for="img in list" >\n                    <div class="bgbox">\n                        <img :src="img.url">\n                    </div>\n                    <div class="img-title" v-html="img.title"></div>\n                </a>\n            </v-gallery>\n        </template>\n        <style lang="scss" scoped>\n            .image-box{\n                a {\n                    clear: both;\n                    display: inline-block;\n                    margin: 0 10px 10px 0;\n                    position: relative;\n                    text-align: center;\n                    .bgbox {\n                        background-color: #232323;\n                        height: 150px;\n                        display:table-cell;\n                        vertical-align:middle;\n                        padding: 4px;\n                        border-radius: 2px;\n                        img{ width: 200px;display: block;}\n                    }\n                    .img-title {\n                        bottom: 5px;\n                        display: block;\n                        text-align: center;\n                        color: #999999;\n                        padding-top: 5px;\n                    }\n                    &:hover {\n                        .img-title { color: #232323; }\n                    }\n                }\n            }\n        </style>\n        ]]>\n        ')])]),t._v(" "),e("br"),e("br"),e("br"),e("br"),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.options"}})],1),t._v(" "),e("table",{staticClass:"table table-bordered table-striped option-table"},[e("thead",[e("tr",[e("th",[e("i18n",{attrs:{path:"common.tbTitle.name"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.type"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.required"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.default"}})],1)])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("p",[e("i18n",{attrs:{path:"gallery.option.type"}})],1),t._v(" "),t._m(0)]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("gallery")])]),t._v(" "),e("tr",[e("td",[t._v("images")]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td",[e("p",[e("i18n",{attrs:{path:"gallery.option.images"}})],1),t._v(" "),e("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v("\n                    <![CDATA[\n                    [\n                        {\n                            title: 'img1',\n                            url:'http://image_url',\n                            thumbnail:'http://image_thumbnail'\n                        },\n                        {...}\n                    ]\n                    ]]>\n                    ")])]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("control-pause")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"gallery.option.pause"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("control-title")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"gallery.option.title"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("dark")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"gallery.option.dark"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("caption")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"gallery.option.caption"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false")])])])])],1)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("code",[t._v("gallery")])]),t._v(" "),e("li",[e("code",[t._v("carousel")])])])}],r={render:i,staticRenderFns:l};a.a=r}});
//# sourceMappingURL=0.build.js.map
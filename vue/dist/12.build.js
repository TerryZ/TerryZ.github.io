webpackJsonp([12],{104:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(119),n=e(156),i=e(1),r=i(s.a,n.a,!1,null,null,null);a.default=r.exports},119:function(t,a,e){"use strict";a.a={data:function(){return{url:this.$store.state.baseImgUrl+"/video/movie.mp4",value1:"",value2:"",sample:[{id:1,name:"Chicago Bulls",desc:"芝加哥公牛"},{id:2,name:"Cleveland Cavaliers",desc:"克里夫兰骑士"},{id:3,name:"Detroit Pistons",desc:"底特律活塞"},{id:4,name:"Indiana Pacers",desc:"印第安纳步行者"},{id:5,name:"Milwaukee Bucks",desc:"密尔沃基雄鹿"},{id:6,name:"Brooklyn Nets",desc:"布鲁克林篮网"},{id:7,name:"Boston Celtics",desc:"波士顿凯尔特人"},{id:8,name:"New York Knicks",desc:"纽约尼克斯"},{id:9,name:"Philadelphia 76ers",desc:"费城76人"},{id:10,name:"Toronto Raptors",desc:"多伦多猛龙"},{id:11,name:"Atlanta Hawks",desc:"亚特兰大老鹰"},{id:12,name:"Charlotte Hornets",desc:"夏洛特黄蜂"},{id:13,name:"Miami Heat",desc:"迈阿密热火"},{id:14,name:"Orlando Magic",desc:"奥兰多魔术"},{id:15,name:"Washington Wizards",desc:"华盛顿奇才"},{id:16,name:"Denver Nuggets",desc:"丹佛掘金"},{id:17,name:"Minnesota Timberwolves",desc:"明尼苏达森林狼"},{id:18,name:"Oklahoma City Thunder",desc:"俄克拉荷马雷霆"},{id:19,name:"Portland Trail Blazers",desc:"波特兰开拓者"},{id:20,name:"Utah Jazz",desc:"犹他爵士"},{id:21,name:"Golden State Warriors",desc:"金州勇士"},{id:22,name:"Los Angeles Clippers",desc:"洛杉矶快船"},{id:23,name:"Los Angeles Lakers",desc:"洛杉矶湖人"},{id:24,name:"Phoenix Suns",desc:"菲尼克斯太阳"},{id:25,name:"Sacramento Kings",desc:"萨克拉门托国王"},{id:26,name:"Dallas Mavericks",desc:"达拉斯小牛"},{id:27,name:"Houston Rockets",desc:"休斯顿火箭"},{id:28,name:"Memphis Grizzlies",desc:"孟菲斯灰熊"},{id:29,name:"New Orleans Pelicans",desc:"新奥尔良鹈鹕"},{id:30,name:"San Antonio Spurs",desc:"圣安东尼奥马刺"}]}},methods:{resultFormat:function(t){if(t)return t.name+" ("+t.desc+")"}},mounted:function(){SyntaxHighlighter.highlight()}}},156:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.install"}})],1),t._v(" "),e("p",[e("i18n",{attrs:{path:"common.guide.useNpm"}})],1),t._v(" "),e("pre",{staticClass:"brush:bash"},[t._v("        npm i v-playback --save\n    ")]),t._v(" "),e("p",[e("i18n",{attrs:{path:"common.guide.include"}})],1),t._v(" "),e("pre",{staticClass:"brush:js"},[t._v("        import Vue from 'vue'\n        import vPlayBack from 'v-playback';\n        Vue.use(vPlayBack);\n    ")]),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.deploy"}})],1),t._v(" "),e("script",{staticClass:"brush:html",attrs:{type:"syntaxhighlighter"}},[t._v("\n    <![CDATA[\n        <template>\n            <v-playback :data=\"url\"></v-playback>\n        </template>\n\n        < script >\n            export default {\n                data(){\n                    return {\n                        list: 'http://xxx.com/111.mp4'\n                    }\n                }\n            };\n        < /script >\n    ]]>\n    ")]),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.example"}})],1),t._v(" "),e("p",{staticStyle:{width:"640px"}},[e("v-playback",{attrs:{url:t.url}})],1),t._v(" "),e("showcode",[e("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n        <![CDATA[\n        <v-playback :url="url"></v-playback>\n        ]]>\n        ')])]),t._v(" "),e("br"),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.options"}})],1),t._v(" "),e("table",{staticClass:"table table-bordered table-striped option-table"},[e("thead",[e("tr",[e("th",[e("i18n",{attrs:{path:"common.tbTitle.name"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.type"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.required"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.default"}})],1)])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("url")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"playback.option.url"}})],1),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("loop")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"playback.option.loop"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("auto-play")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"playback.option.auto"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("poster")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"playback.option.poster"}})],1),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{staticClass:"page-header"},[e("i18n",{attrs:{path:"common.events"}})],1),t._v(" "),e("table",{staticClass:"table table-bordered table-striped"},[e("thead",[e("tr",[e("th",[e("i18n",{attrs:{path:"common.tbTitle.param"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),e("th",[e("i18n",{attrs:{path:"common.tbTitle.args"}})],1)])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("play")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"playback.event.play"}})],1),t._v(" "),e("td",[t._v("Player Object")])]),t._v(" "),e("tr",[e("td",[t._v("pause")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"playback.event.pause"}})],1),t._v(" "),e("td",[t._v("Player Object")])]),t._v(" "),e("tr",[e("td",[t._v("end")]),t._v(" "),e("td",[e("i18n",{attrs:{path:"playback.event.end"}})],1),t._v(" "),e("td",[t._v("Player Object")])])])])],1)},n=[],i={render:s,staticRenderFns:n};a.a=i}});
//# sourceMappingURL=12.build.js.map
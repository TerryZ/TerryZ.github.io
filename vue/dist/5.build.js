webpackJsonp([5],{103:function(t,e,n){"use strict";function a(t){n(157)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(125),r=n(159),o=n(1),i=a,v=o(s.a,r.a,!1,i,"data-v-4cd5cb48",null);e.default=v.exports},125:function(t,e,n){"use strict";e.a={data:function(){return{selected:{province:"350000",city:"350100",area:"350104",town:"350104008"},selectedCity:["110000","130200","140100"],btnText:"please select",selectResult:{},selectedCityResult:[]}},methods:{regionChange:function(t){console.log(t),this.btnText=t.province||t.city||t.area||t.town?(""+this.getValue(t.province)+this.getValue(t.city)+this.getValue(t.area)+this.getValue(t.town)).trim():"请选择"},getValue:function(t){return t?t.value:""},selectLogs:function(t){t&&(this.selectResult=t)},citySelectedLogs:function(t){t&&t.length&&(this.selectedCityResult=t)}},mounted:function(){SyntaxHighlighter.highlight()}}},157:function(t,e,n){var a=n(158);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(3)("2b017f03",a,!0,{})},158:function(t,e,n){e=t.exports=n(2)(!1),e.push([t.i,".info-box[data-v-4cd5cb48]{background-color:#f5f5f5;border:0;border-radius:4px;padding:10px}",""])},159:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"page-header"},[n("i18n",{attrs:{path:"common.install"}})],1),t._v(" "),n("p",[n("i18n",{attrs:{path:"common.guide.useNpm"}})],1),t._v(" "),n("pre",{staticClass:"brush:bash"},[t._v("        npm i v-region --save\n    ")]),t._v(" "),n("p",[n("i18n",{attrs:{path:"common.guide.include"}})],1),t._v(" "),n("pre",{staticClass:"brush:js"},[t._v("        import Vue from 'vue'\n        import vRegion from 'v-region';\n        Vue.use(vRegion, { global config options... });\n    ")]),t._v(" "),n("h2",{staticClass:"page-header"},[n("i18n",{attrs:{path:"common.deploy"}})],1),t._v(" "),n("p",[t._v("template")]),t._v(" "),n("script",{staticClass:"brush:js",attrs:{type:"syntaxhighlighter"}},[t._v('\n    <![CDATA[\n        <template>\n            <v-region @values="regionChange"></v-region>\n        </template>\n    ]]>\n    ')]),t._v(" "),n("p",[t._v("script")]),t._v(" "),n("pre",{staticClass:"brush:js"},[t._v("    export default {\n        methods:{\n            //receive selected region data\n            regionChange(data){\n                console.log(data);\n            }\n        }\n    };\n    ")]),t._v(" "),n("h2",{staticClass:"page-header"},[n("i18n",{attrs:{path:"common.example"}}),t._v(" "),n("small",[n("a",{attrs:{href:"https://codepen.io/terry05/pen/ERNvzJ",target:"_blank"}},[n("i18n",{attrs:{path:"common.codePen"}})],1)])],1),t._v(" "),n("br"),t._v(" "),n("h3",[n("i18n",{attrs:{path:"region.demo.modes.formElement"}})],1),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body"},[n("h4",[n("i18n",{attrs:{path:"region.demo.province"}})],1),t._v(" "),n("v-region",{staticClass:"form-control",attrs:{city:!1,area:!1}}),t._v(" "),n("showcode",[n("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n                <![CDATA[\n                <v-region :city="false" :area="false" class="form-control"></v-region>\n                ]]>\n                ')])]),t._v(" "),n("br"),t._v(" "),n("h4",[n("i18n",{attrs:{path:"region.demo.province"}}),t._v("、"),n("i18n",{attrs:{path:"region.demo.city"}})],1),t._v(" "),n("v-region",{staticClass:"form-control",attrs:{area:!1}}),t._v(" "),n("showcode",[n("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n                <![CDATA[\n                <v-region :area="false" class="form-control"></v-region>\n                ]]>\n                ')])]),t._v(" "),n("br"),t._v(" "),n("h4",[n("i18n",{attrs:{path:"region.demo.province"}}),t._v("、"),n("i18n",{attrs:{path:"region.demo.city"}}),t._v("、"),n("i18n",{attrs:{path:"region.demo.area"}})],1),t._v(" "),n("v-region",{staticClass:"form-control"}),t._v(" "),n("showcode",[n("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n                <![CDATA[\n                <v-region class="form-control"></v-region>\n                ]]>\n                ')])]),t._v(" "),n("br"),t._v(" "),n("h4",[n("i18n",{attrs:{path:"region.demo.province"}}),t._v("、"),n("i18n",{attrs:{path:"region.demo.city"}}),t._v("、"),n("i18n",{attrs:{path:"region.demo.area"}}),t._v("、"),n("i18n",{attrs:{path:"region.demo.town"}})],1),t._v(" "),n("p",[n("i18n",{attrs:{path:"region.demo.selected"}}),t._v(": ")],1),t._v(" "),n("pre",{staticStyle:{border:"0"}},[t._v(t._s(JSON.stringify(t.selectResult,null,4)))]),t._v(" "),n("v-region",{staticClass:"form-control",attrs:{town:!0},on:{values:t.selectLogs}}),t._v(" "),n("showcode",[n("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n                <![CDATA[\n                <v-region :town="true" @values="selectLogs" class="form-control"></v-region>\n                ]]>\n                ')])]),t._v(" "),n("br"),t._v(" "),n("h4",[n("i18n",{attrs:{path:"region.demo.init"}})],1),t._v(" "),n("v-region",{staticClass:"form-control",attrs:{town:!0,selected:t.selected}}),t._v(" "),n("showcode",[n("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v("\n                <![CDATA[\n                <v-region :town=\"true\" :selected=\"selected\" class=\"form-control\"></v-region>\n\n                //script\n                data(){\n                    return {\n                        selected: {\n                            province: '350000',\n                            city: '350100',\n                            area: '350104',\n                            town: '350104008'\n                        }\n                    };\n                }\n                ]]>\n                ")])]),t._v(" "),n("br"),t._v(" "),n("h4",[n("i18n",{attrs:{path:"region.demo.disabled"}})],1),t._v(" "),n("v-region",{attrs:{town:!0,disabled:!0,selected:t.selected}}),t._v(" "),n("showcode",[n("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n                <![CDATA[\n                <v-region :town="true" :disabled="true" :selected="selected"></v-region>\n                ]]>\n                ')])]),t._v(" "),n("br")],1)]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("h3",[n("i18n",{attrs:{path:"region.demo.modes.plainText"}})],1),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body"},[n("h4",[n("i18n",{attrs:{path:"region.demo.text"}})],1),t._v(" "),n("p",{staticClass:"info-box"},[n("v-region",{attrs:{town:!0,text:!0,selected:t.selected}})],1),t._v(" "),n("showcode",[n("script",{staticClass:"brush:js;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v("\n                <![CDATA[\n                <v-region :town=\"true\" :text=\"true\" :selected=\"selected\"></v-region>\n\n                //script\n                data(){\n                    return {\n                        selected: {\n                            province: '350000',\n                            city: '350100',\n                            area: '350104',\n                            town: '350104008'\n                        }\n                    };\n                }\n                ]]>\n                ")])]),t._v(" "),n("br")],1)]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("h3",[n("i18n",{attrs:{path:"region.demo.modes.selector"}})],1),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body"},[n("h4",[n("i18n",{attrs:{path:"region.demo.dropdown"}})],1),t._v(" "),n("v-region",{attrs:{town:!0,ui:!0},on:{values:t.regionChange}}),t._v(" "),n("showcode",[n("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n                <![CDATA[\n                \x3c!-- Use default region caller button --\x3e\n                <v-region :town="true" :ui="true">\n                </v-region>\n                ]]>\n                ')])]),t._v(" "),n("br"),t._v(" "),n("h4",[n("i18n",{attrs:{path:"region.demo.customCaller"}}),t._v(" "),n("small")],1),t._v(" "),n("v-region",{attrs:{town:!0,ui:!0},on:{values:t.regionChange}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("\n                    "+t._s(t.btnText)+" "),n("i",{staticClass:"fa fa-fw fa-caret-down"})])]),t._v(" "),n("showcode",[n("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n                <![CDATA[\n                \x3c!-- Customize region caller --\x3e\n                <v-region :town="true" :ui="true">\n                    <button type="button" class="btn btn-primary">\n                        ｛｛btnText｝｝ <i class="fa fa-fw fa-caret-down"></i>\n                    </button>\n                </v-region>\n                ]]>\n                ')])]),t._v(" "),n("br"),t._v(" "),n("h4",[n("i18n",{attrs:{path:"region.demo.column"}})],1),t._v(" "),n("v-region",{attrs:{town:!0,ui:!0,column:!0}}),t._v(" "),n("showcode",[n("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v('\n                <![CDATA[\n                \x3c!-- Use default region caller button --\x3e\n                <v-region :town="true" :ui="true" :column="true">\n                </v-region>\n                ]]>\n                ')])]),t._v(" "),n("br"),t._v(" "),n("h4",[n("i18n",{attrs:{path:"region.demo.cityPicker"}})],1),t._v(" "),n("v-region",{attrs:{ui:!0,"city-picker":!0,selected:t.selectedCity},on:{values:t.citySelectedLogs}}),t._v(" "),n("pre",{staticStyle:{border:"0","margin-top":"10px"}},[t._v(t._s(JSON.stringify(t.selectedCityResult,null,4)))]),t._v(" "),n("showcode",[n("script",{staticClass:"brush:html;gutter: false;",attrs:{type:"syntaxhighlighter"}},[t._v("\n                <![CDATA[\n                <v-region :ui=\"true\" :city-picker=\"true\" :selected=\"selected\" @values=\"values\">\n                </v-region>\n\n                //script\n                export default {\n                    data(){\n                        return {\n                            //take city codes to make the corresponding city items selected\n                            selected: ['110000', '130200', '140100']\n                        };\n                    },\n                    methods: {\n                        //item selected callback\n                        //data format: [{key: 'xxx', value: 'xxx'},...]\n                        values(datas){\n                            console.log(datas);\n                        }\n                    }\n                }\n                ]]>\n                ")])]),t._v(" "),n("br")],1)]),t._v(" "),n("br"),n("br"),n("br"),t._v(" "),n("h2",{staticClass:"page-header"},[n("i18n",{attrs:{path:"common.options"}})],1),t._v(" "),n("table",{staticClass:"table table-bordered table-striped option-table"},[n("thead",[n("tr",[n("th",[n("i18n",{attrs:{path:"common.tbTitle.name"}})],1),t._v(" "),n("th",[n("i18n",{attrs:{path:"common.tbTitle.type"}})],1),t._v(" "),n("th",[n("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),n("th",[n("i18n",{attrs:{path:"common.tbTitle.required"}})],1),t._v(" "),n("th",[n("i18n",{attrs:{path:"common.tbTitle.default"}})],1)])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("blank")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.blank"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.disabled"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("city")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.city"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("area")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.area"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("town")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.town"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("ui")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.ui"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("search")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.search"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("selected")]),t._v(" "),n("td",[t._v("Object|Array")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.selected"}}),n("br"),t._v(" "),t._m(0),t._v(" "),n("p",[n("i18n",{attrs:{path:"region.option.cityPickerSelected"}})],1),t._v(" "),n("code",[t._v("['city code1', 'city code2', ...]")]),t._v(" "),n("br"),n("br"),t._v(" "),n("p",[n("strong",[n("i18n",{attrs:{path:"common.example"}})],1),t._v(":")]),t._v(" "),n("code",[t._v("{province:'350000',city:'350100',area:'350103',town:'350103012'}")]),n("br"),t._v(" "),n("p",[t._v("city picker:")]),t._v(" "),n("code",[t._v("['110000', '130200', '140100']")])],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("text")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.text"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("column")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.column"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("city-picker")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.option.cityPicker"}})],1),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("h2",{staticClass:"page-header"},[n("i18n",{attrs:{path:"common.events"}})],1),t._v(" "),n("table",{staticClass:"table table-bordered table-striped"},[n("thead",[n("tr",[n("th",[n("i18n",{attrs:{path:"common.tbTitle.param"}})],1),t._v(" "),n("th",[n("i18n",{attrs:{path:"common.tbTitle.desc"}})],1),t._v(" "),n("th",[n("i18n",{attrs:{path:"common.tbTitle.args"}})],1)])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("values")]),t._v(" "),n("td",[n("i18n",{attrs:{path:"region.event.values"}})],1),t._v(" "),t._m(1)])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("code",[t._v("province")]),t._v(" province code")]),t._v(" "),n("li",[n("code",[t._v("city")]),t._v(" city code")]),t._v(" "),n("li",[n("code",[t._v("area")]),t._v(" area code")]),t._v(" "),n("li",[n("code",[t._v("town")]),t._v(" town code")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("pre",{staticClass:"brush:js"},[t._v("                    {\n                        province:{key:'',value:''},\n                        city:{key:'',value:''},\n                        area:{key:'',value:''},\n                        town:{key:'',value:''}\n                    }\n                    //city picker:\n                    [{key: '', value: ''}, {key: '', value: ''}, ...]\n                ")])])}],r={render:a,staticRenderFns:s};e.a=r}});
//# sourceMappingURL=5.build.js.map
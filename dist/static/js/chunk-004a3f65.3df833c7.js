(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-004a3f65"],{"302d":function(t,s,a){"use strict";a("8fed")},"8fed":function(t,s,a){},a0d7:function(t,s,a){"use strict";a.r(s);var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Row",{attrs:{gutter:14}},[a("i-col",{attrs:{span:"3"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-color-wand"}}),t._v(" count-to组件基础用法 ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{endVal:1234}})],1)])],1)],1),a("i-col",{attrs:{span:"5"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-color-wand"}}),t._v(" 可添加左右文字 ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{endVal:1234}},[a("span",{attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1),a("i-col",{attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-color-wand"}}),t._v(" 自定义样式 ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{endVal:1234,"class-name":"class-name"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1),a("i-col",{attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-color-wand"}}),t._v(" 设置数据格式 ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{endVal:1234,"class-name":"class-name",decimals:2}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1)],1),a("Row",{attrs:{gutter:14}},[a("i-col",{attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-color-wand"}}),t._v(" 转换单位简化数据 ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{endVal:1234,"class-name":"class-name","count-text":"count-to-text",simplify:!0}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1),a("i-col",{attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-color-wand"}}),t._v(" 自定义单位 ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{endVal:123,"class-name":"class-name"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：123=>")])]),a("count-to",{attrs:{endVal:1234,"class-name":"class-name",simplify:!0,unit:t.unit}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：1234=>")])]),a("count-to",{attrs:{endVal:12345,"class-name":"class-name",simplify:!0,unit:t.unit}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据：12345=>")])])],1)])],1)],1),a("i-col",{attrs:{span:"8"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-color-wand"}}),t._v(" 可异步更新数据 ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{endVal:this.asynEndVal,"class-name":"class-name"}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("Total: ")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1)],1),a("Row",{attrs:{gutter:14}},[a("i-col",{attrs:{span:"24"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v(" 综合实例 ")],1),a("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",{staticClass:"count-to-con"},[a("count-to",{attrs:{endVal:t.integratedEndVal,"class-name":"class-name",simplify:!0,unit:t.unit2,delay:500}},[a("span",{staticClass:"slot-text",attrs:{slot:"left"},slot:"left"},[t._v("原始数据:"+t._s(t.integratedEndVal)+" =>")]),a("span",{staticClass:"slot-text",attrs:{slot:"right"},slot:"right"},[t._v(" times")])])],1)])],1)],1)],1)],1)},o=[],n=a("9349"),e={name:"count_to",components:{CountTo:n["a"]},data:function(){return{endVal:0,unit:[[3,"千多"],[4,"万多"],[5,"十万多"]],unit2:[[1,"十多"],[2,"百多"],[3,"千多"],[4,"万多"],[5,"十万多"],[6,"百万多"],[7,"千万多"],[8,"亿多"]],asynEndVal:487,integratedEndVal:3}},methods:{init:function(){var t=this;setInterval((function(){t.asynEndVal+=parseInt(20*Math.random()),t.integratedEndVal+=parseInt(30*Math.random())}),2e3)}},mounted:function(){this.init()}},i=e,c=(a("302d"),a("2877")),r=Object(c["a"])(i,l,o,!1,null,null,null);s["default"]=r.exports}}]);
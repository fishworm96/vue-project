(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f29d"],{d93e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-input",{model:{value:t.stateValue,callback:function(e){t.stateValue=e},expression:"stateValue"}}),n("p",[t._v(t._s(t.stateValue)+" -> lastLetter is "+t._s(t.inputValueLastLetter))]),n("p",[t._v("appName: "+t._s(t.appName)+", appNameWithVersion : "+t._s(t.appNameWithVersion))]),n("p",[t._v("userName : "+t._s(t.userName)+", firstLetter is : "+t._s(t.firstLetter))]),n("button",{on:{click:t.handleChangeAppName}},[t._v("修改appName")]),n("p",[t._v(t._s(t.appVersion))]),n("button",{on:{click:t.changeUserName}},[t._v("修改用户名")]),n("button",{on:{click:t.registerModule}},[t._v("动态注册模块")]),t._l(t.todoList,(function(e,a){return n("p",{key:a},[t._v(t._s(e))])}))],2)},u=[],s=n("5530"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{domProps:{value:t.value},on:{input:t.handleInput}})},o=[],i=(n("a9e3"),{name:"AInput",props:{value:{type:[String,Number],default:""}},methods:{handleInput:function(t){var e=t.target.value;this.$emit("input",e)}}}),p=i,c=n("2877"),l=Object(c["a"])(p,r,o,!1,null,null,null),_=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("AShow: "+t._s(t.content))])])},h=[],m={props:{content:{type:[String,Number],default:""}}},f=m,b=Object(c["a"])(f,d,h,!1,null,null,null),N=b.exports,v=n("2f62"),V={name:"store",data:function(){return{inputValue:""}},components:{AInput:_,AShow:N},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(v["e"])({userName:function(t){return t.user.userName},appVersion:function(t){return t.appVersion},todoList:function(t){return t.user.todo?t.user.todo.todoList:[]}})),{},{stateValue:{get:function(){return this.$store.state.stateValue},set:function(t){this.SET_STATE_VALUE(t)}}},Object(v["c"])(["appNameWithVersion","firstLetter"])),{},{appName:function(){return this.$store.state.appName},inputValueLastLetter:function(){return this.inputValue.substr(-1,1)}}),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(v["d"])(["SET_USER_NAME","SET_APP_NAME","SET_STATE_VALUE"])),Object(v["b"])(["updateAppName"])),{},{handleInput:function(t){this.inputValue=t},handleChangeAppName:function(){this.updateAppName()},changeUserName:function(){this.SET_USER_NAME("vue-cource")},registerModule:function(){this.$store.registerModule(["user","todo"],{state:{todoList:["学习mutations","学习actions"]}})},handleStateValueChange:function(t){this.SET_STATE_VALUE(t)}})},E=V,A=Object(c["a"])(E,a,u,!1,null,null,null);e["default"]=A.exports}}]);
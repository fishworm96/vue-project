(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49f62fec"],{"2e95":function(e,t,n){},"461b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"folder-wrapper"},[n("folder-tree",{attrs:{"folder-list":e.folderList,"file-list":e.fileList,"folder-drop":e.folderDrop,"file-drop":e.fileDrop,beforeDelete:e.beforeDelete},on:{"update:folderList":function(t){e.folderList=t},"update:folder-list":function(t){e.folderList=t},"update:fileList":function(t){e.fileList=t},"update:file-list":function(t){e.fileList=t}}})],1)},i=[],o=(n("d3b7"),n("3ca3"),n("ddb0"),n("7e1e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Tree",{attrs:{data:e.folderTree,render:e.renderFunc}})},l=[],s=(n("d81d"),n("b0c0"),n("99af"),n("4de4"),n("a434"),n("f1ed")),u=n("da0a"),d=n.n(u),f={name:"FolderTree",data:function(){var e=this;this.$createElement;return{folderTree:[],currentRenamingId:"",currentRenamingContent:"",renderFunc:function(t,n){n.root,n.node;var r=n.data,i="folder"===r.type?e.folderDrop:e.fileDrop,o=i.map((function(e){return t("dropdownItem",{attrs:{name:e.name}},[e.title])})),a=e.currentRenamingId==="".concat(r.type||"file","_").concat(r.id);return t("div",{class:"tree-item"},["folder"===r.type?t("icon",{attrs:{type:"ios-folder",color:"#2d8cf0"},style:"margin-right: 10px;"}):"",t("span",a?[t("i-input",{attrs:{value:r.title},on:{input:e.handleInput},class:"tree-rename-input"}),t("i-button",{attrs:{size:"small",type:"text"},on:{click:e.saveRename.bind(e,r)}},[t("icon",{attrs:{type:"md-checkmark"}})]),t("i-button",{attrs:{size:"small",type:"text"}},[t("icon",{attrs:{type:"md-close"}})])]:[r.title]),i&&!a?t("dropdown",{attrs:{placement:"right-start"},on:{"on-click":e.handleDropdownClick.bind(e,r)}},[t("i-button",{attrs:{size:"small",type:"text"},class:"tree-item-button"},[t("icon",{attrs:{type:"md-more",size:12}})]),t("dropdownMenu",{slot:"list"},[o])]):""])}}},props:{folderList:{type:Array,default:function(){return[]}},fileList:{type:Array,default:function(){return[]}},folderDrop:Array,fileDrop:Array,beforeDelete:Function},watch:{folderList:function(){this.transData()},fileList:function(){this.transData()}},methods:{transData:function(){this.folderTree=Object(s["n"])(Object(s["i"])(this.folderList,this.fileList))},isFolder:function(e){return"folder"===e},handleDelete:function(e){var t=this,n=e.folder_id,r=this.isFolder(e.type),i=r?"folderList":"fileList",o=r?d()(this.folderList):d()(this.fileList);o=o.filter((function(t){return t.id!==e.id})),this.$emit("update:".concat(i),o),this.$nextTick((function(){Object(s["b"])(t.folderTree,n)}))},handleDropdownClick:function(e,t){var n=this;"rename"===t?this.currentRenamingId="".concat(e.type||"file","_").concat(e.id):"delete"===t&&this.$Modal.confirm({title:"提示",content:"您确定要删除".concat(this.isFolder(e.type)?"文件夹":"文件","《").concat(e.title,"》吗？"),onOk:function(){n.beforeDelete?n.beforeDelete().then((function(){n.handleDelete(e)})).catch((function(){n.$Message.error("删除失败")})):n.handleDelete(e)}})},handleInput:function(e){this.currentRenamingContent=e},updateList:function(e,t){var n=-1,r=e.length;while(++n<r){var i=e[n];if(i.id===t){i.name=this.currentRenamingContent,e.splice(n,1,i);break}}return e},saveRename:function(e){var t=e.id,n=e.type;if("folder"===n){var r=this.updateList(d()(this.folderList),t);this.$emit("update:folderList",r)}else{var i=this.updateList(this.fileList,t);this.$emit("update:fileList",i)}this.currentRenamingId=""}},mounted:function(){this.transData()}},c=f,p=(n("67df"),n("2877")),m=Object(p["a"])(c,a,l,!1,null,null,null),h=m.exports,b=h,L={components:{FolderTree:b},data:function(){return{folderList:[],fileList:[],folderDrop:[{name:"rename",title:"重命名"},{name:"delete",title:"删除文件夹"}],fileDrop:[{name:"rename",title:"重命名"},{name:"delete",title:"删除文件"}]}},methods:{beforeDelete:function(){return new Promise((function(e,t){setTimeout((function(){var n=new Error("error");n?t(n):e()}),2e3)}))}},mounted:function(){var e=this;Promise.all([Object(o["e"])(),Object(o["c"])()]).then((function(t){e.folderList=t[0].data,e.fileList=t[1].data}))}},y=L,D=(n("8016"),Object(p["a"])(y,r,i,!1,null,null,null));t["default"]=D.exports},"67df":function(e,t,n){"use strict";n("2e95")},"7e1e":function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return d}));var r=n("365c"),i=function(){return r["a"].request({url:"/getTableData",method:"get"})},o=function(){return r["a"].request({url:"/getFolderList",method:"get"})},a=function(){return r["a"].request({url:"/getFileList",method:"get"})},l=function(){return r["a"].request({url:"get_file_list",params:{userId:1},method:"get"})},s=function(e){var t=e.key,n=e.type;return r["a"].request({url:"get_file",data:{key:t,type:n},method:"post"})},u=function(e){return r["a"].request({url:"delete_file",data:{key:e},method:"delete"})},d=function(e){var t=e.url,n=e.data;return r["a"].request({url:t,data:n,method:"post"})}},8016:function(e,t,n){"use strict";n("fb67")},fb67:function(e,t,n){}}]);
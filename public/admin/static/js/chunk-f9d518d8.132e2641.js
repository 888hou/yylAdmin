(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9d518d8"],{"09f4":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,n){var r=l(),a=e-r,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var l=Math.easeInOutQuad(u,r,a,t);o(l),u<t?i(e):n&&"function"===typeof n&&n()};c()}},"98b1":function(e,t,n){"use strict";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:260,t=880,n=document.documentElement.clientHeight||document.body.clientHeight;return n?n-e:t-e}n.d(t,"a",(function(){return i}))},b17a:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-row",[n("el-col",[n("el-select",{staticClass:"filter-item ya-search-field",attrs:{placeholder:"搜索字段"},model:{value:e.query.search_field,callback:function(t){e.$set(e.query,"search_field",t)},expression:"query.search_field"}},[n("el-option",{attrs:{value:"menu_name",label:"菜单名称"}}),n("el-option",{attrs:{value:"menu_url",label:"菜单链接"}}),n("el-option",{attrs:{value:"menu_pid",label:"PID"}}),n("el-option",{attrs:{value:e.idkey,label:"ID"}})],1),n("el-input",{staticClass:"filter-item ya-search-value",attrs:{placeholder:"搜索内容",clearable:""},model:{value:e.query.search_value,callback:function(t){e.$set(e.query,"search_value",t)},expression:"query.search_value"}}),n("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("查询")]),n("el-button",{staticClass:"filter-item",on:{click:function(t){return e.refresh()}}},[e._v("刷新")])],1)],1),n("el-row",[n("el-col",[n("el-checkbox",{attrs:{border:""},on:{change:e.expandAll},model:{value:e.isExpandAll,callback:function(t){e.isExpandAll=t},expression:"isExpandAll"}},[e._v("收起")]),n("el-button",{staticClass:"ya-margin-left",attrs:{title:"修改上级"},on:{click:function(t){return e.selectOpen("pid")}}},[e._v("上级")]),n("el-button",{attrs:{title:"是否无需登录"},on:{click:function(t){return e.selectOpen("unlogin")}}},[e._v("登录")]),n("el-button",{attrs:{title:"是否无需权限"},on:{click:function(t){return e.selectOpen("unauth")}}},[e._v("权限")]),n("el-button",{attrs:{title:"是否禁用"},on:{click:function(t){return e.selectOpen("disable")}}},[e._v("禁用")]),n("el-button",{on:{click:function(t){return e.selectOpen("dele")}}},[e._v("删除")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.add()}}},[e._v("添加")])],1),n("el-dialog",{attrs:{title:e.selectTitle,visible:e.selectDialog,top:"20vh","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.selectDialog=t}}},[n("el-form",{ref:"selectRef",attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:e.name+"ID",prop:""}},[n("el-input",{attrs:{type:"textarea",rows:2,disabled:""},model:{value:e.selectIds,callback:function(t){e.selectIds=t},expression:"selectIds"}})],1),"pid"===e.selectType?n("el-form-item",{attrs:{label:"上级",prop:""}},[n("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.data,props:e.props,clearable:"",filterable:""},on:{change:e.selectPidChange},model:{value:e.menu_pid,callback:function(t){e.menu_pid=t},expression:"menu_pid"}})],1):"unlogin"===e.selectType?n("el-form-item",{attrs:{label:"无需登录",prop:""}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.is_unlogin,callback:function(t){e.is_unlogin=t},expression:"is_unlogin"}})],1):"unauth"===e.selectType?n("el-form-item",{attrs:{label:"无需权限",prop:""}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.is_unauth,callback:function(t){e.is_unauth=t},expression:"is_unauth"}})],1):"disable"===e.selectType?n("el-form-item",{attrs:{label:"是否禁用",prop:""}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.is_disable,callback:function(t){e.is_disable=t},expression:"is_disable"}})],1):"dele"===e.selectType?n("el-form-item",{attrs:{label:"",prop:""}},[n("span",{staticStyle:{color:"red"}},[e._v("确定要删除选中的"+e._s(e.name)+"吗？")])]):e._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.selectCancel}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.selectSubmit}},[e._v("提交")])],1)],1)],1)],1),n("el-table",{ref:"table",attrs:{data:e.data,height:e.height,"row-key":e.idkey,"default-expand-all":""},on:{"selection-change":e.select,"select-all":e.selectAll,"cell-dblclick":e.cellDbclick}},[n("el-table-column",{attrs:{type:"selection",width:"42",title:"全选/反选"}}),n("el-table-column",{attrs:{prop:"menu_name",label:"菜单名称","min-width":"220"}}),n("el-table-column",{attrs:{prop:"menu_url",label:"菜单链接(roles)","min-width":"300"}},[n("template",{slot:"header"},[n("span",[e._v("菜单链接(roles)")]),n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("权限标识（双击单元格复制）")]),n("i",{staticClass:"el-icon-warning"})])],1)],2),n("el-table-column",{attrs:{prop:"is_unlogin",label:"无需登录","min-width":"95",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.menu_url?n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return e.unlogin([t.row])}},model:{value:t.row.is_unlogin,callback:function(n){e.$set(t.row,"is_unlogin",n)},expression:"scope.row.is_unlogin"}}):e._e()]}}])},[n("template",{slot:"header"},[n("span",[e._v("无需登录")]),n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("开启后不用登录就可以访问，如登录")]),n("i",{staticClass:"el-icon-warning"})])],1)],2),n("el-table-column",{attrs:{prop:"is_unauth",label:"无需权限","min-width":"95",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.menu_url?n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return e.unauth([t.row])}},model:{value:t.row.is_unauth,callback:function(n){e.$set(t.row,"is_unauth",n)},expression:"scope.row.is_unauth"}}):e._e()]}}])},[n("template",{slot:"header"},[n("span",[e._v("无需权限")]),n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("开启后不用分配权限也可以访问")]),n("i",{staticClass:"el-icon-warning"})])],1)],2),n("el-table-column",{attrs:{prop:"is_disable",label:"禁用","min-width":"85",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.menu_url?n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return e.disable([t.row])}},model:{value:t.row.is_disable,callback:function(n){e.$set(t.row,"is_disable",n)},expression:"scope.row.is_disable"}}):e._e()]}}])},[n("template",{slot:"header"},[n("span",[e._v("禁用")]),n("el-tooltip",{attrs:{placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("开启后无法访问")]),n("i",{staticClass:"el-icon-warning"})])],1)],2),n("el-table-column",{attrs:{prop:e.idkey,label:"ID","min-width":"65"}}),n("el-table-column",{attrs:{prop:"menu_pid",label:"PID","min-width":"65"}}),n("el-table-column",{attrs:{prop:"menu_sort",label:"排序","min-width":"60"}}),n("el-table-column",{attrs:{label:"操作","min-width":"195",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.roleShow(i)}}},[e._v("角色")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.userShow(i,e.idkey)}}},[e._v("用户")]),n("el-button",{attrs:{size:"mini",type:"text",title:"添加下级"},on:{click:function(t){return e.add(i)}}},[e._v("添加")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.edit(i)}}},[e._v("修改")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.selectOpen("dele",i)}}},[e._v("删除")])]}}])})],1),n("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialog,top:"5vh","before-close":e.cancel,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialog=t}}},[n("el-form",{ref:"ref",staticClass:"dialog-body",style:{height:e.height-50+"px"},attrs:{rules:e.rules,model:e.model,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"菜单上级",prop:"menu_pid"}},[n("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.data,props:e.props,placeholder:"一级菜单",clearable:"",filterable:""},on:{change:e.pidChange},model:{value:e.model.menu_pid,callback:function(t){e.$set(e.model,"menu_pid",t)},expression:"model.menu_pid"}})],1),n("el-form-item",{attrs:{label:"菜单名称",prop:"menu_name"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入菜单名称"},model:{value:e.model.menu_name,callback:function(t){e.$set(e.model,"menu_name",t)},expression:"model.menu_name"}})],1),n("el-form-item",{attrs:{label:"菜单链接",prop:"menu_url"}},[n("el-input",{attrs:{clearable:"",placeholder:"应用/控制器/操作，区分大小写"},model:{value:e.model.menu_url,callback:function(t){e.$set(e.model,"menu_url",t)},expression:"model.menu_url"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy",title:"复制"},on:{click:function(t){return e.copy(e.model.menu_url,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"菜单排序",prop:"menu_sort"}},[n("el-input",{attrs:{type:"number",placeholder:"250"},model:{value:e.model.menu_sort,callback:function(t){e.$set(e.model,"menu_sort",t)},expression:"model.menu_sort"}})],1),n("el-form-item",{attrs:{label:"快速添加",prop:""}},[n("el-checkbox",{model:{value:e.model.add_list,callback:function(t){e.$set(e.model,"add_list",t)},expression:"model.add_list"}},[e._v("列表")]),n("el-checkbox",{model:{value:e.model.add_info,callback:function(t){e.$set(e.model,"add_info",t)},expression:"model.add_info"}},[e._v("信息")]),n("el-checkbox",{model:{value:e.model.add_add,callback:function(t){e.$set(e.model,"add_add",t)},expression:"model.add_add"}},[e._v("添加")]),n("el-checkbox",{model:{value:e.model.add_edit,callback:function(t){e.$set(e.model,"add_edit",t)},expression:"model.add_edit"}},[e._v("修改")]),n("el-checkbox",{model:{value:e.model.add_dele,callback:function(t){e.$set(e.model,"add_dele",t)},expression:"model.add_dele"}},[e._v("删除")])],1),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.model[e.idkey],expression:"model[idkey]"}],attrs:{label:"快速修改",prop:""}},[n("el-checkbox",{model:{value:e.model.edit_list,callback:function(t){e.$set(e.model,"edit_list",t)},expression:"model.edit_list"}},[e._v("列表")]),n("el-checkbox",{model:{value:e.model.edit_info,callback:function(t){e.$set(e.model,"edit_info",t)},expression:"model.edit_info"}},[e._v("信息")]),n("el-checkbox",{model:{value:e.model.edit_add,callback:function(t){e.$set(e.model,"edit_add",t)},expression:"model.edit_add"}},[e._v("添加")]),n("el-checkbox",{model:{value:e.model.edit_edit,callback:function(t){e.$set(e.model,"edit_edit",t)},expression:"model.edit_edit"}},[e._v("修改")]),n("el-checkbox",{model:{value:e.model.edit_dele,callback:function(t){e.$set(e.model,"edit_dele",t)},expression:"model.edit_dele"}},[e._v("删除")])],1),n("el-form-item",{attrs:{label:"",prop:""}},[n("span",[e._v("快速添加"),e.model[e.idkey]?n("span",[e._v("、修改")]):e._e(),e._v("，需要输入菜单链接：应用/控制器，不含操作")])]),e.model.create_time?n("el-form-item",{attrs:{label:"添加时间",prop:"create_time"}},[n("el-input",{attrs:{disabled:""},model:{value:e.model.create_time,callback:function(t){e.$set(e.model,"create_time",t)},expression:"model.create_time"}})],1):e._e(),e.model.update_time?n("el-form-item",{attrs:{label:"修改时间",prop:"update_time"}},[n("el-input",{attrs:{disabled:""},model:{value:e.model.update_time,callback:function(t){e.$set(e.model,"update_time",t)},expression:"model.update_time"}})],1):e._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.cancel}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1),n("el-dialog",{attrs:{title:e.roleDialogTitle,visible:e.roleDialog,width:"65%",top:"5vh","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.roleDialog=t}}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.roleLoad,expression:"roleLoad"}],ref:"roleRef",attrs:{data:e.roleData,height:e.height},on:{"sort-change":e.roleSort}},[n("el-table-column",{attrs:{prop:"admin_role_id",label:"角色ID","min-width":"100",sortable:"custom"}}),n("el-table-column",{attrs:{prop:"role_name",label:"角色","min-width":"120",sortable:"custom"}}),n("el-table-column",{attrs:{prop:"role_desc",label:"描述","min-width":"130"}}),n("el-table-column",{attrs:{prop:"is_disable",label:"禁用","min-width":"80",align:"center",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0,disabled:""},model:{value:t.row.is_disable,callback:function(n){e.$set(t.row,"is_disable",n)},expression:"scope.row.is_disable"}})]}}])}),n("el-table-column",{attrs:{label:"操作","min-width":"85",align:"right",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.userShow(i)}}},[e._v("用户")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.roleRemove(i)}}},[e._v("解除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.roleCount>0,expression:"roleCount > 0"}],attrs:{total:e.roleCount,page:e.roleQuery.page,limit:e.roleQuery.limit},on:{"update:page":function(t){return e.$set(e.roleQuery,"page",t)},"update:limit":function(t){return e.$set(e.roleQuery,"limit",t)},pagination:e.roleList}})],1),n("el-dialog",{attrs:{title:e.userDialogTitle,visible:e.userDialog,width:"65%",top:"5vh","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.userDialog=t}}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.userLoad,expression:"userLoad"}],ref:"userRef",attrs:{data:e.userData,height:e.height},on:{"sort-change":e.userSort}},[n("el-table-column",{attrs:{prop:"admin_user_id",label:"用户ID","min-width":"100",sortable:"custom"}}),n("el-table-column",{attrs:{prop:"username",label:"账号","min-width":"120",sortable:"custom"}}),n("el-table-column",{attrs:{prop:"nickname",label:"昵称","min-width":"120"}}),n("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":"100"}}),n("el-table-column",{attrs:{prop:"is_super",label:"超管","min-width":"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0,disabled:""},model:{value:t.row.is_super,callback:function(n){e.$set(t.row,"is_super",n)},expression:"scope.row.is_super"}})]}}])}),n("el-table-column",{attrs:{prop:"is_disable",label:"禁用","min-width":"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0,disabled:""},model:{value:t.row.is_disable,callback:function(n){e.$set(t.row,"is_disable",n)},expression:"scope.row.is_disable"}})]}}])}),n("el-table-column",{attrs:{label:"操作","min-width":"80",align:"right",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[e.userQuery[e.idkey]?n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.userRemove(i)}}},[e._v("解除")]):e._e()]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.userCount>0,expression:"userCount > 0"}],attrs:{total:e.userCount,page:e.userQuery.page,limit:e.userQuery.limit},on:{"update:page":function(t){return e.$set(e.userQuery,"page",t)},"update:limit":function(t){return e.$set(e.userQuery,"limit",t)},pagination:e.userList}})],1)],1)},o=[],l=(n("10dd"),n("89a8"),n("1a91"),n("d5ee"),n("98b1")),r=n("333d"),a=n("f71e"),s=n("ed08"),u=n("b775"),c="/admin/admin.Menu/";function d(e){return Object(u["a"])({url:c+"list",method:"get",params:e})}function m(e){return Object(u["a"])({url:c+"info",method:"get",params:e})}function f(e){return Object(u["a"])({url:c+"add",method:"post",data:e})}function p(e){return Object(u["a"])({url:c+"edit",method:"post",data:e})}function h(e){return Object(u["a"])({url:c+"dele",method:"post",data:e})}function _(e){return Object(u["a"])({url:c+"pid",method:"post",data:e})}function v(e){return Object(u["a"])({url:c+"unauth",method:"post",data:e})}function b(e){return Object(u["a"])({url:c+"unlogin",method:"post",data:e})}function g(e){return Object(u["a"])({url:c+"disable",method:"post",data:e})}function y(e){return Object(u["a"])({url:c+"role",method:"get",params:e})}function w(e){return Object(u["a"])({url:c+"roleRemove",method:"post",data:e})}function k(e){return Object(u["a"])({url:c+"user",method:"get",params:e})}function x(e){return Object(u["a"])({url:c+"userRemove",method:"post",data:e})}var S={name:"AuthMenu",components:{Pagination:r["a"]},directives:{},data:function(){return{name:"菜单",height:680,loading:!1,idkey:"admin_menu_id",query:{search_field:"menu_name"},data:[],props:{checkStrictly:!0,value:"admin_menu_id",label:"menu_name"},dialog:!1,dialogTitle:"",model:{admin_menu_id:"",menu_pid:0,menu_name:"",menu_url:"",menu_sort:250,add_list:!1,add_info:!1,add_add:!1,add_edit:!1,add_dele:!1,edit_list:!1,edit_info:!1,edit_add:!1,edit_edit:!1,edit_dele:!1},rules:{menu_name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}]},isExpandAll:!1,selection:[],selectIds:"",selectTitle:"选中操作",selectDialog:!1,selectType:"",menu_pid:0,type:1,icon:"",hidden:1,is_unlogin:0,is_unauth:0,is_disable:0,roleDialog:!1,roleDialogTitle:"",roleLoad:!1,roleData:[],roleCount:0,roleQuery:{page:1,limit:10},userDialog:!1,userDialogTitle:"",userLoad:!1,userData:[],userCount:0,userQuery:{page:1,limit:10}}},created:function(){this.height=Object(l["a"])(210),this.list()},methods:{list:function(){var e=this;this.loading=!0,d(this.query).then((function(t){e.data=t.data.list,e.isExpandAll=!1,e.loading=!1})).catch((function(){e.loading=!1}))},add:function(e){this.dialog=!0,this.dialogTitle=this.name+"添加",this.model=this.$options.data().model,e&&(this.model.menu_pid=e[this.idkey])},edit:function(e){var t=this;this.dialog=!0,this.dialogTitle=this.name+"修改："+e[this.idkey];var n={};n[this.idkey]=e[this.idkey],m(n).then((function(e){t.model=e.data})).catch((function(){}))},cancel:function(){this.dialog=!1,this.reset()},submit:function(){var e=this;this.$refs["ref"].validate((function(t){t&&(e.loading=!0,e.model[e.idkey]?p(e.model).then((function(t){e.list(),e.dialog=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1})):f(e.model).then((function(t){e.list(),e.dialog=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1})))}))},reset:function(e){void 0!==this.$refs["ref"]&&this.$refs["ref"].resetFields(),e?(this.model.admin_menu_id=e.admin_menu_id,this.model.menu_pid=e.menu_pid,this.model.menu_name=e.menu_name,this.model.menu_url=e.menu_url,this.model.menu_sort=e.menu_sort):(this.model.admin_menu_id="",this.model.menu_pid=0,this.model.menu_name="",this.model.menu_url="",this.model.menu_sort=250),this.model.add_list=this.model.add_info=this.model.add_add=this.model.add_edit=this.model.add_dele=!1,this.model.edit_list=this.model.edit_info=this.model.edit_add=this.model.edit_edit=this.model.edit_dele=!1},search:function(){this.list()},refresh:function(){this.query=this.$options.data().query,this.list()},expandAll:function(e){this.expandFor(this.data,!e)},expandFor:function(e,t){var n=this;e.forEach((function(e){n.$refs.table.toggleRowExpansion(e,t),e.children&&n.expandFor(e.children,t)}))},select:function(e){this.selection=e,this.selectIds=this.selectGetIds(e).toString()},selectAll:function(e){e?(this.selectAllKeys(e),this.selectIds=this.selectGetIds(this.selection).toString()):this.selectIds=""},selectAllKeys:function(e){for(var t in e)this.selection.push(e[t]),e[t].children&&this.selectAllKeys(e[t].children)},selectGetIds:function(e){return Object(s["a"])(e,this.idkey)},selectAlert:function(){this.$alert("请选择需要操作的"+this.name,"提示",{type:"warning",callback:function(e){}})},selectOpen:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t&&(this.$refs["table"].clearSelection(),this.$refs["table"].toggleRowSelection(t)),this.selection.length?(this.selectTitle="选中操作","pid"===e?this.selectTitle="修改上级":"unlogin"===e?this.selectTitle="无需登录":"unauth"===e?this.selectTitle="无需权限":"disable"===e?this.selectTitle="是否禁用":"dele"===e&&(this.selectTitle="删除"+this.name),this.selectDialog=!0,this.selectType=e):this.selectAlert()},selectCancel:function(){this.selectDialog=!1},selectSubmit:function(){if(this.selection.length){var e=this.selectType;"pid"===e?this.pid(this.selection):"unlogin"===e?this.unlogin(this.selection,!0):"unauth"===e?this.unauth(this.selection,!0):"disable"===e?this.disable(this.selection,!0):"dele"===e&&this.dele(this.selection),this.selectDialog=!1,this.selectType=e}else this.selectAlert()},pid:function(e){var t=this;_({ids:this.selectGetIds(e),menu_pid:this.menu_pid}).then((function(e){t.list(),t.selectDialog=!1,t.$message.success(e.msg)})).catch((function(){t.list()}))},unlogin:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.length){this.loading=!0;var i=e[0].is_unlogin;n&&(i=this.is_unlogin),b({ids:this.selectGetIds(e),is_unlogin:i}).then((function(e){t.list(),t.$message.success(e.msg)})).catch((function(){t.list(),t.loading=!1}))}else this.selectAlert()},unauth:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.length){this.loading=!0;var i=e[0].is_unauth;n&&(i=this.is_unauth),v({ids:this.selectGetIds(e),is_unauth:i}).then((function(e){t.list(),t.$message.success(e.msg)})).catch((function(){t.list(),t.loading=!1}))}else this.selectAlert()},disable:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.length){this.loading=!0;var i=e[0].is_disable;n&&(i=this.is_disable),g({ids:this.selectGetIds(e),is_disable:i}).then((function(e){t.list(),t.$message.success(e.msg)})).catch((function(){t.list(),t.loading=!1}))}else this.selectAlert()},dele:function(e){var t=this;e.length?(this.loading=!0,h({ids:this.selectGetIds(e)}).then((function(e){t.list(),t.$message.success(e.msg)})).catch((function(){t.loading=!1}))):this.selectAlert()},pidChange:function(e){e&&(this.model.menu_pid=e[e.length-1])},selectPidChange:function(e){e&&(this.menu_pid=e[e.length-1])},activeMenuChange:function(e){e&&(this.active_menu_id=e[e.length-1])},roleShow:function(e){this.roleDialog=!0,this.roleDialogTitle="菜单角色："+e.menu_name,this.roleQuery.admin_menu_id=e.admin_menu_id,this.roleList()},roleList:function(){var e=this;this.roleLoad=!0,y(this.roleQuery).then((function(t){e.roleData=t.data.list,e.roleCount=t.data.count,e.roleLoad=!1})).catch((function(){e.roleLoad=!1}))},roleSort:function(e){this.roleQuery.sort_field=e.prop,this.roleQuery.sort_value="","ascending"===e.order&&(this.roleQuery.sort_value="asc",this.roleList()),"descending"===e.order&&(this.roleQuery.sort_value="desc",this.roleList())},roleRemove:function(e){var t=this;this.$confirm('确定要解除菜单与角色 <span style="color:red">'+e.role_name+" </span>的关联吗？","解除角色："+e.admin_role_id,{type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.roleLoad=!0,w({admin_menu_id:t.roleQuery.admin_menu_id,admin_role_id:e.admin_role_id}).then((function(e){t.roleList(),t.$message.success(e.msg)})).catch((function(){t.roleLoad=!1}))})).catch((function(){}))},userShow:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"admin_role_id";this.userDialog=!0,"admin_menu_id"===t?(this.userDialogTitle="菜单用户（按菜单）："+e.menu_name,this.userQuery.admin_menu_id=e.admin_menu_id,this.userQuery.admin_role_id=""):(this.userDialogTitle="菜单用户（按角色）："+e.role_name,this.userQuery.admin_menu_id="",this.userQuery.admin_role_id=e.admin_role_id),this.userList()},userList:function(){var e=this;this.userLoad=!0,k(this.userQuery).then((function(t){e.userData=t.data.list,e.userCount=t.data.count,e.userLoad=!1})).catch((function(){e.userLoad=!1}))},userSort:function(e){this.userQuery.sort_field=e.prop,this.userQuery.sort_value="","ascending"===e.order&&(this.userQuery.sort_value="asc",this.userList()),"descending"===e.order&&(this.userQuery.sort_value="desc",this.userList())},userRemove:function(e){var t=this;this.$confirm('确定要解除菜单与用户 <span style="color:red">'+e.username+" </span>的关联吗？","解除用户："+e.admin_user_id,{type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.userLoad=!0,x({admin_menu_id:t.userQuery.admin_menu_id,admin_user_id:e.admin_user_id}).then((function(e){t.userList(),t.$message.success(e.msg)})).catch((function(){t.userLoad=!1}))})).catch((function(){}))},copy:function(e,t){e?Object(a["a"])(e,t):this.$message.error("内容为空")},cellDbclick:function(e,t,n,i){this.copy(e[t.property],i)}}},T=S,$=n("cba8"),E=Object($["a"])(T,i,o,!1,null,null,null);t["default"]=E.exports},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));n("4c1e"),n("a5db"),n("87bf"),n("cea3"),n("6370"),n("d5ee"),n("d1ba"),n("89a8"),n("b110"),n("fe35"),n("7216"),n("609b");function i(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t="",n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",i=0;i<e;i++)t+=n[Math.floor(Math.random()*n.length)];return t}function o(e,t){for(var n=[],i=e.length,o=0;o<i;o++)n.push(e[o][t]);return n}},f71e:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("430a"),o=n("f962"),l=n.n(o);function r(){i["default"].prototype.$message({message:"复制成功",type:"success",duration:1500})}function a(){i["default"].prototype.$message({message:"复制失败",type:"error"})}function s(e,t){var n=new l.a(t.target,{text:function(){return e}});n.on("success",(function(){r(),n.destroy()})),n.on("error",(function(){a(),n.destroy()})),n.onClick(t)}},f962:function(e,t,n){
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(){var e={686:function(e,t,n){"use strict";n.d(t,{default:function(){return O}});var i=n(279),o=n.n(i),l=n(370),r=n.n(l),a=n(817),s=n.n(a);function u(e){try{return document.execCommand(e)}catch(t){return!1}}var c=function(e){var t=s()(e);return u("cut"),t},d=c;function m(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(i,"px"),n.setAttribute("readonly",""),n.value=e,n}var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"===typeof e){var i=m(e);t.container.appendChild(i),n=s()(i),u("copy"),i.remove()}else n=s()(e),u("copy");return n},p=f;function h(e){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,i=e.container,o=e.target,l=e.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==h(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return l?p(l,{container:i}):o?"cut"===n?d(o):p(o,{container:i}):void 0},v=_;function b(e){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),e}function k(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function S(e){var t=E();return function(){var n,i=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function C(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var A=function(e){k(n,e);var t=S(n);function n(e,i){var o;return g(this,n),o=t.call(this),o.resolveOptions(i),o.listenClick(e),o}return w(n,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===b(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=r()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",i=v({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(i?"success":"error",{action:n,text:i,trigger:t,clearSelection:function(){t&&t.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return C("action",e)}},{key:"defaultTarget",value:function(e){var t=C("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return C("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return p(e,t)}},{key:"cut",value:function(e){return d(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),n}(o()),O=A},828:function(e){var t=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function i(e,n){while(e&&e.nodeType!==t){if("function"===typeof e.matches&&e.matches(n))return e;e=e.parentNode}}e.exports=i},438:function(e,t,n){var i=n(828);function o(e,t,n,i,o){var l=r.apply(this,arguments);return e.addEventListener(n,l,o),{destroy:function(){e.removeEventListener(n,l,o)}}}function l(e,t,n,i,l){return"function"===typeof e.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,i,l)})))}function r(e,t,n,o){return function(n){n.delegateTarget=i(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=l},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},370:function(e,t,n){var i=n(879),o=n(438);function l(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!i.string(t))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(e))return r(e,t,n);if(i.nodeList(e))return a(e,t,n);if(i.string(e))return s(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function a(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function s(e,t,n){return o(document.body,e,t,n)}e.exports=l},817:function(e){function t(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(e),i.removeAllRanges(),i.addRange(o),t=i.toString()}return t}e.exports=t},279:function(e){function t(){}t.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var i=this;function o(){i.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var l=0,r=i.length;l<r;l++)i[l].fn!==t&&i[l].fn._!==t&&o.push(i[l]);return o.length?n[e]=o:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}return function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),n(686)}().default}))}}]);
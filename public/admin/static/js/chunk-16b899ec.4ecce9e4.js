(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16b899ec"],{"98b1":function(t,e,n){"use strict";function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:260,e=880,n=document.documentElement.clientHeight||document.body.clientHeight;return n?n-t:e-t}n.d(e,"a",(function(){return a}))},e0df:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-tabs",[t.checkPermission(["admin/setting.Setting/captchaInfo"])?n("el-tab-pane",{attrs:{label:"验证码设置",lazy:""}},[n("setting-captcha")],1):t._e(),t.checkPermission(["admin/setting.Setting/tokenInfo"])?n("el-tab-pane",{attrs:{label:"Token设置",lazy:""}},[n("setting-token")],1):t._e(),t.checkPermission(["admin/setting.Setting/logInfo"])?n("el-tab-pane",{attrs:{label:"日志设置",lazy:""}},[n("setting-log")],1):t._e(),t.checkPermission(["admin/setting.Setting/apiInfo"])?n("el-tab-pane",{attrs:{label:"接口设置",lazy:""}},[n("setting-api")],1):t._e(),t.checkPermission(["admin/setting.Setting/diyInfo"])?n("el-tab-pane",{attrs:{label:"自定义设置",lazy:""}},[n("setting-diy")],1):t._e()],1)],1)},i=[],l=n("e350"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{staticClass:"dialog-body",style:{height:t.height+"px"}},[n("el-col",{attrs:{xs:24,sm:18,md:12}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"Token密钥",prop:"token_key"}},[n("el-input",{staticStyle:{width:"90%"},attrs:{type:"text",clearable:""},model:{value:t.model.token_key,callback:function(e){t.$set(t.model,"token_key",e)},expression:"model.token_key"}}),n("i",{staticClass:"el-icon-warning-outline",attrs:{title:"修改后所有会员登录状态失效，需重新登录。"}})],1),n("el-form-item",{attrs:{label:"Token有效时间",prop:"token_exp"}},[n("el-input",{attrs:{type:"number"},model:{value:t.model.token_exp,callback:function(e){t.$set(t.model,"token_exp",e)},expression:"model.token_exp"}},[n("template",{slot:"append"},[t._v("小时")])],2)],1),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1)],1)],1)],1)},s=[],c=n("98b1"),r=n("b775"),u="/admin/setting.Setting/";function d(t){return Object(r["a"])({url:u+"tokenInfo",method:"get",params:t})}function m(t){return Object(r["a"])({url:u+"tokenEdit",method:"post",data:t})}function f(t){return Object(r["a"])({url:u+"captchaInfo",method:"get",params:t})}function g(t){return Object(r["a"])({url:u+"captchaEdit",method:"post",data:t})}function h(t){return Object(r["a"])({url:u+"logInfo",method:"get",params:t})}function p(t){return Object(r["a"])({url:u+"logEdit",method:"post",data:t})}function _(t){return Object(r["a"])({url:u+"apiInfo",method:"get",params:t})}function b(t){return Object(r["a"])({url:u+"apiEdit",method:"post",data:t})}function v(t){return Object(r["a"])({url:u+"diyInfo",method:"get",params:t})}function k(t){return Object(r["a"])({url:u+"diyEdit",method:"post",data:t})}var y={name:"SettingSettingToken",components:{},data:function(){return{name:"Token设置",height:680,loading:!1,model:{token_key:"",token_exp:720},rules:{}}},created:function(){this.height=Object(c["a"])(210),this.info()},methods:{info:function(){var t=this;d().then((function(e){t.model=e.data}))},refresh:function(){var t=this;this.loading=!0,d().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,m(t.model).then((function(e){t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}},x=y,$=n("2877"),w=Object($["a"])(x,o,s,!1,null,null,null),S=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{staticClass:"dialog-body",style:{height:t.height+"px"}},[n("el-col",{attrs:{xs:24,sm:18,md:12}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"注册验证码",prop:"captcha_register"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.model.captcha_register,callback:function(e){t.$set(t.model,"captcha_register",e)},expression:"model.captcha_register"}}),n("span",[t._v(" 开启后，会员注册需要输入验证码。")])],1),n("el-form-item",{attrs:{label:"登录验证码",prop:"captcha_login"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.model.captcha_login,callback:function(e){t.$set(t.model,"captcha_login",e)},expression:"model.captcha_login"}}),n("span",[t._v(" 开启后，会员登录需要输入验证码。")])],1),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1)],1)],1)],1)},O=[],C={name:"SettingSettingCaptcha",components:{},data:function(){return{name:"验证码设置",height:680,loading:!1,model:{captcha_register:0,captcha_login:0},rules:{}}},created:function(){this.height=Object(c["a"])(210),this.info()},methods:{info:function(){var t=this;f().then((function(e){t.model=e.data}))},refresh:function(){var t=this;this.loading=!0,f().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,g(t.model).then((function(e){t.info(),t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}},E=C,I=Object($["a"])(E,j,O,!1,null,null,null),T=I.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{staticClass:"dialog-body",style:{height:t.height+"px"}},[n("el-col",{attrs:{xs:24,sm:18,md:12}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"日志记录开关",prop:"log_switch"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.model.log_switch,callback:function(e){t.$set(t.model,"log_switch",e)},expression:"model.log_switch"}}),n("span",[t._v(" 开启后，会记录会员日志。")])],1),n("el-form-item",{attrs:{label:"日志保留时间",prop:"log_save_time"}},[n("el-input",{attrs:{type:"number"},model:{value:t.model.log_save_time,callback:function(e){t.$set(t.model,"log_save_time",e)},expression:"model.log_save_time"}},[n("template",{slot:"append"},[t._v("天（0永久保留）")])],2)],1),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1)],1)],1)],1)},P=[],A={name:"SettingSettingLog",components:{},data:function(){return{name:"日志设置",height:680,loading:!1,model:{log_switch:0,log_save_time:0},rules:{}}},created:function(){this.height=Object(c["a"])(210),this.info()},methods:{info:function(){var t=this;h().then((function(e){t.model=e.data}))},refresh:function(){var t=this;this.loading=!0,h().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,p(t.model).then((function(e){t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}},B=A,D=Object($["a"])(B,z,P,!1,null,null,null),H=D.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{staticClass:"dialog-body",style:{height:t.height+"px"}},[n("el-col",{attrs:{xs:24,sm:18,md:12}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"接口速率"}},[n("el-col",{attrs:{span:11}},[n("el-input",{attrs:{type:"number",placeholder:"次数"},model:{value:t.model.api_rate_num,callback:function(e){t.$set(t.model,"api_rate_num",e)},expression:"model.api_rate_num"}},[n("template",{slot:"append"},[t._v("次")])],2)],1),n("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:2}},[t._v("/")]),n("el-col",{attrs:{span:11}},[n("el-input",{attrs:{type:"number",placeholder:"时间"},model:{value:t.model.api_rate_time,callback:function(e){t.$set(t.model,"api_rate_time",e)},expression:"model.api_rate_time"}},[n("template",{slot:"append"},[t._v("秒")])],2)],1)],1),n("el-form-item",{attrs:{label:"",prop:""}},[n("span",[t._v("次数/时间；3/1：3次1秒；次数设置为 0 则不限制。")])]),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1)],1)],1)],1)},L=[],q={name:"SettingSettingApi",components:{},data:function(){return{name:"接口设置",height:680,loading:!1,model:{api_rate_num:3,api_rate_time:1},rules:{}}},created:function(){this.height=Object(c["a"])(210),this.info()},methods:{info:function(){var t=this;_().then((function(e){t.model=e.data}))},refresh:function(){var t=this;this.loading=!0,_().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,b(t.model).then((function(e){t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}},F=q,G=Object($["a"])(F,J,L,!1,null,null,null),K=G.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-row",{staticClass:"dialog-body",style:{height:t.height+"px"}},[n("el-col",{attrs:{xs:24,sm:24,md:24}},[n("el-form",{ref:"ref",attrs:{model:t.model,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"",prop:""}},[n("span",[t._v("自定义配置提交后前台"+t._s(t.name)+"接口会返回。")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.add()}}},[t._v("增加")])],1),t._l(t.model.diy_config,(function(e,a){return n("el-form-item",{key:a,attrs:{label:""}},[n("el-col",{attrs:{span:5}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入键名"},model:{value:e.config_key,callback:function(n){t.$set(e,"config_key",n)},expression:"item.config_key"}},[n("template",{slot:"prepend"},[t._v("键名")])],2)],1),n("el-col",{attrs:{span:8}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入键值"},model:{value:e.config_val,callback:function(n){t.$set(e,"config_val",n)},expression:"item.config_val"}},[n("template",{slot:"prepend"},[t._v("键值")])],2)],1),n("el-col",{attrs:{span:10}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入说明"},model:{value:e.config_desc,callback:function(n){t.$set(e,"config_desc",n)},expression:"item.config_desc"}},[n("template",{slot:"prepend"},[t._v("说明")])],2)],1),n("el-col",{attrs:{span:1}},[n("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.dele(a)}}},[t._v("删除")])],1)],1)})),n("el-form-item",[n("el-button",{attrs:{loading:t.loading},on:{click:function(e){return t.refresh()}}},[t._v("刷新")]),n("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],2)],1)],1)],1)},N=[],Q=(n("a434"),{name:"SettingSettingDiy",components:{},data:function(){return{name:"自定义设置",height:680,loading:!1,model:{diy_config:[]},rules:{}}},created:function(){this.height=Object(c["a"])(210),this.info()},methods:{info:function(){var t=this;v().then((function(e){t.model=e.data}))},add:function(){this.model.diy_config.push({config_key:"",config_val:"",config_desc:""})},dele:function(t){var e=this;this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.model.diy_config.splice(t,1)})).catch((function(){}))},refresh:function(){var t=this;this.loading=!0,v().then((function(e){t.model=e.data,t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1}))},submit:function(){var t=this;this.$refs["ref"].validate((function(e){e&&(t.loading=!0,k(t.model).then((function(e){t.loading=!1,t.$message.success(e.msg)})).catch((function(){t.loading=!1})))}))}}}),R=Q,U=Object($["a"])(R,M,N,!1,null,null,null),V=U.exports,W={name:"SettingSetting",components:{SettingToken:S,SettingCaptcha:T,SettingLog:H,SettingApi:K,SettingDiy:V},data:function(){return{name:"设置管理"}},created:function(){},methods:{checkPermission:l["a"]}},X=W,Y=Object($["a"])(X,a,i,!1,null,null,null);e["default"]=Y.exports}}]);
import{as as e,ad as l,ac as a,c as t,e as o,a3 as s,w as i,Q as r,ag as d,l as u,a2 as p,k as m,t as n,ab as c,O as h,P as _,az as f,at as y}from"./index.CYwDHgSX.js";import{v as b}from"./el-loading.B9vpWlxK.js";import{E as g}from"./el-scrollbar.CneAlIev.js";import{_ as V}from"./index.B2QYy86Q.js";import{E as v,a as q}from"./el-table-column.DhyGfplS.js";import"./el-checkbox.Igk_iSDy.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.DtYh8PhA.js";import{E as w}from"./el-link.CpRVtVO9.js";import{a as k,E as U}from"./el-select.D0UcctzR.js";import{E as j}from"./el-dialog.B1SEhGSD.js";import{a as x,E as C}from"./el-form-item.RgEHfbLl.js";import{E as I}from"./el-row.CUAePAXu.js";import{E as D}from"./el-col.DryuoNBx.js";import{_ as P}from"./index.0Pcvv1HQ.js";import{E as T}from"./el-date-picker.CroIcvYX.js";import{E as S}from"./el-radio.ClFCwabT.js";import{s as E}from"./screen-height.DTn4MhRY.js";import{h as A}from"./clipboard.DihS1xD5.js";import{a as $}from"./index.Cp1HnnF1.js";import{g as O}from"./settings.BoZNnRe5.js";import{_ as Y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./_Uint8Array.BfmJkLIP.js";import"./debounce.CUt11AUd.js";import"./index.CMHJgk_l.js";import"./isUndefined.DgmxjSXK.js";import"./castArray.DDF9UvWf.js";import"./refs.BVqx4q7v.js";import"./index.Bi0hEvxG.js";import"./tagsView.Yz9WeQ11.js";const z="/admin/member.Log/";const G={class:"app-container"},L={class:"c-red"};const M=Y({name:"MemberLog",components:{Pagination:V},data:()=>({name:"会员日志",height:680,loading:!1,idkey:"log_id",exps:[{exp:"like",name:"包含"}],query:{page:1,limit:O(),search_field:"member_id",search_exp:"like",date_field:"create_time"},data:[],count:0,dialog:!1,dialogTitle:"",model:{},rules:{},logTypes:[],platforms:[],applications:[],apiData:[],apiProps:{checkStrictly:!0,value:"api_id",label:"api_name",multiple:!0,emitPath:!1},selection:[],selectIds:"",selectTitle:"操作",selectDialog:!1,selectType:""}),created(){this.height=E(),this.list()},methods:{list(){var l;this.loading=!0,(l=this.query,e({url:z+"list",method:"get",params:l})).then((e=>{this.data=e.data.list,this.count=e.data.count,this.apiData=e.data.api,this.platforms=e.data.platforms,this.applications=e.data.applications,this.logTypes=e.data.log_types,this.exps=e.data.exps,this.loading=!1})).catch((()=>{this.loading=!1}))},info(l){this.dialog=!0,this.dialogTitle=this.name+"详情："+l[this.idkey];var a,t={};t[this.idkey]=l[this.idkey],(a=t,e({url:z+"info",method:"get",params:a})).then((e=>{this.model=e.data}))},cancel(){this.dialog=!1,this.reset()},submit(){this.dialog=!1,this.reset()},reset(e){this.model=e||this.$options.data().model},search(){this.query.page=1,this.list()},refresh(){const e=this.query.limit;this.query=this.$options.data().query,this.$refs.table.clearSort(),this.query.limit=e,this.list()},sort(e){this.query.sort_field=e.prop,this.query.sort_value="","ascending"===e.order&&(this.query.sort_value="asc",this.list()),"descending"===e.order&&(this.query.sort_value="desc",this.list())},select(e){this.selection=e,this.selectIds=this.selectGetIds(e).toString()},selectGetIds(e){return $(e,this.idkey)},selectAlert(){l.alert("请选择需要操作的"+this.name,"提示",{type:"warning",callback:()=>{}})},selectOpen(e,l=""){if(l){this.$refs.table.clearSelection();const e=l.length;for(let a=0;a<e;a++)this.$refs.table.toggleRowSelection(l[a],!0)}this.selection.length?(this.selectTitle="操作","dele"===e&&(this.selectTitle=this.name+"删除"),this.selectDialog=!0,this.selectType=e):this.selectAlert()},selectCancel(){this.selectDialog=!1},selectSubmit(){if(this.selection.length){"dele"===this.selectType&&this.dele(this.selection),this.selectDialog=!1}else this.selectAlert()},dele(l){var t;l.length?(this.loading=!0,(t={ids:this.selectGetIds(l)},e({url:z+"dele",method:"post",data:t})).then((e=>{this.list(),a.success(e.msg)})).catch((()=>{this.loading=!1}))):this.selectAlert()},clear(){l.confirm("确定要清空"+this.name+"(查询结果或所有)吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{var l;(l=this.query,e({url:z+"clear",method:"post",data:l})).then((e=>{this.list(),a.success("清空"+this.name+"记录 "+e.data.count+" 条")})).catch((()=>{}))})).catch((()=>{}))},copy(e){A(e)},requestParamCopy(){const e=this.$refs.requestParamRef;this.copy(e.textContent)}}},[["render",function(e,l,a,E,A,$){const O=k,Y=U,z=S,M=f,R=T,B=y,H=P,F=D,Q=I,W=x,J=C,K=j,N=v,X=w,Z=q,ee=V,le=g,ae=b;return t(),o("div",G,[s(Q,null,{default:i((()=>[s(F,{class:"mb-2"},{default:i((()=>[s(Y,{modelValue:A.query.search_field,"onUpdate:modelValue":l[0]||(l[0]=e=>A.query.search_field=e),class:"ya-search-field",placeholder:"查询字段"},{default:i((()=>[s(O,{value:"member_id",label:"会员ID"}),s(O,{value:"api_id",label:"接口"}),s(O,{value:"request_ip",label:"请求IP"}),s(O,{value:"request_region",label:"请求地区"}),s(O,{value:"request_isp",label:"请求ISP"}),s(O,{value:"response_code",label:"返回码"}),s(O,{value:"log_type",label:"日志类型"}),s(O,{value:"platform",label:"平台"}),s(O,{value:"application",label:"应用"})])),_:1},8,["modelValue"]),s(Y,{modelValue:A.query.search_exp,"onUpdate:modelValue":l[1]||(l[1]=e=>A.query.search_exp=e),class:"ya-search-exp"},{default:i((()=>[(t(!0),o(r,null,d(A.exps,(e=>(t(),u(O,{key:e.exp,value:e.exp,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),"api_id"===A.query.search_field?(t(),u(z,{key:0,modelValue:A.query.search_value,"onUpdate:modelValue":l[2]||(l[2]=e=>A.query.search_value=e),class:"ya-search-value",placeholder:"接口",options:A.apiData,props:A.apiProps,clearable:"",filterable:"","collapse-tags":""},null,8,["modelValue","options","props"])):"log_type"===A.query.search_field?(t(),u(Y,{key:1,modelValue:A.query.search_value,"onUpdate:modelValue":l[3]||(l[3]=e=>A.query.search_value=e),class:"ya-search-value",placeholder:"日志类型",clearable:"",filterable:""},{default:i((()=>[(t(!0),o(r,null,d(A.logTypes,((e,l)=>(t(),u(O,{key:l,value:l,label:e},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])):"platform"===A.query.search_field?(t(),u(Y,{key:2,modelValue:A.query.search_value,"onUpdate:modelValue":l[4]||(l[4]=e=>A.query.search_value=e),class:"ya-search-value",clearable:""},{default:i((()=>[(t(!0),o(r,null,d(A.platforms,((e,l)=>(t(),u(O,{key:l,label:e,value:l},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):"application"===A.query.search_field?(t(),u(Y,{key:3,modelValue:A.query.search_value,"onUpdate:modelValue":l[5]||(l[5]=e=>A.query.search_value=e),class:"ya-search-value",clearable:""},{default:i((()=>[(t(!0),o(r,null,d(A.applications,((e,l)=>(t(),u(O,{key:l,label:e,value:l},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):(t(),u(M,{key:4,modelValue:A.query.search_value,"onUpdate:modelValue":l[6]||(l[6]=e=>A.query.search_value=e),class:"ya-search-value",placeholder:"查询内容",clearable:""},null,8,["modelValue"])),s(R,{modelValue:A.query.date_value,"onUpdate:modelValue":l[7]||(l[7]=e=>A.query.date_value=e),type:"datetimerange",class:"ya-date-value","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"YYYY-MM-DD HH:mm:ss","default-time":[new Date(2024,1,1,0,0,0),new Date(2024,1,1,23,59,59)]},null,8,["modelValue","default-time"]),s(B,{type:"primary",onClick:l[8]||(l[8]=e=>$.search())},{default:i((()=>[p("查询")])),_:1}),s(B,{title:"重置",onClick:l[9]||(l[9]=e=>$.refresh())},{default:i((()=>[s(H,{"icon-class":"refresh"})])),_:1})])),_:1})])),_:1}),s(Q,null,{default:i((()=>[s(F,null,{default:i((()=>[s(B,{title:"删除选择",onClick:l[10]||(l[10]=e=>$.selectOpen("dele"))},{default:i((()=>[p("删除")])),_:1}),s(B,{title:"删除查询结果",onClick:l[11]||(l[11]=e=>$.clear())},{default:i((()=>[p("清空")])),_:1})])),_:1})])),_:1}),s(K,{modelValue:A.selectDialog,"onUpdate:modelValue":l[13]||(l[13]=e=>A.selectDialog=e),title:A.selectTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"20vh"},{footer:i((()=>[s(B,{onClick:$.selectCancel},{default:i((()=>[p("取消")])),_:1},8,["onClick"]),s(B,{type:"primary",onClick:$.selectSubmit},{default:i((()=>[p("提交")])),_:1},8,["onClick"])])),default:i((()=>[s(J,{"label-width":"120px"},{default:i((()=>["dele"===A.selectType?(t(),u(W,{key:0},{default:i((()=>[m("span",L,"确定要删除选中的"+n(A.name)+"吗？",1)])),_:1})):c("",!0),s(W,{label:A.name+"ID"},{default:i((()=>[s(M,{modelValue:A.selectIds,"onUpdate:modelValue":l[12]||(l[12]=e=>A.selectIds=e),type:"textarea",autosize:"",disabled:""},null,8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1},8,["modelValue","title"]),h((t(),u(Z,{ref:"table",data:A.data,height:A.height,onSortChange:$.sort,onSelectionChange:$.select},{default:i((()=>[s(N,{type:"selection",width:"42",title:"全选/反选"}),s(N,{prop:A.idkey,label:"ID",width:"80","show-overflow-tooltip":"",sortable:"custom"},null,8,["prop"]),s(N,{prop:"member_id",label:"会员ID","min-width":"80","show-overflow-tooltip":""}),s(N,{prop:"nickname",label:"会员昵称","min-width":"90","show-overflow-tooltip":""}),s(N,{prop:"username",label:"会员用户名","min-width":"105","show-overflow-tooltip":""}),s(N,{prop:"api_id",label:"接口ID","min-width":"80","show-overflow-tooltip":""}),s(N,{prop:"api_name",label:"接口名称","min-width":"120","show-overflow-tooltip":""}),s(N,{prop:"api_url",label:"接口链接","min-width":"165","show-overflow-tooltip":""}),s(N,{prop:"request_ip",label:"请求IP","min-width":"130","show-overflow-tooltip":""}),s(N,{prop:"request_region",label:"请求地区","min-width":"145","show-overflow-tooltip":""}),s(N,{prop:"request_isp",label:"请求ISP","min-width":"90","show-overflow-tooltip":""}),s(N,{prop:"response_code",label:"返回码","min-width":"85","show-overflow-tooltip":""}),s(N,{prop:"response_msg",label:"返回描述","min-width":"100","show-overflow-tooltip":""}),s(N,{prop:"application_name",label:"应用","min-width":"105","show-overflow-tooltip":""}),s(N,{prop:"create_time",label:"请求时间",width:"165",sortable:"custom"}),s(N,{label:"操作",width:"95"},{default:i((e=>[s(X,{type:"primary",class:"mr-1",underline:!1,onClick:l=>$.info(e.row)},{default:i((()=>[p(" 详情 ")])),_:2},1032,["onClick"]),s(X,{type:"primary",underline:!1,onClick:l=>$.selectOpen("dele",[e.row])},{default:i((()=>[p(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","height","onSortChange","onSelectionChange"])),[[ae,A.loading]]),h(s(ee,{total:A.count,"onUpdate:total":l[14]||(l[14]=e=>A.count=e),page:A.query.page,"onUpdate:page":l[15]||(l[15]=e=>A.query.page=e),limit:A.query.limit,"onUpdate:limit":l[16]||(l[16]=e=>A.query.limit=e),onPagination:$.list},null,8,["total","page","limit","onPagination"]),[[_,A.count>0]]),s(K,{modelValue:A.dialog,"onUpdate:modelValue":l[34]||(l[34]=e=>A.dialog=e),title:A.dialogTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":$.cancel,top:"5vh"},{footer:i((()=>[s(B,{onClick:$.cancel},{default:i((()=>[p("取消")])),_:1},8,["onClick"]),s(B,{type:"primary",onClick:$.submit},{default:i((()=>[p("确定")])),_:1},8,["onClick"])])),default:i((()=>[s(le,{native:"",height:A.height-30},{default:i((()=>[s(J,{ref:"ref",rules:A.rules,model:A.model,"label-width":"110px"},{default:i((()=>[s(W,{label:"会员ID",prop:"member_id"},{default:i((()=>[s(M,{modelValue:A.model.member_id,"onUpdate:modelValue":l[17]||(l[17]=e=>A.model.member_id=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"会员昵称",prop:"nickname"},{default:i((()=>[s(M,{modelValue:A.model.nickname,"onUpdate:modelValue":l[18]||(l[18]=e=>A.model.nickname=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"会员用户名",prop:"username"},{default:i((()=>[s(M,{modelValue:A.model.username,"onUpdate:modelValue":l[19]||(l[19]=e=>A.model.username=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"接口ID",prop:"api_id"},{default:i((()=>[s(M,{modelValue:A.model.api_id,"onUpdate:modelValue":l[20]||(l[20]=e=>A.model.api_id=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"接口名称",prop:"api_name"},{default:i((()=>[s(M,{modelValue:A.model.api_name,"onUpdate:modelValue":l[21]||(l[21]=e=>A.model.api_name=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"接口链接",prop:"api_url"},{default:i((()=>[s(M,{modelValue:A.model.api_url,"onUpdate:modelValue":l[22]||(l[22]=e=>A.model.api_url=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"请求方式",prop:"request_method"},{default:i((()=>[s(M,{modelValue:A.model.request_method,"onUpdate:modelValue":l[23]||(l[23]=e=>A.model.request_method=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"请求IP",prop:"request_ip"},{default:i((()=>[s(M,{modelValue:A.model.request_ip,"onUpdate:modelValue":l[24]||(l[24]=e=>A.model.request_ip=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"请求地区",prop:"request_region"},{default:i((()=>[s(M,{modelValue:A.model.request_region,"onUpdate:modelValue":l[25]||(l[25]=e=>A.model.request_region=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"请求ISP",prop:"request_isp"},{default:i((()=>[s(M,{modelValue:A.model.request_isp,"onUpdate:modelValue":l[26]||(l[26]=e=>A.model.request_isp=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"请求时间",prop:"create_time"},{default:i((()=>[s(M,{modelValue:A.model.create_time,"onUpdate:modelValue":l[27]||(l[27]=e=>A.model.create_time=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"返回码",prop:"response_code"},{default:i((()=>[s(M,{modelValue:A.model.response_code,"onUpdate:modelValue":l[28]||(l[28]=e=>A.model.response_code=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"返回描述",prop:"response_msg"},{default:i((()=>[s(M,{modelValue:A.model.response_msg,"onUpdate:modelValue":l[29]||(l[29]=e=>A.model.response_msg=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"用户代理",prop:"user_agent"},{default:i((()=>[s(M,{modelValue:A.model.user_agent,"onUpdate:modelValue":l[30]||(l[30]=e=>A.model.user_agent=e),type:"textarea",autosize:""},null,8,["modelValue"])])),_:1}),s(W,{label:"平台",prop:"platform_name"},{default:i((()=>[s(M,{modelValue:A.model.platform_name,"onUpdate:modelValue":l[31]||(l[31]=e=>A.model.platform_name=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"应用",prop:"application_name"},{default:i((()=>[s(M,{modelValue:A.model.application_name,"onUpdate:modelValue":l[32]||(l[32]=e=>A.model.application_name=e)},null,8,["modelValue"])])),_:1}),s(W,{label:"请求参数",prop:"request_param"},{default:i((()=>[s(F,null,{default:i((()=>[s(B,{text:"",type:"primary",title:"复制参数",onClick:l[33]||(l[33]=e=>$.requestParamCopy())},{default:i((()=>[s(H,{"icon-class":"copy-document"})])),_:1})])),_:1}),m("pre",{ref:"requestParamRef"},n(A.model.request_param),513)])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["height"])])),_:1},8,["modelValue","title","before-close"])])}]]);export{M as default};
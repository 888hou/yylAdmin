import{cP as e,cQ as l,r as t,D as a,K as i,c as o,l as s,w as d,a3 as r,ao as u,g as n,e as p,k as c,ab as m,a2 as h,t as f,bY as _,at as y,as as g,ac as b,ad as v,Q as V,ag as k,O as w,P as j,az as x}from"./index.CYwDHgSX.js";import{v as C}from"./el-loading.B9vpWlxK.js";import{E as q}from"./el-scrollbar.CneAlIev.js";import{_ as U}from"./FileUploads.CJzmmzi5.js";import{E as T}from"./el-dialog.B1SEhGSD.js";import{E as D}from"./el-row.CUAePAXu.js";import{E as S}from"./el-text.zGvo9xJ-.js";import{E}from"./el-col.DryuoNBx.js";import{E as I}from"./el-image-viewer.DO1yrrM3.js";import{_ as z}from"./index.0Pcvv1HQ.js";import{F as A}from"./index.qyMIJHDy.js";import{h as $}from"./clipboard.DihS1xD5.js";import{_ as F}from"./index.B2QYy86Q.js";import{E as B,a as O}from"./el-table-column.DhyGfplS.js";import"./el-checkbox.Igk_iSDy.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.DtYh8PhA.js";import{E as G}from"./el-link.CpRVtVO9.js";import{_ as P}from"./FilePreview.DTx5ARMB.js";import{a as Y,E as H}from"./el-select.D0UcctzR.js";import{a as M,E as K}from"./el-form-item.RgEHfbLl.js";import{E as N}from"./el-switch.BrEZMQXb.js";import{E as Q}from"./el-date-picker.CroIcvYX.js";import{s as R}from"./screen-height.DTn4MhRY.js";import{a as J}from"./index.Cp1HnnF1.js";import{g as L}from"./settings.BoZNnRe5.js";import{_ as W}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./refs.BVqx4q7v.js";import"./isUndefined.DgmxjSXK.js";import"./debounce.CUt11AUd.js";/* empty css                          */import"./el-card.DsWISmu8.js";/* empty css                       */import"./permission.DyUMCPhg.js";import"./group.iXw6aybA.js";import"./tag.nuIW8KVw.js";import"./index.Bi0hEvxG.js";import"./_Uint8Array.BfmJkLIP.js";import"./index.CMHJgk_l.js";import"./castArray.DDF9UvWf.js";import"./tagsView.Yz9WeQ11.js";const X={key:0},Z={key:0},ee=["src"],le=["data"],te=["src"],ae=["src"],ie=["src"],oe={key:3},se={key:4},de={key:5},re={__name:"FileUpload",props:e({preview:{type:Object,default:()=>{}},fileType:{type:String,default:"all"},fileTitle:{type:String,default:""},fileTip:{type:String,default:""},height:{type:Number,default:120},fit:{type:String,default:""},lazy:{type:Boolean,default:!1},uploadBtn:{type:String,default:"上传"},deleteBtn:{type:String,default:"删除"}},{modelValue:{type:Number,default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const g=l(e,"modelValue"),b=e,v=t(),V=t(!1),k=a((()=>({height:b.height+"px"}))),w=a((()=>({width:"90%"}))),j=a((()=>.7*b.height+"px"));function x(e){return e.file_name+"."+e.file_ext}function C(){V.value=!1}function q(e){V.value=!1;const l=e.length;if(l){const t=l-1;g.value=e[t].file_id,v.value=e[t]}}return i((()=>b.preview),(e=>{v.value=e}),{immediate:!0}),(l,t)=>{const a=z,i=I,b=E,U=y,F=S,B=D,O=T;return o(),s(B,{style:{width:"100%"}},{default:d((()=>[r(b,{span:12,style:u({height:e.height+"px"})},{default:d((()=>[n(v).file_url?(o(),p("div",X,["image"===n(v).file_type?(o(),p("div",Z,[r(i,{style:u({height:e.height+"px"}),src:n(v).file_url,fit:e.fit,"preview-src-list":[n(v).file_url],title:"点击看大图"},{error:d((()=>[r(a,{"icon-class":"picture"})])),_:1},8,["style","src","fit","preview-src-list"])])):"video"===n(v).file_type?(o(),p("video",{key:1,style:u(n(k)),controls:""},[c("source",{src:n(v).file_url,type:"video/mp4"},null,8,ee),c("object",{data:n(v).file_url,style:u(n(k))},[c("embed",{src:n(v).file_url,style:u(n(k))},null,12,te)],12,le)],4)):"audio"===n(v).file_type?(o(),p("audio",{key:2,style:u(n(w)),controls:""},[c("source",{src:n(v).file_url,type:"audio/mp3"},null,8,ae),c("embed",{src:n(v).file_url,style:u(n(w))},null,12,ie)],4)):"word"===n(v).file_type?(o(),p("div",oe,[r(a,{"icon-class":"document",size:n(j)},null,8,["size"])])):"other"===n(v).file_type?(o(),p("div",se,[r(a,{"icon-class":"folder",size:n(j)},null,8,["size"])])):(o(),p("div",de))])):m("",!0)])),_:1},8,["style"]),r(b,{span:12},{default:d((()=>[r(B,null,{default:d((()=>[r(b,null,{default:d((()=>[r(U,{onClick:t[0]||(t[0]=e=>{V.value=!0})},{default:d((()=>[h(f(e.uploadBtn),1)])),_:1}),r(U,{onClick:t[1]||(t[1]=e=>(g.value=0,v.value.file_url="",v.value.file_type="",v.value.file_name="",void(v.value.file_ext="")))},{default:d((()=>[h(f(e.deleteBtn),1)])),_:1}),n(v).file_url?(o(),s(U,{key:0,onClick:t[2]||(t[2]=e=>{return l=n(v),$(x(l),"文件名复制成功"),void setTimeout((()=>{window.open(l.file_url,"_blank")}),500);var l})},{default:d((()=>[h("下载")])),_:1})):m("",!0)])),_:1}),r(b,{style:{"max-height":"40px"}},{default:d((()=>[r(F,{size:"default",truncated:"",title:e.fileTip},{default:d((()=>[h(f(e.fileTip),1)])),_:1},8,["title"])])),_:1}),r(b,{style:{"max-height":"40px"}},{default:d((()=>[r(F,{size:"default",truncated:"",title:x(n(v))},{default:d((()=>[h(f(x(n(v))),1)])),_:1},8,["title"])])),_:1})])),_:1})])),_:1}),r(O,{modelValue:n(V),"onUpdate:modelValue":t[3]||(t[3]=e=>_(V)?V.value=e:null),title:e.fileTitle?e.fileTitle:e.uploadBtn,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"1vh",width:"80%","append-to-body":""},{default:d((()=>[r(A,{"file-type":e.fileType,onFileCancel:C,onFileSubmit:q},null,8,["file-type"])])),_:1},8,["modelValue","title"])])),_:1})}}},ue="/admin/setting.Carousel/";const ne={class:"app-container"},pe={class:"c-red"};const ce=W({name:"SettingCarousel",components:{Pagination:F},data:()=>({name:"轮播",height:680,loading:!1,idkey:"carousel_id",exps:[{exp:"like",name:"包含"}],query:{page:1,limit:L(),search_field:"title",search_exp:"like",date_field:"create_time"},data:[],count:0,dialog:!1,dialogTitle:"",model:{carousel_id:"",unique:"",file_id:0,file_url:"",file_type:"",file_name:"",file_ext:"",title:"",position:"",url:"",desc:"",remark:"",sort:250,file_list:[]},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]},selection:[],selectIds:"",selectTitle:"操作",selectDialog:!1,selectType:"",positions:"",is_disable:0}),created(){this.height=R(),this.list()},methods:{list(){var e;this.loading=!0,(e=this.query,g({url:ue+"list",method:"get",params:e})).then((e=>{this.data=e.data.list,this.count=e.data.count,this.exps=e.data.exps,this.loading=!1})).catch((()=>{this.loading=!1}))},add(){this.dialog=!0,this.dialogTitle=this.name+"添加",this.reset()},edit(e){this.dialog=!0,this.dialogTitle=this.name+"修改："+e[this.idkey];var l,t={};t[this.idkey]=e[this.idkey],(l=t,g({url:ue+"info",method:"get",params:l})).then((e=>{this.reset(e.data)})).catch((()=>{}))},cancel(){this.dialog=!1,this.reset()},submit(){this.$refs.ref.validate((e=>{var l;e?(this.loading=!0,this.model[this.idkey]?(l=this.model,g({url:ue+"edit",method:"post",data:l})).then((e=>{this.list(),this.dialog=!1,b.success(e.msg)})).catch((()=>{this.loading=!1})):function(e){return g({url:ue+"add",method:"post",data:e})}(this.model).then((e=>{this.list(),this.dialog=!1,b.success(e.msg)})).catch((()=>{this.loading=!1}))):b.error("请完善必填项（带红色星号*）")}))},reset(e){if(this.model=e||this.$options.data().model,void 0!==this.$refs.ref)try{this.$refs.ref.resetFields(),this.$refs.ref.clearValidate()}catch(l){}},search(){this.query.page=1,this.list()},refresh(){const e=this.query.limit;this.query=this.$options.data().query,this.$refs.table.clearSort(),this.query.limit=e,this.list()},sort(e){this.query.sort_field=e.prop,this.query.sort_value="","ascending"===e.order&&(this.query.sort_value="asc",this.list()),"descending"===e.order&&(this.query.sort_value="desc",this.list())},select(e){this.selection=e,this.selectIds=this.selectGetIds(e).toString()},selectGetIds(e){return J(e,this.idkey)},selectAlert(){v.alert("请选择需要操作的"+this.name,"提示",{type:"warning",callback:()=>{}})},selectOpen(e,l=""){if(l){this.$refs.table.clearSelection();const e=l.length;for(let t=0;t<e;t++)this.$refs.table.toggleRowSelection(l[t],!0)}this.selection.length?(this.selectTitle="操作","editpos"===e?this.selectTitle=this.name+"修改位置":"disable"===e?this.selectTitle=this.name+"是否禁用":"dele"===e&&(this.selectTitle=this.name+"删除"),this.selectDialog=!0,this.selectType=e):this.selectAlert()},selectCancel(){this.selectDialog=!1},selectSubmit(){if(this.selection.length){const e=this.selectType;"editpos"===e?this.editpos(this.selection,!0):"disable"===e?this.disable(this.selection,!0):"dele"===e&&this.dele(this.selection),this.selectDialog=!1}else this.selectAlert()},editpos(e,l=!1){if(e.length){this.loading=!0;var t=e[0].position;l&&(t=this.positions),(a={ids:this.selectGetIds(e),position:t},g({url:ue+"position",method:"post",data:a})).then((e=>{this.list(),b.success(e.msg)})).catch((()=>{this.loading=!1}))}else this.selectAlert();var a},disable(e,l=!1){if(e.length){this.loading=!0;var t=e[0].is_disable;l&&(t=this.is_disable),(a={ids:this.selectGetIds(e),is_disable:t},g({url:ue+"disable",method:"post",data:a})).then((e=>{this.list(),b.success(e.msg)})).catch((()=>{this.list()}))}else this.selectAlert();var a},dele(e){var l;e.length?(this.loading=!0,(l={ids:this.selectGetIds(e)},g({url:ue+"dele",method:"post",data:l})).then((e=>{this.list(),b.success(e.msg)})).catch((()=>{this.loading=!1}))):this.selectAlert()},copy(e){$(e)},cellDbclick(e,l){this.copy(e[l.property])}}},[["render",function(e,l,t,a,i,u){const n=Y,_=H,g=x,b=Q,v=y,S=z,I=E,A=D,$=M,R=N,J=K,L=T,W=B,X=P,Z=G,ee=O,le=F,te=re,ae=U,ie=q,oe=C;return o(),p("div",ne,[r(A,null,{default:d((()=>[r(I,{class:"mb-2"},{default:d((()=>[r(_,{modelValue:i.query.search_field,"onUpdate:modelValue":l[0]||(l[0]=e=>i.query.search_field=e),class:"ya-search-field",placeholder:"查询字段"},{default:d((()=>[r(n,{value:i.idkey,label:"ID"},null,8,["value"]),r(n,{value:"unique",label:"标识"}),r(n,{value:"title",label:"标题"}),r(n,{value:"position",label:"位置"}),r(n,{value:"desc",label:"描述"}),r(n,{value:"remark",label:"备注"}),r(n,{value:"is_disable",label:"禁用"})])),_:1},8,["modelValue"]),r(_,{modelValue:i.query.search_exp,"onUpdate:modelValue":l[1]||(l[1]=e=>i.query.search_exp=e),class:"ya-search-exp"},{default:d((()=>[(o(!0),p(V,null,k(i.exps,(e=>(o(),s(n,{key:e.exp,value:e.exp,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),"is_disable"===i.query.search_field?(o(),s(_,{key:0,modelValue:i.query.search_value,"onUpdate:modelValue":l[2]||(l[2]=e=>i.query.search_value=e),class:"ya-search-value"},{default:d((()=>[r(n,{value:1,label:"是"}),r(n,{value:0,label:"否"})])),_:1},8,["modelValue"])):(o(),s(g,{key:1,modelValue:i.query.search_value,"onUpdate:modelValue":l[3]||(l[3]=e=>i.query.search_value=e),class:"ya-search-value",placeholder:"查询内容",clearable:""},null,8,["modelValue"])),r(_,{modelValue:i.query.date_field,"onUpdate:modelValue":l[4]||(l[4]=e=>i.query.date_field=e),class:"ya-date-field",placeholder:"时间类型"},{default:d((()=>[r(n,{value:"create_time",label:"添加时间"}),r(n,{value:"update_time",label:"修改时间"})])),_:1},8,["modelValue"]),r(b,{modelValue:i.query.date_value,"onUpdate:modelValue":l[5]||(l[5]=e=>i.query.date_value=e),type:"datetimerange",class:"ya-date-value","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"YYYY-MM-DD HH:mm:ss","default-time":[new Date(2024,1,1,0,0,0),new Date(2024,1,1,23,59,59)]},null,8,["modelValue","default-time"]),r(v,{type:"primary",onClick:l[6]||(l[6]=e=>u.search())},{default:d((()=>[h("查询")])),_:1}),r(v,{title:"重置",onClick:l[7]||(l[7]=e=>u.refresh())},{default:d((()=>[r(S,{"icon-class":"refresh"})])),_:1}),r(v,{type:"primary",onClick:l[8]||(l[8]=e=>u.add())},{default:d((()=>[h("添加")])),_:1})])),_:1})])),_:1}),r(A,null,{default:d((()=>[r(I,null,{default:d((()=>[r(v,{title:"删除",onClick:l[9]||(l[9]=e=>u.selectOpen("dele"))},{default:d((()=>[h("删除")])),_:1}),r(v,{title:"是否禁用",onClick:l[10]||(l[10]=e=>u.selectOpen("disable"))},{default:d((()=>[h("禁用")])),_:1}),r(v,{title:"修改位置",onClick:l[11]||(l[11]=e=>u.selectOpen("editpos"))},{default:d((()=>[h("位置")])),_:1})])),_:1})])),_:1}),r(L,{modelValue:i.selectDialog,"onUpdate:modelValue":l[15]||(l[15]=e=>i.selectDialog=e),title:i.selectTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"20vh"},{footer:d((()=>[r(v,{loading:i.loading,onClick:u.selectCancel},{default:d((()=>[h("取消")])),_:1},8,["loading","onClick"]),r(v,{loading:i.loading,type:"primary",onClick:u.selectSubmit},{default:d((()=>[h("提交")])),_:1},8,["loading","onClick"])])),default:d((()=>[r(J,{ref:"selectRef","label-width":"120px"},{default:d((()=>["editpos"===i.selectType?(o(),s($,{key:0,label:"位置"},{default:d((()=>[r(g,{modelValue:i.positions,"onUpdate:modelValue":l[12]||(l[12]=e=>i.positions=e),placeholder:"请输入位置",clearable:""},null,8,["modelValue"])])),_:1})):"disable"===i.selectType?(o(),s($,{key:1,label:"是否禁用"},{default:d((()=>[r(R,{modelValue:i.is_disable,"onUpdate:modelValue":l[13]||(l[13]=e=>i.is_disable=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})):"dele"===i.selectType?(o(),s($,{key:2},{default:d((()=>[c("span",pe,"确定要删除选中的"+f(i.name)+"吗？",1)])),_:1})):m("",!0),r($,{label:i.name+"ID"},{default:d((()=>[r(g,{modelValue:i.selectIds,"onUpdate:modelValue":l[14]||(l[14]=e=>i.selectIds=e),type:"textarea",autosize:"",disabled:""},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},512)])),_:1},8,["modelValue","title"]),w((o(),s(ee,{ref:"table",data:i.data,height:i.height,onSortChange:u.sort,onSelectionChange:u.select,onCellDblclick:u.cellDbclick},{default:d((()=>[r(W,{type:"selection",width:"42",title:"全选/反选"}),r(W,{prop:i.idkey,label:"ID",width:"80",sortable:"custom"},null,8,["prop"]),r(W,{prop:"unique",label:"标识","min-width":"100",sortable:"custom","show-overflow-tooltip":""}),r(W,{prop:"file_url",label:"文件","min-width":"130"},{default:d((e=>[r(X,{file:e.row,lazy:""},null,8,["file"])])),_:1}),r(W,{prop:"file_type_name",label:"类型","min-width":"80"}),r(W,{prop:"title",label:"标题","min-width":"150",sortable:"custom","show-overflow-tooltip":""}),r(W,{prop:"position",label:"位置","min-width":"120",sortable:"custom","show-overflow-tooltip":""}),r(W,{prop:"desc",label:"描述","min-width":"120","show-overflow-tooltip":""}),r(W,{prop:"remark",label:"备注","min-width":"150",sortable:"custom","show-overflow-tooltip":""}),r(W,{prop:"is_disable",label:"禁用","min-width":"85",sortable:"custom"},{default:d((e=>[r(R,{modelValue:e.row.is_disable,"onUpdate:modelValue":l=>e.row.is_disable=l,"active-value":1,"inactive-value":0,onChange:l=>u.disable([e.row])},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),r(W,{prop:"sort",label:"排序","min-width":"85",sortable:"custom"}),r(W,{prop:"create_time",label:"添加时间",width:"165",sortable:"custom"}),r(W,{prop:"update_time",label:"修改时间",width:"165",sortable:"custom"}),r(W,{label:"操作",width:"95"},{default:d((e=>[r(Z,{type:"primary",class:"mr-1",underline:!1,onClick:l=>u.edit(e.row)},{default:d((()=>[h(" 修改 ")])),_:2},1032,["onClick"]),r(Z,{type:"primary",underline:!1,onClick:l=>u.selectOpen("dele",[e.row])},{default:d((()=>[h(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","height","onSortChange","onSelectionChange","onCellDblclick"])),[[oe,i.loading]]),w(r(le,{total:i.count,"onUpdate:total":l[16]||(l[16]=e=>i.count=e),page:i.query.page,"onUpdate:page":l[17]||(l[17]=e=>i.query.page=e),limit:i.query.limit,"onUpdate:limit":l[18]||(l[18]=e=>i.query.limit=e),onPagination:u.list},null,8,["total","page","limit","onPagination"]),[[j,i.count>0]]),r(L,{modelValue:i.dialog,"onUpdate:modelValue":l[33]||(l[33]=e=>i.dialog=e),title:i.dialogTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":u.cancel,top:"5vh","destroy-on-close":""},{footer:d((()=>[r(v,{loading:i.loading,onClick:u.cancel},{default:d((()=>[h("取消")])),_:1},8,["loading","onClick"]),r(v,{loading:i.loading,type:"primary",onClick:u.submit},{default:d((()=>[h("提交")])),_:1},8,["loading","onClick"])])),default:d((()=>[r(ie,{native:"",height:i.height-30},{default:d((()=>[r(J,{ref:"ref",rules:i.rules,model:i.model,"label-width":"100px"},{default:d((()=>[r($,{label:"标识",prop:"unique"},{default:d((()=>[r(g,{modelValue:i.model.unique,"onUpdate:modelValue":l[20]||(l[20]=e=>i.model.unique=e),placeholder:"请输入标识（唯一）",clearable:""},{append:d((()=>[r(v,{title:"复制",onClick:l[19]||(l[19]=e=>u.copy(i.model.unique))},{default:d((()=>[r(S,{"icon-class":"copy-document"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),r($,{label:"文件",prop:"file_id"},{default:d((()=>[r(te,{modelValue:i.model.file_id,"onUpdate:modelValue":l[21]||(l[21]=e=>i.model.file_id=e),preview:i.model},null,8,["modelValue","preview"])])),_:1}),r($,{label:"标题",prop:"title"},{default:d((()=>[r(g,{modelValue:i.model.title,"onUpdate:modelValue":l[23]||(l[23]=e=>i.model.title=e),model:i.model,placeholder:"请输入标题",clearable:""},{append:d((()=>[r(v,{title:"复制",onClick:l[22]||(l[22]=e=>u.copy(i.model.title))},{default:d((()=>[r(S,{"icon-class":"copy-document"})])),_:1})])),_:1},8,["modelValue","model"])])),_:1}),r($,{label:"描述",prop:"desc"},{default:d((()=>[r(g,{modelValue:i.model.desc,"onUpdate:modelValue":l[24]||(l[24]=e=>i.model.desc=e),type:"textarea",autosize:"",placeholder:"请输入描述"},null,8,["modelValue"])])),_:1}),r($,{label:"链接",prop:"url"},{default:d((()=>[r(g,{modelValue:i.model.url,"onUpdate:modelValue":l[26]||(l[26]=e=>i.model.url=e),placeholder:"请输入链接",clearable:""},{append:d((()=>[r(v,{title:"复制",onClick:l[25]||(l[25]=e=>u.copy(i.model.url))},{default:d((()=>[r(S,{"icon-class":"copy-document"})])),_:1})])),_:1},8,["modelValue"])])),_:1}),r($,{label:"备注",prop:"remark"},{default:d((()=>[r(g,{modelValue:i.model.remark,"onUpdate:modelValue":l[27]||(l[27]=e=>i.model.remark=e),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])])),_:1}),r($,{label:"排序",prop:"sort"},{default:d((()=>[r(g,{modelValue:i.model.sort,"onUpdate:modelValue":l[28]||(l[28]=e=>i.model.sort=e),type:"number"},null,8,["modelValue"])])),_:1}),r($,{label:"文件列表",prop:"file_list"},{default:d((()=>[r(ae,{modelValue:i.model.file_list,"onUpdate:modelValue":l[29]||(l[29]=e=>i.model.file_list=e),"upload-btn":"上传文件","file-type":"all","file-tip":"文件列表"},null,8,["modelValue"])])),_:1}),i.model[i.idkey]?(o(),s($,{key:0,label:"添加时间",prop:"create_time"},{default:d((()=>[r(g,{modelValue:i.model.create_time,"onUpdate:modelValue":l[30]||(l[30]=e=>i.model.create_time=e),disabled:""},null,8,["modelValue"])])),_:1})):m("",!0),i.model[i.idkey]?(o(),s($,{key:1,label:"修改时间",prop:"update_time"},{default:d((()=>[r(g,{modelValue:i.model.update_time,"onUpdate:modelValue":l[31]||(l[31]=e=>i.model.update_time=e),disabled:""},null,8,["modelValue"])])),_:1})):m("",!0),i.model.delete_time?(o(),s($,{key:2,label:"删除时间",prop:"delete_time"},{default:d((()=>[r(g,{modelValue:i.model.delete_time,"onUpdate:modelValue":l[32]||(l[32]=e=>i.model.delete_time=e),disabled:""},null,8,["modelValue"])])),_:1})):m("",!0)])),_:1},8,["rules","model"])])),_:1},8,["height"])])),_:1},8,["modelValue","title","before-close"])])}]]);export{ce as default};
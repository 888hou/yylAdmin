import{dr as e,ac as l,ds as a,ay as r,c as i,l as t,w as o,a3 as s,a2 as m,az as d,at as p}from"./index.CYwDHgSX.js";import{E as n}from"./el-scrollbar.CneAlIev.js";import{E as u}from"./el-row.CUAePAXu.js";import{E as h}from"./el-col.DryuoNBx.js";import{a as c,E as f}from"./el-form-item.RgEHfbLl.js";import{_ as j}from"./FileImage.CPQY3yWC.js";import{s as g}from"./screen-height.DTn4MhRY.js";import{_}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./castArray.DDF9UvWf.js";import"./_Uint8Array.BfmJkLIP.js";import"./el-dialog.B1SEhGSD.js";import"./refs.BVqx4q7v.js";import"./isUndefined.DgmxjSXK.js";import"./el-text.zGvo9xJ-.js";import"./el-avatar.D5vNYMrj.js";import"./el-image-viewer.DO1yrrM3.js";import"./debounce.CUt11AUd.js";import"./index.0Pcvv1HQ.js";import"./index.qyMIJHDy.js";import"./el-loading.B9vpWlxK.js";import"./index.B2QYy86Q.js";import"./el-select.D0UcctzR.js";import"./el-popper.DtYh8PhA.js";import"./index.CMHJgk_l.js";import"./el-table-column.DhyGfplS.js";import"./el-checkbox.Igk_iSDy.js";import"./el-tooltip.l0sNRNKZ.js";import"./FilePreview.DTx5ARMB.js";import"./clipboard.DihS1xD5.js";/* empty css                          */import"./el-card.DsWISmu8.js";import"./el-link.CpRVtVO9.js";import"./el-switch.BrEZMQXb.js";/* empty css                       */import"./el-date-picker.CroIcvYX.js";import"./permission.DyUMCPhg.js";import"./index.Cp1HnnF1.js";import"./group.iXw6aybA.js";import"./tag.nuIW8KVw.js";import"./index.Bi0hEvxG.js";import"./tagsView.Yz9WeQ11.js";const b=_({name:"SystemUserCenterEdit",data:()=>({name:"修改信息",height:680,loading:!1,model:{avatar_id:0,avatar_url:"",username:"",nickname:"",phone:"",email:""},rules:{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],username:[{required:!0,message:"请输入账号",trigger:"blur"}]}}),created(){this.height=g(210),this.info()},methods:{info(a=!1){e().then((e=>{this.reset(e.data),this.update(e.data),a&&l.success(e.msg)})).catch((()=>{}))},refresh(){this.loading=!0,this.info(!0),this.loading=!1},submit(){this.$refs.ref.validate((e=>{e&&(this.loading=!0,a(this.model).then((e=>{this.update(this.model),this.loading=!1,l.success(e.msg)})).catch((()=>{this.loading=!1})))}))},update(e){const l=r();l.user.avatar_url=e.avatar_url,l.user.nickname=e.nickname,l.user.username=e.username},reset(e){if(this.model=e||this.$options.data().model,void 0!==this.$refs.ref)try{this.$refs.ref.resetFields(),this.$refs.ref.clearValidate()}catch(l){}}}},[["render",function(e,l,a,r,g,_){const b=j,v=c,V=d,k=p,x=f,w=h,y=u,U=n;return i(),t(U,{native:"",height:g.height},{default:o((()=>[s(y,null,{default:o((()=>[s(w,{span:12},{default:o((()=>[s(x,{ref:"ref",rules:g.rules,model:g.model,"label-width":"120px"},{default:o((()=>[s(v,{label:"头像",prop:"avatar_id"},{default:o((()=>[s(b,{modelValue:g.model.avatar_id,"onUpdate:modelValue":l[0]||(l[0]=e=>g.model.avatar_id=e),"file-url":g.model.avatar_url,"file-title":"上传头像","file-tip":"图片小于 100 KB，jpg、png格式，100 x 100",height:100,avatar:"",upload:""},null,8,["modelValue","file-url"])])),_:1}),s(v,{label:"昵称",prop:"nickname"},{default:o((()=>[s(V,{modelValue:g.model.nickname,"onUpdate:modelValue":l[1]||(l[1]=e=>g.model.nickname=e),placeholder:"请输入昵称",clearable:""},null,8,["modelValue"])])),_:1}),s(v,{label:"账号",prop:"username"},{default:o((()=>[s(V,{modelValue:g.model.username,"onUpdate:modelValue":l[2]||(l[2]=e=>g.model.username=e),placeholder:"请输入账号",clearable:""},null,8,["modelValue"])])),_:1}),s(v,{label:"手机",prop:"phone"},{default:o((()=>[s(V,{modelValue:g.model.phone,"onUpdate:modelValue":l[3]||(l[3]=e=>g.model.phone=e),placeholder:"请输入手机",clearable:""},null,8,["modelValue"])])),_:1}),s(v,{label:"邮箱",prop:"email"},{default:o((()=>[s(V,{modelValue:g.model.email,"onUpdate:modelValue":l[4]||(l[4]=e=>g.model.email=e),placeholder:"请输入邮箱",clearable:""},null,8,["modelValue"])])),_:1}),s(v,null,{default:o((()=>[s(k,{loading:g.loading,onClick:_.refresh},{default:o((()=>[m("刷新")])),_:1},8,["loading","onClick"]),s(k,{loading:g.loading,type:"primary",onClick:_.submit},{default:o((()=>[m("提交")])),_:1},8,["loading","onClick"])])),_:1})])),_:1},8,["rules","model"])])),_:1})])),_:1})])),_:1},8,["height"])}]]);export{b as default};
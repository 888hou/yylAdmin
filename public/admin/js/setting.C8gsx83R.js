import{c as e,e as t,a3 as i,w as r,l as o,ab as m}from"./index.CYwDHgSX.js";import{E as s,a as n}from"./el-tab-pane.CE20duh7.js";import a from"./SettingApi.Bv4nQD_m.js";import p from"./SettingLog.CXTDJCui.js";import l from"./SettingToken.zU931_II.js";import j from"./SettingCaptcha.DqcwKEMU.js";import c from"./SettingThird.DQFJexSP.js";import g from"./SettingLogreg.Crz5G3gM.js";import d from"./SettingMember.YomnzEhX.js";import{c as f}from"./permission.DyUMCPhg.js";import{_ as b}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./el-select.D0UcctzR.js";import"./el-popper.DtYh8PhA.js";import"./isUndefined.DgmxjSXK.js";import"./el-scrollbar.CneAlIev.js";import"./_Uint8Array.BfmJkLIP.js";import"./debounce.CUt11AUd.js";import"./index.CMHJgk_l.js";import"./castArray.DDF9UvWf.js";import"./el-row.CUAePAXu.js";import"./el-col.DryuoNBx.js";import"./el-form-item.RgEHfbLl.js";import"./el-switch.BrEZMQXb.js";import"./screen-height.DTn4MhRY.js";import"./tagsView.Yz9WeQ11.js";import"./setting.oC3VcNF0.js";import"./el-dialog.B1SEhGSD.js";import"./refs.BVqx4q7v.js";import"./FileImage.CPQY3yWC.js";import"./el-text.zGvo9xJ-.js";import"./el-avatar.D5vNYMrj.js";import"./el-image-viewer.DO1yrrM3.js";import"./index.0Pcvv1HQ.js";import"./index.qyMIJHDy.js";import"./el-loading.B9vpWlxK.js";import"./index.B2QYy86Q.js";import"./el-table-column.DhyGfplS.js";import"./el-checkbox.Igk_iSDy.js";import"./el-tooltip.l0sNRNKZ.js";import"./FilePreview.DTx5ARMB.js";import"./clipboard.DihS1xD5.js";/* empty css                          */import"./el-card.DsWISmu8.js";import"./el-link.CpRVtVO9.js";/* empty css                       */import"./el-date-picker.CroIcvYX.js";import"./index.Cp1HnnF1.js";import"./group.iXw6aybA.js";import"./tag.nuIW8KVw.js";import"./index.Bi0hEvxG.js";const k={class:"app-container"};const h=b({name:"MemberSetting",components:{SettingApi:a,SettingCaptcha:j,SettingLog:p,SettingLogreg:g,SettingMember:d,SettingThird:c,SettingToken:l},data:()=>({name:"会员设置"}),methods:{checkPermission:f}},[["render",function(f,b,h,S,u,y){const x=d,_=s,I=g,P=c,z=j,w=l,v=p,A=a,L=n;return e(),t("div",k,[i(L,null,{default:r((()=>[y.checkPermission(["admin/member.Setting/memberInfo"])?(e(),o(_,{key:0,label:"会员设置",lazy:""},{default:r((()=>[i(x)])),_:1})):m("",!0),y.checkPermission(["admin/member.Setting/logregInfo"])?(e(),o(_,{key:1,label:"登录注册设置",lazy:""},{default:r((()=>[i(I)])),_:1})):m("",!0),y.checkPermission(["admin/member.Setting/thirdInfo"])?(e(),o(_,{key:2,label:"第三方账号设置",lazy:""},{default:r((()=>[i(P)])),_:1})):m("",!0),y.checkPermission(["admin/member.Setting/captchaInfo"])?(e(),o(_,{key:3,label:"验证码设置",lazy:""},{default:r((()=>[i(z)])),_:1})):m("",!0),y.checkPermission(["admin/member.Setting/tokenInfo"])?(e(),o(_,{key:4,label:"Token设置",lazy:""},{default:r((()=>[i(w)])),_:1})):m("",!0),y.checkPermission(["admin/member.Setting/logInfo"])?(e(),o(_,{key:5,label:"日志设置",lazy:""},{default:r((()=>[i(v)])),_:1})):m("",!0),y.checkPermission(["admin/member.Setting/apiInfo"])?(e(),o(_,{key:6,label:"接口设置",lazy:""},{default:r((()=>[i(A)])),_:1})):m("",!0)])),_:1})])}]]);export{h as default};
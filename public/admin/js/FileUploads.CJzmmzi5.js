import{r as e,K as l,D as t,c as i,l as a,w as s,a3 as o,a2 as r,t as n,e as u,Q as f,ag as d,g as p,ao as c,k as m,bY as y,at as _}from"./index.CYwDHgSX.js";import{E as h}from"./el-dialog.B1SEhGSD.js";import{E as g}from"./el-row.CUAePAXu.js";import{E as v}from"./el-link.CpRVtVO9.js";import{E as k}from"./el-image-viewer.DO1yrrM3.js";import{_ as w}from"./index.0Pcvv1HQ.js";import{E as x}from"./el-col.DryuoNBx.js";import{E as j}from"./el-text.zGvo9xJ-.js";import{F as C}from"./index.qyMIJHDy.js";import{h as z}from"./clipboard.DihS1xD5.js";const b=["src"],T=["data"],S=["src"],V=["src"],B=["src"],E={key:3},F={key:4},A={__name:"FileUploads",props:{modelValue:{type:[Array,Object],default:()=>[]},fileType:{type:String,default:"all"},fileTitle:{type:String,default:""},fileTip:{type:String,default:""},height:{type:Number,default:100},fit:{type:String,default:""},lazy:{type:Boolean,default:!1},uploadBtn:{type:String,default:"上传文件"},deleteBtn:{type:String,default:"全部删除"}},emits:["update:modelValue"],setup(A,{emit:U}){const D=A,K=e([]),N=e(!1),O=U;l((()=>D.modelValue),(e=>{K.value=e}),{immediate:!0});const Q=t((()=>({height:D.height+"px"}))),Y=t((()=>({width:"90%"}))),q=t((()=>.7*D.height+"px"));function G(e){return e.file_name+"."+e.file_ext}function H(){N.value=!1}function I(e){N.value=!1;const l=e.length;if(l){for(let t=0;t<l;t++)K.value.push(e[t]);O("update:modelValue",K)}}function J(e,l="right"){const t=K.value.length;var i=e;if("left"===l){if(e<=0)return!1;--i}else{if(e>=t-1)return!1;++i}const a=K.value[e],s=K.value[i];K.value[e]=s,K.value[i]=a}function L(e){"all"===e?K.value=[]:K.value.splice(e,1)}return(e,l)=>{const t=j,U=x,D=_,O=w,M=k,P=v,R=g,W=h;return i(),a(R,{style:{width:"100%"}},{default:s((()=>[o(U,{span:12},{default:s((()=>[o(t,{size:"default",truncated:"",title:A.fileTip},{default:s((()=>[r(n(A.fileTip),1)])),_:1},8,["title"])])),_:1}),o(U,{span:12},{default:s((()=>[o(D,{onClick:l[0]||(l[0]=e=>{N.value=!0})},{default:s((()=>[r(n(A.uploadBtn),1)])),_:1}),o(D,{onClick:l[1]||(l[1]=e=>L("all"))},{default:s((()=>[r(n(A.deleteBtn),1)])),_:1})])),_:1}),(i(!0),u(f,null,d(p(K),((e,l)=>(i(),a(U,{key:l,span:6},{default:s((()=>[o(R,{class:"file-row"},{default:s((()=>[o(U,{style:c({height:A.height+"px"})},{default:s((()=>["image"===e.file_type?(i(),a(M,{key:0,style:c({height:A.height+"px"}),src:e.file_url,fit:A.fit,"preview-src-list":[e.file_url],lazy:A.lazy,title:"点击看大图"},{error:s((()=>[o(O,{"icon-class":"picture"})])),_:2},1032,["style","src","fit","preview-src-list","lazy"])):"video"===e.file_type?(i(),u("video",{key:1,style:c(p(Q)),controls:""},[m("source",{src:e.file_url,type:"video/mp4"},null,8,b),m("object",{data:e.file_url,style:c(p(Q))},[m("embed",{src:e.file_url,style:c(p(Q))},null,12,S)],12,T)],4)):"audio"===e.file_type?(i(),u("audio",{key:2,style:c(p(Y)),controls:""},[m("source",{src:e.file_url,type:"audio/mp3"},null,8,V),m("embed",{src:e.file_url,style:c(p(Y))},null,12,B)],4)):"word"===e.file_type?(i(),u("div",E,[o(O,{"icon-class":"document",size:p(q)},null,8,["size"])])):(i(),u("div",F,[o(O,{"icon-class":"folder",size:p(q)},null,8,["size"])]))])),_:2},1032,["style"]),o(U,{style:{"max-height":"40px"}},{default:s((()=>[o(t,{size:"default",truncated:"",title:G(e)},{default:s((()=>[r(n(G(e)),1)])),_:2},1032,["title"])])),_:2},1024),o(U,{style:{"max-height":"40px"}},{default:s((()=>[o(P,{class:"file-link",type:"primary",underline:!1,title:"向左移动",onClick:e=>J(l,"left")},{default:s((()=>[o(O,{"icon-class":"d-arrow-left"})])),_:2},1032,["onClick"]),o(P,{class:"file-link",type:"primary",underline:!1,title:"向左移动",onClick:e=>J(l,"right")},{default:s((()=>[o(O,{"icon-class":"d-arrow-right"})])),_:2},1032,["onClick"]),o(P,{class:"file-link",type:"primary",underline:!1,title:"下载",onClick:l=>{return z(G(t=e),"文件名复制成功"),void setTimeout((()=>{window.open(t.file_url,"_blank")}),500);var t}},{default:s((()=>[o(O,{"icon-class":"download"})])),_:2},1032,["onClick"]),o(P,{class:"file-link",type:"primary",underline:!1,title:"删除",onClick:e=>L(l)},{default:s((()=>[o(O,{"icon-class":"delete"})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),o(W,{modelValue:p(N),"onUpdate:modelValue":l[2]||(l[2]=e=>y(N)?N.value=e:null),title:A.fileTitle?A.fileTitle:A.uploadBtn,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"1vh",width:"80%","append-to-body":""},{default:s((()=>[o(C,{"file-type":A.fileType,onFileCancel:H,onFileSubmit:I},null,8,["file-type"])])),_:1},8,["modelValue","title"])])),_:1})}}};export{A as _};
import{r as y,g as x,e as b,b as C,c as U,C as k,_ as I}from"./index-ab875e7b.js";import{e as B,a as M,t as w,p as T,v as t,m as e,F as A,r as H,j as r,k as L,n as o,z as d,a2 as n,a4 as S,a5 as F}from"./@vue-540abe7a.js";import"./pinia-fe7c20e5.js";import"./vue-router-308bd750.js";import"./mitt-f7ef348c.js";import"./@arco-design-66d2afa2.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-aff07e69.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./axios-4a70c6fc.js";const _=i=>(S("data-v-a98e5706"),i=i(),F(),i),E=_(()=>o("meta",{content:"width=device-width, initial-scale=1",name:"viewport"},null,-1)),N={style:{height:"200px","background-color":"#ffffff"}},P={style:{"white-space":"pre-wrap","word-wrap":"break-word"}},R=["src"],V=_(()=>o("br",null,null,-1)),$={class:"IndexBox-1-PC"},j={class:"Cafecho-Content",style:{"white-space":"pre-wrap","word-wrap":"break-word"}},z=["innerHTML"],D=_(()=>o("br",null,null,-1)),q={style:{height:"200px","background-color":"#ffffff"}},G={style:{"white-space":"pre-wrap","word-wrap":"break-word"}},J={style:{"white-space":"pre-wrap","word-wrap":"break-word"}},K=["src"],O=_(()=>o("br",null,null,-1)),Q={class:"IndexBox-1-PE"},W={class:"Cafecho-Content",style:{"white-space":"pre-wrap","word-wrap":"break-word"}},X=["innerHTML"],Y=_(()=>o("br",null,null,-1)),Z=B({__name:"Article",setup(i){const v=y.currentRoute.value.params.aid;let a=M({Category:{id:void 0,name:""},User:{username:"",email:"",avaterurl:"",role:1},aid:void 0,title:"",desc:"",content:""});return(u=>{x({url:"/api/v1/article/"+u}).then(l=>{a.Category.id=l.data.data.Category.id,a.Category.name=l.data.data.Category.name,a.User.username=l.data.data.User.username,a.User.email=l.data.data.User.email,a.User.avaterurl=l.data.data.User.avaterurl,a.User.role=l.data.data.User.role,a.aid=l.data.data.aid,a.title=l.data.data.title,a.desc=l.data.data.desc,a.content=l.data.data.content,w(a);const p=H(a.title);b.emit("getMetaTitle",p)})})(v),w(a),(u,l)=>{const p=r("a-avatar"),f=r("a-space"),s=r("a-col"),c=r("a-row"),m=r("a-card"),h=r("a-layout-content"),g=r("a-layout");return L(),T(A,null,[E,t(g,{style:{height:"100%","background-color":"#fafafa"}},{default:e(()=>[t(C),t(g,null,{default:e(()=>[t(U),t(c,{gutter:24},{default:e(()=>[t(s,{lg:{span:24},md:{span:24},sm:{span:0},xs:{span:0},style:{height:"100%"}},{default:e(()=>[t(h,null,{default:e(()=>[o("div",N,[t(c,{style:{"padding-left":"75px","padding-top":"25px"}},{default:e(()=>[t(s,{flex:"auto"},{default:e(()=>[o("h1",null,d(n(a).title),1),o("h4",P,d(n(a).desc),1),t(s,null,{default:e(()=>[t(f,null,{default:e(()=>[t(p,null,{default:e(()=>[o("img",{src:n(a).User.avaterurl,alt:"avatar"},null,8,R)]),_:1}),o("h4",null,d(n(a).User.username),1)]),_:1})]),_:1})]),_:1})]),_:1})]),V,o("div",$,[t(c,null,{default:e(()=>[t(s,null,{default:e(()=>[t(m,{bordered:!1,class:"BoxCard",hoverable:""},{default:e(()=>[o("div",j,[o("p",{innerHTML:n(a).content},null,8,z)])]),_:1})]),_:1})]),_:1})]),D]),_:1})]),_:1}),t(s,{lg:{span:0},md:{span:0},sm:{span:24},xs:{span:24},style:{height:"100%"}},{default:e(()=>[t(h,{style:{"background-color":"#fafafa",height:"100%"}},{default:e(()=>[o("div",q,[t(c,{style:{"padding-left":"15px","padding-top":"10px"}},{default:e(()=>[t(s,{flex:"auto"},{default:e(()=>[o("h1",G,d(n(a).title),1),o("h4",J,d(n(a).desc),1),t(s,null,{default:e(()=>[t(f,null,{default:e(()=>[t(p,null,{default:e(()=>[o("img",{src:n(a).User.avaterurl,alt:"avatar"},null,8,K)]),_:1}),o("h4",null,d(n(a).User.username),1)]),_:1})]),_:1})]),_:1})]),_:1})]),O,o("div",Q,[t(c,null,{default:e(()=>[t(s,null,{default:e(()=>[t(m,{bordered:!1,class:"BoxCard"},{default:e(()=>[o("div",W,[o("p",{innerHTML:n(a).content},null,8,X)])]),_:1})]),_:1})]),_:1})]),Y]),_:1})]),_:1})]),_:1}),t(k)]),_:1})]),_:1})],64)}}});const mt=I(Z,[["__scopeId","data-v-a98e5706"]]);export{mt as default};
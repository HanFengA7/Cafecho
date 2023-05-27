import{e as x,l as C,a2 as u,k as p,r as f,a3 as $,m as c,v as n,y as N,n as i,j as _,p as w,z as m,s as k,a4 as V,a5 as B,_ as q}from"./@vue-540abe7a.js";import{c as F}from"./pinia-fe7c20e5.js";import{R as L,c as T,a as z}from"./vue-router-308bd750.js";import{m as M}from"./mitt-f7ef348c.js";import{I as H,a as W,b as D,c as K,M as R,N as U,d as j,e as G,f as Q,A as J}from"./@arco-design-66d2afa2.js";import{a as X}from"./axios-4a70c6fc.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./compute-scroll-into-view-183f845a.js";import"./b-tween-aacd5abe.js";import"./dayjs-aff07e69.js";import"./b-validate-48f29bf6.js";import"./number-precision-7e656275.js";import"./scroll-into-view-if-needed-6b992d05.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const Y=x({__name:"App",setup(o){return(e,a)=>(p(),C(u(L)))}}),Z="modulepreload",ee=function(o){return"/"+o},E={},P=function(e,a,r){if(!a||a.length===0)return e();const t=document.getElementsByTagName("link");return Promise.all(a.map(s=>{if(s=ee(s),s in E)return;E[s]=!0;const l=s.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(!!r)for(let v=t.length-1;v>=0;v--){const b=t[v];if(b.href===s&&(!l||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${h}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Z,l||(d.as="script",d.crossOrigin=""),d.href=s,document.head.appendChild(d),l)return new Promise((v,b)=>{d.addEventListener("load",v),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},y=M(),te=i("div",{class:"logo"},null,-1),oe=x({__name:"Sider",setup(o){const e=f();return $(()=>{y.on("getCollapsed",a=>{e.value=a.value})}),(a,r)=>{const t=_("a-menu-item"),s=_("a-menu"),l=_("a-layout-sider");return p(),C(l,{collapsed:e.value,collapsible:"","hide-trigger":""},{default:c(()=>[te,n(s,{defaultOpenKeys:["2"],defaultSelectedKeys:["1"],style:{width:"100%"},onMenuItemClick:r[1]||(r[1]=()=>{})},{default:c(()=>[n(t,{key:"1",onClick:r[0]||(r[0]=h=>u(A).push("/"))},{default:c(()=>[n(u(H)),N(" 首页 ")]),_:1})]),_:1})]),_:1},8,["collapsed"])}}}),ae=x({__name:"Header",setup(o){let e,a;document.body.clientWidth>992?(e=f(!1),y.emit("getCollapsed",e)):(e=f(!0),y.emit("getCollapsed",e));const r={onCollapse(){e.value=!e.value,y.emit("getCollapsed",e)}};window.onresize=()=>{a=f(document.body.clientWidth),a.value>992?(e=f(!1),y.emit("getCollapsed",e)):(e=f(!0),y.emit("getCollapsed",e))};const t=()=>{R.info("正在建设中...")};return(s,l)=>{const h=_("a-button"),g=_("a-col"),d=_("a-input-search"),v=_("a-space"),b=_("a-row"),O=_("a-layout-header");return p(),C(O,{style:{"background-color":"#ffffff",padding:"15px"}},{default:c(()=>[n(b,null,{default:c(()=>[n(g,{lg:{span:24},md:{span:24},sm:{span:0},xs:{span:0},flex:"100px"},{default:c(()=>[n(h,{shape:"round",onClick:l[0]||(l[0]=Le=>r.onCollapse())},{default:c(()=>[u(e)?(p(),C(u(W),{key:0})):(p(),C(u(D),{key:1}))]),_:1})]),_:1}),n(g,{flex:"auto"}),n(v,null,{default:c(()=>[n(g,{lg:{span:24},md:{span:24},sm:{span:20},xs:{span:20},flex:"100px"},{default:c(()=>[n(d,{"allow-clear":!0,style:{width:"200px"},shape:"round",onClick:t})]),_:1}),n(g,{flex:"100px"},{default:c(()=>[i("a",{onClick:t},[n(h,{shape:"round"},{default:c(()=>[n(u(K))]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}}),S=X.create({baseURL:"/",timeout:3e5});S.interceptors.request.use(o=>(o.headers.Authorization=`Bearer ${window.sessionStorage.getItem("token")}`,o));S.interceptors.response.use(o=>{const e=o.data;if(o.status===200)return o;{let a;return e.message!=null?a=e.message:a="网络异常",R.loading("数据处理中..."),U.error(a),o}});const se=o=>S({...o,method:"get"}),ne=()=>se({url:"api/v1/siteinfo"}),re={getSiteInfoApi:ne},ie=o=>(V("data-v-9706aa87"),o=o(),B(),o),ce={class:"footer-wrap-PC"},le={class:"footer-top-PC"},ue={class:"footer-top-icp-PC"},_e={key:0,href:"https://beian.miit.gov.cn/",target:"_blank"},pe={key:0,href:"https://www.beian.gov.cn/",target:"_blank"},de={"data-v-0f1600f3":""},fe={class:"footer-top-contact-PC"},me=ie(()=>i("div",{class:"Cafecho-valign"},[i("div",{style:{"margin-left":"30px"}},"遇到问题,联系我？")],-1)),he={class:"footer-top-icon-PC"},ge=["href"],ve=["href"],ye=["href"],Ce={class:"footer-wrap-PC"},be={class:"footer-top-PC"},xe={class:"footer-top-icp-PC"},we={key:0,href:"https://beian.miit.gov.cn/",target:"_blank"},ke={key:0,href:"https://www.beian.gov.cn/",target:"_blank"},Ie={"data-v-0f1600f3":""},Pe=x({__name:"Footer",setup(o){const e=f({blogger:"",icpnum1:"",icpnum2:"",footer_siteyear:"",cardinfo_qq:"",cardinfo_github:"",cardinfo_afdian:""});let a=f(!1),r=f(!1);return re.getSiteInfoApi().then(t=>{e.value=t.data.data[0],e.value.icpnum1!=""&&(a.value=!0),e.value.icpnum2!=""&&(r.value=!0)}),(t,s)=>{const l=_("a-col"),h=_("a-row"),g=_("a-layout-footer");return p(),C(g,{class:"footer"},{default:c(()=>[n(h,{gutter:24},{default:c(()=>[n(l,{lg:{span:24},md:{span:24},sm:{span:0},xs:{span:0}},{default:c(()=>[i("div",ce,[i("div",le,[i("div",ue,[u(a)?(p(),w("a",_e,"互联网ICP备案："+m(e.value.icpnum1),1)):k("",!0),i("span",null,[u(r)?(p(),w("a",pe,"互联网公安备案："+m(e.value.icpnum2),1)):k("",!0)]),i("span",de,"Copyright © "+m(e.value.footer_siteyear)+"-2023 "+m(e.value.blogger),1)]),i("div",fe,[me,i("div",he,[i("a",{href:e.value.cardinfo_qq},[n(u(j),{style:{"font-size":"20px",color:"#e5e5e5"}})],8,ge),i("a",{href:e.value.cardinfo_github},[n(u(G),{style:{"font-size":"20px",color:"#e5e5e5"}})],8,ve),i("a",{href:e.value.cardinfo_afdian},[n(u(Q),{style:{"font-size":"20px",color:"#e5e5e5"}})],8,ye)])])])])]),_:1}),n(l,{lg:{span:0},md:{span:0},sm:{span:24},xs:{span:24}},{default:c(()=>[i("div",Ce,[i("div",be,[i("div",xe,[u(a)?(p(),w("a",we,"ICP备案: "+m(e.value.icpnum1),1)):k("",!0),i("span",null,[u(r)?(p(),w("a",ke,"公安备案: "+m(e.value.icpnum2),1)):k("",!0)]),i("span",Ie,"Copyright © "+m(e.value.footer_siteyear)+"-2023 "+m(e.value.blogger),1)])])])]),_:1})]),_:1})]),_:1})}}});const Se=(o,e)=>{const a=o.__vccOpts||o;for(const[r,t]of e)a[r]=t;return a},Ae=Se(Pe,[["__scopeId","data-v-9706aa87"]]),Ee=x({__name:"HomeView",setup(o){return(e,a)=>{const r=_("a-layout-content"),t=_("a-layout");return p(),C(t,{style:{height:"100%"}},{default:c(()=>[n(oe),n(t,null,{default:c(()=>[n(ae),n(r,{id:"container",style:{"background-color":"#fafafa"}},{default:c(()=>[n(u(L))]),_:1}),n(Ae)]),_:1})]),_:1})}}}),A=T({history:z("/"),routes:[{path:"/",name:"Home",component:Ee,children:[{path:"",name:"Index",meta:{title:""},component:()=>P(()=>import("./Index-b43b69d7.js"),["assets/Index-b43b69d7.js","assets/@arco-design-66d2afa2.js","assets/@vue-540abe7a.js","assets/resize-observer-polyfill-0f9f8adb.js","assets/compute-scroll-into-view-183f845a.js","assets/b-tween-aacd5abe.js","assets/dayjs-aff07e69.js","assets/b-validate-48f29bf6.js","assets/number-precision-7e656275.js","assets/scroll-into-view-if-needed-6b992d05.js","assets/@arco-design-b716f47a.css","assets/pinia-fe7c20e5.js","assets/vue-router-308bd750.js","assets/mitt-f7ef348c.js","assets/axios-4a70c6fc.js","assets/Index-26367fbb.css"])},{path:"/About",name:"About",meta:{title:"关于"},component:()=>P(()=>import("./About-810d8e89.js"),["assets/About-810d8e89.js","assets/@arco-design-66d2afa2.js","assets/@vue-540abe7a.js","assets/resize-observer-polyfill-0f9f8adb.js","assets/compute-scroll-into-view-183f845a.js","assets/b-tween-aacd5abe.js","assets/dayjs-aff07e69.js","assets/b-validate-48f29bf6.js","assets/number-precision-7e656275.js","assets/scroll-into-view-if-needed-6b992d05.js","assets/@arco-design-b716f47a.css","assets/pinia-fe7c20e5.js","assets/vue-router-308bd750.js","assets/mitt-f7ef348c.js","assets/axios-4a70c6fc.js","assets/About-f29cc58f.css"])}]},{path:"/Article/:aid",name:"Article",meta:{title:""},component:()=>P(()=>import("./Article-34094e8d.js"),["assets/Article-34094e8d.js","assets/@vue-540abe7a.js","assets/pinia-fe7c20e5.js","assets/vue-router-308bd750.js","assets/mitt-f7ef348c.js","assets/@arco-design-66d2afa2.js","assets/resize-observer-polyfill-0f9f8adb.js","assets/compute-scroll-into-view-183f845a.js","assets/b-tween-aacd5abe.js","assets/dayjs-aff07e69.js","assets/b-validate-48f29bf6.js","assets/number-precision-7e656275.js","assets/scroll-into-view-if-needed-6b992d05.js","assets/@arco-design-b716f47a.css","assets/axios-4a70c6fc.js","assets/Article-4175a757.css"])}]});A.beforeEach(async(o,e,a)=>{y.on("getMetaTitle",r=>{o.meta.title==""?(document.title=r.value,console.log(r.value)):document.title=o.meta.title}),a()});const I=q(Y);I.use(J);I.use(F());I.use(A);I.mount("#app");export{Ae as C,Se as _,re as a,oe as b,ae as c,y as e,se as g,A as r};
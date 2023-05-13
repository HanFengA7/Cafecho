import{u as V}from"./vue-router-1948c3ab.js";import{a as $}from"./articlelist-4c3c8014.js";import{S as F}from"./axios-8b100baf.js";import{d as P,r as g,a0 as p,c as t,u as f,X as a,F as S,_ as G,Y as n,Z as l,I as h,$ as C,a4 as u,a1 as Q,W as b}from"./@vue-ed0e62b5.js";import{Y,ad as q,Q as J}from"./@ant-design-4a0ad1b8.js";import{m as k}from"./ant-design-vue-ff946531.js";import"./request-b9cb8a26.js";import"./axios-4a70c6fc.js";import"./@ctrl-fb5a5473.js";import"./@babel-9393a256.js";import"./resize-observer-polyfill-3d106987.js";import"./@emotion-c0b5c018.js";import"./stylis-af24efd6.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./vue-types-ef06c517.js";import"./dom-align-529d0cdc.js";import"./lodash-es-46efcfe4.js";import"./dayjs-bea8cda3.js";import"./async-validator-dee29e8b.js";import"./throttle-debounce-87e7e444.js";const R=G("br",null,null,-1),W={key:0},X={key:1},Z={key:0},xe=P({__name:"CA_ArticleList",setup(j){g();const y=V(),x=g([]),z=[{title:"ID",dataIndex:"aid",key:"aid",width:"5%"},{title:"文章标题",dataIndex:"title",width:"15%",align:"center"},{title:"文章概要",dataIndex:"desc",width:"15%",align:"center"},{title:"作者",dataIndex:"Username",width:"15%",align:"center"},{title:"分类",dataIndex:"Category",width:"15%",align:"center"},{title:"标签",dataIndex:"tags",width:"15%",align:"center"},{title:"操作",dataIndex:"action",width:"30%",align:"center"}],w=g({pageSizeOptions:["10","50","100"],total:0,showSizeChanger:!0,hideOnSinglePage:!1,showQuickJumper:!1}),d=g({title:"",pageSize:10,pageNum:1}),A=()=>{y.push("ArticleAdd")},m=()=>{$.articleListApi(x,d).then(e=>{if(e.data.status!==200)return k.error("数据获取异常",10);x.value=e.data.data,w.value.total=e.data.total})},N=e=>{y.push(`ArticleEdit/${e}`)},B=async e=>{let o;return o=await F.delete("api/v1/article/"+e),o.data.status!==200?k.error("删除数据异常！",10):new Promise(_=>{setTimeout(()=>_(!0),3e3)}).then(()=>{m(),k.success("成功删除文章！",5),console.log(o.data)})},D=(e,o,_)=>{const i={...e};i.current=e.current,i.pageSize=e.pageSize,d.value.pageSize=e.pageSize,d.value.pageNum=e.current,i.pageSize!==e.pageSize&&(d.value.pageNum=1,i.current=1),e=i,m()};return m(),(e,o)=>{const _=n("a-page-header"),i=n("a-input-search"),I=n("a-col"),v=n("a-button"),O=n("a-row"),E=n("a-tag"),L=n("a-popconfirm"),T=n("a-space"),U=n("a-table");return l(),p(S,null,[t(_,{style:{border:"1px solid rgb(235, 237, 240)"},title:"文章列表",onBack:o[0]||(o[0]=()=>f(y).push("Index"))}),R,t(O,null,{default:a(()=>[t(I,{lg:6,md:6,sm:16,xl:6,xs:16},{default:a(()=>[t(i,{value:d.value.title,"onUpdate:value":o[1]||(o[1]=r=>d.value.title=r),allowClear:"","enter-button":"",placeholder:"输入文章标题搜索文章",onSearch:m},null,8,["value"])]),_:1}),t(I,{lg:6,md:6,sm:6,xl:6,xs:6},{default:a(()=>[t(v,{style:{"margin-left":"10px"},type:"primary",onClick:A},{icon:a(()=>[t(f(Y))]),default:a(()=>[h(" 撰写文章 ")]),_:1})]),_:1})]),_:1}),t(U,{bordered:!0,columns:z,"data-source":x.value,pagination:w.value,"row-key":r=>r.aid,style:{margin:"15px"},onChange:D},{bodyCell:a(({column:r,text:H,record:s})=>[r.dataIndex==="Username"?(l(),p("span",W,C(s.User.username),1)):u("",!0),r.dataIndex==="Category"?(l(),p("span",X,C(s.Category.name==""?"未设置分类":s.Category.name),1)):u("",!0),r.dataIndex==="tags"?(l(!0),p(S,{key:2},Q(s.tags.split(","),c=>(l(),b(E,{key:c,color:c==="loser"?"volcano":c.length>5?"geekblue":"green"},{default:a(()=>[h(C(c),1)]),_:2},1032,["color"]))),128)):u("",!0),r.dataIndex==="action"?(l(),b(T,{key:3,size:8},{default:a(()=>[t(v,{type:"primary",onClick:c=>N(s.aid)},{icon:a(()=>[t(f(q))]),default:a(()=>[h(" 编辑 ")]),_:2},1032,["onClick"]),s.ID!=1?(l(),p("div",Z,[t(L,{title:"是否删除这篇文章",onConfirm:c=>B(s.aid)},{default:a(()=>[t(v,{danger:"",type:"primary"},{icon:a(()=>[t(f(J))]),default:a(()=>[h(" 删除 ")]),_:1})]),_:2},1032,["onConfirm"])])):u("",!0)]),_:2},1024)):u("",!0)]),_:1},8,["data-source","pagination","row-key"])],64)}}});export{xe as default};

import{g as e,p as i}from"./request-b9cb8a26.js";const p=(t,a)=>e({url:"api/v1/article",params:{page_size:a.value.pageSize,page_num:a.value.pageNum,title:a.value.title},...t}),l=t=>i({url:"api/v1/article/add",data:t}),s={articleListApi:p,articleAddApi:l};export{s as a};

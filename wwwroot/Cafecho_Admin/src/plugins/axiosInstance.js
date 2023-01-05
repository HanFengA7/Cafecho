//axiosInstance.js
//导入axios
import axios from "axios";
//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const API = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    timeout: 3000,
});
//导出我们建立的axios实例模块，ES6 export用法
export default API;

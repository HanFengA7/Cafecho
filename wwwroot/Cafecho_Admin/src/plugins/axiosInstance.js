//axiosInstance.js
//导入axios
import axios from "axios";
//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const API = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    timeout: 3000,
});
// 添加请求拦截器
API.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    config.headers.Authorization = `Bearer ${window.sessionStorage.getItem("token")}`;
    return config;
});
//导出我们建立的axios实例模块，ES6 export用法
export default API;

import axios from "axios";
import {message, notification} from 'ant-design-vue';

const Service = axios.create({
    baseURL: "https://198.211.13.200:3000",
    timeout: 300000,
})

// 请求拦截器
Service.interceptors.request.use((config: any) => {
    // 在发送请求之前做些什么
    config.headers.Authorization = `Bearer ${window.sessionStorage.getItem(
        "token"
    )}`;
    return config;
});


//响应拦截器
Service.interceptors.response.use((response) => {
    //获取接口返回结果
    const res = response.data
    if (response.status === 200) {
        return response
    } else {
        let ResMessage: string
        if (res.message != null) {
            ResMessage = res.message
        } else {
            ResMessage = '网络异常'
        }
        message.loading('数据处理中...', 1.5).then(
            () => notification.error({
                message: 'Error',
                description: ResMessage,
                duration: 2.5,
            })
        )
        return response
    }
})

export default Service
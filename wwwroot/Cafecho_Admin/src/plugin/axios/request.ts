import Service from "./axios"
import type {AxiosRequestConfig} from "axios";

//Get
export const get = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: 'get',
    })
}
export const get1 = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: 'get',
        params: config.data
    })
}

//Post
export const post = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: 'post',
        params: config.data
    })
}

//Delete
export const deleteApi = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: 'delete',
        params: config.data
    })
}

//PUT
export const put = (config: AxiosRequestConfig<any>) => {
    return Service({
        ...config,
        method: 'put',
    })
}
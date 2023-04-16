import {post} from "../request";


const loginApi = (data: any) => {
    return post({
        url: '/api/v1/login',
        data
    })
}

export default {
    loginApi
}
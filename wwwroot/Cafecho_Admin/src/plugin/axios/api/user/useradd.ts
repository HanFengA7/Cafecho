import {post} from "../../request";


const userAddApi = (data: any) => {
    return post({
        url: 'api/v1/user/add',
        data
    })
}


export default {
    userAddApi,
}
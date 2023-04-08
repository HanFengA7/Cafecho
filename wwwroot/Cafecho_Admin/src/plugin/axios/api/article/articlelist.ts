import {get1} from "../../request";


const articleListApi = (data: any) => {
    return get1({
        url: '/api/v1/login',
        data
    })
}

export default {
    articleListApi
}
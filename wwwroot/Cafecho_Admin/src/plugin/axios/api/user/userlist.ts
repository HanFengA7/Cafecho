import {deleteApi, get, put} from "../../request";


const userListApi = (data: any, queryParam: any) => {
    return get({
        url: 'api/v1/users',
        params: {
            //每页条数
            page_size: queryParam.value.pageSize,
            //当前页数
            page_num: queryParam.value.pageNum,
            //模糊查询用户
            username: queryParam.value.username,
        },
        ...data
    })
}

const deleteUserApi = (data: any) => {
    return deleteApi({
        url: 'api/v1/user/' + data,
    })
}

const getUserApi = (data: any) => {
    return get({
        url: 'api/v1/user/' + data,
    })
}

const editUserApi = (data: any, id: any) => {
    return put({
        url: 'api/v1/user/' + id,
        data
    })
}

export default {
    userListApi,
    deleteUserApi,
    getUserApi,
    editUserApi
}
import {get, post, put} from "../../request";


const categoryListApi = (data: any, queryParam: any) => {
    return get({
        url: 'api/v1/category',
        params: {
            //每页条数
            page_size: queryParam.value.pageSize,
            //当前页数
            page_num: queryParam.value.pageNum,
            //模糊查询分类名
            name: queryParam.value.name,
        },
        ...data
    })
}

const getCategoryApi = (data: any) => {
    return get({
        url: 'api/v1/category/' + data,
    })
}

const editCategoryApi = (data: any, id: any) => {
    return put({
        url: 'api/v1/category/' + id,
        data
    })
}

const addCategoryApi = (data: any) => {
    return post({
        url: 'api/v1/category/add',
        data
    })
}

export default {
    categoryListApi,
    getCategoryApi,
    editCategoryApi,
    addCategoryApi
}
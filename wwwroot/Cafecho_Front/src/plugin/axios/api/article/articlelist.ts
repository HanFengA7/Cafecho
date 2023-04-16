import {get} from "../../request";


const articleListApi = (data: any, queryParam: any) => {
    return get({
        url: 'api/v1/article',
        params: {
            //每页条数
            page_size: queryParam.value.pageSize,
            //当前页数
            page_num: queryParam.value.current,
            //模糊查询文章标题
            title: queryParam.value.title,
        },
        ...data
    })
}

export default {
    articleListApi
}
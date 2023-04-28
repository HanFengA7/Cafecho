import {get, put} from "../../request";

const getSiteInfoApi = () => {
    return get({
        url: 'api/v1/siteinfo',
    })
}

const editSiteInfoApi = (data: any,) => {
    return put({
        url: 'api/v1/siteinfo',
        data
    })
}

export default {
    getSiteInfoApi,
    editSiteInfoApi,
}
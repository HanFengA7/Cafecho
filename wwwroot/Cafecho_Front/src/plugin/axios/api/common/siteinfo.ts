import {get} from "../../request";

const getSiteInfoApi = () => {
    return get({
        url: 'api/v1/siteinfo',
    })
}

export default {
    getSiteInfoApi,

}
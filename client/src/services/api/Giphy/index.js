import {
    commonApi
} from '../../constant';

export default class {
    constructor(initApi) {
        this.initApi = initApi;
    }
    insertFavourite = (params) => {
        const body = {
            favourite_item: params
        }
        return this.initApi.post(`${commonApi.insertFavourite}`, body)
    }
    getFavourite = () => {
        return this.initApi.get(`${commonApi.getAllFavourite}`)
    }
    search = (params) => {
        const {
            q,
            limit,
            offset,
            rating,
            lang
        } = params;
        const paramsPath = `&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
        return this.initApi.get(`${commonApi.search}api_key=${commonApi.apiKey}${paramsPath}`);
    }
}
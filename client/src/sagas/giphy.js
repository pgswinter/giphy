import {
    put,
    call,
    takeLatest,
    all,
    fork,
} from "redux-saga/effects";

import {
    REQUEST_ALL_FAVOURITE,
    REQUEST_SEARCH_GIPHY,
    REQUEST_INSERT_FAVOURITE,
} from '../actions/giphyActions/giphyActionTypes';
import {
    reqAllFavouriteSuccess,
    reqAllFavouriteFail,

    reqSearchGiphySuccess,
    reqSearchGiphyFail,

    reqInsertFavouriteSuccess,
    reqInsertFavouriteFail
} from '../actions/giphyActions/giphyActions';

import api from '../services/api';
// *********************************************************
// REQUEST ALL FAVOURITE
// *********************************************************
function* reqAllFavourite() {
    try {
        const { data } = yield call(() => api.Giphy.getFavourite());
        yield put(reqAllFavouriteSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(reqAllFavouriteFail(error))
    }
}
function* watchReqAllFavourite() {
    yield takeLatest(REQUEST_ALL_FAVOURITE, reqAllFavourite);
}
// *********************************************************
// REQUEST INSERT FAVOURITE
// *********************************************************
function* reqInsertFavourite(params) {
    try {
        const data = yield call(() => api.Giphy.insertFavourite(params.params));
        yield put(reqInsertFavouriteSuccess(data));

    } catch (error) {
        console.log(error);
        yield put(reqInsertFavouriteFail(error))
    }
}
function* watchReqInsertFavourite() {
    yield takeLatest(REQUEST_INSERT_FAVOURITE, reqInsertFavourite);
}
// *********************************************************
// REQUEST SEARCH POKEMON
// *********************************************************
function* reqSearchGiphy(params) {
    const { apiInfo } = params.params;
    const favouriteList = params.params.favouriteList.data;
    try {
        const { data } = yield call(() => api.Giphy.search(apiInfo));
        const searchList = data.data;
        let newData = searchList;
        
        if (favouriteList.length > 0) {
            newData = searchList.map(item => {
                favouriteList.forEach(favItem => {
                    if (item.id === favItem.id) {
                        item.is_favourite = favItem.is_favourite
                    }
                })
                return item;
            });
        }
        
        yield put(reqSearchGiphySuccess(newData));
    } catch (error) {
        yield put(reqSearchGiphyFail(error))
    }
}
function* watchReqSearchPokemon() {
    yield takeLatest(REQUEST_SEARCH_GIPHY, reqSearchGiphy);
}

export default function* () {
    yield all([
        fork(watchReqSearchPokemon),
        fork(watchReqInsertFavourite),
        fork(watchReqAllFavourite),
    ])
}

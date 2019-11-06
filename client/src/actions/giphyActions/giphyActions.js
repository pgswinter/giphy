import {
    REQUEST_PROCESS_LOCAL,

    REQUEST_SEARCH_GIPHY,
    REQUEST_SEARCH_GIPHY_SUCCESS,
    REQUEST_SEARCH_GIPHY_FAIL,

    REQUEST_INSERT_FAVOURITE,
    REQUEST_INSERT_FAVOURITE_SUCCESS,
    REQUEST_INSERT_FAVOURITE_FAIL,

    REQUEST_ALL_FAVOURITE,
    REQUEST_ALL_FAVOURITE_SUCCESS,
    REQUEST_ALL_FAVOURITE_FAIL,

    REQUEST_MERGE_FAVOURITE
} from './giphyActionTypes';

// *********************************************************
// REQUEST MERGE FAVOURITE
// *********************************************************
export const reqMergeFavourite = (params) => {
    return {
        type: REQUEST_MERGE_FAVOURITE,
        params
    }
}
// *********************************************************
// REQUEST SEARCH GIPHY
// *********************************************************
export const reqProcessLocal = (params) => {
    return {
        type: REQUEST_PROCESS_LOCAL,
        params
    }
}
// *********************************************************
// REQUEST SEARCH GIPHY
// *********************************************************
export const reqSearchGiphy = (params) => {
    return {
        type: REQUEST_SEARCH_GIPHY,
        params
    }
}
export const reqSearchGiphySuccess = (data) => {
    return {
        type: REQUEST_SEARCH_GIPHY_SUCCESS,
        payload: data
    }
}
export const reqSearchGiphyFail = (error) => ({
    type: REQUEST_SEARCH_GIPHY_FAIL,
    payload: error
})
// *********************************************************
// REQUEST INSERT FAVOURITE
// *********************************************************
export const reqInsertFavourite = (params) => {
    return {
        type: REQUEST_INSERT_FAVOURITE,
        params
    }
}
export const reqInsertFavouriteSuccess = (data) => {
    return {
        type: REQUEST_INSERT_FAVOURITE_SUCCESS,
        payload: data
    }
}
export const reqInsertFavouriteFail = (error) => ({
    type: REQUEST_INSERT_FAVOURITE_FAIL,
    payload: error
})
// *********************************************************
// REQUEST INSERT FAVOURITE
// *********************************************************
export const reqAllFavourite = (params) => {
    return {
        type: REQUEST_ALL_FAVOURITE,
        params
    }
}
export const reqAllFavouriteSuccess = (data) => {
    return {
        type: REQUEST_ALL_FAVOURITE_SUCCESS,
        payload: data
    }
}
export const reqAllFavouriteFail = (error) => ({
    type: REQUEST_ALL_FAVOURITE_FAIL,
    payload: error
})
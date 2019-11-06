import {
    REQUEST_ALL_FAVOURITE,
    REQUEST_ALL_FAVOURITE_SUCCESS,
    REQUEST_ALL_FAVOURITE_FAIL
} from '../actions/giphyActions/giphyActionTypes';

export let defaultData = {}

const initialState = {
    loading: false,
    error: '',
    data: [],
    isLoaded: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_ALL_FAVOURITE:
            return {
                ...state,
                loading: true
            }
        case REQUEST_ALL_FAVOURITE_SUCCESS:
            defaultData = action && action.payload && action.payload.data;
            return {
                ...state,
                loading: false,
                data: defaultData,
                isLoaded: true
            }
        case REQUEST_ALL_FAVOURITE_FAIL:
            return {
                ...state,
                loading: false,
                error: action,
                isLoaded: true
            }
        default:
            return state;
    }
}
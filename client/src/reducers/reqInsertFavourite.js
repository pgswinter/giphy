import {
    REQUEST_INSERT_FAVOURITE,
    REQUEST_INSERT_FAVOURITE_SUCCESS,
    REQUEST_INSERT_FAVOURITE_FAIL
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
        case REQUEST_INSERT_FAVOURITE:
            return {
                ...state,
                loading: true
            }
        case REQUEST_INSERT_FAVOURITE_SUCCESS:
            defaultData = action && action.payload && action.payload.data;
            return {
                ...state,
                loading: false,
                data: defaultData,
                isLoaded: true
            }
        case REQUEST_INSERT_FAVOURITE_FAIL:
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
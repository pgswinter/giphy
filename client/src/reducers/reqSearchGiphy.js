import {
    REQUEST_PROCESS_LOCAL,

    REQUEST_SEARCH_GIPHY,
    REQUEST_SEARCH_GIPHY_SUCCESS,
    REQUEST_SEARCH_GIPHY_FAIL,
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
        case REQUEST_SEARCH_GIPHY:
            return {
                ...state,
                loading: true
            }
        case REQUEST_PROCESS_LOCAL:
            const fetchId = action.params;
            const currentData = state.data;
            const favourite = currentData.filter(item => item.id === fetchId);
            favourite[0].is_favourite = !favourite[0].is_favourite;
            state.data.favourite_item = favourite[0];
            return {
                ...state,
                loading: false,
                data: state.data,
                isLoaded: true
            }
        case REQUEST_SEARCH_GIPHY_SUCCESS:
            defaultData = action && action.payload && action.payload;
            return {
                ...state,
                loading: false,
                data: defaultData,
                isLoaded: true
            }
        case REQUEST_SEARCH_GIPHY_FAIL:
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
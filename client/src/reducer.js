import { combineReducers } from "redux";

import allFavourite from './reducers/reqAllFavourite';
import searchGiphy from './reducers/reqSearchGiphy';
import insertFavourite from './reducers/reqInsertFavourite';

export default combineReducers({
    allFavourite,
    searchGiphy,
    insertFavourite
})
import { legacy_createStore as createStore } from "redux";
import searchReducer from "./search/search";
import { combineReducers } from "redux";

const rootReducer =combineReducers ({
    searchReducer
})
const store =  createStore(rootReducer,{});
export default store;
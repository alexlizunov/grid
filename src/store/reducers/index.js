import postsReducer from "./posts";
import {combineReducers} from "redux";


export const reducers = combineReducers({
    posts: postsReducer
})

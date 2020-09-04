import {put, takeEvery} from "@redux-saga/core/effects";
import PostsService from "../../services/posts";

function* getPosts() {
    try {
        const {data} = yield PostsService.getPosts();
        yield put({
            type: "SET_POSTS",
            payload: data
        })
    } catch (e) {
        console.log(e);
    }
}

function* PostSaga() {
    yield takeEvery("GET_POSTS", getPosts)
}

export default PostSaga
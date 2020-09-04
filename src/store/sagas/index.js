import {all} from "@redux-saga/core/effects";
import PostsSaga from "./posts";

export default function* rootSaga() {
    yield all([
        PostsSaga()
    ])
}
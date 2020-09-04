import { createStore, applyMiddleware } from 'redux'
import {reducers} from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import {composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);

export default store
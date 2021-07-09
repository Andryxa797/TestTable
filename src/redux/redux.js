import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducerTable} from "./reducerTable";

let reducers = combineReducers({
    table: reducerTable
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export let store = createStore(reducers, composeEnhancers(applyMiddleware()) );
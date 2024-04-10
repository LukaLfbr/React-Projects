import {legacy_createStore as createStore, combineReducers} from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    combineReducers({
        dragonReducer: dragonReducer,
        knightReducer: knightReducer
    }),
    composeWithDevTools()
)


export default store
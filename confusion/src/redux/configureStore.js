import {applyMiddleware, combineReducers, createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
//import { Reducer, initialState } from "./reducer";
import {Dishes} from "./dishes";
import {Promotions} from "./promotions";
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import * as ActionCreators from './ActionCreators'
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    /*
    const store = createStore(
        Reducer,
        initialState
    );
    */

    return createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger),
        devToolsEnhancer(ActionCreators.addComment())
    );
}
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
//import { Reducer, initialState } from "./reducer";
import { Dishes } from "./dishes";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Leaders } from "./leaders";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }), undefined,devToolsEnhancer({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
            },
        ));
    /*
    const store = createStore(
        Reducer,
        initialState
    );
    */

    return store;
}
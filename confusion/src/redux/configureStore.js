import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
    const store = createStore(Reducer, undefined,devToolsEnhancer(
        initialState
    ));
    /*
    const store = createStore(
        Reducer,
        initialState
    );
    */

    return store;
}
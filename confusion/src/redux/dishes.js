import * as ActionTypes from './ActionTypes';

export const Dishes = ( state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_DISHES:

        case ActionTypes.DISHES_LOADING:

        case ActionTypes.DISHES_FAILED:

        default:
            return state;
    }
}
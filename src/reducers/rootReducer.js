import { combineReducers } from 'redux';

const burgers = (state=[], action) => {
    switch(action.type){
        default:
            return state;
    }
}

const activeBurger = (state={name: '', hasBun: true, hasPatty: true, toppings: []}, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const rootReducer = combineReducers({burgers, activeBurger});

export default rootReducer;
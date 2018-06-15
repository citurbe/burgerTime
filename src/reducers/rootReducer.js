import { combineReducers } from 'redux';

const burgers = (state={burgerList: []}, action) => {
    switch(action.type){
        case 'RECEIVE_BURGERS':
            return Object.assign({}, {burgerList: action.payload})
        case 'CLEAR_BURGERS':
            return Object.assign({}, {burgerList: []})
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
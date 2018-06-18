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

const toppings = (state={toppingList: []}, action) => {
    switch(action.type){
        case 'RECEIVE_TOPPINGS':
            return Object.assign({}, {toppingList: action.payload})
        default:
            return state;
    }
}

const activeBurger = (state={id: null, name: null, has_bun: true, has_patty: true, toppings: []}, action) => {
    switch(action.type){
        case 'LOAD_BURGER':
            return Object.assign({}, action.payload);
        case 'CLEAR_BURGERS':
            return Object.assign({},{id: null, name: null, has_bun: true, has_patty: true, toppings: []});
        default:
            return state;
    }
}

const rootReducer = combineReducers({burgers, toppings, activeBurger});

export default rootReducer;
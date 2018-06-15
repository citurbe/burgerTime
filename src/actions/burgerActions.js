import { push } from 'connected-react-router'

const API_URL = 'http://ec2-54-152-121-162.compute-1.amazonaws.com/api/burgers/';

export const receiveBurgers = (burgers) => {
    return {type:'RECEIVE_BURGERS', payload: burgers}
}

export const clearBurgers = () => {
    return {type:'CLEAR_BURGERS'}
}

export const searchBurgers = (param) => {
    return dispatch => {
        fetch(API_URL)
        .then(res=>{
            if (res.status >= 400) {
                throw new Error("Bad response from server");
              }
              return res.json()
        })
        .then(data => {
            const filteredData = data.filter(burger=>{
                return burger.toppings.filter(topping => topping.name === param).length > 0;
            });
            dispatch(receiveBurgers(filteredData))}) 
        .catch(err => {
            console.error(err);
          });
    }
}

export const burgerAdded = () => {
    return {type:'BURGER_ADDED'}
}

export const addBurger = (burger) => {
    console.log(burger);
    console.log(JSON.stringify(burger))
    return dispatch => {
        const burgerBody = JSON.stringify(burger);
        fetch(API_URL, {
            method: 'post',
            body: burgerBody,
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .then(res=>{
            console.log(res);
            alert('Burger Added!');
            dispatch(push('/'));
        })
        .catch(err => {
            alert(err);
        })
    }
}

export const deleteBurger = (burgerId) => {
    return dispatch => {
        fetch(API_URL +  burgerId, {
            method: 'delete'
        })
        .then(res=>{
            dispatch(clearBurgers());
            alert('Burger Deleted');
            dispatch(push('/trashed'));
        })
        .catch(err => {
            alert(err);
        })
    }
}
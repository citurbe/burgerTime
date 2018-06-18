import { push } from 'connected-react-router'

const API_URL = 'http://ec2-54-152-121-162.compute-1.amazonaws.com/api/burgers/';
const TOPPING_URL = 'http://ec2-54-152-121-162.compute-1.amazonaws.com/api/toppings/';

export const receiveBurgers = (burgers) => {
    if(burgers.length === 0){
        alert('There are no burgers with that topping.')
    }
    return {type:'RECEIVE_BURGERS', payload: burgers}
}

export const receiveToppings = (toppings) => {
    return {type: 'RECEIVE_TOPPINGS', payload: toppings}
}

export const loadBurger = (burger) => {
    return {type: 'LOAD_BURGER', payload: burger}
}

export const clearBurgers = () => {
    return {type:'CLEAR_BURGERS'}
}

export const startEdit = () => {
    return dispatch => {
        dispatch(push('/edit'));
    }
}

export const getToppings = () => {
    return dispatch => {
        fetch(TOPPING_URL)
        .then(res=> {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
              }
              return res.json()
        })
        .then(data => {
            dispatch(receiveToppings(data));
        })
        .catch(err => {
            console.error(err);
          });
    }
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
            let filteredData;
            if(param === 'none'){
                filteredData = data.filter(burger =>{
                    return burger.toppings.length === 0;
                })
            } else {
                filteredData = data.filter(burger=>{
                    return burger.toppings.filter(topping => topping.name === param).length > 0;
                });
            }
            
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
            dispatch(push('/success'));
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
            dispatch(push('/trashed'));
        })
        .catch(err => {
            alert(err);
        })
    }
}

export const editBurger = (burgerId, burger, removeTopping=false) => {
    return dispatch => {
        burger.id = burgerId;
        const burgerBody = JSON.stringify(burger);
        //api doesn't delete toppings using PUT, so we need to delete and make a new burger if there are fewer toppings in the array
        if(removeTopping){
            fetch(API_URL +  burgerId, {
                method: 'delete'
            })
            .then(res=>{
                fetch(API_URL, {
                    method: 'post',
                    body: burgerBody,
                    headers:{
                        'Content-Type': 'application/json'
                      }
                })
                .then(res=>{
                    dispatch(clearBurgers());
                    dispatch(push('/success'));
                })
                .catch(err => {
                    alert(err);
                })
            })
            .catch(err => {
                alert(err);
            })
        }

        else {
        fetch(API_URL + burgerId + '/', {
            method: 'put',
            body: burgerBody,
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .then(res=>{
            dispatch(clearBurgers());
            dispatch(push('/success'));
        })
        .catch(err => {
            alert(err);
        })
    }
    }
}
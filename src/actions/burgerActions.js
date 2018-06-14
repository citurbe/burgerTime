

const API_URL = 'http://ec2-54-152-121-162.compute-1.amazonaws.com/api/burgers/';

export const receiveBurgers = (burgers) => {
    return {type:'RECEIVE_BURGERS', payload: burgers}
}

export const getAllBurgers = () => {
    return dispatch => {
        fetch(API_URL)
            .then(res=>{
                if (res.status >= 400) {
                    throw new Error("Bad response from server");
                  }
                  return res.json();
            })
            .then(data => dispatch(receiveBurgers(data))) 
            .catch(err => {
                console.error(err);
              });
    }
}
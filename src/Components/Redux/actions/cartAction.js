
import axios from 'axios';


//fetch details in cart according to user data
export const fetchCart = (data) => {

    return {
        type: 'GOT_CART',
        data
    }
};




export const fetchCartData = (name) => {




var user=""
if(name)
user=name
else
user="inCart"
console.log(user)
return (dispatch) => {
    return axios.get('http://localhost:8089/'+user)
            .then(response => {
                console.log("in response" + JSON.stringify(response.data))
                dispatch(fetchCart(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


//posting from cart
export const postCart = (data) => {

    return {
        type: 'POST_CART',
        data
    }
};

export const postCartData = (data) => {

    return (dispatch) => {
        return axios.post(`http://localhost:8089/postCart/`,data)
            .then(response => {
                console.log("in response" + JSON.stringify(response.data))
                dispatch(postCart(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
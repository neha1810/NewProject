
import axios from 'axios';


//fetch details in cart according to user data
export const fetchCart = (data) => {
    console.log("in fetch" + JSON.stringify(data))
    return {
        type: 'gotCart',
        data
    }
};




export const fetchCartData = (name) => {
//     console.log("for cart")
//     console.log(name)
//     var params = new URLSearchParams();
   
//     if(name===undefined || name==="")
//     {
       
//         params.append("userId", "");
       
//     }
//   else{
//     params.append("userId",name);

//     }

  
//     var request = {
//         params: params
//     };
//     return (dispatch) => {
//         return axios.get(`http://localhost:8089/inCart`,request)
console.log("in submit after putting in add to cart action")


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
    console.log("in fetch" + JSON.stringify(data))
    return {
        type: 'postCart',
        data
    }
};

export const postCartData = (data) => {
 console.log(data)
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
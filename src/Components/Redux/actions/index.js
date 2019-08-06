import axios from 'axios';
export const changeinput = (event) => {


    return {
        type: 'inputType',
        name: event.target.name,
        value: event.target.value

    }
}

export const getCheckProduct = (event) => {

    return {
        type: 'getproduct',
        payload: event.target.value
    }
};
//clcik category
// export const linkClick = (event) => {
//   console.log("heyy")
//   console.log(event.target)
//     return {
//       type:'getCategory',
//       payload:event.target.name
//     }
//   };

export const loginInput = (event) => {


    return {
        type: 'loginType',
        name: event.target.name,
        value: event.target.value

    }
}
export const afterDataPost = () => {

    return {
        type: 'submit'

    }
};
export const ValidAdmin = () => {

    return {
        type: 'validAddmin'

    }
};

export const Valid = () => {

    return {
        type: 'valid'

    }
};

export const submit = (productAdded) => {
    console.log("in submit action")
    return (dispatch) => {
        return axios.post(`http://localhost:8089/poducts`, productAdded)
            .then(response => {

                dispatch(afterDataPost())
            })
            .catch(error => {
                throw (error);
            });
    };
};



export const googleSubmit = (data) => {
    console.log("my data" + JSON.stringify(data))
    return {
        type: 'googleSubmit',
        data

    }
};


export const fetchData = (data) => {
    console.log("my data" + JSON.stringify(data))
    return {
        type: 'loginSubmit',
        data

    }
};

export const loginSubmit = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:8089/users`)
            .then(response => {
                console.log("myresponse" + JSON.stringify(response.data))
                dispatch(fetchData(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

//products

export const sortBy = (list) => {
   

console.log("i am in sort")
    return {
        type: 'sort',
        list


    }
}




export const clear = () => {



    return {
        type: 'clear',


    }
}


export const fetchProduct = (data,event) => {
    console.log("in fetch" + JSON.stringify(data))
    return {
        type: 'gotproduct',
        data,
        event
    }
};




export const fetchProductData = (event,arr) => {
    console.log("getting in action")
    console.log(event)
    console.log(arr)
    var params = new URLSearchParams();
    console.log("hey in check")
    if(arr===undefined || arr.length===0)
    {
        console.log("hey in check")
        params.append("category", event);
       
    }
  else{
    params.append("category", event);
    params.append("vendor",arr[0]);
    params.append("vendor",arr[1])
    }

    console.log("hey in check")
    var request = {
        params: params
    };
    return (dispatch) => {
        return axios.get(`http://localhost:8089/poducts`, request)
            .then(response => {
                console.log("in response" + JSON.stringify(response.data))
                dispatch(fetchProduct(response.data,event))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const fetchCart = (data) => {
    console.log("in fetch" + JSON.stringify(data))
    return {
        type: 'gotCart',
        data
    }
};




export const fetchCartData = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:8089/inCart`)
            .then(response => {
                console.log("in response" + JSON.stringify(response.data))
                dispatch(fetchCart(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

// export const updateQuantity = () => {

//     return {
//       type:'quantity'

//     }
//   };
//   export const updateQuantityMinus = () => {

//     return {
//       type:'quantityMinus'

//     }
//   };
//   export const totalSum = (price) => {

//     return {
//       type:'total',
//       payload:price

//     }
//   };
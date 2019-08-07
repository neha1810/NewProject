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

export const loginInput = (event) => {


    return {
        type: 'loginType',
        name: event.target.name,
        value: event.target.value

    }
}

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
//for admin data added

export const afterDataPost = () => {

    return {
        type: 'submit'

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

//to check whether user present or not
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

//product page data
export const fetchProduct = (data,event) => {
    console.log("in fetch" + JSON.stringify(data))
    return {
        type: 'gotproduct',
        data,
        event
    }
};




export const fetchProductData = (event,arr) => {
  
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

//fetch details in cart according to user data
export const fetchCart = (data) => {
    console.log("in fetch" + JSON.stringify(data))
    return {
        type: 'gotCart',
        data
    }
};




export const fetchCartData = (name) => {
    var params = new URLSearchParams();
   
    if(name===undefined || name==="")
    {
       
        params.append("userId", "");
       
    }
  else{
    params.append("userId",name);

    }

  
    var request = {
        params: params
    };
    return (dispatch) => {
        return axios.get(`http://localhost:8089/inCart`,request)
            .then(response => {
                console.log("in response" + JSON.stringify(response.data))
                dispatch(fetchCart(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


//give the data according to product page detail button click
export const detail = (data) => {
    console.log("in detail" + JSON.stringify(data))
    return {
        type: 'detail',
        data
    }
};




export const getDetails = (id) => {
 
    return (dispatch) => {
        return axios.get(`http://localhost:8089/poducts/`+id)
            .then(response => {
                console.log("in response" + JSON.stringify(response.data))
                dispatch(detail(response.data))
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
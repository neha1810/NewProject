import axios from 'axios';

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


//products

export const sortBy = (list) => {
   

    console.log("i am in sort")
        return {
            type: 'sort',
            list
    
    
        }
    }
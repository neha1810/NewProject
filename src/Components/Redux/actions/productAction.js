import axios from 'axios';

//product page data and detail
export const fetchProduct = (data,event) => {

    return {
        type: 'GOT_PRODUCT',
        data,
        event
    }
};




export const fetchProductData = (event,arr) => {
 
    var params = new URLSearchParams();
 
    if(arr===undefined || arr.length===0)
    {
        
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
              
                dispatch(fetchProduct(response.data,event))
            })
            .catch(error => {
                throw (error);
            });
    };
};




//give the data according to product page detail button click
export const detail = (data) => {
 
    return {
        type: 'DETAIL',
        data
    }
};




export const getDetails = (id) => {
 
    return (dispatch) => {
        return axios.get(`http://localhost:8089/poducts/`+id)
            .then(response => {
    
                dispatch(detail(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


//products

export const sortBy = (list) => {
   

   
        return {
            type: 'SORT',
            list
    
    
        }
    }
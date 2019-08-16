// import axios from 'axios'


// export const gettingdetail = (data) =>{
  
//     console.log(data)
//     return {
//         type:'homePageData',
//         data
//     }
// };




//     export const getHomeDetails = () => {
 
//         return (dispatch) => {
//             return axios.get(`http://localhost:8089/poducts`)
//                 .then(response => {
        
//                     dispatch(gettingdetail(response.data))
//                 })
//                 .catch(error => {
//                     throw (error);
//                 });
//         };
//     };

// export const detailsGet = (id) => {
//     console.log(id)
 
//     return (dispatch) => {
//         return axios.get(`http://localhost:8089/products/`+id)
//             .then(response => {
//                 console.log(id,"id")
               
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };

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


import axios from 'axios'



export const gethomePageData = (data) =>{
  
    
    return {
        type:'homePageData',
        data
    }
};



export const posthomePageData = () => {
   
    return (dispatch) => {
        return axios.get(`http://localhost:8089/products`)
            .then(response => {
             
                dispatch(gethomePageData(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};



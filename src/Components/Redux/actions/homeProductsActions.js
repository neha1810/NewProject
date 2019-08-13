import axios from 'axios'


export const gethomePageData = (data) =>{
  
    
    return {
        type:'homePageData',
        data
    }
};



export const posthomePageData = () => {
   
    return (dispatch) => {
        return axios.get(`http://localhost:8089/products/`)
            .then(response => {
                dispatch(gethomePageData(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const detailsGet = (id) => {
 
    return (dispatch) => {
        return axios.get(`http://localhost:8089/poducts/`+id)
            .then(response => {
                console.log(id,"id")
                dispatch(gethomePageData(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


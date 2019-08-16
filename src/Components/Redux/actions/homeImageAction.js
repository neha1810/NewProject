import axios from 'axios';






//give the data according to product page detail button click
export const detailget = (data) => {
  
    return {
        type: 'homePageData',
        data
    }
};




export const getDetailsHome = () => {
   
    return (dispatch) => {
        return axios.get(`http://localhost:8089/poducts?category=Entertainment`)
            .then(response => {
               
                dispatch(detailget(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


//products


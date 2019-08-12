import axios from 'axios';
import Cookies from 'universal-cookie';

//adding to cart(post)

//close pop
export const closePopup = () => {
   

    
        return {
            type: 'CLOSE_POPUP',
        
    
    
        }
    }
export const addToCart = () => {
   
    return {
        type: 'ADD_TO_CART'
      
    }
};

    export const Submitdetails = (data) => {
     
        const cookies = new Cookies();
        let user=""
        if(cookies.get('name'))
        user=cookies.get('name')
        else
        user="inCart"
      
        return (dispatch) => {
            return axios.post('http://localhost:8089/'+user,data)
                .then(response => {
                  
                    dispatch(addToCart())
                    
                })
                .catch(error => {
                    throw (error);
                });
        };
    };
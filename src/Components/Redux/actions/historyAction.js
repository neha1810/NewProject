import axios from 'axios';
import Cookies from 'universal-cookie';



//history according things added in cart
    export const historyData = (data) => {
       
        return {
            type: 'HISTORY',
            data
    
        }
    };
    
    export const historyDetails = () => {
        
    
      
        const cookies = new Cookies();
        var user=""
        if(cookies.get('name'))
        user=cookies.get('name')
        else
        user="inCart"
      
  
        return (dispatch) => {
            return axios.get('http://localhost:8089/'+user)
                .then(response => {
                  
                    dispatch(historyData(response.data))
                })
                .catch(error => {
                    throw (error);
                });
        };
    };
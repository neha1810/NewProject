import axios from 'axios';
import Cookies from 'universal-cookie';




    export const historyData = (data) => {
        console.log("my history data" + JSON.stringify(data))
        return {
            type: 'history',
            data
    
        }
    };
    
    export const historyDetails = () => {
        
        console.log("in submit after putting in add to cart action")
      
        const cookies = new Cookies();
        var user=""
        if(cookies.get('name'))
        user=cookies.get('name')
        else
        user="inCart"
        console.log(user)
  
        return (dispatch) => {
            return axios.get('http://localhost:8089/'+user)
                .then(response => {
                    console.log("my history response" + JSON.stringify(response.data))
                    dispatch(historyData(response.data))
                })
                .catch(error => {
                    throw (error);
                });
        };
    };
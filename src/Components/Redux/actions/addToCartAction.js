import axios from 'axios';
import Cookies from 'universal-cookie';



    export const Submitdetails = (data) => {
        console.log("in submit after putting in add to cart action")
        console.log(data)
        const cookies = new Cookies();
        var user=""
        if(cookies.get('name'))
        user=cookies.get('name')
        else
        user="inCart"
        console.log(user)
        return () => {
            return axios.post('http://localhost:8089/'+user,data)
                .then(response => {
                    console.log(response)
                    
                })
                .catch(error => {
                    throw (error);
                });
        };
    };
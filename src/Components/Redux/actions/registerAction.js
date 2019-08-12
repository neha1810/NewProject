import axios from 'axios';
//to register
//close pop
export const closePopup = () => {
   

  
        return {
            type: 'CLOSE_POPUP',
        
    
    
        }
    }


    export const registerInput = (event) => {


        return {
            type: 'REGISTER_TYPE',
            name: event.target.name,
            value: event.target.value
    
        }
    }

    
//to check whether user present or not
export const registerData = (data) => {
console.log("hey")
    return {
        type: 'REGISTER_SUBMIT',
        data

    }
};


export const registerSubmit = (userAdded) => {
    console.log("hiy")
    return (dispatch) => {
        return axios.post(`http://localhost:8089/users`,userAdded)
            .then(response => {
             
                dispatch(registerData(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};



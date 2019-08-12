import axios from 'axios';
//for login
//close pop
export const closePopup = () => {
   


        return {
            type: 'CLOSE_POPUP',
        
    
    
        }
    }


    export const loginInput = (event) => {


        return {
            type: 'LOGIN_TYPE',
            name: event.target.name,
            value: event.target.value
    
        }
    }

    
//to check whether user present or not
export const fetchData = (data) => {

    return {
        type: 'LOGIN_SUBMIT',
        data

    }
};

export const loginSubmit = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:8089/users`)
            .then(response => {
           
                dispatch(fetchData(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const googleSubmit = (data) => {

    return {
        type: 'GOOGLE_SUBMIT',
        data

    }
};
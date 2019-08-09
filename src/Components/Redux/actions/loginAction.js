import axios from 'axios';

//close pop
export const closePopup = () => {
   

    console.log("i am in sort")
        return {
            type: 'closePopup',
        
    
    
        }
    }


    export const loginInput = (event) => {


        return {
            type: 'loginType',
            name: event.target.name,
            value: event.target.value
    
        }
    }

    
//to check whether user present or not
export const fetchData = (data) => {
    console.log("my data" + JSON.stringify(data))
    return {
        type: 'loginSubmit',
        data

    }
};

export const loginSubmit = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:8089/users`)
            .then(response => {
                console.log("myresponse" + JSON.stringify(response.data))
                dispatch(fetchData(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const googleSubmit = (data) => {
    console.log("my data" + JSON.stringify(data))
    return {
        type: 'googleSubmit',
        data

    }
};
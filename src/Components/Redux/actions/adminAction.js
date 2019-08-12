import axios from 'axios';
export const changeinput = (event) => {


    return {
        type: 'INPUT_TYPE',
        name: event.target.name,
        value: event.target.value

    }
}


//for admin data added

export const afterDataPost = () => {

    return {
        type: 'SUBMIT'

    }
};
export const submit = (productAdded) => {

    return (dispatch) => {
        return axios.post(`http://localhost:8089/poducts`, productAdded)
            .then(response => {

                dispatch(afterDataPost())
            })
            .catch(error => {
                throw (error);
            });
    };
};









//close pop up admin
export const closePopupAdmin = () => {
   

   
        return {
            type: 'CLOSE_POPUP_ADMIN',
        
    
    
        }
    }




export const clear = () => {



    return {
        type: 'CLEAR',


    }
}
import axios from 'axios';
export const changeinput = (event) => {


    return {
        type: 'inputType',
        name: event.target.name,
        value: event.target.value

    }
}


//for admin data added

export const afterDataPost = () => {

    return {
        type: 'submit'

    }
};
export const submit = (productAdded) => {
    console.log("in submit action")
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
   

    console.log("i am in sort")
        return {
            type: 'closePopupAdmin',
        
    
    
        }
    }




export const clear = () => {



    return {
        type: 'clear',


    }
}
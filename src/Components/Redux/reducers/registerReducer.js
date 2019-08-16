
const initialState =
{
    password: "",
    username: "",
  
    name: "",

    passwordError:"",
    usernameError:"",
    nameError:"",
    open:false
  

}

const registerReducer = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'REGISTER_TYPE':
           
            state.usernameError=""
            state.passwordError=""
            state.nameError=""
            return { ...state, [action.name]: action.value }


        case 'REGISTER_SUBMIT':
           
          
            if (!state.username) {
                state.usernameError = "Name cannot be empty";
                state.open=true
            }
            else
            state.usernameError=""

            if (!state.password) {
                state.passwordError = "Password cannot be empty";
                state.open=true
            }
            else
            state.passwordError=""

           
            if (!state.name) {
                state.nameError = "Name cannot be empty";
                state.open=true
            }
            else
            state.nameError=""


     


            state.password=""
            state.username=""
            state.name=""
           
           

            return {...state}


        case 'CLOSE_POPUP':
            state.open=false
            return { ...state }

        default: return state
    }
}
export default registerReducer
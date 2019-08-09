
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const initialState =
{
    password: "",
    username: "",
    role: "",
    isLoggedIn: false,
    hasUser: false,
    google: "",
    googleLog: false,
    passwordError:"",
    usernameError:"",
    open:false

}

const LoginReducer = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'loginType':
            state.usernameError=""
            state.passwordError=""
            return { ...state, [action.name]: action.value }


        case 'loginSubmit':
            console.log("in login submit")
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


            for (var i = 0; i < action.data.length; i++) {
                if ((state.username === action.data[i].username) && (state.password === action.data[i].password)) {

                    state.isLoggedIn = true
                    state.hasUser = true

                    cookies.set('name', state.username, { path: '/', maxAge: 100 });
                    cookies.set('role', action.data[i].role, { path: '/', maxAge: 100 });

                }
                else {
                    state.isLoggedIn = false
                    state.hasUser = false

                }
            }


            state.password=""
            state.username=""
           
            console.log(state.usernameError)

            return {...state}

        case 'googleSubmit':
            state.google = action.data;

            state.googleLog = true
            cookies.set('name', state.google.profileObj.name, { path: '/', maxAge: 60 });


            return { ...state }
        case 'closePopup':
            state.open=false
            return { ...state }

        default: return state
    }
}
export default LoginReducer
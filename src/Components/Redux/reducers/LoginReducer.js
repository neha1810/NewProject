
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
    usernameError: "",
    passwordError: "",
    isValid: ""



}

const LoginReducer = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'loginType':

            return { ...state, [action.name]: action.value }


        case 'loginSubmit':



            console.log(state.username)
            console.log(action.data[0].username)
            console.log(state.password)
            console.log(action.data[0].password)
            for (var i = 0; i < action.data.length; i++) {
                if ((state.username === action.data[i].username) && (state.password === action.data[i].password)) {

                    state.isLoggedIn = true
                    state.hasUser = true
                    console.log(state.isLoggedIn)
                    cookies.set('name', state.username, { path: '/', maxAge: 10 });
                    cookies.set('role', action.data[i].role, { path: '/', maxAge: 10 });
                    console.log(cookies.get('role'))
                }
                else {
                    state.isLoggedIn = false
                    state.hasUser = false
                    console.log(state.isLoggedIn)
                }
            }


            state.password = ""

            return initialState

        case 'googleSubmit':
            state.google = action.data;
            console.log("here yay")
            console.log(state.google.profileObj.name)
            state.googleLog = true
            cookies.set('name', state.google.profileObj.name, { path: '/', maxAge: 60 });


            return { ...state }

        case 'valid':





console.log("checking")

            if (!state.username) {
                state.usernameError = "Name cannot be empty";



            }
            if (!state.password) {
                state.passwordError = "Password cannot be empty";


            }



            if (state.usernameError || state.passwordError) {
                console.log("its false")
                state.isValid = false
            }
            else{ console.log("its true")
                state.isValid = true;
        }
            return { ...state }

        default: return state
    }
}
export default LoginReducer
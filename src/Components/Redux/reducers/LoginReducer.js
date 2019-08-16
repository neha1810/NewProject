
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
    passwordError: "",
    usernameError: "",
    open: false,
    roleof: (cookies.get('role') ? cookies.get('role') : ""),
    user: (cookies.get('name') ? cookies.get('name') : "SignIn"),
    log: (cookies.get('name') ? "Log Out" : ""),
    balance: (cookies.get('name') ? "Add Balance" : ""),
    create: (cookies.get('name') ? "" : "create account"),

}

const LoginReducer = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }
    if (action.roleof === 'user')
        action.roleof = ""

    switch (action.type) {

        case 'LOGIN_TYPE':
            state.usernameError = ""
            state.passwordError = ""
            return { ...state, [action.name]: action.value }


        case 'LOGIN_DETAILS':
            if (cookies.get('name')) {
                state.user = action.user
                state.roleof = action.roleof
                state.log = "Log Out"
                state.balance = "Add Balance"
                state.create = ""
            }
            else {
                state.user = "SignIn"
                state.roleof = ""
                state.log = ""
                state.balance = ""
                state.create = "create account"

            }
            return { ...state }


        case 'LOGIN_SUBMIT':
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



            if (!state.username) {
                state.usernameError = "Name cannot be empty";
                state.open = true
            }
            else
                state.usernameError = ""

            if (state.username !== re && state.usernameError ) {

                state.usernameError = "enter valid email";


            }
            else
                state.usernameError = ""

            if (!state.password) {
                state.passwordError = "Password cannot be empty";
                state.open = true
            }
            else
                state.passwordError = ""


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


            state.password = ""
            state.username = ""



            return { ...state }

        case 'GOOGLE_SUBMIT':
            state.google = action.data;

            state.googleLog = true
            cookies.set('name', state.google.profileObj.name, { path: '/', maxAge: 60 });


            return { ...state }
        case 'CLOSE_POPUP':
            state.open = false
            return { ...state }

        default: return state
    }
}
export default LoginReducer
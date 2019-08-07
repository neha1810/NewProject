
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
}

const LoginReducer = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'loginType':

            return { ...state, [action.name]: action.value }


        case 'loginSubmit':



            for (var i = 0; i < action.data.length; i++) {
                if ((state.username === action.data[i].username) && (state.password === action.data[i].password)) {

                    state.isLoggedIn = true
                    state.hasUser = true

                    cookies.set('name', state.username, { path: '/', maxAge: 10 });
                    cookies.set('role', action.data[i].role, { path: '/', maxAge: 10 });

                }
                else {
                    state.isLoggedIn = false
                    state.hasUser = false

                }
            }


            state.password = ""

            return initialState

        case 'googleSubmit':
            state.google = action.data;

            state.googleLog = true
            cookies.set('name', state.google.profileObj.name, { path: '/', maxAge: 60 });


            return { ...state }

        default: return state
    }
}
export default LoginReducer
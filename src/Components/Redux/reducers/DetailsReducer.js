import Cookies from "universal-cookie";


const cookies = new Cookies();

const initialState =
{
    dataDetail: "",
    userId:""
 
}

const DetailsReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'DETAIL':
            state.dataDetail = action.data
            if (cookies.get('name')) {
                state.dataDetail.userId=cookies.get('name')
            }
            else
            state.dataDetail.userId=""
            
            console.log(" detail reducer")
            console.log(state.dataDetail)
            return { ...state }
        default: return state
    }
}
export default DetailsReducer
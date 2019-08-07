

const initialState =
{
    dataDetail: "",
 
}

const DetailsReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'detail':
            state.dataDetail = action.data
            console.log(" detail reducer")
            console.log(state.dataDetail)
            return { ...state }
        default: return state
    }
}
export default DetailsReducer
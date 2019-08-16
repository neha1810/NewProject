
const initialState =
{
    open:false
}

const addToCartReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'ADD_TO_CART':
          
            state.open=true
            return { ...state }
        case 'CLOSE_POPUP':
                    state.open=false
                    return { ...state }
        default: return state
    }
}
export default addToCartReducer
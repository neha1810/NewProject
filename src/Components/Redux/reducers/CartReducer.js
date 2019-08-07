
const initialState =
{
    cart: "",
    quantity: "",
    total: ""
}

const CartReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'gotCart':
            state.cart = action.data
            return { ...state }
        default: return state
    }
}
export default CartReducer
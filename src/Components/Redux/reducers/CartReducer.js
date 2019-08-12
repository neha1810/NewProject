
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

        case 'GOT_CART':
            state.cart = action.data
            return { ...state }
        default: return state
    }
}
export default CartReducer

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

        // case 'quantity':
        //     console.log("add")
        //     state.quantity=Number(state.quantity)
        //     state.quantity = state.quantity + 1

        //     return { ...state}
        // case 'quantityMinus':
        //     console.log("add")
        //   state.quantity=Number(state.quantity)
        //    state.quantity = state.quantity - 1
         
        //     return { ...state}
        // case 'total':
        //     console.log("total")
        //     state.total = state.total + Number(action.payload)
        //     return { ...state}


        default: return state
    }
}
export default CartReducer
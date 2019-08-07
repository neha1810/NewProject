
const initialState =
{
    id: "",
    giftName: "",
    giftPrice: "",
    giftDiscount: "",
    giftVendor: "",
    giftCategory: "",
}
const AdminReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'inputType':

            return { ...state, [action.name]: action.value }

        case 'clear':
            return initialState

        case 'submit':
            return initialState

        default: return state
    }
}
export default AdminReducer
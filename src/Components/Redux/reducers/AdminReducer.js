
const initialState =
{
    id: "",
    giftName: "",
    giftPrice: "",
    giftDiscount: "",
    giftVendor: "",
    giftCategory: "",
    giftidError: "",
    giftnameError: "",
    giftpriceError: "",
    giftdiscountError: "",
    giftvendorError: "",
    giftcategoryError: "",
    open:false
}
const AdminReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'INPUT_TYPE':

            return { ...state, [action.name]: action.value }

        case 'CLEAR':
            return initialState

        case 'SUBMIT':

            if (!state.giftPrice) {
                state.giftpriceError = "Gift price can't be empty"
                state.open=true
            }
            else
                state.giftpriceError = ""

            if (!state.giftName) {
                state.giftnameError = "Gift name can't be empty"
                state.open=true
            }
            else
                state.giftnameError = ""

            if (!state.giftVendor) {
                state.giftvendorError = "Gift vendor can't be empty"
                state.open=true
            }
            else
                state.giftvendorError = ""

            if (!state.giftDiscount) {
                state.giftdiscountError = "Gift discount can't be empty"
                state.open=true
            }
            else
                state.giftdiscountError = ""

            if (!state.giftCategory) {
                state.giftcategoryError = "Gift category can't be empty"
                state.open=true
            }
            else
                state.giftcategoryError = ""

            if (!state.id) {
                state.giftidError = "Gift id can't be empty"
                state.open=true
            }
            else
                state.giftidError = ""

                state.id=""
                state.giftName=""
                state.giftPrice=""
                state.giftDiscount=""
                state.giftVendor=""
                state.giftCategory=""


            return {...state}
            case 'CLOSE_POPUP_ADMIN':
                    state.open=false
                    return { ...state }
        

        default: return state
    }
}
export default AdminReducer
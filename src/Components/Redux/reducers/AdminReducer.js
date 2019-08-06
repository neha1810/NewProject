
const initialState =
{
    id:"",
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
    isValidAdd:""

}

const AdminReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
      }

    switch (action.type) {

        case 'inputType':
            console.log("in type" + JSON.stringify(state))
            return { ...state, [action.name]: action.value }

        case 'clear':
                return initialState
        case 'submit':
          
       
            // console.log("in here"+(state.arr[0]))
            console.log("my state"+JSON.stringify(state))
            // var jobj = {
            
            //     giftName: state.giftName,
           
            // }
            // state.arr.push(jobj)
            // console.log("my array" + JSON.stringify(state.arr))

            return initialState

        case 'validAddmin':
                if (!state.giftName) {
                    state.giftnameError="Name cannot be empty";
              
        
                }
                if (!state.id) {
                    state.giftidError="Id cannot be empty";
                 
        
                }
                if (!state.giftPrice) {
                    state.giftpriceError="Price cannot be empty";
                  
        
                }
                if (!state.giftDiscount) {
                    state.giftdiscountError="Discount cannot be empty";
                  
        
                }
                if (!state.giftVendor) {
                    state.giftvendorError="Vendor cannot be empty";
                  
        
                }
                if (!state.giftCategory) {
                    state.giftcategoryError="Category cannot be empty";
                   
        
                }
             
        
               
                if (state.giftnameError|| state.giftidError||state.giftpriceError||state.giftdiscountError||state.giftcategoryError||state.giftvendorError) {
        
                   state.isValidAdd=false
                }
                else
                state.isValidAdd=true

                return {...state}
        default: return state
    }
}
export default AdminReducer
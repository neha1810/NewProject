const initialState =
{

    productList: [],
    vendor: "",
    dataList:[],
    category:""






}

export default function productReducer(state = [], action) {
    switch (action.type) {
        // case 'getCategory':
        //     console.log("got it")
        //     console.log(action.payload)
        //     state.category=action.payload
        //     return {...state}
        case 'gotproduct':
            console.log("in got product")
              
                state.productList=action.data
                console.log(action.event)
                state.category=action.event
      

             
                    state.dataList= state.productList
            return { ...state };
        case 'sort':
                console.log("i am in sort reducer")
               
                state.dataList=state.dataList.slice(0).sort((a, b) => Number(a.price) - Number(b.price))
                console.log(state.dataList)

            return { ...state };

        default:
            return state;
    }
}
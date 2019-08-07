const initialState =
{

    productList: [],
    vendor: "",
    dataList: [],
    category: ""

}

export default function productReducer(state = [], action) {
    switch (action.type) {

        case 'gotproduct':

            state.productList = action.data

            state.category = action.event

            state.dataList = state.productList
            return { ...state };
        case 'sort':

            state.dataList = state.dataList.slice(0).sort((a, b) => Number(a.price) - Number(b.price))


            return { ...state };

        default:
            return state;
    }
}
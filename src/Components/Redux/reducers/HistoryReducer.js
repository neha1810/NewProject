
const initialState =
{
    historyList:[]
}

const HistoryReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {

        case 'HISTORY':
            state.historyList=action.data
            return { ...state }
        default: return state
    }
}
export default HistoryReducer
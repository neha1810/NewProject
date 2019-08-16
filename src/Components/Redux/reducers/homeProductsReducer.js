export const homePageData = 'homePageData';

const homePageReducer = (state = [], action) => {

    if (action.type === 'homePageData') {

        return action.data
    }

    return state
}

export default homePageReducer;
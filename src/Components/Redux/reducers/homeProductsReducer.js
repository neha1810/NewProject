export const homePageData = 'homePageData';
  
const homePageReducer = (state = [], action) => {
if (action.type === 'homePageData') {
console.log(action.data,"")
return action.data
}
console.log('products', state)
return state
}

export default homePageReducer;
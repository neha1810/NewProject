import { combineReducers } from 'redux';
import addData from './adminReducer';
import logindata from './loginReducer';
import addToCart from './addToCartReducer';
import registerdata  from './registerReducer';
import data from './productReducer';
import mycart from './cartReducer';
import mydetail from './detailsReducer';
import homePageReducer  from './homeProductsReducer'
import history from './historyReducer';
export default combineReducers({
 
    addData: addData,
    logindata:logindata,
    data:data,
    mycart:mycart,
    mydetail:mydetail,
    homePageReducer:homePageReducer,
    history:history,
    registerdata:registerdata,
    addToCart:addToCart


});
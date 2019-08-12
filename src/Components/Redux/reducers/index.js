import { combineReducers } from 'redux';
import addData from './AdminReducer';
import logindata from './LoginReducer';
import addToCart from './addToCartReducer';
import registerdata  from './registerReducer';
import data from './ProductReducer';
import mycart from './CartReducer';
import mydetail from './DetailsReducer';
import homePageReducer  from './homeProductsReducer'
import history from './HistoryReducer';
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
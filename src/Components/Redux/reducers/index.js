import { combineReducers } from 'redux';
import addData from './AdminReducer';
import logindata from './LoginReducer';
import data from './ProductReducer';
import mycart from './CartReducer';
import mydetail from './DetailsReducer';
export default combineReducers({
 
    addData: addData,
    logindata:logindata,
    data:data,
    mycart:mycart,
    mydetail:mydetail

});
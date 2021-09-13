import { combineReducers } from "redux";
import products from './products';
import favorites from './favorites';
import cart from './cart';
import filter from "./filter";
import account from './account';
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
        products,
        account,
        favorites,
        cart,
        filter,
        form:formReducer,
});

import { combineReducers } from "redux";
import products from './products';
import favorites from './favorites';
import cart from './cart';
import filter from "./filter";
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
        products,
        favorites,
        cart,
        filter,
        form:formReducer,
});
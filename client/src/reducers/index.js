import { combineReducers } from "redux";
import products from './products';
import favorites from './favorites';
import cart from './cart';
import filter from "./filter";
import account from './account';
import auth from './auth';
import shops from './shops';
import history from './history';
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
        auth,
        products,
        account,
        favorites,
        cart,
        filter,
        shops,
        history,
        form:formReducer
});

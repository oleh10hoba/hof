import { combineReducers } from "redux";
import products from './products';
import favorites from './favorites';
import cart from './cart';
import filter from "./filter";
import account from './account';
import auth from './auth';
import shops from './shops';
import logging from './login';
import history from './history';
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
        products,
        account,
        favorites,
        logging,
        cart,
        filter,
        shops,
        auth,
        history,
        form:formReducer
});

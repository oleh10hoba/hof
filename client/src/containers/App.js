import { connect } from 'react-redux';
import * as productsActions from '../actions/products';
import * as favoritesActions from '../actions/favorite';
import * as accountActions from '../actions/account';
import * as loginAction from '../actions/auth';
import * as shopsAction from '../actions/shops';
import * as cartActions from '../actions/cart';
import * as historyActions from '../actions/history';
import App from '../components/App';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy.js';
import axios from "axios";
import {getAuth} from "../actions/auth";



const sortBy = (products, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(products, 'price', 'desc');
    case 'price_low':
      return orderBy(products, 'price', 'asc');
    case 'popular':
      return orderBy(products, 'quantity', 'desc');
    default:
      return products;
  }
}


const filterProducts = (products, searchQuery) =>
  products.filter(
    o =>
      o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 
      ||
      o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
        ||
        o.Category_Name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
);

axios.post('http://localhost:3001/getHistory', {
    id: localStorage.getItem("id")}).then((data)=>{
    return data
})



const searchProducts = (products, filterBy, searchQuery) => {
  return sortBy(filterProducts(products, searchQuery), filterBy);
}
const mapStateToProps = ({ products, history, favorites, account, filter, auth, shops }) => ({
    isLogged: auth.isLogged,
    products: 
      products.items &&
      searchProducts(products.items, filter.filterBy, filter.searchQuery),
    favorites: 
      favorites.items &&
      searchProducts(favorites.items, filter.filterBy, filter.searchQuery),
    shops: shops.items,
    history: history.items,
    isReady: favorites.isReady && products.isReady && account.isReady && shops.isReady,
    isAdmin: auth.isAdmin,
    account:
      account.items,
    isChecked: auth.isChecked
  });




const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(Object.assign({},historyActions,cartActions,productsActions, favoritesActions, accountActions, loginAction, shopsAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
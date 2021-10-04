import { connect } from 'react-redux';
import * as productsActions from '../actions/products';
import * as favoritesActions from '../actions/favorite';
import * as accountActions from '../actions/account';
import * as loginAction from '../actions/auth';
import App from '../components/App';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy.js';

const sortBy = (products, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(products, 'price', 'desc');
    case 'price_low':
      return orderBy(products, 'price', 'asc');
    case 'popular':
      return orderBy(products, 'rating', 'desc');
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
);

const searchProducts = (products, filterBy, searchQuery) => {
  return sortBy(filterProducts(products, searchQuery), filterBy);
}
const mapStateToProps = ({ products, favorites, account, filter, auth }) => ({
    products: 
      products.items &&
      searchProducts(products.items, filter.filterBy, filter.searchQuery),
    favorites: 
      favorites.items &&
      searchProducts(favorites.items, filter.filterBy, filter.searchQuery),
    isReady: favorites.isReady && products.isReady && account.isReady,
    isLogged: true,// auth.isLogged,
    account: 
      account.items

  });
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(Object.assign({},productsActions, favoritesActions, accountActions, loginAction), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
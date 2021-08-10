import { connect } from 'react-redux';
import * as productsActions from '../actions/products';
import * as favoritesActions from '../actions/favorite';
import App from '../components/App';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy.js';
// import products from '../reducers/products';
// import favorites from '../reducers/favorites';

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
const mapStateToProps = ({ products, favorites, filter }) => ({
    products: 
      products.items &&
      searchProducts(products.items, filter.filterBy, filter.searchQuery),
    favorites: 
      products.fav, //&&
      //searchProducts(products.fav, filter.filterBy, filter.searchQuery),
    isReady: products.isReady || favorites.isReady,
    isLogged: true
  });
  
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
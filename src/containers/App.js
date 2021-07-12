import { connect } from 'react-redux';
import * as productsActions from '../actions/products';
import App from '../components/App';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy.js';

const sortBy = (products, filterBy) => {
  switch (filterBy) {
    case 'all':
      return products;
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
 
const mapStateToProps = ({ products }) => ({
    products: sortBy(products.items, products.filterBy),
    isReady: products.isReady
  });
  
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
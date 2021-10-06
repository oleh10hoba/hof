import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import ProductCard from '../components/ProductCard';
import * as favoritesActions from '../actions/favorite'


const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, product) => count + (product.id === id ? 1 : 0), 0),
  subCount: cart.items.reduce((count, product) => count - (product.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(Object.assign({},cartActions,favoritesActions), dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCard);
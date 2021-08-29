import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import { bindActionCreators } from 'redux';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart }) => ({
    totalPrice: cart.items.reduce((total, product) => total + product.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id),
    fav: uniqBy(cart.fav, o => o.id),
  }); 

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu); 
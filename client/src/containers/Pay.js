import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import { bindActionCreators } from 'redux';
import uniqBy from 'lodash/uniqBy';
import Pay from "../components/Pay";

const mapStateToProps = ({ cart,account }) => ({
    totalPrice: cart.items.reduce((total, product) => parseFloat((total + product.price).toFixed(2)), 0),
    account : account.items[0]
  }); 

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
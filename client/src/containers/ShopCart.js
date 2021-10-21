import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import { bindActionCreators } from 'redux';
import ShopCart from '../components/ShopCart';
import uniqBy from 'lodash/uniqBy';
import * as shopsAction from '../actions/shops';



// const mapStateToProps = ({ cart }) => ({
//     totalPrice: cart.items.reduce((total, product) => total + product.price, 0),
//     count: cart.items.length,
//     items: uniqBy(cart.items, o => o.id),
//     fav: uniqBy(cart.fav, o => o.id),
//   }); 



const mapStateToProps = ({ cart }, { id }) => ({
  totalPrice: cart.items.reduce((total, product) => parseFloat((total + product.price).toFixed(2)), 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id),
    fav: uniqBy(cart.fav, o => o.id),
  addedCount: cart.items.reduce((count, product) => count + (product.id === id ? 1 : 0), 0),
  subCount: cart.items.reduce((count, product) => count - (product.id === id ? 1 : 0), 0),
})


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);


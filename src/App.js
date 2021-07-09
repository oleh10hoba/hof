import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { setProducts } from './actions/products';

class App extends Component{
  render() {
    const { products } = this.props.products ;
    const { setProducts } = this.props;
    const newProducts = [
      {
        id: 0,
        title: 'Shopping Cart' + ' ' + new Date()
      }
    ];
    return (
      <div className="container ">
        <h1>HOF</h1>
        <h2>{newProducts[0].title}</h2> 
        <button onClick={setProducts.bind(this, newProducts)}>SET NEW PRODUCTS</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

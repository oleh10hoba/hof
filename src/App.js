import React, {Component} from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { setProducts } from './actions/products';
import products from './products.json';
import axios from 'axios';

class App extends Component{
  componentWillMount(){
    const { setProducts } = this.props;
    axios.get('./products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    return (
      
      <div className="container ">
        <ul>
          {!products
          ? '...Loading...' 
          : products.map(product => (
            <li><b>{product.title}</b> - {product.author}</li>
          ))}
        </ul>
        <h1>HOF</h1>
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => ({
  products: products.items
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

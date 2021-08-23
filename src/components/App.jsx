import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch,  Route, Link} from "react-router-dom";
import Menu from '../containers/Menu';
import { Card, Container } from 'semantic-ui-react';
import Product from '../containers/Product';
import Filter from '../containers/Filter';
import Login from '../components/Login'
import Favorite from './Favorite';
import Account from './Account';
import Contact from './Contact';
import Registration from './Registration';
import Axios from "axios";

import {useState} from "react";

// const [productList, setProductList] = useState([]);
// const [productList, setProductList] = this.setState();
//     function getProduct() {
//       Axios.post('http://localhost:3001/products').then((res) => {
//         console.log(res)});
//     };
class App extends Component{
  componentWillMount(){ 
    const { setProducts, setFavorites } = this.props;
    // axios.get('/favorites.json').then(({ data }) => {
    //   setFavorites(data);
    // });
    // const testData = require('../favorites.json');
    // setFavorites(testData);
    // axios.get('/products.json').then(({ data }) => {
    //   setProducts(data);
    // });
    
  }
  
  render() {
    const { products, favorites, isReady, isLogged } = this.props;
    return (
      <div >
         {/* <button onClick={getProduct()}>Show products</button> */}
        <Router className="Router">
          <Menu/>
          <Route path="/registration">
              <Registration />
          </Route>
          <Route path="/favorite">
              {/* <Favorite/> */}
            <Container>
                <Filter />
                <Card.Group itemsPerRow={8}>
                  {!isReady
                    ? 'Loading...'
                    : <Product/>
                    // : products.map((product, i) => 
                    //   <ProductCard key={i} {...product}/>
                    // )
                  }
                
                </Card.Group>
                <h1>HOF</h1>
              </Container>
          </Route>
          <Route path="/account">
            <Account/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
              <Login isLogged={isLogged}/>
          </Route>  
          <Route path="/shop">
            {isLogged ?
              <Container>
                <Filter />
                {/* <Card.Group itemsPerRow={8}>
                  {!isReady
                    ? 'Loading...'
                    : products.map((product, i) => 
                      <ProductCard key={i} {...product}/>
                    )
                  }
                </Card.Group> */}
                <h1>HOF</h1>
              </Container>
              :
              <Login isLogged={isLogged}/>
            }
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;
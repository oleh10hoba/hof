import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch,  Route, Link} from "react-router-dom";
import Menu from '../containers/Menu';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from '../containers/ProductCard';
import Filter from '../containers/Filter';
import Login from '../components/Login'
import Favorite from './Favorite';

class App extends Component{
  componentWillMount(){ 
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, isReady } = this.props;
    return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/favorite">
            <Favorite/>
          </Route>
          <Route path="/shop">
            <Container>
              <Menu/>
              <Filter />
              <Card.Group itemsPerRow={8}>
                {!isReady
                  ? 'Loading...'
                  : products.map((product, i) => 
                    <ProductCard key={i} {...product}/>
                  )
                }
              </Card.Group>
              <h1>HOF</h1>
        
            </Container>
          </Route>
        </Router>
    );
  }
}
export default App;
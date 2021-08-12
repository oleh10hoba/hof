import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch,  Route, Link} from "react-router-dom";
import Menu from '../containers/Menu';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from '../containers/ProductCard';
import Filter from '../containers/Filter';
import Login from '../components/Login'
import Favorite from './Favorite';
import Account from './Account';
import Contact from './Contact';
import Registration from './Registration';

class App extends Component{
  componentWillMount(){ 
    const { setProducts, setFavorites } = this.props;
    // axios.get('/favorites.json').then(({ data }) => {
    //   setFavorites(data);
    // });
    // const testData = require('../favorites.json');
    // setFavorites(testData);
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, favorites, isReady, isLogged } = this.props;
    return (
      <div >
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
                    : products.map((product, i) => 
                      <ProductCard key={i} {...product}/>
                    )
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
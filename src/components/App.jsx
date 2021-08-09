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
import '../css/main.css';

class App extends Component{
  componentWillMount(){ 
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, isReady, isLogged } = this.props;
    return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                  <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/account">Konto</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </nav>
     
          <Route path="/registration">
              <Registration />
          </Route>
          <Route path="/favorite">
            <Favorite/>
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
              :
              <Login isLogged={isLogged}/>
            }
          </Route>
        }
        </Router>
    );
  }
}
export default App;
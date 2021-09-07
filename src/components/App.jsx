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
    const { setProducts, setFavorites, setAccount } = this.props;
    // axios.get('/favorites.json').then(({ data }) => {
    //   setFavorites(data);
    // });
    // const testData = require('../favorites.json');
    // setFavorites(testData);
    axios.get('http://localhost:3001/getfavorites').then(({ data }) => {
      setFavorites(data);
    });
    axios.get('http://localhost:3001/getproducts').then(({ data }) => {
      setProducts(data);
    });
    axios.get('http://localhost:3001/getaccount').then(({ data }) => {
      setAccount(data);
    });
  }
 

  render() {
    const { products, favorites, account, isReady, isLogged } = this.props;
    return (
      <div >
        <Router className="Router">
          <Menu/>
          <Route path="/registration">
              <Registration />
          </Route>
          <Route path="/favorite" >
            <Container>
                <Filter />
                <Card.Group itemsPerRow={8}>
                  {console.log("Favorites je:",favorites)}
                  {!isReady
                    ? 'Loading...'
                    : 
                    favorites.map((product, i) =>
                      <ProductCard key={i} {...product}/>
                    )
                  }
                </Card.Group>
                <h1>HOF</h1>
              </Container>
          </Route>
          <Route path="/account">
            {console.log("APP data:", account)}
            {/* {console.log("APP data:", account.length)} */}
            {/* {console.log("APP data:", account.indexOf(1))} */}
            {!isReady
              ? 'Loading...'
              :  account.map((product, i) => 
              <Account key={i} {...product}/>
            )
            }
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
                {console.log("Products je:",products)}
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
import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Menu from '../containers/Menu';
import Pay from '../containers/Pay';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from '../containers/ProductCard';
import Filter from '../containers/Filter';
import Login from '../components/Login'
import Account from './Account';
import Contact from './Contact';
import Registration from './Registration';
import ShopCart from '../containers/ShopCart';
import Admin from './Admin'
import { login } from '../actions/auth';

class App extends Component{
  componentWillMount(){ 
    const { setProducts, setFavorites, setAccount } = this.props;
    axios.post('http://localhost:3001/getfavorites', {id : localStorage.getItem("id")}).then(({ data }) => {
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
          <Menu isLogged={isLogged}/>
            <Route path="/shopcart"> 
              {isLogged 
                ? 
                  <ShopCart/>
                :
                  <Login isLogged={isLogged}/>
              }
            </Route>
          <Route path="/pay">
            {isLogged 
              ? 
                <Pay/>
              :
                <Login isLogged={isLogged}/>
            }
          </Route>
          <Route path="/admin">
            {isLogged ?
              <Admin />
              :
              <Login isLogged={isLogged}/>
            }
          </Route>
          <Route path="/registration">
            {isLogged 
              ?
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
                </Container>
              :
                <Registration />
          }
          </Route>
          <Route path="/favorite" >
            {isLogged ?
              <Container>
                  <Filter />
                  <Card.Group itemsPerRow={8}>
                    {!isReady
                      ? 'Loading...'
                      : 
                      favorites.map((product, i) =>
                        <ProductCard setf key={i} {...product}/>
                      )
                    }
                  </Card.Group>
                </Container>
                :
                <Login isLogged={isLogged}/>
            }
          </Route>
          <Route path="/account">
            {isLogged 
              ? 
                !isReady
                  ? 'Loading...'
                  :  account.map((product, i) => 
                  <Account key={i} {...product}/>
                )
              :
                <Login isLogged={isLogged}/>
            }
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
          {!isLogged ?
            <Login isLogged={isLogged}/> 
            :
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
              </Container>
            }
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
import React, {Component, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import Menu from '../containers/Menu';
import Pay from '../containers/Pay';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from '../containers/ProductCard';
import Filter from '../containers/Filter';
import Login from '../containers/Login'
import Account from './Account';
import Contact from './Contact';
import Registration from './Registration';
import ShopCart from '../containers/ShopCart';
import Admin from './Admin'
import History from "../containers/History";





class App extends Component{




  componentWillMount(){
    const {getAuth, setCart , setHistory, products, setProducts, setFavorites, setAccount, setShops,isLogged } = this.props;





    getAuth()


    axios.get('http://localhost:3001/getfavorites', {
      headers:{
        "access-token": localStorage.getItem("jwtToken")
      }
    }).then(({ data }) => {
      if(data === "You are not logged in"){
      return false
    }
      else
      setFavorites(data);
    });

    axios.get('http://localhost:3001/getproducts').then(({ data }) => {
      setProducts(data);
    });
    
    axios.get('http://localhost:3001/getaccount', {
      headers:{
        "access-token": localStorage.getItem("jwtToken")
      }
    }).then(({ data }) => {
      if(data === "You are not logged in"){
        return false
      }
      else
      setAccount(data);
    });
    axios.get('http://localhost:3001/getshops').then(({ data }) => {
      setShops(data);
    });

    axios.get('http://localhost:3001/refreshCart', {
      headers:{
        "access-token": localStorage.getItem("jwtToken")
      }
    }).then(({data}) => {
      if(data === "You are not logged in"){
        return false
      }
      else
      setCart(data)
    });

    axios.get('http://localhost:3001/getHistory', {
      headers:{
        "access-token": localStorage.getItem("jwtToken")
      }
    }).then(({data}) => {
      if(data === "You are not logged in"){
        return false
      }
      else
      setHistory(data)
    });



  }

  render() {



    const { products, favorites, account, shops, isReady, isLogged,isAdmin ,isChecked } = this.props;
if(isChecked)
    return (
      <div >
        <Router className="Router">
          <Menu isAdmin = {isAdmin} isLogged={isLogged}/>
            <Route path="/shopcart"> 
              {isLogged 
                ? 
                !isReady 
                ? 'Loading...':
                  <ShopCart shops={shops} isReady={isReady}/>
                :
                  <Login isLogged={isLogged}/>
              }
            </Route>

          <Route path="/history">
            {isLogged
                ?
                !isReady
                    ? 'Loading...':
                    <History  isReady={isReady}/>
                :
                <Login isLogged={isLogged}/>
            }
          </Route>
          <Route path="/pay">
            {isLogged 
              ?
                <Pay  />
              :
                <Login isLogged={isLogged}/>
            } 
          </Route>

          <Route path="/admin">
            {isLogged ?
            !isReady 
              ? 'Loading...':
                !isAdmin ? 'Nie jesteś adminem' :
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
                      <ProductCard key={i} {...product} isFavorite={ (favorites.filter(x => x.id === product.id).length===0 ? false : true)}/>
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
                        <ProductCard setf key={i} {...product} isFavorite={true}/>
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
          <Route path="/shop">
            {isLogged ?
                <Container>
                  <Filter />

                  <Card.Group itemsPerRow={8}>
                    {!isReady
                        ? 'Loading...'
                        : products.map((product, i) =>
                            <ProductCard key={i} {...product} isFavorite={ (favorites.filter(x => x.id === product.id).length===0 ? false : true)}/>
                        )
                    }
                  </Card.Group>
                </Container>
                :
                <Redirect to="/login" />
            }
          </Route>
          <Route path="/login">
          {!isLogged ?
            <Login isLogged={isLogged}/>
            :
              <Redirect to="/shop" />
            }
          </Route>  

        </Router>

      </div>
    );
else return (<div></div>)
  }
}
export default App;
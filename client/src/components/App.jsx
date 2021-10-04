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


class App extends Component{
  componentWillMount(){ 
    const { setProducts, setFavorites, setAccount } = this.props;
    // axios.get('/favorites.json').then(({ data }) => {
    //   setFavorites(data);
    // });
    // const testData = require('../favorites.json');
    // setFavorites(testData);
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
  // componentDidMount() {
  //   const handle = this.props.match.params;
  //   const { total } = this.props.location.state 
  // }
  handleLogChange=()=>{
   
  }
  
  render() {
    const { products, favorites, account, isReady, isLogged } = this.props;
    // const { handle } = this.props.match.params
    // const { totalValue } = this.props.location.state;
  //   function Profile () {
  //     const location = useLocation()
  //     const { from } = location.state
   
  //     // return (
  //     //   ...
  //     // )
  //  }
  // const handle = this.props.match.params;
  // //   const { total } = this.props.location.state 
  // var isLog = this.div;
  // this.props.logg(isLog);
    return (
      <div >
        <Router className="Router">
          {console.log()}
          <Menu isLogged={isLogged}/>
          <Route path="/shopcart">
            <ShopCart/>
          </Route>
          <Route path="/pay">
            <Pay/>
          </Route>
          <Route path="/registration">
              <Registration />
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
                        <ProductCard key={i} {...product}/>
                      )
                    }
                  </Card.Group>
                </Container>
                :
                <Login isLogged={isLogged}/>
            }
          </Route>
          {isLogged &&
          <Route path="/account">
            {!isReady
              ? 'Loading...'
              :  account.map((product, i) => 
              <Account key={i} {...product}/>
            )
            }
          </Route>}
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
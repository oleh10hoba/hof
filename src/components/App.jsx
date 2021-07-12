import React, {Component} from 'react';
import axios from 'axios';
import Menu from './Menu';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from './ProductCard';
import Filter from '../containers/Filter';

class App extends Component{
  componentWillMount(){ 
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, isReady, filterBy } = this.props;
    return (
      <Container>
        <Menu/>
        <Filter />
        {/* <Card.Group itemsPerRow={4}> */}
          {!isReady
            ? 'Loading...'
            : products.map((product, i) => 
              <ProductCard key={i} {...product}/>
            )
          }
        {/* </Card.Group> */}
        <h1>HOF</h1>
  
      </Container>
    );
  }
}
export default App;
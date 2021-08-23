import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { addToCart } from '../actions/cart';
import {useState} from "react";
import Axios from "axios";
import ProductCard from './ProductCard';

const Product = () => {
    // const { id, name, description, image, price, rating, addToCart, addedCount} = product;  
    const [productList, setProductList] = useState([]);
    // const getProduct = () => {
    //     Axios.get('http://localhost:3001/products').then((res) => {
    //         setProductList(res.data);
    //         console.log("suda da")
    //     });
    //   }

      return(
        <div>
            {Axios.get('http://localhost:3001/products').then((res) => {
            setProductList(res.data);
            console.log("suda da")
        })}
        <h1>{productList.length}</h1>
        {productList.map((val, key) => {
            
          <ProductCard><h1>+</h1></ProductCard>
        })}
        </div>
      )
      // <div>{val.title}</div>
      // <Card>
      //   <h1>1</h1>
      //     {/* <Image src={image}/> */}
      //     <Card.Content>
      //     {/* <Card.Header>{name}</Card.Header> */}
      //     <Card.Meta>
      //       {/* <span className="date">{description}</span> */}
      //     </Card.Meta>
      //   </Card.Content>
      //   <Card.Content extra>
      //     <a>
      //       <Icon name="money" />
      //       {/* {price} */}
      //     </a>
      //   </Card.Content>
      //   <Button 
      //     // onClick={addToCart.bind(this, product)}
      //   >
      //     Dodaj do kosza
      //     {/* {addedCount > 0  && `(${addedCount})`} */}
          
      // </Button>
      // </Card>
    
    
};

export default Product;

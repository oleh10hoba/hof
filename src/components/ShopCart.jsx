import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch,  Route, Link} from "react-router-dom";

const CartComponent = product => {
    const {addToCart, subFromCart, addedCount, subCount, totalPrice, count} = product;
    return(
        <List selection divided verticalAlign="middle">
            
            <List.Item>
                <List.Content floated="right">
                <Button 
                    // onClick={removeFromCart.bind(this, id)}
                    onClick={addToCart.bind(this, product)} 
                    color="green"
                >
                    +
                    {console.log("!!!", count)}
                    {/* {product.addedCount} */}
                    {/* {addedCount > 0  && `(${addedCount})`}   */}
                </Button>
                <Button 
                    onClick={subFromCart.bind(this, product)} 
                    color="orange"
                >
                    -
                    {product.totalPrice}!
                </Button>
                <Button 
                    onClick={product.removeFromCart.bind(this, product.id)} 
                    color="red"
                >
                    Usuń
                </Button>
                </List.Content>
                <Image avatar src={product.image} />
                <List.Content>{product.title}</List.Content>
                </List.Item>
        </List>
    );
};

const ShopCart = ({ totalPrice, count, items }) => (
     <>
            {items.map(product => (
              <CartComponent {...product} />
            ))}
            <h1>!{totalPrice}!</h1>
            {/* <h1>!{items}!</h1> */}
          </>
        
);

export default ShopCart;
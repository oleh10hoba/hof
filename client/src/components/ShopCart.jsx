import React, { useState } from 'react';
import { List, Button, Image } from 'semantic-ui-react';
import {Field, reduxForm} from "redux-form";
import {Switch,  Redirect} from 'react-router-dom'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Pay from './Pay';

const CartComponent = product => {
    const {addToCart, subFromCart,  count} = product;
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

const ShopCart = ({ totalPrice, count, items }) => {
// class ShopCart extends React.Component ( {totalPrice, count, items }) {
    // onTrigger = (event) => {
    //     this.props.parentCallback(event.target.myname.value);
    //     event.preventDefault();
    // }
    return(
    // render(){
     <>
            {items.map(product => (
              <CartComponent {...product} />
            ))}
            <div>
                {/* <h1>Do zapłaty: {totalPrice}!</h1> */}
                { totalPrice > 0 
                ? <form 
                    // onSubmit = {this.onTrigger}
                    >
                <Link to={{
                            pathname:"/pay",
                            state: {
                                vestvalue:"heelo",
                                totalPrice:totalPrice
                            }
                        }}
                        total={totalPrice}
                    >
                        <button type = "submit" value = "Submit"><h2>Zapłać {totalPrice}</h2></button></Link>
                        </form>  
                :   <h2>Kosz jest pusty</h2>
                 
}
            </div>
         </>
    )
        
};

export default ShopCart;
import React, { useState } from 'react';
import { List, Button, Image } from 'semantic-ui-react';
import {Field, reduxForm} from "redux-form";
import {Switch,  Redirect} from 'react-router-dom'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Pay from './Pay';
import account from '../reducers/shops';
import axios from "axios";
import userEvent from "@testing-library/user-event";

const CartComponent = product => {
    const {addToCart, subFromCart,  count} = product;
    return(

        <List selection divided verticalAlign="middle">
            <List.Item>
                {console.log(product)}
                <List.Content floated="right">
                <Button 
                    // onClick={removeFromCart.bind(this, id)}

                    // onClick={addToCart.bind(this, product)}
                    color="green"

                >
                    +
                    {/* {product.addedCount} */}
                    {/* {addedCount > 0  && `(${addedCount})`}   */}
                </Button>
                <Button
                    // onClick={product.subFromCart.bind(this, product.id)}
                    color="orange"
                >
                    -
                </Button>
                <Button
                    // onClick={product.removeFromCart.bind(this, product.id)}
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

const ShopCart = (props) => {


     const {  totalPrice, count, items, account, shops, isReady,setCart, addToCart } = props;
    axios.post('http://localhost:3001/refreshCart', {
        userId: localStorage.getItem("id")}).then(({data}) => {
        props.setCart(data)
    });
    return(
     <>
            {items.map(product => (
              <CartComponent {...product} />
            ))}
            <div>
                { totalPrice > 0
                ?
                <form
                    // onSubmit = {this.onTrigger}
                    >
                    <div>
                        <label for="shop-select">Wybierz sklep:</label>

                        <select name="shops" id="shop-select">
                            <option value="">--WYbierz opcje--</option>
                            { !isReady
                                ? 'Loading...'
                                : shops.map((shop, i) =>
                                    <option value={shop.id}>{shop.address}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <label for="shop-select">Wybierz dostawę lub odbior osobisty w sklepie:</label>
                        <select name="reception" id="reception-select">
                            <option value="">--Wybierz opcje--</option>
                            <option value="delivery">Dostawa</option>
                            <option value="personal_pickup">Odbior osobisty</option>
                        </select>
                    </div>
                    <div>
                        <label for="shop-select">Wybierz metodę płatności:</label>
                        <select name="payment" id="payment-select">
                            <option value="">--Wybierz opcje--</option>
                            <option value="card">Karta</option>
                            <option value="account">Konto</option>
                            <option value="blik">BLIK</option>
                        </select>
                    </div>
                        <Link to={{
                                    pathname:"/pay",
                                    state: {
                                        totalPrice:totalPrice
                                    }
                                }}
                            >
                                <button type = "submit" value = "Submit"><h2>Zapłać {totalPrice}</h2></button>
                        </Link>
                </form>
                :   <h2>Kosz jest pusty</h2>

}
            </div>
         </>
    )
        
};

export default ShopCart;
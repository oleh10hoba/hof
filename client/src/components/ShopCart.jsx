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
import Select from 'react-select'

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

    const receptions = [
        { value: 'delivery', label: 'Dostawa do domu' },
        { value: 'personal_pickup', label: 'Odbiór osobisty' }
    ]
    const payments = [
        { value: 'card', label: 'Karta' },
        { value: 'blik', label: 'BLIK' }
    ]
    const shops_sel = 
        shops.map((shop, i) =>
            ({value:shop.id, label:shop.address}))
        
   
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
                        <Select options={receptions} placeholder="Wybierz dostawę lub odbior osobisty w sklepie:"/>
                        <Select options={shops_sel} placeholder="Wybierz slep z którego chcesz produkty:"/>
                        {/* <Select  options={payments} placeholder="Wybierz metodę płatności:"/> */}
                        <Link to={{
                                    pathname:"/pay",
                                    state: {
                                        totalPrice:totalPrice,
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
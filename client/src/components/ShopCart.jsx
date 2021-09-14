import React, { useState } from 'react';
import { List, Button, Image } from 'semantic-ui-react';
import {Field, reduxForm} from "redux-form";
import {Switch,  Redirect} from 'react-router-dom'
import {BrowserRouter as Router, Route} from "react-router-dom";

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



const FormPay = (props) => {
    // const text = "First";
    // let [text,setText] = useState();
    // const PayClick = (props) => {
    //     setText=`
    //         <h1>Hello</h1>
    //         `
    //         // <>
    //         // <h2>QWERTY</h2>
    //         // {console.log("Pay button was clicked")}
    //         // <Pay/>
    //         // {/* {setText()} */}
            
    //         // {/* // <h1>Pay where are you?{console.log("Pay-Pay")}</h1> */}
    //         // </>
        
    // }
    const [text,setText] = useState(`<h1>Hello</h1>`);
    const isPay = false
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <input placeholder={text}/>
                <button  
                    type="submit"
                    onClick={(isPay)=>{isPay:true}}
                >
                    Pay
                </button>
                <div>{text}</div>
            </div>
        </form>
    )
}

const ReduxPayForm = reduxForm({
    form: 'pay'
})(FormPay)


const ShopCart = ({ totalPrice, count, items }) => {

    const onSubmit = (formData) =>{
        console.log(formData)
    }

    return(
     <>

            {items.map(product => (
              <CartComponent {...product} />
            ))}
            <h1>!{totalPrice}!</h1>
            {/* <h1>!{items}!</h1> */}
            <ReduxPayForm onSubmit={onSubmit}/>


         </>
    );
        
};

export default ShopCart;
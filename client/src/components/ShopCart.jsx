import React, { useState } from 'react';
import { List, Button, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import axios from "axios";
import Select from 'react-select'


const CartComponent = (product) => {
    const { subFromCart, addedCount,removeFromCart, addToCart, count} = product;



    const addCart = () => {
         const res = axios.post('http://localhost:3001/addCart', {
             userId: localStorage.getItem("id"),
             productId: product.id
         })
        addToCart(product)
    }

    const removeCart = () => {
         axios.post('http://localhost:3001/removeCart', {
            userId: localStorage.getItem("id"),
            productId: product.id
        })
        removeFromCart(product.id)
    }

    return(

        <List selection divided verticalAlign="middle">
            <List.Item>
                <List.Content floated="right">
                    <Button

                        // onClick={removeFromCart.bind(this, id)}

                        //  onClick={addToCart.bind(this, product)}
                        onClick = {addCart}

                        color="green"

                    >
                        +
                    </Button>
                    <Button
                        //  onClick={product.subFromCart.bind(this, product.id)}
                        color="orange"
                    >
                        -
                    </Button>
                    <Button
                        // onClick={product.removeFromCart.bind(this, product.id)}
                        onClick={removeCart}
                        color="red"
                    >
                        Usuń
                    </Button>
                </List.Content>
                <Image avatar style={{'fontSize':64}} src={product.image} />

                <List.Content>{product.name} {addedCount}</List.Content>

            </List.Item>
        </List>
    );
};

const ShopCart = (props) => {
     const {  totalPrice,addedCount, count, items, account, shops, isReady,setCart, addToCart,removeFromCart } = props;



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
            ({value:shop.id,key:i, label:shop.address}))

    const [shops_Sel,setShops_sel] = useState("")



    return(
     <>


            {items.map((product, i) => (
         <CartComponent key={i} {...product} addedCount={addedCount}  removeFromCart={removeFromCart} addToCart={addToCart}/>
     ))}

            <div>
                { totalPrice > 0
                ?
                    <form 
                        // onSubmit = {this.onTrigger}
                    >
                        <Select options={receptions} placeholder="Wybierz dostawę lub odbior osobisty w sklepie:"/>
                        <Select  onChange={e => setShops_sel(e.target.value)} options={shops_sel}  placeholder="Wybierz slep z którego chcesz produkty:" value={shops_Sel}/>
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
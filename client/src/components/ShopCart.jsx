import React, {useState} from 'react';
import {Header, Table, Button, Image} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import axios from "axios";

const CartComponent = (product) => {
    const {cartItems, removeFromCart, addToCart, subFromCart} = product;


    const addCart = () => {
        const res = axios.post('http://localhost:3001/addCart', {
            token : localStorage.getItem("jwtToken"),
            productId: product.id
        })
        addToCart(product)
    }

    const removeCart = () => {
        axios.post('http://localhost:3001/removeCart', {
            token : localStorage.getItem("jwtToken"),
            productId: product.id
        })
        removeFromCart(product.id)
    }

    const subCart = () => {
        axios.post('http://localhost:3001/subcart', {
            token : localStorage.getItem("jwtToken"),
            productId: product.id
        })
        subFromCart(product.id)
    }



    return (
        <Table.Row>
            <Table.Cell>
                <Header as='h4' image>
                    <Image src={product.image} avatar style={{'fontSize': 31}}/>
                </Header>
            </Table.Cell>
            <Table.Cell>
                <Header.Content>
                    {product.name}
                    <Header.Subheader>{product.description}</Header.Subheader>
                </Header.Content>
            </Table.Cell>
            <Table.Cell>{(product.price * cartItems.reduce((count, cart) => count + (cart.id === product.id ? 1 : 0), 0)).toFixed(2)} zł</Table.Cell>
            <Table.Cell>{cartItems.reduce((count, cart) => count + (cart.id === product.id ? 1 : 0), 0)}</Table.Cell>
            <Table.Cell>
                <Button
                    onClick={addCart}
                    color="green"
                >
                    +
                </Button>
                <Button
                    onClick={subCart}
                    color="orange"
                >
                    -
                </Button>
                <Button
                    onClick={removeCart}
                    color="red"
                >
                    Usuń
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

const ShopCart = (props) => {
    const {totalPrice, cartItems, items, shops, addToCart,subFromCart, removeFromCart} = props;
    const [shopSelected, setShopSelected] = useState({selected: null})
    const [recSelected, setRecSelected] = useState({selected: null})

    const receptions = [
        {value: 'delivery', label: 'Dostawa do domu'},
        {value: 'personal_pickup', label: 'Odbiór osobisty'}
    ]
    const shops_sel =
        shops.map((shop, i) =>
            ({value: shop.id, key: i, label: shop.address}))


    return (
        <>   
            {totalPrice > 0
                ?
                <div div className="ShopCart">
                    <Table textAlign={"center"} basic='very' celled collapsing>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Obrazek</Table.HeaderCell>
                                <Table.HeaderCell>Produkt</Table.HeaderCell>
                                <Table.HeaderCell>Cena</Table.HeaderCell>
                                <Table.HeaderCell>Illość</Table.HeaderCell>
                                <Table.HeaderCell>Działania</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {items.map((product, i) => (
                                <CartComponent key={i} {...product} cartItems={cartItems} removeFromCart={removeFromCart}
                                                addToCart={addToCart} subFromCart={subFromCart}/>
                            ))}
                        </Table.Body>
                    </Table>
                    <div>
                        <form>
                            <select required onChange={e => setShopSelected({selected: e.target.value || null})}
                                    value={shopSelected.selected} id="shops">
                                {shops_sel.map((option, i) => (
                                    <option key={i} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                            <select required onChange={e => setRecSelected({selected: e.target.value || null})}
                                    value={recSelected.selected} id="rec">

                                {receptions.map((option, i) => (
                                    <option key={i} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                            <div><Link
                                to={{
                                    pathname: "/pay",
                                    params: {
                                        shop: shopSelected,
                                        rec: recSelected
                                    }
                                }}
                            >
                                <button type="submit" value="Submit"   className="checkout-btn2">
                                    <h2>Zapłać {totalPrice} zł</h2></button>
                            </Link></div>
                        </form>
                    </div>
                </div>
            :
            <h2>Kosz jest pusty</h2>
                
       
        
        }
        </>
    )

};

export default ShopCart;
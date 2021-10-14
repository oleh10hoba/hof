import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {logout} from "../actions/auth"
import axios from "axios";
import {removeFromCart} from "../actions/cart";

const CartComponent = ({ title, id, image, removeFromCart }) =>

{   const removeCart = () => {
    axios.post('http://localhost:3001/removeCart', {
        userId: localStorage.getItem("id"),
        productId: id
    })
    removeFromCart(id)
}

    return(


  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeCart} color="red">
          Usuń
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

}

const MenuComponents = ({ totalPrice, removeFromCart, count, items, isLogged }) => (
      <Menu>
        {isLogged &&
          <Menu.Item
            name='editorials'
          >
            <Link to="/shop">HOF</Link>
          </Menu.Item>
        }
        {isLogged &&
          <Menu.Item
            name='editorials'
          >
            <Link to="/favorite">Ulubione</Link>
          </Menu.Item>
        }
        {isLogged &&
          <Menu.Item
            name='editorials'
          >
            <Link to="/account">Konto</Link>
          </Menu.Item>
        }
        {!isLogged &&
          <Menu.Item
            name='editorials'
          >
            <Link to="/login">Login</Link>
          </Menu.Item>
        }
        {!isLogged &&
          <Menu.Item
            name='editorials'
          >
            <Link to="/registration">Rejestracja</Link>
          </Menu.Item>
        }
        <Menu.Item
          name='editorials'
        >
          <Link to="/contact">Kontakt</Link>
        </Menu.Item>
        {isLogged &&  localStorage.getItem('userType') == 1 &&
           <Menu.Item
              name='editorials'
            >
              <Link to="/admin">Admin</Link>
            </Menu.Item>
        }
        {isLogged &&
          <Menu.Menu position="right">
            <Menu.Item
              name='reviews'
            >
              Suma: &nbsp; <b>{totalPrice}</b> zł.
            </Menu.Item>
          <Menu.Item
           name='editorials'
          >
            <Link to="/shopcart">Koszyk</Link>
          </Menu.Item>
          <Popup
            trigger={
              <Menu.Item name="help">
                Kosz (<b>{count}</b>)
              </Menu.Item>
            }
            content={items.map((product,i) => (
              <CartComponent removeFromCart={removeFromCart} key={i} {...product} />
            ))}
            on="click"
            hideOnScroll
          />
          {isLogged && <button onClick={logout}>Wyloguj</button>}
        </Menu.Menu>
        }
      </Menu> 
);

export default MenuComponents;
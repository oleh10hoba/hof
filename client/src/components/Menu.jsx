import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {logout} from "../actions/auth"

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Usuń
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponents = ({ totalPrice, count, items, isLogged }) => (
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
        {isLogged &&  localStorage.getItem('id') == 10 &&
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
            content={items.map(product => (
              <CartComponent {...product} />
            ))}
            on="click"
            hideOnScroll
          />
          {isLogged && <button onClick={logout}>Logout</button>}
        </Menu.Menu>
        }
      </Menu> 
);

export default MenuComponents;
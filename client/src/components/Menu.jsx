import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {logout} from "../actions/auth"




const MenuComponents = ({ totalPrice, isLogged,isAdmin }) => (
      <Menu >
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
        {isLogged &&  isAdmin &&
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
          {isLogged && <button id="Wyloguj" className="checkout-btn" onClick={logout}>Wyloguj</button>}
        </Menu.Menu>
        }
      </Menu> 
);

export default MenuComponents;
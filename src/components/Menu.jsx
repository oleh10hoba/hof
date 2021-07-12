import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuComponents = () => (
      <Menu>
        <Menu.Item
          name='editorials'
        //   onClick={this.handleItemClick}
        >
          Sklep
        </Menu.Item>

        <Menu.Item
          name='reviews'
        //   onClick={this.handleItemClick}
        >
          Suma: &nbsp; <b>0</b> zł.
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
        //   onClick={'this.handleItemClick'}
        >
          Kosz
        </Menu.Item>
      </Menu> 
);

export default MenuComponents;
import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = ({ setFilter, filterBy }) =>(

    <Menu secondary>
        <Menu.Item 
            active={filterBy === 'all'} 
            onClick={setFilter.bind(this, 'all')}
        >
            Wszystkie
        </Menu.Item>
        <Menu.Item 
            active={filterBy === 'popular'} 
            onClick={setFilter.bind(this, 'popular')}
        >
                Popularne   
        </Menu.Item>
        <Menu.Item 
            active={filterBy === 'price_high'} 
            onClick={setFilter.bind(this, 'price_high')}
        >   
            Drogie 
        </Menu.Item>
        <Menu.Item 
            active={filterBy === 'price_low'} 
            onClick={setFilter.bind(this, 'price_low')}
        >
            Tanie    
        </Menu.Item>
    </Menu>
    
);

export default Filter;
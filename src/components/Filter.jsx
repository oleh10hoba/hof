import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { setSearchQuery } from '../actions/filter';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) =>(

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
        <Menu.Item>
            <Input 
                icon='search' 
                value={searchQuery} 
                onChange={ e=> setSearchQuery(e.target.value)}
                placeholder="Szukaj..."/>
        </Menu.Item>
    </Menu>
    
);

export default Filter;
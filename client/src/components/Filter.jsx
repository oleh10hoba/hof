import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
   
const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) =>{
    return(
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
            Najdroższe
        </Menu.Item>
        <Menu.Item 
            active={filterBy === 'price_low'} 
            onClick={setFilter.bind(this, 'price_low')}
            // onClick={handleChange}
        >
            Najtańsze    
        </Menu.Item>
        <Menu.Item>
            <Input 
                icon='search'
                onChange={ e=> setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder="Szukaj..."
            />
        </Menu.Item>
        <Menu.Item onClick={() => {document.location.reload()}}>
            Wyczyść
        </Menu.Item>
    </Menu>
    
)};

export default Filter;
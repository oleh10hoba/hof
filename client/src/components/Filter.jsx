import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
// import { setSearchQuery } from '../actions/filter';

const con = () =>{
   console.log("Yes")     
}
const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) =>{
    function handleChange(e){
        console.log(e)
      }
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
            Drogie 
        </Menu.Item>
        <Menu.Item 
            active={filterBy === 'price_low'} 
            onClick={setFilter.bind(this, 'price_low')}
            // onClick={handleChange}
        >
            Tanie    
        </Menu.Item>
        <Menu.Item>
            <Input 
                icon='search' 
                value={searchQuery} 
                onChange={ e=> setSearchQuery(e.target.value)}
                // onChange={e => handleChange(e.target.value)}
                placeholder="Szukaj..."
            />
        </Menu.Item>
    </Menu>
    
)};

export default Filter;
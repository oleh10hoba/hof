import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const Favorite = () => (
// const Favorite = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Usuń
        </Button>
      </List.Content>
      {/* <Image avatar src={image} />
      <List.Content>{title}</List.Content> */}
    </List.Item>
  </List>
);

// const MenuComponents = ({ totalPrice, count, items }) => (
//       <Menu>
//         <Menu.Item
//           name='editorials'
//         >
//           HOF
//         </Menu.Item>
//         <Menu.Menu position="right">
//           <Menu.Item
//             name='reviews'
//           >
//             Suma: &nbsp; <b>{totalPrice}</b> zł.
//           </Menu.Item>

//           <Popup
//             trigger={
//               <Menu.Item name="help">
//                 Kosz (<b>{count}</b>)
//               </Menu.Item>
//             }
//             content={items.map(product => (
//               <CartComponent {...product} />
//             ))}
//             on="click"
//             hideOnScroll
//           />
//         </Menu.Menu>
//       </Menu> 
// );

export default Favorite;
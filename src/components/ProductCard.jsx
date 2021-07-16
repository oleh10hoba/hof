import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { addToCart } from '../actions/cart';


const ProductCard = product => {
    const { id, name, description, image, price, rating, addToCart, addedCount} = product;
    return(
    <Card>
        <Image src={image}/>
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{description}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="money" />
          {price}
        </a>
      </Card.Content>
      <Button 
        onClick={addToCart.bind(this, product)}
      >
        Dodaj do kosza
        {addedCount > 0  && `(${addedCount})`}
    </Button>
    </Card>
    );
};

export default ProductCard;

import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { addToCart } from '../actions/cart';


const ProductCard = product => {
    const { id, title, author, image, price, rating, addToCart, addedCount} = product;
    return(
    <Card>
        <Image src={image}/>
        <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="rub" />
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

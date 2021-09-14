import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';



const ProductCard = product => {
    const {  name, description, image, price, addToCart, addedCount} = product;
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
        <p>
          <Icon name="money" />
          {price}
        </p>
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
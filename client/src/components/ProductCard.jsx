import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import axios from "axios";


const ProductCard = ( product) => {

    const { name, description, image, price, addToCart, addedCount, addToFavourites, isFavorite, removeFromFavourite,Category_Name} = product;
    const addCart = () => {
        axios.post('http://localhost:3001/addCart', {
            token : localStorage.getItem("jwtToken"),
            productId: product.id
        })
        addToCart(product)
    }
    const addFav = () => {
      addToFavourites.bind(this, product);
      this.setState({
        q: true
    })
  }


    return(
    <Card>
      
        <Image src={image}/>
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{description}</span>
        </Card.Meta>
            <Card.Meta>
                <span className="Category">{Category_Name}</span>
            </Card.Meta>
      </Card.Content>
      <Card.Content extra>
          <Icon name="money" />
          {price}
          <div className="Like">
            <button
              onClick={ isFavorite ?  removeFromFavourite.bind(this, product)  : addToFavourites.bind(this, product)}
            >
                {isFavorite 
                ?
                  <i className="material-icons">favorite</i>
                : 
                  <i className="material-icons">favorite_border</i>
                }
            </button>
          </div>
      </Card.Content>
      <Button 
        onClick={addCart}
      >
        Dodaj do kosza
        {addedCount > 0  && `(${addedCount})`}
    </Button>
    </Card>
    );
};

export default ProductCard;

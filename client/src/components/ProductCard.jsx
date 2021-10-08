import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ( product) => {
    const {  name, description, image, price, addToCart, addedCount, addToFavourites, isFavorite } = product;
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
          <div className="Like">
            <button
              onClick={addToFavourites.bind(this, product)}
            >
                {isFavorite 
                ?
                  <i className="material-icons">favorite</i>
                : 
                <i className="material-icons">favorite_border</i>
                }
            </button>
          </div>
        </p>
      </Card.Content>
      <Button 
        onClick={addToCart.bind(this, product)}
      >
        Dodaj do kosza
        {addedCount > 0  && `(${addedCount})`}
    </Button>
        
        {/* <div
            className="container"
            style={{ border: "1px solid black", width: "15%" }}
            onClick={() => this.toggle()}
          >
            {this.state.liked === false ? (
              <FontAwesomeIcon icon={faHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeartBroken} />
            )}
          </div> */}
    </Card>
    );
};

export default ProductCard;

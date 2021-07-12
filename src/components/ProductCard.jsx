import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css' 

const ProductCard = (title, author ,price, image ) => (
    <Card>
        <Image src={image} />
        <h2>sd</h2>
        <img src={image}></img>
        <h3>{price}</h3>
        <h2>d</h2>
        {/* <Card.Content>
            <Card.Header>
                {title}
            </Card.Header>
            <Card.Meta>
                <span className='date'>
                    {author}
                </span>
            </Card.Meta>
            
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            {price}
        </a>
        </Card.Content> */}
    </Card>
    );

export default ProductCard;

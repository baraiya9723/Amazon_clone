import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ratingscreen from './Ratingscreen';
import { Link } from 'react-router-dom';

function Productscreen({product}) {
    return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/product/${product._id}`} className="custom-cursor" style={{ textDecoration: 'none', color: 'inherit',  }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        <Ratingscreen value={product.rating} text={product.numReviews}/>
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
  );
}
export default Productscreen

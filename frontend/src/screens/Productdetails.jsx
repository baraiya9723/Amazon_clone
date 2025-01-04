import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import products from "../products";
import { Link } from "react-router-dom";

const Productdetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = products.filter((p) => p._id == parseInt(id))[0]; // Find product by ID
  console.log(id, product);
  const [quantity, setQuantity] = useState(1); // State to track quantity

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to the cart!`);
  };

  return (
    <Container className="my-5">
      <Row>
        {/* Section 1: Product Image */}
        <Col md={6} className="text-center">
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>

        {/* Section 2: Product Details */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title as="h2">{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>Price: </strong>${product.price}
              </Card.Text>
              <Card.Text>
                <strong>Rating: </strong>
                {"⭐".repeat(Math.round(product.rating))} ({product.rating}/5)
              </Card.Text>
              <Form >
                <Form.Group controlId="quantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    style={{ width: "100px" }}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={handleAddToCart}
                  disabled={quantity < 1}
                >
                  Add to Cart
                </Button>
                 <Link to="/">
                  <Button
                  variant="primary"
                  style={{marginLeft:"20px"}}
                  className="mt-3">Go Back</Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Productdetails;

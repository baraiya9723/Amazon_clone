import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Ratingscreen from "./Ratingscreen"
import axios from "axios";
import { addToCart } from "../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";

const Productdetails = () => {
  const { id } = useParams(); 
  const navigator = useNavigate()
  const [quantity, setQuantity] = useState(1); // State to track quantity
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product,quantity));
    alert(`Added ${quantity} ${product.name}(s) to the cart!`);
    navigator('/cart')
  };
  useEffect(() => {
    const fetchdata = async () => {
      try{
        const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);
        setProduct(data);

      }catch(err){
        console.log(err.message, "err data feath time")
      }
    };
    fetchdata()
  }, []);

  if (!product) {
    return <h1>Product not found!</h1>;
  }

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
                <Ratingscreen  value={product.rating} text={product.numReviews}/>
              </Card.Text>
              <Form>
                <Form.Group controlId="quantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantity}
                    style={{backgroundColor:'#2222255c',width: "200px",color:'white'}}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
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
                    style={{ marginLeft: "20px" }}
                    className="mt-3"
                  >
                    Go Back
                  </Button>
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
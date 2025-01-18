import React, { useEffect } from "react";
import Message from "../components/Message";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";

const CartScreen = () => {
//   const productId = 0
//   const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const navigator = useNavigate()

//   useEffect(() => {
//     if (productId) {
//       dispatch(addToCart(productId, qty));
//     }
//   }, [dispatch, productId, qty]);

  const cartItems = useSelector((state) => state?.cartReducer?.cartItems);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkout = () => {
    navigator("/login?redirect=shipping");
  };
  return (
    <>
      <Row >
        <Row  >
          <h1 style={{display:'flex',justifyContent:'center ', margin:'30px'}}>Shopping Cart</h1>
          {cartItems?.length === 0 ? (
            <Message>
              Your Cart is Empty !<Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush" style={{border:'1px solid black'}}>
              {cartItems?.map((item) => (
                <ListGroupItem>
                  <Row style={{display:'flex',justifyContent:'center',}}>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i
                          className="fa fa-trash text-danger"
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Row>

      </Row>
      <Col  style={{display:'flex',justifyContent:'center',margin:'30px'}} >
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>
                  subtotal ({cartItems?.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  ?.reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems?.length === 0}
                onClick={checkout}
              >
                Proceed to checkOut
              </Button>
            </ListGroup>
          </Card>
        </Col>
    </>
  );
};

export default CartScreen;
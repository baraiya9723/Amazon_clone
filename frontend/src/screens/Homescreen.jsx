import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import products from '../products';
import Productscreen from './Productscreen';
function Homescreen() {
  return (
    <>
      <Container>
        <Row>
          {
              products.map((product)=>(
                <Col key={product._id} md={4} style={{marginBottom:'30px'}}>
                <Productscreen  product={product}  />
               </Col>  
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default Homescreen;

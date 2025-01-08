import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Productscreen from './Productscreen';
import axios from 'axios';
function Homescreen() {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
   const fetchdata = async()=>{
    try{
    const prodducts = await axios.get('http://localhost:8000/api/products')
    setProducts(prodducts?.data)
    }catch(err){
     console.log(err?.message,'err while fetching data')
    }
   }
   fetchdata()
  },[])
  return (
    <>
      <Container style={{marginTop:'30px'}}>
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

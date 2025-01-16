import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Productscreen from "./Productscreen";
import axios from "axios";
import Counter from "../components/counter";
import { fetchProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
function Homescreen() {
  // const [products,setProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const loading = useSelector((state) => state.productReducer.loading);
  const error = useSelector((state) => state.productReducer.error);

  useEffect(() => {
    //  const fetchdata = async()=>{
    //   try{
    //   const prodducts = await axios.get('http://localhost:8000/api/products')
    //   setProducts(prodducts?.data)
    //   }catch(err){
    //    console.log(err?.message,'err while fetching data')
    //   }
    //  }
    //  fetchdata()
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <Spinner animation="border" role="status" style={{display:"flex",justifyContent:'center'}}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <Counter />
        <Row>
          {products?.map((product) => (
            <Col key={product._id} md={4} style={{ marginBottom: "30px" }}>
              <Productscreen product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Homescreen;

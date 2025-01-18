import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FromContainer";
import { userdetails } from "../redux/actions/userAction";
import { setAccessToken } from "../utils/tokenManager";
import apiService from "../services/apiService";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if(!password && !confirmPassword && !email && !name){
        setMessage("all field are requried")
        return;
    }
    if(password != confirmPassword){
        setMessage("password and confirm password is not same ")
        return;
    }
    const userData = {
      name:name,
      email: email,
      password: password,
    };
    try {
      const response = await apiService.register(userData);
      console.log(response)
      setAccessToken(response.token)
      dispatch(userdetails(response));
      navigator('/')
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message)
    }
    //dispatch
  };

  return (
    <>
      <FormContainer>
        <h1>Register</h1>
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" varient="primary" style={{marginTop:'15px'}}>
            SING IN
          </Button>
        </Form>
        <Row style={{marginTop:'20px'}}>
          <Col>
            Have an account !
            <Link to='/login'>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
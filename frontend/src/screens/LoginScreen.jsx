import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { setAccessToken } from "../utils/tokenManager";
import { userdetails } from "../redux/actions/userAction";
import FormContainer from "../components/FromContainer";
import apiService from "../services/apiService";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  //   const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    try {
      const response = await apiService.login(userData);
      console.log(response)
      setAccessToken(response.token)
      dispatch(userdetails(response));
      navigator('/')
    } catch (error) {
      console.log(error);
    }
    //dispatch
  };

  return (
    <>
      <FormContainer>
        <h1>SIGN IN</h1>
        {Loader}
        <Form onSubmit={submitHandler}>
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
          <Button type="submit" varient="primary" style={{ marginTop: "20px" }}>
            SING IN
          </Button>
        </Form>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            New Customer ?<Link to="/register">Register</Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default LoginScreen;

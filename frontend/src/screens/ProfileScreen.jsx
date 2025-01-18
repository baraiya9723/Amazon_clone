import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { userdetails } from "../redux/actions/userAction";
import apiService from "../services/apiService";
// import { listMyOrders } from "../actions/orderAction";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch();
  const { loading, error, user } = [false, "", ""];

  // const orderListMy = useSelector((state) => state.orderListMy);
  const { loadingOrders, orders } = [false, null, ""];

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const userInfo = await apiService.getUserProfile();
        if(userInfo){
          setName(userInfo.name);
          setEmail(userInfo.email);
          setIsAdmin(userInfo.isAdmin)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata()
  }, [dispatch]);

  const submitHandler = async(e) => {
    e.preventDefault();
    setMessage()
    try{

      if(!name && !email ){
        setMessage(" name and email is requried ")
        return;
      }
      if(password != confirmPassword){
        setMessage("password is not match ")
        return
      }

      const updatedUser = {
        name: name,
        email:email,
        password:password
      }
      const user = await apiService.updateUserProfile(updatedUser)
      if(user){

        dispatch(userdetails({ id: user._id, name, email, isAdmin}));
        setSuccess("data updated successfully ")
      }
    }catch(error){
      console.log(error)
    }
    //dispatch
  };

  return (
    <>
      <Row style={{display:'flex',justifyContent:'center'}}>
        <Col md={8} style={{margin:'10px'}}>
          <h1>Wellcome !!  {name} ,<br></br> you can Update Information</h1>
          {error && <Message varient="danger">{error}</Message>}
          {success && <Message variant="success">Profile Updated</Message>}
          {loading && <Loader />}
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
              <Form.Label>COnfirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" varient="primary" style={{margin:'20px'}}>
              Update
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h1>My Orders</h1>
          {loadingOrders ? (
            <Loader />
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>DATE</td>
                  <td>TOTAL</td>
                  <td>PAID</td>
                  <td>DELIVERD</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDeleverd ? (
                        order.deleverdAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button variant="light">Details</Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProfileScreen;

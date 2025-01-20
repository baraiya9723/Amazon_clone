import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../redux/actions/cartAction";
import CheckoutStep from "../components/CheckoutStep";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const shippingAddress = useSelector(
    (state) => state.cartReducer.shippingAddress
  );
  const navigator = useNavigate();
  if (!shippingAddress) {
    navigator("/shipping");
  }
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigator("/placeorder");
  };
  return (
    <>
      <CheckoutStep step1 step2 step3 />

      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Payment Method
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin:'40px'
        }}
      >
        <Form
          onSubmit={submitHandler}
          style={{ display: "flex", flexDirection: "column", width: "300px" }}
        >
          <Form.Group >
            <Form.Label
              as="legend"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Select Payment Method
            </Form.Label>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ marginBottom: "15px",marginLeft:'20px' }}
            ></Form.Check>
          </Form.Group>
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PaymentScreen;

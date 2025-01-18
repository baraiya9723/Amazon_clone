import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const FromContainer = ({ children }) => {
  return (
    <Container>
      <Row style={{display:'flex',justifyContent:'center',margin:'30px'}}>
        <Col md={8}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FromContainer;
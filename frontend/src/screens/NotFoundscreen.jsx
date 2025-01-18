import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory, useNavigate } from 'react-router-dom';
// import './NotFoundPage.css'; // Optional: Add custom styles

const NotFoundPage = () => {
  const navigator = useNavigate()

  const goHome = () => {
    navigator('/');
  };

  return (
    <Container className="text-center" style={{ marginTop: '100px' }}>
      <Row>
        <Col>
          <h1 className="display-3">404</h1>
          <h2>Page Not Found</h2>
          <p>
            Sorry, the page you are looking for does not exist. You can always go back to the
            homepage.
          </p>
          <Button variant="primary" onClick={goHome} style={{marginBottom:'20px'}}>
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;

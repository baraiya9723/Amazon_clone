import React from "react"; 
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
function Header() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container >
          <Navbar.Brand>Online Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto" >
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i>
                &nbsp; cart
              </Nav.Link>
              <Nav.Link>
                <i className="fas fa-user"></i>
                &nbsp; singin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

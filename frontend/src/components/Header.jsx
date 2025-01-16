import React from "react"; 
import { Navbar, Nav, Container, NavDropdown  } from "react-bootstrap";
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container >
          <Link to='/'><Navbar.Brand>Online Shop</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto" >
              <Nav.Link as={Link} to='/cart'>
                <i className="fas fa-shopping-cart"></i>
                &nbsp; cart
              </Nav.Link>
              <Nav.Link as={Link} to='/singin'>
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

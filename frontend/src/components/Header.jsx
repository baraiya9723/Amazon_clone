import React from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userlogout } from "../redux/actions/userAction";
import { clearTokens } from "../utils/tokenManager";
import apiService from "../services/apiService";
function Header() {
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const user = useSelector((state) => state.userReducer.user);
  const handlelogout = async () => {
    try {
      dispatch(userlogout());
      clearTokens()
      navigator('/')
    } catch (error) {
      console.log(error);
    }
    console.log("done");
    alert("done");
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>Online Shop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/cart">
                <i className="fas fa-shopping-cart"></i>
                &nbsp; cart
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/profile">
                    <i className="fas fa-user"></i>
                    &nbsp; {user.name}
                  </Nav.Link>
                  <Nav.Link as={Button} onClick={handlelogout}>
                    <i className="fas fa-sign-out-alt"></i>
                    &nbsp; Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <i className="fas fa-user"></i>
                  &nbsp; singin
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import homeBackground from "../../images/banner.jpg";

export const Header = () => {
  const { isAuthenticated, userName } = useContext(AuthContext);
  console.log(isAuthenticated);
  console.log(userName);
  console.log(AuthContext)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Daily Sale</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          image={homeBackground}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ads">Ads</Nav.Link>

            {isAuthenticated && (
              <>
              <div>
                <Nav.Link href="/create-ads">Place Ad</Nav.Link>
              </div>
              <div>
                <span>{userName}</span>
              </div>
              </>
            )}

            <NavDropdown title="My Profile" id="basic-nav-dropdown">
              {!isAuthenticated && (
                <div>
                  <NavDropdown.Item href="/login_register">
                    Login / Sign Up
                  </NavDropdown.Item>
                </div>
              )}
              {isAuthenticated && (
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

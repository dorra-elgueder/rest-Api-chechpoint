import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Action/userAction";

const Navigation = () => {
  const Dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies Streaming</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/Login">
              Login
            </Nav.Link>
            {user && user.isAdmin === true ? (
              <Nav.Link as={Link} to="/Addmovie">
                Addmovie
              </Nav.Link>
            ) : (
              ""
            )}

            <Nav.Link as={Link} to="/">
              <button onClick={() => Dispatch(logout())}>log out </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

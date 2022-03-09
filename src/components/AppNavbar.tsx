import { FunctionComponent } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";

export const AppNavbar: FunctionComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Link to="/" className="navbar-brand">
          Moovice
        </Link>

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/weekly">Weekly</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/weekly-battle">Weekly Battle</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/popular">Popular</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/popular-battle">Popular Battle</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/favorites">Favorites</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

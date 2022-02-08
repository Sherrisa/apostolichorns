import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Home from "../pages/home";
import Flute from "../pages/flute";
import Clarinet from "../pages/clarinet";
import AltoSaxophone from "../pages/altosaxophone";
import TenorSaxophone from "../pages/tenorsaxophone";
import Trumpet from "../pages/trumpet";
import Trombone from "../pages/trombone";

function NavbarComp() {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/home"}>
            ApostolicHorns
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"}>
                home
              </Nav.Link>
              <NavDropdown title="sheet music" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/flute"}>
                  flute
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/clarinet"}>
                  clarinet
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/altosaxophone"}>
                  alto saxophone
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/tenorsaxophone"}>
                  tenor saxophone
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/trumpet"}>
                  trumpet
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/trombone"}>
                  trombone
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/flute" element={<Flute />} />
        <Route path="/clarinet" element={<Clarinet />} />
        <Route path="/altosaxophone" element={<AltoSaxophone />} />
        <Route path="/tenorsaxophone" element={<TenorSaxophone />} />
        <Route path="/trumpet" element={<Trumpet />} />
        <Route path="/trombone" element={<Trombone />} />
      </Routes>
    </div>
  );
}

export default NavbarComp;
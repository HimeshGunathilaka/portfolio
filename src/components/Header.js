import React from "react";
import "../css/Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Icon from "../images/tile_shape.png";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="mx-0 py-4 navbar-container">
        <Container>
          <Navbar.Brand href="#home" className="text-white brand-text">
            <img src={Icon} className="brand-icon" />
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-0 mb-lg-0 column-gap-4">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/himesh-gunathilaka-bb4818258/">
                  Linkedin
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/HimeshGunathilaka">
                  Github
                </NavDropdown.Item>
                <NavDropdown.Item href="https://web.facebook.com/kavinda.himesh.9/">
                  Facebook
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="https://www.youtube.com/channel/UCU_E4UFvwmgen1ZX2Nuofgw">
                  Youtube
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

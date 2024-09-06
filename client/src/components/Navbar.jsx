import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../static/img/logos/White logo - no background.svg';

const CustomNavbar = () => {
  return (
    <>
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" data-bs-theme="light" id="navbar">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="#intro-img">¿Quienes somos?</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            {/* <Nav.Link href="#equipo">Nuestro equipo</Nav.Link> */}
            <Nav.Link href="#contacto">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CustomNavbar

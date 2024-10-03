import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import CustomNavbar from './Navbar';

const Header = () => {
  return (
    <Container fluid
      style={{ minHeightight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0)' }}
    >
      <CustomNavbar />
      
      <Row className='d-flex align-items-center h-100 p-5 mt-5'>
        <Col md={10} className='mt-5'>
          <h1 className='gradient-text mb-5 text-start '>Acompañamos la evolución digital de las empresas basándonos en el uso responsable de la tecnología para lograr un impacto positivo en la sociedad y el planeta.</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header
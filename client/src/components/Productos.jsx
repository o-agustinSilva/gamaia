import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Productos = () => {
  return (
    <Container fluid className='mt-5 text-center'>
        <Row>
            <Col>
            <h1>Productos</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            <p>Somos una empresa líder en consultoría de transformación digital, con amplia experiencia ayudando a organizaciones de diversos sectores a digitalizar y automatizar sus procesos de negocio.</p>
            </Col>
        </Row>
    </Container>
  );
}

export default Productos

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contactanos = () => {
  return (
    <Container fluid className="d-flex justify-content-center p-5 margin-container" style={{background:"#2221214c"}} id="contacto">
      <Row className='d-flex justify-content-center text-white' style={{width:"800px"}}>
        <Col md={12}>
        <h1 className='text-center'>Contactanos</h1>
        </Col>

      <Col md={12} className="p-4">   
      <Form>
      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Nombre completo</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Correo electrónico</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Número de teléfono</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Nombre de la empresa</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='text-white'>Comentarios</Form.Label>
        <Form.Control type="email" as="textarea" placeholder='' />
      </Form.Group>

      <Button variant="info" type="submit">
        Enviar
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contactanos
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const Contactanos = () => {
  return (
    <Container className="d-flex justify-content-center p-5 margin-container">
      <Row className='d-flex justify-content-center'>
        <Col md={12}>
        <h1 className='text-center'>Contactanos</h1>
        </Col>

      <Col md={12} id="form" className="p-4">   
        <form>
          <Row className="d-flex mt-4">
            <Col md={12} className='mb-3'>
              <MDBInput
                label="Nombre"
                type="text"
                className="custom-input"
              />
            </Col>

            <Col md={12} className='mb-3'>
            <MDBInput
                label="Apellido"
                type="text"
                className="custom-input"
              />
            </Col>

            <Col md={12} className='mb-3'>
            <MDBInput
                label="Correl electrónico"
                type="email"
                className="custom-input"
              />
            </Col>
          </Row>

          <Row className="d-flex mt-3">
            <div className="d-grid gap-2">
              <MDBBtn type="submit" id="form-button" color='info'>
                Continuar
              </MDBBtn>
            </div>
          </Row>
        
        </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contactanos
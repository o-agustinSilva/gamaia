import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
  return (
    <Container className='margin-container'>
      <Row>
        <Col md={6}
          className='text-center bg-image'
          style={{
            backgroundImage: "url('https://cdn.diariojornada.com.ar/imagenes/2023/3/28/344381_103356.jpg')",
            height: "400px",
            borderTopLeftRadius: "25px"
          }}
        >
        </Col>
        <Col md={6} className='d-flex flex-column justify-content-center p-5'
          style={{ backgroundColor: "#DADADA", borderBottomRightRadius: "25px" }}>
          <h1 className='text-start text-black'>¿Por qué GAMAIA?</h1>
          <h5 className='text-black'>Empezamos mostrando lo orgullosos que estamos siendo fueguinos, por ello elegimos un vocablo de la lengua Yagán.</h5>
        </Col>
      </Row>
    </Container>

  )
}

export default Intro
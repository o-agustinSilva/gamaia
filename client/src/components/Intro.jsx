import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
  return (
    <Container
      className='mt-5'
    >
      <Row>
        <Col md={6}
          className='text-center bg-image'
          style={{
            backgroundImage: "url('https://turismoenushuaia.com/wp-content/uploads/2022/09/ruta-3-nieve-Turismo-en-Ushuaia.jpg')",
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
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Intro = () => {

  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, [])

  return (
    <Container fluid className='margin-container d-flex align-items-center p-5' id="intro-img" style={{
      overflowX: "hidden",
      overflowY: "hidden",
      height: "90vh"
    }}
    >
      <Row>
        <Col md={12} className='d-flex' data-aos="fade-left">
          <h2 className='text-center'>¿Cómo dar nombre a una empresa cuya misión  es brindar soluciones tecnológicas basadas en la naturaleza como la forma más eficaz de alcanzar este objetivo?</h2>
        </Col>
        <Col md={12} className='p-5' data-aos="fade-right">
          <h4 className='text-center'>Empezamos mostrando lo orgullosos que estamos siendo fueguinos, por ello elegimos un vocablo de la lengua Yagán.</h4>
        </Col>
      </Row>
    </Container>

  )
}

export default Intro
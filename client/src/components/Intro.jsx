import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Intro = () => {

  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, [])

  return (
    <Container fluid className='margin-container d-flex align-items-center p-2' id="intro-img" style={{
      overflowX: "hidden",
      overflowY: "hidden",
      height: "90vh"
    }}
    >
      <Row className='mt-5'>
        <Col md={12} className='p-5' data-aos="fade-up">
          <h1 className='text-center' style={{color:"#19c1ed"}}>¿Qué significa gamaia?</h1>
        </Col>
        <Col md={12} data-aos="fade-left">
          <h4 className='text-center'>¿Cómo dar nombre a una empresa cuya misión  es brindar soluciones tecnológicas basadas en la naturaleza como la forma más eficaz de alcanzar este objetivo?</h4>
        </Col>
        <Col md={12} className='p-5' data-aos="fade-right">
          <h4 className='text-center'>Como estamos muy orgullosos de ser fueguinos elegimos un vocablo de la lengua Yagán que significa “cadena”. Esta elección se basa que en la principal tecnología de vanguardia BLOCKCHAIN (cadena de bloques) que utilizamos en nuestras soluciones.</h4>
        </Col>
      </Row>
    </Container>

  )
}

export default Intro
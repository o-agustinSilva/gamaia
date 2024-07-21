import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Intro = () => {

  useEffect(() => {
    AOS.init({duration: 1300});
  }, [])

  return (
    <Container className='margin-container'>
      <Row>
        <Col md={6}
          className='bg-image'
          style={{
            backgroundImage: "url('https://billiken.lat/wp-content/uploads/2022/01/Ushuaia-scaled.jpeg')",
            height: "800px",
            borderTopLeftRadius: "25px"
          }}
          data-aos="zoom-in"
        >
        </Col>
        <Col md={6} className='d-flex flex-column justify-content-center p-5 text-intro' data-aos="fade-right"
          >
          <h1>¿Por qué GAMAIA?</h1>
          <h5>Empezamos mostrando lo orgullosos que estamos siendo fueguinos, por ello elegimos un vocablo de la lengua Yagán.</h5>
        </Col>
      </Row>
    </Container>

  )
}

export default Intro
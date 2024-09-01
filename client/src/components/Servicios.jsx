import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'
import img from '../static/img/resources/rpa.jpg';
import azure from '../static/img/icons/azure.svg';
import powerautomate from '../static/img/icons/powerautomate.svg';
import microsoft from '../static/img/icons/microsoft.svg';
import powerbi from '../static/img/icons/powerbi.svg';
import sharepoint from '../static/img/icons/sharepoint.svg';
import teams from '../static/img/icons/teams.svg';

const Servicios = () => {

  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, [])

  return (
    <Container fluid className='text-center margin-container p-5' id='servicios' style={{
      overflowX: "hidden",
      overflowY: "hidden",
    }}>
      <Row>
        <Col md={12} data-aos="fade-up">
          <h1 style={{ color: "#13c1d2"}}>Servicios</h1>
          <h5>Somos una empresa líder en consultoría de transformación digital,
            con amplia experiencia ayudando a organizaciones de diversos sectores a digitalizar y automatizar sus procesos de negocio.</h5>
        </Col>
      </Row>
      <Row className="mt-5 p-5" style={{ background: "#2221214c", borderRadius: "10px" }} data-aos="fade in">
        <Col md={12} xl={6}>
          <img src={img} data-aos="fade-left" style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            borderRadius: "5px"
          }} />
        </Col>
        <Col md={12} xl={6} className="text-start d-flex flex-column justify-content-start p-5">
          <Row data-aos="fade-right" className="justify-content-between">
            <Col xs={12}>
              <h1 className='gradient-text-secondary'>Tecnologías utilizadas</h1>
            </Col>
            <Col xs={12}>
              <h4>Nuestro expertisse se adapta a las tecnologías propias de las empresas, destacando las soluciones:</h4>
            </Col>
            <Col xs={12} className='mb-3 mt-4'>
              <h6>Plataforma Microsoft (RPA - Power Automate, Sharepoint, Teams, Azure, Dataverse, Power BI)</h6>
            </Col>
            <Col xs={12} className='mb-3'>
              <h6>Plataforma GoogleCloud (Virtual Agents)</h6>
            </Col>
            <Col xs={12} className='mb-3'>
              <h6>Plataforma on premise o servidores provistos por nuestra empresa</h6>
            </Col>
          </Row>
          <Row className="d-flex text-md-start text-center mt-auto">
            <Col xs={12} sm={4} md={2}>
              <img src={microsoft} width={80} height={80} data-aos="zoom-in" />
            </Col>
            <Col xs={12} sm={4} md={2}>
              <img src={powerautomate} width={80} height={80} data-aos="zoom-in" />
            </Col>
            <Col xs={12} sm={4} md={2}>
              <img src={powerbi} width={80} height={80} data-aos="zoom-in" />
            </Col>
            <Col xs={12} sm={4} md={2}>
              <img src={teams} width={80} height={80} data-aos="zoom-in" />
            </Col>
            <Col xs={12} sm={4} md={2}>
              <img src={azure} width={80} height={80} data-aos="zoom-in" />
            </Col>
            <Col xs={12} sm={4} md={2}>
              <img src={sharepoint} width={80} height={80} data-aos="zoom-in" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Servicios

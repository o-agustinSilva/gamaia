import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'
import img from '../static/img/resources/saas.jpg';
import { MDBIcon } from 'mdb-react-ui-kit';

const Productos = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, [])
  
  return (
    <Container fluid className='text-center p-5' id='productos' style={{
      overflowX: "hidden",
      overflowY: "hidden",
    }}>
      <Row className="mt-5 p-5" style={{ background: "#2221214c", borderRadius: "10px" }} data-aos="fade in">
        <Col md={12} xl={6} className="text-start d-flex flex-column justify-content-center">
          <Row data-aos="fade-left">
            <Col xs={12}>
              <h1 style={{ color: '#a10e84' }} className='gradient-text-secondary'>Productos</h1>
            </Col>
            <Col xs={12}>
              <h4>Te brindamos la solución integral para:</h4>
            </Col>
            <Row data-aos="fade-left">
              <Col xs={12}>
                <Row className="mb-4 mt-4">
                  <Col xs={2} md={1} className='d-flex align-items-center'>
                    <MDBIcon fas icon="chart-line" size="2x" style={{ color: "#13c1d2" }} />
                  </Col>
                  <Col xs={10} md={11}>
                    <h6 className="mb-0">Apoyar la gestión integral de tus productos</h6>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="mb-4">
                  <Col xs={2} md={1} className='d-flex align-items-center'>
                    <MDBIcon fas icon="balance-scale" size="2x" style={{ color: "#13c1d2" }} />
                  </Col>
                  <Col xs={10} md={11}>
                    <h6 className="mb-0">Brindamos el asesoramiento legal para asegurarte el cumplimiento de las exigencias regulatorias y las certificaciones de tus productos</h6>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="mb-4">
                  <Col xs={2} md={1} className='d-flex align-items-center'>
                    <MDBIcon fas icon="network-wired" size="2x" style={{ color: "#13c1d2" }} />
                  </Col>
                  <Col xs={10} md={11}>
                    <h6 className="mb-0">Integramos con tus equipos y tus dispositivos</h6>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="mb-4">
                  <Col xs={2} md={1} className='d-flex align-items-center'>
                    <MDBIcon fas icon="sitemap" size="2x" style={{ color: "#13c1d2" }} />
                  </Col>
                  <Col xs={10} md={11}>
                    <h6 className="mb-0">Trazabilidad desde los insumos hasta la venta de tus productos. Tus clientes podrán acceder a la información detallada de los productos elaborados</h6>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={2} md={1} className='d-flex align-items-center'>
                    <MDBIcon fas icon="server" size="2x" style={{ color: "#13c1d2" }} />
                  </Col>
                  <Col xs={10} md={11}>
                    <h6 className="mb-0">Te damos software como servicio liberando a tu pyme de adquirir equipos y mantenerlo. Brindamos seguridad a tu información más valiosa</h6>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Row>

        </Col>
        <Col md={12} xl={6}>
          <img src={img} data-aos="fade-right" style={{
            maxWidth: "100%",
            maxHeight: "auto",
            width: "auto",
            height: "auto",
            borderRadius: "5px"
          }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Productos

import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBIcon } from 'mdb-react-ui-kit'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Stocksaas = () => {
  useEffect(() => {
    AOS.init({ duration: 900 })
  }, [])

  return (
    <Container fluid className='mb-5 mt-5 p-5' style={{
      overflowX: "hidden",
      overflowY: "hidden",
  }}>
      <Row className="align-items-stretch">
      <Col xl={4} data-aos="fade-left">
          <Col xs={12} className="text-start mb-5">
            <h1 style={{ color: '#a10e84' }}>StockSaaS</h1>
            <h4 >Solución integrada para pymes productivas</h4>
          </Col>
          <Col>
          <p className='text-start'>Ayudamos a tu pyme a organizar desde la compra de tus insumos hasta la venta de tus productos en sucursales o en tiendas virtuales. Tambien ponemos a resguardo toda la documentación requerida para las certificaciones de tu empresa</p>
          </Col>
        </Col>
        <Col xl={8}>
          <Row>
            <Col xl={4} md={6} className='mb-3 d-flex'>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="zoom-in"
                className='text-black p-4 m-3'
              >
                <div>
                  <MDBIcon fas icon="cloud" size='3x' className='icon-gradient' />
                </div>
                <div className='mt-4'>
                  <h3>Tus datos seguros</h3>
                  <p>Información disponible en la web y resguardada en la nube de manera segura</p>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className='mb-3 d-flex'>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="zoom-in"
                className='text-black p-4 m-3'
              >
                <div>
                  <MDBIcon fas icon="file-alt" size='3x' className='icon-gradient' />
                </div>
                <div className='mt-4'>
                  <h3>Documentos digitales</h3>
                  <p> Resguardamos documentos y mantenemos la vigencia de los mismos.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className='mb-3 d-flex'>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="zoom-in"
                className='text-black p-4 m-3'
              >
                <div>
                  <MDBIcon fas icon="chart-bar" size='3x' className='icon-gradient'/>
                </div>
                <div className='mt-4'>
                  <h3>Depósito Fácil </h3>
                  <p>Gestionamos la compra de insumos, gestión y control del stock.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className='mb-3 d-flex'>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="zoom-in"
                className='text-black p-4 m-3'
              >
                <div>
                  <MDBIcon fas icon="stream" size='3x' className='icon-gradient' />
                </div>
                <div className='mt-4'>
                  <h3>Trazabilidad e interacción</h3>
                  <p> Tus clientes podrán tener acceso en línea a el detalle de los ingredientes, origen de los mismos, certificaciones vigentes.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className='mb-3 d-flex'>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="zoom-in"
                className='text-black p-4 m-3'
              >
                <div>
                  <MDBIcon fas icon="gavel" size='3x' className='icon-gradient' />
                </div>
                <div className='mt-4'>
                  <h3>Certificación de productos</h3>
                  <p>Ayudamos a cumplir los requerimientos de la certificacion del sello del fin del mundo y otras autoridades de aplicación.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className='mb-3 d-flex'>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                data-aos="zoom-in"
                className='text-black p-4 m-3'
              >
                <div>
                  <MDBIcon fas icon="user-lock" size='3x' className='icon-gradient' />
                </div>
                <div className='mt-4'>
                  <h3>Trazabilidad inalterable</h3>
                  <p> Bitácora de movimientos, no editable y auditables. Utilizamos la tecnología blockchain que asegura la inalterabilidad de los datos.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );

}

export default Stocksaas
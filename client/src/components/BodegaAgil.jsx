import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css'
import AOS from 'aos';
import { MDBIcon } from 'mdb-react-ui-kit';

const BodegaAgil = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <Container fluid className='d-flex justify-content-center p-5 margin-container' style={{
            overflowX: "hidden",
            overflowY: "hidden",
        }} id="productos">
            <Row>
            <Col md={12} data-aos="fade-up">
                <h1 style={{ color: "#13c1d2"}} className='text-center mb-3'>Productos</h1>
            </Col>
                <Col xl={4} className="mt-5" data-aos="fade-right">
                    <Col xs={12} className="text-start mb-5">
                        <h1 style={{ color: '#a10e84' }}>Bodega Ágil</h1>
                        <h4 >Manejo integral inteligente de bodegas</h4>
                    </Col>
                    <Col>
                        <h6 className='text-start'>
                            La gestión de una bodega industrial a veces se convierte en un desafío complejo debido a
                            diversos factores, como el manejo eficiente del depósito y la optimización de los recursos.
                            Nuestra solución Bodega Ágil te permite optimizar tiempo y maximizar tus ganancias.
                        </h6>
                    </Col>
                </Col>
                <Col xl={8} className="align-items-stretch">
                    <Row>
                        <Col xl={6} md={6} className='mb-3 d-flex' data-aos="zoom-in">
                            <div style={{ background: "#ffffff", borderRadius: "12px" }} className='text-black p-4 m-3'>
                                <div>
                                    <MDBIcon fas icon="boxes" size='3x' className='icon-gradient' />
                                </div>
                                <div className='mt-4'>
                                    <h3>Gestión de stock</h3>
                                    <p>Permite la gestión de stock de múltiples empresas, con diferentes características de los productos </p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} md={6} className='mb-3 d-flex' data-aos="zoom-in">
                            <div
                                style={{ background: "#ffffff", borderRadius: "12px" }}
                                className='text-black p-4 m-3'
                            >
                                <div>
                                    <MDBIcon fab icon="sellsy" size='3x' className='icon-gradient' />
                                </div>
                                <div className='mt-4'>
                                    <h3>Consulta en línea</h3>
                                    <p>Mediante esta aplicación, las empresas pueden monitorear sus operaciones las 24 hs. desde el lugar en el que estén. Esta solución funciona en la Nube</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} md={6} className='mb-3 d-flex' data-aos="zoom-in">
                            <div
                                style={{ background: "#ffffff", borderRadius: "12px" }}
                                className='text-black p-4 m-3'
                            >
                                <div>
                                    <MDBIcon fas icon="file-alt" size='3x' className='icon-gradient' />
                                </div>
                                <div className='mt-4'>
                                    <h3>Operaciones</h3>
                                    <p>Registra la recepción de mercadería individual o palletizada. Permite el ingreso de productos, picking y despacho admitiendo criterios FIFO/LIFO/FEFO</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} md={6} className='mb-3 d-flex' data-aos="zoom-in">
                            <div
                                style={{ background: "#ffffff", borderRadius: "12px" }}
                                className='text-black p-4 m-3'
                            >
                                <div>
                                    <MDBIcon fas icon="barcode" size='3x' className='icon-gradient' />
                                </div>
                                <div className='mt-4'>
                                    <h3>Dispositivos de identificación</h3>
                                    <p>Permite la identificación de pallet o contenedor por código de barra totalmente en línea, la impresión configurable de etiquetas y el control de stock</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default BodegaAgil
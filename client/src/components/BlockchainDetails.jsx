import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBIcon, MDBRipple } from 'mdb-react-ui-kit'

const BlockchainDetails = () => {
    return (
        <Container fluid className='mt-5'>
            <Row className="text-center d-flex justify-content-center text-black">

            <Col lg={6} md={12} className='d-flex justify-content-center justify-content-lg-end mb-3'>
                    <div style={{ borderRadius: "10px", backgroundColor: "#DADADA", maxWidth: "500px" }} className='p-4 custom-hover'>
                        <MDBIcon fas icon="leaf" size='3x' className='mb-4' style={{ color: "#36AC88" }} />
                        <h5 className="fw-normal mb-0 text-center">Las aplicaciones blockchain son negativas en carbono</h5>
                    </div>
                </Col>

                <Col lg={6} md={12} className= 'd-flex justify-content-center justify-content-lg-start  mb-3'>
                    <div style={{ borderRadius: "10px", backgroundColor: "#DADADA", maxWidth: "500px" }} className='p-4 custom-hover'>
                        <MDBIcon fab icon="ethereum" size='3x' className='mb-4' style={{ color: "#33CFFF" }} />
                        <h5 className="fw-normal mb-0 text-center">Las aplicaciones blockchain garantizan la transparencia de las transacciones.</h5>
                    </div>
                </Col>

                <Col lg={6} md={12} className='d-flex justify-content-center justify-content-lg-end mb-3'>
                    <div style={{ borderRadius: "10px", backgroundColor: "#DADADA", maxWidth: "500px" }} className='p-4 custom-hover'>
                        <MDBIcon fas icon="shield-alt" size='3x' className='mb-4' style={{ color: "#FF5733" }} />
                        <h5 className="fw-normal mb-0 text-center">Las aplicaciones blockchain ofrecen alta seguridad mediante la criptografía.</h5>
                    </div>
                </Col>

                <Col lg={6} md={12} className= 'd-flex justify-content-center justify-content-lg-start  mb-3'>
                    <div style={{ borderRadius: "10px", backgroundColor: "#DADADA", maxWidth: "500px" }} className='p-4 custom-hover'>
                        <MDBIcon fas icon="database" size='3x' className='mb-4' style={{ color: "#4458B4" }} />
                        <h5 className="fw-normal mb-0 text-center"> Las aplicaciones blockchain aseguran que una vez que se registra la información, es prácticamente imposible alterarla o eliminarla sin ser detectado</h5>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default BlockchainDetails
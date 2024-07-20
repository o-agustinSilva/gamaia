import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBIcon } from 'mdb-react-ui-kit'

const BlockchainDetails = () => {
    return (
        <Container fluid className='mt-5 mb-5'>
            <Row className="text-center d-flex justify-content-center text-black">

                <Col xl={3} lg={6} className='d-flex justify-content-center mb-3'>
                    <div style={{ borderRadius: "20px", backgroundColor: "#DADADA", maxWidth: "400px" }} className='p-4 custom-hover d-flex flex-column justify-content-center'>
                        <MDBIcon fas icon="leaf" size='5x' className='mb-4 icon-gradient' style={{ color: "#14A1B8" }} />
                        <h4 className="fw-normal mb-0 text-center">Las aplicaciones blockchain son negativas en carbono</h4>
                    </div>
                </Col>

                <Col xl={3} lg={6} className='d-flex justify-content-center mb-3'>
                    <div style={{ borderRadius: "20px", backgroundColor: "#DADADA", maxWidth: "400px" }} className='p-4 custom-hover d-flex flex-column justify-content-center'>
                        <MDBIcon fas icon="money-check" size='5x' className='mb-4 icon-gradient' style={{ color: "#14A1B8" }} />
                        <h4 className="fw-normal mb-0 text-center">Las aplicaciones blockchain garantizan la transparencia de las transacciones.</h4>
                    </div>
                </Col>

                <Col xl={3} lg={6} className='d-flex justify-content-center mb-3'>
                    <div style={{ borderRadius: "20px", backgroundColor: "#DADADA", maxWidth: "400px" }} className='p-4 custom-hover d-flex flex-column justify-content-center'>
                        <MDBIcon fas icon="user-shield" size='5x' className='mb-4 icon-gradient' style={{ color: "#14A1B8" }} />
                        <h4 className="fw-normal mb-0 text-center">Las aplicaciones blockchain ofrecen alta seguridad mediante la criptografía.</h4>
                    </div>
                </Col>

                <Col xl={3} lg={6} className='d-flex justify-content-center mb-3'>
                    <div style={{ borderRadius: "20px", backgroundColor: "#DADADA", maxWidth: "400px" }} className='p-4 custom-hover d-flex flex-column justify-content-center'>
                        <MDBIcon fas icon="database" size='5x' className='mb-4 icon-gradient' style={{ color: "#14A1B8" }} />
                        <h4 className="fw-normal mb-0 text-center">Las aplicaciones blockchain garantizan que la información es casi imposible de alterar sin ser detectado.</h4>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default BlockchainDetails
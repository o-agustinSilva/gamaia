import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBIcon } from 'mdb-react-ui-kit'
import AOS from 'aos';
import 'aos/dist/aos.css'

const BlockchainDetails = () => {
    useEffect(() => {
        AOS.init({duration: 900})
    }, [])

    return (
        <Container className='mb-5 p-5'>
            <Row className="text-center d-flex justify-content-center text-white">

                <Col xl={3} lg={6} className='d-flex justify-content-center mb-3' data-aos='zoom-in'>
                    <div style={{ borderRadius: "20px", backgroundColor: "#FFFFFF", maxWidth: "300px", minHeight: '300px' }} className='p-4 custom-hover d-flex flex-column justify-content-center'>
                        <MDBIcon fas icon="leaf" size='5x' className='mb-4 icon-gradient' />
                        <h4 className="fw-normal mb-0 text-center text-black">Son negativas en carbono</h4>
                    </div>
                </Col>

                <Col xl={3} lg={6} className='d-flex justify-content-center mb-3' data-aos='zoom-in'>
                    <div style={{ borderRadius: "20px", backgroundColor: "#FFFFFF", maxWidth: "300px", minHeight: '300px' }} className='p-4 custom-hover d-flex flex-column justify-content-center'>
                        <MDBIcon fas icon="money-check" size='5x' className='mb-4 icon-gradient'/>
                        <h4 className="fw-normal mb-0 text-center text-black">Garantizan la transparencia de las transacciones.</h4>
                    </div>
                </Col>

                <Col xl={3} lg={6} className='d-flex justify-content-center mb-3' data-aos='zoom-in'>
                    <div style={{ borderRadius: "20px", backgroundColor: "#FFFFFF", maxWidth: "300px", minHeight: '300px' }} className='p-4 custom-hover d-flex flex-column justify-content-center'>
                        <MDBIcon fas icon="user-shield" size='5x' className='mb-4 icon-gradient' />
                        <h4 className="fw-normal mb-0 text-center text-black">Ofrecen alta seguridad mediante la criptografía.</h4>
                    </div>
                </Col>

                <Col xl={3} lg={6} className='d-flex justify-content-center mb-3' data-aos='zoom-in'>
                    <div style={{ borderRadius: "20px", backgroundColor: "#FFFFFF", maxWidth: "300px", minHeight: '300px' }} className='p-4 custom-hover d-flex flex-column justify-content-center'>
                        <MDBIcon fas icon="database" size='5x' className='mb-4 icon-gradient' />
                        <h4 className="fw-normal mb-0 text-center text-black">Garantizan que la información sea inalterable</h4>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default BlockchainDetails
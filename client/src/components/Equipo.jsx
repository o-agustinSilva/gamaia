import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Equipo = () => {
    useEffect(() => {
        AOS.init({duration: 900})
    }, [])

    return (
        <Container fluid className='text-center margin-container d-flex flex-column justify-content-center p-5' id="equipo" style={{background: "#dadada", height:"400px"}}>
            <Row data-aos="fade-up">
                <h1 style={{color: "#47078a"}}>Nuestro equipo</h1>
            </Row>
            <Row className='mt-5'>
                <Col sm={12} lg={6} xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade">
                    <MDBCard style={{ backgroundColor: "#222121", width: '370px' }} className='custom-card text-white'>
                        <Row>
                            <Col xs={4} className='d-flex justify-content-center align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/4.jpg'
                                    className='rounded-circle'
                                    style={{
                                        boxShadow: "1px 4px 10px #13c1d2"
                                    }}
                                />
                            </Col>
                            <Col xs={8} className='d-flex justify-content-start justify-content-sm-center justify-content-sm-center'>
                                <MDBCardBody>
                                    <h6 style={{ color: "#13c1d2" }}>Persona 1</h6>
                                    <MDBCardText>
                                        Ingeniera en sistemas
                                    </MDBCardText>
                                </MDBCardBody>
                            </Col>
                        </Row>
                    </MDBCard>
                </Col>      
                <Col sm={12} lg={6} xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade">
                    <MDBCard style={{ backgroundColor: "#e3e3e3", width: '370px' }} className='custom-card'>
                        <Row>
                            <Col xs={4} className='d-flex justify-content-center align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/4.jpg'
                                    className='rounded-circle'
                                    style={{
                                        boxShadow: "1px 4px 10px #47078a"
                                    }}
                                />
                            </Col>
                            <Col xs={8} className='d-flex justify-content-start justify-content-sm-center justify-content-sm-center'>
                                <MDBCardBody>
                                    <h6 style={{ color: "#47078a" }}>Persona 1</h6>
                                    <MDBCardText>
                                        Ingeniera en sistemas
                                    </MDBCardText>
                                </MDBCardBody>
                            </Col>
                        </Row>
                    </MDBCard>
                </Col>      
                <Col sm={12} lg={6} xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade">
                    <MDBCard style={{ backgroundColor: "#e3e3e3", width: '370px' }} className='custom-card'>
                        <Row>
                            <Col xs={4} className='d-flex justify-content-center align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/4.jpg'
                                    className='rounded-circle'
                                    style={{
                                         border: "2px #47078a solid"
                                    }}
                                />
                            </Col>
                            <Col xs={8} className='d-flex justify-content-start justify-content-sm-center justify-content-sm-center'>
                                <MDBCardBody>
                                    <h6 style={{ color: "#47078a" }}>Persona 1</h6>
                                    <MDBCardText>
                                        Ingeniera en sistemas
                                    </MDBCardText>
                                </MDBCardBody>
                            </Col>
                        </Row>
                    </MDBCard>
                </Col>      
                <Col sm={12} lg={6} xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade">
                    <MDBCard style={{ backgroundColor: "#e3e3e3", width: '370px' }} className='custom-card'>
                        <Row>
                            <Col xs={4} className='d-flex justify-content-center align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/4.jpg'
                                    className='rounded-circle'
                                />
                            </Col>
                            <Col xs={8} className='d-flex justify-content-start justify-content-sm-center justify-content-sm-center'>
                                <MDBCardBody>
                                    <h6 style={{ color: "#47078a" }}>Persona 1</h6>
                                    <MDBCardText>
                                        Ingeniera en sistemas
                                    </MDBCardText>
                                </MDBCardBody>
                            </Col>
                        </Row>
                    </MDBCard>
                </Col>      
            </Row>
        </Container>
    );
}

export default Equipo

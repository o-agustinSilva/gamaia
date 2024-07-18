import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

const Equipo = () => {
    return (
        <Container className='text-center margin-container d-flex flex-column justify-conytent-center'>
            <Row>
                <h1>Nuestro equipo</h1>
            </Row>
            <Row className='mt-5'>
                <Col sm={12} lg={6} xl={4} className='mb-3 d-flex justify-content-center'>
                    <MDBCard style={{ backgroundColor: "#201F1F", minWidth: '370px' }} className='card-hover custom-card'>
                        <Row>
                            <Col sm={4} className='d-flex justify-content-center justify-content-md-end align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/4.jpg'
                                    className='rounded-circle'
                                />
                            </Col>
                            <Col sm={8} className='d-flex justify-content-start justify-content-sm-center justify-content-sm-center'>
                                <MDBCardBody>
                                    <h6 className='card-title-hover' style={{ color: "#33E3FF" }}>Karina Manzaraz</h6>
                                    <MDBCardText className='text-white card-text-hover'>
                                        Ingeniera en sistemas
                                    </MDBCardText>
                                </MDBCardBody>
                            </Col>
                        </Row>
                    </MDBCard>
                </Col>
                <Col sm={12} lg={6} xl={4} className='mb-3 d-flex justify-content-center'>
                    <MDBCard style={{ backgroundColor: "#201F1F", minWidth: '370px' }} className='card-hover custom-card'>
                        <Row>
                            <Col sm={4} className='d-flex justify-content-center justify-content-md-end align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                                    className='rounded-circle'
                                />
                            </Col>
                            <Col sm={8} className='d-flex justify-content-start justify-content-sm-center justify-content-sm-center'>
                                <MDBCardBody>
                                    <h6 className='card-title-hover' style={{ color: "#33E3FF" }}>Agustin Silva</h6>
                                    <MDBCardText className='text-white card-text-hover'>
                                        Desarrollador backend
                                    </MDBCardText>
                                </MDBCardBody>
                            </Col>
                        </Row>
                    </MDBCard>
                </Col>
                <Col sm={12} lg={6} xl={4} className='mb-3 d-flex justify-content-center'>
                    <MDBCard style={{ backgroundColor: "#201F1F", minWidth: '370px' }} className='card-hover custom-card'>
                        <Row>
                            <Col sm={4} className='d-flex justify-content-center justify-content-md-end align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                    className='rounded-circle'
                                />
                            </Col>
                            <Col sm={8} className='d-flex justify-content-start justify-content-sm-center justify-content-sm-center'>
                                <MDBCardBody>
                                    <h6 className='card-title-hover' style={{ color: "#33E3FF" }}>Candela Lucas</h6>
                                    <MDBCardText className='text-white card-text-hover'>
                                        Desarrolladora frontend
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

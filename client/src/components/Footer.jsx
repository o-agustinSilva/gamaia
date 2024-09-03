import React, { useEffect } from 'react';
import AOS from 'aos';
import { Row, Col } from 'react-bootstrap';
import 'aos/dist/aos.css'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, [])

    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <MDBContainer fluid className='p-3'>
                <Row>
                    <Col sm={12} md={4}>
                        <div className='d-flex align-items-center justify-content-center justify-content-md-start text-sm-center p-3'>
                            <img src='/favicon.png' width={30} height={30} />
                            <p className='mb-0 mx-4'>© Copyright 2024</p>
                        </div>
                    </Col>
                    <Col sm={12} md={8} className='d-flex justify-content-center justify-content-md-end align-items-center'>
                        <p className='mb-0 mx-2'>+54 2901 518500</p>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#dd4b39' }}
                            href='mailto:contacto@gamaia.com.ar'
                            role='button'
                            target='_blank'
                        >
                            <MDBIcon fab icon='google' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='https://www.instagram.com/gamaia_ti/'
                            role='button'
                            target='_blank'
                        >
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>
                    </Col>

                </Row>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer

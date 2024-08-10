import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BlockchainDetails from './BlockchainDetails';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Blockchain = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <Container fluid className='p-5 d-flex flex-column justify-content-center margin-container spacer' data-aos="fade-up">
            <Row>
                <Col md={12}>
                    <h3 className='text-center'>Todas las soluciones que proponemos utilizan la tecnología <span style={{ color: '#085e82' }}>blockchain</span> en sus cimientos, incorporando transparencia y seguridad. </h3>
                </Col>
            </Row>
            <BlockchainDetails />
        </Container>

    )
}

export default Blockchain
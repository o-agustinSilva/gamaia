import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BlockchainDetails from './BlockchainDetails';

const Blockchain = () => {
    return (
        <Container fluid className='mt-5 p-5 d-flex flex-column justify-content-center' style={{
            background: '#201F1F'
          }}>
            <Row>
                <Col md={12}>
                    <h3 className='text-white text-center'>
                        Gamaia significa <span style={{ color: '#FF5733' }}>“cadena”</span>
                    </h3>
                    <p className='text-white text-center'>Todas las soluciones que proponemos utilizan la tecnología blockchain en sus cimientos, incorporando transparencia y seguridad. </p>
                </Col>
            </Row>
            <BlockchainDetails/>
            
        </Container>

    )
}

export default Blockchain
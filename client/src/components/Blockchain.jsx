import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BlockchainDetails from './BlockchainDetails';

const Blockchain = () => {
    return (
        <Container fluid className='p-5 d-flex flex-column justify-content-center margin-container spacer'>
            <Row>
                <Col md={12}>
                    <h1 className='text-center'>
                        Gamaia significa <span style={{ color: '#15CFEE' }}>cadena</span>
                    </h1>
                    <p className='text-center'>Todas las soluciones que proponemos utilizan la tecnología blockchain en sus cimientos, incorporando transparencia y seguridad. </p>
                </Col>
            </Row>
            <BlockchainDetails />
        </Container>

    )
}

export default Blockchain
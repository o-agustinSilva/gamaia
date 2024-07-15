import React from 'react';
import { Row, Col } from 'react-bootstrap'
import {
  MDBBtn
} from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <header>
      <div
        className='text-center bg-image'
        style={{ backgroundImage: "url('https://p4.wallpaperbetter.com/wallpaper/202/583/701/logo-currency-fon-cryptocurrency-blockchain-hd-wallpaper-preview.jpg')", height: '800px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex align-items-center h-100 p-5'>
            <div className='text-white'>
              <Col>
                <Row>
                  <h3 className='mb-3 d-flex'>GAMAIA</h3>
                </Row>
              </Col>
              <Row>
                <Col md={10}>
                  <h1 className='mb-3 text-start'>Acompañamos la evolución digital de las empresas basándonos en el uso responsable de la tecnología para lograr un impacto positivo en la sociedad y el planeta.</h1>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
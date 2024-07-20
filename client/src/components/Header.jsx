import React from 'react';
import { Row, Col } from 'react-bootstrap'
import CustomNavbar from './Navbar';

const Header = () => {
  return (
    <header className='text-center margin'
      style={{height: '650px' }}
      id='header-img'
      >
        
      <CustomNavbar />

      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <div className='d-flex align-items-center h-100 p-5'>
          <div className='text-white'>
            <Col>
              <Row>
                <h3 className='mb-3 d-flex' style={{ color: "#33E3FF" }}>GAMAIA</h3>
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
    </header>
  );
}

export default Header
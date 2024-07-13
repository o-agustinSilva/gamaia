import React from 'react';
import Navbar from '../navbar/Navbar';
import {
  MDBBtn
} from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <header>
      <Navbar/>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '600px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100 p-5'>
            <div className='text-white'>
              <h1 className='mb-3'>GAMAIA</h1>
              <h4 className='mb-3'>Acompañamos la evolución digital de las empresas basándonos en el uso responsable de la tecnología para lograr un impacto positivo en la sociedad y el planeta.</h4>
              <MDBBtn tag="a" outline size="lg">
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
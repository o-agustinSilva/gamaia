import React from 'react';
import CustomNavbar from '../components/Navbar';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Blockchain from '../components/Blockchain';
import Servicios from '../components/Servicios';
import Productos from '../components/Productos';
import Equipo from '../components/Equipo';
import Contactanos from '../components/Contactanos';


export function IndexScreen() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Blockchain />
      <Servicios />
      <Productos />
      {/* <Equipo /> */}
      <Contactanos />
    </div>
  );
}

export default IndexScreen;

import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Blockchain from '../components/Blockchain';
import Servicios from '../components/Servicios';
import Productos from '../components/Productos';
import Equipo from '../components/Equipo';


export function IndexScreen() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Blockchain />
      <Servicios />
      <Productos />
      <Equipo />
    </div>
  );
}

export default IndexScreen;

import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Blockchain from '../components/Blockchain';
import BlockchainDetails from '../components/BlockchainDetails';

export function IndexScreen() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Intro />
      <Blockchain />
      <Intro />
      </div>
  );
}

export default IndexScreen;

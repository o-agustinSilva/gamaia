import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IndexScreen } from './screens/IndexScreen';
import BodegaAgil from './components/BodegaAgil';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexScreen />} />
        <Route path="/bodega" element={<BodegaAgil />} />
      </Routes>
    </>
  )
}

export default App
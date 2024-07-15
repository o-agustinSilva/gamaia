import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IndexScreen } from './screens/IndexScreen';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexScreen />} class />
      </Routes>
    </>
  )
}

export default App
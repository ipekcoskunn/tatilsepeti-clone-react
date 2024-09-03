import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tour from './pages/Tour/Tour';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tour' element={<Tour />} />
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/pages/Home'
import Programs from './components/pages/Programs'
import Program from './components/pages/Program'
import Music from './components/pages/Music'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='programs' element={<Programs />} />
          <Route path='programs/:id' element={<Program />} />
          <Route path='music' element={<Music />} />
          <Route path='about' element={<About />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/NavBar/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
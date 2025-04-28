import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills'
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    
    <div>
      <h1>Hello Portfolio</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

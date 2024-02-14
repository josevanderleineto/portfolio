// AppRoutes.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Projects from '../Pages/Projects/Projects';
import Contact from '../Pages/Contact/Contact';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

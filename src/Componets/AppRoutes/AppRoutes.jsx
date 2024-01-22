// AppRoutes.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills';
import Projects from '../Pages/Projects/Projects';
import Sitemap from '../../../SiteMap';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        {/* Adicione mais rotas conforme necessário */}

        {/* Rota para o Sitemap */}
        <Route path="/sitemap.xml" element={<Sitemap />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;

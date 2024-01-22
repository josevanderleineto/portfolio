/* eslint-disable no-unused-vars */
// Sitemap.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Sitemap = () => {
  // Exclua as rotas que você não deseja incluir no sitemap
//   const excludedRoutes = ['/about'];

  return (
    <Routes>
      <Route path="/" element={<url>...</url>}></Route>
      <Route path="/about" element={<url>...</url>}></Route>
      <Route path="/skills" element={<url>...</url>}></Route>
      <Route path="/projects" element={<url>...</url>}></Route>
      {/* Adicione mais rotas conforme necessário, excluindo as rotas que você deseja omitir */}
    </Routes>
  );
};

export default Sitemap;

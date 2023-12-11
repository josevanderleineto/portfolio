import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Menu from './Componets/Menu/Menu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o estilo do Bootstrap
import Projets from './Componets/Projects/Projects.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

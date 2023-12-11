import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Menu from './Componets/Menu/Menu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o estilo do Bootstrap
import Projets from './Componets/Projects/Projects.jsx';

ReactDOM.createRoot(document.getElementById('menu')).render(
  <React.StrictMode>
    <header>
      <Menu />
    </header>
  </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('projects')).render(
  <React.StrictMode>
    

      <div>
        <Projets />
      </div>

      
  </React.StrictMode>,
);

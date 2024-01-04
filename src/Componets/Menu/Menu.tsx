// Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Menu/Menu.css'
 
const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className='item'>Home</Link>
        </li>
        <li>
          <Link to="/about" className='item'>About</Link>
        </li>
        <li>
          <Link to="/skills" className='item'>Skills</Link>
        </li>
        <li>
          <Link to="/projects" className='item'>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;


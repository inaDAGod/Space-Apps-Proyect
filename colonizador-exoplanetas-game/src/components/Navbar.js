import React, { useState } from 'react';
import './Navbar.css';  // Asegúrate de tener este archivo para estilos personalizados.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">NasaAmigos</a>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li><a href="#play">Play</a></li>
            <li><a href="#trivia">Trivia</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-hamburger"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

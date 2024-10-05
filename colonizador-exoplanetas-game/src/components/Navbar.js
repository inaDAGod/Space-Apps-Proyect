import React, { useState, useEffect } from 'react';
import './Navbar.css';  // Asegúrate de tener este archivo para estilos personalizados.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);  // Oculta el navbar al hacer scroll hacia abajo
      } else {
        setIsVisible(true);   // Muestra el navbar al hacer scroll hacia arriba
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? '' : 'hidden'}`}>
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

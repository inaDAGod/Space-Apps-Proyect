import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Asegúrate de tener este archivo para estilos personalizados.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
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
        <Link to="/" className="navbar-logo">EXOplanetas</Link> {/* Cambiado a Link */}
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li><Link to="/game">Play</Link></li>
            <li><Link to="/trivia">Trivia</Link></li> {/* Añadido el enlace a Trivia */}
            <li><Link to="/gallery">Gallery</Link></li>
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

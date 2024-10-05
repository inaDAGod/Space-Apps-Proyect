import React from 'react';
import './Footer.css';  // Archivo de estilos correspondiente.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Contacto</h3>
          <p>Somos los NasaAmigos. Si tienes preguntas, no dudes en contactarnos:</p>
          <ul className="contact-info">
            <li>Email: daniela.Guzman@gmail.com</li>
            <li>Email: JesusImana@gmail.com</li>
            <li>Email: AndyLafferttf@gmail.com.com</li>
            <li>Email: joshnisth@gmail.com</li>
            <li>Email: ayanaSiegle@gmail.com</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Enlaces útiles</h3>
          <ul className="footer-links">
            <li><a href="#navbar">Ir al inicio</a></li>
            <li><a href="#play">Play</a></li>
            <li><a href="#trivia">Trivia</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NasaAmigos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

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
            <li>Email: nasaamigos1@gmail.com</li>
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

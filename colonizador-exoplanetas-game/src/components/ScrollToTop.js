import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';  // Asegúrate de tener el archivo CSS

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ⬆ Volver arriba
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

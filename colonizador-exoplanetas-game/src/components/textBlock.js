import React from 'react';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">EXOplanetas</h1>
                <p id="textblock-content">
                    Eres un explorador espacial.<br /><br />
                    Estas explorando el espacio en busca de encontrar un exoplaneta habitable.<br /><br />
                    Tomando en cuenta la información del exploplaneta debes decidir si gastar tus recursos para habitarlo o no.<br /><br />
                    Pasa los niveles y ve si puedes conquistar todos los exoplanetas habitables.
                </p>
            </div>
        </div>
    );
}

export default TextBlock;

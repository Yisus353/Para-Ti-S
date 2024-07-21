import React from 'react';
import './Carta.css'; // Asegúrate de tener este archivo CSS para el estilo

const Carta = ({ onClose }) => {
  return (
    <div className="carta-container">
      <div className="happy-valentines">
        <div className="valentines-day-card">
          <div className="clouds"></div>
          <div className="hearts">
            <div className="heartOne">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
            <div className="heartTwo">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
            <div className="heartThree">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
            <div className="heartFour">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
            <div className="heartFive">
              <div className="left-side"></div>
              <div className="right-side"></div>
            </div>
          </div>
          <div className="text">
            <span>Only dura 5:30 min, pero yo te la dedicaria toda la vida<br />❤️</span>
          </div>
        </div>
            <audio  autoPlay>
                <source src="LeeHi-ONLY.mp3" type="audio/mpeg"/>
            </audio>
      </div>
    </div>
  );
};

export default Carta;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const goToLost = () => {
    navigate('/lost');
  };

  const goToFound = () => {
    navigate('/found');
  };
  return (
    <div className="hero">
      <div className="hero-content">
        <p>Lost Something? Found Something?</p>
        <h1>ReclaimIt — Where Lost Items Find Their Way Home</h1>
        <p className="hero-subtext">
          ReclaimIt is your campus/city companion for reporting lost items and returning found ones. 
          Together, we build a more helpful community.
        </p>
        <div className="hero-buttons">
          <button onClick={goToLost} className="hero-btn report">Report an Item</button>
          <button onClick={goToFound} className="hero-btn browse">Browse Found Items</button>
        </div>
      </div>
      <img src="lost-and-found-software.webp" alt="ReclaimIt Banner" className="hero-img" />
    </div>
  );
};

export default HeroSection;


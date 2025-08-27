import React from 'react';
import './Style.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <p><b>  Every Item Deserves a Way Back Home.</b></p>
      <div className="top-options">
        <span>
          <select>
            <option>ENGLISH</option>
            <option>TAMIL</option>
            <option>HINDI</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default TopBar;

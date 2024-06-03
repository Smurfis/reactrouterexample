import React from 'react';
import './HeaderComponent.css'; // Ensure this path is correct or adjust it accordingly
import logo  from '../imgs/CHlogo.png';

const HeaderComponent = ({ children }) => {
  return (
    <div className="headerComponent">
      <div className="header">
        <img src={logo} height="150px" width="150px" alt="Logo" className="logo" />
        <div className="divider"></div>
        <p className="message">
          TIME TO OPEN YOUR LIFE UP TO THE PATH OF WELLNESS AND LIMITLESS WELLBEING
        </p>
      </div>
      <div className="centered">
      <div className="content">
        {children}
      </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

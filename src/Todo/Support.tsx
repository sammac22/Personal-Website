import React from 'react';
import './Todo.css';

const Support: React.FC = () => {
  return (
    <div className="app">
      {/* This is me */}
      <h1 className="home-header text-large">
        {`// TODO`}
      </h1>

      {/* Main page content, centered */}
      <div className="centered-container">
        {/* Cowboy hat */}
        <div>
          <img 
            src="/Hat.png" 
            alt="Hat icon" 
            className="icon-large"
          />
        </div>

        {/* Support message */}
        <p className="text-large support-message">
          <a href="https://forms.gle/K4xBoWXafp68NMqM9" className="link">
            If you need me, fill in this form.
          </a>
        </p>
      </div>

    </div>
  );
};

export default Support;

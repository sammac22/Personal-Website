import React from 'react';
import './Pact.css';

const Pact: React.FC = () => {
  return (
    <div className="app">
      {/* This is me */}
      <h1 className="home-header text-large">
        {`Pact`}
      </h1>

      {/* Description */}
      <p className="todo-description text-medium">
        I need my friends to keep me accountable.
      </p>

      {/* Warning */}
      <div className="todo-warning text-small">
        <p>This app lets you make daily or weekly Pacts with friends.</p>
      </div>

      {/* Action link */}
      <div className="home-book text-small">
        <a href="https://www.jenniferackermanauthor.com/genius-ofbirds" className="link">
          Everyone in the Pact needs to complete it or everyone loses their streak
        </a>
      </div>

      {/* Bark twice if you're in Milwaukee */}
      <div className="home-icon">
        <img 
          src="/Hat.png" 
          alt="Hat icon" 
          className="icon"
        />
      </div>
    </div>
  );
};

export default Pact;


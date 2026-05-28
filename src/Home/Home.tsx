import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="app">
      {/* This is me */}
      <h1 className="home-header text-large">
        Sam MacGinty
      </h1>

      {/* Hi again */}
      <p className="home-greeting text-medium">
        Hi, nice to meet you.
      </p>

      {/* Why are you in here? */}
      <div className="home-contact text-small">
        <a href="https://apps.apple.com/us/app/pact-accountability/id6755131489" className="link">
          This is how I force myself to build good habits
        </a>
      </div>

      {/* This one is serious */}
      <div className="home-book text-small">
        <a href="https://sammacginty.substack.com/" className="link">
          Read my thoughts here
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

export default Home;

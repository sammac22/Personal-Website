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
        <p>For acting inquiries</p>
        <p>please reach out to my</p>
        <p>agent</p>
      </div>

      {/* This one is serious */}
      <div className="home-book text-small">
        <a href="https://www.jenniferackermanauthor.com/genius-ofbirds" className="link">
          You should read this book
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

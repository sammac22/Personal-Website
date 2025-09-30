import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* This is me */}
      <div className="name">
        Sam MacGinty
      </div>

      {/* Hi again */}
      <div className="greeting">
        Hi, nice to meet you.
      </div>

      {/* Why are you in here? */}
      <div className="acting-inquiries">
        <div>For acting inquiries</div>
        <div>please reach out to my</div>
        <div>agent</div>
      </div>

      {/* This one is serious */}
      <div className="book-recommendation">
        <a href="https://www.jenniferackermanauthor.com/genius-ofbirds" className="book-link">
          You should read this book
        </a>
      </div>

      {/* Bark twice if you're in Milwaukee */}
      <div className="cowboy-hat">
        <img 
          src="/Hat.png" 
          alt="Hat icon" 
          width="40" 
          height="24"
        />
      </div>
    </div>
  );
};

export default App;

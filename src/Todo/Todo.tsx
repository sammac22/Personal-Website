import React from 'react';
import './Todo.css';

const Todo: React.FC = () => {
  return (
    <div className="app">
      {/* This is me */}
      <h1 className="home-header text-large">
        // TODO
      </h1>

      {/* Description */}
      <p className="todo-description text-medium">
        I wanted a simple to-do app with an interactive widget.
      </p>

      {/* Warning */}
      <div className="todo-warning text-small">
        <p>It gets angry if you have too many TODOs. You wouldn't like it when it's angry.</p>
      </div>

      {/* Action link */}
      <div className="home-book text-small">
        <a href="https://www.jenniferackermanauthor.com/genius-ofbirds" className="link">
          So I made it.
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

export default Todo;

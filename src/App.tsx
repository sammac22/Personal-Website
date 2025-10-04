import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Todo from './Todo/Todo';
import Privacy from './Todo/Privacy';
import Support from './Todo/Support';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TODO" element={<Todo />} />
        <Route path="/TODO/Privacy" element={<Privacy />} />
        <Route path="/TODO/Support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;

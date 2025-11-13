import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Todo from './Todo/Todo';
import Privacy from './Todo/Privacy';
import Support from './Todo/Support';
import Pact from './Pact/Pact';
import PactPrivacy from './Pact/Privacy';
import PactSupport from './Pact/Support';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TODO" element={<Todo />} />
        <Route path="/TODO/Privacy" element={<Privacy />} />
        <Route path="/TODO/Support" element={<Support />} />
        <Route path="/Pact" element={<Pact />} />
        <Route path="/Pact/Privacy" element={<PactPrivacy />} />
        <Route path="/Pact/Support" element={<PactSupport />} />
      </Routes>
    </Router>
  );
};

export default App;

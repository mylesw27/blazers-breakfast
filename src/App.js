import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Checkout from './components/pages/Checkout'
import Careers from './components/pages/Careers'
import Locations from './components/pages/Locations'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route 
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/locations"
            element={<Locations />}
          />
          <Route
            path="/careers"
            element={<Careers />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

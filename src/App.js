import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation } from './Component/Navigation';
import { Home } from './Home';
import { Resume } from './Resume';
import { Examples } from './Examples';
import { About } from './About';
import { Contact } from './Contact';
import Jodi from './Jodi';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '1em' }}>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jodi" element={<Jodi />} />
      </Routes>
    </Router>
  );
}

export default App;

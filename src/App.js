import React, { useState, useEffect, useHistory } from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Link, HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './Component/Navigation';
import { Resume } from './Resume';
import { Home } from './Home';
import { Dis as DIS } from './Dis';
import { About } from './About';
import { Contact } from './Contact';
import { NotFound } from './NotFound';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    // Set the initial currentRoute
    setCurrentRoute('');
  }, []);

  const handleRouteChange = (newRoute) => {
    setCurrentRoute(newRoute);
  };

  return (
    <>
      <Router>
        <div style={{paddingBottom: '1em'}}>
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/dis" element={<DIS />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

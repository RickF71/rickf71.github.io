import React, { useState, useEffect, useHistory } from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Link, HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Resume } from './Resume';
import { Home } from './Home';
import { Examples } from './Examples';
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
      <Navbar fg="dark" expand="md" variant="light" style={{backgroundColor:'#FFB84E'}}>
        <Container className="d-flex justify-content-center App">
          <NavbarBrand to="/" style={{fontSize:'2em', paddingRight:'1em' }}>Richard Fleischman</NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link as={Link} to={'/resume'}>Resume</Nav.Link>
              <Nav.Link as={Link} to={"/examples"}>Examples</Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{height: '1em'}}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    {/* <Router>
      <Routes>
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;

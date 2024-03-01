import React, { useState, useEffect, useHistory } from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Link, HashRouter as Router, Routes, Route } from 'react-router-dom';


// import './../bootstrap/dist/css/bootstrap.css';
// import './../App.css';

export const Navigation = () => {

  return (
    <>
        <Navbar fg="dark" expand="md" variant="light" style={{backgroundColor:'#C49163'}}>
            <Container className="d-flex justify-content-center App">
            <NavbarBrand to="/" style={{fontSize:'1.5em', paddingRight:'1em' }}>Richard Fleischman</NavbarBrand>
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
    </>
  );
}


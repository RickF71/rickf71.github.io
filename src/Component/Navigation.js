import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Navbar
      expand="md"
      variant="light"
      style={{
        backgroundColor: '#ECD7C4',
        borderBottom: '1px solid rgba(0,0,0,0.15)'
      }}
    >
      <Container className="d-flex align-items-center">
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            color: '#2b1d12'
          }}
        >
          Richard Fleischman
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <NavItem to="/" label="Home" />
            <NavItem to="/resume" label="Resume" />
            <NavItem to="/examples" label="Examples" />
            <NavItem to="/about" label="About" />
            <NavItem to="/contact" label="Contact" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavItem = ({ to, label }) => (
  <Nav.Link
    as={NavLink}
    to={to}
    style={({ isActive }) => ({
      marginLeft: '0.75rem',
      marginRight: '0.75rem',
      fontWeight: isActive ? 600 : 400,
      color: isActive ? '#000' : '#3a2a1c',
      borderBottom: isActive ? '2px solid #000' : '2px solid transparent'
    })}
  >
    {label}
  </Nav.Link>
);

import { Nav, Container } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Resume } from './Resume';
import { Resume2 } from './Resume2';
import { Home } from './Home';
import { Examples } from './Examples';
import { About } from './About';
import { Contact } from './Contact';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const theme = {
  primary: '#00b8d4',
  secondary: '#f50057'
};

const Navmain = () => (
  // <ThemeProvider theme={theme}>
    <Navbar bg="dark" fg="light" expand="md" variant="dark">
      <Container className="App">
        <NavbarBrand to="/">Richard</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/resume2">Resume</Nav.Link>
            <Nav.Link as={Link} to="/examples">Examples</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  // </ThemeProvider>
);

function App() {
  return (
    <Router>
        <Navmain />
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/resume" element={ <Resume/> } />
        <Route path="/resume2" element={ <Resume2/> } />
        <Route path="/examples" element={ <Examples/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        </Routes>
    </Router>
  );
}

export default App;

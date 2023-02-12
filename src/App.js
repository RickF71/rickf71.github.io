import { Navbar, NavbarBrand, Nav, Container, Row, Col
        , ThemeProvider } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar bg="dark" fg="light" expand="md" variant="dark">
        <Container className="App">
          <NavbarBrand href="#">Richard Fleischman</NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/resume2">Resume</Nav.Link>
              {/* <Nav.Link href="/resume2">Resume2</Nav.Link> */}
              <Nav.Link href="/examples">Examples</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* Define Routes  */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/resume" element={ <Resume/> } />
        <Route path="/resume2" element={ <Resume2/> } />
        <Route path="/examples" element={ <Examples/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

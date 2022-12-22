import { Navbar, NavbarBrand, Nav, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="dark" fg="light" expand="md" variant="dark">
        <Container className="App">
          <NavbarBrand href="#">My App</NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Resume</Nav.Link>
              <Nav.Link href="#">Examples</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="App-header">
        <h1>H3llo!</h1>
        
        <p>
            <a href="https://paletton.com/#uid=63J1p0k7c9i9ioD9wiNc2i2fZlS">Paletton Color Link</a>
        </p>
        
      </header>
    </div>
  );
}

export default App;

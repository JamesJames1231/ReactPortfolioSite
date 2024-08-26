import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <>
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">James V3.1</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavDropdown title="My Links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Contact">
                                Contact Me
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#Github">
                                GitHub
                            </NavDropdown.Item>
                            
                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#LinkedIn">
                                LinkedIn
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default App;
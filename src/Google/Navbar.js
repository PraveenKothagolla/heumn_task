import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
             <img  style={{ marginRight: "40px" }} height="40" src="/images/chrome_png-removebg-preview.png">
             </img> <span className="fw-bold">Chrome</span>
            <span className="ms-3 fw-bold">Home</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-bold">The Browser by Google</Nav.Link>
            <Nav.Link href="#features" className="fw-bold">Features</Nav.Link>
            <Nav.Link href="#support" className="fw-bold">Support</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

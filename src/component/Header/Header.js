import React from 'react';
import './Header.css';
import { Navbar,Nav,Container } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="navbar">
    <Navbar.Brand className="tital">Next Geneation Coder</Navbar.Brand>

            <Navbar  expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-link">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#servies">Servies</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#cibtract">Contract</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
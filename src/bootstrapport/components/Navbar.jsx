// src/components/MyNavbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'; // Import your custom CSS file

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(expanded ? false : true);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="shadow-lg glass-navbar fixed-top">
      <Container fluid>
        {/* Add a custom className for the logo */}
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          Debasish
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav">
          <span className="custom-toggle-icon">
            {expanded ? <FiX size={30} /> : <FiMenu size={30} />}
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="custom-nav ms-auto" onBlur={handleNavLinkClick}   onClick={handleNavLinkClick}>
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

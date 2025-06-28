import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleToggle = () => setExpanded((prev) => !prev);
  const handleNavLinkClick = () => setExpanded(false);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll <= prevScrollPos);
      setPrevScrollPos(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`custom-navbar shadow-lg fixed-top ${visible ? 'navbar-show' : 'navbar-hide'}`}
    >
      <Container fluid>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="brand-logo"
          data-aos="fade-right"
        >
          Debasish
        </Navbar.Brand>

        <Navbar.Toggle onClick={handleToggle} aria-controls="navbar-nav">
          <span className="custom-toggle-icon">
            {expanded ? <FiX size={26} /> : <FiMenu size={26} />}
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="custom-nav ms-auto" onClick={handleNavLinkClick}>
            <Nav.Link 
              as={NavLink} 
              to="/" 
              end 
              data-aos="fade-down" 
              data-aos-delay="100"
            >
              <FiHome /> Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              data-aos="fade-down" 
              data-aos-delay="200"
            >
              <FiUser /> About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/projects" 
              data-aos="fade-down" 
              data-aos-delay="300"
            >
              <FiFolder /> Projects
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              data-aos="fade-down" 
              data-aos-delay="400"
            >
              <FiMail /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll <= prevScrollPos || currentScroll < 10);
      setPrevScrollPos(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setShowOffcanvas(false);
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        expanded={expanded}
        expand="lg"
        fixed="top"
        className={`custom-navbar ${visible ? 'navbar-show' : 'navbar-hide'}`}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-logo" data-aos="flip-right">
            Debasish
          </Navbar.Brand>

          <Navbar.Toggle onClick={toggleOffcanvas} aria-label="Toggle navigation">
            <span className="custom-toggle-icon">
              {showOffcanvas ? <FiX size={28} /> : <FiMenu size={28} />}
            </span>
          </Navbar.Toggle>

          {/* Desktop Navigation */}
          <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex justify-content-end">
            <Nav className="custom-nav" onClick={closeMenu}>
              <Nav.Link as={NavLink} to="/" end data-aos="fade-down" data-aos-delay="100">
                <FiHome /> Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" data-aos="fade-down" data-aos-delay="200">
                <FiUser /> About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/projects" data-aos="fade-down" data-aos-delay="300">
                <FiFolder /> Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" data-aos="fade-down" data-aos-delay="400">
                <FiMail /> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={showOffcanvas}
        onHide={closeMenu}
        placement="end"
        className="d-lg-none side-offcanvas"
      >
        <Offcanvas.Header className="custom-close-header">
          <Offcanvas.Title className="offcanvas-title d-flex justify-content-between w-100 align-items-center">
            <Link to="/" className="brand-logo" onClick={closeMenu}>
              Debasish
            </Link>
            <span
              className="custom-close-icon animated-close"
              role="button"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <FiX size={26} />
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="offcanvas-gradient">
          <Nav className="flat-nav" onClick={closeMenu}>
            <Nav.Link as={NavLink} to="/" end data-aos="fade-right" data-aos-delay="100">
              <FiHome /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" data-aos="fade-right" data-aos-delay="200">
              <FiUser /> About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" data-aos="fade-right" data-aos-delay="300">
              <FiFolder /> Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" data-aos="fade-right" data-aos-delay="400">
              <FiMail /> Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyNavbar;

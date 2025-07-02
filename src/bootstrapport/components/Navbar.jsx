import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal((prev) => !prev);
    setExpanded((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setExpanded(false);
    setShowModal(false);
  };

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
    <>
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

          {/* Toggle icon for modal */}
          <Navbar.Toggle onClick={handleToggle} aria-controls="navbar-nav">
            <span className="custom-toggle-icon">
              {showModal ? '' : <FiMenu size={30} />}
            </span>
          </Navbar.Toggle>

          {/* Regular nav for large screens only */}
          <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
            <Nav className="custom-nav ms-auto" onClick={handleNavLinkClick}>
              <Nav.Link as={NavLink} to="/" end><FiHome /> Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about"><FiUser /> About</Nav.Link>
              <Nav.Link as={NavLink} to="/projects"><FiFolder /> Projects</Nav.Link>
              <Nav.Link as={NavLink} to="/contact"><FiMail /> Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<Offcanvas
  show={showModal}
  onHide={() => setShowModal(false)}
  placement="end"
  className="d-lg-none side-offcanvas"
>
  {/* Header with fade animation */}
  <Offcanvas.Header
    className="custom-close-header"
    style={{
      backgroundImage: 'linear-gradient(to left bottom, #000000, #1a1a1a, #4a3e0e)',
    }}
    
  >
    <Offcanvas.Title className="text-gold d-flex align-items-center justify-content-between w-100">
      <Navbar.Brand
        as={NavLink}
        to="/"
        className="brand-logo"
        style={{ fontSize: '30px', color: '#ffdd57' }}
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        Debasish
      </Navbar.Brand>

      {/* Animated close icon */}
      <span
        className="custom-close-icon animated-close"
        onClick={() => setShowModal(false)}
        role="button"
        aria-label="Close Menu"
        data-aos="fade-in"
        data-aos-delay="300"
      >
        <FiX size={30} />
      </span>
    </Offcanvas.Title>
  </Offcanvas.Header>

  {/* Body with fade-in animation */}
  <Offcanvas.Body className="offcanvas-gradient" >
    <Nav className="flex-column custom-nav px-3" onClick={handleNavLinkClick}>
      <Nav.Link as={NavLink} to="/" end data-aos="fade-right" data-aos-delay="350">
        <FiHome /> Home
      </Nav.Link>
      <Nav.Link as={NavLink} to="/about" data-aos="fade-right" data-aos-delay="400">
        <FiUser /> About
      </Nav.Link>
      <Nav.Link as={NavLink} to="/projects" data-aos="fade-right" data-aos-delay="450">
        <FiFolder /> Projects
      </Nav.Link>
      <Nav.Link as={NavLink} to="/contact" data-aos="fade-right" data-aos-delay="500">
        <FiMail /> Contact
      </Nav.Link>
    </Nav>
  </Offcanvas.Body>
</Offcanvas>


    </>
  );
};

export default MyNavbar;

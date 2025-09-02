import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyNavbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

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
      {/* Large screen top navbar */}
      <Navbar
        expand="lg"
        className={`custom-navbar shadow-lg fixed-top d-none d-lg-flex ${visible ? 'navbar-show' : 'navbar-hide'}`}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className="brand-logo"
            data-aos="flip-right"
          >
            Debasish
          </Navbar.Brand>

          <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-end">
            <Nav className="custom-nav">
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
    <Navbar
        expand="lg"
        className="custom-navbar shadow-lg fixed-top d-flex d-lg-none justify-content-center "
      >
        <Navbar.Brand
            as={Link}
            to="/"
            className="brand-logo"
            data-aos="flip-right"
          >
            Debasish
          </Navbar.Brand>
      </Navbar>
      {/* Small screen bottom navbar */}
      <Navbar
        expand="lg"
        className="custom-navbar shadow-lg fixed-bottom d-flex flex-col d-lg-none bottom-navbar"
      >
        <Container className="justify-content-around">
          <Nav className="d-flex w-100 justify-content-around flex-row text-center">
            <Nav.Link as={NavLink} to="/" end className="bottom-link">
              <FiHome size={22} />
              <div className="nav-label">Home</div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="bottom-link">
              <FiUser size={22} />
              <div className="nav-label">About</div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="bottom-link">
              <FiFolder size={22} />
              <div className="nav-label">Projects</div>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="bottom-link">
              <FiMail size={22} />
              <div className="nav-label">Contact</div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;

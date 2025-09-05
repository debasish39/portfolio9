import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaShareAlt,
} from "react-icons/fa";
import {
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Share handler
  const handleShare = () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: "Check this out!",
          text: "Hey, have a look at this page:",
          url: currentUrl,
        })
        .catch((err) => console.log("Share canceled", err));
    } else {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          alert("✅ Link copied to clipboard!");
        })
        .catch((err) => console.error("Failed to copy:", err));
    }
  };

  return (
    <>
      {/* Large screen top navbar */}
      <Navbar
        expand="lg"
        className={`custom-navbar shadow-lg fixed-top d-none d-lg-flex ${
          visible ? "navbar-show" : "navbar-hide"
        }`}
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

          <Navbar.Collapse
            id="navbar-nav"
            className="d-flex justify-content-end"
          >
            <Nav className="custom-nav">
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

      {/* Small screen top social navbar */}
      <Navbar
        className={`custom-navbar bg-black/30 h-15 fixed-top d-flex d-lg-none justify-content-around ${
          visible ? "navbar-show" : "navbar-hide"
        }`}
      >
        <div className="flex items-center justify-between w-full md:hidden">
          <Navbar.Brand
            as={Link}
            to="/"
            className="brand-logo fs-2"
            data-aos="flip-right"
          >
            Debasish
          </Navbar.Brand>
        </div>
        <div className="gap-3 flex items-center justify-between pr-3 md:hidden">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>LinkedIn</Tooltip>}>
            <a
              href="https://www.linkedin.com/in/debasish-panda-857715314/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <FaLinkedin size={20} className="icon" />
            </a>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={<Tooltip>GitHub</Tooltip>}>
            <a
              href="https://github.com/debasish39"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <FaGithub size={20} className="icon" />
            </a>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={<Tooltip>Email</Tooltip>}>
            <a
              href="mailto:djproject963@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <FaEnvelope size={20} className="icon" />
            </a>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={<Tooltip>Instagram</Tooltip>}>
            <a
              href="https://www.instagram.com/deba_963"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaInstagram size={20} className="icon" />
            </a>
          </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip>Share</Tooltip>}>
            <a
              href="https://www.instagram.com/deba_963"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="200" onClick={handleShare}
            >
             <FaShareAlt size={20} className="icon" />
            </a>
          </OverlayTrigger>
        </div>
      </Navbar>

      {/* Small screen bottom navbar */}
      <Navbar
        expand="lg"
        className={`custom-navbar shadow-lg
          h-15 sm:h-18 fixed-bottom d-flex flex-column d-lg-none bottom-navbar border-top border-warning`}
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

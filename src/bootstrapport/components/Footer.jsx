import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for glowing effects

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <Container className="text-center">
        <small>© {new Date().getFullYear()} Debasish. All rights reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;

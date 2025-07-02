import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <Container className="text-center py-3">
      <small>Built with ❤️ by <strong>Debasish</strong> | © {new Date().getFullYear()}</small>

      </Container>
    </footer>
  );
};

export default Footer;

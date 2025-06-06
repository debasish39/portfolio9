import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; // Custom CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({ duration: 1000 });

    // Scroll progress and button visibility
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPosition / documentHeight) * 100;
      setScrollPercentage(scrollProgress);

      setShowScrollTop(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8000/api/contact/';

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Success:', response.data);
      setSubmitted(true);
      setError('');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.detail || 'Something went wrong!');
    }
  };

  return (
    <Container className="mt-5">
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollPercentage}%`,
          height: "3px",
          backgroundColor: "#ffeb3b",
          zIndex: 9999,
        }}
      ></div>

      <h2 data-aos="zoom-in">Contact Me</h2>

      {submitted && (
        <>
          <h5 style={{ color: "#ffdd57" }} data-aos="fade-up">Note:</h5>
          <p data-aos="fade-up">
            As the backend is not deployed on Netlify, the above form data is not sent to the server.
            For contact, the icons below are useful...
          </p>
          <Alert variant="success" data-aos="fade-up">Thank you for your message!</Alert>
        </>
      )}

      {error && <Alert variant="danger" data-aos="fade-up">{error}</Alert>}

      <Form onSubmit={handleSubmit} data-aos="fade-up">
        <Form.Group controlId="contactName" className="mb-3" data-aos="fade-right">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="contactEmail" className="mb-3" data-aos="fade-left">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="contactMessage" className="mb-3" data-aos="fade-up">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" data-aos="zoom-in">Send Message</Button>
      </Form>

      {error && (
        <Alert variant="danger" className="mt-3" data-aos="fade-up">
          <strong>Note:</strong> As the backend is not deployed on Netlify, the form data isn't sent. You can contact me via the platforms below.
        </Alert>
      )}

      {/* Social Media Icons Section */}
      <div className="social-media-icons mt-4" data-aos="fade-up">
        <a href="https://www.linkedin.com/in/debasish-panda-857715314/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="icon" />
        </a>
        <a href="https://www.instagram.com/deba_963" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="icon" />
        </a>
        <a href="https://github.com/debasish39" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="icon" />
        </a>
        <a href="mailto:djproject963@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} className="icon" />
        </a>
      </div>

      {showScrollTop && (
       <Button
               onClick={scrollToTop}
               style={{
                 position: "fixed",
                 bottom: "90px",
                 right: "39px",
                 zIndex: 9999,
                 backgroundColor: "#ffe32b",
                 border: "none",
                 borderRadius: "60%",
                 padding: "12px",
                 boxShadow: "0 2px 99px yellow",
                 fontSize: "23px", // Increased from 18px to 32px
                 fontWeight: '900',
               }}
               data-aos="fade-left"
             >
               ↑
             </Button>
      )}
    </Container>
  );
};

export default Contact;

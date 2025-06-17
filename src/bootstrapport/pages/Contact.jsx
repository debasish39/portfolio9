import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPosition / documentHeight) * 100;
      setScrollPercentage(scrollProgress);
      setShowScrollTop(scrollPosition > 3);
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

    const data = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: " Contact Message from Portfolio Website",
      from_name: "Portfolio Contact Form",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await axios.post('https://api.web3forms.com/submit', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        setSubmitted(true);
        setError('');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Submission failed. Check your access key and try again.');
      }
    } catch (err) {
      console.error('Web3Forms Error:', err);
      setError('Something went wrong while sending your message.');
    }
  };

  return (
    <Container className="mt-5 mb-5" style={{height:'900px;'}}>
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
        <Alert variant="success" data-aos="fade-up">
          ✅ Thank you! Your message has been sent.
        </Alert>
      )}

      {error && (
        <Alert variant="danger" data-aos="fade-up">
          ❌ {error}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} data-aos="fade-up" noValidate>
        {/* Optional anti-spam hidden field */}
        <input type="hidden" name="botcheck" style={{ display: 'none' }} />

        <Form.Group controlId="contactName" className="mb-3" data-aos="fade-right">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="contactEmail" className="mb-3" data-aos="fade-left">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
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

        <Button variant="warning" type="submit" data-aos="zoom-in" >
          Send Message
        </Button>
      </Form>

      {/* Social Media */}
    <div
  className='social-media-icons'
  data-aos="fade-up"style={{marginBottom:'99px'}}
>
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

      {/* Scroll to top button */}
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
            fontSize: "23px",
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

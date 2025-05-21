import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaEnvelope} from 'react-icons/fa';
import './Contact.css'; // Custom CSS for glowing effects and icon styling

const Contact = () => {
     const [scrollPercentage, setScrollPercentage] = useState(0); // State to track scroll progress
      const [showScrollTop, setShowScrollTop] = useState(false); // State to track scroll-to-top button visibility
    
      useEffect(() => {
        // Function to calculate scroll progress percentage and handle button visibility
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = (scrollPosition / documentHeight) * 100;
          setScrollPercentage(scrollProgress);
    
          // Show scroll-to-top button if scrolled down 300px
          if (scrollPosition > 30) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
        };
    
        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup the event listener when the component is unmounted
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []); // Empty dependency array to ensure it runs only once when the component is mounted
    
      // Scroll to top function
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scroll
        });
      };
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission and send data to Django API using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    // URL of your Django API endpoint; adjust host/port as needed.
    const apiUrl = 'http://localhost:8000/api/contact/';

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Success:', response.data);
      setSubmitted(true);
      setError('');
      // Optionally reset the form
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error:', err);
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'Something went wrong!');
      } else {
        setError('Something went wrong!');
      }
    }
  };

  return (
    <Container className="mt-3">
       {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollPercentage}%`,
          height: "3px",
          backgroundColor: " #ffeb3b",
          zIndex: 9999, // Ensure it's on top
        }}
      ></div>
      <h2>Contact Me</h2>
      {submitted && <>
    <h5 style={{ color: "#ffdd57" }}>Note:</h5>
    <p>
      As the backend is not deployed on Netlify, the above form data is not sent to the server. For contact, the icons below are useful...
    </p>
    <Alert variant="success">Thank you for your message!</Alert>
  </>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="contactName" className="mb-3">
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
        <Form.Group controlId="contactEmail" className="mb-3">
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
        <Form.Group controlId="contactMessage" className="mb-3">
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
        <Button variant="primary" type="submit">Send Message</Button>
      </Form>
  {error && (
  <Alert variant="danger" className="mt-3">
    <strong>Note:</strong> As the backend is not deployed on Netlify, the form data isn't sent. You can contact me via the platforms below.
  </Alert>
)}
      {/* Social Media Icons Section */}
      <div className="social-media-icons mt-4">
        
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
                    bottom: "60px",
                    right: "12px",
                    zIndex: 9999,
                    backgroundColor: " #ffe32b", // Customize button color
                    border: "none",
                    borderRadius: "60%",
                    padding: "9px",
                    boxShadow: "0 2px 99px yellow",
                    fontSize: "20px",
                  }}
                >
                  ↑
                </Button>
              )}
    </Container>
  );
};

export default Contact;

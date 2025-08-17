import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
  InputGroup,
  Spinner,
} from 'react-bootstrap';
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaUser,
  FaRegEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaAddressBook,
  FaArrowUp,
} from 'react-icons/fa';

import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 150);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPosition / documentHeight) * 100;
      setScrollPercentage(scrollProgress);
      setShowScrollTop(scrollPosition > 3);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: 'Contact form of Portfolio',
      from_name: 'Portfolio Contact Form',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await axios.post('https://api.web3forms.com/submit', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.success) {
        toast.success(' Submission Successful.');
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(' Submission failed. ',{style:{'color':'green',"backgroundColor":'black'}});
      }
    } catch (err) {
      console.error('Web3Forms Error:', err);
      toast.error(' Submission failed.',{style:{'color':'red',"backgroundColor":'black'}});
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="warning" />
        <p>Loading contact form...</p>
      </div>
    );
  }

  return (
    <div className="contact-wrapper">
      <Container className=" mb-3 contact-container">
        {/* Scroll Progress Bar */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${scrollPercentage}%`,
            height: '3px',
            backgroundColor: '#ffeb3b',
            zIndex: 9999,
          }}
        />

        {/* Heading */}
        <h2 className="contact-heading" data-aos="zoom-in-up">
          <FaAddressBook className="heading-icon" />
          <span>Contact Me</span>
        </h2>

        {/* Form */}
        <Form onSubmit={handleSubmit} data-aos="flip-up" noValidate>
          <input type="hidden" name="botcheck" style={{ display: 'none' }} />

          {/* Name */}
          <Form.Group controlId="contactName" className="mb-3" data-aos="fade-down-right">
            <Form.Label>Name</Form.Label>
            <InputGroup>
              <InputGroup.Text className="input-icon"><FaUser /></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>

          {/* Email */}
          <Form.Group controlId="contactEmail" className="mb-3" data-aos="fade-up-left">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Text className="input-icon"><FaRegEnvelope /></InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>

          {/* Message */}
          <Form.Group controlId="contactMessage" className="mb-3" data-aos="flip-left">
            <Form.Label>Message</Form.Label>
            <InputGroup>
              <InputGroup.Text className="input-icon"><FaCommentDots /></InputGroup.Text>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </Form.Group>

          {/* Submit Button */}
          <div className="submit-button-wrapper text-center mt-4" data-aos="zoom-in">
            <Button
              variant="warning"
              type="submit"
              className="submit-button d-flex align-items-center justify-content-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" /> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </Button>
          </div>
        </Form>

        {/* Social Media Icons with inline zoom-in animation */}
      <div className="social-media-icons mt-5 mb-4">
  <OverlayTrigger placement="top" overlay={<Tooltip>LinkedIn</Tooltip>}>
    <a
      href="https://www.linkedin.com/in/debasish-panda-857715314/"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <FaLinkedin size={30} className="icon" />
    </a>
  </OverlayTrigger>

  <OverlayTrigger placement="top" overlay={<Tooltip>Instagram</Tooltip>}>
    <a
      href="https://www.instagram.com/deba_963"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <FaInstagram size={30} className="icon" />
    </a>
  </OverlayTrigger>

  <OverlayTrigger placement="top" overlay={<Tooltip>GitHub</Tooltip>}>
    <a
      href="https://github.com/debasish39"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <FaGithub size={30} className="icon" />
    </a>
  </OverlayTrigger>

  <OverlayTrigger placement="top" overlay={<Tooltip>Email</Tooltip>}>
    <a
      href="mailto:djproject963@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      <FaEnvelope size={30} className="icon" />
    </a>
  </OverlayTrigger>
</div>


        {/* Google Map with inline zoom-in animation */}
       <div
  className="mt-4 mb-5 pb-3"
  data-aos="flip-left"
  data-aos-delay="500"
>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15035.965900818937!2d84.92123115008701!3d19.58486590002057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a22aa1346b86037%3A0xe6bbe14384e1ea42!2sChingudi%20Ghai%2C%20Odisha%20761018!5e0!3m2!1sen!2sin!4v1751424835153!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map - Chingudi Ghai"
          ></iframe>
        </div>

        {/* Scroll to Top */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="scroll-top-btn btn-outline-warning"
            data-aos="fade-down"
          >
            <FaArrowUp />
          </Button>
        )}

    <Toaster position="top-center" reverseOrder={false} />

      </Container>
    </div>
  );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard.jsx';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowUp } from 'react-icons/fa'; // ✅ Import icon
// projectData.js

import quote from './quote.png';  
import qr from './qr.png';  
import txtspeech from './txtspeech.png';  
import TodoApp from './TodoApp.png';  
import Calculator from './Calculator.png';  
import port from './port.png';  
import cal from './cal.png';  
import tem from './tem.png';  
import joke from './joke.png';  

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my skills and projects.',
    imageUrl: port,
    projectUrl: 'https://another.debasish.xyz/'
  },
  {
    title: 'Quote Generator',
    description: 'An app that generates random quotes to inspire you.',
    imageUrl: quote,
    projectUrl: 'https://quotes.debasish.xyz/'
  },
  {
    title: 'QR Code Generator',
    description: 'Generate QR codes for any text or link easily.',
    imageUrl: qr,
    projectUrl: 'https://qrcode.debasish.xyz/'
  },
  {
    title: 'Text to Speech Converter',
    description: 'Convert text into speech using this simple tool.',
    imageUrl: txtspeech,
    projectUrl: 'https://texttospeech.debasish.xyz/'
  },
  {
    title: 'To-Do App',
    description: 'A simple to-do list app to manage your tasks efficiently.',
    imageUrl: TodoApp,
    projectUrl: 'https://todo.debasish.xyz/'
  },
  {
    title: 'Basic Calculator',
    description: 'A simple calculator for basic arithmetic operations.',
    imageUrl: Calculator,
    projectUrl: 'https://calculator.dob.debasish.xyz/'
  },
  {
    title: 'Advanced Calculator',
    description: 'A more advanced calculator with additional functions.',
    imageUrl: cal,
    projectUrl: 'https://calculator.debasish.xyz/'
  },
  {
    title: 'Temperature Converter',
    description: 'Convert temperatures between Celsius, Fahrenheit, and Kelvin.',
    imageUrl: tem,
    projectUrl: 'https://temp.debasish.xyz/'
  },
  {
    title: 'Joke Generator',
    description: 'Get a random joke every time you click the button!',
    imageUrl: joke,
    projectUrl: 'https://joke.debasish.xyz/'
  },
];




const Projects = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 150);

    const handleScroll = () => {
      const pos = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercentage((pos / docH) * 100);
      setShowScrollTop(pos > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pageLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="warning" role="status" >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <Container className="mt-5 mb-5 pb-5">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress mb-3"
        style={{ width: `${scrollPercentage}%` }}
      />

      <h2 className="section-title mb-5 text-center">🚀 My Projects</h2>

      <Row className="gy-4 mb-3">
        {projectData.map((project, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>

      {/* ✅ Updated with Icon */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="scroll-top-btn btn-outline-warning"
          data-aos="fade-down"
        >
          <FaArrowUp />
        </Button>
      )}
    </Container>
  );
};

export default Projects;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard.jsx';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowUp } from 'react-icons/fa'; // ✅ Import icon
import projectData from './projectData';

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
    <div className="project-wrapper">
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
    </div>
  );
};

export default Projects;

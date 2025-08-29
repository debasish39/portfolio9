import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard.jsx";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa"; // scroll top button
import quote from "./quote.png";
import qr from "./qr.png";
import txtspeech from "./txtspeech.png";
import TodoApp from "./todoapp.png";
import crud from "./crud.png";
import blogzone from "./blogzone.png";
import blog from './blog.png'
import eshop from "./eshop.png";
import cal from "./cal.png";
import tem from "./tem.png";
import landing from './landing.png'
import jwt from './jwt.png'
const projectData = [
  {
    title: "BlogZone",
    description:
      "A modern blogging platform built with React and tailwindcss,PWA featuring reusable components and responsive design.",
    imageUrl: blogzone,
    projectUrl: "https://blogzone.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/BlogZone",
  },
  {
    title: "E-Shop",
    description:
      "A full-fledged e-commerce store with product listings, shopping cart, checkout flow.",
    imageUrl: eshop, 
    projectUrl: "https://eshop.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/E-Commerce",
  },
  {
  title: 'JWT Authentication System',
  description: 'A secure authentication and authorization system built with React, Django REST Framework, and JWT. Includes protected routes, role-based access, and password reset via email.',
  imageUrl: jwt, 
  projectUrl: 'https://jwt-auth.debasish.xyz/', 
  githubUrl: 'https://github.com/debasish39/jwt-authentication' 
},
{
  title: 'Blog App',
  description: 'A full-stack blogging platform using Django where users can create, view, and manage posts with authentication and user-friendly UI.',
  imageUrl: blog,
  projectUrl: 'https://blog.debasish.xyz/',
  githubUrl: 'https://github.com/debasish39/Blog-with-Authentication' 
}
,
  {
    title: "Quote Generator",
    description: "An app that generates random quotes to inspire you.",
    imageUrl: quote,
    projectUrl: "https://quotes.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/quote-generator",
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes for any text or link easily.",
    imageUrl: qr,
    projectUrl: "https://qrcode.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/qr-code-generator",
  },
  {
    title: "Text to Speech Converter",
    description: "Convert text into speech using this simple tool.",
    imageUrl: txtspeech,
    projectUrl: "https://texttospeech.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/text-to-speech",
  },
  {
    title: "To-Do App",
    description: "A simple to-do list app to manage your tasks efficiently.",
    imageUrl: TodoApp,
    projectUrl: "https://todo.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/Todo_Redux",
  },
 {
  title: 'Credentials Manager',
  description: 'A secure credentials management app to store and manage user login details with password visibility toggle and validation.',
  imageUrl: crud,  
  projectUrl: 'https://crud.debasish.xyz/',
  githubUrl: 'https://github.com/debasish39/CRUD-by-React' 
}
,
  {
    title: "Advanced Calculator",
    description: "A more advanced calculator with additional functions.",
    imageUrl: cal,
    projectUrl: "https://calculator.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/advanced-calculator",
  },
  {
    title: "Temperature Converter",
    description:
      "Convert temperatures between Celsius, Fahrenheit, and Kelvin.",
    imageUrl: tem,
    projectUrl: "https://temp.debasish.xyz/",
    githubUrl: "https://github.com/debasish39/temp-converter",
  },
{
  title: 'Landing Page',
  description: 'A modern, responsive landing page with smooth navigation, call-to-action buttons, and a clean layout for startups or businesses.',
  imageUrl: landing, 
  projectUrl: 'https://landing.debasish.xyz/', 
  githubUrl: 'https://github.com/debasish39/Landing_page' 
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="warning" role="status">
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

        {/* Scroll-to-top button */}
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

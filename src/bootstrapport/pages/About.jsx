import React, { useState, useEffect } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

const About = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Spinner state

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 150);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        documentHeight > 0 ? (scrollPosition / documentHeight) * 100 : 0;
      setScrollPercentage(scrollProgress);
      setShowScrollTop(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="warning" />
        <p>Loading About Section...</p>
      </div>
    );
  }

  return (
    <div className="about-wrapper">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPercentage}%` }}
      ></div>

      <Container className="mt-3 px-3">
        <Row style={{ marginTop: "1px", marginBottom: "99px" }} data-aos="fade-up">
          <h1 data-aos="zoom-in">About Me</h1>
          <p data-aos="fade-right">
            I'm a web developer passionate about crafting visually appealing and
            highly functional websites. I specialize in frontend development
            using HTML5, CSS3, JavaScript (ES6+), TypeScript, and modern
            libraries like React.js, along with styling frameworks like
            Bootstrap and Tailwind CSS.
          </p>
          <p data-aos="fade-left">
            On the backend, I work with Python and Django, and I manage data
            using MySQL. I'm experienced in building and integrating RESTful
            APIs and handling application state using tools like Redux and
            Recoil. I regularly use development tools and platforms such as Git,
            GitHub, VS Code, Postman, and Vite, and I deploy applications to
            platforms like Netlify, Vercel, and Render. In addition to my web
            development skills, I have a strong foundation in programming
            languages including C, Java, and Python, and core computer science
            concepts like Operating Systems (OS), DBMS, and Networking. I'm
            driven by curiosity and a desire to solve real-world problems
            through clean, scalable code and user-centered design.
          </p>
        </Row>

        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="scroll-top-btn btn-outline-warning d-flex align-items-center justify-content-center"
            data-aos="fade-down"
          >
            <FaArrowUp />
          </Button>
        )}
      </Container>
    </div>
  );
};

export default About;

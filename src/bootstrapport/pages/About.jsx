import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Init AOS animation
  }, []);

  useEffect(() => {
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

  return (
    <Container className="mt-3 px-3" >
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

      <Row
        style={{ marginTop: "1px", marginBottom: "99px" }}
        data-aos="fade-up"
      >
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

export default About;

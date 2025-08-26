import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import sonu from "./sonu-removebg.png";
import "./Home.css";
import {  FaFolderOpen, FaFileAlt } from "react-icons/fa";

const Home = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1500 });

    const loadingTimer = setTimeout(() => setIsLoading(false), 150);
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercentage((pos / docHeight) * 100);
      setShowScrollTop(pos > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="warning" />
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="alt-home-hero"style={{marginBottom:'69px'}}>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPercentage}%` }}
      />

      {/* Left: Profile */}
     <div className="hero-left" data-aos="fade-right">
  <Tilt 
    glareEnable={true} 
    glareMaxOpacity={0.1} 
    scale={1.01} 
     tiltMaxAngleX={24}
      tiltMaxAngleY={24}
    transitionSpeed={250}
  >
    <img
      src={sonu}
      alt="Debasish"
      className="hero-image"
    />
  </Tilt>
</div>

      {/* Right: Text & Buttons */}
      <div className="hero-right" data-aos="fade-left">
        <h1 className="hero-heading">
          Hey, I'm <span>Debasish</span>
        </h1>

        <p className="hero-subtext">
        <Typewriter
  words={[
     '🐍 Django Developer',
    '🚀 Full-Stack Engineer',
    '🧠 Python Problem Solver',
    '🌐 REST API Architect',
    '📦 DRF (Django REST Framework) Pro',
    '🛠️ Backend Specialist',
    '💻 React.js Frontend',
    '🧰 Postgres & MySQL Wizard',
    '☁️ Deployed on Heroku & AWS',
    '🔐 Authentication & Security Focused',
    '📄 Clean & Scalable Code Advocate',
    '🔍 Debugging Ninja',
    '📊 Admin Panel Customizer',
    '🧪 Unit & Integration Tester',
    '📈 Continuous Learner',
    '⚙️ Git & CI/CD Practitioner',
  ]}
  loop={0}
  cursor
  cursorStyle="|"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>

        </p>

       <div className="hero-buttons">
  <button className="hero-btn">
  <Link to="/projects" className="btn-link" style={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
    <FaFolderOpen style={{ marginRight: "8px",fontSize:'23px' }} />
    <span>View Projects</span>
  </Link>
</button>


  <button className="hero-btn outline">
    <a
      href="https://drive.google.com/file/d/11tKKl-ELpQh_RhsjqCiU0B-TBkaOoS65/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-link white" style={{ display: "flex", alignItems: "center",justifyContent:'center' }}
    >
      <FaFileAlt style={{ marginRight: "8px",fontSize:"23px" }} /> View Resume
    </a>
  </button>
</div>

      </div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="scroll-top-btn btn-outline-warning"
          data-aos="fade-down"
        >
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default Home;
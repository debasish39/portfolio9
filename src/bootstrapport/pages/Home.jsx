import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import sonu from "./sonu-removebg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1500 }); // initialize AOS
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
    <div className="alt-home-hero">
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

      {/* Left: Profile Image */}
      <div className="hero-left pt-5" data-aos="fade-right">
        <img
          src={sonu}
          alt="Debasish"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "90%",
            zIndex: 2,
            border: "1px dotted #ffeb3b",
            boxShadow: "0 0 999px #ffeb3b88",
          }}
        />
      </div>

      {/* Right: Text + Buttons */}
      <div className="hero-right" data-aos="fade-left">
        <h1 className="hero-heading">
          Hey, I'm <span>Debasish</span>
        </h1>
        <p className="hero-subtext">
          🚀 A passionate Full-Stack Developer turning complex ideas into modern,
          performant, and beautiful web experiences.
        </p>
      <div className="hero-buttons mb-3 pb-3" style={{ display: "flex", gap: "15px" }}>
  {/* Projects Button */}
  <button className="hero-btn">
    <Link to="/projects" style={{ textDecoration: "none", color: "black" }}>
      ✨ View Projects
    </Link>
  </button>

  {/* Icon-only: View Resume */}
  <button className="hero-btn outline">
  <a
    href="/Resume.pdf"
    download
    style={{ textDecoration: "none", color: "white" }}
  >
    📩 View Resume
  </a>
</button>
</div>


      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
       <Button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "139px",
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
    </div>
  );
};

export default Home;

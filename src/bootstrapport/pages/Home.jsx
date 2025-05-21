import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import sonu from "./sonu-removebg.png"; // Adjust the path as necessary
import { useEffect,useState } from "react";
const Home = () => {
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
          backgroundColor: " #ffeb3b",
          zIndex: 9999, // Ensure it's on top
        }}
      ></div>
  {/* Left: Profile blob / image / logo */}
  <div className="hero-left">
    {/* <div className="blob-yellow"></div> */}
    <img
      src={sonu}
      alt="Debasish"
      style={{
        width: "300px",
        height: "293px",
        borderRadius: "90%",
        zIndex: 2,
        border: "1px dotted #ffeb3b",
        boxShadow: "0 0 999px #ffeb3b88",
      }}
    />
  </div>

  {/* Right: Text + CTA */}
  <div className="hero-right">
    <h1 className="hero-heading">
      Hey, I'm <span>Debasish</span>
    </h1>
    <p className="hero-subtext">
      🚀 A passionate Full-Stack Developer turning complex ideas into modern,
      performant, and beautiful web experiences.
    </p>
    <div className="hero-buttons">
      <button className="hero-btn"><a href='/projects'style={{textDecoration:'none',color:"black"}}>✨ View Projects</a></button>
      <button className="hero-btn outline"><a href="Resume.pdf" target="_top " rel="noopener noreferrer"style={{textDecoration:'none',color:"white"}} >
  📩 Resume
</a>
</button>
    </div>
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
</div>


  );
};

export default Home;

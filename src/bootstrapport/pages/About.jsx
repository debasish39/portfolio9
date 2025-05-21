import React from "react";
import { Container, Row, Col, Image,Button  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css"; // Custom CSS for glowing effects
// import photo from '../../assets/photo.png';
// import img from "../../assets/sonu_withoutbg.png";
import { useState,useEffect } from "react";
const About = () => {
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
    <Container className="mt-5" style={{ overflow: "auto" }}>
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
      <Row style={{ marginTop: "1px",marginBottom: "99px" }}>
        
          <h1>About Me</h1>
          <p>
            I'm a web developer passionate about crafting visually appealing and
            highly functional websites. I specialize in frontend development
            using HTML5, CSS3, JavaScript (ES6+), TypeScript, and modern
            libraries like React.js, along with styling frameworks like
            Bootstrap and Tailwind CSS.
          </p>
          <p>
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

export default About;

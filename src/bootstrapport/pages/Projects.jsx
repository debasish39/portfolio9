import React from 'react';
import { Container, Row, Col ,Button} from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard.jsx';
import './Projects.css'; // Custom CSS for glowing effects
import { useState,useEffect } from 'react';
// Import local images
import quote from './quote.png';  
import qr from './qr.png';  
import txtspeech from './txtspeech.png';  
import TodoApp from './TodoApp.png';  
import Calculator from './Calculator.png';  
import port from './port.png';  
import cal from './cal.png';  
import tem from './tem.png';  
import joke from './joke.png';  
// import SplashCursor from '../SplashCursor.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my skills and projects.',
    imageUrl: port, 
    projectUrl: 'https://deba-port.netlify.app/'
  },
  {
    title: 'Quote Generator',
    description: 'An app that generates random quotes to inspire you.',
    imageUrl: quote, 
    projectUrl: 'https://qu-gen.netlify.app/'
  },
  {
    title: 'QR Code Generator',
    description: 'Generate QR codes for any text or link easily.',
    imageUrl: qr, 
    projectUrl: 'https://qr-gene.netlify.app/'
  },
  {
    title: 'Text to Speech Converter',
    description: 'Convert text into speech using this simple tool.',
    imageUrl: txtspeech, 
    projectUrl: 'https://txtspch.netlify.app/'
  },
  {
    title: 'To-Do App',
    description: 'A simple to-do list app to manage your tasks efficiently.',
    imageUrl: TodoApp, 
    projectUrl: 'https://todo-set.netlify.app/'
  },
  {
    title: 'Basic Calculator',
    description: 'A simple calculator for basic arithmetic operations.',
    imageUrl: Calculator, 
    projectUrl: 'https://calculatordob.netlify.app/'
  },
  {
    title: 'Advanced Calculator',
    description: 'A more advanced calculator with additional functions.',
    imageUrl: cal, 
    projectUrl: 'https://calculaproject.netlify.app/'
  },
  {
    title: 'Temperature Converter',
    description: 'Convert temperatures between Celsius, Fahrenheit, and Kelvin.',
    imageUrl: tem, 
    projectUrl: 'https://tempeconvert.netlify.app/'
  },
  {
    title: 'Joke Generator',
    description: 'Get a random joke every time you click the button!',
    imageUrl: joke, 
    projectUrl: 'https://joke-gene.netlify.app/'
  },
];

const Projects = () => {
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
 
useEffect(() => {
  AOS.init({ duration: 1500 });
}, []);

  return (
    <Container className="mt-3">
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
      {/* <SplashCursor/> */}
      <h2 className="mb-4">My Projects</h2>
     <Row>
  {projectData.map((project, index) => (
    <Col
      xs={12}
      key={index}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Alternate direction
      data-aos-delay={index * 100} // Delay increases per card (optional smooth effect)
    >
      <ProjectCard {...project} />
    </Col>
  ))}
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

export default Projects;

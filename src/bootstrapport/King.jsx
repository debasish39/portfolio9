import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import '../index.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import NoPage from './pages/NoPage.jsx';
import './scroll.css';
import ClickSpark from './ClickSpark.jsx';

function King() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: 'black', position: 'relative' }}>
        
        {/* ClickSpark should cover the full screen and capture clicks */}
        <ClickSpark 
          sparkColor="yellow" 
          sparkSize={30} 
          sparkRadius={3} 
          sparkCount={15} 
          duration={900} 
        >

        <MyNavbar />
        <div style={{ paddingTop: '90px' }}></div> {/* Add padding to push content down */}
        <div className="flex-grow-1 select">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> {/* Handle 404 */}
          </Routes>
        </div>
        
        <Footer />
        </ClickSpark>
      </div>
    </Router>
  );
}

export default King;
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground'; // ✅ import it
import ScrollToTop from './ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App" style={{ position: "relative", overflowX: "hidden" }}>
      <ParticleBackground /> {/* ✅ Add here, before content */}
      <ScrollToTop />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

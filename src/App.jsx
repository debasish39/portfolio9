import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ScrollToTop from'./ScrollToTop';
function App() {
  return (
  
    <div className="App">  
    <ScrollToTop/>
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
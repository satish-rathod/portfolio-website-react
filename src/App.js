import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import About from './Components/Profile.js';
import Education from './Components/Eduaction.js';
import Skills from './Components/Skills.js';
import Experience from './Components/Experience.js';
import Profiles from './Components/Profiles.js';
import Portfolio from './Components/Portfolio.js';
import Clients from './Components/Clients.js';
import ContactMe from './Components/ContactMe.js';
import Footer from './Components/Footer.js';
import Aboutme from './Components/Aboutme.js';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <About />
        <Aboutme />
        <Education />
        <Skills />
        <Experience />
        <Profiles />
        <Portfolio />
        <Clients />
        <ContactMe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
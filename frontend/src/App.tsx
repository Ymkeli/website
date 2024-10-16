import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';

function Icons() {
  return (
    <div className='flex justify-end space-x-5 p-5'>
      {/* LinkedIn Icon */}
      <FontAwesomeIcon icon={faLinkedin} size="2x" />

      {/* GitHub Icon */}
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </div>
  )
}

function Contact() {
  return (
    <div></div>
  )
}

const MainContent: React.FC = () => {
  const location = useLocation();

  // Determine visibility based on the current route
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  return (
    <section>
      {/* Home */}
      <div style={{ display: isHome ? 'block' : 'none' }}>
        <Home />
      </div>

      {/* About */}
      <div style={{ display: isAbout ? 'block' : 'none' }}>
        <About />
      </div>

      {/* Contact */}
      <div style={{ display: isContact ? 'block' : 'none' }}>
        <Contact />
      </div>
    </section >
  );
};

const App: React.FC = () => {
  // Links for the navigation bar
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="App-background">
      <Router>
        {/* Header */}
        <Header links={navLinks} />

        {/* Content */}
        <section className='flex flex-col justify-end min-h-screen'>
          <div className='bg-white h-8/12 min-w-screen'>
            <MainContent />

            {/* Icons */}
            <Icons />
          </div>
        </section >
      </Router>
    </div >
  );
};

export default App;

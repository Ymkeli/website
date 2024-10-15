import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Header from './Header';
import Content from './Content';

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

function About() {
  return (
    <div></div>
  )
}

function Contact() {
  return (
    <div></div>
  )
}

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
          <div className='bg-white'>
            <div className='flex justify-center'>
              <Routes>
                {/* Home */}
                <Route path="/" element={<Content filePath='./intro.md' />} />
                {/* About */}
                <Route path="/about" element={<About />} />
                {/* Contact*/}
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>

            {/* Icons */}
            <Icons />
          </div>
        </section >
      </Router>

    </div >
  );
};

export default App;

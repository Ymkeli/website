import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Header from './Header';

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

function Home() {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetch('/intro.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        setContent(text);
      })
      .catch((error) => {
        console.error('Error fetching the intro.md markdown file:', error);
      });
  }, []);

  return (
    <ReactMarkdown className='color-black w-7/12 mt-10'>
      {content}
    </ReactMarkdown>
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
  // Define the links for the navigation bar
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="App-background">
      <Router>
        <Header links={navLinks} />

        <section className='flex flex-col justify-end min-h-screen'>
          <div className='bg-white'>
            <div className='flex justify-center'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Icons />
          </div>
        </section >
      </Router>

    </div >
  );
};

export default App;

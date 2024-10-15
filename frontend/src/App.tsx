import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import Header from './Header'

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

const App: React.FC = () => {
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
    <div className="App-background">
      <Header />
      <section className='flex flex-col justify-end min-h-screen'>
        <div className= 'bg-white'>
          <div className='flex justify-center'>
            <ReactMarkdown className='color-black w-7/12 mt-10'>
              {content}
            </ReactMarkdown>
          </div>
          <Icons />
        </div>
      </section >
    </div >
  );
};

export default App;

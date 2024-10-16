import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface filePathProps {
  filePath: string
}

{/** Component that displays content from a markdown file **/ }
const Content: React.FC<filePathProps> = ({ filePath }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetch(filePath)
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
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}

export default Content;
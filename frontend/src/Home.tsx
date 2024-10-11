import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <div className="text-center text-xl">{message}</div>;
};

export default Home;
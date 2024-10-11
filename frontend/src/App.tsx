import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <div className='flex flex-row px-5'>
        <h1>Ymke Wegereef</h1>
      </div>
      <div className='flex flex-row space-x-5 px-5'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Portfolio</h1>
      </div>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <section className='h-full'>
      </section>
    </div>
  );
}

export default App;

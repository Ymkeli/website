import React from 'react';
import Content from './Content';

/* Component that will render the header */
const Home: React.FC = () => {
    return (
        <div className='flex flex-row justify-center mt-10'>
        <section className = 'text-black w-7/12'>
            <p>Hi, I'm Ymke,</p>
            <br /> 
            <Content filePath='./intro.md' />
            <br />
            <p>Ready to bring your vision to life? Let's start with a conversation and a coffee!</p>
        </section>
        </div>
    );
};

export default Home;
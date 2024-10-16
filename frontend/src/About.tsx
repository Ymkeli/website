import React from 'react';
import Content from './Content';
import './About.css'

interface SectionDetails {
    name: string;
    path: string;
}

const Section: React.FC<SectionDetails> = ({ name, path }) => {
    return (
        < section >
            <h2 className='About-header'>{name}</h2>
            <Content filePath={path} />
        </section >
    );
};

/* Render the different sections of the About component */
const Sections: React.FC = () => {
    return (
        <div className='flex flex-row w-full space-x-2'>
            <div className='flex flex-col w-1/2 space-y-3'>
                <Section name='Crafting Digital Experiences' path='./about/crafting-digital-experiences.md' />
                <Section name='End-to-End Development' path='./about/end-to-end-development.md' />
                <Section name='Problem-Solving at Heart' path='./about/problem-solving.md' />
            </div>
            <div className='flex flex-col w-1/2 space-y-3'>
                <Section name='Smart Solutions' path='./about/smart-solutions.md' />
                <Section name='Creative Crafstmanship' path='./about/creative-craftsmanship.md' />
            </div>
        </div>
    );
};

/* Component that will render the About content */
const About: React.FC = () => {
    return (
        <div className='flex justify-center mt-10'>
            <section className='text-black text-xs w-10/12'>
                <h1 className='font-bold underline text-sm'>Where I'm at my best:</h1>
                <br />
                <Sections />
                <br />
                <Content filePath='./about/ending.md'></Content>
            </section>
        </div>
    );
};

export default About;
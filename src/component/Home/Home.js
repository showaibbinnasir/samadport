import React from 'react';
import Contact from '../Contact/Contact';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;
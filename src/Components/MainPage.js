import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import WebProgram from './WebProgram';

const MainPage = () => {
    return (
      <div>
        <Hero></Hero>
        <WebProgram></WebProgram>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
};

export default MainPage;
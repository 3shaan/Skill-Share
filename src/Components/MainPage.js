import React from 'react';
import Contact from './Contact';
import Hero from './Hero';
import WebProgram from './WebProgram';

const MainPage = () => {
    return (
      <div>
        <Hero></Hero>
        <WebProgram></WebProgram>
        <div className='mt-10'>
          <Contact></Contact>
        </div>
      </div>
    );
};

export default MainPage;
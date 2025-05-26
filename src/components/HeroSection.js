import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ussu.mp4' autoPlay loop muted />
      <h1>MY LOVE FOR YOU IS ENDLESS</h1>
      <p>Sometimes I make bad decisions AND I'm sorry</p>
      <p>So heres a site, dedicated to my love</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CLICK ME
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;

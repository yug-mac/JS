import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ussu.mp4' autoPlay loop muted />
      <h1>HAPPY 10 MONTHS MY LOVE</h1>
      <p>I LOVE YOU SO MUCH</p>
      <p>HAPPY 10 SHAWTY</p>
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

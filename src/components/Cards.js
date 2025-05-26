import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My FAVORITE MAY ft pics of my jassu</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/lp_image.jpg'
              text='GLASSES ON, LOVE ON'
              label='Studious'
              path='/services'
            />
            <CardItem
              src='images/sleepy.jpg'
              text='JAMMY TIME, SLEEPY TIME'
              label='Snoring'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/hungry.jpg'
              text='Midnight snack? You bet.'
              label='Hungry'
              path='/services'
            />
            <CardItem
              src='images/shart.jpg'
              text='The prettier the girl, the smellier the shart - Yug Vashisth'
              label='Shitting'
              path='/products'
            />
            <CardItem
              src='images/sexy.jpg'
              text='Sexy asf, banger face card.'
              label='SEXY'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

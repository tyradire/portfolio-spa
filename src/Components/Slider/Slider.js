import React, { useState } from 'react';
import SlideItem from '../SlideItem/SlideItem';
import './Slider.css';
import watermelonShop from '../../assets/images/watermelon-shop.png';
import countdownJs from '../../assets/images/countdown-js.png';
import mestoSpa from '../../assets/images/mesto-spa.png';
import russianTravel from '../../assets/images/russian-travel.png';
import howToLearn from '../../assets/images/how-to-learn.png';

const Slider = () => {

  const [counter, setConter] = useState(20);

  const slide = {
    transform: `translate(${counter}px)`,
  }

  const toRight = () => { 
    if (counter < -240 || counter - 150 < -240 ) {
      setConter(-240);
    } else {
      setConter(counter - 150);
    }
  }

  const toLeft = () => {
    if (counter > 20 || counter + 150 > 20) {
      setConter(20);
    } else {
      setConter(counter + 150);
    }
  }

  return (
    <div className='slider'>
      <button onClick={() => toLeft()} className={counter !== 20 ? 'slider__button' : 'slider__button slider__button_hidden'}></button>
      <div className='slider__slide-items' style={slide}>
        <SlideItem image={watermelonShop} />
        <SlideItem image={countdownJs} />
        <SlideItem image={mestoSpa} />
        <SlideItem image={russianTravel} />
        <SlideItem image={howToLearn} />
      </div>
      <button onClick={() => toRight()} className={counter !== -240 ? 'slider__button slider__button_right' : 'slider__button slider__button_right slider__button_hidden'}></button>
    </div>
  );
};

export default Slider;
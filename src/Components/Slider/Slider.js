import React, { createRef, useEffect, useState } from 'react';
import SlideItem from '../SlideItem/SlideItem';
import './Slider.css';
import watermelonShop from '../../assets/images/watermelon-shop.png';
import countdownJs from '../../assets/images/countdown-js.png';
import mestoSpa from '../../assets/images/mesto-spa.png';
import russianTravel from '../../assets/images/russian-travel.png';
import howToLearn from '../../assets/images/how-to-learn.png';

const Slider = () => {

  const [counter, setConter] = useState(0);
  const [widthSlider, setSliderWidth] = useState(0);
  const refSliderWidth = createRef();

  useEffect(() => {
    const sliderWidth = refSliderWidth.current.getBoundingClientRect().width;
    setSliderWidth(sliderWidth)
    console.log(widthSlider);
  }, [widthSlider])

  const slide = {
    transform: `translate(${counter}px)`,
    width: `${widthSlider*5}px`,
  }

  const toRight = () => { 
    if (counter < -(widthSlider * 4) || counter - widthSlider < -(widthSlider * 4) ) {
      setConter(0);
    } else {
      setConter(counter - widthSlider);
    }
  }

  const toLeft = () => {
    if (counter > 0 || counter + widthSlider > 0) {
      setConter(0);
    } else {
      setConter(counter + widthSlider);
    }
  }

  console.log(widthSlider)

  return (
    <div ref={refSliderWidth} className='slider'>
      <button onClick={() => toLeft()} className={counter !== 0 ? 'slider__button' : 'slider__button slider__button_hidden'}></button>
      <div className='slider__slide-items' style={slide}>
        <SlideItem image={watermelonShop} widthSlide={widthSlider} />
        <SlideItem image={countdownJs} widthSlide={widthSlider} />
        <SlideItem image={mestoSpa} widthSlide={widthSlider} />
        <SlideItem image={russianTravel} widthSlide={widthSlider} />
        <SlideItem image={howToLearn} widthSlide={widthSlider} />
      </div>
      <button onClick={() => toRight()} className={counter !== -`${widthSlider * 5}` ? 'slider__button slider__button_right' : 'slider__button slider__button_right slider__button_hidden'}></button>
    </div>
  );
};

export default Slider;
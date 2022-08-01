import React, { createRef, useEffect, useState } from 'react';
import SlideItem from '../SlideItem/SlideItem';
import './Slider.css';
import watermelonShop from '../../assets/images/watermelon-shop.png';
import countdownJs from '../../assets/images/countdown-js.png';
import mestoSpa from '../../assets/images/mesto-spa.png';
import russianTravel from '../../assets/images/russian-travel.png';
import howToLearn from '../../assets/images/how-to-learn.png';

const Slider = ({ isMobile, isTablet }) => {

  const [counter, setConter] = useState(0);
  const [widthSlider, setSliderWidth] = useState(0);
  const [scale, setScale] = useState(0);
  const [sliderMargin, setSliderMargin] = useState(0);
  const refSliderWidth = createRef();

  useEffect(() => {
    const sliderWidth = refSliderWidth.current.getBoundingClientRect().width;
    setSliderWidth(sliderWidth)
  }, [])

  useEffect(() => {
    if (widthSlider > 799) {
      setScale(300);
      setSliderMargin(10)
    } else {
      setScale(widthSlider);
      setSliderMargin(0)
    }
  }, [widthSlider])

  const slide = {
    transform: `translate(${counter}px)`,
    width: `${scale*6 + 50}px`,
  }

  const toRight = () => {
    if ( widthSlider - counter + scale + 10 > (scale + sliderMargin)*6) {
      console.log('typic')
      setConter(-(scale + sliderMargin)*6 + widthSlider);
    } else {
      setConter(counter - scale - sliderMargin);
    }
  }

  const toLeft = () => {
    if (counter > 0 || counter + scale > 0) {
      setConter(0);
    } else {
      setConter(counter + scale + sliderMargin);
    }
  }

  return (
    <div ref={refSliderWidth} className='slider'>
      <button onClick={() => toLeft()} className={counter !== 0 ? 'slider__button' : 'slider__button slider__button_hidden'}></button>
      <div className='slider__slide-items' style={slide}>
        <SlideItem image={watermelonShop} scale={scale} />
        <SlideItem image={countdownJs} scale={scale} />
        <SlideItem image={mestoSpa} scale={scale} />
        <SlideItem image={russianTravel} scale={scale} />
        <SlideItem image={howToLearn} scale={scale} />
        <SlideItem image={watermelonShop} scale={scale} />
      </div>
      <button onClick={() => toRight()} className={counter !== -(scale + sliderMargin)*6 + widthSlider ? 'slider__button slider__button_right' : 'slider__button slider__button_right slider__button_hidden'}></button>
    </div>
  );
};

export default Slider;
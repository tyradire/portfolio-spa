import React, { createRef, useEffect, useState } from 'react';
import SlideItem from '../SlideItem/SlideItem';
import './Slider.css';
import watermelonShop from '../../assets/images/watermelon-shop.png';
import countdownJs from '../../assets/images/countdown-js.png';
import mestoSpa from '../../assets/images/mesto-spa.png';
import russianTravel from '../../assets/images/russian-travel.png';
import howToLearn from '../../assets/images/how-to-learn.png';
import { AMOUNT, MARGIN_AMOUNT, SWIPE_DISTANCE } from '../../utils/constants';

const Slider = ({ size, refSliderWidth, widthSlider }) => {

  const [counter, setConter] = useState(0);
  //const [widthSlider, setSliderWidth] = useState(0);
  const [scale, setScale] = useState(0);
  const [sliderMargin, setSliderMargin] = useState(0);
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // useEffect(() => {
  //   //console.log('ref width', refSliderWidth.current.getBoundingClientRect().width)
  //   const sliderWidth = refSliderWidth.current.getBoundingClientRect().width;
  //   setSliderWidth(sliderWidth)
  // }, [size])

  const conditionForRightButton = -(scale + sliderMargin)*AMOUNT + widthSlider - sliderMargin;

  useEffect(() => {
 
    if (size === 'extra') {
      setScale(340);
      setSliderMargin(10)
    } else if (size === 'desktop') {
      setScale(320);
      setSliderMargin(10)
    } else if (size === 'tablet') {
      setScale(400);
      setSliderMargin(10)
    }  else if (widthSlider < 500) {
      setScale(widthSlider);
      setSliderMargin(0)
    }
  }, [widthSlider])

  const slide = {
    transform: `translate(${counter}px)`,
    width: `${scale*AMOUNT + MARGIN_AMOUNT}px`,
  }

  const toRight = () => {
    if ( widthSlider - counter + scale + sliderMargin > (scale + sliderMargin)*AMOUNT) {
      setConter(conditionForRightButton);
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

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > SWIPE_DISTANCE
    const isRightSwipe = distance < -SWIPE_DISTANCE
    if (isLeftSwipe) {
      toRight()
    } else if (isRightSwipe) {
      toLeft()
    } else return; 
  }

  return (
    <div ref={refSliderWidth} className='slider'>
      <button onClick={() => toLeft()} className={counter !== 0 ? 'slider__button' : 'slider__button slider__button_hidden'}></button>
      <div 
        className='slider__slide-items' 
        style={slide}
        onTouchStart={onTouchStart} 
        onTouchMove={onTouchMove} 
        onTouchEnd={onTouchEnd}
      >
        <SlideItem image={watermelonShop} scale={scale} link={'https://watermelon-shop.ru'} />
        <SlideItem image={countdownJs} scale={scale} link={'https://tyradire.github.io/launch-countdown-timer'} />
        <SlideItem image={mestoSpa} scale={scale} link={'https://tyradire.github.io/mesto'} />
        <SlideItem image={russianTravel} scale={scale} link={'https://tyradire.github.io/russian-travel'} />
        <SlideItem image={howToLearn} scale={scale} link={'https://tyradire.github.io/how-to-learn'} />
      </div>
      <button onClick={() => toRight()} className={counter !== conditionForRightButton ? 'slider__button slider__button_right' : 'slider__button slider__button_right slider__button_hidden'}></button>
    </div>
  );
};

export default Slider;
import React, { createRef, useEffect, useState } from 'react';
import SlideItem from '../SlideItem/SlideItem';
import './Slider.css';
import watermelonShop from '../../assets/images/watermelon-shop.png';
import countdownJs from '../../assets/images/countdown-js.png';
import mestoSpa from '../../assets/images/mesto-spa.png';
import russianTravel from '../../assets/images/russian-travel.png';
import howToLearn from '../../assets/images/how-to-learn.png';
import { AMOUNT, MARGIN_AMOUNT, SWIPE_DISTANCE } from '../../utils/constants';

const Slider = ({ size }) => {

  const [counter, setConter] = useState(0);
  const [widthSlider, setSliderWidth] = useState(0);
  const [scale, setScale] = useState(0);
  const [sliderMargin, setSliderMargin] = useState(0);
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const refSliderWidth = createRef();

  useEffect(() => {
    const sliderWidth = refSliderWidth.current.getBoundingClientRect().width;
    setSliderWidth(sliderWidth)
  }, [])

  useEffect(() => {
    if (widthSlider > 769) {
      setScale(300);
      setSliderMargin(10)
    } else {
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
      console.log('typic')
      setConter(-(scale + sliderMargin)*AMOUNT + widthSlider);
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
        <SlideItem image={watermelonShop} scale={scale} />
        <SlideItem image={countdownJs} scale={scale} />
        <SlideItem image={mestoSpa} scale={scale} />
        <SlideItem image={russianTravel} scale={scale} />
        <SlideItem image={howToLearn} scale={scale} />
      </div>
      <button onClick={() => toRight()} className={counter !== -(scale + sliderMargin)*AMOUNT + widthSlider ? 'slider__button slider__button_right' : 'slider__button slider__button_right slider__button_hidden'}></button>
    </div>
  );
};

export default Slider;
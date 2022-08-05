import React from 'react';
import Slider from '../Slider/Slider';
import './Footer.css';

const Footer = ({ size, refSliderWidth, widthSlider }) => {
  return (
    <div className='footer'>
      <Slider size={size} refSliderWidth={refSliderWidth} widthSlider={widthSlider} />
    </div>
  );
};

export default Footer;
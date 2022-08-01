import React from 'react';
import Slider from '../Slider/Slider';
import './Footer.css';

const Footer = ({ isMobile, isTablet }) => {
  return (
    <div className='footer'>
      <Slider isMobile={isMobile} isTable={isTablet} />
    </div>
  );
};

export default Footer;
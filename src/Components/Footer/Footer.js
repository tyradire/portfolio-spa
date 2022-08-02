import React from 'react';
import Slider from '../Slider/Slider';
import './Footer.css';

const Footer = ({ size }) => {
  return (
    <div className='footer'>
      <Slider size={size} />
    </div>
  );
};

export default Footer;
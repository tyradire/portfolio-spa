import React from 'react';
import './SlideItem.css';

const SlideItem = ({ image, widthSlide }) => {

  return (
    <div className='slide-item' style={{backgroundImage : `url(${image})`, width: `${widthSlide}px`}}>
      <div className='slide-item__cover' style={{width: `${widthSlide}px`}}></div>
    </div>
  );
};

export default SlideItem;
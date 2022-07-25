import React from 'react';
import './SlideItem.css';

const SlideItem = ({ image }) => {

  return (
    <div style={{backgroundImage : `url(${image})`}} className='slide-item'>
      <div className='slide-item__cover'></div>
    </div>
  );
};

export default SlideItem;
import React from 'react';
import './SlideItem.css';

const SlideItem = ({ image, scale }) => {

  return (
    <div>
      <div className='slide-item__image' style={{backgroundImage : `url(${image})`, width: `${scale}px`}}>
        <div className='slide-item__cover' style={{width: `${scale}px`}}></div>
      </div>
    </div>
  );
};

export default SlideItem;
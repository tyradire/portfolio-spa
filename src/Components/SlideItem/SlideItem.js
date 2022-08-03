import React from 'react';
import './SlideItem.css';

const SlideItem = ({ image, scale, link }) => {

  return (
    <a href={link} target="_blank" rel="noopener">
      <div className='slide-item__image' style={{backgroundImage : `url(${image})`, width: `${scale}px`}}>
        <div className='slide-item__cover' style={{width: `${scale}px`}}></div>
      </div>
    </a>
  );
};

export default SlideItem;
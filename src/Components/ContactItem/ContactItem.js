import React from 'react';
import './ContactItem.css';

const ContactItem = ({icon, textContent, socLink}) => {
  return (
    <a href={socLink} className='contact-item' target='_blank' rel='noreferrer'>
      <div alt='icon' className='contact-item__icon' style={{backgroundImage: `url(${icon})`}}></div>
      <p className='contact-item__text'>{textContent}</p>
    </a>
  );
};

export default ContactItem;
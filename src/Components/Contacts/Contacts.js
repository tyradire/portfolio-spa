import React from 'react';
import './Contacts.css';

import emailIcon from '../../assets/images/email-icon.svg';
import telegramIcon from '../../assets/images/telegram-icon.svg';
import phoneIcon from '../../assets/images/phone-icon.svg';
import locationIcon from '../../assets/images/location-icon.svg';



const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts__item'>
        <img className='item__icon' src={emailIcon}/>
        <p className='item__contact'>ugarov.dany@yandex.ru</p>
      </div>
      <div className='contacts__item'>
        <img className='item__icon' src={telegramIcon}/>
        <p className='item__contact'>@tyradire</p>
      </div>
      <div className='contacts__item'>
        <img className='item__icon' src={phoneIcon}/>
        <p className='item__contact'>+7 921 584 1298</p>
      </div>
      <div className='contacts__item contacts__item_no-hover'>
        <img className='item__icon' src={locationIcon}/>
        <p className='item__contact'>Санкт-Петербург</p>
      </div>
    </div>
  );
};

export default Contacts;
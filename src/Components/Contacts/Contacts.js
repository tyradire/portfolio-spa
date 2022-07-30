import React, { useState } from 'react';
import './Contacts.css';

import emailIcon from '../../assets/images/email-icon.svg';
import telegramIcon from '../../assets/images/telegram-icon.svg';
import phoneIcon from '../../assets/images/phone-icon.svg';
import locationIcon from '../../assets/images/location-icon.svg';



const Contacts = () => {

  const [copied, setCopied] = useState('');

  const copyContact = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
    setCopied(e.target.textContent);
  }

  const closeNotification = () => {
    setCopied('');
  }

  return (
    <div className='contacts'>
      <a className='contacts__item' target='blank' href='https://t.me/tyradire'>
        <img className='item__icon' src={telegramIcon}/>
        <p className='item__contact'>@tyradire</p>
      </a>
      <div className='contacts__item' onClick={(e) => copyContact(e)}>
        <img className='item__icon' src={emailIcon}/>
        <p className='item__contact'>ugarov.dany@yandex.ru</p>
      </div>
      <div className='contacts__item' onClick={(e) => copyContact(e)}>
        <img className='item__icon' src={phoneIcon}/>
        <p className='item__contact'>+7 921 584 1298</p>
      </div>
      <div className='contacts__item contacts__item_no-hover'>
        <img className='item__icon' src={locationIcon}/>
        <p className='item__contact'>Санкт-Петербург</p>
      </div>
      <div className={copied ? 'contacts__notification contacts__notification_opened' : 'contacts__notification'}>
        <p className='contacts__notification-text'>Скопировано в буфер обмена:</p>
        <p className='contacts__notification-text'>{copied}</p>
        <span className='contacts__notification-cross' onClick={() => closeNotification()}>x</span>
      </div>
    </div>
  );
};

export default Contacts;
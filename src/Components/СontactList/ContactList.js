import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';
import emailIcon from '../../assets/images/email-icon.svg';
import githubIcon from '../../assets/images/github-icon.svg';
import telegramIcon from '../../assets/images/telegram-icon.svg';
import locationIcon from '../../assets/images/location-icon.svg';
import phoneIcon from '../../assets/images/phone-icon.svg';

const ContactList = () => {
  return (
    <div>
      <ContactItem icon={emailIcon} textContent={'ugarov.dany@yandex.ru'}/>
      <ContactItem icon={githubIcon} textContent={'github.com/tyradire'} socLink={'https://github.com/tyradire'}/>
      <ContactItem icon={telegramIcon} textContent={'@tyradire'} socLink={'https://t.me/tyradire'}/>
      <ContactItem icon={phoneIcon} textContent={'+7 921 584 1298'}/>
      <ContactItem icon={locationIcon} textContent={'Санкт-Петербург'}/>
    </div>
  );
};

export default ContactList;
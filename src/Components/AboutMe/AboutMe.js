import React, { useState } from 'react';
import './AboutMe.css';
import arrowNext from '../../assets/images/arrow.svg';
import arrowBack from '../../assets/images/arrow-back.svg';

const AboutMe = () => {

  const pageOne = 'Дизайн интерьеров в ПО пробудил интерес к html-вёрстке. Попробовав себя во внесении правок и поддержке сайта решил углубиться в эту сферу. Стал развивать навыки с помощью обучающих материалов, в том числе курсов Я.Практикум, видео-уроков, руководств.'
  const pageTwo = 'Развиваюсь в этом направлении и стараюсь находить что-то новое для себя каждый день';

  const [aboutMeContent, setAboutMeContent] = useState(false);

  return (
    <div className='about-me'>
      <div className='about-me__title-container'>
        <h2 className='about-me__title'>Обо мне</h2>
        <div className='about-me__line'></div>
      </div>
      <p className='about-me__info'>
        {
        aboutMeContent ? pageTwo : pageOne
        }
      </p>
      <img 
        alt='кнопка'
        src={aboutMeContent ? arrowBack : arrowNext}
        className='about-me__button about-me__button_back'
        onClick={() => setAboutMeContent(!aboutMeContent)}
      />
    </div>
  );
};

export default AboutMe;
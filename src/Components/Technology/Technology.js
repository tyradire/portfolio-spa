import React, { createRef, useEffect } from 'react';
import './Technology.css';

const Technology = ( {setHeightContainer} ) => {

  const refHeightContainer = createRef();

  useEffect(() => {
    console.log('test', refHeightContainer.current.scrollHeight);
    const a = refHeightContainer.current.scrollHeight;
    setHeightContainer(a);
  }, [])

  return (
    <div ref={refHeightContainer} className='technology'>
      <p className='technology__string'><br/>&nbsp;
      <br/>#################
      <br/># Ключевые навыки #
      <br/>#################
      <br/>&nbsp;
      <br/>## HTML 5 ##
      <br/>&nbsp;
      <br/>Адаптивная, кроссбраузерная вёрстка.
      <br/>Понимание семантики.
      <br/>Использование встроенной валидации форм.
      <br/>&nbsp;
      <br/>## CSS 3 ##
      <br/>&nbsp;
      <br/>Понимание и опыт использования БЭМ 
      <br/>Flexbox и Grid Layout
      <br/>Работа с Bootstrap
      <br/>Опыт работы с анимациями
      <br/>&nbsp;
      <br/>## JS ##
      <br/>&nbsp;
      <br/>Знание нативного JS, работа с ECMAScript 6
      <br/>Взаимодействия с DOM-деревом
      <br/>Обработка событий
      <br/>Асинхронный код
      <br/>Опыт работы с Node.js
      <br/>Работа с API
      <br/>&nbsp;
      <br/>## React.js ##
      <br/>&nbsp;
      <br/>Хуки
      <br/>Создание и подключение контекста
      <br/>React Router
      <br/>&nbsp;
      <br/>## Другое ##
      <br/>&nbsp;
      <br/>Figma
      <br/>ESLint
      <br/>Webpack
      <br/>Git
      <br/>MobX
      <br/>PostgreSQL / MongoDB
      <br/>Работа с облачным сервером</p>
    </div>
  );
};

export default Technology;

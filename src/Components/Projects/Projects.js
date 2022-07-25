import React, { createRef, useEffect } from 'react';
import './Projects.css';

const Projects = ( {setHeightContainer} ) => {

  const refHeightContainer = createRef();

  useEffect(() => {
    console.log('test', refHeightContainer.current.scrollHeight);
    const a = refHeightContainer.current.scrollHeight;
    setHeightContainer(a);
  }, [])

  return (
    
    <div ref={refHeightContainer} className='technology'>
      <p className='technology__string'>
        <br/>&nbsp;
        <br/>###################
        <br/># Последние проекты #
        <br/>###################
        <br/>&nbsp;
        <br/>## Watermelon Shop ##
        <br/>&nbsp;
        <br/>Онлайн площадка продажи арбузов.
        <br/>Присутствует добавление производителя и продукта.
        <br/>Реализована корзина, защита роутов, лайки, поиск и фильтрация по товарам.
        <br/>Доступна регистрация пользователя как администратора/юзера.
        <br/>Пароль шифруется на бекенде. Добавлена авторизация.
        <br/>Валидация формы авторизации и телефона в форме заявки.
        <br/>&nbsp;
        <br/>Проект реализован в связке React.js, MobX, Node.js, PostgreSQL
        <br/>Бекенд и Фронтенд находятся на облачном сервере.
        <br/>&nbsp;
        <br/>Сайт: <a className='technology__link' href="https://watermelon-shop.ru">https://watermelon-shop.ru</a>
        <br/>&nbsp;
        <br/>&nbsp;
        <br/>## Movies Explorer ##
        <br/>&nbsp;
        <br/>Представляет собой SPA, взаимодействующую со сторонним Api через блок поиска по фильмам.
        <br/>Защита роутов, лайки, поиск фильмов.
        <br/>Фильтрация по короткометражкам.
        <br/>Доступна регистрация и авторизация пользователя.
        <br/>Пароль шифруется на бекенде.
        <br/>&nbsp;
        <br/>Проект реализован в связке React.js, Node.js, MongoDB
        <br/>Бекенд и Фронтенд находятся на облачном сервере.
        <br/>&nbsp;
        <br/>Сайт: <a className='technology__link' href="https://cinema.nomoredomains.work">https://cinema.nomoredomains.work</a>
        <br/>&nbsp;
        <br/>&nbsp;
        <br/>## Вёрстка и прочее ##
        <br/>&nbsp;
        <br/>Таймер обратного отсчёта:
        <br/><a className='technology__link' href="https://tyradire.github.io/launch-countdown-timer/">https://tyradire.github.io/launch-countdown-timer</a>
        <br/>JS, API
        <br/><a className='technology__link' href="https://tyradire.github.io/mesto/">https://tyradire.github.io/mesto</a>
        <br/>Адаптивная вёрстка
        <br/><a className='technology__link' href="https://tyradire.github.io/russian-travel/">https://tyradire.github.io/russian-travel</a>
        <br/>Первая вёрстка
        <br/><a className='technology__link' href="https://tyradire.github.io/how-to-learn/">https://tyradire.github.io/how-to-learn</a>
      </p>
    </div>
  );
};

export default Projects;
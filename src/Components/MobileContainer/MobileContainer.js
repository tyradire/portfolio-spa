import React from 'react';
import Footer from '../Footer/Footer';
import './MobileContainer.css';


const MobileContainer = ({ scrollRefAboutMe, scrollRefTechnology, scrollRefProjects }) => {
  return (
    <div className='mobile-container'>
      <section className='mobile-container__section' ref={scrollRefAboutMe}>
        <h2 className='mobile-container__subtitle'>Обо мне
        <br/>======
        </h2>
        <p className='mobile-container__text'>Привет! Меня зовут Даниил.
        <br/>Долгое время я работал в мебельном салоне.
        В работе часто приходилось просматривать сайты поставщиков и в них я улавливал какие-то интересные реализации и дизайнерские решения.
        Несколько раз была необходимость срочно внести правки на сайте салона. Меня крайне увлёк и захватил этот процесс.
        Появилась заинтересованность в вёрстке, захотелось понять как всё устроено и работает.
        Интерес только возрастал и перерос в увлечение. Я преумножал свои знания, верстал просто для себя различные странички.
        Серьёзным шагом вперёд стала запись на большой курс по фронтенду. Параллельно с ним я изучал новое для себя по видео-урокам и руководствам.
        Закончив курс и успешно реализовав несколько проектов (от курса и самостоятельных), я твёрдо решил, что фронтенд - это то, чем я бы хотел заниматься. И вот перед вами моё резюме.
        </p>
      </section>
      <section className='mobile-container__section' ref={scrollRefTechnology}>
        <h2 className='mobile-container__subtitle'>Ключевые навыки
        <br/>============
        </h2>
        <p className='mobile-container__subtitle'>
          HTML 5
        <br/>-----------
        </p>
        <ul className='mobile-container__list'>
          <li className='mobile-container__list-item'>Адаптивная, кроссбраузерная вёрстка</li>
          <li className='mobile-container__list-item'>Понимание семантики</li>
          <li className='mobile-container__list-item'>Использование встроенной валидации форм</li>
        </ul>
        <p className='mobile-container__subtitle'>
          CSS 3
        <br/>--------
        </p>
        <ul className='mobile-container__list'>
          <li className='mobile-container__list-item'>Понимание и опыт использования БЭМ</li>
          <li className='mobile-container__list-item'>Flexbox и Grid Layout</li>
          <li className='mobile-container__list-item'>Работа с Bootstrap</li>
          <li className='mobile-container__list-item'>Опыт работы с анимациями</li>
        </ul>
        <p className='mobile-container__subtitle'>
          JS
        <br/>---
        </p>
        <ul className='mobile-container__list'>
          <li className='mobile-container__list-item'>Знание нативного JS, работа с ECMAScript 6</li>
          <li className='mobile-container__list-item'>Взаимодействия с DOM-деревом</li>
          <li className='mobile-container__list-item'>Обработка событий</li>
          <li className='mobile-container__list-item'>Работа с API</li>
          <li className='mobile-container__list-item'>Асинхронный код</li>
          <li className='mobile-container__list-item'>Опыт работы с Node.js</li>
        </ul>
        <p className='mobile-container__subtitle'>
          React.js
        <br/>-----------
        </p>
        <ul className='mobile-container__list'>
          <li className='mobile-container__list-item'>Хуки</li>
          <li className='mobile-container__list-item'>Создание и подключение контекста</li>
          <li className='mobile-container__list-item'>React Router</li>
        </ul>
        <p className='mobile-container__subtitle'>
          Другое
        <br/>-----------
        </p>
        <ul className='mobile-container__list'>
          <li className='mobile-container__list-item'>Figma</li>
          <li className='mobile-container__list-item'>ESLint</li>
          <li className='mobile-container__list-item'>Webpack</li>
          <li className='mobile-container__list-item'>Git</li>
          <li className='mobile-container__list-item'>MobX</li>
          <li className='mobile-container__list-item'>PostgreSQL / MongoDB</li>
          <li className='mobile-container__list-item'>Работа с облачным сервером</li>
        </ul>
      </section>
      <section className='mobile-container__section' ref={scrollRefProjects}>
        <h2 className='mobile-container__subtitle'>Последние проекты
        <br/>=============
        </h2>
        <p className='mobile-container__subtitle'>
          Watermelon Shop
        </p>
        <p className='mobile-container__text'>
          Онлайн площадка продажи арбузов. Присутствует добавление производителя и продукта. 
          Реализована корзина, защита роутов, лайки, поиск и фильтрация по товарам.
          Доступна регистрация пользователя как администратора/юзера.
          Пароль шифруется на бекенде. Добавлена авторизация.
          Валидация формы авторизации и телефона в форме заявки.
          Проект реализован в связке React.js, MobX, Node.js, PostgreSQL
          Бекенд и Фронтенд находятся на облачном сервере.
        </p>
        <a className='mobile-container__link' href="https://watermelon-shop.ru"><p>https://watermelon-shop.ru</p></a>
        <p className='mobile-container__subtitle'>
          Movies Explorer
        </p>
        <p className='mobile-container__text'>
          Представляет собой SPA, взаимодействующую со сторонним Api через блок поиска по фильмам.
          Защита роутов, лайки, поиск фильмов.
          Фильтрация по короткометражкам.
          Доступна регистрация и авторизация пользователя.
          Пароль шифруется на бекенде.
          Проект реализован в связке React.js, Node.js, MongoDB
          Бекенд и Фронтенд находятся на облачном сервере.
        </p>
        <a className='mobile-container__link' href="https://cinema.nomoredomains.work"><p>https://cinema.nomoredomains.work</p></a>
        <p className='mobile-container__subtitle'>
          Вёрстка и прочее
        </p>
        <p className='mobile-container__text mobile-container__text_other'>
          Таймер обратного отсчёта
        </p>
        <a className='mobile-container__link' href="https://tyradire.github.io/launch-countdown-timer/"><p className='mobile-container__link-text'>https://tyradire.github.io/launch-countdown-timer</p></a>
        <p className='mobile-container__text mobile-container__text_other'>
          JS, API
        </p>
        <a className='mobile-container__link' href="https://tyradire.github.io/mesto/"><p className='mobile-container__link-text'>https://tyradire.github.io/mesto</p></a>
        <p className='mobile-container__text mobile-container__text_other'>
          Адаптивная вёрстка
        </p>
        <a className='mobile-container__link' href="https://tyradire.github.io/russian-travel/"><p className='mobile-container__link-text'>https://tyradire.github.io/russian-travel</p></a>
        <p className='mobile-container__text mobile-container__text_other'>
          Учебная вёрстка с простейшими анимациями
        </p>
        <a className='mobile-container__link mobile-container__text_other' href="https://tyradire.github.io/how-to-learn/"><p className='mobile-container__link-text'>https://tyradire.github.io/how-to-learn</p></a>
      </section>
    <Footer />
    </div>
  );
};

export default MobileContainer;
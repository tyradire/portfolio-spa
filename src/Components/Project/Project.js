import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div className='project'>
      <p className='project__title'>Watermelon Shop</p>
      <p className='project__description'>Онлайн площадка для продажи арбузов. Реализована регистрация, авторизация. 
      Присутствует возможность добавления своего производителя/арбуза. Все продукты сохраняются в БД. Пароли шифруются на бекенде.</p>
      <p className='project__subtitle'>Клиентская часть</p>
      <p className='project__description'>SPA выполнен с использованием React.js. Часть визуала в начале была написана с использоваем Bootstrap React для экономии времени.</p>
      <div className='project__techs'>
        <span className='project__tech'>React.js</span>
        <span className='project__tech'>Bootstrap</span>
        <span className='project__tech'>Mobx</span>
      </div>
      <p className='project__subtitle'>Серверная часть</p>
      <p className='project__description'>Бекенд с базой данных находится на облачном сервере. Зарегистрирован домен, добавлен протокол https. С postgreSQL используется Sequelize.</p>
      <div className='project__techs'>
        <span className='project__tech'>Node.js</span>
        <span className='project__tech'>PostgreSQL</span>
      </div>
      <p className='project__subtitle'>Ссылки</p>
      <ul className='project__links'>
        <li><a className='project__link' href='https://watermelon-shop.ru/'>watermelon-shop.ru</a></li>
        <li><a className='project__link' href='https://github.com/tyradire/watermelon-shop'>github.com/tyradire/watermelon-shop</a></li>
      </ul>
    </div>
  );
};

export default Project;
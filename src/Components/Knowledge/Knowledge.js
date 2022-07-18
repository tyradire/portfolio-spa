import React from 'react';
import './Knowledge.css';
import css from '../../assets/knowledge-icons/css.svg';
import html from '../../assets/knowledge-icons/html.svg';
import js from '../../assets/knowledge-icons/js.svg';
import reactjs from '../../assets/knowledge-icons/reactjs.svg';
import nodejs from '../../assets/knowledge-icons/nodejs.svg';
import webpack from '../../assets/knowledge-icons/webpack.svg';

const Knowledge = () => {
  return (
    <div className='knowledge'>
      <h2 className='knowledge__title'>Основные навыки</h2>
      <ul className='knowledge__items'>
        <li className='knowledge__item'>
          CSS
        </li>
        <li className='knowledge__item'>
          HTML
        </li>
        <li className='knowledge__item'>
          JS
        </li>
        <li className='knowledge__item'>
          React.js
        </li>
        <li className='knowledge__item'>
          Node.js
        </li>
        <li className='knowledge__item'>
          Webpack
        </li>
      </ul>
      {/* <div className='knowledge__icons'>
        <img src={css} alt='иконка' className='knowledge__icon'/>
        <img src={html} alt='иконка' className='knowledge__icon'/>
        <img src={js} alt='иконка' className='knowledge__icon'/>
        <img src={reactjs} alt='иконка' className='knowledge__icon'/>
        <img src={nodejs} alt='иконка' className='knowledge__icon knowledge__icon_big'/>
        <img src={webpack} alt='иконка' className='knowledge__icon knowledge__icon_big'/>
      </div> */}
    </div>
  );
};

export default Knowledge;
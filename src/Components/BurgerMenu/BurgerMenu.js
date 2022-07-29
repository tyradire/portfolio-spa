import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {

  const [isOpen, setIsOpened] = useState(false);

  return (
    <div className={!isOpen ? 'burger-menu' : 'burger-menu burger-menu_opened'}>
      <label className='burger-menu__label' for='burger-checkbox'>
        <input 
          type='checkbox' 
          className='burger-menu__input' 
          id='burger-checkbox'
          onClick={() => setIsOpened(!isOpen)}
        >
        </input>
        <div className='burger-menu__wrapper'>
          <div className='wrapper__line'></div>
          <div className='wrapper__line'></div>
          <div className='wrapper__line'></div>
        </div> 
      </label>
    </div>
  );
};

export default BurgerMenu;
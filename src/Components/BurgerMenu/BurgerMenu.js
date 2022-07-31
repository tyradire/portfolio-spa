import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {

  const [isOpen, setIsOpened] = useState(false);

  // const menuHeight = {
  //   height: `${componentHeight}px`,
  // }

  return (
    <div className={!isOpen ? 'burger-menu' : 'burger-menu burger-menu_opened'}>
      <label className='burger-menu__label' htmlFor='burger-checkbox'>
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
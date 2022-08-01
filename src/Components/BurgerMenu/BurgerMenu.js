import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ scrollRefAboutMe, scrollRefTechnology, scrollRefProjects }) => {

  const [isOpen, setIsOpened] = useState(false);

  // const menuHeight = {
  //   height: `${componentHeight}px`,
  // }
  const scrollToAboutMe = () => {
    scrollRefAboutMe.current.scrollIntoView();
    setIsOpened(!isOpen);
  }

  const scrollToTechnology = () => {
    scrollRefTechnology.current.scrollIntoView();
    setIsOpened(!isOpen);
  }

  const scrollToProject = () => {
    scrollRefProjects.current.scrollIntoView();
    setIsOpened(!isOpen);
  }

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
      <div className={!isOpen ? 'burger-menu__links' :'burger-menu__links burger-menu__links_opened'}>
        <button onClick={scrollToAboutMe} className='burger-menu__button'>#Обо мне</button>
        <button onClick={scrollToTechnology} className='burger-menu__button'>#Ключевые навыки</button>
        <button onClick={scrollToProject} className='burger-menu__button'>#Последние проекты</button>
      </div>
    </div>
  );
};

export default BurgerMenu;
import React from 'react';
import { ABOUT_ROUTE, PROJECTS_ROUTE, TECHNOLOGY_ROUTE } from '../../utils/constants';
import './Header.css';
import githubIcon from '../../assets/images/github-icon.svg';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='header'>
      <div className='header__github'>
        <img alt='Github icon' className='header__github-icon' src={githubIcon} />
        <p className='header__github-name'>github.com/tyradire</p>
      </div>
      <Link className='header__projects' to={ABOUT_ROUTE}>
        <div className='header__projects-light'></div>
        <p className='header__projects-name'>.tab__projects</p>
      </Link>
      <Link className='header__projects' to={PROJECTS_ROUTE}>
        <div className='header__projects-light'></div>
        <p className='header__projects-name'>.tab__about-me</p>
      </Link>
      <Link className='header__projects' to={TECHNOLOGY_ROUTE}>
        <div className='header__projects-light'></div>
        <p className='header__projects-name'>.tab__tech</p>
      </Link>
    </div>
  );
};

export default Header;
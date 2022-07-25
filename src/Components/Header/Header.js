import React from 'react';
import { ABOUT_ROUTE, PROJECTS_ROUTE, TECHNOLOGY_ROUTE } from '../../utils/constants';
import './Header.css';
import githubIcon from '../../assets/images/github-icon.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const isAbout = location.pathname === ABOUT_ROUTE;
  const isProject = location.pathname === PROJECTS_ROUTE;
  const isTechnology = location.pathname === TECHNOLOGY_ROUTE;

  return (
    <div className='header'>
      <div className='header__github'>
        <img alt='Github icon' className='header__github-icon' src={githubIcon} />
        <a href='https://github.com/tyradire/' target='blank' className='header__github-name'>github.com/tyradire</a>
      </div>
      <div className='header__tab-list'>
        <Link className={isTechnology ? 'header__tab header__tab_active' : 'header__tab'} to={TECHNOLOGY_ROUTE}>
          <div className={isTechnology ? 'header__tab-light header__tab-light_active' : 'header__tab-light'}></div>
          <p className='header__tab-name'>.tab__tech</p>
        </Link>
        <Link className={isProject ? 'header__tab header__tab_active' : 'header__tab'} to={PROJECTS_ROUTE}>
          <div className={isProject ? 'header__tab-light header__tab-light_active' : 'header__tab-light'}></div>
          <p className='header__tab-name'>.tab__projects</p>
        </Link>
        <Link className={isAbout ? 'header__tab header__tab_active' : 'header__tab'} to={ABOUT_ROUTE}>
          <div className={isAbout ? 'header__tab-light header__tab-light_active' : 'header__tab-light'}></div>
          <p className='header__tab-name'>.tab__about-me</p>
        </Link>
      </div> 
    </div>
  );
};

export default Header;
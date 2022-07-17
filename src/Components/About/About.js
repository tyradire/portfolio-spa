import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Knowledge from '../Knowledge/Knowledge';
import Profile from '../Profile/Profile';
import ContactList from '../СontactList/ContactList';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <Profile />
      <ContactList />
      <Knowledge />
      <AboutMe />
    </div>
  );
};

export default About;
import React from 'react';
import './SkillsPage.css';

const SkillsPage = ({ skills }) => {

  return (
    <div className='skills__page'>
      <ul className='skills__list'>
      {
        skills.map(elem => {
          return <li className='skills__item'>{elem}</li>
        })
      }
      </ul>
    </div>
  );
};

export default SkillsPage;
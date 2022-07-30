import React, { useState } from 'react';
import SkillsPage from '../SkillsPage/SkillsPage';
import './Skills.css';
import { skillsArrayFirst, skillsArraySecond } from '../../utils/constants';

const Skills = ({ size }) => {

  const [nextPageOpen, setNextPageOpen] = useState(true);

  return (
    <div className={size ? 'skills skills_hide' : 'skills'}>
      <button 
        className={nextPageOpen ? 'skills__button' : 'skills__button skills__button_rotate'}
        onClick={() => setNextPageOpen(!nextPageOpen)}
      ></button>
      <h2 className='skills__title'>Мои навыки</h2>
      <SkillsPage skills={nextPageOpen ? skillsArrayFirst : skillsArraySecond} />
    </div>
  );
};

export default Skills;
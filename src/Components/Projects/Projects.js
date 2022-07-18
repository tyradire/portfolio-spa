import React from 'react';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='projects__title-container'>
        <h2 className='projects__title'>Pet projects</h2>
        <div className='projects__line'></div>
      </div>
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Projects;
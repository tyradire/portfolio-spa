import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__photo'></div>
      <div className='profile__description'>
        <p className='description__surname'>Угаров</p>
        <p className='description__name'>Даниил</p>
        <p className='description__specialization'>Frontend Developer</p>
      </div>
    </div>
  );
};

export default Profile;
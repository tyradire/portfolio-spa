import React from 'react';
import './Profile.css';
import avatar from '../../assets/images/profile_photo.jpg';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__wrapper'>
        <img className='profile__photo' src={avatar}/>
      </div>
      <div className='profile__main'>
        <p className='profile__name'>Угаров Даниил</p>
        <p className='profile__name profile__name_dev'>Frotend Developer</p>
      </div>
    </div>
  );
};

export default Profile;
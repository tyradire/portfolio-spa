import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';
import Profile from './Components/Profile/Profile';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className='app__content'>
          <Header />
          <div className='app__main'>
            <div>
              <Profile />
              <Contacts />
              <Skills />
            </div>
            <MainContainer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

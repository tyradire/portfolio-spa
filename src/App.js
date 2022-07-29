import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';
import Profile from './Components/Profile/Profile';

function App() {

  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', setWindowSize);
    return () => {
      window.removeEventListener('resize', setWindowSize);
    };
  }, []);

  

  const setWindowSize = () => {
    if (window.screen.width < 500) {
      setIsTablet(false);
      setIsMobile(true);
    } else if (window.screen.width < 800) {
      setIsTablet(true);
      setIsMobile(false);
    } else {
      setIsTablet(false);
      setIsMobile(false);
    }
    return
  }

  useEffect(() => {
    setWindowSize();
  },[])

  console.log(isTablet, 'isTablet')
  console.log(isMobile, 'isMobile')

  return (
    <BrowserRouter>
      <div className="app">
        <div className='app__content'>
          <Header size={isTablet || isMobile} />
          <div className='app__main'>
            <div className='app__sidebar'>
              <Profile />
              <Contacts />
            </div>
            <MainContainer size={isTablet} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

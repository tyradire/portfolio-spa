import React, { createRef, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';

function App() {

  // const heightComponent = createRef();
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const [componentHeight, setComponentHeight] = useState(0);

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

  // useEffect(() => {
  //   setComponentHeight(heightComponent.current.clientHeight)
  // }, [])

  console.log(isTablet, 'isTablet')
  console.log(isMobile, 'isMobile')
  // console.log(componentHeight, 'Высота компонента')

  return (
    <BrowserRouter>
      <div className="app">
        <div className='app__content'>
          <BurgerMenu />
          <Header size={isTablet || isMobile} />
          <div className='app__main'>
            <div className='app__sidebar'>
            <Profile />
            <Contacts />
            <MainContainer size={isTablet} />
            </div>
            {/* <MainContainer size={isTablet} /> */}
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

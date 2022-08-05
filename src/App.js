import React, { createRef, useRef, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';
import MobileContainer from './Components/MobileContainer/MobileContainer';
import Profile from './Components/Profile/Profile';
import Projects from './Components/Projects/Projects';

function App() {

  const scrollRefAboutMe = useRef(null);
  const scrollRefTechnology = useRef(null);
  const scrollRefProjects = useRef(null);
  const refSliderWidth = useRef();
  

  // const heightComponent = createRef();
  const [viewResolution, setViewResolution] = useState('desktop');
  const [widthSlider, setSliderWidth] = useState(0);
  // mobile < 500px; tablet < 769px; laptop < 1025; desktop < 1281px; extra > 1280px 

  // const [componentHeight, setComponentHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', setWindowSize);
    return () => {
      window.removeEventListener('resize', setWindowSize);
    };
  }, []);

  const setWindowSize = () => {
    const sliderWidth = refSliderWidth.current.getBoundingClientRect().width;
    setSliderWidth(sliderWidth);
    if (window.screen.width > 1280) {
      setViewResolution('extra');
    } else if (window.screen.width < 500) {
      setViewResolution('mobile');
    } else if (window.screen.width < 769) {
      setViewResolution('tablet');
    } else if (window.screen.width < 1025) {
      setViewResolution('laptop');
    } else {
      setViewResolution('desktop');
    }
    return
  }

  useEffect(() => {
    setWindowSize();
  },[])

  // useEffect(() => {
  //   setComponentHeight(heightComponent.current.clientHeight)
  // }, [])

  // console.log(componentHeight, 'Высота компонента')

  //console.log(viewResolution);

  return (
    <BrowserRouter>
      <div className="app">
        <div className='app__content'>
          <BurgerMenu 
            scrollRefAboutMe={scrollRefAboutMe} 
            scrollRefTechnology={scrollRefTechnology} 
            scrollRefProjects={scrollRefProjects}
          />
          <Header size={viewResolution} />
          <div className='app__main'>
            <div className='app__sidebar'>
            <Profile />
            <Contacts />
            
            </div>
            {viewResolution !== 'mobile' ? <MainContainer size={viewResolution} /> : ''} 
          </div>
          
          {
            viewResolution === 'mobile' ? <MobileContainer 
                scrollRefAboutMe={scrollRefAboutMe} 
                scrollRefTechnology={scrollRefTechnology} 
                scrollRefProjects={scrollRefProjects}
                size={viewResolution} refSliderWidth={refSliderWidth} widthSlider={widthSlider}
              />
            : <Footer size={viewResolution} refSliderWidth={refSliderWidth} widthSlider={widthSlider}/>
          }
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { createRef, useEffect, useState }  from 'react';
import { Routes, Route } from 'react-router-dom';
import { mainRoutes } from '../../utils/routes';
import './MainContainer.css';

const MainContainer = () => {

  const refComponent = createRef();
  const [arr, setArr] = useState([]);

  function createStrings(height) {
    let repeat = Math.floor(height / 20);
    let newArr = [];
    for (let i = repeat - 1; i > -1; i--) {
      newArr.push(repeat - i);
    }
    setArr(newArr)
  }

  useEffect(() => {
    const contentHeight = refComponent.current.getBoundingClientRect().height;
    createStrings(contentHeight);
  }, [])

  return (
    <div className='main-container'>
      <div ref={refComponent} className='main-container__numbering'>
      {
        arr.map(elem => {
          return <p className='main-container__number' key={elem}>{elem}</p>
        })
      }
      </div>
      <Routes>
        {
          mainRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} />
          )
        }
      </Routes>
    </div>
  );
};

export default MainContainer;
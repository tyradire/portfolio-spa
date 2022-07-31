import React, { createRef, useEffect } from 'react';
import './AboutMe.css';

const AboutMe = ( {setHeightContainer} ) => {
  
  const refHeightContainer = createRef();

  useEffect(() => {
    console.log('test', refHeightContainer.current.scrollHeight);
    const a = refHeightContainer.current.scrollHeight;
    setHeightContainer(a);
  }, [])

  return (
    <div ref={refHeightContainer} className='technology'>
      <p className='technology__string'>
        <br/>&nbsp;
        <h2 className='technology__subtitle'>Обо мне
        <br/>------------
        </h2>
        {/* <br/>Обо мне
        <br/>------------ */}
        <br/>&nbsp;
        <br/>&nbsp;&nbsp;Привет! Меня зовут Даниил
        <br/>&nbsp;
        <br/>Долгое время я работал в мебельном салоне.
        <br/>В работе часто приходилось просматривать сайты поставщиков и в них я улавливал какие-то интересные реализации и дизайнерские решения.
        <br/>Несколько раз была необходимость срочно внести правки на сайте салона. Меня крайне увлёк и захватил этот процесс.
        <br/>Появилась заинтересованность в вёрстке, захотелось понять как всё устроено и работает.
        <br/>Интерес только возрастал и перерос в увлечение. Я преумножал свои знания, верстал просто для себя различные странички.
        <br/>Серьёзным шагом вперёд стала запись на большой курс по фронтенду. Параллельно с ним я изучал новое для себя по видео-урокам и руководствам.
        <br/>Закончив курс и успешно реализовав несколько проектов (от курса и самостоятельных), я твёрдо решил, что фронтенд - это то, чем я бы хотел заниматься. И вот перед вами моё резюме.
      </p>
    </div>
  );
};

export default AboutMe;
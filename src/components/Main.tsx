import React from 'react';
import Home from './home/Home';
import './Main.css';
import ExperiencePage from './experiencePage/ExperiencePage';
import AboutPage from './aboutPage/AboutPage';

const Main = () => {
  return (
    <>
      <div id="main-div">
        <Home />
        <ExperiencePage />
        <AboutPage />
      </div>
    </>
  );
};

export default Main;

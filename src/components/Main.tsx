import React from 'react';
import Home from './homePage/HomePage';
import './Main.css';
import ExperiencePage from './experiencePage/ExperiencePage';
import AboutPage from './aboutPage/AboutPage';
import ContactPage from './contactPage/ContactPage';

const Main = () => {
  return (
    <>
      <div id="main-div">
        <Home />
        <AboutPage />
        <ExperiencePage />
        <ContactPage />
      </div>
    </>
  );
};

export default Main;

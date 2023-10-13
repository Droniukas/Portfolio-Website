import React, { useEffect, useState } from 'react';
import Home from './homePage/HomePage';
import './Main.css';
import ExperiencePage from './experiencePage/ExperiencePage';
import AboutPage from './aboutPage/AboutPage';
import ContactPage from './contactPage/ContactPage';
import sky from './static-gradient-3.jpg';
import * as THREE from 'three';

type MainProps = {
  sphereTexture: THREE.Texture;
};

const Main = (props: MainProps) => {
  const { sphereTexture } = props;

  return (
    <>
      <div id="main-div" className="gradient-background">
        <Home sphereTexture={sphereTexture} />
        <AboutPage />
        <ExperiencePage />
        <ContactPage />
      </div>
    </>
  );
};

export default Main;

import React, { useEffect, useRef, useState } from 'react';
import Home from './homePage/HomePage';
import './Main.css';
import ExperiencePage from './experiencePage/ExperiencePage';
import AboutPage from './aboutPage/AboutPage';
import ContactPage from './contactPage/ContactPage';
import sky from './static-gradient-3.jpg';
import * as THREE from 'three';

const Main = () => {
  const [sphereTexture, setSphereTexture] = useState<THREE.Texture>(null);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(sky, (loadedTexture) => {
      setSphereTexture(loadedTexture);
    });
  }, []);

  return (
    <>
      {sphereTexture && (
        <div id="main-div" className="gradient-background">
          <Home sphereTexture={sphereTexture} />
          <AboutPage />
          <ExperiencePage />
          <ContactPage />
        </div>
      )}
    </>
  );
};

export default Main;

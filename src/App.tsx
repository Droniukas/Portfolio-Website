import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import sky from './resources/images/static-gradient-3.jpg';
import * as THREE from 'three';
import ReactGA from 'react-ga4';

function App(): JSX.Element {
  const [sphereTexture, setSphereTexture] = useState<THREE.Texture>(null);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(sky, (loadedTexture) => {
      setSphereTexture(loadedTexture);
    });
  }, []);

  useEffect(() => {
    ReactGA.initialize('your GA measurement id');
    ReactGA.send({ hitType: 'pageview', page: '/', title: 'Hello' });
  }, []);

  return (
    <>
      {sphereTexture ? (
        <>
          <Header />
          <Main sphereTexture={sphereTexture} />
          <Sidebar />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;

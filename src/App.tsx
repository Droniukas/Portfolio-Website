import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import sky from './resources/images/static-gradient-3.jpg';
import * as THREE from 'three';
import ReactGA from 'react-ga4';
import { useSearchParams } from 'react-router-dom';
import { UserManagement } from '@piwikpro/react-piwik-pro';
import PiwikPro from '@piwikpro/react-piwik-pro';

function App(): JSX.Element {
  const [sphereTexture, setSphereTexture] = useState<THREE.Texture>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(sky, (loadedTexture) => {
      setSphereTexture(loadedTexture);
    });
  }, []);

  useEffect(() => {
    ReactGA.initialize('G-NXCB8M73HB');
    ReactGA.send({ hitType: 'pageview', page: '/', title: 'Opened the app' });
  }, []);

  useEffect(() => {
    const userRef = searchParams.get('ref') || searchParams.get('r') || 'none';
    PiwikPro.initialize(
      'a6df040b-b80d-4f2d-9c37-3e39aa170052',
      'https://dronius.containers.piwik.pro',
    );
    UserManagement.setUserId(userRef);
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

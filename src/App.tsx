import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import sky from './resources/images/static-gradient-3.jpg';
import * as THREE from 'three';

function App(): JSX.Element {
  const [sphereTexture, setSphereTexture] = useState<THREE.Texture>(null);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(sky, (loadedTexture) => {
      setSphereTexture(loadedTexture);
    });
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

import React, { Suspense } from 'react';
import AbstractSphere from './AbstractSphere';
import { Loader, PerspectiveCamera } from '@react-three/drei';

const CanvasElements = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.9} />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0.4, 6.5]} />
      <Suspense fallback={null}>
        <AbstractSphere />
      </Suspense>
    </>
  );
};

export default CanvasElements;

import React from 'react';
import * as THREE from 'three';

const TemporaryBox = () => {
  return (
    <mesh>
      <boxBufferGeometry attach={'geometry'} />
      <meshLambertMaterial />
    </mesh>
  );
};

export default TemporaryBox;

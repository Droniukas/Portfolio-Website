import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Mesh } from 'three';

const TemporaryBox = () => {
  const meshRef = useRef<Mesh>(null);
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    // refs point to the exact instance of the object created by three js

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry attach={'geometry'} args={[2, 2, 2]} />
      <meshLambertMaterial color={'#0bbb87'} attach={'material'} />
    </mesh>
  );
};

export default TemporaryBox;

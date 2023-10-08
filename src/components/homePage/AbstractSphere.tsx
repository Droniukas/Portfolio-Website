import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Mesh, MeshPhysicalMaterial, Shader, ShaderMaterial } from 'three';
import sky from './resources/images/3-static-gradient-3.jpg';
import vertex from './resources/shaders/vertex.glsl';
import fragment from './resources/shaders/fragment.glsl';
import { gsap } from 'gsap';

import * as THREE from 'three';

const AbstractSphere = () => {
  const ref = useRef<Mesh>(null);
  const shaderMaterialRef = useRef<ShaderMaterial>();

  const [mouseXpercentage, setMouseXPercentage] = useState<number | null>(null);
  const [mouseYpercentage, setMouseYPercentage] = useState<number | null>(null);

  useFrame(({ clock }) => {
    if ((ref.current.material as MeshPhysicalMaterial).userData.shader !== undefined) {
      (ref.current.material as MeshPhysicalMaterial).userData.shader.uniforms.uTime = {
        value: clock.elapsedTime,
      };
    }
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.uTime = {
        value: clock.elapsedTime,
      };
    }

    if (ref.current) {
      ref.current.position.y += Math.sin(clock.elapsedTime * 1.6) / 250;
      gsap.to(ref.current.rotation, {
        y: mouseXpercentage * 0.5,
        x: mouseYpercentage * 0.5 - Math.PI / 4.4,
        duration: 2,
      });
    }
  });

  useEffect(() => {
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.uSky = {
        value: new THREE.TextureLoader().load(sky),
      };
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMouseXPercentage((event.clientX / innerWidth) * 2 - 1);
      setMouseYPercentage((event.clientY / innerHeight) * 2 + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 50]} />
      <shaderMaterial
        ref={shaderMaterialRef}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
};

export default AbstractSphere;

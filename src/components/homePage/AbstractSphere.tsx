import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { Mesh, MeshPhysicalMaterial, ShaderMaterial } from 'three';
import vertex from './resources/shaders/vertex.glsl';
import fragment from './resources/shaders/fragment.glsl';
import { gsap } from 'gsap';
import * as THREE from 'three';

type AbstractSphereProps = {
  texture: THREE.Texture;
};

const AbstractSphere = (props: AbstractSphereProps) => {
  const { texture } = props;
  const meshRef = useRef<Mesh>(null);
  const shaderMaterialRef = useRef<ShaderMaterial>();

  const [mouseXpercentage, setMouseXPercentage] = useState<number>(0);
  const [mouseYpercentage, setMouseYPercentage] = useState<number>(2);

  useFrame(({ clock }) => {
    if (
      (meshRef.current.material as MeshPhysicalMaterial).userData.shader !== undefined
    ) {
      (meshRef.current.material as MeshPhysicalMaterial).userData.shader.uniforms.uTime =
        {
          value: clock.elapsedTime,
        };
    }
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.uTime = {
        value: clock.elapsedTime,
      };
    }

    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(clock.elapsedTime * 1.6) / 250;
      gsap.to(meshRef.current.rotation, {
        y: mouseXpercentage * 0.74,
        x: (mouseYpercentage - 2) / 2.45,
        duration: 2,
      });
    }
  });

  useEffect(() => {
    if (shaderMaterialRef.current) {
      shaderMaterialRef.current.uniforms.uSky = {
        value: texture,
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
    <mesh ref={meshRef}>
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

import { useFrame } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef } from 'react';
import { Mesh, MeshPhysicalMaterial, Shader } from 'three';
import vertexPars from './resources/shaders/vertexPars.glsl';
import vertexMain from './resources/shaders/vertexMain.glsl';
import fragmentPars from './resources/shaders/fragmentPars.glsl';
import fragmentMain from './resources/shaders/fragmentMain.glsl';

const AbstractSphere = () => {
  const ref = useRef<Mesh>(null);
  const onBeforeCompile = (shader: Shader) => {
    (ref.current.material as MeshPhysicalMaterial).userData.shader = shader;
    shader.uniforms.uTime = { value: 0 };

    const vertexToReplacePars = /* glsl */ `#include <displacementmap_pars_vertex>`;
    shader.vertexShader = shader.vertexShader.replace(
      vertexToReplacePars,
      vertexToReplacePars + vertexPars,
    );

    const vertexToReplaceMain = /* glsl */ `#include <displacementmap_vertex>`;

    shader.vertexShader = shader.vertexShader.replace(
      vertexToReplaceMain,
      vertexToReplaceMain + vertexMain,
    );

    const fragmentToReplacePars = /* glsl */ `#include <bumpmap_pars_fragment>`;
    shader.fragmentShader = shader.fragmentShader.replace(
      fragmentToReplacePars,
      fragmentToReplacePars + fragmentPars,
    );

    const fragmentToReplaceMain = /* glsl */ `#include <normal_fragment_maps>`;
    shader.fragmentShader = shader.fragmentShader.replace(
      fragmentToReplaceMain,
      fragmentToReplaceMain + fragmentMain,
    );

    console.log(shader.fragmentShader);
    console.log(shader.vertexShader);
  };
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 200]} />
      <meshPhysicalMaterial
        onBeforeCompile={onBeforeCompile}
        roughness={0}
        metalness={0}
        ior={2.3}
        transmission={1.0}
      />
    </mesh>
  );
};

export default AbstractSphere;

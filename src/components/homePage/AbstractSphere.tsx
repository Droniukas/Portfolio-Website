import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Mesh, MeshPhysicalMaterial, Shader, ShaderMaterial } from 'three';
import sky from './resources/images/3-static-gradient-3.jpg';
import vertex from './resources/shaders/vertex.glsl';
import fragment from './resources/shaders/fragment.glsl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
      ref.current.position.y += Math.sin(clock.elapsedTime) / 370;
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

  // const onBeforeCompile = (shader: Shader) => {
  //   console.log(shader.fragmentShader);
  //   console.log(shader.vertexShader);
  //   (ref.current.material as MeshPhysicalMaterial).userData.shader = shader;
  //   shader.uniforms.uTime = { value: 0 };
  //   shader.uniforms.uSky = { value: new THREE.TextureLoader().load(sky) };

  //   const vertexToReplacePars = /* glsl */ `#include <displacementmap_pars_vertex>`;
  //   shader.vertexShader = shader.vertexShader.replace(
  //     vertexToReplacePars,
  //     vertexToReplacePars + vertexPars,
  //   );

  //   const vertexToReplaceMain = /* glsl */ `#include <displacementmap_vertex>`;

  //   shader.vertexShader = shader.vertexShader.replace(
  //     vertexToReplaceMain,
  //     vertexToReplaceMain + vertexMain,
  //   );

  //   const fragmentToReplacePars = /* glsl */ `#include <bumpmap_pars_fragment>`;
  //   shader.fragmentShader = shader.fragmentShader.replace(
  //     fragmentToReplacePars,
  //     fragmentToReplacePars + fragmentPars,
  //   );

  //   const fragmentToReplaceMain = /* glsl */ `#include <normal_fragment_maps>`;
  //   shader.fragmentShader = shader.fragmentShader.replace(
  //     fragmentToReplaceMain,
  //     fragmentToReplaceMain + fragmentMain,
  //   );

  //   const fragmentToReplaceColor = /*glsl*/ `#include <color_fragment>`;
  //   shader.fragmentShader = shader.fragmentShader.replace(
  //     fragmentToReplaceColor,
  //     fragmentToReplaceColor + fragmentColor,
  //   );
  // };

  return (
    // <Float>
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 50]} />
      <shaderMaterial
        ref={shaderMaterialRef}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
    // </Float>
  );
};

export default AbstractSphere;

// {
/* <mesh receiveShadow castShadow ref={ref}>
<icosahedronGeometry args={[2, 200]} />
<MeshTransmissionMaterial
  onBeforeCompile={onBeforeCompile}
  distortionScale={0}
  temporalDistortion={0}
  backside
  backsideThickness={5}
  thickness={2}
/>
</mesh> */
// }

// onBeforeCompile={onBeforeCompile}
// color="0xffffff"
// transmission={1}
// opacity={1}
// metalness={0}
// roughness={0}
// ior={1.52}
// thickness={0.1}
// side={THREE.DoubleSide}

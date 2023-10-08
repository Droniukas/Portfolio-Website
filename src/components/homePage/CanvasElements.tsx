import React, { useEffect, useMemo, useRef } from 'react';
import AbstractSphere from './AbstractSphere';
import { PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { getCameraDistanceForSquare } from './Utils';
type CanvasElementsProps = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
};
const CanvasElements = (props: CanvasElementsProps) => {
  const { canvasRef } = props;
  const OBJECT_SIZE = useMemo(() => 6, []);

  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { gl } = useThree();

  const getCanvasSize = (canvas: HTMLCanvasElement) => {
    return { width: canvas.offsetWidth, height: canvas.offsetHeight };
  };

  const handleWindowResize = () => {
    const currentCamera = cameraRef.current;
    const currentCanvasSize = getCanvasSize(canvasRef.current);
    currentCamera.position.z = getCameraDistanceForSquare(
      currentCamera,
      OBJECT_SIZE,
      currentCanvasSize.width,
      currentCanvasSize.height,
    );
    currentCamera.aspect = currentCanvasSize.width / currentCanvasSize.height;
    currentCamera.updateProjectionMatrix();
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(currentCanvasSize.width, currentCanvasSize.height);
  };

  useEffect(() => {
    const currentCanvasSize = getCanvasSize(canvasRef.current);
    const currentCamera = cameraRef.current;
    currentCamera.position.z = getCameraDistanceForSquare(
      currentCamera,
      OBJECT_SIZE,
      currentCanvasSize.width,
      currentCanvasSize.height,
    );

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.9} />
      <PerspectiveCamera ref={cameraRef} makeDefault fov={50} position={[0, 0.4, 6.5]} />
      <AbstractSphere />
    </>
  );
};

export default CanvasElements;

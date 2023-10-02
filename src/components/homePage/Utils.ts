const cameraDistanceForRectangle = (
  camera: THREE.PerspectiveCamera,
  objWidth: number,
  objHeight: number,
  canvasWidth: number,
  canvasHeight: number,
) => {
  const aspectRatio = canvasWidth / canvasHeight;
  let a: number, b: number;
  const scale = 2.8; // control how much smaller it gets
  if (objWidth > objHeight) {
    a =
      Math.max(objWidth, objHeight) /
      scale /
      aspectRatio /
      Math.tan((Math.PI * camera.fov) / 360);
    b = Math.min(objWidth, objHeight) / scale / Math.tan((Math.PI * camera.fov) / 360);
  } else {
    a =
      Math.min(objWidth, objHeight) /
      scale /
      aspectRatio /
      Math.tan((Math.PI * camera.fov) / 360);
    b = Math.max(objWidth, objHeight) / scale / Math.tan((Math.PI * camera.fov) / 360);
  }
  return Math.max(a, b);
};
// NOTE: this is some extra code to slightly simplify the above function
const getCameraDistanceForSquare = (
  camera: THREE.PerspectiveCamera,
  squareObjectSize: number,
  canvasWidth: number,
  canvasHeight: number,
) => {
  return clampMin(
    cameraDistanceForRectangle(
      camera,
      squareObjectSize,
      squareObjectSize,
      canvasWidth,
      canvasHeight,
    ),
    6.2,
  );
};

const clampMin = (num: number, min: number) => {
  if (num < min) return min;
  return num;
};

export { getCameraDistanceForSquare };

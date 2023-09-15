// 
vec3 animatedNormal = normal;
animatedNormal = animatedNormal * 2.;
  // animatedNormal.y -= uTime / 4.;
  // animatedNormal.x += uTime;
  // animatedNormal.z += uTime / 2.;
animatedNormal.y += uTime;
animatedNormal.z += uTime / 2.;

vDisplacement = cnoise(animatedNormal) / 10.;

transformed += normalize(objectNormal) * vDisplacement;
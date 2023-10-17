uniform sampler2D uSky;

varying float vDisplacement;

varying highp vec3 vPosition;
varying highp vec3 vNormal;

#define PI 3.14159265359

void main() {
  float phi = acos(vNormal.y);

  float angle = atan(vNormal.x, vNormal.z);

  vec2 fakeUv = vec2((angle + PI) / (2. * PI), phi / PI);

  vec4 texture = texture2D(uSky, fakeUv / 3. + vDisplacement);

  gl_FragColor = texture;

}

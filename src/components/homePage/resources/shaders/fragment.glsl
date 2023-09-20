uniform sampler2D uSky;

varying float vDisplacement;

varying highp vec3 vPosition;
varying highp vec3 vNormal;

#define PI 3.14159265359

void main() {
  float phi = acos(vNormal.y);

  float angle = atan(vNormal.x, vNormal.z);

  vec2 fakeUv = vec2((angle + PI) / (2. * PI), phi / PI);

  // float fresnel = dot(normalize(cameraPosition - vPosition), normalize(vNormal));
  // float fresnel = abs(dot(normalize(cameraPosition - vPosition), normalize(vNormal)));
  // fresnel = fresnel * fresnel;
  vec4 texture = texture2D(uSky, fakeUv / 3. + vDisplacement);

  // gl_FragColor = vec4(mix(vec3(fakeUv * 20., 1.), texture.rgb, fresnel * 5.), 1.0);
  // gl_FragColor = vec4(mix(vec3(1.), texture.rgb, fresnel * 1.2), 1.0);
  gl_FragColor = texture;

}

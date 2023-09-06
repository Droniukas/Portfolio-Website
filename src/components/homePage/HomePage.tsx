import React from 'react';
import './HomePage.css';
import starIcon from './star-icon.png';
import minus from './minus.png';

import { Canvas } from '@react-three/fiber';
import TemporaryBox from './TemporaryBox';
import { PerspectiveCamera } from '@react-three/drei';
import { ACESFilmicToneMapping } from 'three';

const Home = () => {
  return (
    <>
      <div id="home-div">
        <div id="background-rectangle">
          <Canvas gl={{ toneMapping: ACESFilmicToneMapping }}>
            {/*just in case you can define tone mapping and other general settings/properties of the scene here*/}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.9} />
            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} />
            <TemporaryBox />
          </Canvas>
        </div>
        <div style={{ color: '#0bbb87' }}>Hi, my name is</div>
        <div id="name">Domas Raila</div>
        <div id="current-position">Junior software-developer</div>
        <div id="home-page-all-bottom-items-div">
          <div id="home-page-above-bottom-line-items-div">
            <img src={starIcon} id="home-page-star-icon-img" />
            <img src={minus} id="home-page-star-icon-img" />
            constantly seeking new challenges
          </div>
          <div className="page-line" id="home-page-line" />
          <div id="home-page-below-bottom-line-items-div">
            <div id="home-page-additional-text-div">
              With a freelancer{"'"}s spirit and a programmer{"'"}s passion, I embarked on
              a journey, blending the realms of 3D visualizations and programming to
              create digital experiences that leave a mark.{' '}
            </div>
            <div id="home-page-expand-button-div">
              <button className="expand-button">Contact me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useLayoutEffect, useRef } from 'react';
import './HomePage.css';
import starIcon from './resources/images/star-icon.svg';
import minus from './resources/images/minus.svg';

import { Canvas } from '@react-three/fiber';
import CanvasElements from './CanvasElements';
import { gsap } from '../../config/gsap';
import * as THREE from 'three';
import { CustomEvent } from '@piwikpro/react-piwik-pro';

type HomeProps = {
  sphereTexture: THREE.Texture;
};

const Home = (props: HomeProps) => {
  const { sphereTexture } = props;
  const homeRef = useRef();

  useLayoutEffect(() => {
    const homePageToAnimate = homeRef.current;

    const context = gsap.context(() => {
      if (homePageToAnimate) {
        gsap.effects.mainRevealEffect(homePageToAnimate, {
          elementToAnimate: homePageToAnimate,
          toogleActions: 'restart reverse restart reverse',
        });
      }
    });

    return () => context.revert();
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null!);

  return (
    <>
      <div id="home" className="main-sections">
        <div id="home-div" ref={homeRef}>
          <div id="home-page-all-top-items-div">
            <div id="background-model">
              <Canvas ref={canvasRef}>
                <CanvasElements sphereTexture={sphereTexture} canvasRef={canvasRef} />
              </Canvas>
            </div>
            <div id="greetings-text-div">Hi, my name is</div>
            <div id="name">Domas Raila</div>
            <div id="current-position">Web/software-developer</div>
          </div>
          <div id="home-page-all-bottom-items-div">
            <div id="home-page-above-bottom-line-items-div">
              <img src={starIcon} className="home-page-icon-img" />
              <img src={minus} className="home-page-icon-img" />
              <div id="above-line-text">constantly seeking new challenges</div>
            </div>
            <div className="page-line" id="home-page-line" />
            <div id="home-page-below-bottom-line-items-div">
              <div id="home-page-additional-text-div">
                Currently enjoying full-stack web development, experimenting with
                interesting technologies and trying to become the best at what I do
              </div>
              <div
                onClick={() => {
                  CustomEvent.trackEvent(
                    'button',
                    'click',
                    'Contact me home page button click',
                  );
                }}
                id="home-page-expand-button-div"
              >
                <a href="#contact">
                  <button className="expand-button">
                    <span className="text-inhanced">
                      {'Contact me'.split('').map((char, index) => {
                        const style = {
                          '--index': index,
                          '--chars': 10,
                        } as React.CSSProperties;
                        return (
                          <div style={style} className="char" key={index}>
                            {`${char}`}
                          </div>
                        );
                      })}
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useLayoutEffect, useRef } from 'react';
import './HomePage.css';
import starIcon from './star-icon.png';
import minus from './minus.png';

import { Canvas } from '@react-three/fiber';
import CanvasElements from './CanvasElements';
import { gsap } from '../../config/gsap';

const Home = () => {
  const homeRef = useRef();
  const expandButtonTextRef = useRef();

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
      {/* <div style={{ position: 'absolute', top: 0 }} id="home"></div> */}
      <div id="home" className="main-sections">
        <div id="home-div" ref={homeRef}>
          <div id="home-page-all-top-items-div">
            <div id="background-model">
              <Canvas ref={canvasRef}>
                <CanvasElements canvasRef={canvasRef} />
              </Canvas>
            </div>
            <div id="greetings-text-div">Hi, my name is</div>
            <div id="name">Domas Raila</div>
            <div id="current-position">Junior software-developer</div>
          </div>
          <div id="home-page-all-bottom-items-div">
            <div id="home-page-above-bottom-line-items-div">
              <img src={starIcon} id="home-page-star-icon-img" />
              <img src={minus} id="home-page-star-icon-img" />
              <div id="above-line-text">constantly seeking new challenges</div>
            </div>
            <div className="page-line" id="home-page-line" />
            <div id="home-page-below-bottom-line-items-div">
              <div id="home-page-additional-text-div">
                With a freelancer{"'"}s spirit and a programmer{"'"}s passion, I embarked
                on a journey, blending the realms of 3D visualizations and programming to
                create digital experiences that leave a mark.{' '}
              </div>
              <div id="home-page-expand-button-div">
                <a href="#contact">
                  <button
                    className="expand-button"
                    // onPointerEnter={animateSplitTextOnEnter}
                    // onPointerLeave={revertSplitTextOnLeave}
                  >
                    <span
                      ref={expandButtonTextRef}
                      className="expand-button-text text-inhanced"
                    >
                      {'Contact me'.split('').map((char, index) => {
                        const style = {
                          '--index': index,
                          '--text-char-size': 10,
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

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './HomePage.css';
import starIcon from './star-icon.png';
import minus from './minus.png';

import { Canvas } from '@react-three/fiber';
import CanvasElements from './CanvasElements';
import { gsap } from '../../config/gsap';

const Home = () => {
  const homeRef = useRef();
  const expandButtonTextRef = useRef();

  // const [expandButtonSplitText, setExpandButtonSplitText] = useState<SplitType>();

  useLayoutEffect(() => {
    const homePageToAnimate = homeRef.current;

    const context = gsap.context(() => {
      if (homePageToAnimate) {
        gsap.effects.mainRevealEffect(homePageToAnimate, {
          elementToAnimate: homePageToAnimate,
          toogleActions: 'complete complete restart complete',
        });
      }
    });

    return () => context.revert();
  }, []);

  // useEffect(() => {
  //   const expandButtonTextToAnimate = expandButtonTextRef.current;
  //   if (expandButtonTextToAnimate) {
  //     setExpandButtonSplitText(new SplitType(expandButtonTextToAnimate));
  //     const words = document.querySelectorAll('.expand-button-text .char');
  //     console.log(words);
  //   }
  // }, []);

  // const animateSplitTextOnEnter = () => {
  //   const context = gsap.context(() => {
  //     gsap.to('.expand-button-text > .line > .word > .char', {
  //       translateY: -2,
  //       stagger: 0.05,
  //       duration: 0.1,
  //     });
  //   });

  //   return () => context.revert();
  // };

  // const revertSplitTextOnLeave = () => {
  //   const context = gsap.context(() => {
  //     gsap.to('.expand-button-text > .line > .word > .char', {
  //       translateY: 0,
  //       stagger: 0.05,
  //       duration: 0.1,
  //     });
  //   });

  //   return () => context.revert();
  // };

  const canvasRef = useRef<HTMLCanvasElement>(null!);

  return (
    <>
      <div id="home-div-parent" className="main-sections">
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
              constantly seeking new challenges
            </div>
            <div className="page-line" id="home-page-line" />
            <div id="home-page-below-bottom-line-items-div">
              <div id="home-page-additional-text-div">
                With a freelancer{"'"}s spirit and a programmer{"'"}s passion, I embarked
                on a journey, blending the realms of 3D visualizations and programming to
                create digital experiences that leave a mark.{' '}
              </div>
              <div id="home-page-expand-button-div">
                <button
                  className="expand-button"
                  // onPointerEnter={animateSplitTextOnEnter}
                  // onPointerLeave={revertSplitTextOnLeave}
                >
                  <div
                    ref={expandButtonTextRef}
                    className="expand-button-text text-inhanced"
                  >
                    Contact me
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

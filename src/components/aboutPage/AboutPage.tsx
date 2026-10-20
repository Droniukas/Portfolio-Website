import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import profilePhoto from './resources/images/profile-photo-mid-2.jpg';
import './AboutPage.css';
import { calculateMiddleDivLeftSideWidth } from './Utils';
import { gsap } from '../../config/gsap';

const AboutPage = () => {
  const aboutRef = useRef(null);
  const horizontalBorderBottomRef = useRef(null);
  const verticalBorderRightRef = useRef(null);

  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [middleDivLeftSideWidth, setMiddleDivLeftSideWidth] = useState(
    calculateMiddleDivLeftSideWidth(window.innerWidth),
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      setMiddleDivLeftSideWidth(calculateMiddleDivLeftSideWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useLayoutEffect(() => {
    const horizontalBorderToAnimate = horizontalBorderBottomRef.current;
    const verticalBorderToAnimate = verticalBorderRightRef.current;
    const aboutPageToAnimate = aboutRef.current;

    const customToggleActions = 'restart reverse restart reverse';
    const context = gsap.context(() => {
      if (horizontalBorderToAnimate) {
        gsap.from(horizontalBorderToAnimate, {
          duration: 0.55,
          ease: 'power.out',
          width: '100%',
          scrollTrigger: {
            trigger: horizontalBorderToAnimate,
            toggleActions: customToggleActions,
          },
        });
      }

      if (verticalBorderToAnimate) {
        gsap.from(verticalBorderToAnimate, {
          duration: 0.55,
          ease: 'power.out',
          height: '100%',
          scrollTrigger: {
            trigger: horizontalBorderToAnimate,
            toggleActions: customToggleActions,
          },
        });
      }

      if (aboutPageToAnimate) {
        gsap.effects.mainRevealEffect(aboutPageToAnimate, {
          elementToAnimate: aboutPageToAnimate,
        });
      }
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <SectionSeperator name="01. -- ABOUT" />
      <div id="about" className="main-sections">
        <div id="about-div" ref={aboutRef}>
          <div id="about-div-photo">
            <div className="about-top-div" />
            <div className="about-middle-div" id="about-image-div">
              {windowSize.width >= 650 && <img src={profilePhoto} id="about-image" />}
            </div>
            <div className="about-bottom-div" />
          </div>
          <div id="about-div-text">
            <div className="about-vertical-border" id="about-vertical-border-left" />
            <div className="about-top-div">
              <div id="about-image-top-div">
                {windowSize.width < 650 && <img src={profilePhoto} id="about-image" />}
              </div>
            </div>
            <div className="about-middle-div">
              <div
                id="about-middle-div-left-side"
                style={{ width: `${middleDivLeftSideWidth}%` }}
              >
                <div id="about-page-big-text-div">
                  About me -
                </div>
                <div id="about-page-smaller-text-div">
                  I work as a software developer, mostly with React, Angular, and .NET. I
                  taught myself programming, then did two developer academies, and now
                  work at Intus Windows. Before that I ran a small business making real
                  estate visualizations.
                </div>
              </div>
            </div>
          </div>
          <div id="about-div-end">
            <div
              className="about-vertical-border"
              id="about-vertical-border-right"
              ref={verticalBorderRightRef}
            />
            <div className="about-top-div" />
            <div className="about-middle-div" />
          </div>
          <div id="about-horizontal-border-top" className="horizontal-border" />
          <div
            id="about-horizontal-border-bottom"
            className="horizontal-border"
            ref={horizontalBorderBottomRef}
          />
          {windowSize.width < 650 && (
            <div id="about-horizontal-border-second-top" className="horizontal-border" />
          )}
        </div>
      </div>
    </>
  );
};

export default AboutPage;

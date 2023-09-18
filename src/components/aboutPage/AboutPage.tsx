import React, { useEffect, useRef, useState } from 'react';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import profilePhoto from './resources/images/profile-photo.jpg';
import './AboutPage.css';
import { calculateMiddleDivLeftSideWidth } from './Utils';
import gsap from 'gsap';
import useFadeIn from '../../hooks/useFadeIn';

const AboutPage = () => {
  const aboutRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [middleDivLeftSideWidth, setMiddleDivLeftSideWidth] = useState(
    calculateMiddleDivLeftSideWidth(window.innerWidth),
  );

  useEffect(() => {
    gsap.to('#about-image-overlay', {
      width: '0%',
      ease: 'power2.out',
    });

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

  useFadeIn(aboutRef);

  return (
    <>
      <SectionSeperator name="01. -- ABOUT" />
      <div id="about-div" ref={aboutRef}>
        <div id="about-div-photo">
          <div className="about-top-div" />
          <div className="about-middle-div" id="about-image-div">
            {windowSize.width >= 650 && (
              <>
                <img src={profilePhoto} id="about-image" />
                <div id="about-image-overlay" />
              </>
            )}
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
                My journey as an ambitious full-stack web developer
              </div>
              <div id="about-page-smaller-text-div">
                For the past few years I{"'"}ve been loving programming, from designing to
                creating the brains/algorythms of software. Curtesy of programming I have
                met a lot of great people and have succesfuly overcame many interesting
                and unique challenges, with that said I am eager to continue this journey!
                Currently I am looking for a new position as a full-stack web developer
                {';)'}
              </div>
            </div>
          </div>
        </div>
        <div id="about-div-end">
          <div className="about-vertical-border" id="about-vertical-border-right" />
          <div className="about-top-div" />
          <div className="about-middle-div" />
        </div>
        <div id="about-horizontal-border-bottom" className="about-horizontal-border" />
        <div id="about-horizontal-border-top" className="about-horizontal-border" />
        {windowSize.width < 650 && (
          <div
            id="about-horizontal-border-second-top"
            className="about-horizontal-border"
          />
        )}
      </div>
    </>
  );
};

export default AboutPage;

import React, { useEffect, useState } from 'react';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import profilePhoto from './resources/images/profile-photo.jpg';
import './AboutPage.css';

const AboutPage = () => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <>
      <SectionSeperator name="01. -- ABOUT" />
      <div id="about-div">
        <div id="about-div-photo">
          <div className="about-top-div" />
          <div className="about-middle-div" id="about-image-div">
            {windowSize.width > 1000 && <img src={profilePhoto} id="about-image" />}
          </div>
          <div className="about-bottom-div"></div>
        </div>
        <div id="about-div-text">
          <div className="about-vertical-border" id="about-vertical-border-left" />
          <div className="about-top-div">
            <div id="about-image-top-div">{windowSize.width < 1000 && <img src={profilePhoto} id="about-image" />}</div>
          </div>
          <div className="about-middle-div">
            <div id="about-middle-div-left-side">
              <div id="about-page-big-text-div">A journey as an ambitious full-stack web developer</div>
              <div id="about-page-smaller-text-div">
                For the past few years I have been loving programming, from designing to creating the brains/algorythms
                of software and I enjoy building interesting projects. Curtesy of programming I have met a lot of great
                people and succesfuly overcame many interesting and unique challenges, with that said I am eager to
                continue this journey! Currently I am looking for a new position as a full-stack web developer{';)'}
              </div>
            </div>
          </div>
        </div>
        <div id="about-div-end">
          <div className="about-vertical-border" id="about-vertical-border-right" />
          <div className="about-top-div" />
          <div className="about-middle-div" />
        </div>
        <div id="about-horizontal-border-bottom" />
        <div id="about-horizontal-border-top" />
      </div>
    </>
  );
};

export default AboutPage;

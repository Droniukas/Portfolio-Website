import React from 'react';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import profilePhoto from './resources/images/profile-photo.jpg';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <SectionSeperator name="01. -- about" />
      <div id="about-div">
        <div id="about-div-photo">
          <div className="about-top-div" />
          <div className="about-middle-div">
            <img src={profilePhoto} id="about-image" />
          </div>
        </div>
        <div id="about-div-text">
          <div className="about-vertical-border" id="about-vertical-border-left" />
          <div className="about-top-div"></div>
          <div className="about-middle-div">
            <div id="about-page-big-text-div">
              Something interesting about me that cathces some attention and fills up a descent amount of space
            </div>
            <div id="about-page-smaller-text-div">
              All the other stuff about me. All the other stuff about me. All the other stuff about me. All the other
              stuff about me. All the other stuff about me. All the other stuff about me. All the other stuff about me.
              All the other stuff about me. All the other stuff about me. All the other stuff about me. All the other
              stuff about me. All the other stuff about me.
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

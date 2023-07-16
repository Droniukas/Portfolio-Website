import React from 'react';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import profilePhoto from './profile-photo.jpg';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
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
          <div className="about-middle-div">this and that</div>
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

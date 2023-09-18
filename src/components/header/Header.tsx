import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import { gsap } from 'gsap';

const Header = (): JSX.Element => {
  // useEffect(() => {
  //   gsap.to('#fixed-buttons-div', {
  //     rotateZ: -90,
  //     top: '450px',
  //     left: '100px',
  //     height: '100px',
  //   });
  // }, []);

  return (
    <>
      <div id="fixed-buttons-div">
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <button className="fixed-button home">
            <div className="button-numbers"></div>HOME
          </button>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <button className="fixed-button about">
            <div className="button-numbers">01. </div>ABOUT
          </button>
        </Link>
        <button className="fixed-button experience">
          <div className="button-numbers">02. </div>EXPERIENCE
        </button>
        <button className="fixed-button contact">
          <div className="button-numbers">03. </div>CONTACT
        </button>
      </div>
    </>
  );
};

export default Header;

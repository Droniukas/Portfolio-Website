import React, { useEffect, useRef } from 'react';
import './Header.css';

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
        <a className="fixed-button home" href="#home">
          <div className="button-numbers"></div>HOME
        </a>
        <a className="fixed-button about" href="#about">
          <div className="button-numbers">01. </div>ABOUT
        </a>
        <a className="fixed-button experience" href="#experience">
          <div className="button-numbers">02. </div>EXPERIENCE
        </a>
        <a className="fixed-button contact" href="#contact">
          <div className="button-numbers">03. </div>CONTACT
        </a>
      </div>
    </>
  );
};

export default Header;

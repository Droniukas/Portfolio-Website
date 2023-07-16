import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = (): JSX.Element => {
  return (
    <>
      <div id="header-div">
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <button className="header-button home">
            <div className="button-numbers">00. </div>Home
          </button>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <button className="header-button about">
            <div className="button-numbers">01. </div>About
          </button>
        </Link>
        <button className="header-button experience">
          <div className="button-numbers">02. </div>Experience
        </button>
        <button className="header-button contact">
          <div className="button-numbers">03. </div>Contact
        </button>
      </div>
    </>
  );
};

export default Header;

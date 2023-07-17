import React from 'react';
import './HomePage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';

const Home = () => {
  return (
    <>
      <div id="home-div">
        <div id="backround-rectangle" />
        <div>Hi, my name is</div>
        <div id="name">Domas Raila</div>
        <div id="current-position">Junior software-developer</div>
        <div id="filler-div"></div>
        <div id="home-page-all-bottom-items-div">
          <div>bla bla bla</div>
          <div className="page-line" id="home-page-line" />
          <div id="home-page-below-bottom-line-items-div">
            <div id="home-page-additional-text-div">
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla{' '}
            </div>
            <div id="home-page-expand-button-div">
              <button className="expand-button">Contact me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import './Home.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';

const Home = () => {
  return (
    <>
      <div id="home-div">
        <div id="backround-rectangle" />
        <div id="name">
          Domas Raila
          <div id="current-position">Junior software-developer</div>
        </div>
      </div>

      <SectionSeperator name="about" />
    </>
  );
};

export default Home;

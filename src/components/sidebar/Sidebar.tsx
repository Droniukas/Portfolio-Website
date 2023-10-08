import React from 'react';
import './Sidebar.css';
import githubIcon from './github-icon.png';
import linkedinIcon from './linkedin-icon.png';

const Sidebar = () => {
  return (
    <div id="sidebar-div">
      <div className="sidebar-img-div">
        <img src={githubIcon} className="sidebar-img" />
      </div>
      <div className="sidebar-img-div">
        <img src={linkedinIcon} className="sidebar-img" />
      </div>
    </div>
  );
};

export default Sidebar;

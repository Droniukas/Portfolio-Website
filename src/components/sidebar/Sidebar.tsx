import React from 'react';
import './Sidebar.css';
import githubIcon from './github-icon.png';
import linkedinIcon from './linkedin-icon.png';

const Sidebar = () => {
  return (
    <div id="sidebar-div">
      <div>
        <img src={githubIcon} id="sidebar-github-img" className="sidebar-img" />
      </div>
      <div>
        <img src={linkedinIcon} id="sidebar-linkedin-img" className="sidebar-img" />
      </div>
    </div>
  );
};

export default Sidebar;

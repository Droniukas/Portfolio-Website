import React from 'react';
import './Sidebar.css';
import githubIconGradient from './resources/images/github-icon-gradient.png';
import githubIconBlack from './resources/images/github-icon-black.png';
import linkedinIconBlack from './resources/images/linkedin-icon-black.png';
import linkedinIconGradient from './resources/images/linkedin-icon-gradient.png';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div id="sidebar-div">
      <Logo />
      <div id="sidebar-icons">
        <a href="https://github.com/Droniukas" target="_blank" rel="noopener noreferrer">
          <div className="sidebar-img-container">
            <img src={githubIconGradient} className="sidebar-img" />
            <img src={githubIconBlack} className="sidebar-img initial-sidebar-img" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/domas-raila-54294b180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sidebar-img-container">
            <img src={linkedinIconGradient} className="sidebar-img" />
            <img src={linkedinIconBlack} className="sidebar-img initial-sidebar-img" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

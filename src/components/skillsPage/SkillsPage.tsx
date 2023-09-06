import React from 'react';

import './SkillsPage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import { skills } from './resources/data/skills';

const SkillsPage = () => {
  return (
    <div id="skills-div">
      <SectionSeperator hasIcon={false} name="02.1. SKILLS" />
      <div id="skills-layout">
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="skill-div">
              <img src={skill.image} className="skill-img" />
              {skill.secondImage && (
                <img src={skill.secondImage} className="skill-img second-skill-img" />
              )}
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;

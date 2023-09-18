import React, { useRef } from 'react';

import './SkillsPage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import { skills } from './resources/data/skills';
import useFadeIn from '../../hooks/useFadeIn';

const SkillsPage = () => {
  const skillsRef = useRef();
  useFadeIn(skillsRef);
  return (
    <>
      <div id="skills-div">
        <SectionSeperator hasIcon={false} name="02.1. SKILLS" />
        <div id="skills-layout" ref={skillsRef}>
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
    </>
  );
};

export default SkillsPage;

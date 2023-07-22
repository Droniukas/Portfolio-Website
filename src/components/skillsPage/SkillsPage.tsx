import React from 'react';
import { Skill } from '../../interfaces/Skill.interface';
import typescriptIcon from './resources/images/typescript-icon.png';
import './SkillsPage.css';

const SkillsPage = () => {
  const skills: Skill[] = [
    {
      name: 'Typescript',
      image: typescriptIcon,
    },
    {
      name: 'Typescript',
      image: typescriptIcon,
    },
    {
      name: 'Typescript',
      image: typescriptIcon,
    },
    {
      name: 'Typescript',
      image: typescriptIcon,
    },
  ];
  return (
    <div id="skills-div">
      {skills.map((skill) => {
        return (
          <div key={skill.name} className="skill-div">
            <img src={typescriptIcon} className="skill-img" />
            {skill.name}
          </div>
        );
      })}
    </div>
  );
};

export default SkillsPage;

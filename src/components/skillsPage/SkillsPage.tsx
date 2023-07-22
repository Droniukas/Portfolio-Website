import React from 'react';
import { Skill } from '../../interfaces/Skill.interface';
import typescriptIcon from './resources/images/typescript-icon.png';
import gitIcon from './resources/images/git-icon.png';
import htmlIcon from './resources/images/html-icon.png';
import ccsIcon from './resources/images/css-icon.png';
import jiraIcon from './resources/images/jira-icon.png';
import javascriptIcon from './resources/images/javascript-icon-one.png';
import sassIcon from './resources/images/sass-icon.png';
import reactIcon from './resources/images/react-icon.png';
import springBootIcon from './resources/images/spring-boot-icon.png';
import javaIcon from './resources/images/java-icon.png';
import sqlIcon from './resources/images/sql-icon.png';
import dockerIcon from './resources/images/docker-icon.png';
import postgreSqlIcon from './resources/images/postgresql-icon.png';
import auth0Icon from './resources/images/auth0-icon.png';
import figmaIcon from './resources/images/figma-icon.png';

import './SkillsPage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';

const SkillsPage = () => {
  const skills: Skill[] = [
    {
      name: 'Typescript',
      image: typescriptIcon,
    },
    {
      name: 'Javascript',
      image: javascriptIcon,
    },
    {
      name: 'HTML',
      image: htmlIcon,
    },
    {
      name: 'CSS',
      image: ccsIcon,
    },
    {
      name: 'SCSS',
      image: sassIcon,
    },
    {
      name: 'Jira/Agile',
      image: jiraIcon,
    },
    {
      name: 'Git',
      image: gitIcon,
    },
    {
      name: 'React',
      image: reactIcon,
    },
    {
      name: 'Spring boot',
      image: springBootIcon,
    },
    {
      name: 'Java',
      image: javaIcon,
    },
    {
      name: 'SQL/Relational databases',
      image: sqlIcon,
    },
    {
      name: 'Docker',
      image: dockerIcon,
    },
    {
      name: 'PostgreSql',
      image: postgreSqlIcon,
    },
    {
      name: 'Auth0',
      image: auth0Icon,
    },
    {
      name: 'Figma',
      image: figmaIcon,
    },
  ];
  return (
    <div id="skills-div">
      <SectionSeperator hasIcon={false} name="02.1. SKILLS" />
      <div id="skills-layout">
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="skill-div">
              <img src={skill.image} className="skill-img" />
              {skill.secondImage && <img src={skill.secondImage} className="skill-img second-skill-img" />}
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;

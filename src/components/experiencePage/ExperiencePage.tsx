import React from 'react';
import experience1 from './resources/images/experience-1.png';
import experience2 from './resources/images/experience-2.jpg';
import experience3 from './resources/images/experience-3.jpg';
import additionalInfo from './resources/images/additional-info.png';
import { Experience } from '../../interfaces/Experience.interface';
import './ExperiencePage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import SkillsPage from '../skillsPage/SkillsPage';

const ExperiencePage = () => {
  const experiences: Experience[] = [
    {
      image: experience1,
      name: 'Visualizations and design',
      date: '2021-22',
      place: 'Šiauliai, Lithuania',
      description: 'I made 3D visualizations for real-estate clients using compupter software.',
    },
    {
      image: experience2,
      name: 'Self-tought programmer',
      date: 'from 2022',
      place: 'Šiauliai, Lithuania',
      description: 'I started on my self-thought path by taking online courses and building small projects.',
    },
    {
      image: experience3,
      name: 'Full-stack developer academy @Devbridge',
      date: '2023 March - 2023 May',
      place: 'Kaunas, Lithuania',
      description:
        'Here I got hands-on experience working in an Agile team and built a sophisticated full-stack web application.',
    },
  ];
  return (
    <>
      <div id="experience-skills-div">
        <div id="experience-div">
          <SectionSeperator name="02. -- EXPERIENCE" />
          <div id="experience-grid">
            {experiences.map((experience) => {
              return (
                <div key={experience.name} className="experience-div">
                  <div className="experience-photo-div">
                    <img src={experience.image} className="experience-img" />
                  </div>
                  <div className="name-div">{experience.name}</div>
                  <div className="date-div">{experience.date}</div>
                  <div className="place-div">{experience.place}</div>
                  <div className="description-div">{experience.description}</div>
                  <div className="additional-info-div">
                    <img className="additional-info-img" src={additionalInfo} />
                  </div>
                  <div className="page-line" />
                </div>
              );
            })}
          </div>
        </div>
        <SkillsPage />
      </div>
    </>
  );
};

export default ExperiencePage;

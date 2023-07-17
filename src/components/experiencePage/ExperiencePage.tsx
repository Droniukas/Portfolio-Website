import React from 'react';
import experience1 from './resources/images/experience-1.avif';
import additionalInfo from './resources/images/additional-info.png';
import { Experience } from '../../interfaces/Experience.interface';
import './ExperiencePage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';

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
      image: experience1,
      name: 'Visualizations and design',
      date: '2021-22',
      place: 'Šiauliai, Lithuania',
      description: 'I made 3D visualizations for real-estate clients using compupter software.',
    },
    {
      image: experience1,
      name: 'Visualizations and design',
      date: '2021-22',
      place: 'Šiauliai, Lithuania',
      description: 'I made 3D visualizations for real-estate clients using compupter software.',
    },
  ];
  return (
    <>
      <SectionSeperator name="02. -- experience" />
      <div id="experience-div">
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
    </>
  );
};

export default ExperiencePage;

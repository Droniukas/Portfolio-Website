import React, { useRef } from 'react';

import additionalInfo from './resources/images/additional-info.png';
import './ExperiencePage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import SkillsPage from '../skillsPage/SkillsPage';
import ModalExperiencePage from './ModalExperiencePage/ModalExperiencePage';
import { experiences } from './resources/data/Experiences';
import useFadeIn from '../../hooks/useFadeIn';

const ExperiencePage = () => {
  const experienceRef = useRef(null);
  useFadeIn(experienceRef);
  return (
    <>
      <div id="experience-skills-div">
        <div id="experience-div">
          <SectionSeperator name="02. -- EXPERIENCE" />
          <div id="experience-grid" ref={experienceRef}>
            {experiences.map((experience) => {
              const [openModal, setOpenModal] = React.useState(false);

              return (
                <React.Fragment key={experience.name}>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    className="experience-div"
                  >
                    <div className="experience-photo-div">
                      <img src={experience.image} className="experience-img" />
                    </div>
                    <div
                      style={{
                        padding: '10px',
                      }}
                    >
                      <div className="name-div">{experience.name}</div>
                      <div className="date-div">{experience.date}</div>
                      <div className="place-div">{experience.place}</div>
                      <div className="description-div">{experience.description}</div>
                      <div className="page-line" />
                    </div>
                  </div>
                  <ModalExperiencePage
                    open={openModal}
                    setOpen={setOpenModal}
                    experience={experience}
                  />
                </React.Fragment>
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

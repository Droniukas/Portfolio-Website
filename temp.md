import React, { useLayoutEffect, useRef } from 'react';

import './ExperiencePage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import SkillsPage from '../skillsPage/SkillsPage';
import ModalExperiencePage from './ModalExperiencePage/ModalExperiencePage';
import { experiences } from './resources/data/Experiences';
import { gsap } from '../../config/gsap';
import { useSearchParams } from 'react-router-dom';
import BottomButton from './ModalExperiencePage/bottomButton/BottomButton';
import { Direction } from '../../Enums/Direction';
import { Modal } from '@mui/material';

const ExperiencePage = () => {
  const experienceRef = useRef(null);

  useLayoutEffect(() => {
    const experiencePageToAnimate = experienceRef.current;

    const context = gsap.context(() => {
      if (experiencePageToAnimate) {
        gsap.effects.mainRevealEffect(experiencePageToAnimate, {
          elementToAnimate: experiencePageToAnimate,
        });
      }
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div id="experience-skills-div" className="main-sections">
        <div id="experience">
          <SectionSeperator name="02. -- EXPERIENCE" />
          <div id="experience-grid" ref={experienceRef}>
            {experiences.map((experience, index) => {
              const [searchParams, setSearchParams] = useSearchParams({});
              const open = Number(searchParams.get('openModalId')) === experience.id;

              const closeModal = () => {
                setSearchParams(() => {
                  return {};
                });
              };

              const switchModal = (newModalId: number) => {
                setSearchParams((prev) => {
                  prev.set('openModalId', String(newModalId));
                  return prev;
                });
              };

              const nextExperienceButton = () => {
                if (index === experiences.length - 1) return;
                const nextExperience = experiences[index + 1];
                return (
                  <BottomButton
                    onClick={() => {
                      switchModal(nextExperience.id);
                    }}
                    direction={Direction.RIGHT}
                    bigText={'Next'}
                    smallText={nextExperience.name}
                  />
                );
              };

              const previousExperienceButton = () => {
                if (index === 0) return;
                const previousExperience = experiences[index - 1];
                return (
                  <BottomButton
                    onClick={() => {
                      switchModal(previousExperience.id);
                    }}
                    direction={Direction.LEFT}
                    bigText={'Previous'}
                    smallText={previousExperience.name}
                  />
                );
              };

              return (
                <React.Fragment key={experience.id}>
                  <div
                    onClick={() => {
                      setSearchParams((prev) => {
                        prev.set('openModalId', String(experience.id));
                        return prev;
                      });
                    }}
                    className="experience-div"
                  >
                    <div className="experience-photo-div">
                      <img src={experience.images[0]} className="experience-img" />
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
                  <Modal open={open} onClose={closeModal}>
                    <ModalExperiencePage
                      open={open}
                      handleClose={closeModal}
                      experience={experience}
                      bottomButtonRight={nextExperienceButton}
                      bottomButtonLeft={previousExperienceButton}
                    />
                  </Modal>
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

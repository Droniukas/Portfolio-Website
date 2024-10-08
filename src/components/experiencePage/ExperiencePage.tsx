import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

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
import ReactGA from 'react-ga4';
import { CustomEvent } from '@piwikpro/react-piwik-pro';

const ExperiencePage = () => {
  const experienceRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({});
  const openModalId = Number(searchParams.get('openModalId'));

  const closeModal = () => {
    setSearchParams((prev) => {
      prev.delete('openModalId');
      return prev;
    });
  };

  useEffect(() => {
    const closeModalIfKeyIfEscape = (event: KeyboardEvent) => {
      console.log(event)
      if (event.key === 'Escape') {
        closeModal();
      }
    }
    addEventListener('keydown', closeModalIfKeyIfEscape);
    return () => {
      removeEventListener('keydown', closeModalIfKeyIfEscape);
    }
  }, [closeModal])

  useEffect(() => {
    if (openModalId) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [openModalId]);

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
            {experiences.map((experience) => {
              return (
                <div
                  key={experience.id}
                  onClick={() => {
                    ReactGA.event({
                      category: 'General',
                      action: 'Open experience modal',
                      label: `${experience.name}`,
                    });
                    CustomEvent.trackEvent(
                      'button',
                      'click',
                      `experience modal click: ${experience.name}`,
                    );

                    setSearchParams((prev) => {
                      prev.set('openModalId', String(experience.id));
                      return prev;
                    });
                  }}
                  className="experience-div"
                >
                  <div className="experience-photo-div">
                    <img
                      src={experience.images[0].smallImage || experience.images[0].image}
                      className="experience-img"
                    />
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
              );
            })}
          </div>
          <Modal open={modalOpen} onClose={closeModal}>
            <>
              {experiences.map((experience, index) => {
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
                        ReactGA.event({
                          category: 'General',
                          action: 'Switch to experience',
                          label: `${nextExperience.name}`,
                        });
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
                        ReactGA.event({
                          category: 'General',
                          action: 'Switch to experience',
                          label: `${previousExperience.name}`,
                        });
                        switchModal(previousExperience.id);
                      }}
                      direction={Direction.LEFT}
                      bigText={'Previous'}
                      smallText={previousExperience.name}
                    />
                  );
                };

                return (
                  <ModalExperiencePage
                    key={experience.id}
                    handleClose={closeModal}
                    experience={experience}
                    bottomButtonRight={nextExperienceButton}
                    bottomButtonLeft={previousExperienceButton}
                    visible={openModalId === experience.id}
                  />
                );
              })}
            </>
          </Modal>
        </div>
        <SkillsPage />
      </div>
    </>
  );
};

export default ExperiencePage;

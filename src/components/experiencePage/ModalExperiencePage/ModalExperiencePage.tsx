import React from 'react';
import { useEffect, useState } from 'react';
import { Experience } from '../../../interfaces/Experience.interface';
import './ModalExperiencePage.css';
import CloseButton from './CloseButton/CloseButton';
import ImageSlider from './ImageSlider/ImageSlider';

type ModalExperiencePageProps = {
  handleClose: () => void;
  experience: Experience;
  bottomButtonLeft?: () => JSX.Element;
  bottomButtonRight?: () => JSX.Element;
  visible: boolean;
};

const ModalExperiencePage = (props: ModalExperiencePageProps) => {
  const { handleClose, experience, bottomButtonLeft, bottomButtonRight, visible } = props;

  const [controlsAreHidden, setControlsAreHidden] = useState(false);

  useEffect(() => {
    setControlsAreHidden(false);
    setTimeout(() => {
      setControlsAreHidden(true);
    }, 2000);
  }, [visible]);

  return (
    <div
      className={`experience-modal-div`}
      style={{
        visibility: visible ? 'visible' : 'hidden',
        opacity: visible ? 1 : 0,
      }}
    >
      <CloseButton handleClose={handleClose} />
      <div className="experience-modal-top-part-div">
        <div className="experience-modal-top-part-left-div modal-left-side">
          <div className="experience-modal-category-header-div">EXPERIENCE</div>
          <div className="experience-modal-name-div">{experience.name}</div>
          <div className="experience-modal-date-and-place-div">
            <div className="experience-modal-date-div">{experience.date}</div>
            <div className="experience-modal-place-div">{experience.place}</div>
          </div>
        </div>

        <ImageSlider
          images={experience.images}
          className={'modal-right-side'}
          controlsAreHidden={controlsAreHidden}
          hideControls={() => {
            setControlsAreHidden(true);
          }}
        />
      </div>
      <div className="experience-modal-bottom-part-div">
        <div className="experience-modal-bottom-part-left-div modal-left-side">
          In-depth overview -
        </div>
        <div className="experience-modal-bottom-part-right-div modal-right-side">
          {experience.modal.longerDescription}
        </div>
      </div>
      <div className="experience-modal-bottom-buttons-div">
        <>
          {bottomButtonLeft && bottomButtonLeft()}
          {bottomButtonRight && bottomButtonRight()}
        </>
      </div>
    </div>
  );
};

export default ModalExperiencePage;

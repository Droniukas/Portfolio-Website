import React from 'react';
import { Modal } from '@mui/material';
import { Experience } from '../../../interfaces/Experience.interface';
import './ModalExperiencePage.css';
import CloseButton from './CloseButton';
import BottomButton from './BottomButton';
import { Direction } from '../../../Enums/Direction';

type ModalExperiencePageProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  experience: Experience;
};

const ModalExperiencePage = (props: ModalExperiencePageProps) => {
  const { open, setOpen, experience } = props;
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className="experience-modal-div">
        <CloseButton setOpen={setOpen} />
        <div className="experience-modal-top-part-div">
          <div className="experience-modal-top-part-left-div modal-left-side">
            <div className="experience-modal-category-header-div">EXPERIENCE</div>
            <div className="experience-modal-name-div">{experience.name}</div>
            <div className="experience-modal-date-and-place-div">
              <div className="experience-modal-date-div">{experience.date}</div>
              <div className="experience-modal-place-div">{experience.place}</div>
            </div>
          </div>
          <div className="experience-modal-top-part-right-div modal-right-side">
            <img src={experience.image} className="experience-modal-image" />
          </div>
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
          {experience.modal.leftBottomButton && (
            <BottomButton
              experience={experience}
              direction={Direction.LEFT}
              onClick={() => {
                console.log('hi');
              }}
            />
          )}
          {experience.modal.rightBottomButton && (
            <BottomButton
              experience={experience}
              direction={Direction.RIGHT}
              onClick={() => {
                console.log('hi');
              }}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalExperiencePage;

import React from 'react';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Experience } from '../../interfaces/Experience.interface';

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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="experience-modal-div">
        <IconButton
          size="small"
          sx={{ position: 'absolute', right: '10px', top: '10px' }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <div className="modal-top-div">
          <div className="modal-experience-name-div">{experience.name}</div>
        </div>
        <div className="modal-photo-place-date-div">
          <div className="experience-modal-image-container">
            <img src={experience.image} className="experience-img" />
          </div>
          <div className="modal-date-and-place-div">
            <div className="modal-date-div">{experience.date}</div>
            <div className="modal-place-div">{experience.place}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalExperiencePage;

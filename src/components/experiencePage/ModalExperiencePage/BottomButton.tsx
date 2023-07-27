import { Button } from '@mui/material';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Experience } from '../../../interfaces/Experience.interface';
import { Direction } from '../../../Enums/Direction';
import './BottomButton.css';

type BottomButtonProps = {
  experience: Experience;
  onClick: () => void;
  direction: Direction;
};
const BottomButton = (props: BottomButtonProps) => {
  const { experience, onClick, direction } = props;

  const directionIsLeft = direction === Direction.LEFT;
  const buttonProperties = directionIsLeft ? experience.modal.leftBottomButton : experience.modal.rightBottomButton;

  if (directionIsLeft) {
    return (
      <Button onClick={onClick} sx={{ display: 'block', color: 'black', padding: 0 }}>
        <div className="experience-modal-bottom-button-left-top">
          <ArrowBackIosNewIcon className="experience-modal-bottom-button-left-icon" />
          <div className="experience-modal-bottom-button-top-text">{buttonProperties?.name}</div>
        </div>
        <div style={{ float: 'left', marginLeft: '30px' }} className="experience-modal-bottom-button-bottom-text">
          {buttonProperties?.smallerText}
        </div>
      </Button>
    );
  } else {
    return (
      <Button onClick={onClick} sx={{ display: 'block', color: 'black', padding: 0 }}>
        <div className="experience-modal-bottom-button-left-top">
          <div className="experience-modal-bottom-button-top-text">{buttonProperties?.name}</div>
          <ArrowForwardIosIcon className="experience-modal-bottom-button-left-icon" />
        </div>
        <div style={{ float: 'right', marginRight: '30px' }} className="experience-modal-bottom-button-bottom-text">
          {buttonProperties?.smallerText}
        </div>
      </Button>
    );
  }
};

export default BottomButton;

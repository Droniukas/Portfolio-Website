import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import React from 'react';
import { Direction } from '../../../../Enums/Direction';
import './BottomButton.css';

export type BottomButtonProps = {
  onClick: () => void;
  direction: Direction;
  bigText: string;
  smallText: string;
};
const BottomButton = (props: BottomButtonProps) => {
  const { onClick, direction, bigText, smallText } = props;

  const left = direction === Direction.LEFT;

  return (
    <Button
      onClick={onClick}
      sx={{
        display: 'flex',
        color: 'black',
        padding: '5px',
        ...(!left && { marginLeft: 'auto' }),
      }}
    >
      {left && (
        <ArrowBackIosNewIcon className="modal-button-icon-left" fontSize="small" />
      )}
      <div className={`experience-modal-button-text ${!left && 'align-right'}`}>
        <div className="">{bigText}</div>
        <div className="experience-modal-button-small-text">{smallText}</div>
      </div>
      {!left && (
        <ArrowForwardIosIcon className="modal-button-icon-right" fontSize="small" />
      )}
    </Button>
  );
};

export default BottomButton;

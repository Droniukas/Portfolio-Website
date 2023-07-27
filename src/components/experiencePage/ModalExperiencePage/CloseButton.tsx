import { IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

type CloseButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CloseButton = (props: CloseButtonProps) => {
  const { setOpen } = props;
  return (
    <IconButton
      size="small"
      sx={{ position: 'absolute', right: '2px', top: '2px' }}
      onClick={() => {
        setOpen(false);
      }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

export default CloseButton;

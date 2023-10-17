import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type CloseButtonProps = {
  handleClose: () => void;
};

const CloseButton = (props: CloseButtonProps) => {
  const { handleClose } = props;
  return (
    <IconButton
      size="small"
      sx={{ position: 'absolute', right: '2px', top: '2px' }}
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

export default CloseButton;

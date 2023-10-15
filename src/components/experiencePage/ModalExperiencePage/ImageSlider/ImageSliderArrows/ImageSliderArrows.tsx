import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, SxProps, Theme } from '@mui/material';
import './ImageSliderArrows.css';

type ImageSliderArrowsProps = {
  setPreviousImage: () => void;
  setNextImage: () => void;
  className?: string;
  arrowsSx?: SxProps<Theme>;
  arrowsClassName?: string;
};

const ImageSliderArrows = (props: ImageSliderArrowsProps) => {
  const { className, arrowsSx, arrowsClassName, setNextImage, setPreviousImage } = props;
  return (
    <>
      <div className={`image-slider-arrow image-slider-arrow-left ${className}`}>
        <IconButton className={arrowsClassName} sx={arrowsSx} onClick={setPreviousImage}>
          <ArrowBackIosNewIcon fontSize="medium" />
        </IconButton>
      </div>

      <div className={`image-slider-arrow image-slider-arrow-right ${className}`}>
        <IconButton className={arrowsClassName} sx={arrowsSx} onClick={setNextImage}>
          <ArrowForwardIosIcon fontSize="medium" />
        </IconButton>
      </div>
    </>
  );
};

export default ImageSliderArrows;

import { IconButton, SxProps, Theme } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import './ImageSliderPickers.css';
import ReactGA from 'react-ga4';

type ImageSliderPickersProps = {
  images: string[];
  onPickerClick: (index: number) => void;
  currentIndex: number;
  className?: string;
  pickersSx?: SxProps<Theme>;
  pickersClassName?: string;
};

const ImageSliderPickers = (props: ImageSliderPickersProps) => {
  const { images, pickersSx, onPickerClick, currentIndex, className, pickersClassName } =
    props;
  return (
    <div className={`image-slider-pickers-container ${className}`}>
      {images.map((image, index) => {
        const currentImage = index === currentIndex;

        return (
          <IconButton
            disabled={currentImage}
            key={image}
            onClick={() => {
              ReactGA.event({
                category: 'General',
                action: 'Image picker click',
              });
              onPickerClick(index);
            }}
            className={pickersClassName}
            sx={pickersSx}
          >
            <CircleIcon fontSize="small" sx={{ width: '10px', height: '10px' }} />
          </IconButton>
        );
      })}
    </div>
  );
};

export default ImageSliderPickers;

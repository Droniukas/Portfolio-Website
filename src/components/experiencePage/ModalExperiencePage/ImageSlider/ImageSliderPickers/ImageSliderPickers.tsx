import { IconButton, SxProps, Theme } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import './ImageSliderPickers.css';
import ReactGA from 'react-ga4';
import { ExperienceImage } from '../../../../../interfaces/ExperienceImage.interface';

type ImageSliderPickersProps = {
  images: ExperienceImage[];
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
            key={image.image}
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

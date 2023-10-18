import React from 'react';

import { useState } from 'react';
import './ImageSlider.css';
import { SxProps, Theme } from '@mui/material';
import ImageSliderModal from './ImageSliderModal/ImageSliderModal';
import ImageSliderPickers from './ImageSliderPickers/ImageSliderPickers';
import ImageSliderArrows from './ImageSliderArrows/ImageSliderArrows';
import ReactGA from 'react-ga4';
import { CustomEvent } from '@piwikpro/react-piwik-pro';

type ImageSliderProps = {
  images: string[];
  hideControls: () => void;
  controlsAreHidden: boolean;
  className?: string;
};

const ImageSlider = (props: ImageSliderProps) => {
  const { images, className, controlsAreHidden, hideControls } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const setPreviousImage = () => {
    ReactGA.event({
      category: 'General',
      action: 'Image arrow click',
      label: 'Small image next',
    });
    CustomEvent.trackEvent('image', 'click', `Changed image in modal`);
    hideControls();
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const setNextImage = () => {
    ReactGA.event({
      category: 'General',
      action: 'Image arrow click',
      label: 'Small image next',
    });
    CustomEvent.trackEvent('image', 'click', `Changed image in modal`);
    hideControls();
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const iconButtonSx: SxProps<Theme> = {
    padding: '5px',
    transition: 'backdrop-filter 0.3s, background-color 0.3s',
    color: 'rgba(255,255,255, 0.8)',
  };

  return (
    <>
      <div className={`image-slider-container ${className}`}>
        {images.map((image, index) => {
          const currentImage = index === currentIndex;
          return (
            <img
              onClick={() => {
                ReactGA.event({
                  category: 'General',
                  action: 'Click image in modal',
                  label: `${image}`,
                });
                CustomEvent.trackEvent('image', 'click', `Clicked on image - ${image}`);
                setImageModalOpen(true);
              }}
              key={image}
              src={image}
              className={`image-slider-image ${currentImage && 'visible'}`}
            />
          );
        })}

        {images.length > 1 && (
          <>
            <ImageSliderArrows
              setPreviousImage={setPreviousImage}
              setNextImage={setNextImage}
              className={controlsAreHidden && 'hidden'}
              arrowsClassName="icon-button"
              arrowsSx={iconButtonSx}
            />

            <ImageSliderPickers
              images={images}
              onPickerClick={(index: number) => {
                setCurrentIndex(index);
              }}
              currentIndex={currentIndex}
              className={controlsAreHidden && 'hidden'}
              pickersSx={iconButtonSx}
              pickersClassName="icon-button"
            />
          </>
        )}
      </div>
      <ImageSliderModal
        images={images}
        initialImageIndex={currentIndex}
        open={imageModalOpen}
        handleClose={() => {
          setImageModalOpen(false);
        }}
        iconButtonSx={iconButtonSx}
        iconButtonClassName="icon-button"
      />
    </>
  );
};

export default ImageSlider;

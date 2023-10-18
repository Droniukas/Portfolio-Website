import { Modal, SxProps, Theme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseButton from '../../CloseButton/CloseButton';
import ImageSliderArrows from '../ImageSliderArrows/ImageSliderArrows';
import ImageSliderPickers from '../ImageSliderPickers/ImageSliderPickers';
import './ImageSliderModal.css';
import ReactGA from 'react-ga4';
import { CustomEvent } from '@piwikpro/react-piwik-pro';

type ImageModalProps = {
  images: string[];
  open: boolean;
  handleClose: () => void;
  initialImageIndex: number;
  iconButtonSx?: SxProps<Theme>;
  iconButtonClassName?: string;
};

const ImageSliderModal = (props: ImageModalProps) => {
  const {
    images,
    open,
    handleClose,
    initialImageIndex,
    iconButtonSx,
    iconButtonClassName,
  } = props;

  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);

  useEffect(() => {
    setCurrentIndex(initialImageIndex);
  }, [open]);

  const setPreviousImage = () => {
    ReactGA.event({
      category: 'General',
      action: 'Image arrow click',
      label: 'Big image previous',
    });
    CustomEvent.trackEvent('image', 'click', `Changed big image`);
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
      label: 'Big image next',
    });
    CustomEvent.trackEvent('image', 'click', `Changed big image`);
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="image-slider-modal-container">
        <img src={images[currentIndex]} className="image-slider-modal-image" />

        <CloseButton handleClose={handleClose} />

        {images.length > 1 && (
          <>
            <ImageSliderPickers
              images={images}
              onPickerClick={(index: number) => {
                setCurrentIndex(index);
              }}
              currentIndex={currentIndex}
              pickersClassName={iconButtonClassName}
              pickersSx={iconButtonSx}
            />

            <ImageSliderArrows
              setPreviousImage={setPreviousImage}
              setNextImage={setNextImage}
              arrowsSx={iconButtonSx}
              arrowsClassName={iconButtonClassName}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default ImageSliderModal;

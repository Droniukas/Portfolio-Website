import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const useFadeIn = (elementToAnimateRef: React.MutableRefObject<HTMLElement | null>) => {
  const elementToAnimate = elementToAnimateRef.current;
  useEffect(() => {
    if (elementToAnimate) {
      gsap.fromTo(
        elementToAnimate,
        { opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: elementToAnimate,
            once: false,
          },
        },
      );
    }
  }, [elementToAnimate]);
};

export default useFadeIn;

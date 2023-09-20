import React, { useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type useFadeInProps = {
  toogleActions?: string;
};

const useFadeIn = (
  elementToAnimateRef: React.MutableRefObject<HTMLElement | null>,
  props?: useFadeInProps,
) => {
  const { toogleActions } = props ?? {};

  useLayoutEffect(() => {
    const elementToAnimate = elementToAnimateRef.current;

    if (elementToAnimate) {
      const context = gsap.context(() => {
        gsap.from(elementToAnimate, {
          duration: 0.55,
          translateY: 70,
          opacity: 0,
          ease: 'power.out',
          scrollTrigger: {
            trigger: elementToAnimate,
            toggleActions: toogleActions
              ? toogleActions
              : 'restart reverse restart reverse',
            start: 'top 90%',
            end: 'bottom 10%',
          },
        });
      });

      return () => context.revert();
    }
  }, []);
};

export default useFadeIn;

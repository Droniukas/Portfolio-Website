import React from 'react';

import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from '../../config/gsap';
import logo from './resources/images/logo-high-res.png';
import logoGradient from './resources/images/logo-gradient-high-res.png';
import './Logo.css';

const Logo = () => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const morphData = {
    morphRatio: 1,
  };

  const longLogo = <div>domasraila.dev</div>;
  const shortLogo = (
    <>
      <img className="short-logo-gradient" src={logoGradient} />
      <img className="short-logo" src={logo} />
    </>
  );

  const textNodes = [longLogo, shortLogo];

  const [text1Content, setText1Content] = useState<ReactNode>(null);
  const [text2Content, setText2Content] = useState<ReactNode>(null);

  const logoTextsContainerRef = useRef<HTMLDivElement>(null);

  const setMorph = (morphRatio: number, textIndex: number) => {
    text2Ref.current.style.filter = `blur(${Math.min(8 / morphRatio - 8, 100)}px)`;
    text2Ref.current.style.opacity = `${Math.pow(morphRatio, 0.4) * 100}%`;

    morphRatio = 1 - morphRatio;
    text1Ref.current.style.filter = `blur(${Math.min(8 / morphRatio - 8, 100)}px)`;
    text1Ref.current.style.opacity = `${Math.pow(morphRatio, 0.4) * 100}%`;

    setText1Content(textNodes[textIndex % textNodes.length]);
    setText2Content(textNodes[(textIndex + 1) % textNodes.length]);
  };

  useEffect(() => {
    setText1Content(textNodes[0]);
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(morphData, {
        morphRatio: 0,
        duration: 0.7,
        overwrite: true,
        onStart: () => {
          logoTextsContainerRef.current.style.filter = 'url(#threshold) blur(0.4px)';
          text1Ref.current.style.display = 'inline-block';
          text1Ref.current.style.fontWeight = '600';
        },
        onUpdate: () => {
          setMorph(morphData.morphRatio, 1);
        },
        onComplete: () => {
          text2Ref.current.style.display = 'none';
          logoTextsContainerRef.current.style.filter = 'none';
        },
        onReverseComplete: () => {
          logoTextsContainerRef.current.style.filter = 'none';
        },
        scrollTrigger: {
          start: '100px',
          end: '100px',
          onEnterBack: () => {
            text2Ref.current.style.display = 'inline-block';
            logoTextsContainerRef.current.style.filter = 'url(#threshold) blur(0.4px)';
          },
          toggleActions: 'play none reverse none',
        },
      });

      return () => context.revert();
    });
  }, []);
  return (
    <>
      <a href="" id="logo-link">
        <div id="logo-texts-container" ref={logoTextsContainerRef}>
          <span id="text1" ref={text1Ref}>
            {text1Content}
          </span>
          <span id="text2" ref={text2Ref}>
            {text2Content}
          </span>
        </div>
      </a>

      <svg id="filters" style={{ display: 'none' }}>
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -45"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Logo;

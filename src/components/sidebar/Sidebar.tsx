import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './Sidebar.css';
import githubIcon from './resources/images/github-icon.png';
import githubIconGradient from './resources/images/github-icon-gradient.png';
import githubIconBlack from './resources/images/github-icon-black.png';
import linkedinIcon from './resources/images/linkedin-icon.png';
import linkedinIconGradient from './resources/images/linkedin-icon-gradient.png';
import linkedinIconBlack from './resources/images/linkedin-icon-black.png';
import { gsap } from '../../config/gsap';

const Sidebar = () => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const morphData = {
    morphRatio: 1,
  };

  const logoTextsContainerRef = useRef<HTMLDivElement>(null);

  const texts = ['domasraila.dev', 'DR'];
  const setMorph = (morphRatio: number, textIndex: number) => {
    text2Ref.current.style.filter = `blur(${Math.min(8 / morphRatio - 8, 100)}px)`;
    text2Ref.current.style.opacity = `${Math.pow(morphRatio, 0.4) * 100}%`;

    morphRatio = 1 - morphRatio;
    text1Ref.current.style.filter = `blur(${Math.min(8 / morphRatio - 8, 100)}px)`;
    text1Ref.current.style.opacity = `${Math.pow(morphRatio, 0.4) * 100}%`;

    text1Ref.current.innerHTML = texts[textIndex % texts.length];
    text2Ref.current.innerHTML = texts[(textIndex + 1) % texts.length];
  };

  useEffect(() => {
    text1Ref.current.innerHTML = texts[0];
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
          // text1Ref.current.style.color = `rgba(78, 78, 78, ${1 - morphData.morphRatio})`;
          // text2Ref.current.style.color = `rgba(78, 78, 78, ${1 - morphData.morphRatio})`;
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
    <div id="sidebar-div">
      <a href="" id="logo-link">
        <div id="logo-texts-container" ref={logoTextsContainerRef}>
          <span id="text1" ref={text1Ref}></span>
          <span id="text2" ref={text2Ref}></span>
        </div>
      </a>

      <svg id="filters">
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
      <div id="sidebar-icons">
        <div className="sidebar-img-container">
          <img src={githubIconGradient} className="sidebar-img" />
          <img src={githubIcon} className="sidebar-img initial-sidebar-img" />
        </div>
        <div className="sidebar-img-container">
          <img src={linkedinIconGradient} className="sidebar-img" />
          <img src={linkedinIcon} className="sidebar-img initial-sidebar-img" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

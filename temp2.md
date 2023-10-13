import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './Sidebar.css';
import githubIcon from './github-icon.png';
import linkedinIcon from './linkedin-icon.png';
import { gsap } from '../../config/gsap';

const Sidebar = () => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const morphData = {
    morphRatio: 1,
  };

  const texts = ['domasraila.dev', 'DR'];
  const setMorph = (morphRatio: number, textIndex: number) => {
    text2Ref.current.style.filter = `blur(${Math.min(8 / morphRatio - 8, 100)}px)`;
    text2Ref.current.style.opacity = `${Math.pow(morphRatio, 0.4) * 100}%`;

    morphRatio = 1 - morphRatio;
    text1Ref.current.style.filter = `blur(${Math.min(8 / morphRatio - 8, 100)}px)`;
    text1Ref.current.style.opacity = `${Math.pow(morphRatio, 0.4) * 100}%`;

    text1Ref.current.textContent = texts[textIndex % texts.length];
    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
  };

  // const setLongLogo = () => {
  //   gsap.to(morphData, {
  //     morphRatio: 1,
  //     duration: 0.5,
  //     overwrite: true,
  //     onStart: () => {
  //       text2Ref.current.style.display = 'inline-block';
  //     },
  //     onUpdate: () => {
  //       setMorph(morphData.morphRatio, 1);
  //     },
  //   });
  // };

  // const setShortLogo = () => {
  //   gsap.to(morphData, {
  //     morphRatio: 0,
  //     duration: 0.5,
  //     overwrite: true,
  //     onUpdate: () => {
  //       setMorph(morphData.morphRatio, 1);
  //     },
  //     onComplete: () => {
  //       text2Ref.current.style.display = 'none';
  //     },
  //   });
  // };

  useEffect(() => {
    text1Ref.current.textContent = texts[0];
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(morphData, {
        morphRatio: 0,
        duration: 0.5,
        overwrite: true,
        onUpdate: () => {
          setMorph(morphData.morphRatio, 1);
        },
        onComplete: () => {
          text2Ref.current.style.display = 'none';
        },
        scrollTrigger: {
          start: '100px',
          end: '100px',
          markers: true,
          onEnterBack: () => {
            text2Ref.current.style.display = 'inline-block';
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
        <div id="logo-texts-container">
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
									0 0 0 255 -100"
            />
          </filter>
        </defs>
      </svg>
      <div id="sidebar-icons">
        <div className="sidebar-img-div">
          <img src={githubIcon} className="sidebar-img" />
        </div>
        <div className="sidebar-img-div">
          <img src={linkedinIcon} className="sidebar-img" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

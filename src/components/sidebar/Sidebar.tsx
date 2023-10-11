import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './Sidebar.css';
import githubIcon from './github-icon.png';
import linkedinIcon from './linkedin-icon.png';
import { gsap } from '../../config/gsap';

const Sidebar = () => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const morphData = {
    morphRatio: 0,
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

  const afterAnimation = (longLogo: boolean) => {
    text2Ref.current.style.filter = '';
    text2Ref.current.style.display = longLogo ? 'inline-block' : 'none';

    text1Ref.current.style.filter = '';
  };

  const setLongLogo = () => {
    gsap.to(morphData, {
      morphRatio: 1,
      duration: 0.5,
      onStart: () => {
        text2Ref.current.style.display = 'inline-block';
      },
      onUpdate: () => {
        setMorph(morphData.morphRatio, 1);
      },
      onComplete: () => {
        afterAnimation(true);
      },
    });
  };

  const setShortLogo = () => {
    gsap.to(morphData, {
      morphRatio: 0,
      duration: 0.5,
      onUpdate: () => {
        setMorph(morphData.morphRatio, 1);
      },
      onComplete: () => {
        afterAnimation(false);
      },
    });
  };

  useEffect(() => {
    text1Ref.current.textContent = texts[1];
    setTimeout(() => {
      setLongLogo();
      setTimeout(() => {
        setShortLogo();
        setTimeout(() => {
          setLongLogo();
        }, 150);
      }, 1250);
    }, 1150);
    //  we somehow need the previous animation to be killed our to use the same time line else it's glitchy and the fix isn't clean
  }, []);

  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     gsap.to(morphData, {
  //       morphRatio: 1,
  //       duration: 0.5,
  //       onStart: () => {
  //         text2Ref.current.style.display = 'inline-block';
  //       },
  //       onUpdate: () => {
  //         setMorph(morphData.morphRatio, 1);
  //       },
  //       onComplete: () => {
  //         afterAnimation(true);
  //       },
  //     });

  //     gsap.to(morphData, {
  //       morphRatio: 0,
  //       duration: 0.5,
  //       onUpdate: () => {
  //         setMorph(morphData.morphRatio, 1);
  //       },
  //       onComplete: () => {
  //         afterAnimation(false);
  //       },
  //     });

  //     return () => context.revert();
  //   });
  // }, []);

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
            {/* <!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. --> */}
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

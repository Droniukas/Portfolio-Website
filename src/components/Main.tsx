import React, { useEffect, useRef, useState } from 'react';
import Home from './homePage/HomePage';
import './Main.css';
import ExperiencePage from './experiencePage/ExperiencePage';
import AboutPage from './aboutPage/AboutPage';
import ContactPage from './contactPage/ContactPage';
import gsap from 'gsap';
import { MathUtils } from 'three';
import { useFrame } from '@react-three/fiber';

const Main = () => {
  const [mouseXpercentage, setMouseXPercentage] = useState(0);
  const [mouseYpercentage, setMouseYPercentage] = useState(0);

  const gradientCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseXPercentage(event.pageX);
      setMouseYPercentage(event.pageY - window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // const animation = () => {
  //   if (gradientCircleRef.current) {
  //     console.log('here');
  //     gsap.to(gradientCircleRef.current.style, {
  //       left: `${mouseXpercentage}px`,
  //       top: `${mouseYpercentage}px`,
  //       duration: 0.1,
  //     });
  //   }
  //   window.requestAnimationFrame(animation);
  // };
  // window.requestAnimationFrame(animation);
  return (
    <>
      <div id="main-div" className="gradient-background">
        <div id="gradient-circle-container">
          <div
            ref={gradientCircleRef}
            id="gradient-circle"
            style={{
              left: `${mouseXpercentage}px`,
              top: `${mouseYpercentage}px`,
            }}
          ></div>
        </div>
        <Home />
        <AboutPage />
        <ExperiencePage />
        <ContactPage />
      </div>
    </>
  );
};

export default Main;

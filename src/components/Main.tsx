import React, { useEffect, useState } from 'react';
import Home from './homePage/HomePage';
import './Main.css';
import ExperiencePage from './experiencePage/ExperiencePage';
import AboutPage from './aboutPage/AboutPage';
import ContactPage from './contactPage/ContactPage';
import gsap from 'gsap';

const Main = () => {
  const [mouseXpercentage, setMouseXPercentage] = useState('0');
  const [mouseYpercentage, setMouseYPercentage] = useState('0');
  const mousePercentages = {
    x: 0,
    y: 0,
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const timeline = gsap.timeline();
      timeline.to(mousePercentages, {
        x: event.pageX,
        y: event.pageY,
        onUpdate: () => {
          setMouseXPercentage(mousePercentages.x + 'px');
          setMouseYPercentage(mousePercentages.y - window.scrollY + 'px');
        },
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="main-div" className="gradient-background">
        <div id="gradient-circle-container">
          <div
            id="gradient-circle"
            style={{
              left: mouseXpercentage,
              top: mouseYpercentage,
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

import React from 'react';
import { useLayoutEffect, useRef } from 'react';

import './SkillsPage.css';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import { skills } from './resources/data/skills';
import { gsap } from '../../config/gsap';
import { getRandom } from './Utils';
import sparkleIcon from './resources/images/sparkle-icon.png';

const SkillsPage = () => {
  const skillsRef = useRef();

  useLayoutEffect(() => {
    const skillsPageToAnimate = skillsRef.current;

    const context = gsap.context(() => {
      if (skillsPageToAnimate) {
        gsap.effects.mainRevealEffect(skillsPageToAnimate, {
          elementToAnimate: skillsPageToAnimate,
        });
      }
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div id="skills-div">
        <SectionSeperator hasIcon={false} name="02.1. SKILLS" />
        <div id="skills-layout" ref={skillsRef}>
          {skills.map((skill) => {
            const starTop = getRandom(0, 100) + '%';
            const starLeft = getRandom(0, 100) + '%';
            const starAnimationDelay = getRandom(10, 27) + 's';
            return (
              <div key={skill.name} className="skill-div">
                <div className="skill-img-container">
                  <img src={skill.image} className="skill-img" />
                  <img
                    className="sparkle"
                    style={{
                      top: starTop,
                      left: starLeft,
                      animationDelay: starAnimationDelay,
                    }}
                    src={sparkleIcon}
                  />
                </div>

                {skill.secondImage && (
                  <img src={skill.secondImage} className="skill-img second-skill-img" />
                )}
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillsPage;

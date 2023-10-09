import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import './ContactPage.css';
import SocialMediaLink from './socialMediaLink/SocialMediaLink';
import { gsap } from '../../config/gsap';
import RainbowAnimatedText from './rainboxAnimatedText/RainbowAnimatedText';
import { GeneralInformation } from '../../interfaces/GeneralInformation.interface';
import { SociaMediaInfo } from '../../interfaces/SociaMediaInfo.interface';

const ContactPage = () => {
  const contactRef = useRef(null);
  const horizontalBorderRef = useRef(null);
  const [isRainbowAnimationActive, setIsRainbowAnimationActive] = useState(false);

  const generalInformation: GeneralInformation[] = useMemo(
    () => [
      {
        title: 'Phone',
        text: '+370 616 04639',
      },
      {
        title: 'Email',
        text: 'doremis.lt@gmail.com',
      },
    ],
    [],
  );

  const socialMediaInfo: SociaMediaInfo[] = useMemo(
    () => [
      {
        linkHref: 'https://www.linkedin.com/in/domas-raila-54294b180/',
        name: 'LinkedIn',
      },
      {
        linkHref: 'https://github.com/Droniukas',
        name: 'GitHub',
      },
    ],
    [],
  );

  const startRainbowAnimation = (delay: number) => {
    setTimeout(() => {
      setIsRainbowAnimationActive(true);
    }, delay);
  };

  useLayoutEffect(() => {
    const horizontalBorderToAnimate = horizontalBorderRef.current;
    const contactPageToAnimate = contactRef.current;
    const customToggleActions = 'restart reverse restart reverse';

    const context = gsap.context(() => {
      if (contactPageToAnimate) {
        gsap.effects.mainRevealEffect(contactPageToAnimate, {
          elementToAnimate: contactPageToAnimate,
        });
      }

      if (horizontalBorderToAnimate) {
        gsap.from(horizontalBorderToAnimate, {
          duration: 0.55,
          ease: 'power.out',
          width: '0%',
          onStart: () => {
            startRainbowAnimation(550);
          },
          scrollTrigger: {
            trigger: horizontalBorderToAnimate,
            toggleActions: customToggleActions,
          },
        });
      }
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <SectionSeperator name="03. -- CONTACT" />
      <div id="contact">
        <div id="contact-div" ref={contactRef}>
          <div id="contact-page-left-side-div">Contact me</div>
          <div id="contact-page-right-side-div">
            <div id="contact-page-right-side-top-div">
              {`I'm excited to hear from you!`}
              <div className="horizontal-border" ref={horizontalBorderRef} />
            </div>
            <div id="contact-page-right-side-bottom-div">
              <div id="general-info-div">
                <div className="contact-page-bolded-info">GENERAL INFORMATION</div>
                {generalInformation.map((information) => {
                  return (
                    <div key={information.title} className="contact-info-child-div">
                      {information.title}
                      <div className="contact-page-bolded-info">
                        <RainbowAnimatedText
                          isAnimationActive={isRainbowAnimationActive}
                          text={information.text}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div id="social-media-div">
                <div className="contact-page-bolded-info" id="social-media-title">
                  SOCIAL MEDIA
                </div>
                <div className="contact-info-child-div">
                  {socialMediaInfo.map((info) => (
                    <SocialMediaLink
                      key={info.name}
                      linkHref={info.linkHref}
                      linkName={info.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

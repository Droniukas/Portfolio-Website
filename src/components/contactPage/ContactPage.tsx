import React, { useRef } from 'react';
import useFadeIn from '../../hooks/useFadeIn';
import SectionSeperator from '../sectionSeperator/SectionSeperator';
import './ContactPage.css';
import SocialMediaLink from './socialMediaLink/SocialMediaLink';

const ContactPage = () => {
  const contactRef = useRef(null);
  useFadeIn(contactRef);
  return (
    <>
      <SectionSeperator name="03. -- CONTACT" />
      <div id="contact-div" ref={contactRef}>
        <div id="contact-page-left-side-div">Contact me</div>
        <div id="contact-page-right-side-div">
          <div id="contact-page-right-side-top-div">
            It would be an honor to talk to you!
          </div>
          <div id="contact-page-right-side-bottom-div">
            <div id="general-info-div">
              <div className="contact-page-bolded-info">GENERAL INFORMATION</div>
              <div className="contact-info-child-div">
                Phone
                <div className="contact-page-bolded-info">+370 616 04639</div>
              </div>
              <div className="contact-info-child-div">
                Email
                <div className="contact-page-bolded-info">doremis.lt@gmail.com</div>
              </div>
            </div>
            <div id="social-media-div">
              <div className="contact-page-bolded-info" id="social-media-title">
                SOCIAL MEDIA
              </div>
              <div className="contact-info-child-div">
                <SocialMediaLink
                  linkHref={'https://www.linkedin.com/in/domas-raila-54294b180/'}
                  linkName={'LinkedIn'}
                />
                <SocialMediaLink
                  linkHref={'https://github.com/Droniukas'}
                  linkName={'GitHub'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
